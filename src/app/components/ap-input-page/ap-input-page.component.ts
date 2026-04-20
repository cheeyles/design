import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';
import { ApInputComponent }      from '../ap-input/ap-input.component';
import { ApTextAreaComponent }   from '../ap-text-area/ap-text-area.component';

@Component({
  selector: 'ap-input-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApInputComponent, ApTextAreaComponent,
  ],
  templateUrl: './ap-input-page.component.html',
  styleUrl:    './ap-input-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApInputPageComponent {
  readonly textCode =
`<ap-input label="Label" placeholder="Enter value" />
<ap-input label="Label" state="error" hint="This field is required" />
<ap-input label="Label" state="disabled" />`;

  readonly passwordCode =
`<ap-input type="password" label="Password" />
<ap-input type="password" label="Password" state="error" hint="Password must be at least 8 characters" />
<ap-input type="password" label="Password" state="disabled" />`;

  readonly emailCode =
`<ap-input type="email" label="Email address" />
<ap-input type="email" label="Email address" state="error" hint="Please enter a valid email address" />
<ap-input type="email" label="Email address" state="disabled" />`;

  readonly urlCode =
`<ap-input type="url" label="Website" />
<ap-input type="url" label="Website" state="error" hint="Please enter a valid URL" />
<ap-input type="url" label="Website" state="disabled" />`;

  readonly telCode =
`<ap-input type="tel" label="Phone number" />
<ap-input type="tel" label="Phone number" state="error" hint="Please enter a valid phone number" />
<ap-input type="tel" label="Phone number" state="disabled" />`;

  readonly smallCode =
`<ap-input label="Label" size="sm" placeholder="Enter value" />
<ap-input label="Label" size="sm" state="error" hint="This field is required" />
<ap-input label="Label" size="sm" state="disabled" />`;

  readonly textAreaCode =
`<ap-text-area label="Description" placeholder="Enter a description…" />
<ap-text-area label="Description" [rows]="6" />
<ap-text-area label="Description" resize="none" />
<ap-text-area label="Description" state="error" hint="This field is required" />
<ap-text-area label="Description" state="disabled" />`;
}
