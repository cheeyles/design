# Design System — Component API Reference

Full API for all built components. Use this as the primary reference when vibe coding —
you should not need to read the source files.

**Figma file key:** `TI2QRswI37Xh8W8h5CrypW`

Status key: ✅ Done | 🔄 In Progress | ⬜ Not started

---

## Imports

```js
import { Button, IconButton, LargeIconButton, FavouriteButton, CardFavouriteButton } from './components/actions/Button/index.js'
import { Input, NumberInput, DollarInput, SelectInput, DefinedUnitInput, PasswordInput, EmailInput, UrlInput, TelInput, TextArea } from './components/inputs/Input/index.js'
import { DatePicker } from './components/inputs/DatePicker/index.js'
import { Toggle } from './components/inputs/Toggle/index.js'
import { Logo } from './components/display/Logo/index.js'
import { MinMaxInput } from './components/inputs/MinMaxInput/index.js'
import { SearchBar } from './components/inputs/SearchBar/index.js'
import { Radio, RadioGroup } from './components/inputs/Radio/index.js'
import { Checkbox } from './components/inputs/Checkbox/index.js'
import {
  PriceTag, AssessmentTag, AccreditationTag,
  LotStatusTag, PercentileTag, SoldStatusTag,
  NewTag, CardKeyInfoTag, AuctionTypeTag, PackageTypeTag,
  BidStatusTag, ListingStatusTag, FeederOptimisedTag,
} from './components/display/Tag/index.js'
import { Image } from './components/display/Image/index.js'
import { Badge } from './components/display/Badge/index.js'
import { Chip } from './components/display/Chip/index.js'
import { Avatar } from './components/display/Avatar/index.js'
import { EmptyState } from './components/display/EmptyState/index.js'
import { Message } from './components/feedback/Message/index.js'
import { Toast, ToastProvider, useToast } from './components/feedback/Toast/index.js'
import { ProgressIndicator } from './components/feedback/ProgressIndicator/index.js'
import { ProgressTracker } from './components/feedback/ProgressTracker/index.js'
import { Announcement } from './components/feedback/Announcement/index.js'
import { Tab, TabBar } from './components/navigation/Tab/index.js'
import { NavItem, NavSubItem, NavGroup, NavIconItem } from './components/navigation/NavItem/index.js'
import { TabbedAccordion } from './components/navigation/TabbedAccordion/index.js'
import { Breadcrumb } from './components/navigation/Breadcrumb/index.js'
import { Pagination } from './components/navigation/Pagination/index.js'
import { CommodityNav } from './components/navigation/CommodityNav/index.js'
import { Tooltip } from './components/feedback/Tooltip/index.js'
import { Header, MobileHeader, TopBarNav, BottomBarLeftNav, BottomBarRightNav } from './components/patterns/Header/index.js'
import { Footer, MobileFooter } from './components/patterns/Footer/index.js'
import { LotCard } from './components/patterns/LotCard/index.js'
import { AgentContactCard } from './components/patterns/AgentContactCard/index.js'
import { LotDetailHeader } from './components/patterns/LotDetailHeader/index.js'
import { DataTable } from './components/patterns/DataTable/index.js'
```

---

## Actions

### Button ✅
`src/components/actions/Button/Button.jsx` · Figma: `5:3906`

| Prop | Type | Default | Values |
|---|---|---|---|
| `variant` | string | `'primary'` | `'primary'` `'secondary'` `'positive'` `'destructive'` `'text'` |
| `size` | string | `'md'` | `'sm'` `'md'` |
| `children` | node | — | Button label text |
| `leadingIcon` | string \| node | — | Material Symbol name or ReactNode |
| `trailingIcon` | string \| node | — | Material Symbol name or ReactNode |
| `disabled` | bool | `false` | — |
| `onClick` | func | — | — |
| `type` | string | `'button'` | `'button'` `'submit'` `'reset'` |
| `style` | object | — | Style overrides |
| `className` | string | — | — |

**Size reference:**
- `sm` — 32px height, 12px padding, 16px icons, 12px font
- `md` — 40px height, 24px padding, 18px icons, 14px font

```jsx
// Variants
<Button variant="primary">Get Started</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="positive">Confirm</Button>
<Button variant="destructive">Delete</Button>
<Button variant="text">View today's auctions</Button>

// Sizes
<Button variant="primary" size="md">Label</Button>
<Button variant="primary" size="sm">Label</Button>

// With icons
<Button variant="primary" leadingIcon="add">Create Lot</Button>
<Button variant="secondary" trailingIcon="keyboard_arrow_down">Sort</Button>
<Button variant="text" trailingIcon="chevron_right">See all</Button>

// Icon only (square)
<Button variant="primary" leadingIcon="add" style={{ width: 'var(--size-btn-md)', padding: 0 }} />

// Disabled
<Button variant="primary" disabled>Label</Button>
```

**Hover tokens:** `--color-btn-primary-hover`, `--color-btn-secondary-hover`, `--color-btn-positive-hover`, `--color-btn-destructive-hover`

---

### FavouriteButton ✅
`src/components/actions/Button/Button.jsx` · Figma: `8:4065`

Star icon toggle — standalone use.

