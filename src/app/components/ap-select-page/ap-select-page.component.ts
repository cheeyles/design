import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';
import { ApSelectComponent }     from '../ap-select/ap-select.component';

@Component({
  selector: 'ap-select-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApSelectComponent,
  ],
  templateUrl: './ap-select-page.component.html',
  styleUrl:    './ap-select-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApSelectPageComponent {
  readonly options = ['Angus', 'Hereford', 'Murray Grey', 'Shorthorn', 'Wagyu'];

  readonly val1 = signal<string | undefined>(undefined);
  readonly val2 = signal<string | undefined>(undefined);
  readonly val3 = signal<string | undefined>('Angus');

  readonly selectCode =
`<ap-select
  label="Breed"
  [options]="['Angus', 'Hereford', 'Murray Grey']"
  placeholder="Select a breed"
/>`;

  readonly statesCode =
`<!-- Error -->
<ap-select label="Breed" [options]="options" state="error" hint="Please select a breed" />

<!-- Disabled -->
<ap-select label="Breed" [options]="options" state="disabled" />

<!-- With selection -->
<ap-select label="Breed" [options]="options" value="Angus" />`;
}
