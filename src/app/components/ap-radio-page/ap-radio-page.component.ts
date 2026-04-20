import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';
import { ApRadioComponent }      from '../ap-radio/ap-radio.component';
import { ApRadioGroupComponent } from '../ap-radio-group/ap-radio-group.component';

@Component({
  selector: 'ap-radio-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApRadioComponent, ApRadioGroupComponent,
  ],
  templateUrl: './ap-radio-page.component.html',
  styleUrl:    './ap-radio-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApRadioPageComponent {
  readonly groupValue = signal('option-a');
  readonly breedOptions = ['Angus', 'Hereford', 'Murray Grey', 'Shorthorn'];

  readonly statesCode =
`<!-- Unchecked -->
<ap-radio label="Option A" />

<!-- Checked -->
<ap-radio label="Option B" [checked]="true" />

<!-- Disabled -->
<ap-radio label="Option C" [disabled]="true" />`;

  readonly groupCode =
`<ap-radio-group
  label="Select a breed"
  name="breed"
  [options]="['Angus', 'Hereford', 'Murray Grey', 'Shorthorn']"
  [value]="selectedBreed"
  (valueChange)="selectedBreed = $event"
/>`;
}
