import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';
import { ApComingSoonComponent } from '../ap-coming-soon/ap-coming-soon.component';
import { ApButtonComponent }     from '../ap-button/ap-button.component';

@Component({
  selector: 'ap-button-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApComingSoonComponent, ApButtonComponent,
  ],
  templateUrl: './ap-button-page.component.html',
  styleUrl: './ap-button-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApButtonPageComponent {
  readonly variantsCode =
`<ap-button color="primary">Primary</ap-button>
<ap-button color="secondary">Secondary</ap-button>
<ap-button color="positive">Positive</ap-button>
<ap-button color="destructive">Destructive</ap-button>
<ap-button color="primary" size="sm">Primary</ap-button>
<ap-button color="primary" [disabled]="true">Primary</ap-button>`;

  readonly iconsCode =
`<!-- leadingIcon / trailingIcon accept any Material Symbol name -->
<ap-button color="primary" leadingIcon="add">Create Lot</ap-button>
<ap-button color="secondary" trailingIcon="keyboard_arrow_down">Sort</ap-button>

<!-- Icon only — add class="icon-btn" for a square button -->
<ap-button color="primary" leadingIcon="add" class="icon-btn" />`;

  readonly textCode =
`<ap-button color="text">View today's auctions</ap-button>
<ap-button color="text" leadingIcon="keyboard_arrow_down">Expand</ap-button>
<ap-button color="text" trailingIcon="chevron_right">View today's auctions</ap-button>`;
}
