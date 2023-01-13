import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lab-activity-participant-cancellation-form',
  standalone: true,
  imports: [CommonModule],
  template: `
    <details>
      <summary role="button" class="secondary">
        You are a current participant on this activity
      </summary>
      <p>
        <button (click)="cancelParticipant.emit()">Cancel participation</button>
      </p>
    </details>
  `,
  styles: [],
})
export class ActivityParticipantCancellationForm {
  @Output() cancelParticipant = new EventEmitter();
}
