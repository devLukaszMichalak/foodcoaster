import { Injectable } from '@angular/core';
import { delay, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfettiService {
  
  #confetti$: Subject<boolean> = new Subject<boolean>();
  
  get confettiStart$(): Observable<boolean> {
    return this.#confetti$.asObservable().pipe(delay(100));
  }
  
  startConfetti = (): void => this.#confetti$.next(true);
}
