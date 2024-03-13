import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { NgStyle } from '@angular/common';
import { PositionService } from '../data/position/position.service';
import { WindowService } from '../data/window/window.service';

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
  
  private positionService = inject(PositionService);
  private windowService = inject(WindowService);
  
  @HostListener('mousemove', ['$event'])
  setCurrentMousePosition(event: MouseEvent) {
    this.positionService.currentPosition = {x: event.clientX, y: event.clientY};
  }
  
  @HostListener('mouseup', ['$event'])
  @HostListener('mouseleave', ['$event'])
  clearClickStart($event: MouseEvent) {
    this.positionService.resetClickStart();
  }
  
  setClickStart(event: MouseEvent) {
    this.positionService.clickStartPosition = {x: event.clientX, y: event.clientY};
  }
  
  getTiltDependedStyle() {
    const {x, y} = this.positionService.cardOffset();
    const windowSize = this.windowService.windowSize();
    
    const translateValue = `translate(${x / 1.2}px, ${y / 1.2}px)`;
    const rotationAngle = (x / windowSize) * 25;
    const rotationValue = `rotate(${rotationAngle}deg)`;
    
    const tiltMultiplier = (x > 0 ? x / windowSize : -x / windowSize) * 4;
    const rgbaValue = (x > 0 ? `${10 * tiltMultiplier}, ${132 * tiltMultiplier}, ${23 * tiltMultiplier}` : `${220 * tiltMultiplier}, ${53 * tiltMultiplier}, ${69 * tiltMultiplier}`);
    const shadowValue = `0 0 max(20px,calc(30px * ${tiltMultiplier})) 0 rgba(${rgbaValue}, max(0.3,${tiltMultiplier}))`;
    
    return {
      transform: `${translateValue} ${rotationValue}`,
      boxShadow: shadowValue
    };
  }
}
