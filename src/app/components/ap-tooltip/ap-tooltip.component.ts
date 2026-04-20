import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

@Component({
  selector: 'ap-tooltip',
  standalone: true,
  templateUrl: './ap-tooltip.component.html',
  styleUrl:    './ap-tooltip.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApTooltipComponent {
  @Input() content = '';
  @Input() placement: TooltipPlacement = 'top';

  readonly visible = signal(false);

  show(): void { this.visible.set(true);  }
  hide(): void { this.visible.set(false); }
}
