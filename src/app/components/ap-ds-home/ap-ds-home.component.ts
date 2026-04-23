import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { ApButtonComponent } from '../ap-button/ap-button.component';

const ITEMS = ['Assessment Entry', 'Listings Portal', 'Mobile App', 'Website', 'LiveAssess', 'Dashboard', 'Console', 'Bidding Client'];

@Component({
  selector: 'ap-ds-home',
  standalone: true,
  imports: [ApButtonComponent],
  templateUrl: './ap-ds-home.component.html',
  styleUrl: './ap-ds-home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApDsHomeComponent {
  @Output() getStarted = new EventEmitter<void>();

  tickerItems = [...ITEMS, ...ITEMS];
}
