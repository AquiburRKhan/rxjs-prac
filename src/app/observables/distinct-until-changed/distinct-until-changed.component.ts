import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html'
})
export class DistinctUntilChangedComponent implements OnInit {

  constructor() {
    this.distinctUntilChangedExample1();
    this.distinctUntilChangedExample2();
    this.distinctUntilChangedExample3();
   }

  ngOnInit() {
  }

  distinctUntilChangedExample1(){
    console.log('Distinct Until Changed observables: ');
    console.log('Example 1: ');

    of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4).
    pipe(
      distinctUntilChanged(),
    )
      .subscribe(x => console.log(x));
  }

  distinctUntilChangedExample2() {
    console.log('');
    console.log('Example 2: ');
    const sampleObject = { name: 'Test' };

    //Objects must be same reference
    const source$ = from([sampleObject, sampleObject, sampleObject]);

    source$
      .pipe(distinctUntilChanged())
      .subscribe(x => console.log(x));

  }

  distinctUntilChangedExample3() {
    console.log('');
    console.log('Example 3: ');
    const source$ = from([
      { name: 'Brian' },
      { name: 'Joe' },
      { name: 'Joe' },
      { name: 'Sue' }
    ]);

    source$
      .pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name))
      .subscribe(x => console.log(x));

  }

}
