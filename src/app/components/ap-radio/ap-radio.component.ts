import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ap-radio',
  standalone: true,
  templateUrl: './ap-radio.component.html',
  styleUrl:    './ap-radio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApRadioComponent {
  @Input() label?: string;
  @Input() checked = false;
  @Input() disabled = false;
  @Input() name?: string;
  @Input() value?: string;
  @Output() checkedChange = new EventEmitter<void>();
}
