import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApDocPageComponent }          from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent }       from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }             from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }        from '../ap-demo-group/ap-demo-group.component';
import { ApLotDetailHeaderComponent }  from '../ap-lot-detail-header/ap-lot-detail-header.component';
import { ApLogoComponent }             from '../ap-logo/ap-logo.component';

@Component({
  selector: 'ap-page-header-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApLotDetailHeaderComponent, ApLogoComponent,
  ],
  templateUrl: './ap-page-header-page.component.html',
  styleUrl:    './ap-page-header-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApPageHeaderPageComponent {}
