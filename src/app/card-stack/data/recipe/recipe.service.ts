import { computed, Injectable, Signal, signal } from '@angular/core';
import arrayShuffle from 'array-shuffle';
import { recipes } from './recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  private _recipes = signal<Recipe[]>(arrayShuffle(recipes));
  
  get isImageOnly(): Signal<boolean> {
    return computed(() => this._recipes().length < recipes.length);
  }
  
  get recipes(): Signal<Recipe[]> {
    return computed(() => this._recipes());
  }
  
  toggleImageOnlyMode() {
    if (this.isImageOnly()) {
      this.everyRecipeMode();
    } else {
      this.onlyWithImagesMode();
    }
  }
  
  private onlyWithImagesMode = (): void =>
    this._recipes.update(recipes => recipes.filter(r => r.imgUrl.length > 0));
  
  private everyRecipeMode = () =>
    this._recipes.set(arrayShuffle(recipes));
  
  next = (): void => this._recipes.update((recipes: Recipe[]) => {
    recipes.shift();
    return [...recipes];
  });
}

export type Recipe = {
  imgUrl: string;
  name: string;
}
