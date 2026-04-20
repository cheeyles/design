import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export interface TableColumn {
  id: string;
  label: string;
  sortable?: boolean;
  width?: number;
  minWidth?: number;
  align?: 'left' | 'center' | 'right';
}

export interface TableRow { [key: string]: any; }

@Component({
  selector: 'ap-data-table',
  standalone: true,
  templateUrl: './ap-data-table.component.html',
  styleUrl:    './ap-data-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApDataTableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() rows: TableRow[] = [];
  @Input() sortBy?: string;
  @Input() sortDir: 'asc' | 'desc' = 'asc';
  @Output() sortChange = new EventEmitter<string>();

  cellValue(row: TableRow, col: TableColumn): string {
    const v = row[col.id];
    return v != null ? String(v) : '';
  }
}
