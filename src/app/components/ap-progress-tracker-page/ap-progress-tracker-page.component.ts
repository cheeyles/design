import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApDocPageComponent }            from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent }         from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }               from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }          from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }          from '../ap-code-block/ap-code-block.component';
import { ApProgressTrackerComponent, TrackerStep } from '../ap-progress-tracker/ap-progress-tracker.component';

@Component({
  selector: 'ap-progress-tracker-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApProgressTrackerComponent,
  ],
  templateUrl: './ap-progress-tracker-page.component.html',
  styleUrl:    './ap-progress-tracker-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApProgressTrackerPageComponent {
  readonly auctionSteps: TrackerStep[] = [
    { label: 'Draft' },
    { label: 'Review' },
    { label: 'Published' },
    { label: 'Live' },
    { label: 'Closed' },
  ];

  readonly listingSteps: TrackerStep[] = [
    { label: 'Create listing',   description: 'Enter lot details and photos' },
    { label: 'Set pricing',      description: 'Reserve, start price and GST' },
    { label: 'Review & publish', description: 'Preview and go live'          },
  ];

  readonly code =
`<ap-progress-tracker
  [steps]="steps"
  [activeStep]="2"
  variant="horizontal"
/>

<ap-progress-tracker
  [steps]="steps"
  [activeStep]="1"
  variant="vertical"
/>`;
}
