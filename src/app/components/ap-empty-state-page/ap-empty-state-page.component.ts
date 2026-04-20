import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApDocPageComponent }      from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent }   from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }         from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }    from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }    from '../ap-code-block/ap-code-block.component';
import { ApEmptyStateComponent }   from '../ap-empty-state/ap-empty-state.component';

@Component({
  selector: 'ap-empty-state-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApEmptyStateComponent,
  ],
  templateUrl: './ap-empty-state-page.component.html',
  styleUrl:    './ap-empty-state-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApEmptyStatePageComponent {
  readonly code =
`<ap-empty-state
  icon="inbox"
  title="No lots found"
  message="Try adjusting your filters or search term."
  actionLabel="Clear filters"
  (actionClick)="clearFilters()"
/>`;
}
