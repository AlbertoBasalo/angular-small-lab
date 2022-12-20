import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>🕵🏼 Top secret</h3>
    <em>Admins only</em>
  `,
  styles: [],
})
export default class AdminPage {}
