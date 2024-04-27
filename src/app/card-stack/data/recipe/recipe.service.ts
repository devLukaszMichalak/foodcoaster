import { computed, Injectable, Signal, signal } from '@angular/core';
import arrayShuffle from 'array-shuffle';
import { recipes } from './recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  private _recipes = signal<Recipe[]>(arrayShuffle(recipes));
  
  get recipes(): Signal<Recipe[]> {
    return computed(() => this._recipes());
  }
  
  next = (): void => this._recipes.update((recipes: Recipe[]) => {
    recipes.shift();
    return [...recipes];
  });
}

export type Recipe = {
  imgUrl: string;
  name: string;
}
