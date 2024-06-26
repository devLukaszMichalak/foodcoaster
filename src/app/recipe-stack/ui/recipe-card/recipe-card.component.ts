import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { PositionService } from '../../data/position/position.service';
import { WindowService } from '../../../common/data/window/window.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroPhoto } from '@ng-icons/heroicons/outline';
import { Recipe } from '../../../common/data/recipe/recipe';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [
    NgStyle,
    NgIconComponent
  ],
  providers: [provideIcons({heroPhoto})],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeCardComponent {
  
  index = input.required<number>();
  isAnimating = input.required<boolean>();
  recipe = input.required<Recipe>();
  
  #positionService = inject(PositionService);
  #windowService = inject(WindowService);
  
  setMouseClickStart(event: MouseEvent) {
    if (!this.isAnimating()) {
      this.#positionService.clickStartPosition = {x: event.clientX, y: event.clientY};
    }
  }
  
  setTouchClickStart(event: TouchEvent) {
    if (!this.isAnimating()) {
      this.#positionService.clickStartPosition = {x: event.touches[0].clientX, y: event.touches[0].clientY};
    }
  }
  
  getTiltDependedStyle() {
    if (this.index() !== 0) {
      const scaleValue = 1 / (this.index() + 1) * 1.3;
      const cardHeight = 384;
      const innerCardConstDownOffset = 15;
      
      return {
        boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.3)',
        transform: `translateY(${(cardHeight - (cardHeight * scaleValue)) / 2 + innerCardConstDownOffset * this.index()}px) scale(${scaleValue})`
      };
    }
    
    const {x, y} = this.#positionService.cardOffset();
    const windowWidth = this.#windowService.windowWidth();
    
    const translateValue = `translate(${x / 1.2}px, ${y / 1.2}px)`;
    const rotationAngle = (x / windowWidth) * 25;
    const rotationValue = `rotate(${rotationAngle}deg)`;
    
    const tiltMultiplier = (x > 0 ? x / windowWidth : -x / windowWidth) * 4;
    
    const shadowRgbaValue = (x > 0 ?
      `${10 * tiltMultiplier}, ${200 * tiltMultiplier}, ${10 * tiltMultiplier}` :
      `${200 * tiltMultiplier}, ${10 * tiltMultiplier}, ${10 * tiltMultiplier}`);
    
    const shadowValue = `0 0 max(30px,calc(30px * ${tiltMultiplier})) 0 rgba(${shadowRgbaValue}, max(0.3,${tiltMultiplier}))`;
    
    const isFromAnimatingFromButtons = Math.abs(this.#positionService.clickStartPosition().x) === 1;
    
    const shouldFade = this.#positionService.isAfterThreshold() && !isFromAnimatingFromButtons;
    
    const opacityValue = shouldFade ? '0.6' : '1';
    
    return {
      transform: `${translateValue} ${rotationValue}`,
      boxShadow: shadowValue,
      opacity: opacityValue
    };
  }
}
