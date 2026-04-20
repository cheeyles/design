import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApDocPageComponent }     from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent }  from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }        from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }   from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }   from '../ap-code-block/ap-code-block.component';
import { ApAuctionCardComponent } from '../ap-auction-card/ap-auction-card.component';

@Component({
  selector: 'ap-auction-card-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApAuctionCardComponent,
  ],
  templateUrl: './ap-auction-card-page.component.html',
  styleUrl:    './ap-auction-card-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApAuctionCardPageComponent {
  readonly code =
`<ap-auction-card
  commodity="cattle"
  title="Eastern States Cattle Sale"
  auctionNo="#128194"
  commodityLabel="Cattle"
  auctionType="Auction"
  lotCount="67 lots"
  timer="Mon, 17 Feb 2025, 4:00 PM AEDT"
  ctaLabel="Connect to Bid"
  (ctaClick)="onBid()"
/>`;
}
