import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {Ingredient} from "../ingredient";
import {ShoppingService} from "./shopping.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
  isAdd: boolean = true;
  @Input() item: Ingredient;
  @Output() cleared = new EventEmitter();

  constructor(private shoppingListService: ShoppingService) { }

  ngOnChanges(changes) {
    if (changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = new Ingredient(null, null);
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(form: NgForm, ingredient: Ingredient) {
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    if (!this.isAdd) {
      this.shoppingListService.editItem(this.item, newIngredient);
    } else {
      this.item = newIngredient;
      this.shoppingListService.addItem(this.item);
    }

    this.onClear();

    setTimeout(() => {
      form.resetForm();
    }, 0);
  }

  onDelete() {
    this.shoppingListService.deleteItem(this.item);
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }
}
