import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { RecipeCardComponent } from './ui/recipe-card/recipe-card.component';
import { Recipe, RecipeService } from './data/recipe/recipe.service';
import { NgStyle } from '@angular/common';
import { PositionService } from './data/position/position.service';

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
  private positionService = inject(PositionService);
  
  recipes: Signal<Recipe[]> = this.recipeService.recipes;
  protected readonly console = console;
  
  nextCard(isAccepted: boolean) {
    this.recipeService.next()
    this.positionService.reset()
  }
  
}
