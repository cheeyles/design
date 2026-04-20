import {
  ChangeDetectionStrategy, Component, ElementRef,
  HostListener, Input, signal,
} from '@angular/core';

/**
 * ap-dropdown
 *
 * Trigger + panel dropdown. The trigger element must carry the `trigger`
 * attribute. All other projected content renders as the panel.
 *
 * @Input align  'left' (default) | 'right'  — panel alignment
 *
 * Usage:
 *   <ap-dropdown>
 *     <div trigger class="flex items-center cursor-pointer">
 *       Manage Listings <span class="icon-outlined">expand_more</span>
 *     </div>
 *     <!-- panel content -->
 *     <ul>...</ul>
 *   </ap-dropdown>
 *
 *   <ap-dropdown align="right">
 *     <div trigger>...</div>
 *   </ap-dropdown>
 */
@Component({
  selector: 'ap-dropdown',
  standalone: true,
  templateUrl: './ap-dropdown.component.html',
  styleUrl: './ap-dropdown.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApDropdownComponent {
  @Input() align: 'left' | 'right' = 'left';

  open = signal(false);

  constructor(private el: ElementRef) {}

  toggle(): void {
    this.open.set(!this.open());
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.el.nativeElement.contains(event.target)) {
      this.open.set(false);
    }
  }
}
