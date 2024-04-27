import { ChangeDetectionStrategy, Component, inject, signal, Signal } from '@angular/core';
import { RecipeCardComponent } from './ui/recipe-card/recipe-card.component';
import { Recipe, RecipeService } from './data/recipe/recipe.service';
import { NgStyle } from '@angular/common';
import { PositionService } from './data/position/position.service';
import { OptionsComponent } from './ui/options/options.component';
import { RouterOutlet } from '@angular/router';
import { PickButtonsComponent } from './ui/pick-buttons/pick-buttons.component';
import { from, fromEvent, mergeMap, takeUntil, timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInDown } from 'ng-animate';
import { Position } from './data/position/position';
import { WindowService } from './data/window/window.service';

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
  private windowSize = inject(WindowService).windowSize;
  
  recipes: Signal<Recipe[]> = this.recipeService.recipes;
  isAnimatingCard = signal<boolean>(false);
  
  constructor() {
    this.registerMouseMoveListener();
    this.registerTouchMoveListener();
    
    this.registerMouseTouchUpListener();
  }
  
  private registerMouseMoveListener() {
    fromEvent(document, 'mousemove')
      .pipe(takeUntilDestroyed())
      .subscribe((event: Event) => this.onMouseMove(event as MouseEvent));
  }
  
  private onMouseMove(event: MouseEvent) {
    if (!this.isAnimatingCard()) {
      this.positionService.currentPosition = {x: event.clientX, y: event.clientY};
    }
  }
  
  private registerTouchMoveListener() {
    fromEvent(document, 'touchmove')
      .pipe(takeUntilDestroyed())
      .subscribe((event: Event) => this.onTouchMove(event as TouchEvent));
  }
  
  private onTouchMove(event: TouchEvent) {
    if (!this.isAnimatingCard()) {
      this.positionService.currentPosition = {x: event.touches[0].clientX, y: event.touches[0].clientY};
    }
  }
  
  private registerMouseTouchUpListener() {
    const events = ['touchend', 'touchcancel', 'mouseup'];
    from(events)
      .pipe(
        mergeMap(eventName => fromEvent(document, eventName)),
        takeUntilDestroyed()
      )
      .subscribe(() => this.onMouseTouchUp());
    
  }
  
  private onMouseTouchUp() {
    if (!this.isAnimatingCard()) {
      if (this.positionService.isAfterThreshold()) {
        this.nextCard(this.positionService.isAccepted(), this.positionService.currentPosition());
      } else {
        this.positionService.reset();
      }
    }
  }
  
  nextCard(isAccepted: boolean, cardPosition: Position) {
    const moveTimer$ = timer(500);
    this.isAnimatingCard.set(true);
    
    const step = this.windowSize() / 26;
    
    timer(0, 10)
      .pipe(takeUntil(moveTimer$))
      .subscribe(stepCount => {
        
        this.positionService.currentPosition = {
          x: cardPosition.x + stepCount * step * (isAccepted ? 1 : -1),
          y: cardPosition.y
        };
        
      })
      .add(() => {
        this.isAnimatingCard.set(false);
        this.recipeService.next();
        this.positionService.reset();
      });
    
  }
  
  nextCardEventHandler(event: NextCardEvent) {
    this.nextCard(event.isAccepted, event.position);
  }
  
}

export type NextCardEvent = {
  isAccepted: boolean;
  position: Position
}
