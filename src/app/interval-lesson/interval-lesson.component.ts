import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval-lesson',
  templateUrl: './interval-lesson.component.html',
  styleUrls: ['./interval-lesson.component.scss']
})
export class IntervalLessonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const observer = {
      next: (next: any) => console.log('next', next),
      error: (error: any) => console.log('error', error),
      complete: () => console.log('complete'),
    };

    const source = interval(1000);

    const subscribtion = source.subscribe(observer);

    setInterval(() => {
      console.log('unsubscribe');
      subscribtion.unsubscribe();
    }, 3500)
  }

}
