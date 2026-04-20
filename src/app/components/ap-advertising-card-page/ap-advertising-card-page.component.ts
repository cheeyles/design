import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApComingSoonComponent } from '../ap-coming-soon/ap-coming-soon.component';

@Component({
  selector: 'ap-advertising-card-page',
  standalone: true,
  imports: [ApComingSoonComponent],
  template: `<ap-coming-soon title="Advertising Card" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApAdvertisingCardPageComponent {}
