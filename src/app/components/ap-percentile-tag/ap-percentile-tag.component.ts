import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

const BG: Record<number, string> = {
  5:  'var(--color-accent-purple-light)',
  10: 'var(--color-accent-teal-light)',
  20: 'var(--color-status-orange-light)',
  50: 'var(--color-bg-grey-light)',
};

@Component({
  selector: 'ap-percentile-tag',
  standalone: true,
  templateUrl: './ap-percentile-tag.component.html',
  styleUrl:    './ap-percentile-tag.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApPercentileTagComponent {
  @Input() percentile: 5 | 10 | 20 | 50 = 5;
  @Input() size: 'sm' | 'md' = 'sm';

  get bg(): string {
    return BG[this.percentile] ?? BG[5];
  }
}
