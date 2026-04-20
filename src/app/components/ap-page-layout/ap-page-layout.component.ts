import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * ap-page-layout
 *
 * Full page shell. Composes top navigation, mobile side nav,
 * desktop side navigation and the main scrollable content area.
 * All slots are filled via ng-content with attribute selectors.
 *
 * Usage:
 *   <ap-page-layout>
 *     <ap-top-navigation topNav appTitle="Dashboard" />
 *     <ap-side-navigation-mobile mobileNav [open]="mobileOpen" />
 *     <ap-side-navigation sideNav class="relative hidden xl:block">
 *       <ap-side-navigation-content>...</ap-side-navigation-content>
 *     </ap-side-navigation>
 *     <div pageContent>
 *       <!-- breadcrumb + page body -->
 *     </div>
 *   </ap-page-layout>
 */
@Component({
  selector: 'ap-page-layout',
  standalone: true,
  templateUrl: './ap-page-layout.component.html',
  styleUrl: './ap-page-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApPageLayoutComponent {}
