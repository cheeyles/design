# Doc Pages — Build Guide

How to build a component or pattern page in the Angular doc site.

---

## Mandatory build workflow

Follow these steps in order. Do not deviate — skipping steps or substituting broad searches for targeted reads wastes tokens and causes bugs.

**Step 1 — Get the React doc section structure**
Grep `App.jsx` for the doc function name, then Read only those specific lines:
```
Grep: pattern="function {Name}Doc" path=".../src/App.jsx" → get line number
Read: offset={line}, limit={enough to cover the function}
```
This gives you the section titles, group labels, and component props used in the demo. Do not read the whole file.

**Step 2 — Get the React component token values**
The component path is predictable — Read it directly. Do not use an Explore agent:
```
/Users/ceyles/Desktop/design-system/src/components/{category}/{Name}/{Name}.jsx
```
Extract only: spacing tokens, colour tokens, border-radius, font size/weight, and state logic. Ignore JS event handlers and React-specific props.

**Step 3 — Check tokens exist**
Grep `src/tokens/semantics.css` for any token you haven't seen before. Never assume a token name.

**Step 4 — Write all files in one parallel batch**
Use the templates in this file. Write every file simultaneously — `.ts`, `.html`, `.css` for the component(s) and the page. Do not write one file, read it back, then write the next.

**Step 5 — Wire into the section**
Use the wiring steps in this file. Read `REFERENCE.md` for the NAV id to use — do not re-read the section `.ts` file to understand its structure.

**Step 6 — Update REFERENCE.md**
Set status to ✅ and add the file path for every new component and page.

### What NOT to do
- Do not use an Explore agent to find React source files — paths are predictable, use Read directly
- Do not read existing Angular page components to understand patterns — this file covers everything
- Do not re-read section `.ts`/`.html` files to understand their structure — the wiring steps below are complete
- Do not set `label` on `ap-demo-group` for components that render their own label (inputs, selects, etc.)

---

---

## Overview

Each page in Components or Patterns is a standalone Angular component that renders inside the section's `@switch`. Every page uses the same four building blocks:

```
ap-doc-page          ← scroll container (no title/header — content only)
  ap-doc-section     ← card with a group-header label
    ap-demo          ← flex row, dividers between groups automatically
      ap-demo-group  ← padded column cell (optional label above)
    ap-code-block    ← syntax-highlighted code, always last in a section
```

Use `ap-coming-soon` as a placeholder for sections not yet built.

---

## File structure

```
src/app/components/ap-{name}-page/
  ap-{name}-page.component.ts
  ap-{name}-page.component.html
  ap-{name}-page.component.css   ← always create, even if empty
```

---

## TypeScript file

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';
import { ApComingSoonComponent } from '../ap-coming-soon/ap-coming-soon.component';
import { ApXxxComponent }        from '../ap-xxx/ap-xxx.component'; // component being showcased

@Component({
  selector: 'ap-xxx-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApComingSoonComponent,
    ApXxxComponent,
  ],
  templateUrl: './ap-xxx-page.component.html',
  styleUrl:    './ap-xxx-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApXxxPageComponent {
  // One readonly string per ap-code-block in the template.
  // Use a template literal so indentation is preserved.
  readonly variantsCode =
`<ap-xxx color="primary">Label</ap-xxx>
<ap-xxx color="secondary">Label</ap-xxx>`;

  readonly statesCode =
`<ap-xxx [disabled]="true">Label</ap-xxx>`;
}
```

**Rules:**
- All code strings are `readonly` class properties.
- Code strings use backtick template literals — the content is what a developer would actually copy-paste.
- Include `<!-- comment -->` in code strings for non-obvious usage.
- Input data arrays (crumbs, tabs, etc.) are also `readonly` class properties.

---

## HTML template

```html
<ap-doc-page>

  <ap-doc-section title="Xxx - Variants">
    <ap-demo>
      <ap-demo-group label="Default">
        <ap-xxx color="primary">Label</ap-xxx>
        <ap-xxx color="secondary">Label</ap-xxx>
      </ap-demo-group>
      <ap-demo-group label="Disabled">
        <ap-xxx color="primary" [disabled]="true">Label</ap-xxx>
      </ap-demo-group>
    </ap-demo>
    <ap-code-block [code]="variantsCode" />
  </ap-doc-section>

  <ap-doc-section title="Xxx - States">
    <!-- Coming soon placeholder -->
    <ap-coming-soon title="States" description="Description — coming soon." />
  </ap-doc-section>

