import { computed, effect, Injectable, Signal, signal } from '@angular/core';
import arrayShuffle from 'array-shuffle';
import { recipes } from './recipes';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  private _currentRecipes = signal<Recipe[]>(((): Recipe[] => {
    const isImageOnlyLocalStorage = localStorage.getItem('_isImageOnly') === 'true';
    
    if (isImageOnlyLocalStorage) {
      return arrayShuffle(recipes.filter(r => r.imgUrl.length > 0));
    } else {
      return arrayShuffle(recipes);
    }
  })());
  
  private _isImageOnly = computed(() =>
    this._currentRecipes().every(r => r.imgUrl.length > 0));
  
  constructor() {
    effect(() => {
      localStorage.setItem('_isImageOnly', String(this._isImageOnly()));
    });
  }
  
  get isImageOnly(): Signal<boolean> {
    return computed(() => this._isImageOnly());
  }
  
  getById(id: number): Recipe | undefined {
    return recipes.find(recipe => recipe.id === id);
  }
  
  get currentRecipes(): Signal<Recipe[]> {
    return computed(() => this._currentRecipes());
  }
  
  toggleImageOnlyMode(): void {
    if (this.isImageOnly()) {
      this.everyRecipeMode();
    } else {
      this.onlyWithImagesMode();
    }
  }
  
  private onlyWithImagesMode = (): void => {
    this._currentRecipes.update(recipes => recipes.filter(r => r.imgUrl.length > 0));
  };
  
  private everyRecipeMode = (): void => {
    this._currentRecipes.set(arrayShuffle(recipes));
  };
  
  next = (): void => this._currentRecipes.update((recipes: Recipe[]) => {
    recipes.shift();
    return [...recipes];
  });
  
  reset(): void {
    if (this._isImageOnly()) {
      this._currentRecipes.set(arrayShuffle(recipes.filter(r => r.imgUrl.length > 0)));
    } else {
      this._currentRecipes.set(arrayShuffle(recipes));
    }
  }
  
}
