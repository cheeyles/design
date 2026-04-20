import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type CardInfoVariant = 'buy-now' | 'make-offer' | 'reoffered' | 'withdrawn';

interface CardInfoConfig {
  bg: string;
  borderColor: string;
  color: string;
  icon: string;
  defaultLabel: string;
}

const CONFIG: Record<string, CardInfoConfig> = {
  'buy-now':    { bg: 'var(--color-accent-teal-light)',    borderColor: 'var(--color-accent-teal)',         color: 'var(--color-accent-teal)',         icon: 'sell', defaultLabel: 'Buy Now'                   },
  'make-offer': { bg: 'var(--color-accent-purple-light)',  borderColor: 'var(--color-accent-purple)',       color: 'var(--color-accent-purple)',       icon: 'sell', defaultLabel: 'Make an Offer'             },
  'reoffered':  { bg: 'var(--color-brand-primary-light)',  borderColor: 'var(--color-brand-primary-dark)',  color: 'var(--color-brand-primary-dark)',  icon: 'info', defaultLabel: 'Reoffered'                 },
  'withdrawn':  { bg: 'var(--color-bg-grey-light)',        borderColor: 'var(--color-text-dark)',           color: 'var(--color-text-dark)',           icon: 'info', defaultLabel: 'Lot has been withdrawn'    },
};

@Component({
  selector: 'ap-card-info-tag',
  standalone: true,
  templateUrl: './ap-card-info-tag.component.html',
  styleUrl:    './ap-card-info-tag.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApCardInfoTagComponent {
  @Input() variant: CardInfoVariant = 'buy-now';
  @Input() label?: string;

  get config(): CardInfoConfig {
    return CONFIG[this.variant] ?? CONFIG['buy-now'];
  }

  get displayLabel(): string {
    return this.label ?? this.config.defaultLabel;
  }
}
