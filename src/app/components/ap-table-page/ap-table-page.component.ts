import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';
import { ApDataTableComponent, TableColumn, TableRow } from '../ap-data-table/ap-data-table.component';

const SIMPLE_COLUMNS: TableColumn[] = [
  { id: 'id',      label: 'ID',      width: 80 },
  { id: 'name',    label: 'Name',    minWidth: 160 },
  { id: 'role',    label: 'Role',    minWidth: 100 },
  { id: 'status',  label: 'Status',  sortable: true, width: 100 },
  { id: 'joined',  label: 'Joined',  width: 120 },
];

const SIMPLE_ROWS: TableRow[] = [
  { id: 'U-001', name: 'Sarah Mitchell',  role: 'Agent',  status: 'Active',   joined: '12 Jan 2024' },
  { id: 'U-002', name: 'James Nguyen',    role: 'Buyer',  status: 'Active',   joined: '3 Mar 2024'  },
  { id: 'U-003', name: 'Priya Sharma',    role: 'Seller', status: 'Inactive', joined: '19 Jun 2023' },
  { id: 'U-004', name: 'Tom Callaghan',   role: 'Agent',  status: 'Pending',  joined: '8 Nov 2024'  },
  { id: 'U-005', name: 'Emma Whitfield',  role: 'Buyer',  status: 'Active',   joined: '21 Feb 2024' },
];

const LOT_COLUMNS: TableColumn[] = [
  { id: 'lot',      label: 'Lot',      width: 70  },
  { id: 'title',    label: 'Title',    minWidth: 200, sortable: true },
  { id: 'location', label: 'Location', minWidth: 120 },
  { id: 'heads',    label: 'Head',     width: 70, align: 'right' },
  { id: 'reserve',  label: 'Reserve',  width: 100, align: 'right', sortable: true },
  { id: 'status',   label: 'Status',   width: 110 },
];

const LOT_ROWS: TableRow[] = [
  { lot: '001', title: 'Poll Dorset Ewe Lambs',  location: 'Dubbo, NSW',     heads: 42,  reserve: '$320/hd',  status: 'Published' },
  { lot: '002', title: 'Merino Ram Sale',         location: 'Elmore, VIC',    heads: 12,  reserve: '$1,200/hd', status: 'Draft'     },
  { lot: '003', title: 'Angus Steers',            location: 'Roma, QLD',      heads: 85,  reserve: '$2,400/hd', status: 'Published' },
  { lot: '004', title: 'Suffolk Ewes PTIC',       location: 'Bathurst, NSW',  heads: 60,  reserve: '$450/hd',   status: 'Withdrawn' },
  { lot: '005', title: 'Charolais × Heifers',     location: 'Narrabri, NSW',  heads: 35,  reserve: '$1,800/hd', status: 'Published' },
];

@Component({
  selector: 'ap-table-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApDataTableComponent,
  ],
  templateUrl: './ap-table-page.component.html',
  styleUrl:    './ap-table-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApTablePageComponent {
  simpleColumns = SIMPLE_COLUMNS;
  simpleRows    = signal([...SIMPLE_ROWS]);
  simpleSortBy  = signal<string | undefined>(undefined);
  simpleSortDir = signal<'asc' | 'desc'>('asc');

  lotColumns = LOT_COLUMNS;
  lotRows    = signal([...LOT_ROWS]);
  lotSortBy  = signal<string | undefined>(undefined);
  lotSortDir = signal<'asc' | 'desc'>('asc');

  sortSimple(col: string): void {
    if (this.simpleSortBy() === col) {
      this.simpleSortDir.update(d => d === 'asc' ? 'desc' : 'asc');
    } else {
      this.simpleSortBy.set(col);
      this.simpleSortDir.set('asc');
    }
    const dir = this.simpleSortDir() === 'asc' ? 1 : -1;
    this.simpleRows.update(rows =>
      [...rows].sort((a, b) => String(a[col]).localeCompare(String(b[col])) * dir)
    );
  }

  sortLot(col: string): void {
    if (this.lotSortBy() === col) {
      this.lotSortDir.update(d => d === 'asc' ? 'desc' : 'asc');
    } else {
      this.lotSortBy.set(col);
      this.lotSortDir.set('asc');
    }
    const dir = this.lotSortDir() === 'asc' ? 1 : -1;
    this.lotRows.update(rows =>
      [...rows].sort((a, b) => String(a[col]).localeCompare(String(b[col])) * dir)
    );
  }

  readonly tableCode =
`<ap-data-table
  [columns]="columns"
  [rows]="rows"
  [sortBy]="sortBy"
  [sortDir]="sortDir"
  (sortChange)="onSort($event)"
/>`;
}
