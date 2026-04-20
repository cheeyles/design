import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

type PageItem = number | '…';

function getPages(current: number, total: number): PageItem[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4)           return [1, 2, 3, 4, 5, '…', total];
  if (current >= total - 3)   return [1, '…', total - 4, total - 3, total - 2, total - 1, total];
  return [1, '…', current - 1, current, current + 1, '…', total];
}

@Component({
  selector: 'ap-pagination',
  standalone: true,
  templateUrl: './ap-pagination.component.html',
  styleUrl:    './ap-pagination.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApPaginationComponent {
  @Input() page  = 1;
  @Input() total = 1;
  @Output() pageChange = new EventEmitter<number>();

  get pages(): PageItem[] { return getPages(this.page, this.total); }

  isEllipsis(p: PageItem): p is '…' { return p === '…'; }
  isNumber(p: PageItem): p is number { return typeof p === 'number'; }

  go(p: number): void {
    if (p >= 1 && p <= this.total && p !== this.page) {
      this.pageChange.emit(p);
    }
  }
}
