import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html'
})
export class ConcatMapComponent implements OnInit {

  constructor() {
    this.concatMapExample1()
  }

  ngOnInit() {
  }

  concatMapExample1(){
    const source = of(2000, 1000);
    // map value from source into inner observable, when complete emit result and move to next
    const example = source.pipe(
      concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    );
    //output: With concatMap: Delayed by: 2000ms, With concatMap: Delayed by: 1000ms
    example.subscribe(val =>
      console.log(`With concatMap: ${val}`)
    );
  }

}
