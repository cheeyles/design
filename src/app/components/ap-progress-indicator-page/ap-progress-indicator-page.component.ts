import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApDocPageComponent }             from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent }          from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }                from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }           from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }           from '../ap-code-block/ap-code-block.component';
import { ApProgressIndicatorComponent }  from '../ap-progress-indicator/ap-progress-indicator.component';

@Component({
  selector: 'ap-progress-indicator-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApProgressIndicatorComponent,
  ],
  templateUrl: './ap-progress-indicator-page.component.html',
  styleUrl:    './ap-progress-indicator-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApProgressIndicatorPageComponent {
  readonly code =
`<ap-progress-indicator [value]="68" label="Upload progress" />

<ap-progress-indicator [value]="100" variant="success" label="Complete" />

<ap-progress-indicator [value]="45" variant="warning" label="Capacity" />

<ap-progress-indicator [value]="12" variant="error" label="Storage" />`;
}
