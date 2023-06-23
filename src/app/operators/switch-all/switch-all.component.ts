import { Component } from '@angular/core';
import { fromEvent, interval, map, switchAll, tap } from 'rxjs';

@Component({
  selector: 'app-switch-all',
  templateUrl: './switch-all.component.html',
  styleUrls: ['./switch-all.component.scss'],
})
export class SwitchAllComponent {
  constructor() {}

  switchAllRxjs(): void {
    const clicks = fromEvent(document, 'click').pipe(
      tap(() => console.log('click'))
    );
    const source = clicks.pipe(map(() => interval(1000)));

    source.pipe(switchAll()).subscribe((x) => console.log(x));

    // click
    // 0
    // 1
    // 2
    // 3
    // ...
    // click
    // 0
    // 1
    // 2
  }
}
