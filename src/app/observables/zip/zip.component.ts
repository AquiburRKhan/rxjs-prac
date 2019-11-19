import { Component, OnInit } from '@angular/core';
import { of, zip, interval } from 'rxjs';
import { take, delay } from 'rxjs/operators';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html'
})
export class ZipComponent implements OnInit {

  age$ = of<number>(27, 25, 29);
  name$ = of<string>('Foo', 'Bar', 'Beer');
  isDev$ = of<boolean>(true, true, false);

  constructor() {
    this.zipExample1();
    this.zipExample2();
  }

  ngOnInit() {
  }

  zipExample1() {
    console.log('Zip observables: ');
    console.log('Example 1: ');
    zip(this.age$, this.name$, this.isDev$)
      .subscribe(res => console.log(res));
  }

  zipExample2() {
    console.log('');
    console.log('Example 2: ');
    //emit every 1s
    const source = interval(1000);
    //when one observable completes no more values will be emitted
    const example = zip(source, source.pipe(take(4)));

    example.subscribe(val => console.log(val));
  }

}
