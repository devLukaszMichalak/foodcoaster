import { Routes } from '@angular/router';
import { RecipeStackComponent } from './card-stack/recipe-stack.component';

export const routes: Routes = [
  {
    path: 'cards',
    component: RecipeStackComponent
  },
  {
    path: '',
    redirectTo: 'cards', pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'cards', pathMatch: 'full'
  }
];
