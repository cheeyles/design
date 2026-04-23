import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApComingSoonComponent } from '../ap-coming-soon/ap-coming-soon.component';

interface NavChild { id: string; label: string; }
interface NavItem  { id: string; label: string; children?: NavChild[]; }

const NAV: NavItem[] = [
  {
    id: 'exp-website', label: 'Website',
    children: [
      { id: 'exp-website-catalogue',      label: 'Catalogue'       },
      { id: 'exp-website-search-results', label: 'Search results'  },
      { id: 'exp-website-lot-detail',     label: 'Lot detail'      },
      { id: 'exp-website-home-page',      label: 'Home page'       },
    ],
  },
  { id: 'exp-dashboard',        label: 'Dashboard'        },
  { id: 'exp-listings-portal',  label: 'Listings Portal'  },
  { id: 'exp-assessment-entry', label: 'Assessment Entry' },
  { id: 'exp-mobile-app',       label: 'Mobile App'       },
  { id: 'exp-liveassess',       label: 'LiveAssess'       },
  { id: 'exp-console',          label: 'Console'          },
  { id: 'exp-bidding-client',   label: 'Bidding Client'   },
];

@Component({
  selector: 'ap-experiences-section',
  standalone: true,
  imports: [ApComingSoonComponent],
  templateUrl: './ap-experiences-section.component.html',
  styleUrl:    './ap-experiences-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApExperiencesSectionComponent {
  nav        = NAV;
  active     = signal('exp-website-catalogue');
  openGroups = signal<Record<string, boolean>>({ 'exp-website': true });

  toggleGroup(id: string): void {
    this.openGroups.update(g => ({ ...g, [id]: !g[id] }));
  }

  get activeLabel(): string {
    for (const item of NAV) {
      if (item.children) {
        const child = item.children.find(c => c.id === this.active());
        if (child) return child.label;
      } else if (item.id === this.active()) {
        return item.label;
      }
    }
    return '';
  }
}
