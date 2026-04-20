import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

export interface TabItem {
  label: string;
  value?: string;
  badge?: number;
  icon?: string;  // Material Symbols Rounded name
}

@Component({
  selector: 'ap-tab-navigation',
  standalone: true,
  imports: [],
  templateUrl: './ap-tab-navigation.component.html',
  styleUrl: './ap-tab-navigation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApTabNavigationComponent {
  @Input() tabs: (string | TabItem)[] = [];
  @Input() activeIndex = 0;
  @Output() tabChange = new EventEmitter<number>();

  labelOf(tab: string | TabItem): string {
    return typeof tab === 'string' ? tab : tab.label;
  }

  iconOf(tab: string | TabItem): string | undefined {
    return typeof tab === 'string' ? undefined : tab.icon;
  }

  badgeOf(tab: string | TabItem): number | undefined {
    return typeof tab === 'string' ? undefined : tab.badge;
  }

  badgeDisplay(count: number): string {
    return count > 99 ? '99+' : String(count);
  }

  isSingle(count: number): boolean {
    return this.badgeDisplay(count).length === 1;
  }

  select(index: number): void {
    if (index !== this.activeIndex) {
      this.tabChange.emit(index);
    }
  }
}
