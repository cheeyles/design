import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type TagVariant =
  | 'price'
  | 'assessment'
  | 'accreditation'
  | 'feeder-optimised'
  | 'new'
  | 'beta';

@Component({
  selector: 'ap-tag',
  standalone: true,
  templateUrl: './ap-tag.component.html',
  styleUrl:    './ap-tag.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApTagComponent {
  @Input() variant: TagVariant = 'price';
  @Input() label?: string;

  get displayLabel(): string {
    if (this.label) return this.label;
    if (this.variant === 'feeder-optimised') return 'Feeder Optimised';
    if (this.variant === 'new') return 'New';
    if (this.variant === 'beta') return 'Beta';
    return '';
  }
}
