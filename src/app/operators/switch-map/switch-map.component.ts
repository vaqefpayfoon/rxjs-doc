import { Component } from '@angular/core';
import { fromEvent, interval, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent {
  constructor() {
    const x = 2;
    console.log(x ** 3);
    // of(x, x ** 2, x ** 3).subscribe(console.log)
  }

  switchMapRxjs(): void {
    const switched = of(1, 2, 3).pipe(switchMap((x) => of(x, x ** 2, x ** 3)));
    switched.subscribe((x) => console.log(x));
  }

  switchMapArrow(): void {
    fromEvent(document, 'click')
      .pipe(
        // restart counter on every click
        switchMap(() => interval(1000))
      )
      .subscribe(console.log);
  }
}
