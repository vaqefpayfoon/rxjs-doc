import { Component, OnInit } from '@angular/core';
import { filter, of } from 'rxjs';

@Component({
  selector: 'app-filter-lesson',
  templateUrl: './filter-lesson.component.html',
  styleUrls: ['./filter-lesson.component.scss']
})
export class FilterLessonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1,2,3,4,5).pipe(filter(value => value > 2)).subscribe(console.log);
  }

}
