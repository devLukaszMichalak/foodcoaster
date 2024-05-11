import { ChangeDetectionStrategy, Component, computed, inject, signal, Signal } from '@angular/core';
import { RecipeCardComponent } from './ui/recipe-card/recipe-card.component';
import { NgStyle } from '@angular/common';
import { PositionService } from './data/position/position.service';
import { OptionsComponent } from './ui/options/options.component';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PickButtonsComponent } from './ui/pick-buttons/pick-buttons.component';
import { filter, first, from, fromEvent, mergeMap, timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInDown, fadeInUp, fadeOutLeft, fadeOutRight, flipInY } from 'ng-animate';
import { RecipeService } from '../common/data/recipe/recipe.service';
import { Recipe } from '../common/data/recipe/recipe';

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
    ),
    trigger('fadeInUp', [
        transition(':enter', useAnimation(fadeInUp, {params: {timing: 0.2}}))
      ]
    ),
    trigger('fadeOutLeft', [
        transition(':leave', useAnimation(fadeOutLeft, {params: {timing: 0.5}}))
      ]
    ),
    trigger('flipInY', [
        transition(':enter', useAnimation(flipInY, {params: {timing: 0.5}}))
      ]
    ),
    trigger('rejectClick', [
        transition('current => reject', useAnimation(fadeOutLeft, {params: {timing: 0.4}}))
      ]
    ),
    trigger('acceptClick', [
        transition('current => accept', useAnimation(fadeOutRight, {params: {timing: 0.4}}))
      ]
    )
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeStackComponent {
  
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private recipeService = inject(RecipeService);
  private positionService = inject(PositionService);
  
  private currentRecipes: Signal<Recipe[]> = this.recipeService.currentRecipes;
  
  currentCardStatus = signal<CurrentCardStatus>('current');
  isAnimatingCard = computed(() => this.currentCardStatus() !== 'current');
  
  animateOut = false;
  hideCardForAnimateOut = false;
  
  recipesToShow = computed(() => this.currentRecipes().slice(0, 3));
  
  constructor() {
    this.registerMouseMoveListener();
    this.registerTouchMoveListener();
    
    this.registerMouseTouchUpListener();
  }
  
  private registerMouseMoveListener() {
    fromEvent(document, 'mousemove')
      .pipe(
        filter(() => !this.isAnimatingCard()),
        takeUntilDestroyed()
      )
      .subscribe((event: Event) => this.onMouseMove(event as MouseEvent));
  }
  
  private onMouseMove(event: MouseEvent) {
    this.positionService.currentPosition = {x: event.clientX, y: event.clientY};
  }
  
  private registerTouchMoveListener() {
    fromEvent(document, 'touchmove')
      .pipe(
        filter(() => !this.isAnimatingCard()),
        takeUntilDestroyed()
      )
      .subscribe((event: Event) => this.onTouchMove(event as TouchEvent));
  }
  
  private onTouchMove(event: TouchEvent) {
    this.positionService.currentPosition = {x: event.touches[0].clientX, y: event.touches[0].clientY};
  }
  
  private registerMouseTouchUpListener() {
    const events = ['touchend', 'touchcancel', 'mouseup'];
    from(events)
      .pipe(
        mergeMap(eventName => fromEvent(document, eventName)),
        filter(() => !this.isAnimatingCard()),
        filter(event => !(event.target instanceof HTMLButtonElement)),
        filter(event => !((event.target as HTMLElement)?.parentElement?.parentElement instanceof HTMLButtonElement)),
        takeUntilDestroyed()
      )
      .subscribe(() => this.onMouseTouchUp());
    
  }
  
  private onMouseTouchUp() {
    if (this.positionService.isAfterThreshold()) {
      this.nextCard(this.positionService.isAccepted());
    } else {
      this.positionService.reset();
    }
  }
  
  nextCard(isAccepted: boolean) {
    this.currentCardStatus.set(isAccepted ? 'accept' : 'reject');
    if (isAccepted) {
      this.hideCardForAnimateOut = true;
    }
    
    timer(350)
      .pipe(first())
      .subscribe(() => {
        const currentRecipe = this.currentRecipes()[0];
        this.recipeService.next();
        this.positionService.reset();
        this.currentCardStatus.set('current');

        if (isAccepted) {
          this.performAnimateOut(currentRecipe);
        }
      });
    
  }
  
  private performAnimateOut(currentRecipe: Recipe) {
    this.animateOut = true;
    timer(500).pipe(first()).subscribe(() => {
      this.router.navigate([currentRecipe.id], {relativeTo: this.activatedRoute}).then();
    });
  }
  
  getCardState(index: number): CardStatus {
    if (index > 0) {
      return 'hold';
    }
    
    return this.currentCardStatus();
  }
}

type CurrentCardStatus = 'current' | 'reject' | 'accept';
type CardStatus = CurrentCardStatus | 'hold';

