import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'ap-search-modal',
  standalone: true,
  templateUrl: './ap-search-modal.component.html',
  styleUrl:    './ap-search-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApSearchModalComponent {
  @Input() open        = false;
  @Input() placeholder = 'Search…';
  @Output() close      = new EventEmitter<void>();
  @Output() search     = new EventEmitter<string>();

  query = signal('');

  onInput(e: Event): void {
    const val = (e.target as HTMLInputElement).value;
    this.query.set(val);
    this.search.emit(val);
  }

  onClear(): void {
    this.query.set('');
    this.search.emit('');
  }

  @HostListener('document:keydown.escape')
  onEscape(): void { if (this.open) this.close.emit(); }
}
