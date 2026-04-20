import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';
import { ApToggleComponent }     from '../ap-toggle/ap-toggle.component';

@Component({
  selector: 'ap-toggle-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApToggleComponent,
  ],
  templateUrl: './ap-toggle-page.component.html',
  styleUrl:    './ap-toggle-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApTogglePageComponent {
  readonly lgOn  = signal(true);
  readonly lgOff = signal(false);
  readonly smOn  = signal(true);
  readonly smOff = signal(false);
  readonly labeled = signal(false);

  readonly sizesCode =
`<!-- Large (default) -->
<ap-toggle />
<ap-toggle [checked]="true" />

<!-- Small -->
<ap-toggle size="sm" />
<ap-toggle size="sm" [checked]="true" />`;

  readonly labelCode =
`<ap-toggle label="Enable notifications" [checked]="enabled" (checkedChange)="enabled = $event" />
<ap-toggle label="Disabled" [disabled]="true" />`;
}
