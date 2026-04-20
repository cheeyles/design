import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';
import { ApFooterComponent }     from '../ap-footer/ap-footer.component';
import { ApToggleComponent }     from '../ap-toggle/ap-toggle.component';

@Component({
  selector: 'ap-footer-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApFooterComponent, ApToggleComponent,
  ],
  templateUrl: './ap-footer-page.component.html',
  styleUrl:    './ap-footer-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApFooterPageComponent {
  mobile = signal(false);

  readonly desktopCode = `<ap-footer />`;
  readonly mobileCode  = `<ap-footer [mobile]="true" />`;
}
