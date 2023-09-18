import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  @Input('ingredientAdded') onAddIngredient: Ingredient;
  @Input('ingredientRemove') onRemoveIngredient: void;
  @Input('ingredientsCleared') onClearIngredient: void;

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {}

  ngOnInit() {}

  onIngredientAdded(newIng: Ingredient) {
    this.ingredients.push(newIng);
  }

  onIngredientRemove() {
    this.ingredients.shift();
  }

  onClearIngredients() {
    this.ingredients = [];
  }
}
