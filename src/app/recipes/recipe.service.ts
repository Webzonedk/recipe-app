import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})


export class RecipeService {




  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken curry',
      'A delisious kooked chicken dipped in exclusive curry',
      'https://live.staticflickr.com/41/86255926_133c8c4b5a_h.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Apples', 2),
        new Ingredient('Curry', 1)
      ]),
    new Recipe(
      'Roastbeef',
      'An exclusive dish og meat for rich people',
      'https://cdn.pixabay.com/photo/2013/02/21/19/06/beef-84534_960_720.jpg',
      [
        new Ingredient('Salad', 1),
        new Ingredient('Roastbeef', 1)
      ])
  ];


  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  // function to add ingredients to the shoppinglist
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
