import {Injectable, EventEmitter} from '@angular/core';
import {Headers, Http, Response} from "@angular/http";

import {Recipe} from "./recipe";
import {Ingredient} from "../ingredient";
import 'rxjs/Rx';

@Injectable()
export class RecipeService {
  recipesChanges = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Cheese cake', 'A tasty cheese cake', 'http://lorempixel.com/200/200', [
        new Ingredient('First ingredient', 2),
        new Ingredient('Second ingredient', 4)
    ]),
    new Recipe('Chocolate cake', 'A tasty chocolate cake', 'http://lorempixel.com/200/200', []),
    new Recipe('Cherry cake', 'A tasty cherry cake', 'http://lorempixel.com/200/200', [])
  ];

  constructor(private http: Http) { }

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.put('https://recipe-book-angular2.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://recipe-book-angular2.firebaseio.com/recipes.json')
		  .map((response: Response) => response.json())
		  .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanges.emit(this.recipes);
        });
  }
}
