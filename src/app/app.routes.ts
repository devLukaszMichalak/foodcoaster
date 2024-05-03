import { Routes } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeStackComponent } from './recipe-stack/recipe-stack.component';

export const routes: Routes = [
  {
    path: 'cards',
    component: RecipeStackComponent,
  },
  {
    path: 'cards/:id',
    component: RecipeDetailsComponent
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
