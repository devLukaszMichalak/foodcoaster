import { computed, Injectable, Signal, signal } from '@angular/core';
import { Position } from './position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  
  private _currentPosition = signal<Position>({x: 0, y: 0});
  private _clickStartPosition = signal<Position>({x: 0, y: 0});
  
  private _shouldTrackOffset = computed<boolean>(() =>
    !!this._currentPosition().x && !!this._currentPosition().y && !!this._clickStartPosition().x && !!this._clickStartPosition().y);
  
  private _cardOffset = computed<Position>(() => {
    if (!this._shouldTrackOffset()) {
      return {x: 0, y: 0};
    }
    
    const xOffset = this._currentPosition().x - this._clickStartPosition().x;
    const yOffset = this._currentPosition().y - this._clickStartPosition().y;
    
    return {x: xOffset, y: yOffset};
  });
  
  get isAccepted(): Signal<boolean> {
    return computed(() => this._cardOffset().x > window.innerWidth / 4);
  }
  
  get isRejected(): Signal<boolean> {
    return computed(() => -this._cardOffset().x > window.innerWidth / 4);
  }
  
  get isAfterThreshold(): Signal<boolean> {
    return computed(() => this.isAccepted() || this.isRejected());
  }
  
  get cardOffset(): Signal<Position> {
    return computed(() => this._cardOffset());
  }
  
  set currentPosition(position: Position) {
    this._currentPosition.set(position);
  }
  
  set clickStartPosition(position: Position) {
    this._clickStartPosition.set(position);
  }
  
  resetClickStart(): void {
    this._clickStartPosition.set({x: 0, y: 0});
  }
}
