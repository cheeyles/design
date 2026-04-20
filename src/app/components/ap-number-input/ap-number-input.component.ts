import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';

@Component({
  selector: 'ap-number-input',
  standalone: true,
  templateUrl: './ap-number-input.component.html',
  styleUrl:    './ap-number-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApNumberInputComponent {
  @Input() label?: string;
  @Input() placeholder = '0';
  @Input() state: 'enabled' | 'error' | 'disabled' = 'enabled';
  @Input() size: 'md' | 'sm' = 'md';
  @Input() hint?: string;

  readonly focused = signal(false);
}
