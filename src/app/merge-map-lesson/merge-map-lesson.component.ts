import { Component, OnInit } from '@angular/core';
import { fromEvent, mergeMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-merge-map-lesson',
  templateUrl: './merge-map-lesson.component.html',
  styleUrls: ['./merge-map-lesson.component.scss'],
})
export class MergeMapLessonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

    // streams
    const click$ = fromEvent(document, 'click');

    click$
      .pipe(
        /*
         * Using mergeMap for example, but generally for GET requests
         * you will prefer switchMap.
         * Also, if you do not need the parameter like
         * below you could use mergeMapTo instead.
         * ex. mergeMapTo(ajax.getJSON(API_URL))
         */
        mergeMap(() => ajax.getJSON(API_URL))
      )
      // { userId: 1, id: 1, ...}
      .subscribe(console.log);

      
  }
}
