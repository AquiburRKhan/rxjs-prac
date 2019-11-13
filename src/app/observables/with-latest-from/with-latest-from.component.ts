import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

// 1. Define shirt color and logo options
type Color = 'white' | 'green' | 'red' | 'blue';
type Logo = 'fish' | 'dog' | 'bird' | 'cow';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html'
})
export class WithLatestFromComponent implements OnInit {

  color$;
  logo$;

  constructor() {

    // 2. Create the two persons - color and logo observables,
    // They will communicate with us later (when we subscribe)
    this.color$ = new Subject<Color>();
    this.logo$ = new Subject<Logo>();
  }

  ngOnInit() {
    this.color$.pipe(withLatestFrom(this.logo$))
      .subscribe(([color, logo]) => console.log(`${color} shirt with ${logo}`));
    // this.withLatestFromExample1();
    // this.withLatestFromExample2();
    this.withLatestFromExample3();
  }

  withLatestFromExample1(){
    console.log('Example 1')

    this.color$.next('white');
    this.logo$.next('fish');

    this.color$.next('green');
    this.logo$.next('dog');

    this.color$.next('red');
    this.logo$.next('bird');

    this.color$.next('blue');

  }

  withLatestFromExample2() {
    console.log('')
    console.log('Example 2')

    this.logo$.next('fish');
    this.color$.next('white');

    this.color$.next('green');
    this.logo$.next('dog');

    this.color$.next('red');
    this.logo$.next('bird');

    this.color$.next('blue');

  }

  withLatestFromExample3() {
    console.log('')
    console.log('Example 3')

    this.color$.next('white');
    this.color$.next('green');

    this.logo$.next('dog');

    this.color$.next('red');
    this.logo$.next('bird');

    this.color$.next('blue');

  }


}
