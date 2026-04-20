import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ap-coming-soon',
  standalone: true,
  templateUrl: './ap-coming-soon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApComingSoonComponent {
  @Input() title?: string;
  @Input() description = 'This component is coming soon.';
}
