import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ap-lot-detail-header',
  standalone: true,
  templateUrl: './ap-lot-detail-header.component.html',
  styleUrl:    './ap-lot-detail-header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApLotDetailHeaderComponent {
  @Input() title      = 'Pepperton Poll Dorset - Tag 512';
  @Input() location   = 'Elmore, VIC';
  @Input() lotNumber  = 'Lot 12';
  @Input() ctaLabel?: string;
}
