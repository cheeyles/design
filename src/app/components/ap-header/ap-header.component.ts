import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { ApLogoComponent }   from '../ap-logo/ap-logo.component';
import { ApAvatarComponent } from '../ap-avatar/ap-avatar.component';

export interface HeaderNavLink { label: string; dropdown?: boolean; }

const TOP_LINKS_DEFAULT: HeaderNavLink[]           = [{ label: 'Listings', dropdown: true }, { label: 'Dashboard' }];
const TOP_LINKS_DASHBOARD: HeaderNavLink[]         = [{ label: 'Listings', dropdown: true }, { label: 'AuctionsPlus' }];
const TOP_LINKS_LISTINGS: HeaderNavLink[]          = [{ label: 'Listings', dropdown: true }, { label: 'AuctionsPlus' }, { label: 'Dashboard' }];
const BOTTOM_LEFT_DEFAULT: HeaderNavLink[]       = [{ label: 'Livestock', dropdown: true }, { label: 'Machinery', dropdown: true }, { label: 'Services', dropdown: true }];
const BOTTOM_RIGHT_DEFAULT: { label: string; icon: string }[] = [
  { label: 'Price Discovery', icon: 'chart_data' },
  { label: 'News',            icon: 'newspaper'  },
  { label: 'Auctions',        icon: 'gavel'       },
  { label: 'Results',         icon: 'insert_chart' },
];

@Component({
  selector: 'ap-header',
  standalone: true,
  imports: [ApLogoComponent, ApAvatarComponent],
  templateUrl: './ap-header.component.html',
  styleUrl:    './ap-header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApHeaderComponent {
  @Input() mobile = false;
  @Input() variant: 'website' | 'dashboard' | 'listings' = 'website';
  @Input() navLinks: HeaderNavLink[] = TOP_LINKS_DEFAULT;

  get topLinks() {
    if (this.variant === 'listings')  return TOP_LINKS_LISTINGS;
    if (this.variant === 'dashboard') return TOP_LINKS_DASHBOARD;
    return TOP_LINKS_DEFAULT;
  }
  get topbarTitle() {
    if (this.variant === 'dashboard') return 'Dashboard';
    if (this.variant === 'listings')  return 'Assessment Entry';
    return null;
  }
  readonly bottomLeft  = BOTTOM_LEFT_DEFAULT;
  readonly bottomRight = BOTTOM_RIGHT_DEFAULT;

  activeTop    = signal<string | null>(null);
  activeBottom = signal<string | null>(null);

  setTop(label: string): void    { this.activeTop.set(label); }
  setBottom(label: string): void { this.activeBottom.set(label); }
}
