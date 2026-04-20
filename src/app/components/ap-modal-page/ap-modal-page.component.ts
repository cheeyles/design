import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';
import { ApButtonComponent }     from '../ap-button/ap-button.component';
import { ApModalComponent }      from '../ap-modal/ap-modal.component';

@Component({
  selector: 'ap-modal-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApButtonComponent, ApModalComponent,
  ],
  templateUrl: './ap-modal-page.component.html',
  styleUrl:    './ap-modal-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApModalPageComponent {
  openMd          = signal(false);
  openSm          = signal(false);
  openLg          = signal(false);
  openDestructive = signal(false);

  readonly codeMd =
`<ap-button color="primary" (clicked)="open = true">Open modal</ap-button>

<ap-modal
  [open]="open"
  title="Confirm action"
  primaryAction="Confirm"
  secondaryAction="Cancel"
  (close)="open = false"
  (primaryClick)="open = false"
  (secondaryClick)="open = false"
>
  <p>Are you sure you want to continue? This action cannot be undone.</p>
</ap-modal>`;

  readonly codeDestructive =
`<ap-modal
  [open]="open"
  title="Delete listing"
  primaryAction="Delete"
  secondaryAction="Cancel"
  [destructive]="true"
  (close)="open = false"
  (primaryClick)="open = false"
  (secondaryClick)="open = false"
>
  <p>This listing will be permanently removed. This cannot be undone.</p>
</ap-modal>`;
}
