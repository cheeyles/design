import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ApButtonComponent } from '../ap-button/ap-button.component';

@Component({
  selector: 'ap-action-card',
  standalone: true,
  imports: [ApButtonComponent],
  templateUrl: './ap-action-card.component.html',
  styleUrl:    './ap-action-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApActionCardComponent {
  @Input() icon        = 'add';
  @Input() title       = '';
  @Input() description = '';
  @Input() actionLabel?: string;
  @Input() actionColor: 'primary' | 'secondary' | 'positive' = 'primary';
  @Output() actionClick = new EventEmitter<void>();
}
