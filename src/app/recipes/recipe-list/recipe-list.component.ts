import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipeWasSelected = new EventEmitter<Recipe>();

recipes: Recipe[] = [
  new Recipe('A test Recipe', 'This is simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT227ePXe1fhPtBzQHrmJQ1KSkCb9SBbVIYEdNo0VjL5XshXDq9FA'),
  new Recipe('Another test Recipe', 'This is simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT227ePXe1fhPtBzQHrmJQ1KSkCb9SBbVIYEdNo0VjL5XshXDq9FA')

];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
