import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../ingredient";
import {ShoppingService} from "./shopping.service";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  items: Ingredient[] = [];
  selectedItem: Ingredient = null;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.items = this.shoppingService.getItems();
  }

  onSelectItem(item: Ingredient) {
    this.selectedItem = item;
  }

  onCleared() {
    this.selectedItem = null;
  }
}
