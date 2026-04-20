import { ChangeDetectionStrategy, Component } from '@angular/core';

interface BreakpointEntry { token: string; label: string; raw: string; tailwind: string; use: string; }

const BREAKPOINTS: BreakpointEntry[] = [
  { token: '--breakpoint-xs',  label: 'breakpoint-xs',  raw: '390px',  tailwind: '—',    use: 'Mobile base — portrait phones' },
  { token: '--breakpoint-sm',  label: 'breakpoint-sm',  raw: '480px',  tailwind: '—',    use: 'Large phones, landscape mobile' },
  { token: '--breakpoint-md',  label: 'breakpoint-md',  raw: '768px',  tailwind: 'md:',  use: 'Tablets, two-column layouts begin' },
  { token: '--breakpoint-lg',  label: 'breakpoint-lg',  raw: '1024px', tailwind: 'lg:',  use: 'Desktop — sidebar + content layouts' },
  { token: '--breakpoint-xl',  label: 'breakpoint-xl',  raw: '1280px', tailwind: 'xl:',  use: 'Wide desktop — max-width containers' },
  { token: '--breakpoint-2xl', label: 'breakpoint-2xl', raw: '1536px', tailwind: '2xl:', use: 'Extra-wide — large monitor layouts' },
];

@Component({
  selector: 'ap-breakpoints-panel',
  standalone: true,
  templateUrl: './ap-breakpoints-panel.component.html',
  styleUrl:    './ap-breakpoints-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApBreakpointsPanelComponent {
  readonly breakpoints = BREAKPOINTS;

  barWidth(raw: string): string {
    return `${(parseInt(raw) / 1536) * 100}%`;
  }
}
