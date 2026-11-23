// Search matching, CSV and synonym defaults — ported 1:1 from 分機/index.html.
// Read the reasoning comments in the original before changing any constraint here.
(function () {
const DEPT_MAP = {
  '局長室': '局長室', '行政科': '行政科', '醫政科': '醫政科',
  '疾管科': '疾管科', '食品藥物科': '食藥科', '國健科': '國健科',
  '企劃科': '企劃科', '人事室': '人事室', '檢驗科': '檢驗科',
  '心健科': '心健科', '新竹市長期照顧管理中心': '長照中心',
};
const DEPT_ORDER = ['局長室', '行政科', '醫政科', '疾管科', '食品藥物科',
  '國健科', '企劃科', '人事室', '檢驗科', '心健科', '新竹市長期照顧管理中心'];
const CSV_HEADERS = ['ext', 'name', 'id', 'note', 'task', 'dept', 'role'];

// ext/id excluded from loose layers: a subsequence over digits poisons extension lookups.
const LOOSE_FIELDS = ['name', 'task', 'dept', 'role'];

const DEFAULT_SYNONYMS = {};

let SYNONYMS = { ...DEFAULT_SYNONYMS };
function setSynonyms(map) { SYNONYMS = map; }

const SUBSEQ_MAX_SPAN = 6;
const CJK_RE = /[\u3400-\u9fff\uf900-\ufaff]/;
const CJK_ONLY_RE = /^[\u3400-\u9fff\uf900-\ufaff]+$/;

function tokenize(q) { return q.trim().toLowerCase().split(/[\s\u3000]+/).filter(Boolean); }

function matchExact(value, token) {
  if (!value || !token) return null;
  const hay = value.toLowerCase();
  if (hay.length !== value.length) return null;
  const ranges = [];
  let at = hay.indexOf(token);
  while (at !== -1) { ranges.push([at, at + token.length]); at = hay.indexOf(token, at + token.length); }
  return ranges.length ? ranges : null;
}

function matchLoose(value, token) {
  if (!value) return null;
  const hay = value.toLowerCase();
  if (hay.length !== value.length) return null;
  const ranges = [];
  let from = 0;
  for (const ch of token) {
    const at = hay.indexOf(ch, from);
    if (at === -1) return null;
    ranges.push([at, at + ch.length]);
    from = at + ch.length;
  }
  const span = ranges[ranges.length - 1][1] - ranges[0][0];
  return span > SUBSEQ_MAX_SPAN ? null : ranges;
}

function canLoose(t) { return t.length >= 2 && CJK_RE.test(t); }
function canExpand(t) { return t.length >= 3 && CJK_RE.test(t); }

// Non-adjacent pairs only — an adjacent pair is an ordinary word, not a contraction.
function expansionProbes(token) {
  const slices = [], pairs = [];
  for (let len = token.length - 1; len >= 3; len--)
    for (let i = 0; i + len <= token.length; i++) {
      const s = token.slice(i, i + len);
      if (CJK_ONLY_RE.test(s)) slices.push(s);
    }
  for (let i = 0; i < token.length; i++)
    for (let j = i + 2; j < token.length; j++) {
      if (j - i + 1 > SUBSEQ_MAX_SPAN) break;
      const p = token[i] + token[j];
      if (CJK_ONLY_RE.test(p)) pairs.push(p);
    }
  return { slices: [...new Set(slices)], pairs: [...new Set(pairs)] };
}

// Slices may not match a department (照顧管理 ⊂ 長期照顧管理中心).
const DUTY_FIELDS = ['name', 'task', 'role'];
const NO_EXPANSIONS = new Map();

// One reading per token, decided across the whole candidate set. Never per row.
function resolveExpansions(tokens, records) {
  const chosen = new Map();
  for (const token of tokens) {
    if (!canExpand(token)) continue;
    if (records.some(r => matchRecord(r, [token], NO_EXPANSIONS))) continue;
    const { slices, pairs } = expansionProbes(token);
    const found = firstProbeThatHits(slices, true, records) || firstProbeThatHits(pairs, false, records);
    if (found) chosen.set(token, found);
  }
  return chosen;
}
function expansionTargets(record, dutyOnly) {
  return searchTargets(record).filter(t => t.loose && (!dutyOnly || DUTY_FIELDS.includes(t.field)));
}
function firstProbeThatHits(probes, dutyOnly, records) {
  for (const text of probes) {
    if (records.some(r => expansionTargets(r, dutyOnly).some(t => matchExact(t.value, text))))
      return { text, dutyOnly };
  }
  return null;
}

function searchTargets(record) {
  const deptLabel = DEPT_MAP[record.dept] || record.dept || '';
  const targets = CSV_HEADERS.map(field => ({
    field, value: field === 'dept' ? deptLabel : (record[field] || ''), loose: LOOSE_FIELDS.includes(field),
  }));
  if (record.dept && record.dept !== deptLabel) targets.push({ field: null, value: record.dept, loose: true });
  return targets;
}
function addRanges(by, field, ranges) { if (field) (by[field] || (by[field] = [])).push(...ranges); }

function matchRecord(record, tokens, expansions) {
  const targets = searchTargets(record);
  const rangesByField = {};
  let exact = true;
  for (const token of tokens) {
    // Own keys only — 'constructor' / '__proto__' would otherwise hit Object.prototype.
    const own = Object.hasOwn(SYNONYMS, token) ? SYNONYMS[token] : null;
    const aliases = Array.isArray(own) ? own : [];
    let hitExact = false, hitAlias = false, hitLoose = false, hitWide = false;
    for (const t of targets) { const f = matchExact(t.value, token); if (f) { hitExact = true; addRanges(rangesByField, t.field, f); } }
    for (const alias of aliases) for (const t of targets) {
      const f = matchExact(t.value, alias.toLowerCase());
      if (f) { hitAlias = true; addRanges(rangesByField, t.field, f); }
    }
    if (!hitExact && !hitAlias && canLoose(token)) for (const t of targets) {
      if (!t.loose) continue;
      const f = matchLoose(t.value, token);
      if (f) { hitLoose = true; addRanges(rangesByField, t.field, f); }
    }
    if (!hitExact && !hitAlias && !hitLoose && expansions) {
      const probe = expansions.get(token);
      if (probe) for (const t of targets) {
        if (!t.loose) continue;
        if (probe.dutyOnly && !DUTY_FIELDS.includes(t.field)) continue;
        const f = matchExact(t.value, probe.text);
        if (f) { hitWide = true; addRanges(rangesByField, t.field, f); }
      }
    }
    if (!hitExact && !hitAlias && !hitLoose && !hitWide) return null;
    if (!hitExact) exact = false;
  }
  return { exact, rangesByField };
}

function mergeRanges(ranges, limit) {
  if (!ranges || !ranges.length) return [];
  const sorted = ranges.map(([s, e]) => [Math.max(0, s), Math.min(limit, e)])
    .filter(([s, e]) => e > s).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const out = [];
  for (const [s, e] of sorted) {
    const last = out[out.length - 1];
    if (last && s <= last[1]) last[1] = Math.max(last[1], e); else out.push([s, e]);
  }
  return out;
}

// → [{t, m, p}] text segments; m = marked, p = plain. Rendered as text, never HTML.
function segments(text, ranges) {
  const v = text == null ? '' : String(text);
  const merged = mergeRanges(ranges, v.length);
  if (!merged.length) return v ? [{ t: v, m: false, p: true }] : [];
  const out = [];
  let from = 0;
  for (const [s, e] of merged) {
    if (s > from) out.push({ t: v.slice(from, s), m: false, p: true });
    out.push({ t: v.slice(s, e), m: true, p: false });
    from = e;
  }
  if (from < v.length) out.push({ t: v.slice(from), m: false, p: true });
  return out;
}

// Character-level so a quoted field may hold commas, newlines and "" escapes.
function parseCSVRecords(raw) {
  const text = raw.replace(/^\uFEFF/, '');
  const records = [];
  let row = [], cur = '', inQ = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQ) {
      if (ch !== '"') cur += ch;
      else if (text[i + 1] === '"') { cur += '"'; i++; }
      else inQ = false;
    } else if (ch === '"') inQ = true;
    else if (ch === ',') { row.push(cur); cur = ''; }
    else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      row.push(cur); records.push(row); row = []; cur = '';
    } else cur += ch;
  }
  if (cur || row.length) { row.push(cur); records.push(row); }
  return records.filter(r => r.some(f => f.trim()));
}
// Undo sanitizeCSVField's formula guard, or every export/import round trip stacks another quote.
function unsanitizeCSVField(s) { return /^'[=+\-@\t\r]/.test(s) ? s.slice(1) : s; }
function parseCSV(raw) { return parseRosterCSV(raw).rows; }
function parseRosterCSV(raw) {
  if (!raw || typeof raw !== 'string') return { rows: [], error: '\u6A94\u6848\u662F\u7A7A\u7684\u3002' };
  const records = parseCSVRecords(raw);
  if (records.length < 2) return { rows: [], error: 'CSV \u6A94\u6848\u4E2D\u6C92\u6709\u8CC7\u6599\u5217\u3002' };
  const headers = records[0].map(h => h.trim());
  if (!headers.includes('ext') || !headers.includes('name'))
    return { rows: [], error: `\u7B2C\u4E00\u5217\u5FC5\u9808\u5305\u542B ext\u3001name \u6B04\u4F4D\uFF08\u76EE\u524D\u662F\uFF1A${headers.join('\u3001').slice(0, 80)}\uFF09\u3002\u5982\u679C\u624B\u4E0A\u662F Excel \u5206\u6A5F\u8868\uFF0C\u8ACB\u76F4\u63A5\u532F\u5165 .xlsx \u6A94\u3002` };
  const rows = records.slice(1).map(fields => {
    const obj = {};
    CSV_HEADERS.forEach(h => {
      const i = headers.indexOf(h);
      obj[h] = i < 0 ? '' : unsanitizeCSVField((fields[i] || '').trim());
    });
    return obj;
  }).filter(r => r.name || r.ext);
  return rows.length ? { rows, error: null } : { rows, error: 'CSV \u6A94\u6848\u4E2D\u672A\u767C\u73FE\u6709\u6548\u7684\u5206\u6A5F\u8CC7\u6599\u3002' };
}
function sanitizeCSVField(val) {
  if (val === null || val === undefined) return '';
  let s = String(val).trim();
  if (/^[=\+\-\@\t\r]/.test(s)) s = "'" + s;
  if (s.includes(',') || s.includes('"') || s.includes('\n')) s = `"${s.replace(/"/g, '""')}"`;
  return s;
}
function buildCSV(data) {
  return [CSV_HEADERS.join(','), ...data.map(it => CSV_HEADERS.map(h => sanitizeCSVField(it[h])).join(','))].join('\n');
}

// Pins and recents are keyed per person, not per ext: exts are shared (two people on one
// desk line) and get reassigned, so an ext key pins both or follows the desk to a new owner.
function personKey(r) { return r.id ? 'id:' + r.id : 'n:' + (r.name || '') + '|' + (r.ext || ''); }

const DIFF_FIELDS = ['ext', 'name', 'id', 'dept', 'role', 'note', 'task'];
// Match by 工號 first, then by name (工號 can be missing or corrected), preferring the same ext.
// keep: fields the incoming side never overwrites on a matched row (xlsx has no task text and
// its note is just the section name). keepBlank: an empty incoming value keeps the current one.
function diffRoster(current, incoming, { keep = [], keepBlank = [] } = {}) {
  const index = (f) => {
    const m = new Map();
    current.forEach((r, i) => { if (r[f]) (m.get(r[f]) || m.set(r[f], []).get(r[f])).push(i); });
    return m;
  };
  const byId = index('id'), byName = index('name');
  const used = new Set();
  const free = (list) => (list || []).filter(i => !used.has(i));
  const merged = [], added = [], changed = [], keyMap = {};
  for (const x of incoming) {
    let cands = x.id ? free(byId.get(x.id)) : [];
    if (!cands.length) cands = free(byName.get(x.name));
    const i = cands.find(c => current[c].ext === x.ext) ?? cands[0];
    if (i === undefined) {
      const rec = {};
      CSV_HEADERS.forEach(h => rec[h] = x[h] || '');
      merged.push(rec); added.push(rec);
      continue;
    }
    used.add(i);
    const o = current[i], rec = { ...o }, diffs = [];
    for (const f of DIFF_FIELDS) {
      const v = x[f] || '';
      if (keep.includes(f) || (!v && keepBlank.includes(f))) continue;
      if ((o[f] || '') !== v) { diffs.push({ field: f, from: o[f] || '', to: v }); rec[f] = v; }
    }
    if (diffs.length) changed.push({ record: rec, diffs });
    if (personKey(o) !== personKey(rec)) keyMap[personKey(o)] = personKey(rec);
    merged.push(rec);
  }
  const removed = current.filter((_, i) => !used.has(i));
  return { merged, added, removed, changed, keyMap };
}

// ── xlsx: just enough of the zip + SpreadsheetML formats to read one sheet's cell values.
async function readZip(buf) {
  const dv = new DataView(buf), u8 = new Uint8Array(buf), dec = new TextDecoder();
  let eocd = -1;
  for (let i = u8.length - 22; i >= Math.max(0, u8.length - 65557); i--)
    if (dv.getUint32(i, true) === 0x06054b50) { eocd = i; break; }
  if (eocd < 0) throw new Error('這不是有效的 .xlsx 檔案。');
  const files = new Map();
  let p = dv.getUint32(eocd + 16, true);
  for (let n = dv.getUint16(eocd + 10, true); n > 0 && dv.getUint32(p, true) === 0x02014b50; n--) {
    const nlen = dv.getUint16(p + 28, true);
    files.set(dec.decode(u8.subarray(p + 46, p + 46 + nlen)), {
      method: dv.getUint16(p + 10, true), size: dv.getUint32(p + 20, true), off: dv.getUint32(p + 42, true),
    });
    p += 46 + nlen + dv.getUint16(p + 30, true) + dv.getUint16(p + 32, true);
  }
  return async (name) => {
    const f = files.get(name);
    if (!f) return null;
    const start = f.off + 30 + dv.getUint16(f.off + 26, true) + dv.getUint16(f.off + 28, true);
    const data = u8.subarray(start, start + f.size);
    if (f.method === 0) return dec.decode(data);
    if (f.method !== 8) throw new Error('不支援的壓縮格式。');
    if (typeof DecompressionStream === 'undefined') throw new Error('這個瀏覽器太舊，無法讀取 .xlsx，請改用新版 Chrome 或 Edge。');
    return new Response(new Blob([data]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).text();
  };
}
function xmlDoc(text) { return new DOMParser().parseFromString(text, 'application/xml'); }
// Concatenates rich-text runs but skips <rPh> phonetic hints, which also hold <t>.
function cellText(el) {
  let s = '';
  for (const t of el.getElementsByTagName('t')) if (!t.closest('rPh')) s += t.textContent;
  return s;
}
function colNumber(ref) {
  let n = 0;
  for (const ch of ref.match(/^[A-Z]+/)[0]) n = n * 26 + ch.charCodeAt(0) - 64;
  return n;
}
async function readFirstSheet(buf) {
  const read = await readZip(buf);
  const wb = await read('xl/workbook.xml');
  if (!wb) throw new Error('這不是有效的 .xlsx 檔案。');
  const sheet = xmlDoc(wb).getElementsByTagName('sheet')[0];
  const rid = sheet.getAttribute('r:id');
  const rels = xmlDoc(await read('xl/_rels/workbook.xml.rels'));
  const target = [...rels.getElementsByTagName('Relationship')].find(r => r.getAttribute('Id') === rid).getAttribute('Target');
  const path = target.startsWith('/') ? target.slice(1) : 'xl/' + target;
  const ssText = await read('xl/sharedStrings.xml');
  const shared = ssText ? [...xmlDoc(ssText).getElementsByTagName('si')].map(cellText) : [];
  const grid = new Map();
  for (const c of xmlDoc(await read(path)).getElementsByTagName('c')) {
    const ref = c.getAttribute('r'), t = c.getAttribute('t');
    const v = c.getElementsByTagName('v')[0];
    let val = t === 'inlineStr' ? cellText(c) : v ? v.textContent : '';
    if (t === 's') val = shared[+val] || '';
    // Numeric cells may be stored as "230.0" or "7.1705E4"; exts and 工號 need the integer text.
    else if ((!t || t === 'n') && val && Number.isInteger(+val)) val = String(+val);
    if (!val) continue;
    const r = +ref.match(/\d+$/)[0];
    (grid.get(r) || grid.set(r, new Map()).get(r)).set(colNumber(ref), val.trim());
  }
  return { name: sheet.getAttribute('name'), cell: (r, c) => (grid.get(r) && grid.get(r).get(c)) || '', maxRow: Math.max(0, ...grid.keys()) };
}

// Layout of 衛生局暨長照中心電話分機一覽表: three side-by-side blocks, each with two
// (分機, 姓名, 工號) column triples plus a free-text column holding lines and extra people
// written as 姓名+工號 under their ext. If a new edition reflows its columns, fix these.
const XLSX_BLOCKS = [
  { head: 1, triples: [[1, 2, 3], [4, 5, 6]], inline: 7 },
  { head: 8, triples: [[8, 9, 10], [11, 12, 13]], inline: 14 },
  { head: 15, triples: [[15, 16, 17], [18, 19, 20]], inline: 21 },
];
const XLSX_SECTIONS = [ // header keyword → [note, dept]
  ['醫政', ['醫政科', '醫政科']], ['疾病管制', ['疾病管制科', '疾管科']],
  ['長期照顧', ['長照中心', '新竹市長期照顧管理中心']], ['食品藥物', ['食品藥物科', '食品藥物科']],
  ['局長室', ['局長室', '局長室']], ['行政科', ['行政科', '行政科']], ['國民健康', ['國民健康科', '國健科']],
  ['企劃', ['企劃科', '企劃科']], ['人事', ['人事/政風/會計', '人事室']], ['檢驗', ['檢驗科', '檢驗科']],
  ['心理健康', ['心理健康科', '心健科']],
];
const EXT_RE = /^(\d{3,4})(?:\((.+)\))?$/;
const INLINE_PERSON_RE = /^(\D+?)\s*(\d{5})$/;

async function parseRosterXlsx(buf) {
  const sh = await readFirstSheet(buf);
  const rows = [], seen = new Set(), deptInfo = {};
  const info = (dept, floor) => deptInfo[dept] || (deptInfo[dept] = { floor, lines: [] });
  const add = (ext, name, id, sec) => {
    name = name.replace(/\s+/g, '');
    const m = ext.match(EXT_RE);
    if (!name || !m) return;
    const k = ext + '|' + name + '|' + id;
    if (seen.has(k)) return;
    seen.add(k);
    rows.push({ ext, name, id: /^\d+$/.test(id) ? id : '', note: sec.note, task: '', dept: sec.dept, role: m[2] || '' });
  };
  for (const b of XLSX_BLOCKS) {
    let sec = null, skipInline = false;
    for (let r = 2; r <= sh.maxRow; r++) {
      const h = sh.cell(r, b.head);
      if (h.includes('樓')) {
        const hit = XLSX_SECTIONS.find(([k]) => h.includes(k));
        const label = h.replace(/^\s*\d+樓\s*/, '').trim();
        const [note, dept] = hit ? hit[1] : [label, label];
        const floor = (h.match(/\d+樓/) || [''])[0];
        sec = { note, dept, floor };
        info(dept, floor);
        skipInline = false;
        continue;
      }
      if (!sec) continue;
      for (const [e, n, i] of b.triples) {
        const ext = sh.cell(r, e), name = sh.cell(r, n);
        if (EXT_RE.test(ext)) add(ext, name, sh.cell(r, i), sec);
        else if (ext && ext !== '分機' && /\d/.test(ext) && !name) info(sec.dept, sec.floor).lines.push(ext);
      }
      if (skipInline) { skipInline = false; continue; }
      const v = sh.cell(r, b.inline), above = sh.cell(r - 1, b.inline), below = sh.cell(r + 1, b.inline);
      const pm = v.match(INLINE_PERSON_RE);
      if (pm && /^\d{3}$/.test(above)) add(above, pm[1], pm[2], sec);
      else if (/^\d{3}$/.test(v) && INLINE_PERSON_RE.test(below)) { /* ext of the person on the next row */ }
      // A bare label ("食品專線") names the number written under it.
      else if (v && !/\d/.test(v) && /\d/.test(below)) { info(sec.dept, sec.floor).lines.push(v + ' ' + below); skipInline = true; }
      else if (v && /\d{4,}/.test(v)) info(sec.dept, sec.floor).lines.push(v);
    }
  }
  // Title row: "衛生局…一覽表   (10樓 服務台：140、141)   11樓 會議室 : 145   12樓警衛:571"
  const general = sh.cell(1, 1).split(/\s{3,}/).slice(1).map(s => s.replace(/[()（）]/g, '').trim()).filter(s => /\d/.test(s));
  if (!rows.length) return { rows, deptInfo, general, sheet: sh.name, error: `工作表「${sh.name}」裡找不到分機資料，表格版面可能改了。` };
  return { rows, deptInfo, general, sheet: sh.name, error: null };
}

// Fictitious preview roster — no real people, extensions or staff numbers.
const DEMO_DATA = [
  { ext: '101', name: '王小明', id: '00001', note: '', task: '綜理局務', dept: '局長室', role: '局長' },
  { ext: '120', name: '李小華', id: '00002', note: '', task: '公文收發、財產管理', dept: '行政科', role: '' },
  { ext: '201', name: '張大同', id: '00003', note: '', task: '醫政科綜理', dept: '醫政科', role: '科長' },
  { ext: '205', name: '林美玲', id: '00004', note: '', task: 'IC/醫事機構卡申請、支援報備', dept: '醫政科', role: '' },
  { ext: '207', name: '陳志明', id: '00005', note: '', task: '醫糾調處、緊急救護', dept: '醫政科', role: '' },
  { ext: '209', name: '黃雅婷', id: '00006', note: '', task: '產家、執業異動', dept: '醫政科', role: '' },
  { ext: '301', name: '吳建國', id: '00007', note: '', task: '疫苗接種、流感防治', dept: '疾管科', role: '' },
  { ext: '305', name: '劉淑芬', id: '00008', note: '', task: 'HIV、性病防治', dept: '疾管科', role: '' },
  { ext: '401', name: '蔡家豪', id: '00009', note: '', task: '食品衛生講習、餐飲評核', dept: '食品藥物科', role: '' },
  { ext: '405', name: '楊佩君', id: '00010', note: '', task: '化妝品、藥物廣告監控', dept: '食品藥物科', role: '' },
  { ext: '501', name: '許文傑', id: '00011', note: '', task: '幼兒專責醫師、兒童停車', dept: '國健科', role: '' },
  { ext: '505', name: '鄭雅雯', id: '00012', note: '', task: '菸害防制、戒菸', dept: '國健科', role: '' },
  { ext: '601', name: '謝宗翰', id: '00013', note: '', task: '毒品防制、藥癮', dept: '心健科', role: '督導' },
  { ext: '603', name: '郭怡萱', id: '00014', note: '', task: '心衛社工、自殺關懷員', dept: '心健科', role: '' },
  { ext: '701', name: '洪子涵', id: '00015', note: '', task: '輔具、交通接送', dept: '新竹市長期照顧管理中心', role: '照專' },
  { ext: '703', name: '曾俊宏', id: '00016', note: '', task: '住宿式機構補助、外籍看護', dept: '新竹市長期照顧管理中心', role: '照專' },
];

window.PhoneSearch = {
  DEPT_MAP, DEPT_ORDER, CSV_HEADERS, DEFAULT_SYNONYMS, DEMO_DATA, setSynonyms,
  tokenize, resolveExpansions, matchRecord, segments, parseCSV, parseRosterCSV, buildCSV,
  personKey, diffRoster, parseRosterXlsx,
};
})();
