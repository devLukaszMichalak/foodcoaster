import { ChangeDetectionStrategy, Component, computed, HostListener, inject, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent, map } from 'rxjs';
import { NgStyle } from '@angular/common';

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
  
  private windowSize: Signal<number> = toSignal(fromEvent(window, 'resize')
      .pipe(map(() => window.innerWidth)),
    {initialValue: window.innerWidth}
  );
  
  private currentPosition = signal<Position>({x: 0, y: 0});
  private clickStartPosition = signal<Position>({x: 0, y: 0});
  
  private shouldTrackOffset = computed<boolean>(() =>
    !!this.currentPosition().x && !!this.currentPosition().y && !!this.clickStartPosition().x && !!this.clickStartPosition().y);
  
  private cardOffset = computed<Position>(() => {
    if (this.shouldTrackOffset()) {
      return {
        x: this.currentPosition().x - this.clickStartPosition().x,
        y: this.currentPosition().y - this.clickStartPosition().y
      };
    } else {
      return {x: 0, y: 0};
    }
  });
  
  @HostListener('mousemove', ['$event'])
  setCurrentMousePosition(event: MouseEvent) {
    this.currentPosition.set({x: event.clientX, y: event.clientY});
  }
  
  @HostListener('mouseup', ['$event'])
  @HostListener('mouseleave', ['$event'])
  clearClickStart($event: MouseEvent) {
    this.clickStartPosition.set({x: 0, y: 0});
  }
  
  setClickStart(event: MouseEvent) {
    this.clickStartPosition.set({x: event.clientX, y: event.clientY});
  }
  
  getTiltDependedStyle() {
    const {x, y} = this.cardOffset();
    const translateValue = `translate(${x / 1.2}px, ${y / 1.2}px)`;
    const rotationAngle = (x / this.windowSize()) * 25;
    const rotationValue = `rotate(${rotationAngle}deg)`;
    
    const tiltMultiplier = (x > 0 ? x / this.windowSize() : -x / this.windowSize()) * 4;
    const rgbaValue = (x > 0 ? `${10 * tiltMultiplier}, ${132 * tiltMultiplier}, ${23 * tiltMultiplier}` : `${220 * tiltMultiplier}, ${53 * tiltMultiplier}, ${69 * tiltMultiplier}`);
    const shadowValue = `0 0 max(20px,calc(30px * ${tiltMultiplier})) 0 rgba(${rgbaValue}, max(0.3,${tiltMultiplier}))`;
    
    return {
      transform: `${translateValue} ${rotationValue}`,
      boxShadow: shadowValue
    };
  }
}

type Position = {
  x: number,
  y: number
}
