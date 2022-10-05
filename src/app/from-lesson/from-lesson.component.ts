import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

function* Hello() {
  yield 'hello';
  yield 'world';
}

@Component({
  selector: 'app-from-lesson',
  templateUrl: './from-lesson.component.html',
  styleUrls: ['./from-lesson.component.scss']
})
export class FromLessonComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    const iteration = Hello();
    console.log(iteration.next().value);
    console.log(iteration.next().value);
    
    const observer = {
      next: (next: any) => console.log('next', next),
      error: (error: any) => console.log('error', error),
      complete: () => console.log('complete'),
    };

    // const source = from([1,2,3,4,5]);
    const source = from(fetch('https://api.github.com/users/vaqefpayfoon'));

    const subscribtion = source.subscribe(observer);

    setInterval(() => {
      console.log('unsubscribe');
      subscribtion.unsubscribe();
    }, 3500)
  }

}
