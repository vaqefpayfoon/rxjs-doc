import { Component } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-subject-async',
  templateUrl: './subject-async.component.html',
  styleUrls: ['./subject-async.component.scss'],
})
export class SubjectAsyncComponent {
  constructor() {
    this.asyncSubjectRxjs();
  }

  asyncSubjectRxjs(): void {
    const subject = new AsyncSubject();

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next(5);
    subject.complete();

    // Logs:
    // observerA: 5
    // observerB: 5
  }
}
