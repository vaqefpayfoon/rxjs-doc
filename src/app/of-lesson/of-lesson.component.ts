import { Component, OnInit } from '@angular/core';
import { of, range } from 'rxjs';


@Component({
  selector: 'app-of-lesson',
  templateUrl: './of-lesson.component.html',
  styleUrls: ['./of-lesson.component.scss']
})
export class OfLessonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const observer = {
      next: (next: any) => console.log('next', next),
      error: (error: any) => console.log('error', error),
      complete: () => console.log('complete'),
    };

    // const source = of(1, 2, 3, 4, 5);
    const source = range(1, 5); // same as of

    const subscribtion = source.subscribe(observer);

    setInterval(() => {
      console.log('unsubscribe');
      subscribtion.unsubscribe();
    }, 3500)
  }

}
