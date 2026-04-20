import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * ap-top-navigation
 *
 * Full-width dark brand header bar. Fixed on mobile/tablet, relative on xl+.
 * Desktop bar: logo, app title, external nav links slot.
 * Mobile bar: hamburger, logo, notifications.
 *
 * @Input  appTitle            Text beside logo (default: 'Dashboard')
 * @Input  logoSrc             Logo image URL (default: AuctionsPlus horizontal white)
 * @Input  homeHref            Link for logo click (default: '/home')
 * @Output menuOpen            Emitted when mobile hamburger is tapped
 * @Output notificationsClick  Emitted when notifications icon is tapped
 *
 * Usage:
 *   <ap-top-navigation appTitle="Design System" />
 */
@Component({
  selector: 'ap-top-navigation',
  standalone: true,
  imports: [],
  templateUrl: './ap-top-navigation.component.html',
  styleUrl: './ap-top-navigation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApTopNavigationComponent {
  @Input() appTitle = 'Dashboard';
  @Input() logoSrc  = 'auctionsplus-logo.svg';
  @Input() homeHref = '/home';

  @Output() menuOpen           = new EventEmitter<void>();
  @Output() notificationsClick = new EventEmitter<void>();
}
