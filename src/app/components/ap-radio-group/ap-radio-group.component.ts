import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ApRadioComponent } from '../ap-radio/ap-radio.component';

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'ap-radio-group',
  standalone: true,
  imports: [ApRadioComponent],
  templateUrl: './ap-radio-group.component.html',
  styleUrl:    './ap-radio-group.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApRadioGroupComponent {
  @Input() label?: string;
  @Input() options: (string | RadioOption)[] = [];
  @Input() name = '';
  @Input() value?: string;
  @Input() disabled = false;
  @Output() valueChange = new EventEmitter<string>();

  get items(): RadioOption[] {
    return this.options.map(o => typeof o === 'string' ? { value: o, label: o } : o);
  }

  select(val: string): void {
    this.valueChange.emit(val);
  }
}
