import { ChangeDetectionStrategy, Component } from '@angular/core';

interface LayoutEntry { token: string; label: string; raw: string; use: string; }

const LAYOUT_TOKENS: LayoutEntry[] = [
  { token: '--layout-max-width',      label: 'layout-max-width',      raw: '1280px', use: 'Maximum content container width' },
  { token: '--layout-page-padding-x', label: 'layout-page-padding-x', raw: '24px',   use: 'Horizontal padding on the page shell' },
  { token: '--layout-sidebar-width',  label: 'layout-sidebar-width',  raw: '240px',  use: 'Standard sidebar width' },
  { token: '--layout-content-gap',    label: 'layout-content-gap',    raw: '24px',   use: 'Gap between sidebar and main content' },
  { token: '--layout-section-gap',    label: 'layout-section-gap',    raw: '32px',   use: 'Vertical gap between page sections' },
];

@Component({
  selector: 'ap-layout-panel',
  standalone: true,
  templateUrl: './ap-layout-panel.component.html',
  styleUrl: './ap-layout-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApLayoutPanelComponent {
  readonly layoutTokens = LAYOUT_TOKENS;
}
