import { Component, OnInit } from '@angular/core';
import { from, map, reduce, scan, take } from 'rxjs';

@Component({
  selector: 'app-take-reducer-lesson',
  templateUrl: './take-reducer-lesson.component.html',
  styleUrls: ['./take-reducer-lesson.component.scss']
})
export class TakeReducerLessonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const numbers = [1, 2, 3, 4, 5];
    const totalReducer = (calculate: number, current: number) => {
      return calculate + current;
    }
    const total = numbers.reduce(totalReducer, 0);
    // console.log(total)

    from(numbers).pipe(
      take(3),
      reduce(totalReducer, 0)
    ).subscribe(console.log); // => 3

    from(numbers).pipe(
      scan(totalReducer, 0)
    ).subscribe(console.log)

    const users = [
      {name: 'vaqef', loggedIn: false, token: null},
      {name: 'meraj', loggedIn: true, token: 'abc'},
      {name: 'milad', loggedIn: true, token: '123'}
    ];
    from(users).pipe(
      scan((calculate: any, currentValue: any) => {
        return {...calculate, ...currentValue}
      }, {}),
      map(value => value.name)
    ).subscribe(console.log)

  }

}
