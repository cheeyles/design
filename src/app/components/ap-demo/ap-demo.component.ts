import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ap-demo',
  standalone: true,
  templateUrl: './ap-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApDemoComponent {}
