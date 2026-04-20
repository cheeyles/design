import { ChangeDetectionStrategy, Component } from '@angular/core';

interface OpacityEntry { token: string; label: string; raw: string; use: string; }

const OPACITIES: OpacityEntry[] = [
  { token: '--opacity-disabled', label: 'opacity-disabled', raw: '0.4', use: 'Disabled interactive elements' },
  { token: '--opacity-subtle',   label: 'opacity-subtle',   raw: '0.6', use: 'Placeholder text, secondary hints' },
  { token: '--opacity-overlay',  label: 'opacity-overlay',  raw: '0.8', use: 'Modal backdrop overlay' },
];

@Component({
  selector: 'ap-opacity-panel',
  standalone: true,
  templateUrl: './ap-opacity-panel.component.html',
  styleUrl:    './ap-opacity-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApOpacityPanelComponent {
  readonly opacities = OPACITIES;
}
