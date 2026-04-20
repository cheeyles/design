import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ToastService } from '../../services/toast.service';

const VARIANTS = {
  success: { icon: 'check_circle',  color: 'var(--color-text-green)'         },
  error:   { icon: 'error',         color: 'var(--color-text-red)'           },
  warning: { icon: 'warning',       color: 'var(--color-text-orange)'        },
  info:    { icon: 'info',          color: 'var(--color-brand-primary-dark)' },
} as const;

@Component({
  selector: 'ap-toast-host',
  standalone: true,
  templateUrl: './ap-toast-host.component.html',
  styleUrl:    './ap-toast-host.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApToastHostComponent {
  readonly toastService = inject(ToastService);

  variantConfig(v: string) {
    return VARIANTS[v as keyof typeof VARIANTS] ?? VARIANTS.info;
  }
}
