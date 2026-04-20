import { Injectable, signal } from '@angular/core';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export interface ToastItem {
  id: number;
  title?: string;
  message: string;
  variant: ToastVariant;
  action?: { label: string; onClick: () => void };
}

let nextId = 0;

@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly toasts = signal<ToastItem[]>([]);

  show(options: Omit<ToastItem, 'id'> & { duration?: number }): number {
    const id = ++nextId;
    const { duration = 4000, ...rest } = options;
    this.toasts.update(t => [...t, { id, ...rest }]);
    if (duration > 0) {
      setTimeout(() => this.dismiss(id), duration);
    }
    return id;
  }

  dismiss(id: number): void {
    this.toasts.update(t => t.filter(toast => toast.id !== id));
  }
}
