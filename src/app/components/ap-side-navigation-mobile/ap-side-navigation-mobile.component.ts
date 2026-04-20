import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * ap-side-navigation-mobile
 *
 * Mobile slide-in drawer overlay. Hidden at xl+ (handled by ap-side-navigation).
 * Renders nothing when closed.
 *
 * @Input  open         Whether the drawer is open (default: false)
 * @Output closeDrawer  Emitted when backdrop or close button is tapped
 *
 * Usage:
 *   <ap-side-navigation-mobile [open]="mobileNavOpen" (closeDrawer)="mobileNavOpen = false">
 *     <ap-side-navigation-content>
 *       <ap-sidenav-item ... />
 *     </ap-side-navigation-content>
 *   </ap-side-navigation-mobile>
 */
@Component({
  selector: 'ap-side-navigation-mobile',
  standalone: true,
  templateUrl: './ap-side-navigation-mobile.component.html',
  styleUrl: './ap-side-navigation-mobile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApSideNavigationMobileComponent {
  @Input()  open = false;
  @Output() closeDrawer = new EventEmitter<void>();
}
