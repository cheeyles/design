import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';

export type ImageRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';

const RADIUS: Record<ImageRadius, string> = {
  none: '0',
  sm:   'var(--radius-sm)',
  md:   'var(--radius-md)',
  lg:   'var(--radius-lg)',
  full: 'var(--radius-full)',
};

@Component({
  selector: 'ap-image',
  standalone: true,
  templateUrl: './ap-image.component.html',
  styleUrl:    './ap-image.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApImageComponent {
  @Input() src?: string;
  @Input() alt = '';
  @Input() aspectRatio = '3/2';
  @Input() radius: ImageRadius = 'none';
  @Input() fit: 'cover' | 'contain' = 'cover';

  readonly status = signal<'loading' | 'loaded' | 'error'>('loading');

  get radiusValue(): string {
    return RADIUS[this.radius] ?? this.radius;
  }

  onLoad(): void  { this.status.set('loaded'); }
  onError(): void { this.status.set('error');  }
}
