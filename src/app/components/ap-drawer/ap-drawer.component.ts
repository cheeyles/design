import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ApButtonComponent } from '../ap-button/ap-button.component';

@Component({
  selector: 'ap-drawer',
  standalone: true,
  imports: [ApButtonComponent],
  templateUrl: './ap-drawer.component.html',
  styleUrl:    './ap-drawer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApDrawerComponent {
  @Input() open             = false;
  @Input() title            = '';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() primaryAction?:   string;
  @Input() secondaryAction?: string;
  @Output() close          = new EventEmitter<void>();
  @Output() primaryClick   = new EventEmitter<void>();
  @Output() secondaryClick = new EventEmitter<void>();

  readonly WIDTHS = { sm: '400px', md: '480px', lg: '640px' };
  get width(): string { return this.WIDTHS[this.size] ?? this.WIDTHS.md; }

  @HostListener('document:keydown.escape')
  onEscape(): void { if (this.open) this.close.emit(); }
}
