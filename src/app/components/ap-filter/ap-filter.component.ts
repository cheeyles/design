import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output, signal } from '@angular/core';
import { ApCheckboxComponent }   from '../ap-checkbox/ap-checkbox.component';
import { ApToggleComponent }     from '../ap-toggle/ap-toggle.component';
import { ApMinMaxInputComponent } from '../ap-min-max-input/ap-min-max-input.component';
import { ApInputComponent }      from '../ap-input/ap-input.component';
import { ApNumberInputComponent } from '../ap-number-input/ap-number-input.component';
import { ApButtonComponent }     from '../ap-button/ap-button.component';

export interface FilterItemOption { label: string; }

export interface FilterItem {
  id: string;
  label: string;
  type: 'text' | 'number' | 'checkboxes' | 'minmax' | 'toggle';
  unit?: string;
  options?: string[];
}

const FILTER_ITEMS: FilterItem[] = [
  { id: 'title',       label: 'Title',               type: 'text' },
  { id: 'buy-type',    label: 'Buy Type',             type: 'checkboxes', options: ['Auction', 'Buy Now', 'Expression of Interest', 'Tender'] },
  { id: 'location',    label: 'Location',             type: 'text' },
  { id: 'distance',    label: 'Distance (km radius)', type: 'number' },
  { id: 'agent',       label: 'Agent',                type: 'text' },
  { id: 'breed',       label: 'Breed',                type: 'checkboxes', options: ['Merino', 'Poll Merino', 'Angus', 'Hereford', 'Charolais', 'Brahman', 'Wagyu'] },
  { id: 'category',    label: 'Category / Sex',       type: 'checkboxes', options: ['Ewe', 'Ram', 'Wether', 'Ewe Lamb', 'Ram Lamb', 'Wether Lamb'] },
  { id: 'age',         label: 'Age',                  type: 'minmax', unit: 'months' },
  { id: 'weight',      label: 'Weight',               type: 'minmax', unit: 'kg' },
  { id: 'accreditation', label: 'Accreditation',      type: 'checkboxes', options: ['MSA', 'PCAS', 'EU Accredited', 'HGP Free', 'Organic'] },
  { id: 'trucking',    label: 'Trucking Access',       type: 'toggle' },
];

@Component({
  selector: 'ap-filter',
  standalone: true,
  imports: [ApCheckboxComponent, ApToggleComponent, ApMinMaxInputComponent, ApInputComponent, ApNumberInputComponent, ApButtonComponent],
  templateUrl: './ap-filter.component.html',
  styleUrl:    './ap-filter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApFilterComponent {
  @Input() open = false;
  @Output() closed = new EventEmitter<void>();

  readonly filterItems = FILTER_ITEMS;
  openItems  = signal<Set<string>>(new Set());
  checked    = signal<Record<string, string[]>>({});
  toggleVals = signal<Record<string, boolean>>({});

  toggleItem(id: string): void {
    this.openItems.update(s => {
      const next = new Set(s);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  isItemOpen(id: string): boolean { return this.openItems().has(id); }

  toggleCheck(filterId: string, option: string): void {
    this.checked.update(m => {
      const cur = m[filterId] ?? [];
      const next = cur.includes(option) ? cur.filter(v => v !== option) : [...cur, option];
      return { ...m, [filterId]: next };
    });
  }

  isChecked(filterId: string, option: string): boolean {
    return (this.checked()[filterId] ?? []).includes(option);
  }

  setToggle(id: string, val: boolean): void {
    this.toggleVals.update(m => ({ ...m, [id]: val }));
  }

  getToggle(id: string): boolean { return this.toggleVals()[id] ?? false; }

  get activeCount(): number {
    const checkCount = Object.values(this.checked()).filter(v => v.length > 0).length;
    const toggleCount = Object.values(this.toggleVals()).filter(Boolean).length;
    return checkCount + toggleCount;
  }

  clearAll(): void {
    this.checked.set({});
    this.toggleVals.set({});
  }

  @HostListener('document:keydown.escape')
  onEscape(): void { if (this.open) this.closed.emit(); }
}
