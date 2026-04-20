import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NgClass } from '@angular/common';

export type ButtonColor = 'primary' | 'secondary' | 'positive' | 'destructive' | 'text';
export type ButtonSize = 'sm' | 'md';

/**
 * ap-button
 *
 * Design System: src/components/actions/Button/Button.jsx
 * Figma: TI2QRswI37Xh8W8h5CrypW — node 5:3906
 *
 * @Input color    'primary' | 'secondary' | 'positive' | 'destructive' | 'text'  (default: 'primary')
 * @Input size     'sm' | 'md'  (default: 'md')
 * @Input disabled boolean  (default: false)
 * @Input type     'button' | 'submit' | 'reset'  (default: 'button')
 * @Input leadingIcon   Material Symbols Rounded name string
 * @Input trailingIcon  Material Symbols Rounded name string
 * @Output clicked  MouseEvent
 *
 * Usage:
 *   <ap-button color="primary">Get Started</ap-button>
 *   <ap-button color="secondary" size="sm">Cancel</ap-button>
 *   <ap-button color="primary" leadingIcon="add">Create Lot</ap-button>
 *   <ap-button color="primary" [disabled]="true">Saving…</ap-button>
 */
@Component({
  selector: 'ap-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './ap-button.component.html',
  styleUrl: './ap-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApButtonComponent {
  @Input() color: ButtonColor = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() leadingIcon?: string;
  @Input() trailingIcon?: string;
  @Output() clicked = new EventEmitter<MouseEvent>();

  get classes(): Record<string, boolean> {
    return {
      btn: true,
      'btn-filled': this.color !== 'text',
      [`btn-${this.color}`]: true,
      'btn-sm': this.size === 'sm',
    };
  }

  handleClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}
