import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentScreenName = 'RECIPES';
  title = 'app';
  onNavigationClicked(screenName: string) {
    this.currentScreenName = screenName;
  }
}
