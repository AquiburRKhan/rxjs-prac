import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html'
})
export class TakeComponent implements OnInit {

  constructor() {
    this.takeExample1();
    this.takeExample2();
   }

  ngOnInit() {
  }

  takeExample1() {
    console.log('Take operator: ');
    console.log('Example 1: ');

    //emit 1,2,3,4,5
    const source = of(1, 2, 3, 4, 5);
    //take the first emitted value then complete
    const example = source.pipe(take(1));
    //output: 1
    example.subscribe(val => console.log(val));
  }

  takeExample2(){
    console.log('');
    console.log('Example 2: ');

    const intervalCount = interval(1000);
    const takeFive = intervalCount.pipe(take(5));
    takeFive.subscribe(x => console.log(x));
  }

}
