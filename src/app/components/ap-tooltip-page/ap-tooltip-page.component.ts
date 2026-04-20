import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';
import { ApTooltipComponent }    from '../ap-tooltip/ap-tooltip.component';
import { ApButtonComponent }     from '../ap-button/ap-button.component';

@Component({
  selector: 'ap-tooltip-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApTooltipComponent, ApButtonComponent,
  ],
  templateUrl: './ap-tooltip-page.component.html',
  styleUrl:    './ap-tooltip-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApTooltipPageComponent {
  readonly placementCode =
`<ap-tooltip content="Save your listing" placement="top">
  <ap-button color="secondary">Save</ap-button>
</ap-tooltip>`;

  readonly elementCode =
`<ap-tooltip content="Tooltip on any element">
  <span>Hover me</span>
</ap-tooltip>`;
}
