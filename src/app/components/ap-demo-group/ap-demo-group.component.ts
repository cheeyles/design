import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ap-demo-group',
  standalone: true,
  templateUrl: './ap-demo-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApDemoGroupComponent {
  @Input() label?: string;
  @Input() column = false;
  @Input() gap?: string;
}
