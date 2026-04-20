import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApDocPageComponent }       from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent }    from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }          from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }     from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }     from '../ap-code-block/ap-code-block.component';
import { ApTabNavigationComponent } from '../ap-tab-navigation/ap-tab-navigation.component';

@Component({
  selector: 'ap-tab-navigation-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApTabNavigationComponent,
  ],
  templateUrl: './ap-tab-navigation-page.component.html',
  styleUrl: './ap-tab-navigation-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApTabNavigationPageComponent {
  tab1 = signal(0);
  tab2 = signal(0);
  tab3 = signal(0);

  readonly defaultTabs = [
    { value: 'buy',  label: 'Buy'  },
    { value: 'sold', label: 'Sold' },
    { value: 'news', label: 'News' },
  ];

  readonly badgeTabs = [
    { value: 'lots',       label: 'Lots',       badge: 24 },
    { value: 'held',       label: 'Held',       badge: 6  },
    { value: 'lost',       label: 'Lost',       badge: 18 },
    { value: 'favourites', label: 'Favourites', badge: 3  },
  ];

  readonly iconTabs = [
    { value: 'details',  label: 'Details',  icon: 'fact_check'     },
    { value: 'pedigree', label: 'Pedigree', icon: 'genetics'       },
    { value: 'delivery', label: 'Delivery', icon: 'local_shipping' },
    { value: 'contact',  label: 'Contact',  icon: 'person'         },
  ];

  readonly defaultCode =
`<ap-tab-navigation
  [tabs]="[
    { value: 'overview', label: 'Overview' },
    { value: 'pedigree', label: 'Pedigree' },
  ]"
  [activeIndex]="activeTab"
  (tabChange)="activeTab = $event"
/>`;

  readonly badgeCode =
`<ap-tab-navigation
  [tabs]="[
    { value: 'all',    label: 'All',    badge: 24 },
    { value: 'active', label: 'Active', badge: 6 },
  ]"
  [activeIndex]="activeTab"
  (tabChange)="activeTab = $event"
/>`;

  readonly iconCode =
`<ap-tab-navigation
  [tabs]="[
    { value: 'details',  label: 'Details',  icon: 'fact_check' },
    { value: 'delivery', label: 'Delivery', icon: 'local_shipping' },
  ]"
  [activeIndex]="activeTab"
  (tabChange)="activeTab = $event"
/>`;
}
