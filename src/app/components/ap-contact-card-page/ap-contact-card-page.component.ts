import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApDocPageComponent }      from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent }   from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }         from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }    from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }    from '../ap-code-block/ap-code-block.component';
import { ApContactCardComponent }  from '../ap-contact-card/ap-contact-card.component';

@Component({
  selector: 'ap-contact-card-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApContactCardComponent,
  ],
  templateUrl: './ap-contact-card-page.component.html',
  styleUrl:    './ap-contact-card-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApContactCardPageComponent {
  readonly code =
`<ap-contact-card
  agentName="Tim Smith"
  agentRole="Agent/Assessor"
  [avatarSrc]="agentPhoto"
  [agencyLogo]="agencyLogo"
  agencyName="Elders Roma"
  (phone)="onPhone()"
  (email)="onEmail()"
/>`;
}
