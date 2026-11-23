# iOS 27 UI Kit — component library

A code implementation of the **Apple iOS 27 UI Kit** Sketch library, built as flat,
self-contained preview pages so it can be pushed to a Claude Design design-system
project with `/design-sync`.

Source library: <https://www.sketch.com/s/04c24d8b-38fb-4afb-8836-36617e022f02>
(1569 symbols · 105 text styles · 42 layer styles · 107 color variables)

Every colour value in `src/_tokens.css` was transcribed from the kit's Color Variables
panel, and every component dimension was taken from the kit's own symbol frames — the
comments in `_components.css` name the symbol each measurement came from.

## Layout

```
src/
  _tokens.css          all 107 colour variables + the SF Pro type ramp + control metrics
  _components.css      the component layer — consumes tokens only, never a raw hex
  _preview.css         page chrome for the specimen pages (not part of the library)
  *.part.html          one specimen page per component group
build.sh               inlines the three stylesheets into each part → flat preview pages
foundations/*.html     built pages  (colours, type ramp)
components/*.html      built pages  (controls, layout, navigation, overlays, feedback)
```

`foundations/` and `components/` are **build output** — edit `src/`, then run the build.

## Build

```bash
bash build.sh
```

Each `src/*.part.html` declares its own card header on line 1:

```html
<!-- @dsCard group="Controls" name="Buttons" subtitle="…" out="components/button.html" -->
```

The build strips `out=` (using it as the destination path), keeps the rest as line 1 of
the built file — that first-line comment is what the Design System pane indexes — and
inlines the CSS so each page renders standalone with no external requests.

## Preview locally

```bash
python -m http.server 8731 --directory .
```

## Push to Claude Design

```
/design-sync
```

Point it at a project of type `PROJECT_TYPE_DESIGN_SYSTEM` and sync
`foundations/**` and `components/**`. Because the `@dsCard` markers are already in
place, no explicit asset registration is needed — the pane builds its card index from
them. The cards land in five groups: **Foundations**, **Controls**, **Layout**,
**Navigation**, **Feedback**.

## What's covered

| Card | Group | From the kit |
| --- | --- | --- |
| Color variables | Foundations | Backgrounds, Backgrounds Grouped, Fills, Grays, Labels, Labels – Liquid Glass, Separators, System Colors |
| Type ramp | Foundations | 11 text styles × Default / Bold / Italic / Bold Italic |
| Buttons | Controls | Bordered Prominent, Bordered, Borderless, Glass × Default / Destructive × 3 sizes × Idle / Pressed / Disabled |
| Toggle | Controls | On / Off × Idle / Pressed / Disabled — 64 × 28 |
| Segmented control | Controls | Large 370 × 48, Small 370 × 32; segment Unselected / Touch / Selected |
| Text field | Controls | Default, Placeholder, Empty Typing, Typing — 288 × 52 |
| Slider & stepper | Controls | Glyphs / No Glyphs × Min / Mid / Max × Enabled / Disabled; stepper 92 × 32 |
| Lists | Layout | Grouped table view, headers, 52/68pt rows, swipe actions, list buttons, footer |
| Tab bar | Navigation | 2–5 tabs, with / without search, prominent tab |
| Alert | Overlays | Default, Buttons Stacked, Input Field ×1 / ×2 — 300 wide |
| Progress indicators | Feedback | Spinners 14 / 20 / 35, spinner with label, table view row |

Not yet ported from the kit: Action Sheets, Activity View, Color Pickers, Date and Time
Pickers, Keyboard, Menus, Page Control, Sheets, Sidebar, Status Bars, Toolbars, Windows.
Adding one is a new `src/*.part.html` plus its classes in `_components.css`.

## Theming

Every component resolves its colours through a theme scope:

```html
<div class="ios" data-theme="light"> … </div>
<div class="ios" data-theme="dark">  … </div>
```

Both themes can appear on the same page — that is how each specimen shows Light and
Dark side by side. Dark also exposes the kit's *Elevated* background ramp as
`--ios-bg-elevated-primary` / `-secondary` / `-tertiary`.
