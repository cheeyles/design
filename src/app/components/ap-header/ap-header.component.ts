import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { ApLogoComponent }   from '../ap-logo/ap-logo.component';
import { ApAvatarComponent } from '../ap-avatar/ap-avatar.component';

export interface HeaderNavLink { label: string; dropdown?: boolean; }

const TOP_LINKS_DEFAULT: HeaderNavLink[]         = [{ label: 'Listings', dropdown: true }, { label: 'Dashboard' }];
const BOTTOM_LEFT_DEFAULT: HeaderNavLink[]       = [{ label: 'Livestock', dropdown: true }, { label: 'Machinery', dropdown: true }];
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
  @Input() navLinks: HeaderNavLink[] = TOP_LINKS_DEFAULT;

  readonly topLinks    = TOP_LINKS_DEFAULT;
  readonly bottomLeft  = BOTTOM_LEFT_DEFAULT;
  readonly bottomRight = BOTTOM_RIGHT_DEFAULT;

  activeTop    = signal<string | null>(null);
  activeBottom = signal<string | null>(null);

  setTop(label: string): void    { this.activeTop.set(label); }
  setBottom(label: string): void { this.activeBottom.set(label); }
}
