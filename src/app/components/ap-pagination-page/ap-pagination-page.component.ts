import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApDocPageComponent }     from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent }  from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }        from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }   from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }   from '../ap-code-block/ap-code-block.component';
import { ApPaginationComponent }  from '../ap-pagination/ap-pagination.component';

@Component({
  selector: 'ap-pagination-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApPaginationComponent,
  ],
  templateUrl: './ap-pagination-page.component.html',
  styleUrl:    './ap-pagination-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApPaginationPageComponent {
  fewPage    = signal(1);
  manyStart  = signal(1);
  manyMiddle = signal(5);

  readonly fewCode =
`<ap-pagination [page]="page" [total]="5" (pageChange)="page = $event" />`;
  readonly manyStartCode =
`<ap-pagination [page]="page" [total]="24" (pageChange)="page = $event" />`;
  readonly manyMiddleCode =
`<ap-pagination [page]="5" [total]="24" (pageChange)="page = $event" />`;
}