| Prop | Type | Default |
|---|---|---|
| `selected` | bool | `false` |
| `onClick` | func | — |
| `aria-label` | string | `'Favourite'` |
| `style` | object | — |

```jsx
<FavouriteButton selected={false} onClick={handleToggle} />
<FavouriteButton selected={true} onClick={handleToggle} />
```

---

### CardFavouriteButton ✅
`src/components/actions/Button/Button.jsx` · Figma: `98:1722`

Star icon toggle — designed to sit on a card image with drop shadow.

| Prop | Type | Default |
|---|---|---|
| `selected` | bool | `false` |
| `onClick` | func | — |
| `aria-label` | string | `'Favourite'` |
| `style` | object | — |

```jsx
<CardFavouriteButton selected={false} onClick={handleToggle} />
```

---

### LargeIconButton ✅
`src/components/actions/Button/Button.jsx`

Icon stacked above a label — used in commodity nav and similar large-icon navigation patterns. 88×88px button with icon mask on top, label below.

| Prop | Type | Default |
|---|---|---|
| `iconSrc` | string | — | URL for the icon image (used as CSS mask) |
| `label` | string | — | Label below the icon |
| `active` | bool | `false` | Blue background highlight |
| `disabled` | bool | `false` | — |
| `onClick` | func | — | — |
| `style` | object | — | — |

```jsx
<LargeIconButton iconSrc="/icons/commodity/cattle.svg" label="Cattle" />
<LargeIconButton iconSrc="/icons/commodity/sheep.svg" label="Sheep" active />
```

---

## Inputs

All input components share these states: `'enabled'` `'error'` `'disabled'`

---

### Input ✅
`src/components/inputs/Input/Input.jsx` · Figma: `170:860`

Plain text field.

| Prop | Type | Default |
|---|---|---|
| `label` | string | — |
| `placeholder` | string | `'Placeholder text'` |
| `state` | string | `'enabled'` |
| `hint` | string | — |
| `id` | string | auto-generated |
| `style` | object | — |
| `...rest` | — | Passed to `<input>` |

```jsx
<Input label="First name" placeholder="Enter your name" />
<Input label="Email" state="error" hint="Please enter a valid email" />
<Input label="Reference" state="disabled" />
```

---

### NumberInput ✅
`src/components/inputs/Input/Input.jsx`

Numeric entry field. `type="number"`, spinner arrows hidden globally.

| Prop | Type | Default |
|---|---|---|
| `label` | string | — |
| `placeholder` | string | `'0'` |
| `state` | string | `'enabled'` |
| `hint` | string | — |
| `id` | string | auto-generated |
| `style` | object | — |
| `...rest` | — | Passed to `<input type="number">` |

```jsx
<NumberInput label="Quantity" placeholder="0" />
<NumberInput label="Age" state="error" hint="Must be a valid number" />
<NumberInput label="Count" state="disabled" />
```

---

### DollarInput ✅
`src/components/inputs/Input/Input.jsx` · Figma: `170:864`

Currency field with leading `$` icon. `type="number"`, spinner arrows hidden.

| Prop | Type | Default |
|---|---|---|
| `label` | string | — |
| `placeholder` | string | `'0.00'` |
| `state` | string | `'enabled'` |
| `hint` | string | — |
| `id` | string | auto-generated |
| `style` | object | — |
| `...rest` | — | Passed to `<input type="number">` |

```jsx
<DollarInput label="Reserve price" />
<DollarInput label="Buy now price" state="error" hint="Must be greater than 0" />
<DollarInput label="GST" state="disabled" />
```

---

### SelectInput ✅
`src/components/inputs/Input/Input.jsx` · Figma: `170:862`

Dropdown select field.

| Prop | Type | Default |
|---|---|---|
| `label` | string | — |
| `placeholder` | string | `'Select an option'` |
| `options` | array | `[]` |
| `state` | string | `'enabled'` |
| `hint` | string | — |
| `id` | string | auto-generated |
| `style` | object | — |
| `...rest` | — | Passed to `<select>` |

Options can be strings or `{ value, label }` objects.

```jsx
<SelectInput
  label="State"
  options={['NSW', 'VIC', 'QLD', 'SA', 'WA']}
/>
<SelectInput
  label="Sale type"
  options={[
    { value: 'auction', label: 'Auction' },
    { value: 'buy-now', label: 'Buy Now' },
  ]}
  state="error"
  hint="Please select a sale type"
/>
```

---

### DefinedUnitInput ✅
`src/components/inputs/Input/Input.jsx` · Figma: `170:865`

Numeric field with an attached unit badge on the right. `type="number"`, spinner arrows hidden.

| Prop | Type | Default |
|---|---|---|
| `label` | string | — |
| `placeholder` | string | `'Placeholder text'` |
| `unit` | string | `'$/Head'` |
| `state` | string | `'enabled'` |
| `hint` | string | — |
| `id` | string | auto-generated |
| `style` | object | — |
| `...rest` | — | Passed to `<input type="number">` |

```jsx
<DefinedUnitInput label="Weight" unit="kg/Head" />
<DefinedUnitInput label="Price" unit="$/Head" />
<DefinedUnitInput label="Score" unit="kg/Head" state="disabled" />
```

---

### PasswordInput ✅
`src/components/inputs/Input/Input.jsx`

