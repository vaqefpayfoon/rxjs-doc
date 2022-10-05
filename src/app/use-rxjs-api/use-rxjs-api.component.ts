import { Component, OnInit } from '@angular/core';
import { from, map, pluck } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-use-rxjs-api',
  templateUrl: './use-rxjs-api.component.html',
  styleUrls: ['./use-rxjs-api.component.scss']
})
export class UseRxjsApiComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.filterMethod();
  }
  mapMethod(): void {
    const data = this.dataService.getData().pipe(map((x) => {
      return x.map((res) => res.title)
    }));
    data.subscribe(x => console.log(x));
  }
  filterMethod(): void {
    const data = this.dataService.getData().pipe()
    data.subscribe(x => console.log(x));
  }
}
