import { Injectable } from '@angular/core';
import {Ingredient} from "../ingredient";

@Injectable()
export class ShoppingService {

  private items: Ingredient[] = [];

  constructor() { }

  getItems(): Ingredient[] {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items);
  }

  addItem(item: Ingredient) {
    this.items.push(item);
  }
}
