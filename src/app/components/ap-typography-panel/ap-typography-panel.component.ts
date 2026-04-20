import { ChangeDetectionStrategy, Component } from '@angular/core';

interface TypeEntry {
  label: string;
  size: string;
  lh: string;
  raw: string;
  weight: number;
}

interface TypeGroup {
  label: string;
  tokens: TypeEntry[];
}

const TYPE_GROUPS: TypeGroup[] = [
  { label: 'Display', tokens: [
    { label: 'display-lg', size: '--type-size-display-lg', lh: '--type-lh-display-lg', raw: '57 / 86', weight: 400 },
    { label: 'display-md', size: '--type-size-display-md', lh: '--type-lh-display-md', raw: '45 / 68', weight: 400 },
    { label: 'display-sm', size: '--type-size-display-sm', lh: '--type-lh-display-sm', raw: '36 / 54', weight: 400 },
  ]},
  { label: 'Headline', tokens: [
    { label: 'headline-lg', size: '--type-size-headline-lg', lh: '--type-lh-headline-lg', raw: '32 / 48', weight: 400 },
    { label: 'headline-md', size: '--type-size-headline-md', lh: '--type-lh-headline-md', raw: '28 / 42', weight: 400 },
    { label: 'headline-sm', size: '--type-size-headline-sm', lh: '--type-lh-headline-sm', raw: '24 / 36', weight: 400 },
  ]},
  { label: 'Title', tokens: [
    { label: 'title-lg', size: '--type-size-title-lg', lh: '--type-lh-title-lg', raw: '20 / 30', weight: 500 },
    { label: 'title-md', size: '--type-size-title-md', lh: '--type-lh-title-md', raw: '18 / 28', weight: 500 },
  ]},
  { label: 'Body', tokens: [
    { label: 'body-md', size: '--type-size-body-md', lh: '--type-lh-body-md', raw: '16 / 24', weight: 400 },
    { label: 'body-sm', size: '--type-size-body-sm', lh: '--type-lh-body-sm', raw: '14 / 22', weight: 400 },
  ]},
  { label: 'Label', tokens: [
    { label: 'label-md', size: '--type-size-label-md', lh: '--type-lh-label-md', raw: '12 / 18', weight: 500 },
    { label: 'label-sm', size: '--type-size-label-sm', lh: '--type-lh-label-sm', raw: '10 / 16', weight: 500 },
  ]},
];

const WEIGHTS = [
  { token: 'type-weight-regular',  label: 'Regular',   weight: 400 },
  { token: 'type-weight-medium',   label: 'Medium',    weight: 500 },
  { token: 'type-weight-semibold', label: 'Semi Bold', weight: 600 },
  { token: 'type-weight-bold',     label: 'Bold',      weight: 700 },
];

@Component({
  selector: 'ap-typography-panel',
  standalone: true,
  templateUrl: './ap-typography-panel.component.html',
  styleUrl: './ap-typography-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApTypographyPanelComponent {
  readonly typeGroups = TYPE_GROUPS;
  readonly weights    = WEIGHTS;

  weightLabel(w: number): string {
    return w === 400 ? 'Regular · 400' : w === 500 ? 'Medium · 500' : w === 600 ? 'Semi Bold · 600' : 'Bold · 700';
  }
}
