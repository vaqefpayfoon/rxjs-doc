import { Component } from '@angular/core';
import { from, of, range } from 'rxjs';

@Component({
  selector: 'app-from-of',
  templateUrl: './from-of.component.html',
  styleUrls: ['./from-of.component.scss']
})
export class FromOfComponent {
  constructor() {
    this.callGeneratorFunction();
  }

  ofAndFrom(): void {
    const ofCollection = of([1,2,3,4]);
    ofCollection.subscribe(res => console.log('of', res))
    const fromCollection = from([1,2,3,4]);
    fromCollection.subscribe(res => console.log('from', res))
  }

  ofAndFrom2(): void {
    const ofCollection = of(1,2,3,4);
    ofCollection.subscribe(res => console.log('of', res))
    // const fromCollection = from(1,2,3,4); syntax error
    // fromCollection.subscribe(res => console.log('from', res))
  }

  rangeValue(): void {
    const array = range(1, 5);
    array.subscribe(res => console.log(res))
  }

  callApi(): void {
    const api = from(fetch('https://api.github.com/users/octocat'))
    api.subscribe(res => console.log(res.body));
  }

  callGeneratorFunction(): void {
    const iterator = hello();
    console.log(iterator.next().value);
    console.log(iterator.next().value);

    const observable = from(hello());
    observable.subscribe(res => console.log(res));
  }

}


// Generator function
function* hello() {
  yield 'hello';
  yield 'world';
}