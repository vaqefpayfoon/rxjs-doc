import { Component, OnInit } from '@angular/core';
import { of, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-while-lesson',
  templateUrl: './take-while-lesson.component.html',
  styleUrls: ['./take-while-lesson.component.scss'],
})
export class TakeWhileLessonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5);

    //allow values until value from source is greater than 4, then complete
    source$
      .pipe(takeWhile((val) => val <= 4))
      // log: 1,2,3,4
      .subscribe((val) => console.log(val));
  }
}
