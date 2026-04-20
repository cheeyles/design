import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';

export interface AccordionField  { label: string; value: string; icon?: string; }
export interface AccordionSection {
  id: string;
  title: string;
  icon?: string;
  fields?: AccordionField[];
}

@Component({
  selector: 'ap-tabbed-accordion',
  standalone: true,
  templateUrl: './ap-tabbed-accordion.component.html',
  styleUrl:    './ap-tabbed-accordion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApTabbedAccordionComponent {
  @Input() sections: AccordionSection[] = [];

  openIds = signal<Set<string>>(new Set());

  toggle(id: string): void {
    this.openIds.update(s => {
      const next = new Set(s);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  isOpen(id: string): boolean { return this.openIds().has(id); }
}
