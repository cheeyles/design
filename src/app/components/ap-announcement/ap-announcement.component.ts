import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ap-announcement',
  standalone: true,
  templateUrl: './ap-announcement.component.html',
  styleUrl:    './ap-announcement.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApAnnouncementComponent {
  @Input() title   = '';
  @Input() message?: string;
  @Input() actionLabel?: string;
  @Output() dismiss     = new EventEmitter<void>();
  @Output() actionClick = new EventEmitter<void>();
}
