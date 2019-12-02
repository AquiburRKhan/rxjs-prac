import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html'
})
export class TapComponent implements OnInit {

  constructor() {
    this.tapExample1();
  }

  ngOnInit() {
  }

  tapExample1() {
    const source = of(1, 2, 3, 4, 5);
    // transparently log values from source with 'tap'
    const example = source.pipe(
      tap(val => console.log(`BEFORE MAP: ${val}`)),
      map(val => val + 10),
      tap(val => console.log(`AFTER MAP: ${val}`))
    );

    //'tap' does not transform values
    example.subscribe(val => console.log(val))
  }

}
