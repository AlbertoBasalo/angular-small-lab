import { NgIf, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Notification } from '@domain/notification.interface';
import { UserResponse } from '@domain/user-response.type';
import { InstrumentationService } from '@service/instrumentation.service';

@Component({
  selector: 'lab-notification-dialog',
  standalone: true,
  imports: [NgIf, TitleCasePipe],
  template: `
    <dialog *ngIf="notification" [open]="isOpen" id="notification">
      <article>
        <header>
          <span>
            <span>{{ icons[notification.category] }}</span>
            <span>{{ notification.title | titlecase }}</span>
          </span>
          <span aria-label="Close" role="button" (click)="close()">❎</span>
        </header>
        <p>
          {{ notification.message }}
        </p>
        <footer>
          <span
            *ngIf="showCancel"
            role="button"
            class="secondary"
            (click)="close('cancel')"
            >No, forget it</span
          >
          <span *ngIf="showConfirm" role="button" (click)="close('confirm')"
            >Yes, do it!</span
          >
        </footer>
      </article>
    </dialog>
  `,
  styles: [],
})
export class NotificationDialog {
  instrumentationService = inject(InstrumentationService);
  isOpen = false;
  notification: Notification | null = null;
  showCancel = true;
  showConfirm = true;

  icons = {
    error: '💣',
    info: 'ℹ️',
    warning: '☣️',
    question: '❓',
    debug: '🐞',
  };

  constructor() {
    this.instrumentationService.notifications$.subscribe((notification) => {
      if (notification.category === 'debug') return;
      this.notification = notification;
      this.isOpen = true;
      this.showCancel = notification.category === 'question';
      this.showConfirm = notification.category === 'question';
    });
  }

  close(userResponse?: UserResponse) {
    this.isOpen = false;
    if (userResponse) this.notification?.response$?.next(userResponse);
  }
}
