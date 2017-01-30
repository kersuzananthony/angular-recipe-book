import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingListAddComponent} from "./shopping-list-add.component";

@NgModule({
	declarations: [
		ShoppingListComponent,
		ShoppingListAddComponent
	],
	imports: [
		FormsModule,
		CommonModule // BrowserModule can only be imported once in the application, CommonModule is needed for structural directive
	]
})
export class ShoppingListModule {

}