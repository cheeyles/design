import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApDocPageComponent }       from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent }    from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }          from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }     from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }     from '../ap-code-block/ap-code-block.component';
import { ApCommodityNavComponent }  from '../ap-commodity-nav/ap-commodity-nav.component';

@Component({
  selector: 'ap-commodity-nav-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApCommodityNavComponent,
  ],
  templateUrl: './ap-commodity-nav-page.component.html',
  styleUrl:    './ap-commodity-nav-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApCommodityNavPageComponent {
  selected = signal('cattle');

  readonly defaultCode =
`<ap-commodity-nav
  [value]="selected"
  (valueChange)="selected = $event"
/>`;
}
