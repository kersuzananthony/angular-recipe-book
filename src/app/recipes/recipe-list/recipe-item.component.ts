import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe; // recipe is set from outside
  @Input() recipeId: number;


  constructor() { }

  ngOnInit() {
  }

}
