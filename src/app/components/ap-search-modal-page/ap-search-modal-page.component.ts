import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApDocPageComponent }       from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent }    from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }          from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }     from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }     from '../ap-code-block/ap-code-block.component';
import { ApButtonComponent }        from '../ap-button/ap-button.component';
import { ApSearchModalComponent }   from '../ap-search-modal/ap-search-modal.component';

@Component({
  selector: 'ap-search-modal-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApButtonComponent, ApSearchModalComponent,
  ],
  templateUrl: './ap-search-modal-page.component.html',
  styleUrl:    './ap-search-modal-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApSearchModalPageComponent {
  open = signal(false);

  readonly code =
`<ap-button color="secondary" leadingIcon="search" (clicked)="open = true">
  Search
</ap-button>

<ap-search-modal
  [open]="open"
  placeholder="Search auctions, lots, vendors…"
  (close)="open = false"
  (search)="onSearch($event)"
/>`;
}
