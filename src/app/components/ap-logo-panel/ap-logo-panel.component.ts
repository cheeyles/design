import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';
import { ApLogoComponent }       from '../ap-logo/ap-logo.component';

@Component({
  selector: 'ap-logo-panel',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent,
    ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApLogoComponent,
  ],
  templateUrl: './ap-logo-panel.component.html',
  styleUrl:    './ap-logo-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApLogoPanelComponent {
  readonly variantsCode = `<ap-logo variant="dark" />\n<ap-logo variant="light" />\n<ap-logo variant="white" />`;
  readonly iconOnlyCode = `<ap-logo variant="dark" [iconOnly]="true" width="32px" />`;
  readonly sizingCode   = `<ap-logo width="120px" />\n<ap-logo width="175px" />\n<ap-logo width="240px" />`;
}
