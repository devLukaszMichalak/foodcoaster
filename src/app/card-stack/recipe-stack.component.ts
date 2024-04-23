import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { RecipeCardComponent } from './ui/recipe-card/recipe-card.component';
import { Recipe, RecipeService } from './data/recipe/recipe.service';
import { NgStyle } from '@angular/common';
import { PositionService } from './data/position/position.service';
import { OptionsComponent } from './ui/options/options.component';
import { RouterOutlet } from '@angular/router';
import { PickButtonsComponent } from './ui/pick-buttons/pick-buttons.component';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInDown } from 'ng-animate';

@Component({
  selector: 'app-recipe-stack',
  standalone: true,
  imports: [
    RecipeCardComponent,
    NgStyle,
    OptionsComponent,
    RouterOutlet,
    PickButtonsComponent
  ],
  templateUrl: './recipe-stack.component.html',
  styleUrl: './recipe-stack.component.scss',
  animations: [
    trigger('fadeInDown', [
        transition(':enter', useAnimation(fadeInDown, {params: {timing: 0.5}}))
      ]
    )
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeStackComponent {
  
  private recipeService = inject(RecipeService);
  private positionService = inject(PositionService);
  
  recipes: Signal<Recipe[]> = this.recipeService.recipes;
  
  constructor() {
    this.handleMouseMove();
    this.handleMouseUp();
  }
  
  private handleMouseMove() {
    fromEvent(document, 'mousemove')
      .pipe(takeUntilDestroyed())
      .subscribe((event: Event) => this.onMouseMove(event as MouseEvent));
  }
  
  private onMouseMove(event: MouseEvent) {
    this.positionService.currentPosition = {x: event.clientX, y: event.clientY};
  }
  
  private handleMouseUp() {
    fromEvent(document, 'mouseup')
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.onMouseUp());
  }
  
  private onMouseUp() {
    if (this.positionService.isAfterThreshold()) {
      this.nextCard(this.positionService.isAccepted());
    } else {
      this.positionService.reset();
    }
  }
  
  nextCard(isAccepted: boolean) {
    if (isAccepted) {
      //navigate to details
    }
    this.recipeService.next();
    this.positionService.reset();
  }
  
}
