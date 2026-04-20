import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ap-avatar',
  standalone: true,
  templateUrl: './ap-avatar.component.html',
  styleUrl:    './ap-avatar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApAvatarComponent {
  @Input() src?: string;
  @Input() alt = '';
  @Input() size = 40;
  @Input() verified = false;

  get badgeSize(): number { return Math.round(this.size * 0.4); }
  get iconSize(): string  { return Math.round(this.size * 0.55) + 'px'; }
  get checkSize(): string { return Math.round(this.badgeSize * 0.6) + 'px'; }
}
