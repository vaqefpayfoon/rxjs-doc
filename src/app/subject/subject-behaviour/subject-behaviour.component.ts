import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-behaviour',
  templateUrl: './subject-behaviour.component.html',
  styleUrls: ['./subject-behaviour.component.scss'],
})
export class SubjectBehaviourComponent {
  constructor() {
    this.subjectRxjs();
  }

  behaviourSubjectRxjs(): void {
    const subject = new BehaviorSubject(0); // 0 is the initial value

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    subject.next(1);
    subject.next(2);

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next(3);

    // Logs
    // observerA: 0
    // observerA: 1
    // observerA: 2
    // observerB: 2
    // observerA: 3
    // observerB: 3
  }

  subjectRxjs(): void {
    const subject = new Subject<number>();

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    subject.next(1);
    subject.next(2);

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next(3);

    // observerA: 1
    // observerB: 2
    // observerA: 3
    // observerB: 3
  }
}
