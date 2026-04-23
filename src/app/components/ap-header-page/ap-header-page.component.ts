import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';
import { ApHeaderComponent }     from '../ap-header/ap-header.component';
import { ApToggleComponent }     from '../ap-toggle/ap-toggle.component';

@Component({
  selector: 'ap-header-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApHeaderComponent, ApToggleComponent,
  ],
  templateUrl: './ap-header-page.component.html',
  styleUrl:    './ap-header-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApHeaderPageComponent {
  mobile = signal(false);

  readonly desktopCode   = `<ap-header />`;
  readonly mobileCode    = `<ap-header [mobile]="true" />`;
  readonly dashboardCode = `<ap-header variant="dashboard" />`;
  readonly listingsCode  = `<ap-header variant="listings" />`;
}
