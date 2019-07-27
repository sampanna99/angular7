import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{

  // recipeSelected = new EventEmitter<Recipe>();
  // recipeSelected = new Subject<Recipe>();

  private  recipes: Recipe[] = [
        new Recipe('A test Recipe', 
        'This is simply test', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT227ePXe1fhPtBzQHrmJQ1KSkCb9SBbVIYEdNo0VjL5XshXDq9FA',
        [
          new Ingredient('Meat', 1),
          new Ingredient('french fries', 20)
        ]),
        new Recipe('Another test Recipe',
         'This is simply test', 
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT227ePXe1fhPtBzQHrmJQ1KSkCb9SBbVIYEdNo0VjL5XshXDq9FA',
         [
           new Ingredient('Buns', 2),
           new Ingredient('Meat', 1)

         ])
     ];
      
     getRecipes(){
         return this.recipes.slice();
     }
     getRecipe(index: number){
      return this.recipes[index];
     }
     constructor(private slService: ShoppingListService){

     }

     addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.slService.addIngredients(ingredients);
     }

}