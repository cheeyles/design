# Token Strategy

Tokens are the single source of truth for all visual values in this design system.
No component, template, or stylesheet may use a hardcoded colour, size, or spacing value.

---

## How tokens flow

```
primitives.css
  └─ Raw values: #002341, 8px, 'Roboto', 400
        │
        ▼
semantics.css
  └─ Named aliases: --color-bg-dark, --spacing-sm, --type-family-primary
        │
        ├──────────────────────────────────────────────────────────┐
        ▼                                                          ▼
Component .css files                                    tailwind.config.js
  var(--color-bg-dark)                                  'brand-dark': '#002341'
  var(--shadow-soft)                                    'brand-primary': { 50: '#E3F2FE' }
  var(--transition-base)                                'positive': { DEFAULT: '#00873D' }
        │                                                          │
        ▼                                                          ▼
  Styles applied via CSS                          Styles applied via Tailwind classes
  custom properties                               bg-brand-dark, text-positive-50, etc.
```

### primitives.css

Raw values only. Never referenced in components directly.
Lives at `src/tokens/primitives.css`.

```css
--primitive-brand-dark-900: #002341;
--primitive-brand-primary-50: #E3F2FE;
--primitive-positive-800: #00873D;
--primitive-space-4: 16px;
```

### semantics.css

Meaningful aliases over primitives. **These are what components use.**
Lives at `src/tokens/semantics.css`.

```css
--color-bg-dark:        var(--primitive-brand-dark-900);   /* #002341 */
--color-brand-primary:  var(--primitive-brand-primary-700); /* #1971D8 */
--color-bg-green:       var(--primitive-positive-800);      /* #00873D */
--spacing-sm:           var(--primitive-space-2);           /* 8px */
--shadow-soft:          var(--primitive-shadow-soft);
--transition-base:      var(--primitive-transition-base);
```

### tailwind.config.js

The token bridge. Maps Tailwind utility class names to the same values as the semantic tokens.
This file must stay in sync with `primitives.css`.

```js
colors: {
  'brand-dark': {
    DEFAULT: '#002341',     // = --color-bg-dark = --primitive-brand-dark-900
    50:  '#E4E8ED',         // = --primitive-brand-dark-50
    700: '#013C65',         // = --primitive-brand-dark-700
    900: '#002341',         // = --primitive-brand-dark-900
  },
  'brand-primary': {
    DEFAULT: '#1971D8',     // = --color-brand-primary
    50:  '#E3F2FE',
    700: '#1971D8',
    800: '#1542A7',
  },
  'positive': {
    DEFAULT: '#00873D',
    50:      '#E7F7EB',
    900:     '#006728',
  },
}
```

**The values in `tailwind.config.js` must match `primitives.css` exactly.**
If a primitive token value changes, update both files.

---

## When to use CSS tokens vs Tailwind classes

### Use a CSS token (in component `.css` file) when:

- The value is **any spacing** — padding, margin, gap
- The value is a shadow, transition, easing, or z-index
- The value requires a CSS custom property for runtime flexibility (e.g. theming)
- The value involves `calc()`, `color-mix()`, or other CSS functions
- There is no corresponding Tailwind class in `tailwind.config.js`

```css
/* ✅ CSS token — spacing */
.button {
  padding: var(--spacing-sm) var(--spacing-md);
  gap: var(--spacing-xs);
}

/* ✅ CSS token — shadow */
.card {
  box-shadow: var(--shadow-soft);
}

/* ✅ CSS token — transition */
.button {
  transition: background-color var(--transition-base);
}
```

### Use a Tailwind class (in component `.html` template) when:

- The value is a colour, background, text colour, or border colour
- The value is a structural layout utility (`flex`, `hidden`, `relative`, `w-full`, etc.)
- A matching colour class exists in `tailwind.config.js`

```html
<!-- ✅ Tailwind — colour and layout only -->
<div class="bg-brand-dark text-white flex items-center h-14">

<!-- ❌ WRONG — spacing in template -->
<div class="px-4 py-2 gap-x-2">
```

**The rule in one line:** colours and layout structure in Tailwind; spacing always in CSS tokens.

---

## Token reference — semantic → Tailwind

### Colour

