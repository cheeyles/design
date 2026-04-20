import { ChangeDetectionStrategy, Component } from '@angular/core';

interface SpacingEntry {
  token: string;
  label: string;
  raw: string;
  use: string;
}

const SPACING: SpacingEntry[] = [
  { token: '--spacing-0-5',  label: 'spacing-0-5',  raw: '2px',   use: 'Sub-pixel gaps, icon dot separators' },
  { token: '--spacing-2xs',  label: 'spacing-2xs',  raw: '2px',   use: 'Alias for 0-5 — tag inner padding' },
  { token: '--spacing-xs',   label: 'spacing-xs',   raw: '4px',   use: 'Tight gaps — icon-to-label, badge padding' },
  { token: '--spacing-sm',   label: 'spacing-sm',   raw: '8px',   use: 'Compact items — chip padding, stacked label gaps' },
  { token: '--spacing-sm-md',label: 'spacing-sm-md',raw: '12px',  use: 'Button padding, form field inner padding' },
  { token: '--spacing-md',   label: 'spacing-md',   raw: '16px',  use: 'Standard — card inner padding, form field gaps' },
  { token: '--spacing-md-lg',label: 'spacing-md-lg',raw: '20px',  use: 'Medium-large — content block spacing' },
  { token: '--spacing-lg',   label: 'spacing-lg',   raw: '24px',  use: 'Section padding — card-to-card gaps, panel inner' },
  { token: '--spacing-xl',   label: 'spacing-xl',   raw: '32px',  use: 'Large section spacing, panel gaps' },
  { token: '--spacing-2xl',  label: 'spacing-2xl',  raw: '48px',  use: 'Large component padding, vertical page rhythm' },
  { token: '--spacing-3xl',  label: 'spacing-3xl',  raw: '64px',  use: 'Layout section gaps' },
  { token: '--spacing-4xl',  label: 'spacing-4xl',  raw: '80px',  use: 'Hero and banner spacing' },
  { token: '--spacing-5xl',  label: 'spacing-5xl',  raw: '96px',  use: 'Large layout gaps' },
  { token: '--spacing-6xl',  label: 'spacing-6xl',  raw: '128px', use: 'Page-level vertical rhythm' },
];

@Component({
  selector: 'ap-spacing-panel',
  standalone: true,
  templateUrl: './ap-spacing-panel.component.html',
  styleUrl:    './ap-spacing-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApSpacingPanelComponent {
  readonly spacing = SPACING;
}
