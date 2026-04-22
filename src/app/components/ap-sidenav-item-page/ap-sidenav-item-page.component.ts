import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApDocPageComponent }      from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent }   from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }         from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }    from '../ap-demo-group/ap-demo-group.component';
import { ApSidenavItemComponent }  from '../ap-sidenav-item/ap-sidenav-item.component';

@Component({
  selector: 'ap-sidenav-item-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApSidenavItemComponent,
  ],
  templateUrl: './ap-sidenav-item-page.component.html',
  styleUrl: './ap-sidenav-item-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApSidenavItemPageComponent {
  activeNav     = signal('My Sales');
  activeIcon    = signal('dashboard');
  groupOpen     = signal(true);
  activeSmall   = signal('forecast');
  smallGroupOpen = signal(false);
  activeLeading  = signal<string | null>(null);
  activeTrailing = signal<string | null>(null);
}