| Semantic token | Tailwind class | Value |
|---|---|---|
| `--color-bg-dark` | `bg-brand-dark` / `text-brand-dark` | `#002341` |
| `--color-bg-default` | `bg-brand-dark-700` / `text-brand-dark-700` | `#013C65` |
| `--color-bg-dark-light` | `bg-brand-dark-50` | `#E4E8ED` |
| `--color-brand-primary` | `bg-brand-primary` / `text-brand-primary` | `#1971D8` |
| `--color-brand-primary-light` | `bg-brand-primary-50` | `#E3F2FE` |
| `--color-brand-primary-dark` | `bg-brand-primary-800` / `text-brand-primary-800` | `#1542A7` |
| `--color-bg-white` | `bg-white` | `#FFFFFF` |
| `--color-bg-light` | `bg-gray-100` | `#F4F4F4` |
| `--color-bg-lighter` | `bg-gray-50` | `#F7FAFC` |
| `--color-bg-grey-light` | `bg-gray-300` | `#DBDEE0` |
| `--color-bg-grey-medium` | `bg-gray-400` | `#B7BABC` |
| `--color-bg-green` | `bg-positive` | `#00873D` |
| `--color-bg-green-light` | `bg-positive-50` | `#E7F7EB` |
| `--color-bg-green-dark` | `bg-positive-900` | `#006728` |
| `--color-bg-red` | `bg-negative` | `#CD002B` |
| `--color-bg-red-light` | `bg-negative-50` | `#FFECF1` |
| `--color-bg-orange` | `bg-warning` | `#D96725` |
| `--color-bg-orange-light` | `bg-warning-50` | `#FDF4E3` |
| `--color-accent-yellow` | `bg-yellow` / `text-yellow` | `#FFB700` |
| `--color-accent-yellow-light` | `bg-yellow-50` | `#FFF9E1` |
| `--color-accent-teal` | `bg-teal` / `text-teal` | `#005147` |
| `--color-accent-teal-light` | `bg-teal-50` | `#DDEEED` |
| `--color-accent-pink` | `bg-pink` / `text-pink` | `#760046` |
| `--color-accent-pink-light` | `bg-pink-50` | `#F3E0EA` |
| `--color-accent-purple` | `bg-purple` / `text-purple` | `#6A1B9A` |
| `--color-accent-purple-light` | `bg-purple-50` | `#F3E5F5` |
| `--color-text-dark` | `text-brand-dark` | `#002341` |
| `--color-text-grey` | `text-gray-700` | `#5C5E60` |
| `--color-text-grey-dark` | `text-gray-800` | `#3D4041` |
| `--color-text-grey-light` | `text-gray-400` | `#B7BABC` |
| `--color-text-white` | `text-white` | `#FFFFFF` |
| `--color-border-grey-light` | `border-gray-300` | `#DBDEE0` |
| `--color-border-grey` | `border-gray-400` | `#B7BABC` |

### Spacing

Spacing is always applied via CSS tokens in component `.css` files — never via Tailwind classes in templates.

| Semantic token | Value | Usage |
|---|---|---|
| `--spacing-xs` | `4px` | `padding: var(--spacing-xs)` |
| `--spacing-sm` | `8px` | `gap: var(--spacing-sm)` |
| `--spacing-sm-md` | `12px` | `padding: var(--spacing-sm-md)` |
| `--spacing-md` | `16px` | `padding: var(--spacing-md)` |
| `--spacing-lg` | `24px` | `margin-bottom: var(--spacing-lg)` |
| `--spacing-xl` | `32px` | `gap: var(--spacing-xl)` |

### Border radius

| Semantic token | Tailwind class | Value |
|---|---|---|
| `--radius-sm` | `rounded` | `4px` |
| `--radius-md` | `rounded-md` | `8px` |
| `--radius-full` | `rounded-full` | `9999px` |

### Typography

| Tailwind class | Font size / Line height | Figma name |
|---|---|---|
| `text-label-sm` | 10px / 16px | Label Small |
| `text-label-md` | 12px / 18px | Label Medium |
| `text-body-sm` | 14px / 22px | Body Small |
| `text-body-md` | 16px / 24px | Body Medium |
| `text-title-md` | 18px / 28px | Title Medium |
| `text-title-lg` | 20px / 30px | Title Large |
| `text-headline-sm` | 24px / 36px | Headline Small |
| `text-headline-md` | 28px / 42px | Headline Medium |
| `text-headline-lg` | 32px / 48px | Headline Large |
| `text-display-sm` | 36px / 54px | Display Small |
| `text-display-md` | 45px / 68px | Display Medium |
| `text-display-lg` | 57px / 86px | Display Large |

Font family: **Roboto** (from Figma token `font.family.sans`)

---

## What has no Tailwind equivalent — always use CSS tokens

| Token | Why CSS only |
|---|---|
| `--shadow-soft`, `--shadow-light`, `--shadow-top` | Custom shadow values |
| `--transition-fast`, `--transition-base`, `--transition-slow` | Custom transition durations |
| `--easing-default`, `--easing-in`, `--easing-out` | Custom easing functions |
| `--color-btn-primary-hover` | Uses `color-mix()` |
| `--color-btn-destructive-hover` | Uses `color-mix()` |
| `--opacity-disabled`, `--opacity-subtle`, `--opacity-overlay` | Opacity tokens |
| `--z-dropdown`, `--z-modal`, `--z-toast` | Z-index scale |
| `--type-size-*`, `--type-lh-*`, `--type-family-*` | Typography scale (use Tailwind classes instead) |
| `--type-weight-*` | Font weight tokens |

---

## Keeping `tailwind.config.js` in sync

When `primitives.css` changes:
1. Find the affected primitive token
2. Update the matching value in `tailwind.config.js`
3. Verify the component still renders correctly at `localhost:4200`

The two files are the only place raw values live. Everything else references them.
