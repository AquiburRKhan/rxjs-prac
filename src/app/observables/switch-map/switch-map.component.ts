import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { of, fromEvent, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html'
})
export class SwitchMapComponent implements OnInit {

  @ViewChild('ResetButton', { static: true }) resetEl: ElementRef;
  intervalCount = 0;

  constructor() {}

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.switchMapExample1();
    this.switchMapExample2();
  }

  switchMapExample1(){
    const switched = of(1, 2, 3)
      .pipe(switchMap((x: number) => of(x, x ** 2, x ** 3))
    );

    switched.subscribe(x => console.log(x));
  }

  switchMapExample2() {
    fromEvent(this.resetEl.nativeElement, 'click')
      .pipe(
        // restart counter on every click
        switchMap(() => interval(1000))
      )
      .subscribe(res => {
        console.log(res);
        this.intervalCount = res;
      } );
  }

}
