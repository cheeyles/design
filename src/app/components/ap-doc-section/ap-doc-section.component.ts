import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ap-doc-section',
  standalone: true,
  templateUrl: './ap-doc-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApDocSectionComponent {
  @Input({ required: true }) title!: string;
}