Password field with a show/hide visibility toggle. The toggle icon (`visibility` / `visibility_off`) appears on the right and swaps the input between `type="password"` and `type="text"`.

| Prop | Type | Default |
|---|---|---|
| `label` | string | — |
| `placeholder` | string | `'Enter password'` |
| `state` | string | `'enabled'` |
| `hint` | string | — |
| `id` | string | auto-generated |
| `style` | object | — |
| `...rest` | — | Passed to `<input>` |

```jsx
<PasswordInput label="Password" />
<PasswordInput label="Password" state="error" hint="Password must be at least 8 characters" />
<PasswordInput label="Password" state="disabled" />
```

---

### EmailInput ✅
`src/components/inputs/Input/Input.jsx`

Email address field with a leading `mail` icon. Uses `type="email"` for native browser validation.

| Prop | Type | Default |
|---|---|---|
| `label` | string | — |
| `placeholder` | string | `'email@example.com'` |
| `state` | string | `'enabled'` |
| `hint` | string | — |
| `id` | string | auto-generated |
| `style` | object | — |
| `...rest` | — | Passed to `<input type="email">` |

```jsx
<EmailInput label="Email address" />
<EmailInput label="Email address" state="error" hint="Please enter a valid email address" />
<EmailInput label="Email address" state="disabled" />
```

---

### UrlInput ✅
`src/components/inputs/Input/Input.jsx`

URL field with a leading `link` icon. Uses `type="url"` for native browser validation.

| Prop | Type | Default |
|---|---|---|
| `label` | string | — |
| `placeholder` | string | `'https://'` |
| `state` | string | `'enabled'` |
| `hint` | string | — |
| `id` | string | auto-generated |
| `style` | object | — |
| `...rest` | — | Passed to `<input type="url">` |

```jsx
<UrlInput label="Website" />
<UrlInput label="Website" state="error" hint="Please enter a valid URL" />
<UrlInput label="Website" state="disabled" />
```

---

### TelInput ✅
`src/components/inputs/Input/Input.jsx`

Telephone field with a leading `call` icon. Uses `type="tel"` which opens the numeric keypad on mobile.

| Prop | Type | Default |
|---|---|---|
| `label` | string | — |
| `placeholder` | string | `'0400 000 000'` |
| `state` | string | `'enabled'` |
| `hint` | string | — |
| `id` | string | auto-generated |
| `style` | object | — |
| `...rest` | — | Passed to `<input type="tel">` |

```jsx
<TelInput label="Phone number" />
<TelInput label="Phone number" state="error" hint="Please enter a valid phone number" />
<TelInput label="Phone number" state="disabled" />
```

---

### TextArea ✅
`src/components/inputs/Input/Input.jsx`

Multi-line text entry field. Shares the same label, hint, and state system as single-line inputs.

| Prop | Type | Default | Values |
|---|---|---|---|
| `label` | string | — | — |
| `placeholder` | string | `'Enter text'` | — |
| `state` | string | `'enabled'` | `'enabled'` `'error'` `'disabled'` |
| `hint` | string | — | — |
| `rows` | number | `4` | Any positive integer |
| `resize` | string | `'vertical'` | `'none'` `'vertical'` `'horizontal'` `'both'` |
| `id` | string | auto-generated | — |
| `style` | object | — | — |
| `...rest` | — | Passed to `<textarea>` | — |

```jsx
<TextArea label="Description" placeholder="Enter a description…" />
<TextArea label="Description" rows={6} />
<TextArea label="Description" resize="none" />
<TextArea label="Description" state="error" hint="This field is required" />
<TextArea label="Description" state="disabled" />
```

---

### MinMaxInput ✅
`src/components/inputs/MinMaxInput/MinMaxInput.jsx` · Figma: `172:5260`

Paired min/max numeric range field.

| Prop | Type | Default |
|---|---|---|
| `label` | string | — |
| `minPlaceholder` | string | `'Min'` |
| `maxPlaceholder` | string | `'Max'` |
| `state` | string | `'enabled'` |
| `style` | object | — |

```jsx
<MinMaxInput label="Weight range" minPlaceholder="Min kg" maxPlaceholder="Max kg" />
<MinMaxInput label="Price range" state="error" />
<MinMaxInput label="Age range" state="disabled" />
```

---

### SearchBar ✅
`src/components/inputs/SearchBar/SearchBar.jsx` · Figma: `176:14137`

| Prop | Type | Default |
|---|---|---|
| `placeholder` | string | `'Search Upcoming Lots & Auctions'` |
| `size` | string | `'lg'` | `'lg'` `'sm'` |
| `outline` | bool | `false` |
| `style` | object | — |
| `...rest` | — | Passed to `<input>` |

```jsx
<SearchBar />
<SearchBar size="sm" placeholder="Search lots..." />
<SearchBar outline />
```

---

### Radio ✅
`src/components/inputs/Radio/Radio.jsx` · Figma: `172:5129`

Single radio option. Use `RadioGroup` for multiple options.

| Prop | Type | Default |
|---|---|---|
| `label` | string | — |
| `checked` | bool | — |
| `onChange` | func | — |
| `disabled` | bool | — |
| `name` | string | — |
| `value` | string | — |
| `style` | object | — |

```jsx
<Radio label="Option A" name="group" value="a" checked={val === 'a'} onChange={() => setVal('a')} />
```

