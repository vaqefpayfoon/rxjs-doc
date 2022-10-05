import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-second-lesson',
  templateUrl: './second-lesson.component.html',
  styleUrls: ['./second-lesson.component.scss'],
})
export class SecondLessonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const observer: Partial<Observer<unknown>> | undefined = {
      next: (next: any) => console.log('next', next),
      error: (error: any) => console.log('error', error),
      complete: () => console.log('complete'),
    };
    const observable = new Observable((subscriber) => {
      let count = 0;
      const id = setInterval(() => {
        subscriber.next(count);
        subscriber.complete();
        count += 1;
      }, 1000);

      return () => {
        console.log('called');
        clearInterval(id);
      }
    });

    observable.subscribe(observer);
  }
}
