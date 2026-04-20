import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { RouterLink } from '@angular/router';

export interface BreadcrumbItem {
  label: string;
  href?: string;  // omit for the current (non-linked) page
}

/**
 * ap-breadcrumb
 *
 * Horizontally scrollable breadcrumb trail with chevron separators.
 *
 * @Input crumbs  Array of { label, href? } items — last item is current page
 *
 * Usage:
 *   <ap-breadcrumb
 *     class="h-11 bg-white p-4 sm:p-0 sm:bg-transparent mb-2 sm:mb-0"
 *     [crumbs]="[
 *       { label: 'Dashboard', href: '/home' },
 *       { label: 'My Sales', href: '/my-sales' },
 *       { label: 'Lot #1234' }
 *     ]"
 *   />
 */
@Component({
  selector: 'ap-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ap-breadcrumb.component.html',
  styleUrl: './ap-breadcrumb.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApBreadcrumbComponent {
  @Input() crumbs: BreadcrumbItem[] = [];
}
