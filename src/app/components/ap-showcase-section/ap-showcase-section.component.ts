import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ap-showcase-section',
  standalone: true,
  templateUrl: './ap-showcase-section.component.html',
  styleUrl: './ap-showcase-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApShowcaseSectionComponent {
  @Input({ required: true }) title!: string;
  @Input() description?: string;
}
