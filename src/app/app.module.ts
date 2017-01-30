import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {CoreModule} from "./core.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';

import {RecipeService} from "./recipes/recipe.service";
import {ShoppingService} from "./shopping-list/shopping.service";

import {routing} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [RecipeService, ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
