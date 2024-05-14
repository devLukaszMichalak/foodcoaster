import { computed, effect, Injectable, Signal, signal } from '@angular/core';
import arrayShuffle from 'array-shuffle';
import { recipes } from './recipes';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  #currentRecipes = signal<Recipe[]>(((): Recipe[] => {
    const isImageOnlyLocalStorage = localStorage.getItem('_isImageOnly') === 'true';
    
    if (isImageOnlyLocalStorage) {
      return arrayShuffle(recipes.filter(r => r.imgUrl.length > 0));
    } else {
      return arrayShuffle(recipes);
    }
  })());
  
  #isImageOnly = computed(() =>
    this.#currentRecipes().every(r => r.imgUrl.length > 0));
  
  constructor() {
    effect(() => {
      localStorage.setItem('_isImageOnly', String(this.#isImageOnly()));
    });
  }
  
  get isImageOnly(): Signal<boolean> {
    return computed(() => this.#isImageOnly());
  }
  
  get currentRecipes(): Signal<Recipe[]> {
    return computed(() => this.#currentRecipes());
  }
  
  getById(id: number): Recipe | undefined {
    return recipes.find(recipe => recipe.id === id);
  }
  
  next = (): void => this.#currentRecipes.update((recipes: Recipe[]) => {
    recipes.shift();
    return [...recipes];
  });
  
  reset(): void {
    if (this.#isImageOnly()) {
      this.#currentRecipes.set(arrayShuffle(recipes.filter(r => r.imgUrl.length > 0)));
    } else {
      this.#currentRecipes.set(arrayShuffle(recipes));
    }
  }
  
  toggleImageOnlyMode(): void {
    if (this.#isImageOnly()) {
      this.#everyRecipeMode();
    } else {
      this.#onlyWithImagesMode();
    }
  }
  
  #onlyWithImagesMode = (): void => {
    this.#currentRecipes.update(recipes => recipes.filter(r => r.imgUrl.length > 0));
  };
  
  #everyRecipeMode = (): void => {
    this.#currentRecipes.set(arrayShuffle(recipes));
  };
  
}
