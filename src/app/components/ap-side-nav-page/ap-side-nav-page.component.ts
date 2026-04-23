import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApDocPageComponent }     from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent }  from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }        from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }   from '../ap-demo-group/ap-demo-group.component';
import { ApSidenavItemComponent }    from '../ap-sidenav-item/ap-sidenav-item.component';
import { ApSideNavigationComponent } from '../ap-side-navigation/ap-side-navigation.component';

@Component({
  selector: 'ap-side-nav-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApSidenavItemComponent, ApSideNavigationComponent,
  ],
  templateUrl: './ap-side-nav-page.component.html',
  styleUrl: './ap-side-nav-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApSideNavPageComponent {
  active      = signal('overview');
  accountOpen = signal(false);
  helpOpen    = signal(false);
}
