import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';
import { ApAvatarComponent }     from '../ap-avatar/ap-avatar.component';

@Component({
  selector: 'ap-avatar-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApAvatarComponent,
  ],
  templateUrl: './ap-avatar-page.component.html',
  styleUrl:    './ap-avatar-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApAvatarPageComponent {
  readonly avatarSrc = 'https://images.unsplash.com/photo-1504224357642-c87eacea1da4?q=80&w=200&auto=format&fit=crop';

  readonly withImageCode =
`<ap-avatar [src]="url" alt="User" />
<ap-avatar [src]="url" alt="User" [verified]="true" />
<ap-avatar [src]="url" alt="User" [size]="56" />`;

  readonly fallbackCode =
`<!-- No src — person icon fallback -->
<ap-avatar alt="User" />
<ap-avatar alt="User" [size]="56" />`;
}