---

### RadioGroup ✅
`src/components/inputs/Radio/Radio.jsx`

Managed group of radio options.

| Prop | Type | Default |
|---|---|---|
| `label` | string | — |
| `options` | array | `[]` |
| `name` | string | — |
| `value` | string | — |
| `onChange` | func | — |
| `disabled` | bool | — |
| `style` | object | — |

Options can be strings or `{ value, label, disabled }` objects.

```jsx
<RadioGroup
  label="Sale type"
  name="sale-type"
  value={selected}
  onChange={setSelected}
  options={['Auction', 'Buy Now', 'Make an Offer']}
/>
```

---

### Checkbox ✅
`src/components/inputs/Checkbox/Checkbox.jsx` · Figma: `172:5131`

| Prop | Type | Default |
|---|---|---|
| `label` | string | — |
| `checked` | bool | — |
| `onChange` | func | — |
| `disabled` | bool | — |
| `indeterminate` | bool | `false` |
| `style` | object | — |

```jsx
<Checkbox label="I agree to the terms" checked={agreed} onChange={e => setAgreed(e.target.checked)} />
<Checkbox label="Select all" indeterminate checked={false} onChange={handleAll} />
<Checkbox label="Unavailable" disabled checked={false} onChange={() => {}} />
```

---

### Toggle ✅
`src/components/inputs/Toggle/Toggle.jsx` · Figma: `261:657`

On/off switch in two sizes. Controlled component — manage `checked` state externally.

| Prop | Type | Default | Values |
|---|---|---|---|
| `label` | string | — | Optional text label beside the toggle |
| `checked` | bool | `false` | — |
| `onChange` | func | — | Receives native `ChangeEvent` |
| `disabled` | bool | `false` | — |
| `size` | string | `'lg'` | `'lg'` `'sm'` |
| `style` | object | — | — |
| `className` | string | — | — |

```jsx
const [on, setOn] = useState(false)

<Toggle checked={on} onChange={e => setOn(e.target.checked)} />
<Toggle label="Dark mode" checked={on} onChange={e => setOn(e.target.checked)} />
<Toggle size="sm" checked={on} onChange={e => setOn(e.target.checked)} />
<Toggle checked={true} disabled onChange={() => {}} />
```

---

### DatePicker ✅
`src/components/inputs/DatePicker/DatePicker.jsx` · Figma: `96:2304`

Single-date picker with calendar dropdown. Week starts Monday. Out-of-month days shown at reduced opacity. Today highlighted with a brand border. Closes on outside click or Escape.

| Prop | Type | Default | Notes |
|---|---|---|---|
| `label` | string | — | — |
| `placeholder` | string | `'DD / MM / YYYY'` | Shown when no date selected |
| `value` | Date \| null | `null` | Controlled value |
| `onChange` | func | — | Called with selected `Date` |
| `state` | string | `'enabled'` | `'enabled'` `'error'` `'disabled'` |
| `hint` | string | — | — |
| `id` | string | auto-generated | — |
| `style` | object | — | — |

```jsx
const [date, setDate] = useState(null)

<DatePicker label="Date" value={date} onChange={setDate} />
<DatePicker label="Date" value={date} onChange={setDate} state="error" hint="Please select a date" />
<DatePicker label="Date" value={date} onChange={setDate} state="disabled" />
```

---

## Display

### Image ✅
`src/components/display/Image/Image.jsx`

Responsive image container with locked aspect ratio, object-fit, border radius tokens, a grey loading skeleton, and a broken-image fallback icon. Always fills its container width.

| Prop | Type | Default | Values |
|---|---|---|---|
| `src` | string | — | Image URL |
| `alt` | string | `''` | — |
| `aspectRatio` | string | `'3/2'` | Any CSS ratio — `'3/2'` `'16/9'` `'1/1'` `'4/3'` |
| `radius` | string | `'none'` | `'none'` `'sm'` `'md'` `'lg'` `'full'` |
| `fit` | string | `'cover'` | `'cover'` `'contain'` |
| `style` | object | — | Applied to the container — use `width` to size it |

```jsx
<Image src={url} alt="Cattle in yard" aspectRatio="3/2" />
<Image src={url} alt="Lot image" aspectRatio="3/2" radius="md" />
<Image src={url} alt="Avatar" aspectRatio="1/1" radius="full" style={{ width: '48px' }} />
<Image aspectRatio="3/2" />  {/* skeleton */}
```

---

### Avatar ✅
`src/components/display/Avatar/Avatar.jsx` · Figma: `779:7613`

Circular user avatar with an optional verified badge. Falls back to a person icon when no `src` is provided. Badge size scales proportionally with the avatar.

| Prop | Type | Default | |
|---|---|---|---|
| `src` | string | — | Image URL |
| `alt` | string | `''` | — |
| `size` | number | `40` | Diameter in px |
| `verified` | boolean | `false` | Shows green check badge at bottom-right |
| `style` | object | — | Applied to the outer wrapper |

```jsx
<Avatar src={url} alt="User" />
<Avatar src={url} alt="User" verified />
<Avatar src={url} alt="User" size={64} verified />
<Avatar alt="User" />  {/* person icon fallback */}
```

---

