import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type StatusTagVariant = 'sold' | 'passed-in' | 'withdrawn' | 'no-bids';

interface StatusConfig { bg: string; color: string; label: string; }

const CONFIG: Record<string, StatusConfig> = {
  'sold':      { bg: 'var(--color-bg-green)',       color: 'var(--color-text-white)', label: 'SOLD'      },
  'passed-in': { bg: 'var(--color-bg-orange)',       color: 'var(--color-text-white)', label: 'PASSED IN' },
  'withdrawn': { bg: 'var(--color-bg-dark)',          color: 'var(--color-text-white)', label: 'WITHDRAWN' },
  'no-bids':   { bg: 'var(--color-bg-grey-light)',   color: 'var(--color-text-dark)',  label: 'NO BIDS'   },
};

@Component({
  selector: 'ap-status-tag',
  standalone: true,
  templateUrl: './ap-status-tag.component.html',
  styleUrl:    './ap-status-tag.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApStatusTagComponent {
  @Input() variant: StatusTagVariant = 'sold';

  get config(): StatusConfig {
    return CONFIG[this.variant] ?? CONFIG['sold'];
  }
}
