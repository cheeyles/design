import { ChangeDetectionStrategy, Component } from '@angular/core';

interface TransitionEntry { token: string; label: string; raw: string; use: string; }

const TRANSITIONS: TransitionEntry[] = [
  { token: '--transition-instant', label: 'transition-instant', raw: '0ms',        use: 'No animation — instant state change' },
  { token: '--transition-base',    label: 'transition-base',    raw: '150ms ease', use: 'Standard UI — button hover, menu highlight' },
  { token: '--transition-slow',    label: 'transition-slow',    raw: '300ms ease', use: 'Content reveals — panels, accordions, modals' },
];

@Component({
  selector: 'ap-transition-panel',
  standalone: true,
  templateUrl: './ap-transition-panel.component.html',
  styleUrl: './ap-transition-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApTransitionPanelComponent {
  readonly transitions = TRANSITIONS;
}
