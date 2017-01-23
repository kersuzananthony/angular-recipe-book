import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  recipe: Recipe = new Recipe('A dummy recipe', 'Dummy recipe description', 'http://lorempixel.com/200/200');

  constructor() { }

  ngOnInit() {
  }

}
