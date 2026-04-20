import { ChangeDetectionStrategy, Component } from '@angular/core';

interface BorderWidthEntry { token: string; label: string; raw: string; use: string; }

const BORDER_WIDTHS: BorderWidthEntry[] = [
  { token: '--border-width-default', label: 'border-width-default', raw: '1px', use: 'Input borders, card outlines, dividers' },
  { token: '--border-width-thick',   label: 'border-width-thick',   raw: '2px', use: 'Active states, selected items, emphasis' },
  { token: '--border-width-focus',   label: 'border-width-focus',   raw: '3px', use: 'Keyboard focus rings — accessibility' },
];

@Component({
  selector: 'ap-border-width-panel',
  standalone: true,
  templateUrl: './ap-border-width-panel.component.html',
  styleUrl:    './ap-border-width-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApBorderWidthPanelComponent {
  readonly borderWidths = BORDER_WIDTHS;
}
