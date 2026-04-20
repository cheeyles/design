import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';
import { ApMessageComponent }    from '../ap-message/ap-message.component';

@Component({
  selector: 'ap-message-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApMessageComponent,
  ],
  templateUrl: './ap-message-page.component.html',
  styleUrl:    './ap-message-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApMessagePageComponent {
  readonly variantsCode =
`<ap-message variant="info" heading="Auction closing soon">This auction closes in 2 hours.</ap-message>
<ap-message variant="announcement" heading="Dubbo Spring Sale">New auction catalogue is now available.</ap-message>
<ap-message variant="error" heading="Something went wrong">We couldn't process your request.</ap-message>`;

  readonly ctaCode =
`<ap-message variant="info" heading="Auction closing soon" ctaLabel="View auction" (ctaClick)="handleCta()">This auction closes in 2 hours.</ap-message>`;
}
