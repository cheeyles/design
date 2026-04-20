import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ApButtonComponent } from '../ap-button/ap-button.component';

@Component({
  selector: 'ap-empty-state',
  standalone: true,
  imports: [ApButtonComponent],
  templateUrl: './ap-empty-state.component.html',
  styleUrl:    './ap-empty-state.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApEmptyStateComponent {
  @Input() icon       = 'inbox';
  @Input() title?:    string;
  @Input() message?:  string;
  @Input() actionLabel?: string;
  @Output() actionClick = new EventEmitter<void>();
}
