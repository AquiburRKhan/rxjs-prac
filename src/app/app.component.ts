import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'rxjs-prac';
  currentMenu = 'distinct-until-changed';

  constructor(){
  }

  changeMenu(menu) {
    this.currentMenu = menu;
  }


}
