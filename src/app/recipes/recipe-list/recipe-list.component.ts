import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  // Temp code for emitting selected recipe
  @Output('recipeSelected') recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
