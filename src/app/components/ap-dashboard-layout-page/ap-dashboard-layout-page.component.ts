import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';

interface Zone {
  name:        string;
  token?:      string;
  value:       string;
  description: string;
}

interface ComponentEntry {
  zone:      string;
  component: string;
  selector:  string;
}

@Component({
  selector: 'ap-dashboard-layout-page',
  standalone: true,
  imports: [ApDocPageComponent, ApDocSectionComponent],
  templateUrl: './ap-dashboard-layout-page.component.html',
  styleUrl:    './ap-dashboard-layout-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApDashboardLayoutPageComponent {

  readonly zones: Zone[] = [
    { name: 'Top navigation',  token: '--layout-topnav-height', value: '56px',  description: 'Fixed on mobile/tablet, relative on xl+. Brand dark background.' },
    { name: 'Sidebar',         token: '--layout-sidebar-width', value: '240px', description: 'Hidden below xl. Scrollable. Collapses to icon-only rail.' },
    { name: 'Content area',    token: '--layout-page-padding-x', value: '24px', description: 'Flex-1. Scrollable independently of sidebar. Padding on all sides.' },
    { name: 'Section gap',     token: '--layout-section-gap',   value: '32px',  description: 'Vertical rhythm between content sections.' },
    { name: 'Content gap',     token: '--layout-content-gap',   value: '24px',  description: 'Gap between sidebar and content column.' },
  ];

  readonly components: ComponentEntry[] = [
    { zone: 'Top navigation',  component: 'Top Navigation',    selector: 'ap-top-navigation'          },
    { zone: 'Top navigation',  component: 'Navigation Profile', selector: 'ap-navigation-profile'      },
    { zone: 'Sidebar',         component: 'Side Navigation',   selector: 'ap-side-navigation'         },
    { zone: 'Sidebar',         component: 'Sidenav Item',      selector: 'ap-sidenav-item'            },
    { zone: 'Sidebar mobile',  component: 'Mobile Drawer',     selector: 'ap-side-navigation-mobile'  },
    { zone: 'Content area',    component: 'Breadcrumb',        selector: 'ap-breadcrumb'              },
    { zone: 'Content area',    component: 'Page Header',       selector: 'ap-page-header'             },
    { zone: 'Content area',    component: 'Action Card',       selector: 'ap-action-card'             },
    { zone: 'Content area',    component: 'Data Table',        selector: 'ap-data-table'              },
    { zone: 'Content area',    component: 'Empty State',       selector: 'ap-empty-state'             },
  ];
}
