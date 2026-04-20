import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { SidenavService } from './sidenav.service';

/**
 * ap-side-navigation
 *
 * Desktop sidebar. Hidden below xl breakpoint.
 * Contains ap-side-navigation-content (projected) and a collapse toggle at the bottom.
 * When collapsed, shows icon-only mode — ap-sidenav-item reads this via SidenavService.
 *
 * @Output collapseChange  Emits the new collapsed boolean when toggled
 *
 * Usage:
 *   <ap-side-navigation class="relative hidden xl:block">
 *     <ap-side-navigation-content>
 *       <ap-sidenav-item title="Overview" icon="dashboard" href="/home" />
 *     </ap-side-navigation-content>
 *   </ap-side-navigation>
 */
@Component({
  selector: 'ap-side-navigation',
  standalone: true,
  imports: [],
  providers: [SidenavService],
  templateUrl: './ap-side-navigation.component.html',
  styleUrl: './ap-side-navigation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-collapsed]': 'nav.collapsed()',
  },
})
export class ApSideNavigationComponent implements OnInit {
  protected nav = inject(SidenavService);

  @Input() collapsed = false;
  @Output() collapseChange = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.nav.collapsed.set(this.collapsed);
  }

  toggle(): void {
    this.nav.toggle();
    this.collapseChange.emit(this.nav.collapsed());
  }
}
