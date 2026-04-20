import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ap-chip',
  standalone: true,
  templateUrl: './ap-chip.component.html',
  styleUrl:    './ap-chip.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApChipComponent {
  @Input() label = '';
  @Output() remove = new EventEmitter<void>();

  get hasRemove(): boolean {
    return this.remove.observed;
  }
}
