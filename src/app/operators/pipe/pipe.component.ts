import { Component } from '@angular/core';
import { from, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {
  constructor() {
  }

  pipables(): void {

    const observer = {
      next: (val: any) => console.log(val),
      error: (error: any) => console.log(error),
      complete: () => console.log('complete')
    }
    const source$ = fromEvent(document, 'click');

    source$.subscribe(observer);
  }

  mapOperator(): void {
    const obs = from([1,2,3,4,5]);
    obs.pipe(map(x => x * 2)).subscribe(res => console.log(res))
  }


}
