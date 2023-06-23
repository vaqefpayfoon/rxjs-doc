import { Component } from '@angular/core';
import { fromEvent, interval, map, mergeAll, of, take } from 'rxjs';

@Component({
  selector: 'app-merge-all',
  templateUrl: './merge-all.component.html',
  styleUrls: ['./merge-all.component.scss'],
})
export class MergeAllComponent {
  constructor() {
    this.mergeAllSample();
  }
  mergeAllSample(): void {
    const clicks = fromEvent(document, 'click');
    const higherOrder = clicks.pipe(map(() => interval(1000).pipe(take(10))));
    const firstOrder = higherOrder.pipe(mergeAll());

    firstOrder.subscribe((x) => console.log(x));
  }
}
