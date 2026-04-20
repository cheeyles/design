import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApDocPageComponent }         from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent }      from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }            from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }       from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }       from '../ap-code-block/ap-code-block.component';
import { ApTagComponent }             from '../ap-tag/ap-tag.component';
import { ApLotStatusComponent }       from '../ap-lot-status/ap-lot-status.component';
import { ApPercentileTagComponent }   from '../ap-percentile-tag/ap-percentile-tag.component';
import { ApStatusTagComponent }       from '../ap-status-tag/ap-status-tag.component';
import { ApCardInfoTagComponent }     from '../ap-card-info-tag/ap-card-info-tag.component';
import { ApAuctionStatusComponent }   from '../ap-auction-status/ap-auction-status.component';
import { ApPackageTagComponent }      from '../ap-package-tag/ap-package-tag.component';
import { ApListingStatusComponent }   from '../ap-listing-status/ap-listing-status.component';
import { ApBadgeComponent }           from '../ap-badge/ap-badge.component';
import { ApChipComponent }            from '../ap-chip/ap-chip.component';

@Component({
  selector: 'ap-tags-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent,
    ApTagComponent, ApLotStatusComponent, ApPercentileTagComponent, ApStatusTagComponent,
    ApCardInfoTagComponent, ApAuctionStatusComponent, ApPackageTagComponent,
    ApListingStatusComponent, ApBadgeComponent, ApChipComponent,
  ],
  templateUrl: './ap-tags-page.component.html',
  styleUrl:    './ap-tags-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApTagsPageComponent {
  readonly priceCode =
`<ap-tag variant="price" label="$/Head" />
<ap-tag variant="price" label="$/Lot" />
<ap-tag variant="price" label="c/kg L" />`;

  readonly assessmentCode =
`<ap-tag variant="assessment" label="Assessed" />
<ap-tag variant="assessment" label="Described" />`;

  readonly accreditationCode =
`<ap-tag variant="accreditation" label="EU" />
<ap-tag variant="accreditation" label="PCAS Cert" />
<ap-tag variant="accreditation" label="WHP/ESI" />
<ap-tag variant="feeder-optimised" />`;

  readonly lotStatusCode =
`<ap-lot-status variant="published" />
<ap-lot-status variant="in-progress" />
<ap-lot-status variant="live" />
<ap-lot-status variant="stud-verified" />`;

  readonly percentileCode =
`<ap-percentile-tag [percentile]="5" />
<ap-percentile-tag [percentile]="10" size="md" />`;

  readonly bidStatusCode =
`<ap-status-tag variant="sold" />
<ap-status-tag variant="passed-in" />
<ap-status-tag variant="withdrawn" />
<ap-status-tag variant="no-bids" />`;

  readonly newCode =
`<ap-tag variant="new" />
<ap-tag variant="beta" />`;

  readonly cardKeyCode =
`<ap-card-info-tag variant="buy-now" label="Buy Now for $1,150.00/Head" />
<ap-card-info-tag variant="make-offer" />
<ap-card-info-tag variant="reoffered" label="Reoffered in 776 — Weaner Sale" />
<ap-card-info-tag variant="withdrawn" label="Lot has been withdrawn" />`;

  readonly auctionCode =
`<ap-auction-status variant="stud" />
<ap-auction-status variant="commercial" />
<ap-auction-status variant="machinery" />
<ap-auction-status variant="property" />
<ap-auction-status variant="special-commercial" />
<ap-auction-status variant="charity" />`;

  readonly packageCode =
`<ap-package-tag variant="premium" />
<ap-package-tag variant="prime" />
<ap-package-tag variant="classic" />
<ap-package-tag variant="sim-online" />
<ap-package-tag variant="attended" />`;

  readonly listingCode =
`<ap-listing-status variant="published" />
<ap-listing-status variant="draft" />
<ap-listing-status variant="unpublished" />
<ap-listing-status variant="withdrawn" />`;

  readonly badgeCode =
`<ap-badge [count]="1" color="blue" />
<ap-badge [count]="10" color="red" />
<ap-badge [count]="100" color="yellow" />
<ap-badge [count]="1" color="grey" />
<ap-badge [count]="100" />  <!-- renders "99+" -->`;

  readonly chipCode =
`<ap-chip label="Dubbo" (remove)="removeFilter('dubbo')" />
<ap-chip label="NSW" (remove)="removeFilter('nsw')" />`;
}
