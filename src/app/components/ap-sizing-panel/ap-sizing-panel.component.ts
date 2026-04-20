import { ChangeDetectionStrategy, Component } from '@angular/core';

interface SizingEntry { token: string; label: string; raw: string; use: string; }

const ICON_SIZES: SizingEntry[] = [
  { token: '--size-icon-xs',  label: 'size-icon-xs',  raw: '14px', use: 'Inline icon at label-sm scale' },
  { token: '--size-icon-sm',  label: 'size-icon-sm',  raw: '16px', use: 'Icon inside tags / badges' },
  { token: '--size-icon-md',  label: 'size-icon-md',  raw: '18px', use: 'Icon inside CTA buttons' },
  { token: '--size-icon-lg',  label: 'size-icon-lg',  raw: '20px', use: 'Icon inside text/link buttons' },
  { token: '--size-icon-xl',  label: 'size-icon-xl',  raw: '24px', use: 'Standalone icon, nav icons' },
  { token: '--size-icon-2xl', label: 'size-icon-2xl', raw: '32px', use: 'Large decorative icons' },
];

const BTN_SIZES: SizingEntry[] = [
  { token: '--size-btn-sm', label: 'size-btn-sm', raw: '32px', use: 'Compact / toolbar buttons' },
  { token: '--size-btn-md', label: 'size-btn-md', raw: '40px', use: 'Default CTA button height' },
  { token: '--size-btn-lg', label: 'size-btn-lg', raw: '48px', use: 'Large / hero CTAs' },
];

@Component({
  selector: 'ap-sizing-panel',
  standalone: true,
  templateUrl: './ap-sizing-panel.component.html',
  styleUrl:    './ap-sizing-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApSizingPanelComponent {
  readonly iconSizes = ICON_SIZES;
  readonly btnSizes  = BTN_SIZES;
}
