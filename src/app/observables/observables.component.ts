import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent implements OnInit {
  ngOnInit(): void {
    this.observable1();
  }

  private observable1(): void {
    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    console.log('just before subscribe');
    observable.subscribe({
      next(x) {
        console.log('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
    console.log('just after subscribe');
  }

  private observable2(): void {
    const observer = {
      next: (value: any) => console.log('next', value),
      error: (error: any) => console.log('error', error),
      complete: () => console.log('complete'),
    }

    const observable = new Observable(subscriber => {
      subscriber.next('hello');
      subscriber.next('world');
      subscriber.complete();
      subscriber.next('ignore');
    });

    observable.subscribe(observer);
  }


  private observable3(): void {
    const observer = {
      next: (value: any) => console.log('next', value),
      error: (error: any) => console.log('error', error),
      complete: () => console.log('complete'),
    }

    const observable = new Observable(subscriber => {
      let count = 1;

      const id = setInterval(() => {
        subscriber.next(count);
        subscriber.complete();
        count+=1;
      }, 1000);

      return () => {
        console.log('called');
        clearInterval(id);
      }
    });

    observable.subscribe(observer);
  }

  private unSubscribe(): void {

    const observable = new Observable((subscriber) => {
      let count = 1;
      setInterval(() => {
        subscriber.next(count);
        count+=1;
      }, 1000);
    });

    const subscribtion = observable.subscribe(res => console.log(res));


    setInterval(() => {
      subscribtion.unsubscribe();
    }, 5000)
  }


}
