import { Recipe } from './recipe.model';

export class RecipeService{

  private  recipes: Recipe[] = [
        new Recipe('A test Recipe', 'This is simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT227ePXe1fhPtBzQHrmJQ1KSkCb9SBbVIYEdNo0VjL5XshXDq9FA'),
        new Recipe('Another test Recipe', 'This is simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT227ePXe1fhPtBzQHrmJQ1KSkCb9SBbVIYEdNo0VjL5XshXDq9FA')
     ];
      
     getRecipes(){
         return this.recipes.slice();
     }

}