import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidenavService } from '../ap-side-navigation/sidenav.service';

export type SidenavIconVariant = 'outlined' | 'outlined-new' | 'solid';

/**
 * ap-sidenav-item
 *
 * A single item in the dashboard sidebar navigation.
 * Renders as an <a routerLink> when `href` is supplied,
 * or a <button> for expandable/action items.
 *
 * Automatically switches to icon-only mode when inside a collapsed
 * ap-side-navigation (reads SidenavService via DI).
 *
 * @Input title         Display label
 * @Input icon          Material Symbols Rounded name (e.g. 'list_alt', 'person')
 * @Input iconVariant   'outlined' | 'outlined-new' | 'solid'  (default: 'outlined')
 * @Input href          Router path — renders as <a> with routerLinkActive when set
 * @Input expandable    Show expand_more chevron; renders as <button>
 * @Input expanded      Controls chevron rotation (true = rotated 180°)
 * @Output itemClick    Emitted when a button-type item is clicked
 * @Output expandedChange  Two-way binding for expanded state
 */
@Component({
  selector: 'ap-sidenav-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './ap-sidenav-item.component.html',
  styleUrl: './ap-sidenav-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-collapsed]': 'collapsed',
    '[class.is-active]': 'active',
  },
})
export class ApSidenavItemComponent {
  @Input({ required: true }) title!: string;
  @Input() icon?: string;
  @Input() iconVariant: SidenavIconVariant = 'outlined';
  @Input() href?: string;
  @Input() active = false;
  @Input() expandable = false;
  @Input() expanded = false;
  @Output() itemClick = new EventEmitter<void>();
  @Output() expandedChange = new EventEmitter<boolean>();

  private sidenavService = inject(SidenavService, { optional: true });

  get collapsed(): boolean {
    return this.sidenavService?.collapsed() ?? false;
  }

  get iconClass(): string {
    return `icon-${this.iconVariant}`;
  }

  toggle(): void {
    this.expanded = !this.expanded;
    this.expandedChange.emit(this.expanded);
    this.itemClick.emit();
  }
}
