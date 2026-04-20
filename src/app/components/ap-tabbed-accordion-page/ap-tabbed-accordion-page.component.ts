import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApDocPageComponent }           from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent }        from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }              from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }         from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }         from '../ap-code-block/ap-code-block.component';
import { ApTabbedAccordionComponent, AccordionSection } from '../ap-tabbed-accordion/ap-tabbed-accordion.component';

@Component({
  selector: 'ap-tabbed-accordion-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApTabbedAccordionComponent,
  ],
  templateUrl: './ap-tabbed-accordion-page.component.html',
  styleUrl:    './ap-tabbed-accordion-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApTabbedAccordionPageComponent {
  readonly sections: AccordionSection[] = [
    {
      id: 'detail', title: 'Detail', icon: 'fact_check',
      fields: [
        { label: 'Lot number',   value: '1234',        icon: 'confirmation_number' },
        { label: 'Head count',   value: '42',          icon: 'calculate' },
        { label: 'State',        value: 'NSW',         icon: 'location_on' },
        { label: 'Listing date', value: '12 Apr 2026', icon: 'calendar_today' },
      ],
    },
    {
      id: 'pedigree', title: 'Pedigree', icon: 'fact_check',
      fields: [
        { label: 'Sire',    value: 'Classy Merino 123' },
        { label: 'Dam',     value: 'Poll Merino 456'   },
        { label: 'Sire ID', value: 'AU-1234567'        },
        { label: 'Dam ID',  value: 'AU-7654321'        },
      ],
    },
    {
      id: 'ebv', title: 'Estimated Breeding Values (EBV)', icon: 'fact_check',
      fields: [
        { label: 'Birth weight',   value: '+0.8'  },
        { label: 'Weaning weight', value: '+12.4' },
        { label: 'Fleece weight',  value: '+0.6'  },
        { label: 'Fibre diameter', value: '-1.2'  },
      ],
    },
    {
      id: 'delivery', title: 'Delivery', icon: 'local_shipping',
      fields: [
        { label: 'Pick-up location', value: 'Dubbo, NSW'      },
        { label: 'Trucking access',  value: 'B-double'        },
        { label: 'Loading',          value: 'Crush available' },
        { label: 'Est. travel',      value: '3–4 hours'       },
      ],
    },
    {
      id: 'contact', title: 'Other Contact Details', icon: 'fact_check',
      fields: [
        { label: 'Agent',  value: 'John Smith'         },
        { label: 'Agency', value: 'Elders Dubbo'       },
        { label: 'Phone',  value: '02 6882 0000'       },
        { label: 'Email',  value: 'john@elders.com.au' },
      ],
    },
  ];

  readonly code =
`<ap-tabbed-accordion [sections]="sections" />`;
}
