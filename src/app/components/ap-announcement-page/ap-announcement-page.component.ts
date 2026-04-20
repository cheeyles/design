import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApDocPageComponent }        from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent }     from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }           from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }      from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }      from '../ap-code-block/ap-code-block.component';
import { ApButtonComponent }         from '../ap-button/ap-button.component';
import { ApAnnouncementComponent }   from '../ap-announcement/ap-announcement.component';

@Component({
  selector: 'ap-announcement-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApButtonComponent, ApAnnouncementComponent,
  ],
  templateUrl: './ap-announcement-page.component.html',
  styleUrl:    './ap-announcement-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApAnnouncementPageComponent {
  showBasic  = signal(true);
  showAction = signal(true);

  readonly code =
`<ap-announcement
  title="Scheduled maintenance"
  message="The platform will be unavailable on Saturday 26 Apr from 2:00–4:00 AM AEST."
  actionLabel="Learn more"
  (dismiss)="show = false"
  (actionClick)="onLearnMore()"
/>`;
}
