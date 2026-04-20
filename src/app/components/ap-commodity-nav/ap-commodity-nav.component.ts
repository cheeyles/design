import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export interface CommodityItem { id: string; label: string; }

const DEFAULT_COMMODITIES: CommodityItem[] = [
  { id: 'auction',   label: 'Today'     },
  { id: 'cattle',    label: 'Cattle'    },
  { id: 'sheep',     label: 'Sheep'     },
  { id: 'machinery', label: 'Machinery' },
  { id: 'equine',    label: 'Equine'    },
  { id: 'dog',       label: 'Dog'       },
  { id: 'goat',      label: 'Goat'      },
  { id: 'property',  label: 'Property'  },
  { id: 'charity',   label: 'Charity'   },
];

@Component({
  selector: 'ap-commodity-nav',
  standalone: true,
  templateUrl: './ap-commodity-nav.component.html',
  styleUrl:    './ap-commodity-nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApCommodityNavComponent {
  @Input() value?: string;
  @Input() items: CommodityItem[] = DEFAULT_COMMODITIES;
  @Output() valueChange = new EventEmitter<string>();

  iconSrc(id: string): string { return `icons/commodity/${id}.svg`; }
}
