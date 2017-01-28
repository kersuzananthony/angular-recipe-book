import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../ingredient";
import {ShoppingService} from "./shopping.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit {
  isAdd: boolean = true;
  item: Ingredient;

  constructor(private shoppingListService: ShoppingService) { }

  ngOnInit() {
  }

  onSubmit(ingredient: Ingredient) {
    console.log(ingredient);
    if (!this.isAdd) {

    } else {
      this.item = new Ingredient(ingredient.name, ingredient.amount);
      this.shoppingListService.addItem(this.item);
    }
  }
}
