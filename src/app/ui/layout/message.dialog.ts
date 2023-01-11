import { NgIf, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Message, UserResponse } from '@domain/message.interface';
import { InstrumentationService } from '@service/instrumentation.service';

@Component({
  selector: 'lab-message-dialog',
  standalone: true,
  imports: [NgIf, TitleCasePipe],
  template: `
    <dialog *ngIf="message" [open]="isOpen">
      <article>
        <header>
          <span>
            <span>{{ icons[message.category] }}</span>
            <span>{{ message.title || message.category | titlecase }}</span>
          </span>
          <span aria-label="Close" role="button" (click)="close()">❎</span>
        </header>
        <p>
          {{ message.body }}
        </p>
        <footer>
          <span
            *ngIf="showCancel"
            role="button"
            class="secondary"
            (click)="close('cancel')"
            >Cancel</span
          >
          <span *ngIf="showConfirm" role="button" (click)="close('confirm')"
            >Confirm</span
          >
        </footer>
      </article>
    </dialog>
  `,
  styles: [],
})
export class MessageDialog {
  instrumentationService = inject(InstrumentationService);
  isOpen = false;
  message: Message | null = null;
  showCancel = true;
  showConfirm = true;

  icons = {
    error: '💣',
    info: 'ℹ️',
    warning: '☣️',
    question: '❓',
  };

  constructor() {
    this.instrumentationService.notifications$.subscribe((message) => {
      this.message = message;
      this.isOpen = true;
      this.showCancel = message.category === 'question';
      this.showConfirm = message.category === 'question';
    });
  }

  close(userResponse?: UserResponse) {
    this.isOpen = false;
    this.message = null;
    if (userResponse)
      this.instrumentationService.notifyUserResponse(userResponse);
  }
}
