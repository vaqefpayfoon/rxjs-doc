import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.replySubjectMethod();
    // this.behaviorSubjectMethod();
    this.asyncSubjectMethod();
  }
  replySubjectMethod(): void {
    const sub = new ReplaySubject(3);

    sub.next(1);
    sub.next(2);
    // sub.subscribe(console.log); // OUTPUT => 1,2
    sub.next(3); // OUTPUT => 3
    sub.next(4); // OUTPUT => 4
    // sub.subscribe(console.log); // OUTPUT => 2,3,4 (log of last 3 values from new subscriber)
    sub.next(5); // OUTPUT => 5,5 (log from both subscribers)
    sub.next(6);
    sub.next(7);
    sub.next(8);
    sub.next(9);
    sub.subscribe(console.log);
  }
  behaviorSubjectMethod(): void {
    const subject = new BehaviorSubject(123);

    // two new subscribers will get initial value => output: 123, 123
    // subject.subscribe(console.log);
    // subject.subscribe(console.log);
    subject.next(111);
    subject.next(222);
    subject.next(333);
    // two subscribers will get new value => output: 456, 456
    subject.next(456);

    // new subscriber will get latest value (456) => output: 456
    subject.subscribe(console.log);

    // all three subscribers will get new value => output: 789, 789, 789
    subject.next(789);
    subject.next(888);
    subject.next(999);

    // output: 123, 123, 456, 456, 456, 789, 789, 789
  }
  asyncSubjectMethod(): void {
    const sub = new AsyncSubject();

    sub.subscribe(console.log);

    sub.next(123); //nothing logged
    sub.next(222);
    sub.subscribe(console.log);
    sub.next(333);
    sub.subscribe(console.log);
    sub.next(444);

    sub.subscribe(console.log);

    sub.next(456); //nothing logged
    sub.complete(); //456, 456 logged by both subscribers
  }
}
