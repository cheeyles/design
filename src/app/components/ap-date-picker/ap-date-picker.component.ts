import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, inject, Input, Output, signal } from '@angular/core';

export interface CalendarDay {
  date: Date;
  inMonth: boolean;
}

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAY_LABELS = ['M','T','W','T','F','S','S'];

@Component({
  selector: 'ap-date-picker',
  standalone: true,
  templateUrl: './ap-date-picker.component.html',
  styleUrl:    './ap-date-picker.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApDatePickerComponent {
  @Input() label?: string;
  @Input() placeholder = 'DD / MM / YYYY';
  @Input() value: Date | null = null;
  @Input() state: 'enabled' | 'error' | 'disabled' = 'enabled';
  @Input() hint?: string;
  @Output() valueChange = new EventEmitter<Date>();

  readonly open     = signal(false);
  readonly focused  = signal(false);
  readonly viewDate = signal(new Date());
  readonly hoveredDay = signal<Date | null>(null);

  readonly dayLabels = DAY_LABELS;

  get monthLabel(): string {
    const d = this.viewDate();
    return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
  }

  get weeks(): CalendarDay[][] {
    const d = this.viewDate();
    const days = getCalendarDays(d.getFullYear(), d.getMonth());
    const result: CalendarDay[][] = [];
    for (let i = 0; i < days.length; i += 7) result.push(days.slice(i, i + 7));
    return result;
  }

  get displayValue(): string {
    if (!this.value) return '';
    const d = String(this.value.getDate()).padStart(2, '0');
    const m = String(this.value.getMonth() + 1).padStart(2, '0');
    return `${d} / ${m} / ${this.value.getFullYear()}`;
  }

  toggle(): void {
    if (this.state === 'disabled') return;
    this.open.update(v => !v);
    this.focused.set(true);
    if (this.value) this.viewDate.set(new Date(this.value));
  }

  prevMonth(): void {
    const d = this.viewDate();
    this.viewDate.set(new Date(d.getFullYear(), d.getMonth() - 1, 1));
  }

  nextMonth(): void {
    const d = this.viewDate();
    this.viewDate.set(new Date(d.getFullYear(), d.getMonth() + 1, 1));
  }

  selectDay(date: Date): void {
    this.valueChange.emit(date);
    this.viewDate.set(date);
    this.open.set(false);
    this.focused.set(false);
  }

  isSelected(date: Date): boolean {
    return isSameDay(date, this.value);
  }

  isToday(date: Date): boolean {
    return isSameDay(date, new Date());
  }

  close(): void {
    this.open.set(false);
    this.focused.set(false);
  }

  private el = inject(ElementRef);

  @HostListener('document:mousedown', ['$event'])
  onDocMousedown(e: MouseEvent): void {
    if (!this.el.nativeElement.contains(e.target)) {
      this.open.set(false);
      this.focused.set(false);
    }
  }
}

function getCalendarDays(year: number, month: number): CalendarDay[] {
  const firstDay    = new Date(year, month, 1);
  const lastDay     = new Date(year, month + 1, 0);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const days: CalendarDay[] = [];

  for (let i = startOffset - 1; i >= 0; i--) {
    days.push({ date: new Date(year, month, -i), inMonth: false });
  }
  for (let d = 1; d <= lastDay.getDate(); d++) {
    days.push({ date: new Date(year, month, d), inMonth: true });
  }
  let next = 1;
  while (days.length % 7 !== 0) {
    days.push({ date: new Date(year, month + 1, next++), inMonth: false });
  }
  return days;
}

function isSameDay(a: Date | null, b: Date | null): boolean {
  if (!a || !b) return false;
  return a.getFullYear() === b.getFullYear() &&
         a.getMonth()    === b.getMonth()    &&
         a.getDate()     === b.getDate();
}
