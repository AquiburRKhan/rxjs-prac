import { Component, OnInit } from '@angular/core';
import { concat, of, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html'
})
export class ConcatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.example1();
    this.example2()
  }

  example1(){
    console.log('Concat operator');
    console.log('Example 1: ');
    concat(
      of(1,2,3),
      // subscribed after first completes
      of(4, 5, 6),
      // subscribed after second completes
      of(7, 8, 9),
    ).subscribe(res => console.log(res));
  }

  example2() {
    console.log('');
    console.log('Example 2: ');
    concat(
      of([1, 2, 3]),
      // subscribed after first completes
      of([4, 5, 6]),
      // subscribed after second completes
      of([7, 8, 9]),
    ).subscribe(res => console.log(res));
  }
}
