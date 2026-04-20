import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ApDemoComponent }      from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent } from '../ap-demo-group/ap-demo-group.component';

@Component({
  selector: 'ap-showcase-row',
  standalone: true,
  imports: [ApDemoComponent, ApDemoGroupComponent],
  templateUrl: './ap-showcase-row.component.html',
  styleUrl: './ap-showcase-row.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApShowcaseRowComponent {
  @Input() label?: string;
}
