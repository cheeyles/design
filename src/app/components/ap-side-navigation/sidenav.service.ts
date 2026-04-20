import { Injectable, signal } from '@angular/core';

/**
 * SidenavService
 *
 * Provided by ap-side-navigation and optionally injected by ap-sidenav-item.
 * Carries the collapsed state so projected items can render in icon-only mode
 * without prop drilling.
 */
@Injectable()
export class SidenavService {
  readonly collapsed = signal(false);

  toggle(): void {
    this.collapsed.update(v => !v);
  }
}
