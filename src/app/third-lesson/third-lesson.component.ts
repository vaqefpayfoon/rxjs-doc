import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-third-lesson',
  templateUrl: './third-lesson.component.html',
  styleUrls: ['./third-lesson.component.scss']
})
export class ThirdLessonComponent implements OnInit {

  constructor() { }

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
        count += 1;
      }, 1000);

      return () => {
        console.log('called');
        clearInterval(id);
      }
    });

    const subscribtion = observable.subscribe(observer);
    setInterval(() => {
      subscribtion.unsubscribe();
    }, 3500)
    
  }

}
