import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html'
})
export class ScanComponent implements OnInit {

  constructor() {
    this.scanExample1();
    this.scanExample2();
  }

  ngOnInit() {
  }

  scanExample1(){
    console.log('Scan Operators')
    console.log('Example 1: ')
    const source = of(1, 2, 3);

    const example = source.pipe(scan((acc, curr) => acc + curr, 0));

    example.subscribe(val => console.log(val));
  }

  scanExample2() {
    console.log('')
    console.log('Example 2: ')
    const source = of('1', '2', '3');

    const example = source.pipe(scan((acc, curr) => acc + curr, 'a'));

    example.subscribe(val => console.log(val));
  }

}
