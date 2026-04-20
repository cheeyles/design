import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApComingSoonComponent }             from '../ap-coming-soon/ap-coming-soon.component';
import { ApBreadcrumbPageComponent }         from '../ap-breadcrumb-page/ap-breadcrumb-page.component';
import { ApSideNavPageComponent }            from '../ap-side-nav-page/ap-side-nav-page.component';
import { ApTabNavigationPageComponent }      from '../ap-tab-navigation-page/ap-tab-navigation-page.component';
import { ApHeaderPageComponent }             from '../ap-header-page/ap-header-page.component';
import { ApFooterPageComponent }             from '../ap-footer-page/ap-footer-page.component';
import { ApCommodityNavPageComponent }       from '../ap-commodity-nav-page/ap-commodity-nav-page.component';
import { ApPaginationPageComponent }         from '../ap-pagination-page/ap-pagination-page.component';
import { ApPageHeaderPageComponent }         from '../ap-page-header-page/ap-page-header-page.component';
import { ApFilterPageComponent }             from '../ap-filter-page/ap-filter-page.component';
import { ApTabbedAccordionPageComponent }    from '../ap-tabbed-accordion-page/ap-tabbed-accordion-page.component';
import { ApTablePageComponent }              from '../ap-table-page/ap-table-page.component';
import { ApModalPageComponent }              from '../ap-modal-page/ap-modal-page.component';
import { ApSearchModalPageComponent }        from '../ap-search-modal-page/ap-search-modal-page.component';
import { ApDrawerPageComponent }             from '../ap-drawer-page/ap-drawer-page.component';
import { ApToastPageComponent }              from '../ap-toast-page/ap-toast-page.component';
import { ApAnnouncementPageComponent }       from '../ap-announcement-page/ap-announcement-page.component';
import { ApEmptyStatePageComponent }         from '../ap-empty-state-page/ap-empty-state-page.component';
import { ApProgressIndicatorPageComponent }  from '../ap-progress-indicator-page/ap-progress-indicator-page.component';
import { ApProgressTrackerPageComponent }    from '../ap-progress-tracker-page/ap-progress-tracker-page.component';
import { ApContactCardPageComponent }        from '../ap-contact-card-page/ap-contact-card-page.component';
import { ApActionCardPageComponent }         from '../ap-action-card-page/ap-action-card-page.component';
import { ApLotCardPageComponent }            from '../ap-lot-card-page/ap-lot-card-page.component';
import { ApAuctionCardPageComponent }        from '../ap-auction-card-page/ap-auction-card-page.component';
import { ApAdvertisingCardPageComponent }    from '../ap-advertising-card-page/ap-advertising-card-page.component';

interface NavChild { id: string; label: string; }
interface NavGroup { id: string; label: string; children: NavChild[]; }

const NAV: NavGroup[] = [
  {
    id: 'pat-navigation', label: 'Navigation',
    children: [
      { id: 'pat-header',        label: 'Header'               },
      { id: 'pat-footer',        label: 'Footer'               },
      { id: 'pat-mega-menu',     label: 'Mega Menu'            },
      { id: 'pat-side-nav',      label: 'Side Navigation'      },
      { id: 'pat-tabbed-nav',    label: 'Tabbed Navigation'    },
      { id: 'pat-commodity-nav', label: 'Commodity Navigation' },
      { id: 'pat-breadcrumbs',   label: 'Breadcrumbs'          },
      { id: 'pat-pagination',    label: 'Pagination'           },
    ],
  },
  {
    id: 'pat-content', label: 'Content',
    children: [
      { id: 'pat-header-content',   label: 'Page Header'      },
      { id: 'pat-flyout-filter',    label: 'Filter'           },
      { id: 'pat-tabbed-accordion', label: 'Tabbed Accordion' },
      { id: 'pat-table',            label: 'Table'            },
    ],
  },
  {
    id: 'pat-cards', label: 'Cards',
    children: [
      { id: 'pat-contact-card',     label: 'Contact Card'     },
      { id: 'pat-action-card',      label: 'Action Card'      },
      { id: 'pat-lot-card',         label: 'Lot Card'         },
      { id: 'pat-auction-card',     label: 'Auction Card'     },
      { id: 'pat-advertising-card', label: 'Advertising Card' },
    ],
  },
  {
    id: 'pat-overlays', label: 'Overlays',
    children: [
      { id: 'pat-modal',        label: 'Modal'          },
      { id: 'pat-search-modal', label: 'Search Modal'   },
      { id: 'pat-flyout',       label: 'Fly-Out Drawer' },
    ],
  },
  {
    id: 'pat-feedback', label: 'Feedback',
    children: [
      { id: 'pat-toast',              label: 'Toast Notifications' },
      { id: 'pat-announcements',      label: 'Announcements'       },
      { id: 'pat-empty-state',        label: 'Empty State'         },
      { id: 'pat-progress-indicator', label: 'Progress Indicator'  },
      { id: 'pat-progress-tracker',   label: 'Progress Tracker'    },
    ],
  },
];

@Component({
  selector: 'ap-patterns-section',
  standalone: true,
  imports: [
    ApComingSoonComponent,
    ApBreadcrumbPageComponent,
    ApSideNavPageComponent,
    ApTabNavigationPageComponent,
    ApHeaderPageComponent,
    ApFooterPageComponent,
    ApCommodityNavPageComponent,
    ApPaginationPageComponent,
    ApPageHeaderPageComponent,
    ApFilterPageComponent,
    ApTabbedAccordionPageComponent,
    ApTablePageComponent,
    ApModalPageComponent,
    ApSearchModalPageComponent,
    ApDrawerPageComponent,
    ApToastPageComponent,
    ApAnnouncementPageComponent,
    ApEmptyStatePageComponent,
    ApProgressIndicatorPageComponent,
    ApProgressTrackerPageComponent,
    ApContactCardPageComponent,
    ApActionCardPageComponent,
    ApLotCardPageComponent,
    ApAuctionCardPageComponent,
    ApAdvertisingCardPageComponent,
  ],
  templateUrl: './ap-patterns-section.component.html',
  styleUrl:    './ap-patterns-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApPatternsSectionComponent {
  nav = NAV;
  active     = signal('pat-header');
  openGroups = signal<Record<string, boolean>>({ 'pat-navigation': true });

  toggleGroup(id: string): void {
    this.openGroups.update(g => ({ ...g, [id]: !g[id] }));
  }

  get activeLabel(): string {
    for (const group of NAV) {
      const child = group.children.find(c => c.id === this.active());
      if (child) return child.label;
    }
    return '';
  }
}
