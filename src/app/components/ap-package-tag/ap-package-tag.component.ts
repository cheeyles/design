import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type PackageTagVariant = 'premium' | 'prime' | 'classic' | 'sim-online' | 'attended';

interface PackageConfig { icon: string; label: string; }

const CONFIG: Record<string, PackageConfig> = {
  'premium':    { icon: 'support_agent',     label: 'Premium'    },
  'prime':      { icon: 'headphones',        label: 'Prime'      },
  'classic':    { icon: 'computer',          label: 'Classic'    },
  'sim-online': { icon: 'computer',          label: 'SIM/Online' },
  'attended':   { icon: 'person_raised_hand', label: 'Attended'  },
};

@Component({
  selector: 'ap-package-tag',
  standalone: true,
  templateUrl: './ap-package-tag.component.html',
  styleUrl:    './ap-package-tag.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApPackageTagComponent {
  @Input() variant: PackageTagVariant = 'premium';

  get config(): PackageConfig {
    return CONFIG[this.variant] ?? CONFIG['premium'];
  }
}
