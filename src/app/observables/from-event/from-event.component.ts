import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html'
})
export class FromEventComponent implements OnInit {

  constructor() {
    // this.fromEventExample1();
    // this.fromEventExample2();
    // this.fromEventExample3();
   }

  ngOnInit() {
  }

  // fromEventExample1() {
  //   console.log('Of observables: ');
  //   console.log('Example 1: ');
  //   of(10, 20, 30).subscribe(next => {
  //     console.log('next: ', next)
  //   });
  // }

  // fromEventExample2() {
  //   console.log('Example 2: ');
  //   of([10, 20, 30]).subscribe(next => {
  //     console.log('next: ', next)
  //   });
  // }

  // fromEventExample3() {
  //   console.log('Example 3: ');
  //   of('Hello World').subscribe(next => {
  //     console.log('next: ', next)
  //   });
  // }

}
