import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10)
  // ];
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(private slService: ShoppingListService, private loggingService: LoggingService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub =  this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
    this.loggingService.printlog("hello from shopping list");
  }
  ngOnDestroy(){
    this.igChangeSub.unsubscribe();
  }
  onEditItem(index: number){
      this.slService.startedEditing.next(index);
  }
  // onIngredientAdded(ingredient: Ingredient){
  //   this.ingredients.push(ingredient);
  // }
}
