import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html'
})
export class StartWithComponent implements OnInit {

  constructor() {
    this.startWithExample1();
    this.startWithExample2();
  }

  ngOnInit() {
  }

  startWithExample1(){
    console.log('Example 1')
    of("from source")
      .pipe(startWith("first", "second"))
      .subscribe(res => console.log(res));
  }

  startWithExample2(){
    console.log('')
    console.log('Example 2')
    of(2,3,4                                      )
      .pipe(startWith(0, 1))
      .subscribe(res => console.log(res));
  }

}
