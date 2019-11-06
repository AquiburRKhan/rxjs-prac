import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { timer, combineLatest, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html'
})
export class CombineLatestComponent implements OnInit {

  @ViewChild('button1', { static: true }) btn1: ElementRef;
  @ViewChild('button2', { static: true }) btn2: ElementRef;
  @ViewChild('button3', { static: true }) btn3: ElementRef;

  textInput1 = new FormControl('Harry');
  textInput2 = new FormControl('28');
  textInput3 = new FormControl('CEO');

  combineLatestForm: FormGroup

  constructor(private fb: FormBuilder,) {
    const firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
    const secondTimer = timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now

    this.latestCombineExample1(firstTimer, secondTimer);
  }

  ngOnInit() {
    this.combineLatestForm = this.fb.group({
      textInput1: this.textInput1,
      textInput2: this.textInput2,
      textInput3: this.textInput3
    });
  }

  ngAfterViewInit(): void {
    this.latestCombineExample2();
    this.latestCombineExample3();
  }

  latestCombineExample1(firstTimer, secondTimer) {
    console.log('Combine latest observables: ');
    console.log('Example 1: ');

    const timer$ = timer(5000);
    combineLatest(firstTimer, secondTimer).pipe(
      takeUntil(timer$)
    ).subscribe(value => console.log(value));
  }

  latestCombineExample2() {
    const btn1Clicks = fromEvent(this.btn1.nativeElement, 'click');
    const btn2Clicks = fromEvent(this.btn2.nativeElement, 'click');
    const btn3Clicks = fromEvent(this.btn3.nativeElement, 'click');

    combineLatest(btn1Clicks, btn2Clicks, btn3Clicks).subscribe(value => {
      console.log(value)
    });
  }

  latestCombineExample3() {
    combineLatest(this.textInput1.valueChanges, this.textInput2.valueChanges, this.textInput3.valueChanges).subscribe(value => console.log(value));
  }


}
