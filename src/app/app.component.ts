import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterBlock } from '@ui/layout/footer.block';
import { HeaderBlock } from '@ui/layout/header.block';

@Component({
  selector: 'lab-root',
  standalone: true,
  imports: [RouterOutlet, HeaderBlock, FooterBlock],
  template: `
    <lab-header-block> </lab-header-block>
    <router-outlet></router-outlet>
    <lab-footer-block></lab-footer-block>
  `,
})
export class AppComponent {}
