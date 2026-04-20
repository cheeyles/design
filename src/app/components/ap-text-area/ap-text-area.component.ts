import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';

@Component({
  selector: 'ap-text-area',
  standalone: true,
  templateUrl: './ap-text-area.component.html',
  styleUrl:    './ap-text-area.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApTextAreaComponent {
  @Input() label?: string;
  @Input() placeholder = 'Enter text';
  @Input() state: 'enabled' | 'error' | 'disabled' = 'enabled';
  @Input() hint?: string;
  @Input() rows = 4;
  @Input() resize: 'vertical' | 'horizontal' | 'both' | 'none' = 'vertical';

  readonly focused = signal(false);
}
