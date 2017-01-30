import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingListAddComponent} from "./shopping-list-add.component";

import {shoppingListRouting} from "./shopping-list.routing";

@NgModule({
	declarations: [
		ShoppingListComponent,
		ShoppingListAddComponent
	],
	imports: [
		shoppingListRouting,
		FormsModule,
		CommonModule // BrowserModule can only be imported once in the application, CommonModule is needed for structural directive
	]
})
export class ShoppingListModule {

}