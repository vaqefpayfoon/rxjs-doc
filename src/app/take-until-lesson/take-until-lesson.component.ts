import { Component, OnInit } from '@angular/core';
import { interval, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-take-until-lesson',
  templateUrl: './take-until-lesson.component.html',
  styleUrls: ['./take-until-lesson.component.scss'],
})
export class TakeUntilLessonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //emit value every 1s
    const source = interval(1000);
    //after 5 seconds, emit value
    const timer$ = timer(5000);
    //when timer emits after 5s, complete source
    const example = source.pipe(takeUntil(timer$));
    //output: 0,1,2,3
    const subscribe = example.subscribe((val) => console.log(val));
  }
}
