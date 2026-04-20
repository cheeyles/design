# AuctionsPlus Design System — Angular

The single source of truth for the AuctionsPlus UI component library.

Built in Angular 17+. The doc site **is** the production shell — every component you see running here is the same component you push into the production dashboard app.

---

## Goal

Front-end developers come to this site to:

1. **See** a UI component or pattern rendered correctly
2. **Inspect** the Angular HTML template that produces it
3. **Copy** that HTML directly into their production feature

There is no gap between the demo and production. The same `ap-button`, `ap-sidenav-item`, `ap-top-navigation` components that render in this doc site are the ones that ship.

---

## Running locally

```bash
npm install
ng serve
```

Opens at `http://localhost:4200`

The React design system (visual reference during build) runs at `http://localhost:5173/design/`

---

## Project structure

```
src/
  app/
    components/
      ap-*/          ← Production Angular components (ap- prefix)
      ds-*/          ← Doc site shell components (ds- prefix, not for production use)
    app.ts           ← Root component + doc site shell wiring
    app.html         ← Doc site template
  tokens/
    primitives.css   ← Raw values — never reference in components
    semantics.css    ← Semantic aliases — always use these
  styles.css         ← Global styles, fonts, icon utilities, Tailwind directives
tailwind.config.js   ← Token bridge — maps Tailwind classes to token values
CLAUDE.md            ← AI build guide
TOKENS.md            ← Token strategy and mapping reference
```

---

## Component prefixes

| Prefix | Purpose |
|--------|---------|
| `ap-`  | Production components — used in the dashboard app and documented here |
| `ds-`  | Doc site infrastructure only — not for production use |

---

## Token system

All visual values flow from `primitives.css` → `semantics.css` → `tailwind.config.js`.

No component uses hardcoded hex values or Tailwind default colour classes (e.g. `blue-500`).

See `TOKENS.md` for the full strategy.

---

## Adding a component

See `CLAUDE.md` for the step-by-step build workflow.
