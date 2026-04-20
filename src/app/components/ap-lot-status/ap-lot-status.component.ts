import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type LotStatusVariant = 'published' | 'in-progress' | 'live' | 'stud-verified';

interface LotStatusConfig {
  bg: string;
  color: string;
  label: string;
  icon: 'dot' | 'verified' | null;
}

const CONFIG: Record<string, LotStatusConfig> = {
  published:      { bg: 'var(--color-bg-green-light)',       color: 'var(--color-text-grey-dark)', label: 'Published',       icon: null       },
  'in-progress':  { bg: 'var(--color-accent-yellow-light)',  color: 'var(--color-text-grey-dark)', label: 'Lot In Progress',  icon: null       },
  live:           { bg: 'var(--color-bg-green)',             color: 'var(--color-text-white)',      label: 'LIVE',            icon: 'dot'      },
  'stud-verified':{ bg: 'var(--color-bg-light)',             color: 'var(--color-text-grey-dark)', label: 'Stud Verified',   icon: 'verified' },
};

@Component({
  selector: 'ap-lot-status',
  standalone: true,
  templateUrl: './ap-lot-status.component.html',
  styleUrl:    './ap-lot-status.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApLotStatusComponent {
  @Input() variant: LotStatusVariant = 'published';

  get config(): LotStatusConfig {
    return CONFIG[this.variant] ?? CONFIG['published'];
  }
}
