import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type ProgressVariant = 'default' | 'success' | 'warning' | 'error';

const COLORS: Record<ProgressVariant, string> = {
  default: 'var(--color-brand-primary)',
  success: 'var(--color-bg-green)',
  warning: 'var(--color-text-orange)',
  error:   'var(--color-bg-red)',
};

@Component({
  selector: 'ap-progress-indicator',
  standalone: true,
  templateUrl: './ap-progress-indicator.component.html',
  styleUrl:    './ap-progress-indicator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApProgressIndicatorComponent {
  @Input() value     = 0;
  @Input() label?:   string;
  @Input() showValue = true;
  @Input() size: 'sm' | 'md' = 'md';
  @Input() variant: ProgressVariant = 'default';

  get pct():   number { return Math.min(100, Math.max(0, this.value)); }
  get color(): string { return COLORS[this.variant] ?? COLORS.default; }
  get trackH(): string { return this.size === 'sm' ? '4px' : '8px'; }
}
