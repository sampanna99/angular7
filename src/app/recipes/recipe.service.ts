import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>();
  // recipeSelected = new EventEmitter<Recipe>();
  // recipeSelected = new Subject<Recipe>();

  // private  recipes: Recipe[] = [
  //       new Recipe('A test Recipe', 
  //       'This is simply test', 
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT227ePXe1fhPtBzQHrmJQ1KSkCb9SBbVIYEdNo0VjL5XshXDq9FA',
  //       [
  //         new Ingredient('Meat', 1),
  //         new Ingredient('french fries', 20)
  //       ]),
  //       new Recipe('Another test Recipe',
  //        'This is simply test', 
  //        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT227ePXe1fhPtBzQHrmJQ1KSkCb9SBbVIYEdNo0VjL5XshXDq9FA',
  //        [
  //          new Ingredient('Buns', 2),
  //          new Ingredient('Meat', 1)

  //        ])
  //    ];
  private recipes: Recipe[] = [];
     constructor(private slService: ShoppingListService){

    }
    setRecipes(recipes: Recipe[]){
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
    }
     getRecipes(){
         return this.recipes.slice();
     }
     getRecipe(index: number){
      return this.recipes[index];
     }

     addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.slService.addIngredients(ingredients);
     }
     addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice())
     }
     updateRecipe(index: number, newRecipe: Recipe){
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice())

     }
     deleteRecipe(index: number){
      // this.ingredients.splice(index, 1);
      // this.ingredientsChanged.next(this.ingredients.slice());
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
     }
}