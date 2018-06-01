import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'My recipe', 'http://resourcemagonline.com/wp-content/uploads/2017/03/Photo-Nov-28-10-28-35-AM.jpg'),
    new Recipe('Recipe 2', 'My other recipe', 'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2Ffoodie0315-san-diego.jpg%3Fitok%3DVQmFV7r8&w=800&q=85')
  ];

  constructor() { }

  ngOnInit() {
  }

}
