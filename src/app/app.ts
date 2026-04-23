import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ApDsHomeComponent }            from './components/ap-ds-home/ap-ds-home.component';
import { ApFoundationsSectionComponent } from './components/ap-foundations-section/ap-foundations-section.component';
import { ApComponentsSectionComponent } from './components/ap-components-section/ap-components-section.component';
import { ApPatternsSectionComponent }   from './components/ap-patterns-section/ap-patterns-section.component';
import { ApExperiencesSectionComponent } from './components/ap-experiences-section/ap-experiences-section.component';
import { ApToastHostComponent }          from './components/ap-toast-host/ap-toast-host.component';

interface Section {
  id:      string;
  label:   string;
  matIcon: string;
  desc:    string;
}

const SECTIONS: Section[] = [
  { id: 'home',        label: 'Home',        matIcon: 'home',       desc: '' },
  { id: 'foundations', label: 'Foundations', matIcon: 'layers',     desc: 'Our core visual language. Built for ag' },
  { id: 'components',  label: 'Components',  matIcon: 'widgets',    desc: 'Reusable UI building blocks for ag workflows' },
  { id: 'patterns',    label: 'Patterns',    matIcon: 'view_quilt', desc: 'Proven layouts and interaction patterns' },
  { id: 'experiences', label: 'Experiences', matIcon: 'devices',    desc: 'End-to-end flows' },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ApDsHomeComponent,
    ApFoundationsSectionComponent,
    ApComponentsSectionComponent,
    ApPatternsSectionComponent,
    ApExperiencesSectionComponent,
    ApToastHostComponent,
  ],
  templateUrl: './app.html',
  styleUrl:    './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  sections      = SECTIONS;
  activeSection = signal('home');

  get activeMeta(): Section | undefined {
    return SECTIONS.find(s => s.id === this.activeSection());
  }
}
