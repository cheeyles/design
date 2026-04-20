import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface TrackerStep { label: string; description?: string; }

type StepState = 'complete' | 'active' | 'upcoming';

@Component({
  selector: 'ap-progress-tracker',
  standalone: true,
  templateUrl: './ap-progress-tracker.component.html',
  styleUrl:    './ap-progress-tracker.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApProgressTrackerComponent {
  @Input() steps:      TrackerStep[] = [];
  @Input() activeStep = 0;
  @Input() variant: 'horizontal' | 'vertical' = 'horizontal';

  stepState(i: number): StepState {
    if (i < this.activeStep)  return 'complete';
    if (i === this.activeStep) return 'active';
    return 'upcoming';
  }

  connectorColor(i: number): string {
    return this.stepState(i) === 'complete'
      ? 'var(--color-bg-green)'
      : 'var(--color-border-grey-light)';
  }
}
