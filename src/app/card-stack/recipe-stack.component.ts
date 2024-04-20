import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RecipeCardComponent } from './ui/recipe-card/recipe-card.component';
import { RecipeService } from './data/recipe/recipe.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-recipe-stack',
  standalone: true,
  imports: [
    RecipeCardComponent,
    NgStyle
  ],
  templateUrl: './recipe-stack.component.html',
  styleUrl: './recipe-stack.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeStackComponent {

  private recipeService = inject(RecipeService);
  
  recipes = this.recipeService.recipes();
}
