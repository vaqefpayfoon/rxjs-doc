import { Component, OnInit } from '@angular/core';
import { filter, interval, mapTo, scan } from 'rxjs';

@Component({
  selector: 'app-map-to-lesson',
  templateUrl: './map-to-lesson.component.html',
  styleUrls: ['./map-to-lesson.component.scss']
})
export class MapToLessonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const counter$ = interval(1000);
    counter$.pipe(
      mapTo(-1),
      scan((calcute: number, current: number) => {
        return calcute + current;
      }, 10),
      filter(value => value >= 0)
    ).subscribe(console.log)
  }

}
