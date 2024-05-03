import { computed, effect, Injectable, Signal, signal } from '@angular/core';
import arrayShuffle from 'array-shuffle';
import { recipes } from './recipes';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  private _recipes = signal<Recipe[]>((() => {
    const isImageOnlyLocalStorage = localStorage.getItem('_isImageOnly') === 'true';
    
    if (isImageOnlyLocalStorage) {
      return arrayShuffle(recipes.filter(r => r.imgUrl.length > 0));
    } else {
      return arrayShuffle(recipes);
    }
  })());
  
  private _isImageOnly = computed(() =>
    this._recipes().every(r => r.imgUrl.length > 0));
  
  constructor() {
    effect(() => {
      localStorage.setItem('_isImageOnly', String(this._isImageOnly()));
    });
  }
  
  get isImageOnly(): Signal<boolean> {
    return computed(() => this._isImageOnly());
  }
  
  getById(id: number): Recipe | undefined {
    return this._recipes().find(recipe => recipe.id === id);
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
  
  private onlyWithImagesMode = (): void => {
    this._recipes.update(recipes => recipes.filter(r => r.imgUrl.length > 0));
  };
  
  private everyRecipeMode = () => {
    this._recipes.set(arrayShuffle(recipes));
  };
  
  next = (): void => this._recipes.update((recipes: Recipe[]) => {
    recipes.shift();
    return [...recipes];
  });
  
  reset() {
    if (this._isImageOnly()) {
      this._recipes.set(arrayShuffle(recipes.filter(r => r.imgUrl.length > 0)));
    } else {
      this._recipes.set(arrayShuffle(recipes));
    }
  }
  
}
