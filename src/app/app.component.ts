import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-prac';
  currentMenu = 'start-with';

  constructor(){
  }

  changeMenu(menu) {
    this.currentMenu = menu;
  }


}
