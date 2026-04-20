import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ApLogoComponent } from '../ap-logo/ap-logo.component';

interface FooterColumn { title: string; links: string[]; }

const NAV_COLUMNS: FooterColumn[] = [
  { title: 'Company',          links: ['About Us', 'Meet Our Team', 'Awards', 'Careers', 'Logos & Brand Guidelines'] },
  { title: 'Tools & Resources', links: ['Find Assessors', 'Livestock Finance', 'Accreditations', 'Assessment Forms', 'Biosecurity Awareness'] },
  { title: 'Support',          links: ['Contact Us', 'Help Centre'] },
  { title: 'Selling',          links: ['Sell Livestock', 'Sell Machinery', 'Sell Property', 'Listing Fees', 'Advertise on AuctionsPlus'] },
];

const LEGAL_LINKS = ['User Agreement & Sale Terms', 'Website Terms', 'Privacy Policy'];

@Component({
  selector: 'ap-footer',
  standalone: true,
  imports: [ApLogoComponent],
  templateUrl: './ap-footer.component.html',
  styleUrl:    './ap-footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApFooterComponent {
  @Input() mobile = false;

  readonly columns    = NAV_COLUMNS;
  readonly legalLinks = LEGAL_LINKS;
}
