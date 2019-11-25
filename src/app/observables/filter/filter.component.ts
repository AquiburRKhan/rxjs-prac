import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {

  constructor() {
    this.filterExample1();
  }

  ngOnInit() {
  }

  filterExample1(){
    //emit (1,2,3,4,5)
    const source = from([1, 2, 3, 4, 5]);
    //filter out non-even numbers
    const example = source.pipe(filter(num => num % 2 === 0));
    //output: "Even number: 2", "Even number: 4"
    example.subscribe(val => console.log(`Even number: ${val}`));
  }

}
