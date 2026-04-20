import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ApButtonComponent } from '../ap-button/ap-button.component';

@Component({
  selector: 'ap-modal',
  standalone: true,
  imports: [ApButtonComponent],
  templateUrl: './ap-modal.component.html',
  styleUrl:    './ap-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApModalComponent {
  @Input() open         = false;
  @Input() title        = '';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() primaryAction?: string;
  @Input() secondaryAction?: string;
  @Input() destructive  = false;
  @Output() close           = new EventEmitter<void>();
  @Output() primaryClick    = new EventEmitter<void>();
  @Output() secondaryClick  = new EventEmitter<void>();

  readonly WIDTHS = { sm: '400px', md: '560px', lg: '720px' };

  get maxWidth(): string { return this.WIDTHS[this.size] ?? this.WIDTHS.md; }

  @HostListener('document:keydown.escape')
  onEscape(): void { if (this.open) this.close.emit(); }
}