</ap-doc-page>
```

**Rules:**
- `ap-doc-page` has no `title` or `description` inputs — it is a scroll wrapper only.
- `ap-doc-section` `title` format: `"Component - Context"` (e.g. `"Button - Variants"`, `"Button - With Icons"`).
- `ap-code-block` always goes **last** inside a section. It gets an automatic top border from global CSS.
- Multiple `ap-demo` blocks inside one section stack vertically — use this to separate size variants.
- Do NOT nest `ap-doc-section` inside another `ap-doc-section`.
- If the component being showcased renders its own label (e.g. `ap-input`, `ap-text-area`), do **not** also set `label` on `ap-demo-group` — that creates a double label. Use `ap-demo-group` labels only for components that have no built-in label (buttons, tags, etc.).

---

## `ap-demo-group` inputs

| Input    | Type    | Default | Notes |
|----------|---------|---------|-------|
| `label`  | string  | —       | Small label rendered above the group content |
| `column` | boolean | `false` | Stack children vertically instead of in a row |
| `gap`    | string  | —       | Override the default gap between children — use a CSS token, e.g. `'var(--spacing-lg)'` |

```html
<!-- Horizontal row (default) -->
<ap-demo-group label="Sizes">
  <ap-xxx size="sm" /><ap-xxx size="md" /><ap-xxx size="lg" />
</ap-demo-group>

<!-- Vertical stack -->
<ap-demo-group label="Full-width items" [column]="true">
  <ap-xxx /><ap-xxx />
</ap-demo-group>

<!-- Custom gap -->
<ap-demo-group label="Spaced" [gap]="'var(--spacing-xl)'">
  <ap-xxx /><ap-xxx />
</ap-demo-group>
```

---

## Wiring into the Components section

**File:** `src/app/components/ap-components-section/ap-components-section.component.ts`

**Step 1 — add to the NAV array:**
```typescript
// Top-level item
{ id: 'xxx', label: 'Xxx', done: true },

// OR nested under a group
{
  id: 'inputs', label: 'Inputs',
  children: [
    { id: 'inputs-xxx', label: 'Xxx Input', done: true },
  ],
},
```

**Step 2 — add the import:**
```typescript
import { ApXxxPageComponent } from '../ap-xxx-page/ap-xxx-page.component';
```

**Step 3 — add to `imports` array:**
```typescript
imports: [ ..., ApXxxPageComponent ],
```

**File:** `src/app/components/ap-components-section/ap-components-section.component.html`

**Step 4 — add a `@case` to the `@switch`:**
```html
@case ('xxx') { <ap-xxx-page /> }
```

---

## Wiring into the Patterns section

**File:** `src/app/components/ap-patterns-section/ap-patterns-section.component.ts`

**Step 1 — add to the relevant NAV group's `children` array:**
```typescript
{ id: 'pat-xxx', label: 'Xxx' },
```

Pattern IDs always use the `pat-` prefix to avoid collision with component IDs.

**Step 2 — add the import:**
```typescript
import { ApXxxPageComponent } from '../ap-xxx-page/ap-xxx-page.component';
```

**Step 3 — add to `imports` array:**
```typescript
imports: [ ..., ApXxxPageComponent ],
```

**File:** `src/app/components/ap-patterns-section/ap-patterns-section.component.html`

**Step 4 — add a `@case` to the `@switch`:**
```html
@case ('pat-xxx') { <ap-xxx-page /> }
```

---

## Checklist

```
[ ] Three files created: .ts  .html  .css
[ ] styleUrl present in @Component decorator
[ ] All doc infrastructure imported + added to imports[]
[ ] Component being showcased imported + added to imports[]
[ ] Code strings defined as readonly properties
[ ] ap-code-block is last in each section
[ ] Page wired into the correct section (components or patterns)
[ ]   — NAV entry added
[ ]   — import added
[ ]   — @case added to @switch
[ ]   — component added to imports[]
[ ] REFERENCE.md updated: set status ✅ and add file path
```

---

## Real examples

| Page | File |
|------|------|
| Simple component | `components/ap-breadcrumb-page/` |
| Multiple sections + icons | `components/ap-button-page/` |
| Pattern with input data | `components/ap-side-nav-page/` |
