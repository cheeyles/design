# CLAUDE.md — AuctionsPlus Design System Angular

AI build guide. Read this before writing a single line of code.

---

## What this project is

An Angular component library and doc site for AuctionsPlus. Every `ap-` component visible at `localhost:4200` is a reusable design system component. The doc site showcases all components — variants, sizes, and states.

---

## Before building anything — read these files

| File | Read when |
|---|---|
| `TOKENS.md` | Always — before writing any style value |
| `REFERENCE.md` | Always — component inventory, what's already built |
| `DOC-PAGES.md` | Always when building a component or pattern doc page |
| React source `/Users/ceyles/Desktop/design-system/src/components/` | Always — spacing, styling, and visual values |

**Do not guess at token names or visual behaviour. Read first.**

---

## Single source rule — MANDATORY

Every component is built from one source for styling and one source for structure.

### Structure — general Angular HTML

Use standard Angular patterns:
- Semantic HTML elements (`<button>`, `<a>`, `<input>`, `<nav>`, etc.)
- `@Input()` names derived from the React prop names (same or camelCase equivalent)
- Named content slots (`<ng-content select="[slotName]" />`) where content projection is needed
- No production HTML exports. No Downloads folder.

### Styling — React source code

The React design system at `/Users/ceyles/Desktop/design-system/src/components/` defines every visual value:

- Every spacing value — padding, margin, gap
- Every colour token used
- Every shadow, transition, border-radius
- Typography — font size, weight, line height
- All visual states — hover, active, disabled, selected

**Read the React `.jsx` source file before writing a single CSS rule.**

```
React source path:
  /Users/ceyles/Desktop/design-system/src/components/{category}/{ComponentName}/{ComponentName}.jsx
```

Map every React inline style value to its semantic token equivalent:

```
React inline style               →   Angular component CSS
─────────────────────────────────────────────────────────────
var(--spacing-sm)                →   var(--spacing-sm)
var(--color-bg-dark)             →   bg-brand-dark (Tailwind)
var(--shadow-soft)               →   var(--shadow-soft)
var(--radius-md)                 →   rounded-md (Tailwind)
var(--type-size-label-md)        →   text-label-md (Tailwind)
```

---

## Token strategy — non-negotiable

Tokens are the single source of truth for all visual values. See `TOKENS.md` for the full system.

```
primitives.css  →  semantics.css  →  tailwind.config.js  →  component
    raw values      semantic aliases     Tailwind bridge       uses either
```

In templates — use Tailwind for layout structure and token-backed colours only:
```html
<!-- ✅ CORRECT — layout + colour only in template -->
<div class="bg-brand-dark text-white h-14 flex items-center">

<!-- ❌ WRONG — spacing class in template -->
<div class="bg-brand-dark text-white h-14 flex items-center px-4">

<!-- ❌ WRONG — hardcoded value -->
<div style="background: #002341">
```

In component CSS — all spacing and non-Tailwind values via CSS tokens:
```css
/* ✅ CORRECT */
.nav-bar {
  padding: var(--spacing-sm) var(--spacing-md);
  box-shadow: var(--shadow-soft);
  transition: var(--transition-base);
}

/* ❌ WRONG — hardcoded */
.nav-bar {
  padding: 8px 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

---

## Tailwind usage rules

Tailwind is used for **two purposes only**:

1. **Layout utilities** — structural classes with no design system equivalent:
   `flex`, `flex-col`, `items-center`, `justify-between`, `w-full`, `h-full`,
   `flex-1`, `overflow-hidden`, `hidden`, `block`, `relative`, `absolute`, `fixed`

2. **Token-backed colour classes** — custom classes defined in `tailwind.config.js`:
   `bg-brand-dark`, `text-brand-primary-800`, `bg-positive`, `bg-gray-50`, etc.

**Spacing — never use Tailwind for padding, margin, or gap.**
All spacing values must use CSS tokens in the component `.css` file.

**Never use** Tailwind's built-in colour scale: no `blue-*`, `green-*`, `red-*`.

---

## Component file structure

```
src/app/components/ap-{name}/
  ap-{name}.component.ts     ← @Component, @Input, @Output, logic
  ap-{name}.component.html   ← Template — layout + colour Tailwind, Angular control flow
  ap-{name}.component.css    ← All spacing, shadows, transitions via CSS tokens
```

### TypeScript conventions

```typescript
@Component({
  selector: 'ap-name',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...],
})
```

- **All components use `ap-` prefix** — production components, doc site pages, showcase helpers
- Angular 17 control flow: `@if`, `@for`, `@switch` — never `*ngIf`, `*ngFor`
- `@Input()` names derived from React prop names
- Outputs use camelCase event names

### HTML template conventions

```html
<!-- ✅ Correct — layout + colour in template, no spacing classes -->
<div class="flex items-center w-full text-brand-dark hover:bg-brand-primary-50 rounded font-medium">
  <span class="icon-outlined">{{ icon }}</span>
  <span class="mr-auto">{{ title }}</span>
</div>
```

- No `px-*`, `py-*`, `p-*`, `m-*`, `gap-*` classes in templates
- Icons always use `icon-outlined`, `icon-solid`, or `icon-outlined-new` CSS classes

---

## Build workflow

1. **Check `REFERENCE.md`** — is this component already built? If yes, stop.
2. **Read the React source file** — extract every spacing, colour, shadow, radius, and typography value.
3. **Check the React rendered output** at `localhost:5173/design/` — verify visual states.
4. **Read `TOKENS.md`** — map every React `var(--*)` value to its Angular token or Tailwind class.
5. **Build the component** — `.ts`, `.html`, `.css` using React values mapped to tokens.
6. **Add to doc site** — wire into `app.ts` imports, add an `ap-{name}-page` showcase component, add to `app.html` `@switch`.
7. **Verify visually** at `localhost:4200` — compare side-by-side with the React demo.
8. **Update `REFERENCE.md`** — set status ✅, add file path.

**Steps 2 and 7 are non-negotiable. Do not skip either.**

---

## Icons

Always use **Material Symbols Rounded**. Never Outlined, never Sharp.

```html
<!-- ✅ CORRECT -->
<span class="icon-outlined">dashboard</span>
<span class="icon-solid">expand_more</span>
<span class="icon-outlined-new">keep</span>
```

---

## What NOT to do

- Do not hardcode hex values, rgba values, or raw pixel values in any component
- Do not use Tailwind spacing classes (`px-*`, `py-*`, `p-*`, `m-*`, `gap-*`) in templates
- Do not use Tailwind's built-in colour scale for brand values
- Do not use `*ngIf` or `*ngFor`
- Do not reference production HTML exports or the Downloads folder
- Do not create a component without reading the React source first
- Do not mark a component complete without verifying it at `localhost:4200`
