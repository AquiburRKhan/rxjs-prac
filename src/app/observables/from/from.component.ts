import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html'
})
export class FromComponent implements OnInit {

  constructor() {
    this.fromExample1();
    this.fromExample2();
    this.fromExample3();
  }

  ngOnInit() {
  }

  fromExample1() {
    console.log('');
    console.log('From observables: ');
    // console.log('Example 1: ');
    // from(10, 20, 30).subscribe(next => {
    //   console.log('next: ', next)
    // });
  }

  fromExample2() {
    console.log('Example 2: ');
    from([10, 20, 30]).subscribe(next => {
      console.log('next: ', next)
    });
  }

  fromExample3() {
    console.log('Example 3: ');
    from('Hello World').subscribe(next => {
      console.log('next: ', next)
    });
  }

}
