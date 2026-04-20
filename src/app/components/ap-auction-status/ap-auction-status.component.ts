import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type AuctionStatusVariant = 'stud' | 'commercial' | 'machinery' | 'property' | 'special-commercial' | 'charity';

interface AuctionConfig { bg: string; border: string; color: string; label: string; }

const CONFIG: Record<string, AuctionConfig> = {
  'stud':               { bg: 'var(--color-bg-green-light)',       border: 'var(--color-status-green-dark)',  color: 'var(--color-text-green)',         label: 'Stud'               },
  'commercial':         { bg: 'var(--color-bg-red-light)',         border: 'var(--color-text-red)',           color: 'var(--color-text-red)',           label: 'Commercial'         },
  'machinery':          { bg: 'var(--color-bg-orange-light)',       border: 'var(--color-text-orange)',         color: 'var(--color-text-orange)',         label: 'Machinery'          },
  'property':           { bg: 'var(--color-accent-purple-light)',   border: 'var(--color-accent-purple)',       color: 'var(--color-accent-purple)',       label: 'Property'           },
  'special-commercial': { bg: 'var(--color-brand-primary-light)',   border: 'var(--color-brand-primary-dark)', color: 'var(--color-brand-primary-dark)', label: 'Special Commercial' },
  'charity':            { bg: 'var(--color-accent-teal-light)',     border: 'var(--color-accent-teal)',         color: 'var(--color-accent-teal)',         label: 'Charity'            },
};

@Component({
  selector: 'ap-auction-status',
  standalone: true,
  templateUrl: './ap-auction-status.component.html',
  styleUrl:    './ap-auction-status.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApAuctionStatusComponent {
  @Input() variant: AuctionStatusVariant = 'stud';

  get config(): AuctionConfig {
    return CONFIG[this.variant] ?? CONFIG['stud'];
  }
}
