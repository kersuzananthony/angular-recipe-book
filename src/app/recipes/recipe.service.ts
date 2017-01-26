import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Cheese cake', 'A tasty cheese cake', 'http://lorempixel.com/200/200', []),
    new Recipe('Chocolate cake', 'A tasty chocolate cake', 'http://lorempixel.com/200/200', []),
    new Recipe('Cherry cake', 'A tasty cherry cake', 'http://lorempixel.com/200/200', [])
  ];

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes;
  }
}
