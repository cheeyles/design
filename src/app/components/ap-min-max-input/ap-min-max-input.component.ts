import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';

@Component({
  selector: 'ap-min-max-input',
  standalone: true,
  templateUrl: './ap-min-max-input.component.html',
  styleUrl:    './ap-min-max-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApMinMaxInputComponent {
  @Input() label?: string;
  @Input() minPlaceholder = 'Min';
  @Input() maxPlaceholder = 'Max';
  @Input() state: 'enabled' | 'error' | 'disabled' = 'enabled';

  readonly focusedMin = signal(false);
  readonly focusedMax = signal(false);
}
