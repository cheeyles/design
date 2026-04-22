import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';
import { ApImageComponent }      from '../ap-image/ap-image.component';

@Component({
  selector: 'ap-image-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApImageComponent,
  ],
  templateUrl: './ap-image-page.component.html',
  styleUrl:    './ap-image-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApImagePageComponent {
  readonly imgSrc = 'https://plus.unsplash.com/premium_photo-1663011279090-63d0e5d9e5c7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  readonly ratioCode =
`<ap-image [src]="url" alt="Cattle" aspectRatio="3/2" />
<ap-image [src]="url" alt="Cattle" aspectRatio="16/9" />
<ap-image [src]="url" alt="Cattle" aspectRatio="1/1" />`;

  readonly radiusCode =
`<ap-image [src]="url" alt="Cattle" radius="md" />
<ap-image [src]="url" alt="Cattle" radius="lg" />
<ap-image [src]="url" alt="Cattle" aspectRatio="1/1" radius="full" />`;

  readonly statesCode =
`<!-- Loading skeleton -->
<ap-image aspectRatio="3/2" />

<!-- Error fallback -->
<ap-image [src]="brokenUrl" alt="Image" aspectRatio="3/2" />`;
}
