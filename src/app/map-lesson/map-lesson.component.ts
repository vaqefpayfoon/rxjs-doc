import { Component, OnInit } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-map-lesson',
  templateUrl: './map-lesson.component.html',
  styleUrls: ['./map-lesson.component.scss']
})
export class MapLessonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1,2,3,4,5).pipe(
      map(value => value * 10)
    ).subscribe(console.log)
  }

}
