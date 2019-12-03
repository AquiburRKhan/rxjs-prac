import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { tap, map, share, delay } from 'rxjs/operators';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html'
})
export class ShareComponent implements OnInit {

  constructor() {
    this.shareExample1();
  }

  ngOnInit() {
  }

  shareExample1(){
    const source = of([1,2,3]);

    const example = source.pipe(
      tap(() => console.log('***Side Effect***')),
      delay(2000)
    );

    const subscribe = example.subscribe(val => console.log(val));
    const subscribeTwo = example.subscribe(val => console.log(val));

    const sharedExample = example.pipe(share());
    console.log('');

    setTimeout(() => {
      const subscribeThree = sharedExample.subscribe(val => console.log(val));
      const subscribeFour = sharedExample.subscribe(val => console.log(val));
    }, 3000)


  }

}