### Chip ✅
`src/components/display/Chip/Chip.jsx` · Figma: `188:5562`

Filter chip used to represent an active filter or selection, with an optional remove button. Background uses `--color-bg-grey-light` (#E4E8ED).

| Prop | Type | Default |
|---|---|---|
| `label` | string | — |
| `onRemove` | func | — | Optional — omit to hide the × button |
| `style` | object | — |
| `className` | string | — |

```jsx
<Chip label="Dubbo" onRemove={() => removeFilter('dubbo')} />
<Chip label="NSW" onRemove={() => removeFilter('nsw')} />
<Chip label="Angus × Hereford" onRemove={() => removeFilter('breed')} />
```

---

### Badge ✅
`src/components/display/Badge/Badge.jsx` · Figma: `4:4352`

Small numeric count indicator. 16px height; circular for single digits, pill for 2–3 digits. Caps display at `99+`.

| Prop | Type | Default | Values |
|---|---|---|---|
| `count` | number | `1` | Any positive integer — capped at `99+` |
| `variant` | string | `'blue'` | `'blue'` `'red'` `'yellow'` `'grey'` |
| `style` | object | — | — |
| `className` | string | — | — |

```jsx
<Badge count={1} />
<Badge count={10} variant="red" />
<Badge count={100} variant="yellow" />
<Badge count={1} variant="grey" />
```

---

### Logo ✅
`src/components/display/Logo/Logo.jsx` · Figma: `10:4564` (Dark) · `10:4569` (Light) · `1794:701` (White)

AuctionsPlus horizontal logo. SVG assets are bundled in `src/assets/logo/`. The logo is a `role="img"` container with fixed aspect ratio (103 ∶ 14); inner `<img>` elements are `aria-hidden`.

| Prop | Type | Default | Values |
|---|---|---|---|
| `variant` | string | `'dark'` | `'dark'` `'light'` `'white'` |
| `width` | string | `'175px'` | Any CSS width value |
| `style` | object | — | — |
| `className` | string | — | — |

**Variant guide:**
- `dark` — coloured icon + navy wordmark → use on white / light backgrounds
- `light` — coloured icon + white wordmark → use on dark / navy backgrounds
- `white` — white icon + white wordmark → use on brand-primary coloured backgrounds

```jsx
<Logo />
<Logo variant="light" />
<Logo variant="white" />
<Logo width="120px" />
<Logo width="240px" />
```

---

## Tags & Badges

All tags accept `style` and `className` props.

---

### PriceTag ✅
Figma: `162:8789`

| Prop | Values | Default |
|---|---|---|
| `label` | `'$/Head'` `'$/Lot'` `'$/Unit'` `'c/kg L'` `'c/kg D'` | `'$/Head'` |

```jsx
<PriceTag label="$/Head" />
<PriceTag label="c/kg L" />
```

---

### AssessmentTag ✅
Figma: `162:8800`

| Prop | Values | Default |
|---|---|---|
| `label` | `'Assessed'` `'Described'` | `'Assessed'` |

```jsx
<AssessmentTag label="Assessed" />
<AssessmentTag label="Described" />
```

---

### AccreditationTag ✅
Figma: `162:8805`

| Prop | Values | Default |
|---|---|---|
| `label` | `'EU'` `'PCAS Elig'` `'PCAS Cert'` `'NE'` | `'EU'` |

```jsx
<AccreditationTag label="EU" />
<AccreditationTag label="PCAS Cert" />
```

---

### LotStatusTag ✅
Figma: `162:8824`

| Prop | Values | Default |
|---|---|---|
| `variant` | `'published'` `'in-progress'` `'live'` `'stud-verified'` | `'published'` |

```jsx
<LotStatusTag variant="published" />
<LotStatusTag variant="live" />
<LotStatusTag variant="stud-verified" />
```

---

### PercentileTag ✅
Figma: `301:10593`

| Prop | Type | Values | Default |
|---|---|---|---|
| `percentile` | number | `5` `10` `20` `50` | `5` |
| `size` | string | `'sm'` `'md'` | `'sm'` |

```jsx
<PercentileTag percentile={5} />
<PercentileTag percentile={10} size="md" />
<PercentileTag percentile={50} />
```

---

### SoldStatusTag ✅
Figma: `69:192`

| Prop | Values | Default |
|---|---|---|
| `variant` | `'sold'` `'passed-in'` `'withdrawn'` `'no-bids'` | `'sold'` |

```jsx
<SoldStatusTag variant="sold" />
<SoldStatusTag variant="passed-in" />
<SoldStatusTag variant="no-bids" />
```

---

### NewTag ✅
Figma: `162:8604`

| Prop | Values | Default |
|---|---|---|
| `variant` | `'new'` `'beta'` | `'new'` |

```jsx
<NewTag variant="new" />
<NewTag variant="beta" />
```

---

### CardKeyInfoTag ✅
Figma: `162:8829`

| Prop | Type | Values | Default |
|---|---|---|---|
| `variant` | string | `'buy-now'` `'make-offer'` `'reoffered'` `'withdrawn'` | `'buy-now'` |
| `label` | string | Optional text override | variant default |

```jsx
<CardKeyInfoTag variant="buy-now" />
<CardKeyInfoTag variant="make-offer" />
<CardKeyInfoTag variant="withdrawn" label="Lot withdrawn by vendor" />
```

---

### AuctionTypeTag ✅
Figma: `57:1281`

| Prop | Values | Default |
|---|---|---|
| `variant` | `'stud'` `'commercial'` `'machinery'` `'property'` `'special-commercial'` `'charity'` | `'stud'` |

```jsx
<AuctionTypeTag variant="stud" />
<AuctionTypeTag variant="commercial" />
<AuctionTypeTag variant="machinery" />
```

---

### PackageTypeTag ✅
Figma: `57:1261`

| Prop | Values | Default |
|---|---|---|
| `variant` | `'premium'` `'prime'` `'classic'` `'sim-online'` `'attended'` | `'premium'` |

```jsx
<PackageTypeTag variant="premium" />
<PackageTypeTag variant="classic" />
<PackageTypeTag variant="attended" />
```

---

### BidStatusTag ✅
Figma: `746:5914`

| Prop | Values | Default |
|---|---|---|
| `variant` | `'your-bid'` `'on-market'` `'near-reserve'` `'outbid'` `'withdrawn'` | `'your-bid'` |

```jsx
<BidStatusTag variant="your-bid" />
<BidStatusTag variant="on-market" />
<BidStatusTag variant="outbid" />
```

---

### ListingStatusTag ✅
Figma: `1124:680`

| Prop | Values | Default |
|---|---|---|
| `variant` | `'published'` `'draft'` `'unpublished'` `'withdrawn'` | `'published'` |

```jsx
<ListingStatusTag variant="published" />
<ListingStatusTag variant="draft" />
<ListingStatusTag variant="unpublished" />
<ListingStatusTag variant="withdrawn" />
```

---

### FeederOptimisedTag ✅
Figma: `1683:3431`

No props — renders a fixed "Feeder Optimised" label.

```jsx
<FeederOptimisedTag />
```

---

## Navigation

### Breadcrumb ✅
`src/components/navigation/Breadcrumb/Breadcrumb.jsx` · Figma: `2289:14896`

Horizontal trail of links showing the current page location. All items except the last render as `<a>` links; the last renders as `<span aria-current="page">` in a slightly darker grey.

| Prop | Type | Default |
|---|---|---|
| `items` | array | `[]` — `{ label: string, href?: string }` |
| `style` | object | — |
| `className` | string | — |

```jsx
<Breadcrumb items={[
  { label: 'Home',     href: '/' },
  { label: 'Auctions', href: '/auctions' },
  { label: 'Cattle',   href: '/auctions/cattle' },
  { label: 'Eastern States Cattle Sale' },
]} />
```

---

### NavItem ✅
`src/components/navigation/NavItem/NavItem.jsx`

Sidebar navigation items for dashboard and admin contexts.

| Export | Use |
|---|---|
| `NavItem` | Standard nav item with optional icon, lg or sm size |
| `NavSubItem` | Indented child item shown inside an open `NavGroup` |
| `NavGroup` | Collapsible parent item — renders `children` when open |
| `NavIconItem` | Icon-only button with right-positioned tooltip |

**NavItem props:**

| Prop | Type | Default | Notes |
|---|---|---|---|
| `label` | string | — | Item label text |
| `icon` | string | — | Material Symbol name (optional) |
| `size` | string | `'lg'` | `'lg'` `'sm'` |
| `active` | bool | `false` | Highlights item |
| `disabled` | bool | `false` | Mutes item, disables click |
| `onClick` | func | — | — |
| `mx` | string | `'var(--spacing-sm)'` | Side margin — pass `'8px'` for 248px sidebar |

**NavGroup props:** `label`, `icon`, `size`, `mx`, `defaultOpen`, `children`

**NavSubItem props:** `label`, `size`, `active`, `onClick`

**NavIconItem props:** `icon`, `label` (tooltip text), `active`, `onClick`

```jsx
// 248px sidebar with icons
<NavItem icon="dashboard" label="Overview" active onClick={...} mx="8px" />
<NavItem icon="list_alt"  label="My Sales" onClick={...} mx="8px" />

// Collapsible group
<NavGroup icon="settings" label="Settings" mx="8px" defaultOpen>
  <NavSubItem label="Profile" />
  <NavSubItem label="Billing" active />
</NavGroup>

// Icon-only sidebar (64px wide)
<NavIconItem icon="dashboard" label="Overview" active onClick={...} />
```

---

### Tab ✅
`src/components/navigation/Tab/Tab.jsx` · Figma: `17:5098`

Single tab item and a managed tab strip. Use `Tab` standalone or `TabBar` for a full strip. Active/hover state shows blue text and a 2px blue bottom border.

| Component | Prop | Type | Default | Notes |
|---|---|---|---|---|
| `Tab` | `label` | string | — | — |
| | `active` | bool | `false` | — |
| | `leadingIcon` | string | — | Material Symbol name |
| | `badge` | number | — | Trailing Badge count |
| | `onClick` | func | — | — |
| `TabBar` | `tabs` | array | `[]` | `{ value, label, icon?, badge? }` |
| | `value` | string | — | Active tab value |
| | `onChange` | func | — | Called with selected value |

```jsx
<TabBar
  value={tab}
  onChange={setTab}
  tabs={[
    { value: 'lots',    label: 'Lots',   badge: 4 },
    { value: 'results', label: 'Results' },
    { value: 'cattle',  label: 'Cattle', icon: 'raven' },
  ]}
/>
```

---

## Feedback

### Tooltip ✅
`src/components/feedback/Tooltip/Tooltip.jsx` · Figma: `183:22289`

Wraps any trigger element and shows a dark label on hover. Hover state managed with `useState`. The bubble is absolutely positioned relative to the trigger.

| Prop | Type | Default | Values |
|---|---|---|---|
| `content` | string | — | Tooltip text |
| `placement` | string | `'top'` | `'top'` `'bottom'` `'left'` `'right'` |
| `children` | node | — | The trigger element |
| `style` | object | — | Applied to the tooltip bubble |

```jsx
<Tooltip content="Save your listing" placement="top">
  <Button variant="secondary">Save</Button>
</Tooltip>
```

---

### Message ✅
`src/components/feedback/Message/Message.jsx` · Figma: `182:22244` (info) · `182:22245` (warning) · `182:22246` (error)

Inline feedback banner with a leading icon and text. Full-width by default.

| Prop | Type | Default | Values |
|---|---|---|---|
| `variant` | string | `'info'` | `'info'` `'warning'` `'error'` |
| `children` | node | — | Message text |
| `style` | object | — | — |
| `className` | string | — | — |

```jsx
<Message variant="info">Your changes have been saved.</Message>
<Message variant="warning">Your session will expire in 5 minutes.</Message>
<Message variant="error">Something went wrong. Please try again.</Message>
```

---

## Patterns

### Header ✅
`src/components/patterns/Header/Header.jsx` · Figma: `2286:14218` (main bar) · `2286:14419` (sub-nav)

Full-width dark site header. Renders a main bar (logo, search, nav links, icon buttons, user avatar) and a fixed sub-nav row (commodity + tools links). Sub-nav items are hardcoded.

Named exports: `Header` (desktop), `MobileHeader` (hamburger layout ≤390px), `TopBarNav`, `BottomBarLeftNav`, `BottomBarRightNav`.

| Prop | Type | Default |
|---|---|---|
| `navLinks` | string[] | `['Listings', 'Dashboard']` |
| `searchPlaceholder` | string | `'Search Upcoming Lots & Auctions'` |
| `style` | object | — |

```jsx
// Desktop
<Header />
<Header navLinks={['Listings', 'Dashboard', 'Reports']} />

// Mobile (toggle at ≤390px breakpoint)
<MobileHeader />
```

---

### Footer ✅
`src/components/patterns/Footer/Footer.jsx` · Figma: `2286:14270`

Full-width dark site footer. Renders logo, App Store / Google Play badges, four nav columns (Company, Tools & Resources, Support, Selling), legal links, copyright, and social icons. All content is hardcoded.

Named exports: `Footer` (desktop), `MobileFooter` (single-column stacked layout).

| Prop | Type | Default |
|---|---|---|
| `style` | object | — |

```jsx
// Desktop
<Footer />

// Mobile
<MobileFooter />
```

---

### Toast ✅
`src/components/feedback/Toast/Toast.jsx`

Floating notification system. Wrap the app in `<ToastProvider>` once, then call `useToast()` anywhere to imperatively show toasts. Toasts stack bottom-right, auto-dismiss after 4 seconds by default.

| Prop (`show()`) | Type | Default | |
|---|---|---|---|
| `message` | string | — | Required body text |
| `title` | string | — | Optional bold heading |
| `variant` | string | `'info'` | `'success'` `'error'` `'warning'` `'info'` |
| `duration` | number | `4000` | Auto-dismiss ms. `0` = persistent |

```jsx
// Wrap once at app root
<ToastProvider>
  <App />
</ToastProvider>

// Use anywhere
const { show } = useToast()
show({ variant: 'success', title: 'Saved', message: 'Your changes were saved.' })
show({ variant: 'error', message: 'Something went wrong.' })
show({ variant: 'warning', message: 'Session expiring.', duration: 0 })
```

---

### Pagination ✅
`src/components/navigation/Pagination/Pagination.jsx`

Controlled page navigation. Shows up to 7 page buttons with ellipsis collapsing for large page counts. Prev/next chevron buttons disable at boundaries.

| Prop | Type | Default | |
|---|---|---|---|
| `page` | number | `1` | Current page (1-indexed) |
| `total` | number | — | Total number of pages |
| `onChange` | function | — | Called with new page number |
| `style` | object | — | |

```jsx
const [page, setPage] = useState(1)

<Pagination page={page} total={24} onChange={setPage} />
```

---

### Empty State ✅
`src/components/display/EmptyState/EmptyState.jsx`

Shown when a list, search, or section has no content. Stacks a grey icon circle, heading, supporting message, and optional CTA button.

| Prop | Type | Default | |
|---|---|---|---|
| `icon` | string | `'inbox'` | Material Symbol name |
| `title` | string | — | Bold heading |
| `message` | string | — | Supporting copy |
| `action` | `{ label, onClick }` | — | Optional primary button |
| `style` | object | — | |

```jsx
<EmptyState
  icon="search_off"
  title="No results found"
  message="Try adjusting your filters or search terms."
  action={{ label: 'Clear filters', onClick: handleClear }}
/>
```

---

### ProgressIndicator ✅
`src/components/feedback/ProgressIndicator/ProgressIndicator.jsx`

Horizontal bar showing a percentage value. Four colour variants, two sizes.

| Prop | Type | Default | Values |
|---|---|---|---|
| `value` | number | `0` | 0–100 |
| `label` | string | — | Shown above the bar |
| `showValue` | bool | `true` | Show `%` value to the right |
| `size` | string | `'md'` | `'sm'` (4px) `'md'` (8px) |
| `variant` | string | `'default'` | `'default'` `'success'` `'warning'` `'error'` |
| `style` | object | — | — |

```jsx
<ProgressIndicator value={72} label="Uploading document" />
<ProgressIndicator value={100} variant="success" label="Complete" />
<ProgressIndicator value={45} variant="warning" size="sm" showValue={false} />
<ProgressIndicator value={20} variant="error" label="Failed" />
```

---

### ProgressTracker ✅
`src/components/feedback/ProgressTracker/ProgressTracker.jsx`

Multi-step workflow indicator. Horizontal or vertical layout.

| Prop | Type | Default | Values |
|---|---|---|---|
| `steps` | array | `[]` | `{ label, description? }` objects |
| `activeStep` | number | `0` | 0-based index of current step |
| `variant` | string | `'horizontal'` | `'horizontal'` `'vertical'` |
| `style` | object | — | — |

```jsx
<ProgressTracker
  steps={[
    { label: 'Account details',  description: 'Name, email and password' },
    { label: 'Verification',     description: 'Confirm your identity' },
    { label: 'Listing details',  description: 'Add lot information' },
    { label: 'Review & submit',  description: 'Check and confirm' },
  ]}
  activeStep={1}
/>

<ProgressTracker
  steps={steps}
  activeStep={activeStep}
  variant="vertical"
/>
```

---

### Announcement ✅
`src/components/feedback/Announcement/Announcement.jsx`

Full-width dismissible brand-primary banner for platform-wide communications.

| Prop | Type | Default |
|---|---|---|
| `title` | string | — | Bold announcement text (required) |
| `message` | string | — | Supporting copy |
| `action` | `{ label, onClick }` | — | Optional CTA button |
| `onDismiss` | func | — | Called when × is clicked |
| `style` | object | — | — |

```jsx
<Announcement
  title="AuctionsPlus National Sheep Sale — entries now open."
  message="Early bird listing fee waived until 15 April."
  action={{ label: 'Enter your lots', onClick: handleEnter }}
  onDismiss={handleDismiss}
/>
```

---

### CommodityNav ✅
`src/components/navigation/CommodityNav/CommodityNav.jsx`

Horizontal scrollable row of `LargeIconButton` items for switching between commodity types. Hardcoded commodities: Cattle, Sheep, Machinery, Equine, Dog, Goat, Property.

| Prop | Type | Default |
|---|---|---|
| `value` | string | — | Active commodity id |
| `onChange` | func | — | Called with selected id |
| `style` | object | — | — |

```jsx
const [commodity, setCommodity] = useState('cattle')

<CommodityNav value={commodity} onChange={setCommodity} />
```

---

### AgentContactCard ✅
`src/components/patterns/AgentContactCard/AgentContactCard.jsx` · Figma: `2364:16265`

Agent card with photo, name, role, Phone/Email action buttons, and agency logo footer.

| Prop | Type | Default |
|---|---|---|
| `agentName` | string | `'Tim Smith'` |
| `agentRole` | string | `'Agent/Assessor'` |
| `avatarSrc` | string | — | Agent photo URL |
| `agencyLogo` | string | — | Agency logo image URL |
| `agencyName` | string | `'Elders Roma'` |
| `onPhone` | func | — | — |
| `onEmail` | func | — | — |
| `style` | object | — | — |

```jsx
<AgentContactCard
  agentName="Tim Smith"
  agentRole="Agent/Assessor"
  avatarSrc="/path/to/photo.jpg"
  agencyLogo="/path/to/logo.png"
  agencyName="Elders Roma"
  onPhone={() => {}}
  onEmail={() => {}}
/>
```

---

### LotDetailHeader ✅
`src/components/patterns/LotDetailHeader/LotDetailHeader.jsx` · Figma: `298:10434`

Lot detail page header with title, location, lot number, favourite/share/more icon buttons, and a CTA button.

| Prop | Type | Default |
|---|---|---|
| `title` | string | `'Pepperton Poll Dorset - Tag 512'` |
| `location` | string | `'Elmore, VIC'` |
| `lotNumber` | string | `'Lot 12'` |
| `cta` | `{ label, onClick }` | — | Optional CTA button |
| `onFavourite` | func | — | — |
| `onMore` | func | — | — |
| `onShare` | func | — | — |
| `style` | object | — | — |

```jsx
<LotDetailHeader
  title="Pepperton Poll Dorset - Tag 512"
  location="Elmore, VIC"
  lotNumber="Lot 12"
  cta={{ label: 'Place Bid', onClick: handleBid }}
  onFavourite={handleFavourite}
/>
```

---

## Not Yet Built

| Component | Node ID | Category |
|---|---|---|
| Catalogue Header | `209:1771` | Patterns |
