import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';

@Component({
  selector: 'ap-unit-input',
  standalone: true,
  templateUrl: './ap-unit-input.component.html',
  styleUrl:    './ap-unit-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApUnitInputComponent {
  @Input() label?: string;
  @Input() placeholder = 'Placeholder text';
  @Input() unit = '$/Head';
  @Input() state: 'enabled' | 'error' | 'disabled' = 'enabled';
  @Input() size: 'md' | 'sm' = 'md';
  @Input() hint?: string;

  readonly focused = signal(false);
}
