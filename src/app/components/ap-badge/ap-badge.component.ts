import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type BadgeColor = 'blue' | 'red' | 'yellow' | 'grey';

@Component({
  selector: 'ap-badge',
  standalone: true,
  templateUrl: './ap-badge.component.html',
  styleUrl:    './ap-badge.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApBadgeComponent {
  @Input() count = 1;
  @Input() color: BadgeColor = 'blue';

  get display(): string {
    return this.count > 99 ? '99+' : String(this.count);
  }

  get single(): boolean {
    return this.display.length === 1;
  }
}
