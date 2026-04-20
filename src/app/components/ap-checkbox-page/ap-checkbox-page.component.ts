import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';
import { ApCheckboxComponent }   from '../ap-checkbox/ap-checkbox.component';

@Component({
  selector: 'ap-checkbox-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApCheckboxComponent,
  ],
  templateUrl: './ap-checkbox-page.component.html',
  styleUrl:    './ap-checkbox-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApCheckboxPageComponent {
  readonly checked1 = signal(false);
  readonly checked2 = signal(true);
  readonly checked3 = signal(false);
  readonly checked4 = signal(false);

  readonly statesCode =
`<!-- Unchecked -->
<ap-checkbox label="Option A" />

<!-- Checked -->
<ap-checkbox label="Option B" [checked]="true" />

<!-- Indeterminate -->
<ap-checkbox label="Option C" [indeterminate]="true" />

<!-- Disabled -->
<ap-checkbox label="Option D" [disabled]="true" />`;

  readonly groupCode =
`<ap-checkbox label="Angus" [checked]="checked1" (checkedChange)="checked1 = $event" />
<ap-checkbox label="Hereford" [checked]="checked2" (checkedChange)="checked2 = $event" />
<ap-checkbox label="Murray Grey" [checked]="checked3" (checkedChange)="checked3 = $event" />`;
}
