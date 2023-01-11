import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterBlock } from '@ui/layout/footer.block';
import { HeaderBlock } from '@ui/layout/header.block';
import { NotificationDialog } from '@ui/layout/notification.dialog';

@Component({
  selector: 'lab-root',
  standalone: true,
  imports: [RouterOutlet, HeaderBlock, FooterBlock, NotificationDialog],
  template: `
    <lab-header-block> </lab-header-block>
    <router-outlet></router-outlet>
    <lab-footer-block></lab-footer-block>
    <lab-notification-dialog></lab-notification-dialog>
  `,
})
export class AppComponent {}
