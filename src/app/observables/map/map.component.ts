import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {

  constructor() {
    this.mapExample1();
  }

  ngOnInit() {
  }

  mapExample1(){
    console.log('Map Operator')
    console.log('Example 1: ')
    //emit (1,2,3,4,5)
    const source = from([1, 2, 3, 4, 5]);
    //add 10 to each value
    const example = source.pipe(map(val => val + 10));
    //output: 11,12,13,14,15
    example.subscribe(val => console.log(val));
  }

}
