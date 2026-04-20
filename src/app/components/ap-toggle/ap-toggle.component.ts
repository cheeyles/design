import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'ap-toggle',
  standalone: true,
  templateUrl: './ap-toggle.component.html',
  styleUrl:    './ap-toggle.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApToggleComponent {
  @Input() label?: string;
  @Input() checked = false;
  @Input() disabled = false;
  @Input() size: 'lg' | 'sm' = 'lg';
  @Output() checkedChange = new EventEmitter<boolean>();

  readonly hovered = signal(false);
}
