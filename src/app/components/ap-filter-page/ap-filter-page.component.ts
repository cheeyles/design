import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';
import { ApButtonComponent }     from '../ap-button/ap-button.component';
import { ApFilterComponent }     from '../ap-filter/ap-filter.component';

@Component({
  selector: 'ap-filter-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApButtonComponent, ApFilterComponent,
  ],
  templateUrl: './ap-filter-page.component.html',
  styleUrl:    './ap-filter-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApFilterPageComponent {
  open = signal(false);

  readonly code =
`<ap-button color="secondary" leadingIcon="filter_list" (clicked)="open = true">
  Open filters
</ap-button>

<ap-filter [open]="open" (closed)="open = false" />`;
}
