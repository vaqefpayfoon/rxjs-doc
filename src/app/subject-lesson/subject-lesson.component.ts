import { Component, OnInit } from '@angular/core';
import { from, Subject } from 'rxjs';
interface IValue {
  a: string,
  b: string
}
@Component({
  selector: 'app-subject-lesson',
  templateUrl: './subject-lesson.component.html',
  styleUrls: ['./subject-lesson.component.scss'],
})
export class SubjectLessonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const subject = new Subject<number>();

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    const observable = from([1, 2, 3]);

    observable.subscribe(subject); // You can subscribe providing a Subject

    // const formValue = {
    //   a: 'value1',
    //   b: 'value 2',
    //   deleted: 'mine'
    // };
    // const result = [formValue.a, formValue.b]
    // const result2: IValue  = {a: formValue.a, b: formValue.b};
    // console.log(result)
    // console.log(result2)
  }
}
