import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }


  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Chicken curry', 'A delisious kookedchicken dipped in exclusive curry', 'https://live.staticflickr.com/41/86255926_133c8c4b5a_h.jpg'),
    new Recipe('Chicken curry deluxe', 'A delisious kookedchicken dipped in exclusive curry', 'https://live.staticflickr.com/41/86255926_133c8c4b5a_h.jpg')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
