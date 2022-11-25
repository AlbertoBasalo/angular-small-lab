import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lab-link',
  standalone: true,
  imports: [CommonModule],
  template: ` <a [href]="href" [target]="target">{{ caption }}</a> `,
  styles: [],
})
export class LinkComponent {
  @Input() caption = '';
  @Input() href = '';
  @Input() target = '_blank';
}
