import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {SharedModule} from "../shared/shared.module";

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
		SharedModule
	]
})
export class ShoppingListModule {

}