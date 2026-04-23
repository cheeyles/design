import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';
import { ApBreadcrumbComponent } from '../ap-breadcrumb/ap-breadcrumb.component';

@Component({
  selector: 'ap-breadcrumb-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApBreadcrumbComponent,
  ],
  templateUrl: './ap-breadcrumb-page.component.html',
  styleUrl: './ap-breadcrumb-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApBreadcrumbPageComponent {
  readonly exampleCrumbs = [
    { label: 'Home',                        href: '#' },
    { label: 'Auctions',                    href: '#' },
    { label: 'Cattle',                      href: '#' },
    { label: 'Trent Bridge Wagyu 2025 Sale' },
  ];

  readonly exampleCode =
`<ap-breadcrumb [crumbs]="[
  { label: 'Home',     href: '/' },
  { label: 'Auctions', href: '/auctions' },
  { label: 'Cattle',   href: '/auctions/cattle' },
  { label: 'Trent Bridge Wagyu 2025 Sale' },
]" />`;

}
