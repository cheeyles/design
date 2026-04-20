import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ApAvatarComponent } from '../ap-avatar/ap-avatar.component';

@Component({
  selector: 'ap-contact-card',
  standalone: true,
  imports: [ApAvatarComponent],
  templateUrl: './ap-contact-card.component.html',
  styleUrl:    './ap-contact-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApContactCardComponent {
  @Input() agentName  = '';
  @Input() agentRole  = '';
  @Input() avatarSrc?: string;
  @Input() agencyLogo?: string;
  @Input() agencyName = '';
  @Output() phone = new EventEmitter<void>();
  @Output() email = new EventEmitter<void>();
}
