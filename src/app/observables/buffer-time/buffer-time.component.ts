import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { bufferTime, take } from 'rxjs/operators';

@Component({
  selector: 'app-buffer-time',
  templateUrl: './buffer-time.component.html'
})
export class BufferTimeComponent implements OnInit {

  constructor() {
    this.bufferTimeExample1();
  }

  ngOnInit() {
  }

  bufferTimeExample1(){
    const source = interval(500);
    const example = source.pipe(bufferTime(2000),take(4));
    example.subscribe(val =>
      console.log('Buffered with Time:', val)
    );
  }

}
