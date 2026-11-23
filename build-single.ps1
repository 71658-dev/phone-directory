# 將 index.html 與其相依檔案打包成單一離線 HTML：分機查詢.html
# 只讀來源、只寫輸出。來源有修改後重跑即可。
$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
$utf8 = New-Object System.Text.UTF8Encoding($false)

function Read-Text($rel) { [System.IO.File]::ReadAllText((Join-Path $root $rel), $utf8) }
# 內嵌進 <script> 時避免提前結束標籤
function Esc-Script($s) { $s.Replace('</script', '<\/script').Replace('<!--', '<\!--') }
function Replace-Once($html, $old, $new, $label) {
  $i = $html.IndexOf($old)
  if ($i -lt 0) { throw "找不到要取代的片段：$label" }
  if ($html.IndexOf($old, $i + 1) -ge 0) { throw "片段出現多次：$label" }
  $html.Substring(0, $i) + $new + $html.Substring($i + $old.Length)
}

$html = Read-Text 'index.html'

# 1. 移除 CDN→本機對照表（React 改為預先內嵌）
$m = [regex]::Match($html, '<script>\s*window\.__resources = \{.*?\};\s*</script>\s*', 'Singleline')
if (-not $m.Success) { throw '找不到 window.__resources 區塊' }
$html = $html.Remove($m.Index, $m.Length)

# 2. support.js 前先放 React / ReactDOM（support.js 偵測到 window.React 就不再載入 CDN）
$react = Esc-Script (Read-Text 'vendor/react.production.min.js')
$reactDom = Esc-Script (Read-Text 'vendor/react-dom.production.min.js')
$support = Esc-Script (Read-Text 'support.js')
$css = Read-Text 'ios-kit.css'
$dsRel = Get-ChildItem (Join-Path $root '_ds') -Directory -Filter 'ios-27-ui-kit-*' | Select-Object -First 1
if (-not $dsRel) { throw '找不到 _ds/ios-27-ui-kit-*' }
$ds = Esc-Script (Read-Text ('_ds/' + $dsRel.Name + '/_ds_bundle.js'))
$ps = Esc-Script (Read-Text 'phone-search.js')
# 放進 <head> 而不是 <helmet>：helmet 內的內嵌文字會被執行期重新解析，會破壞程式碼。
# window.__resources = {} 讓 support.js 略過「重新 fetch 自己」的步驟（file:// 下會被 CORS 擋）。
$bundle = "<script>window.__resources = {};</script>`n<script>`n$react`n</script>`n<script>`n$reactDom`n</script>`n<style>`n$css`n</style>`n<script>`n$ds`n</script>`n<script>`n$ps`n</script>`n<script>`n$support`n</script>"
$html = Replace-Once $html '<script src="./support.js"></script>' $bundle 'support.js'

# 3. favicon → data URI
$svgBytes = [System.IO.File]::ReadAllBytes((Join-Path $root 'favicon.svg'))
$favicon = 'data:image/svg+xml;base64,' + [Convert]::ToBase64String($svgBytes)
$html = Replace-Once $html '<link rel="icon" type="image/svg+xml" href="favicon.svg">' "<link rel=`"icon`" type=`"image/svg+xml`" href=`"$favicon`">" 'favicon'

# 4. 移除 helmet 內已改為內嵌的外部參照
$html = Replace-Once $html '<link rel="stylesheet" href="ios-kit.css">' '' 'ios-kit.css'
$html = Replace-Once $html ('<script src="_ds/' + $dsRel.Name + '/_ds_bundle.js"></script>') '' '_ds_bundle.js'
$html = Replace-Once $html '<script src="phone-search.js"></script>' '' 'phone-search.js'

# 5. 確認沒有殘留的相對/外部資源參照
foreach ($pat in 'src="(?!data:)[^"]+"', 'href="(?!data:|#|mailto:|tel:)[^"]+"') {
  $left = [regex]::Matches($html, '<(?:script|link)\b[^>]*' + $pat) | ForEach-Object { $_.Value.Substring(0, [Math]::Min(120, $_.Value.Length)) }
  if ($left) { Write-Warning ("仍有外部參照：`n" + ($left -join "`n")) }
}

$out = Join-Path $root '分機查詢.html'
[System.IO.File]::WriteAllText($out, $html, $utf8)
'{0}  ({1:N0} KB)' -f $out, ((Get-Item -LiteralPath $out).Length / 1KB)
