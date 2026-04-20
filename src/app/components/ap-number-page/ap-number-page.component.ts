import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';
import { ApNumberInputComponent } from '../ap-number-input/ap-number-input.component';
import { ApDollarInputComponent } from '../ap-dollar-input/ap-dollar-input.component';
import { ApUnitInputComponent }   from '../ap-unit-input/ap-unit-input.component';
import { ApMinMaxInputComponent } from '../ap-min-max-input/ap-min-max-input.component';

@Component({
  selector: 'ap-number-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent,
    ApNumberInputComponent, ApDollarInputComponent, ApUnitInputComponent, ApMinMaxInputComponent,
  ],
  templateUrl: './ap-number-page.component.html',
  styleUrl:    './ap-number-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApNumberPageComponent {
  readonly numberCode =
`<ap-number-input label="Quantity" />
<ap-number-input label="Error" state="error" hint="Enter a valid number" />
<ap-number-input label="Disabled" state="disabled" />`;

  readonly smallCode =
`<ap-number-input label="Quantity" size="sm" />
<ap-number-input label="Error" size="sm" state="error" hint="Enter a valid number" />
<ap-number-input label="Disabled" size="sm" state="disabled" />`;

  readonly currencyCode =
`<ap-dollar-input label="Price" />
<ap-dollar-input label="Error" state="error" hint="Enter a valid amount" />
<ap-dollar-input label="Disabled" state="disabled" />`;

  readonly unitCode =
`<ap-unit-input label="Rate" unit="$/Head" />
<ap-unit-input label="Weight" unit="kg" />
<ap-unit-input label="Error" unit="$/Head" state="error" hint="Enter a valid rate" />
<ap-unit-input label="Disabled" unit="$/Head" state="disabled" />`;

  readonly minMaxCode =
`<ap-min-max-input label="Weight range" />
<ap-min-max-input label="Error" state="error" />
<ap-min-max-input label="Disabled" state="disabled" />`;
}
