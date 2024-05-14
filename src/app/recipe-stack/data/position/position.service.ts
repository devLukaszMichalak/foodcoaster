import { computed, Injectable, Signal, signal } from '@angular/core';
import { Position } from './position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  
  #currentPosition = signal<Position>({x: 0, y: 0});
  #clickStartPosition = signal<Position>({x: 0, y: 0});
  
  #shouldTrackOffset = computed<boolean>(() =>
    !!this.#currentPosition().x && !!this.#currentPosition().y && !!this.#clickStartPosition().x && !!this.#clickStartPosition().y);
  
  #cardOffset = computed<Position>(() => {
    if (!this.#shouldTrackOffset()) {
      return {x: 0, y: 0};
    }
    
    const xOffset = this.#currentPosition().x - this.#clickStartPosition().x;
    const yOffset = this.#currentPosition().y - this.#clickStartPosition().y;
    
    return {x: xOffset, y: yOffset};
  });
  
  get isAccepted(): Signal<boolean> {
    return computed(() => this.#cardOffset().x > window.innerWidth / 4);
  }
  
  get isRejected(): Signal<boolean> {
    return computed(() => -this.#cardOffset().x > window.innerWidth / 4);
  }
  
  get isAfterThreshold(): Signal<boolean> {
    return computed(() => this.isAccepted() || this.isRejected());
  }
  
  get cardOffset(): Signal<Position> {
    return computed(() => this.#cardOffset());
  }
  
  set currentPosition(position: Position) {
    this.#currentPosition.set(position);
  }
  
  get clickStartPosition(): Signal<Position> {
    return computed(() => this.#clickStartPosition());
  }
  
  set clickStartPosition(position: Position) {
    this.#clickStartPosition.set(position);
  }
  
  reset(): void {
    this.#clickStartPosition.set({x: 0, y: 0});
  }
}
