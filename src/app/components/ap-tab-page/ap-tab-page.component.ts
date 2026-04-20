import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApDocPageComponent }      from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent }   from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }         from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }    from '../ap-demo-group/ap-demo-group.component';
import { ApTabNavigationComponent } from '../ap-tab-navigation/ap-tab-navigation.component';

@Component({
  selector: 'ap-tab-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApTabNavigationComponent,
  ],
  templateUrl: './ap-tab-page.component.html',
  styleUrl: './ap-tab-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApTabPageComponent {
  tab1 = signal(0);
  tab2 = signal(0);
  tab3 = signal(0);

  readonly textTabs = [
    { value: 'lots',     label: 'Lots'     },
    { value: 'results',  label: 'Results'  },
    { value: 'upcoming', label: 'Upcoming' },
  ];

  readonly iconTabs = [
    { value: 'cattle',   label: 'Cattle',   icon: 'agriculture'  },
    { value: 'sheep',    label: 'Sheep',    icon: 'pets'         },
    { value: 'machinery',label: 'Machinery',icon: 'construction' },
  ];

  readonly badgeTabs = [
    { value: 'lots',     label: 'Lots',     badge: 4  },
    { value: 'watching', label: 'Watching', badge: 12 },
    { value: 'sold',     label: 'Sold',     badge: 1  },
  ];
}
