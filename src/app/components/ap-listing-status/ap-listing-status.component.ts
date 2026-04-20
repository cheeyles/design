import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type ListingStatusVariant = 'published' | 'draft' | 'unpublished' | 'withdrawn';

interface ListingConfig { bg: string; label: string; }

const CONFIG: Record<string, ListingConfig> = {
  'published':   { bg: 'var(--color-bg-green)',           label: 'Published'   },
  'draft':       { bg: 'var(--color-brand-primary-dark)', label: 'Draft'       },
  'unpublished': { bg: 'var(--color-bg-orange)',           label: 'Unpublished' },
  'withdrawn':   { bg: 'var(--color-bg-grey-medium)',      label: 'Withdrawn'   },
};

@Component({
  selector: 'ap-listing-status',
  standalone: true,
  templateUrl: './ap-listing-status.component.html',
  styleUrl:    './ap-listing-status.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApListingStatusComponent {
  @Input() variant: ListingStatusVariant = 'published';

  get config(): ListingConfig {
    return CONFIG[this.variant] ?? CONFIG['published'];
  }
}
