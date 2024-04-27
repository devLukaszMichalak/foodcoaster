import { computed, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  private _recipes = signal<Recipe[]>([
    {
      imgUrl: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
      name: 'test'
    },
    {
      imgUrl: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
      name: 'test2'
    },
    {
      imgUrl: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
      name: 'test3'
    }
  ]);
  
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
