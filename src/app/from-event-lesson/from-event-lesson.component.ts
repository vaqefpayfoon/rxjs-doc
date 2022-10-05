import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event-lesson',
  templateUrl: './from-event-lesson.component.html',
  styleUrls: ['./from-event-lesson.component.scss']
})
export class FromEventLessonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const observer = {
      next: (next: any) => console.log('next', next),
      error: (error: any) => console.log('error', error),
      complete: () => console.log('complete'),
    };

    // const source = fromEvent(document, 'click');
    // const source = fromEvent(document, 'scroll');
    const source = fromEvent(document, 'keyup');

    const subscribtion = source.subscribe(observer);

    setInterval(() => {
      console.log('unsubscribe');
      subscribtion.unsubscribe();
    }, 3500)
    
  }

}
