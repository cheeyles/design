import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { ApPercentileTagComponent } from '../ap-percentile-tag/ap-percentile-tag.component';

export interface LotSpec   { key: string; value: string; }
export interface LotAbv    { key: string; value: string; percentile?: 5 | 10 | 20 | 50; }

@Component({
  selector: 'ap-lot-card',
  standalone: true,
  imports: [ApPercentileTagComponent],
  templateUrl: './ap-lot-card.component.html',
  styleUrl:    './ap-lot-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApLotCardComponent {
  @Input() images:   string[]  = [];
  @Input() location?: string;
  @Input() title?:    string;
  @Input() breeder?:  string;
  @Input() specs:    LotSpec[] = [];
  @Input() abvs:     LotAbv[]  = [];
  @Input() tags:     string[]  = [];
  @Input() agencyLogo?: string;
  @Input() agencyName?: string;
  @Input() imgObjectPosition = 'center calc(100% + 200px)';
  @Input() favourite = false;
  @Output() favouriteChange = new EventEmitter<boolean>();

  imgIndex  = signal(0);
  imgLoaded = signal(false);
  fav       = signal(false);

  ngOnInit(): void { this.fav.set(this.favourite); }

  get src(): string | undefined { return this.images[this.imgIndex()]; }

  get specRows(): LotSpec[][] {
    const rows: LotSpec[][] = [];
    for (let i = 0; i < this.specs.length; i += 2) rows.push(this.specs.slice(i, i + 2));
    return rows;
  }

  get abvRows(): LotAbv[][] {
    const rows: LotAbv[][] = [];
    for (let i = 0; i < this.abvs.length; i += 2) rows.push(this.abvs.slice(i, i + 2));
    return rows;
  }

  setImage(i: number): void {
    this.imgIndex.set(i);
    this.imgLoaded.set(false);
  }

  get favIconColor(): string {
    return this.fav() ? 'var(--color-accent-yellow)' : 'var(--color-text-white)';
  }

  get favFill(): string {
    return this.fav() ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                      : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24";
  }

  toggleFav(): void {
    const next = !this.fav();
    this.fav.set(next);
    this.favouriteChange.emit(next);
  }
}
