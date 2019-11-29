import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { mergeMap, map, delay } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html'
})
export class MergeMapComponent implements OnInit {

  constructor() {
    this.mergeMapExample1();
    this.mergeMapExample2();
  }

  ngOnInit() {
  }

  mergeMapExample1(){
    console.log('Merge Map Operator')
    console.log('Example 1: ')
    const letters = of('a', 'b', 'c');
    const numbers = of('1', '2', '3');

    const results = letters.pipe(
      mergeMap( x => numbers.pipe(map( i => x + i )))
    );

    results.subscribe(res => console.log(res))
  }

  mergeMapExample2(){
    console.log('')
    console.log('Example 2: ')
    const getData = (param) => {
      return of(`retrieved new data with param ${param}`).pipe(
        delay(1000)
      )
    }

    from([1, 2, 3, 4]).pipe(
      mergeMap(param => getData(param))
    ).subscribe(val => console.log(val));

  }

}
