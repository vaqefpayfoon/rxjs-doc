import { Component } from '@angular/core';
import { interval, map, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss'],
})
export class MergeMapComponent {
  constructor() {
    this.mergeMapRxjs()
  }

  mergeMapRxjs(): void {
    const letters = of('a', 'b', 'c');
    const result = letters.pipe(
      mergeMap((x) => interval(1000).pipe(map((i) => x + i)))
    );

    result.subscribe(console.log)
  }
}
