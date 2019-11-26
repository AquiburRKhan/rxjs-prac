import { Component, OnInit } from '@angular/core';
import { interval, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html'
})
export class TakeUntilComponent implements OnInit {

  constructor() {
    this.takeUntilExample1();
   }

  ngOnInit() {
  }

  takeUntilExample1(){
    const source = interval(1000);
    const clicks = fromEvent(document, 'click');
    const result = source.pipe(takeUntil(clicks));
    result.subscribe(x => console.log(x));
  }

}
