import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  // Temp code for emitting selected recipe
  @Output('recipeSelected') recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
      new Recipe('Cheese cake', 'A tasty cheese cake', 'http://lorempixel.com/200/200', []),
      new Recipe('Chocolate cake', 'A tasty chocolate cake', 'http://lorempixel.com/200/200', []),
      new Recipe('Cherry cake', 'A tasty cherry cake', 'http://lorempixel.com/200/200', [])
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
