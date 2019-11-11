import { Component, OnInit } from '@angular/core';
import { from, merge, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html'
})
export class MergeComponent implements OnInit {

  constructor() {
    this.mergeExample1();
    this.mergeExample2();
  }

  ngOnInit() {
  }

  mergeExample1(){
    console.log('Example 1')
    let obs1 = from(['1','2','3']);
    let obs2 = from(['4', '5', '6']);

    merge(obs1,obs2).subscribe(res => {
      console.log(res)
    })
  }

  mergeExample2() {
    console.log('')
    console.log('Example 1')
    const timer1 = interval(1000).pipe(take(4));
    const timer2 = interval(2000).pipe(take(2));
    const timer3 = interval(500).pipe(take(4));
    const concurrent = 2; // the argument

    const merged = merge(timer1, timer2, timer3, concurrent);
    merged.subscribe(x => console.log(x));

    // Results in the following:
    // - First timer1 and timer2 will run concurrently
    // - timer1 will emit a value every 1000ms for 10 iterations
    // - timer2 will emit a value every 2000ms for 6 iterations
    // - after timer1 hits it's max iteration, timer2 will
    //   continue, and timer3 will start to run concurrently with timer2
    // - when timer2 hits it's max iteration it terminates, and
    //   timer3 will continue to emit a value every 500ms until it is complete
  }

}
