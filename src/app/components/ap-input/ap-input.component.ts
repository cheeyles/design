import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';

@Component({
  selector: 'ap-input',
  standalone: true,
  templateUrl: './ap-input.component.html',
  styleUrl:    './ap-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApInputComponent {
  @Input() label?: string;
  @Input() placeholder = 'Placeholder text';
  @Input() state: 'enabled' | 'error' | 'disabled' = 'enabled';
  @Input() size: 'md' | 'sm' = 'md';
  @Input() hint?: string;
  @Input() type: 'text' | 'password' | 'email' | 'url' | 'tel' = 'text';

  readonly focused      = signal(false);
  readonly showPassword = signal(false);

  get inputType(): string {
    if (this.type === 'password') return this.showPassword() ? 'text' : 'password';
    return this.type;
  }
}
