import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

@NgModule({
	exports: [CommonModule] // BrowserModule can only be imported once in the application, CommonModule is needed for structural directive
})
export class SharedModule {}