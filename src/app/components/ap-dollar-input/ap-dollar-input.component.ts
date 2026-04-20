import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';

@Component({
  selector: 'ap-dollar-input',
  standalone: true,
  templateUrl: './ap-dollar-input.component.html',
  styleUrl:    './ap-dollar-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApDollarInputComponent {
  @Input() label?: string;
  @Input() placeholder = '0.00';
  @Input() state: 'enabled' | 'error' | 'disabled' = 'enabled';
  @Input() hint?: string;

  readonly focused = signal(false);
}
