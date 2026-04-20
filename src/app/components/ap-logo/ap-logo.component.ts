import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ap-logo',
  standalone: true,
  templateUrl: './ap-logo.component.html',
  styleUrl: './ap-logo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApLogoComponent {
  @Input() variant: 'dark' | 'light' | 'white' = 'dark';
  @Input() width = '175px';
  @Input() iconOnly = false;

  get iconSrc(): string {
    return this.variant === 'white'
      ? 'logo/icon-white.svg'
      : 'logo/icon-color.svg';
  }

  get wordmarkSrc(): string {
    return this.variant === 'dark'
      ? 'logo/wordmark-dark.svg'
      : 'logo/wordmark-light.svg';
  }
}
