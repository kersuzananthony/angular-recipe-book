import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingService} from "../../shopping-list/shopping.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  selectedRecipe: Recipe;
  private recipeId: number;
  private subscription: Subscription;

  constructor(private shoppingService: ShoppingService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => {
        this.recipeId = param['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeId);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddToShoppingList() {
    this.shoppingService.addItems(this.selectedRecipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeId, 'edit']);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }
}
