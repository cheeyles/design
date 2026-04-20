import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * ap-side-navigation-content
 *
 * Inner slot container for ap-sidenav-item rows.
 * Projected content renders as the nav item list.
 *
 * Usage:
 *   <ap-side-navigation-content>
 *     <ap-sidenav-item title="Overview" icon="dashboard" href="/home" />
 *     <hr class="my-1">
 *     <ap-sidenav-item title="My Account" icon="person" [expandable]="true" />
 *   </ap-side-navigation-content>
 */
@Component({
  selector: 'ap-side-navigation-content',
  standalone: true,
  templateUrl: './ap-side-navigation-content.component.html',
  styleUrl: './ap-side-navigation-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApSideNavigationContentComponent {}
