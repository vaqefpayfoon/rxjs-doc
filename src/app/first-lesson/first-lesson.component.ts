import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, Observer, of } from 'rxjs';

@Component({
  selector: 'app-first-lesson',
  templateUrl: './first-lesson.component.html',
  styleUrls: ['./first-lesson.component.scss'],
})
export class FirstLessonComponent implements OnInit {
  constructor() {}
  tenthFirst$: Observable<number> = of(0);
  tenthSecond$: Observable<number> = interval(100);
  ngOnInit(): void {
    // this.tenthSecond$ = new Observable((observer) => {
    //   let counter = 0;
    //   observer.next(counter);
    //   let interv = setInterval(() => {
    //     counter++;
    //     observer.next(counter);
    //   }, 100);
    //   return function unsubscribe() {
    //     clearInterval(interv);
    //   };
    // });

    this.tenthSecond$ = interval(100);
    this.tenthFirst$ = this.tenthSecond$.pipe(map((num: number) => num / 10));

    //Partial<Observer<unknown>> | undefined
    const observer: Partial<Observer<unknown>> | undefined = {
      next: (next: any) => console.log('next', next),
      error: (error: any) => console.log('error', error),
      complete: () => console.log('complete')
    }
    const observable = new Observable(subscriber =>  {
      subscriber.next('hello');
      subscriber.next('world');
      subscriber.complete();
      subscriber.next('hello');
      subscriber.next('world');
    });

    observable.subscribe(observer)

  }
}
