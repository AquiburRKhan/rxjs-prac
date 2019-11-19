import { Component, OnInit, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html'
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.debounceTimeExample1();
  }

  debounceTimeExample1(){
    // elem ref
    const searchBox = document.getElementById('search');

    // streams
    const keyup$ = fromEvent(searchBox, 'keyup')

    // wait .5s between keyups to emit current value
    keyup$.pipe(
      map((i: any) => i.currentTarget.value),
      debounceTime(500)
    )
      .subscribe(res => console.log(res));
  }


}
