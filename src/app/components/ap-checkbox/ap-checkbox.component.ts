import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ap-checkbox',
  standalone: true,
  templateUrl: './ap-checkbox.component.html',
  styleUrl:    './ap-checkbox.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApCheckboxComponent {
  @Input() label?: string;
  @Input() checked = false;
  @Input() disabled = false;
  @Input() indeterminate = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  get iconName(): string {
    if (this.indeterminate) return 'indeterminate_check_box';
    return this.checked ? 'check_box' : 'check_box_outline_blank';
  }

  get iconColor(): string {
    return (this.checked || this.indeterminate) ? 'var(--color-brand-primary)' : 'var(--color-border-grey)';
  }
}
