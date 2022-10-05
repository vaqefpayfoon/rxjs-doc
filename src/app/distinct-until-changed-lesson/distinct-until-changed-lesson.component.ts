import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, from, map, scan } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed-lesson',
  templateUrl: './distinct-until-changed-lesson.component.html',
  styleUrls: ['./distinct-until-changed-lesson.component.scss']
})
export class DistinctUntilChangedLessonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const users = [
      {name: 'vaqef', loggedIn: false, token: null},
      {name: 'vaqef', loggedIn: true, token: 'abc'},
      {name: 'meraj', loggedIn: true, token: '123'}
    ];
    from(users).pipe(
      scan((calculate: any, currentValue: any) => {
        return {...calculate, ...currentValue}
      }, {}),
      map(value => value.name),
      distinctUntilChanged()
    ).subscribe(console.log)
  }

}
