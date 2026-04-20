import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * ap-main-layout
 *
 * Outermost layout wrapper. Fills the full viewport height.
 * Contains ap-page-layout and global singleton components (ap-toast etc.).
 *
 * Usage:
 *   <ap-main-layout>
 *     <ap-page-layout>...</ap-page-layout>
 *   </ap-main-layout>
 */
@Component({
  selector: 'ap-main-layout',
  standalone: true,
  templateUrl: './ap-main-layout.component.html',
  styleUrl: './ap-main-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApMainLayoutComponent {}
