import { Component } from '@angular/core';
import { interval, of, takeUntil, takeWhile, timer } from 'rxjs';

@Component({
  selector: 'app-take-until-while',
  templateUrl: './take-until-while.component.html',
  styleUrls: ['./take-until-while.component.scss'],
})
export class TakeUntilWhileComponent {
  constructor() {
    this.takeUntil();
  }

  takeUntil(): void {
    const source = interval(1000);
    const timer$ = timer(5000);
    const example = source.pipe(takeUntil(timer$));
    const subscribe = example.subscribe((val) => console.log(val));
  }

  takeWhile(): void {
    const source$ = of(1, 2, 3, 4, 5);
    source$
      .pipe(takeWhile((val) => val <= 4))
      .subscribe((val) => console.log(val));
  }
}
