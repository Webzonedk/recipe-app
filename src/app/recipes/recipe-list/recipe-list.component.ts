import { Recipe } from './../recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes: Recipe[] = [
  new Recipe('Chicken curry', 'A delisious kookedchicken dipped in exclusive curry', 'https://live.staticflickr.com/41/86255926_133c8c4b5a_h.jpg' ),
  new Recipe('Chicken curry deluxe', 'A delisious kookedchicken dipped in exclusive curry', 'https://live.staticflickr.com/41/86255926_133c8c4b5a_h.jpg' )

];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
this.recipeWasSelected.emit(recipe);
  }

}
