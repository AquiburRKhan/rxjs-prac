import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html'
})
export class FromEventComponent implements OnInit {

  @ViewChild('fromEventElement', { static: true }) el: ElementRef;
  @ViewChild('ResetButton', { static: true }) resetEl: ElementRef;
  public clickCount = 0;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.fromEventExample1(this.el, this.resetEl);
    // this.fromEventExample2();
    // this.fromEventExample3();

  }

  fromEventExample1(el, resetEl) {
    console.log('');
    console.log('From observables: ');
    console.log('Example 1: ');

    const mouseClicks = fromEvent(el.nativeElement, 'click');
    const resetMouseClick = fromEvent(resetEl.nativeElement, 'click');

    // Subscribe to start listening for mouse-click events
    const subscription = mouseClicks.subscribe((evt: MouseEvent) => {
      ++this.clickCount;
    });

    const resetSubscription = resetMouseClick.subscribe((evt: MouseEvent) => {
      this.clickCount = 0;
    });
  }

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
