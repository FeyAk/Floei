# ◈ Floei

A lightweight, browser-based **EPK diagram editor** (Ereignisgesteuerte Prozesskette / Event-driven Process Chain) — built with vanilla JavaScript and the HTML5 Canvas API. No frameworks, no build step, no dependencies. One file, works offline.

**[▶ Try it live](https://feyak.github.io/floei/)**

## Why

EPK is a core process modeling notation in German business informatics (and a fixed part of the IHK Fachinformatiker exams). Existing online tools are either bloated, paywalled, or awkward to use — so I built my own.

## Features

- **⚡ Auto-EPK generator** with two modes:
  - *Schnell-Modus* — type process steps line by line (`E:`/`F:`/`O:`/`D:`/`I:` prefixes or plain lines), get a linear chain instantly, fully offline
  - *KI-Modus* — paste a full German exam-style process description and Claude (Anthropic API, bring your own key) models the complete EPK including **XOR branches and loops**; a built-in layered graph layout engine (cycle detection via DFS, longest-path layering, parent-averaged column ordering) arranges everything automatically
- **Light & dark theme** — toggle in the top bar, preference persists
- **All standard EPK elements** — Ereignis, Funktion, Org.-Einheit, Informationsobjekt, Dokument, Prozesspfad
- **Logical connectors** — AND (∧), OR (∨), XOR
- **Drag & drop** elements from the sidebar onto an infinite canvas
- **Connections with arrows** — edge-to-edge routing, live preview while connecting, click an arrow to select and delete it
- **Inline editing** — double-click any element to rename it
- **Pan & zoom** — scroll to zoom (cursor-anchored), drag empty canvas or use arrow keys to pan; arrow keys move the selected element instead when one is selected
- **Autosave** — diagram persists in localStorage across browser sessions
- **Export** — PNG (2× resolution, auto-cropped to content), SVG (true vector shapes), JSON
- **Import** — reload a saved JSON diagram
- **Undo** (Ctrl+Z), clone elements (Alt+drag), keyboard shortcuts throughout
- **Touch support** — works on tablets

## Usage

No installation. Either use the [live version](https://feyak.github.io/floei/) or download `index.html` and open it in any modern browser.

| Action | How |
|---|---|
| Add element | Drag from sidebar (or click, on touch devices) |
| Auto-generate | **⚡ Auto-EPK** → type steps line by line → Generieren |
| Connect | Click **⤳ Verbinden**, then click two elements in sequence |
| Rename | Double-click element, or use the properties panel |
| Delete | Select element/arrow → `Del` or 🗑 button |
| Clone | `Alt` + drag an element |
| Undo | `Ctrl` + `Z` |
| Zoom | Mouse wheel, or +/− buttons |
| Pan | Drag empty canvas, or arrow keys (`Shift` = faster) |
| Move element | Select it → arrow keys (`Shift` = fine, 1px) |
| Save manually | `Ctrl` + `S` (autosave is always on) |

## Tech

- Pure HTML / CSS / JavaScript — zero dependencies
- HTML5 Canvas 2D rendering with devicePixelRatio support
- Pointer Events API for unified mouse/touch handling
- SVG export generates real vector shapes (hexagons, ellipses, document curves), not rasterized screenshots

## Roadmap

- [ ] Multiple diagram tabs
- [ ] BPMN element set
- [ ] Snap-to-grid and auto-alignment

## License

[MIT](LICENSE) — free to use, modify, and share.

---

*Built by [Fey](https://github.com/FeyAk) during her Fachinformatikerin Daten- und Prozessanalyse training.*
