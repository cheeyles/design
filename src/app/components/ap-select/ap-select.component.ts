import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, inject, Input, Output, signal } from '@angular/core';

export interface SelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'ap-select',
  standalone: true,
  templateUrl: './ap-select.component.html',
  styleUrl:    './ap-select.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApSelectComponent {
  @Input() label?: string;
  @Input() placeholder = 'Select an option';
  @Input() options: (string | SelectOption)[] = [];
  @Input() value?: string;
  @Input() state: 'enabled' | 'error' | 'disabled' = 'enabled';
  @Input() hint?: string;
  @Output() valueChange = new EventEmitter<string>();

  readonly open    = signal(false);
  readonly hovered = signal<string | null>(null);

  get items(): SelectOption[] {
    return this.options.map(o => typeof o === 'string' ? { value: o, label: o } : o);
  }

  get selected(): SelectOption | undefined {
    return this.items.find(o => o.value === this.value);
  }

  toggle(): void {
    if (this.state === 'disabled') return;
    this.open.update(v => !v);
  }

  select(item: SelectOption): void {
    this.valueChange.emit(item.value);
    this.open.set(false);
  }

  private el = inject(ElementRef);

  @HostListener('document:mousedown', ['$event'])
  onDocMousedown(e: MouseEvent): void {
    if (!this.el.nativeElement.contains(e.target)) {
      this.open.set(false);
    }
  }

  close(): void {
    this.open.set(false);
  }
}
