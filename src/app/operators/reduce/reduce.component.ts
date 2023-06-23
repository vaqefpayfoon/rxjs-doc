import { Component } from '@angular/core';
import { from, reduce, scan } from 'rxjs';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.scss'],
})
export class ReduceComponent {
  constructor() {
   this.reduce2Rxjs()
  }

  reduceFunction(): void {
    const numbers = [1, 2, 3, 4, 5];
    const totalReducer = (accumulator: number, currentValue: number) => {
      return accumulator + currentValue;
    };

    const total = numbers.reduce(totalReducer);
    console.log(total);
  }

  reduceRxjs(): void {
    const totalReducer = (accumulator: number, currentValue: number) => {
      return accumulator + currentValue;
    };

    const numbers = from([1, 2, 3, 4, 5]);
    numbers.pipe(reduce(totalReducer, 0)).subscribe(console.log);
  }

  scanRxjs(): void {
    const numbers = from([1, 2, 3]);
    numbers
      .pipe(scan((total: number, n: number) => total + n))
      .subscribe(console.log);
  }

  reduce2Rxjs(): void {
    const numbers = from([1, 2, 3]);
    numbers
      .pipe(reduce((total: number, n: number) => total + n))
      .subscribe(console.log);
  }
}
