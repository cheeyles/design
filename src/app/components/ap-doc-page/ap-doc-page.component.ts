import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ap-doc-page',
  standalone: true,
  templateUrl: './ap-doc-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApDocPageComponent {}
