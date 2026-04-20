import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export type AuctionCommodity = 'cattle' | 'sheep' | 'machinery' | 'goat' | 'equine' | 'alpaca' | 'feed' | 'property' | 'charity' | 'dog' | 'auction';

@Component({
  selector: 'ap-auction-card',
  standalone: true,
  templateUrl: './ap-auction-card.component.html',
  styleUrl:    './ap-auction-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApAuctionCardComponent {
  @Input() commodity: AuctionCommodity = 'cattle';
  @Input() title       = '';
  @Input() auctionNo?: string;
  @Input() commodityLabel?: string;
  @Input() auctionType?: string;
  @Input() lotCount?: string;
  @Input() timer?: string;
  @Input() ctaLabel?: string;
  @Output() ctaClick = new EventEmitter<void>();

  get commodityIconSrc(): string {
    return `icons/commodity/${this.commodity}.svg`;
  }

  get metaItems(): string[] {
    return [this.auctionNo, this.commodityLabel, this.auctionType, this.lotCount].filter((v): v is string => !!v);
  }
}
