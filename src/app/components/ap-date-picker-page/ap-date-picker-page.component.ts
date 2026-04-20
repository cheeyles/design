import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApDocPageComponent }     from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent }  from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }        from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }   from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }   from '../ap-code-block/ap-code-block.component';
import { ApDatePickerComponent }  from '../ap-date-picker/ap-date-picker.component';

@Component({
  selector: 'ap-date-picker-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApDatePickerComponent,
  ],
  templateUrl: './ap-date-picker-page.component.html',
  styleUrl:    './ap-date-picker-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApDatePickerPageComponent {
  readonly date1 = signal<Date | null>(null);
  readonly date2 = signal<Date | null>(null);

  readonly statesCode =
`<!-- Default -->
<ap-date-picker label="Sale date" [value]="date" (valueChange)="date = $event" />

<!-- Error -->
<ap-date-picker label="Sale date" state="error" hint="Please select a date" />

<!-- Disabled -->
<ap-date-picker label="Sale date" state="disabled" />`;
}
