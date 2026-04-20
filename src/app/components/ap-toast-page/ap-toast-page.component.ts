import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ApDocPageComponent }    from '../ap-doc-page/ap-doc-page.component';
import { ApDocSectionComponent } from '../ap-doc-section/ap-doc-section.component';
import { ApDemoComponent }       from '../ap-demo/ap-demo.component';
import { ApDemoGroupComponent }  from '../ap-demo-group/ap-demo-group.component';
import { ApCodeBlockComponent }  from '../ap-code-block/ap-code-block.component';
import { ApButtonComponent }     from '../ap-button/ap-button.component';
import { ToastService }          from '../../services/toast.service';

@Component({
  selector: 'ap-toast-page',
  standalone: true,
  imports: [
    ApDocPageComponent, ApDocSectionComponent, ApDemoComponent, ApDemoGroupComponent,
    ApCodeBlockComponent, ApButtonComponent,
  ],
  templateUrl: './ap-toast-page.component.html',
  styleUrl:    './ap-toast-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApToastPageComponent {
  private toast = inject(ToastService);

  showSuccess(): void {
    this.toast.show({ variant: 'success', title: 'Saved', message: 'Your changes have been saved.' });
  }

  showError(): void {
    this.toast.show({ variant: 'error', title: 'Error', message: 'Something went wrong. Please try again.' });
  }

  showWarning(): void {
    this.toast.show({ variant: 'warning', title: 'Heads up', message: 'This auction closes in 15 minutes.' });
  }

  showInfo(): void {
    this.toast.show({ variant: 'info', message: 'Lot 42 has been updated.' });
  }

  showWithAction(): void {
    this.toast.show({
      variant: 'success',
      title: 'Lot published',
      message: 'Lot 42 is now live.',
      duration: 8000,
      action: { label: 'View lot', onClick: () => {} },
    });
  }

  showPersistent(): void {
    this.toast.show({ variant: 'info', title: 'Persistent', message: 'This toast stays until dismissed.', duration: 0 });
  }

  readonly code =
`// Inject the service
constructor(private toast: ToastService) {}

// Show a success toast
this.toast.show({ variant: 'success', title: 'Saved', message: 'Your changes have been saved.' });

// With action button
this.toast.show({
  variant: 'success',
  title: 'Lot published',
  message: 'Lot 42 is now live.',
  action: { label: 'View lot', onClick: () => this.router.navigate(['/lot/42']) },
});

// Persistent (duration: 0 = no auto-dismiss)
this.toast.show({ variant: 'info', title: 'Notice', message: '…', duration: 0 });`;
}
