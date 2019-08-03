import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService{
    startedEditing = new Subject<number>();
    ingredientsChanged = new Subject<Ingredient[]>()
    // ingredientsChanged = new EventEmitter<Ingredient[]>()


    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];
      getIngredient(index: number){
        // console.log(index);
        return this.ingredients[index];
      }
      getIngredients(){
          return this.ingredients.slice();
      }
      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.next(this.ingredients.slice());
      }
      addIngredients(ingredientst: Ingredient[]){
        this.ingredients.push(...ingredientst);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
      updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
      }
      deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
}