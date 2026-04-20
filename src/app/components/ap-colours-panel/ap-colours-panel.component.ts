import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface ColourToken {
  name: string;
  hex: string;
  light?: boolean;
}

interface ColourGroup {
  label: string;
  tokens: (ColourToken | null)[];
  text?: boolean;
  border?: boolean;
}

const COLOUR_GROUPS: ColourGroup[] = [
  {
    label: 'Brand',
    tokens: [
      { name: '--color-brand-primary-dark',  hex: '#1542A7', light: false },
      { name: '--color-brand-primary',       hex: '#1971D8', light: false },
      { name: '--color-brand-primary-light', hex: '#E3F2FE', light: true  },
      null,
    ],
  },
  {
    label: 'Text',
    text: true,
    tokens: [
      { name: '--color-text-black',              hex: '#000000' },
      { name: '--color-text-dark',               hex: '#002341' },
      { name: '--color-text-grey-dark',          hex: '#3D4041' },
      { name: '--color-text-grey',               hex: '#5C5E60' },
      { name: '--color-text-grey-light',         hex: '#B7BABC' },
      { name: '--color-text-white',              hex: '#FFFFFF' },
      null, null,
      { name: '--color-text-brand-primary-dark', hex: '#1542A7' },
      { name: '--color-text-brand-primary',      hex: '#1971D8' },
      null, null,
      { name: '--color-text-red',                hex: '#CD002B' },
      { name: '--color-text-orange',             hex: '#D96725' },
      { name: '--color-text-green',              hex: '#006728' },
      null,
    ],
  },
  {
    label: 'Background',
    tokens: [
      { name: '--color-bg-dark',         hex: '#002341', light: false },
      { name: '--color-bg-default',      hex: '#013C65', light: false },
      { name: '--color-bg-dark-light',   hex: '#E4E8ED', light: true  },
      null,
      { name: '--color-bg-grey-dark',    hex: '#3D4041', light: false },
      { name: '--color-bg-grey-medium',  hex: '#B7BABC', light: true  },
      { name: '--color-bg-grey-light',   hex: '#DBDEE0', light: true  },
      { name: '--color-bg-light',        hex: '#F4F4F4', light: true  },
      { name: '--color-bg-white',        hex: '#FFFFFF', light: true  },
      { name: '--color-bg-blue-light',   hex: '#E3F2FE', light: true  },
      null, null,
      { name: '--color-bg-red',          hex: '#CD002B', light: false },
      { name: '--color-bg-red-light',    hex: '#FFECF1', light: true  },
      null, null,
      { name: '--color-bg-orange',       hex: '#D96725', light: false },
      { name: '--color-bg-orange-light', hex: '#FDF4E3', light: true  },
      null, null,
      { name: '--color-bg-green-dark',   hex: '#006728', light: false },
      { name: '--color-bg-green',        hex: '#00873D', light: false },
      { name: '--color-bg-green-light',  hex: '#E7F7EB', light: true  },
      null,
    ],
  },
  {
    label: 'Border',
    border: true,
    tokens: [
      { name: '--color-border-grey-dark',          hex: '#3D4041' },
      { name: '--color-border-grey',               hex: '#B7BABC' },
      { name: '--color-border-grey-light',         hex: '#DBDEE0' },
      null,
      { name: '--color-border-brand-primary-dark', hex: '#1542A7' },
      { name: '--color-border-brand-primary',      hex: '#1971D8' },
      null, null,
      { name: '--color-border-red',                hex: '#CD002B' },
      { name: '--color-border-orange',             hex: '#D96725' },
      { name: '--color-border-green',              hex: '#00873D' },
      null,
    ],
  },
  {
    label: 'Status',
    tokens: [
      { name: '--color-status-red',          hex: '#CD002B', light: false },
      { name: '--color-status-red-light',    hex: '#FFECF1', light: true  },
      null, null,
      { name: '--color-status-orange',       hex: '#D96725', light: false },
      { name: '--color-status-orange-light', hex: '#FDF4E3', light: true  },
      null, null,
      { name: '--color-status-green-dark',   hex: '#006728', light: false },
      { name: '--color-status-green',        hex: '#00873D', light: false },
      { name: '--color-status-green-light',  hex: '#E7F7EB', light: true  },
      null,
    ],
  },
  {
    label: 'Accent',
    tokens: [
      { name: '--color-accent-teal',         hex: '#005147', light: false },
      { name: '--color-accent-teal-light',   hex: '#DDEEED', light: true  },
      null, null,
      { name: '--color-accent-yellow',       hex: '#FFB700', light: true  },
      { name: '--color-accent-yellow-light', hex: '#FFF9E1', light: true  },
      null, null,
      { name: '--color-accent-purple',       hex: '#6A1B9A', light: false },
      { name: '--color-accent-purple-light', hex: '#F3E5F5', light: true  },
      null, null,
      { name: '--color-accent-pink',         hex: '#760046', light: false },
      { name: '--color-accent-pink-light',   hex: '#F3E0EA', light: true  },
      null, null,
    ],
  },
];

interface RowData { items: (ColourToken | null)[]; }

interface GroupData {
  label: string;
  kind: 'fill' | 'text' | 'border';
  rows: RowData[];
}

function buildGroups(): GroupData[] {
  return COLOUR_GROUPS.map(g => {
    const kind: 'fill' | 'text' | 'border' = g.text ? 'text' : g.border ? 'border' : 'fill';
    const rows: RowData[] = [];
    for (let i = 0; i < g.tokens.length; i += 4) {
      const chunk = g.tokens.slice(i, i + 4);
      while (chunk.length < 4) chunk.push(null);
      rows.push({ items: chunk });
    }
    return { label: g.label, kind, rows };
  });
}

@Component({
  selector: 'ap-colours-panel',
  standalone: true,
  templateUrl: './ap-colours-panel.component.html',
  styleUrl: './ap-colours-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApColoursPanelComponent {
  readonly groups = buildGroups();
  copiedToken = signal<string | null>(null);

  copyToken(name: string): void {
    navigator.clipboard.writeText(name);
    this.copiedToken.set(name);
    setTimeout(() => this.copiedToken.set(null), 1500);
  }

  shortName(name: string): string {
    return name.replace('--color-', '');
  }

  trackByIdx(_i: number, _v: unknown): number { return _i; }
}
