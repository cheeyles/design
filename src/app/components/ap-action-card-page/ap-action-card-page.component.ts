import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';
import { ApActionCardComponent } from '../ap-action-card/ap-action-card.component';

@Component({
  selector: 'ap-action-card-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApActionCardComponent,
  ],
  templateUrl: './ap-action-card-page.component.html',
  styleUrl:    './ap-action-card-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApActionCardPageComponent {
  readonly code =
`<ap-action-card
  icon="gavel"
  title="Create a new sale"
  description="Set up an auction, forward+ or pre-auction listing."
  actionLabel="Get started"
  (actionClick)="onStart()"
/>`;
}
