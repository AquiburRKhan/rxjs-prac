import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html'
})
export class OfComponent implements OnInit {

  constructor() {
    this.ofExample1();
    this.ofExample2();
    this.ofExample3();
  }

  ngOnInit() {
  }

  ofExample1() {
    console.log('Of observables: ');
    console.log('Example 1: ');
    of(10, 20, 30).subscribe(next => {
      console.log('next: ', next)
    });
  }

  ofExample2() {
    console.log('Example 2: ');
    of([10, 20, 30]).subscribe(next => {
      console.log('next: ', next)
    });
  }

  ofExample3() {
    console.log('Example 3: ');
    of('Hello World').subscribe(next => {
      console.log('next: ', next)
    });
  }

}
