import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService){
    }
    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        console.log("OK");
        this.http.put('https://myrecipebookthird.firebaseio.com/recipes.json', recipes).subscribe(
            response => {
                console.log(response);
            }
        )
    }
}