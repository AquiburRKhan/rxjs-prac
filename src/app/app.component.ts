import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'rxjs-prac';
  currentMenu = 'merge-map';

  constructor(){
  }

  changeMenu(menu) {
    this.currentMenu = menu;
  }


}
