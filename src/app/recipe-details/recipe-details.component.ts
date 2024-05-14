import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RecipeService } from '../common/data/recipe/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first, map, Observable, timer } from 'rxjs';
import { Recipe } from '../common/data/recipe/recipe';
import { AsyncPipe } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroArrowLeft } from '@ng-icons/heroicons/outline';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInDown, fadeInRight, fadeOutRight, swing } from 'ng-animate';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIcon
  ],
  providers: [provideIcons({heroArrowLeft})],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss',
  animations: [
    trigger('swing', [
      transition('false => true, true => false', useAnimation(swing, {params: {timing: 0.5}}))]
    ),
    trigger('fadeInTop', [
      transition(':enter', useAnimation(fadeInDown, {params: {timing: 0.5}}))]
    ),
    trigger('fadeInRight', [
      transition(':enter', useAnimation(fadeInRight, {params: {timing: 0.5}}))]
    ),
    trigger('fadeOutRight', [
      transition(':leave', useAnimation(fadeOutRight, {params: {timing: 0.5}}))]
    )
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeDetailsComponent {
  
  #recipeService = inject(RecipeService);
  #activatedRoute = inject(ActivatedRoute);
  #router = inject(Router);
  
  #recipeId$: Observable<number> = this.#activatedRoute.paramMap
    .pipe(
      map(params => params.get('id')),
      map(idString => parseInt(idString ?? '')),
      map(id => id ?? -1)
    );
  
  recipe$: Observable<Recipe | undefined> = this.#recipeId$
    .pipe(map(recipeId => this.#recipeService.getById(recipeId)));
  
  backButtonAnimationOscillator = false;
  animateOut = false;
  
  withFinishingStep = (instructions: string[]) => [...instructions, 'Smacznego!'];
  
  back() {
    this.backButtonAnimationOscillator = !this.backButtonAnimationOscillator;
    this.animateOut = true;
    timer(500)
      .pipe(first())
      .subscribe(() => this.#router.navigate(['cards']).then());
  }
  
  protected readonly console = console;
}
