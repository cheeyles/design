import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ApDropdownComponent } from '../ap-dropdown/ap-dropdown.component';

/**
 * ap-navigation-profile
 *
 * Avatar button in the top navigation bar. Opens a right-aligned
 * dropdown via ap-dropdown. Shows a green verified badge when verified.
 *
 * @Input avatarUrl   Optional user photo URL; falls back to account_circle icon
 * @Input verified    Show green verified badge (default: false)
 *
 * Usage:
 *   <ap-navigation-profile [verified]="true" />
 */
@Component({
  selector: 'ap-navigation-profile',
  standalone: true,
  imports: [ApDropdownComponent],
  templateUrl: './ap-navigation-profile.component.html',
  styleUrl: './ap-navigation-profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApNavigationProfileComponent {
  @Input() avatarUrl?: string;
  @Input() verified = false;
}
