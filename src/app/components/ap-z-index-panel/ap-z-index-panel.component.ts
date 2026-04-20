import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ZIndexEntry { token: string; label: string; raw: string; use: string; }

const Z_INDICES: ZIndexEntry[] = [
  { token: '--z-base',     label: 'z-base',     raw: '0',   use: 'Default document flow' },
  { token: '--z-dropdown', label: 'z-dropdown', raw: '100', use: 'Dropdowns, select menus, popovers' },
  { token: '--z-sticky',   label: 'z-sticky',   raw: '200', use: 'Sticky headers, fixed navigation' },
  { token: '--z-modal',    label: 'z-modal',    raw: '300', use: 'Modal dialogs, drawers, side panels' },
  { token: '--z-toast',    label: 'z-toast',    raw: '400', use: 'Toast notifications' },
  { token: '--z-tooltip',  label: 'z-tooltip',  raw: '500', use: 'Tooltips — always on top of everything' },
];

@Component({
  selector: 'ap-z-index-panel',
  standalone: true,
  templateUrl: './ap-z-index-panel.component.html',
  styleUrl:    './ap-z-index-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApZIndexPanelComponent {
  readonly zIndices = Z_INDICES;
  readonly max = 500;

  pct(raw: string): number {
    return (parseInt(raw) / this.max) * 100;
  }

  barWidth(raw: string): string {
    return raw === '0' ? '2px' : `${this.pct(raw)}%`;
  }
}
