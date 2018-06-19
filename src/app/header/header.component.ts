import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() navigationClicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onClickRecipes () {
    this.navigationClicked.emit('RECIPES');
  }

  onClickShoppingList() {

    this.navigationClicked.emit('SHOPPING_LIST');
  }
}
