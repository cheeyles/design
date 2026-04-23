import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';

@Component({
  selector: 'ap-search-field-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent,
    ApDemoGroupComponent, ApCodeBlockComponent,
  ],
  templateUrl: './ap-search-field-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApSearchFieldPageComponent {
  readonly searchPillCode =
`<div class="search-pill">
  <span class="icon-outlined search-pill__icon">search</span>
  <input class="search-pill__input" type="search" placeholder="Search Upcoming Lots &amp; Auctions" />
</div>`;
}
