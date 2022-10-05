import { Component, OnInit } from '@angular/core';
import { map, of, tap } from 'rxjs';

@Component({
  selector: 'app-tap-lesson',
  templateUrl: './tap-lesson.component.html',
  styleUrls: ['./tap-lesson.component.scss']
})
export class TapLessonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //tap completely ignore return values
    const numbers$ = of(1,2,3,4,5);
    numbers$.pipe(
      tap(value => console.log('before', value)),
      map(value => value * 10),
      tap(value => console.log('after', value)),
    ).subscribe(console.log)
  }

}
