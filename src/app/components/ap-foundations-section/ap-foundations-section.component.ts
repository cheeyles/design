import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApComingSoonComponent }    from '../ap-coming-soon/ap-coming-soon.component';
import { ApColoursPanelComponent }  from '../ap-colours-panel/ap-colours-panel.component';
import { ApTypographyPanelComponent } from '../ap-typography-panel/ap-typography-panel.component';
import { ApIconsPanelComponent }    from '../ap-icons-panel/ap-icons-panel.component';
import { ApLogoPanelComponent }     from '../ap-logo-panel/ap-logo-panel.component';
import { ApSpacingPanelComponent }  from '../ap-spacing-panel/ap-spacing-panel.component';
import { ApSizingPanelComponent }   from '../ap-sizing-panel/ap-sizing-panel.component';
import { ApShadowsPanelComponent }  from '../ap-shadows-panel/ap-shadows-panel.component';
import { ApRadiusPanelComponent }   from '../ap-radius-panel/ap-radius-panel.component';
import { ApBorderWidthPanelComponent } from '../ap-border-width-panel/ap-border-width-panel.component';
import { ApOpacityPanelComponent }  from '../ap-opacity-panel/ap-opacity-panel.component';
import { ApTransitionPanelComponent } from '../ap-transition-panel/ap-transition-panel.component';
import { ApZIndexPanelComponent }   from '../ap-z-index-panel/ap-z-index-panel.component';
import { ApBreakpointsPanelComponent } from '../ap-breakpoints-panel/ap-breakpoints-panel.component';

interface NavItem { id: string; label: string; }

const NAV: NavItem[] = [
  { id: 'colours',      label: 'Colours'      },
  { id: 'typography',   label: 'Typography'   },
  { id: 'icons',        label: 'Icons'        },
  { id: 'logo',         label: 'Logo'         },
  { id: 'spacing',      label: 'Spacing'      },
  { id: 'sizing',       label: 'Sizing'       },
  { id: 'shadows',      label: 'Shadows'      },
  { id: 'radius',       label: 'Radius'       },
  { id: 'border-width', label: 'Border Width' },
  { id: 'opacity',      label: 'Opacity'      },
  { id: 'transition',   label: 'Transition'   },
  { id: 'z-index',      label: 'Z-Index'      },
  { id: 'breakpoints',  label: 'Breakpoints'  },
];

@Component({
  selector: 'ap-foundations-section',
  standalone: true,
  imports: [
    ApComingSoonComponent,
    ApColoursPanelComponent,
    ApTypographyPanelComponent,
    ApIconsPanelComponent,
    ApLogoPanelComponent,
    ApSpacingPanelComponent,
    ApSizingPanelComponent,
    ApShadowsPanelComponent,
    ApRadiusPanelComponent,
    ApBorderWidthPanelComponent,
    ApOpacityPanelComponent,
    ApTransitionPanelComponent,
    ApZIndexPanelComponent,
    ApBreakpointsPanelComponent,
  ],
  templateUrl: './ap-foundations-section.component.html',
  styleUrl:    './ap-foundations-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApFoundationsSectionComponent {
  nav = NAV;
  active = signal('colours');

  get activeLabel(): string {
    return NAV.find(n => n.id === this.active())?.label ?? '';
  }
}
