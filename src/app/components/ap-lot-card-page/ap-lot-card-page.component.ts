import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApDocPageComponent }  from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }     from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent } from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent } from '../ap-code-block/ap-code-block.component';
import { ApLotCardComponent, LotSpec, LotAbv } from '../ap-lot-card/ap-lot-card.component';

@Component({
  selector: 'ap-lot-card-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApLotCardComponent,
  ],
  templateUrl: './ap-lot-card-page.component.html',
  styleUrl:    './ap-lot-card-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApLotCardPageComponent {

  readonly sheepImages = [
    'https://plus.unsplash.com/premium_photo-1666777246850-e18916172de7?q=80&w=774&auto=format&fit=crop',
  ];

  readonly sheepSpecs: LotSpec[] = [
    { key: 'Breed',  value: 'Poll Dorset' },
    { key: 'Type',   value: 'Ram'         },
    { key: 'Age',    value: '22 months'   },
    { key: 'Weight', value: '92 kg'       },
  ];

  readonly sheepAbvs: LotAbv[] = [
    { key: 'WWT',    value: '13.80', percentile: 5  },
    { key: 'CWT',    value: '8.58',  percentile: 5  },
    { key: 'PEMD',   value: '4.64',  percentile: 5  },
    { key: 'LE_DIR', value: '1.51',  percentile: 20 },
  ];

  readonly cattleImages = [
    'https://images.unsplash.com/photo-1734678341315-09625ffd8bf0?q=80&w=774&auto=format&fit=crop',
  ];

  readonly cattleSpecs: LotSpec[] = [
    { key: 'Breed',  value: 'Angus'    },
    { key: 'Type',   value: 'Steer'    },
    { key: 'Age',    value: '18 months' },
    { key: 'Weight', value: '480 kg'   },
  ];

  readonly code =
`<ap-lot-card
  [images]="images"
  location="Elmore, VIC"
  title="Lot 12 - Pepperton Tag 512"
  breeder="Pepperton Poll Dorsets"
  [specs]="specs"
  [abvs]="abvs"
  [tags]="['$/Head', 'Assessed']"
  agencyName="Elders Bendigo"
/>`;
}
