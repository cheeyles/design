import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ShadowEntry { token: string; label: string; desc: string; }

const SHADOWS: ShadowEntry[] = [
  { token: '--shadow-soft',  label: 'shadow-soft',  desc: 'Subtle — cards, containers' },
  { token: '--shadow-light', label: 'shadow-light', desc: 'Elevated — dropdowns, modals' },
  { token: '--shadow-top',   label: 'shadow-top',   desc: 'Directional — bottom bars, trays' },
];

@Component({
  selector: 'ap-shadows-panel',
  standalone: true,
  templateUrl: './ap-shadows-panel.component.html',
  styleUrl:    './ap-shadows-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApShadowsPanelComponent {
  readonly shadows = SHADOWS;
}
