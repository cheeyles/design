import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApComingSoonComponent } from '../ap-coming-soon/ap-coming-soon.component';

interface NavItem { id: string; label: string; }

const NAV: NavItem[] = [
  { id: 'exp-website',          label: 'Website'           },
  { id: 'exp-dashboard',        label: 'Dashboard'         },
  { id: 'exp-listings-portal',  label: 'Listings Portal'   },
  { id: 'exp-assessment-entry', label: 'Assessment Entry'  },
  { id: 'exp-mobile-app',       label: 'Mobile App'        },
  { id: 'exp-liveassess',       label: 'LiveAssess'        },
  { id: 'exp-console',          label: 'Console'           },
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
  nav = NAV;
  active = signal('exp-website');

  get activeLabel(): string {
    return NAV.find(n => n.id === this.active())?.label ?? '';
  }
}
