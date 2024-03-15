import { ChangeDetectionStrategy, Component, HostListener, inject, input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { PositionService } from '../data/position/position.service';
import { WindowService } from '../data/window/window.service';
import { NgxNightwind } from 'ngx-nightwind';

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
  
  index = input.required();
  
  private positionService = inject(PositionService);
  private windowService = inject(WindowService);
  private ngxNightwind = inject(NgxNightwind);
  
  @HostListener('mousemove', ['$event'])
  setCurrentMousePosition(event: MouseEvent) {
    this.positionService.currentPosition = {x: event.clientX, y: event.clientY};
  }
  
  @HostListener('mouseup')
  @HostListener('mouseleave')
  clearClickStart() {
    this.positionService.resetClickStart();
  }
  
  setClickStart(event: MouseEvent) {
    this.positionService.clickStartPosition = {x: event.clientX, y: event.clientY};
  }
  
  getTiltDependedStyle() {
    if (this.index() !== 0) {
      if (this.ngxNightwind.isLight) {
        return {boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.3)'};
      } else {
        return {boxShadow: '0 0 30px 0 rgba(255, 255, 255, 0.3)'};
      }
    }
    
    const {x, y} = this.positionService.cardOffset();
    const windowSize = this.windowService.windowSize();
    
    const translateValue = `translate(${x / 1.2}px, ${y / 1.2}px)`;
    const rotationAngle = (x / windowSize) * 25;
    const rotationValue = `rotate(${rotationAngle}deg)`;
    
    const tiltMultiplier = (x > 0 ? x / windowSize : -x / windowSize) * 4;
    
    let rgbaValue;
    if (this.ngxNightwind.isLight) {
      rgbaValue = (x > 0 ?
        `${10 * tiltMultiplier}, ${200 * tiltMultiplier}, ${10 * tiltMultiplier}` :
        `${200 * tiltMultiplier}, ${10 * tiltMultiplier}, ${10 * tiltMultiplier}`);
    } else {
      rgbaValue = (x < 0 ?
        `${255 - 10 * tiltMultiplier}, ${255 - 200 * tiltMultiplier}, ${255 - 200 * tiltMultiplier}` :
        `${255 - 200 * tiltMultiplier}, ${255 - 10 * tiltMultiplier}, ${255 - 200 * tiltMultiplier}`);
    }
    
    const shadowValue = `0 0 max(30px,calc(30px * ${tiltMultiplier})) 0 rgba(${rgbaValue}, max(0.3,${tiltMultiplier}))`;
    
    return {
      transform: `${translateValue} ${rotationValue}`,
      boxShadow: shadowValue
    };
  }
}
