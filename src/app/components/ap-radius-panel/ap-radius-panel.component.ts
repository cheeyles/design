import { ChangeDetectionStrategy, Component } from '@angular/core';

interface RadiusEntry { token: string; label: string; raw: string; }

const RADII: RadiusEntry[] = [
  { token: '--radius-xs',   label: 'radius-xs',   raw: '2px'    },
  { token: '--radius-sm',   label: 'radius-sm',   raw: '4px'    },
  { token: '--radius-md',   label: 'radius-md',   raw: '8px'    },
  { token: '--radius-lg',   label: 'radius-lg',   raw: '12px'   },
  { token: '--radius-xl',   label: 'radius-xl',   raw: '16px'   },
  { token: '--radius-full', label: 'radius-full', raw: '9999px' },
];

@Component({
  selector: 'ap-radius-panel',
  standalone: true,
  templateUrl: './ap-radius-panel.component.html',
  styleUrl:    './ap-radius-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApRadiusPanelComponent {
  readonly radii = RADII;
}
