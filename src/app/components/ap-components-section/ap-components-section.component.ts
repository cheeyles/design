import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApComingSoonComponent }        from '../ap-coming-soon/ap-coming-soon.component';
import { ApButtonPageComponent }        from '../ap-button-page/ap-button-page.component';
import { ApTabPageComponent }           from '../ap-tab-page/ap-tab-page.component';
import { ApSidenavItemPageComponent }   from '../ap-sidenav-item-page/ap-sidenav-item-page.component';
import { ApInputPageComponent }         from '../ap-input-page/ap-input-page.component';
import { ApNumberPageComponent }        from '../ap-number-page/ap-number-page.component';
import { ApSelectPageComponent }        from '../ap-select-page/ap-select-page.component';
import { ApRadioPageComponent }         from '../ap-radio-page/ap-radio-page.component';
import { ApCheckboxPageComponent }      from '../ap-checkbox-page/ap-checkbox-page.component';
import { ApTogglePageComponent }        from '../ap-toggle-page/ap-toggle-page.component';
import { ApDatePickerPageComponent }    from '../ap-date-picker-page/ap-date-picker-page.component';
import { ApTagsPageComponent }          from '../ap-tags-page/ap-tags-page.component';
import { ApScrollbarPageComponent }     from '../ap-scrollbar-page/ap-scrollbar-page.component';
import { ApImagePageComponent }         from '../ap-image-page/ap-image-page.component';
import { ApAvatarPageComponent }        from '../ap-avatar-page/ap-avatar-page.component';
import { ApMessagePageComponent }       from '../ap-message-page/ap-message-page.component';
import { ApTooltipPageComponent }       from '../ap-tooltip-page/ap-tooltip-page.component';

interface NavChild { id: string; label: string; done: boolean; }
interface NavItem  { id: string; label: string; done?: boolean; children?: NavChild[]; }

const NAV: NavItem[] = [
  { id: 'button', label: 'Buttons', done: true },
  {
    id: 'inputs', label: 'Inputs',
    children: [
      { id: 'inputs-text',     label: 'Text Inputs',   done: true  },
      { id: 'inputs-number',   label: 'Number Inputs', done: true  },
      { id: 'inputs-dropdown', label: 'Dropdown Menu', done: true  },
      { id: 'inputs-special',  label: 'Search Field',  done: false },
      { id: 'inputs-radio',    label: 'Radio Button',  done: true  },
      { id: 'inputs-checkbox', label: 'Checkboxes',    done: true  },
      { id: 'inputs-date',     label: 'Date Picker',   done: true  },
      { id: 'inputs-toggle',   label: 'Toggle',        done: true  },
    ],
  },
  { id: 'tags',      label: 'Tags & Badges', done: true },
  { id: 'menu-item', label: 'Nav Items',     done: true },
  { id: 'scrollbar', label: 'Scrollbar',     done: true },
  { id: 'tab',       label: 'Tab',           done: true },
  { id: 'image',     label: 'Image',         done: true },
  { id: 'avatar',    label: 'Avatar',        done: true },
  { id: 'message',   label: 'Message',       done: true },
  { id: 'tooltip',   label: 'Tooltip',       done: true },
];

@Component({
  selector: 'ap-components-section',
  standalone: true,
  imports: [
    ApComingSoonComponent,
    ApButtonPageComponent,
    ApTabPageComponent,
    ApSidenavItemPageComponent,
    ApInputPageComponent,
    ApNumberPageComponent,
    ApSelectPageComponent,
    ApRadioPageComponent,
    ApCheckboxPageComponent,
    ApTogglePageComponent,
    ApDatePickerPageComponent,
    ApTagsPageComponent,
    ApScrollbarPageComponent,
    ApImagePageComponent,
    ApAvatarPageComponent,
    ApMessagePageComponent,
    ApTooltipPageComponent,
  ],
  templateUrl: './ap-components-section.component.html',
  styleUrl:    './ap-components-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApComponentsSectionComponent {
  nav = NAV;
  active     = signal('button');
  openGroups = signal<Record<string, boolean>>({});

  toggleGroup(id: string): void {
    this.openGroups.update(g => ({ ...g, [id]: !g[id] }));
  }

  setActive(id: string): void {
    this.active.set(id);
  }

  get activeLabel(): string {
    for (const item of NAV) {
      if (item.id === this.active()) return item.label;
      for (const child of item.children ?? []) {
        if (child.id === this.active()) return child.label;
      }
    }
    return '';
  }
}
