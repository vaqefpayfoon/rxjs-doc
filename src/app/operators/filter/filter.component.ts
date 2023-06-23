import { Component, OnInit } from '@angular/core';
import { Observable, of, filter, map, concatAll, mergeAll, interval, switchAll } from 'rxjs';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log('here')
  }

  private filterSample(): void {
    const iterate: Observable<number> = of(1,2,3,4,5);
    iterate.pipe(map(x => x*3), filter(x => x>2)).subscribe(x => console.log(x));



    const source$ = of(
      of(1, 2, 3), // Inner observable 1
      of(4, 5, 6), // Inner observable 2
      of(7, 8, 9)  // Inner observable 3
    );
    
    source$.pipe(concatAll()).subscribe(value => {
      console.log(value);
    });
  }
}
