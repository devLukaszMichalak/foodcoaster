import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { PositionService } from '../../data/position/position.service';
import { WindowService } from '../../data/window/window.service';
import { Recipe } from '../../data/recipe/recipe.service';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeCardComponent {
  
  index = input.required<number>();
  recipe = input.required<Recipe>();
  
  private positionService = inject(PositionService);
  private windowService = inject(WindowService);
  
  setMouseClickStart(event: MouseEvent) {
    this.positionService.clickStartPosition = {x: event.clientX, y: event.clientY};
  }
  
  setTouchClickStart(event: TouchEvent) {
    this.positionService.clickStartPosition = {x: event.touches[0].clientX, y: event.touches[0].clientY};
  }
  
  getTiltDependedStyle() {
    if (this.index() !== 0) {
      return {boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.3)'};
    }
    
    const {x, y} = this.positionService.cardOffset();
    const windowSize = this.windowService.windowSize();
    
    const translateValue = `translate(${x / 1.2}px, ${y / 1.2}px)`;
    const rotationAngle = (x / windowSize) * 25;
    const rotationValue = `rotate(${rotationAngle}deg)`;
    
    const tiltMultiplier = (x > 0 ? x / windowSize : -x / windowSize) * 4;
    
    const shadowRgbaValue = (x > 0 ?
      `${10 * tiltMultiplier}, ${200 * tiltMultiplier}, ${10 * tiltMultiplier}` :
      `${200 * tiltMultiplier}, ${10 * tiltMultiplier}, ${10 * tiltMultiplier}`);
    
    const shadowValue = `0 0 max(30px,calc(30px * ${tiltMultiplier})) 0 rgba(${shadowRgbaValue}, max(0.3,${tiltMultiplier}))`;
    
    const isFromAnimatingFromButtons = Math.abs(this.positionService.clickStartPosition().x) === 1;
    
    const shouldFade = this.positionService.isAfterThreshold() && !isFromAnimatingFromButtons;
    
    const opacityValue = shouldFade ? '0.6' : '1';
    
    return {
      transform: `${translateValue} ${rotationValue}`,
      boxShadow: shadowValue,
      opacity: opacityValue
    };
  }
}
