import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export type MessageVariant = 'info' | 'announcement' | 'error';

interface MessageConfig { bg: string; border: string; icon: string; color: string; }

const CONFIG: Record<MessageVariant, MessageConfig> = {
  info:         { bg: 'var(--color-bg-light)',        border: 'var(--color-brand-primary-dark)', icon: 'info',    color: 'var(--color-brand-primary-dark)' },
  announcement: { bg: 'var(--color-bg-orange-light)', border: 'var(--color-border-orange)',       icon: 'message', color: 'var(--color-text-orange)'         },
  error:        { bg: 'var(--color-bg-red-light)',    border: 'var(--color-border-red)',          icon: 'error',   color: 'var(--color-text-red)'            },
};

@Component({
  selector: 'ap-message',
  standalone: true,
  templateUrl: './ap-message.component.html',
  styleUrl:    './ap-message.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApMessageComponent {
  @Input() variant: MessageVariant = 'info';
  @Input() heading?: string;
  @Input() ctaLabel?: string;
  @Output() ctaClick = new EventEmitter<void>();

  get config(): MessageConfig { return CONFIG[this.variant]; }
  get hasCta(): boolean { return !!this.ctaLabel; }
}
