import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';
import { ApButtonComponent }     from '../ap-button/ap-button.component';
import { ApDrawerComponent }     from '../ap-drawer/ap-drawer.component';

@Component({
  selector: 'ap-drawer-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApButtonComponent, ApDrawerComponent,
  ],
  templateUrl: './ap-drawer-page.component.html',
  styleUrl:    './ap-drawer-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApDrawerPageComponent {
  openSm = signal(false);
  openMd = signal(false);
  openLg = signal(false);

  readonly code =
`<ap-button color="secondary" leadingIcon="tune" (clicked)="open = true">
  Open drawer
</ap-button>

<ap-drawer
  [open]="open"
  title="Filter lots"
  primaryAction="Apply"
  secondaryAction="Reset"
  (close)="open = false"
  (primaryClick)="open = false"
  (secondaryClick)="open = false"
>
  <!-- drawer content -->
</ap-drawer>`;
}
