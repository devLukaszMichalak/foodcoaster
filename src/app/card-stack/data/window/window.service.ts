import { Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  
  windowWidth: Signal<number> = toSignal(fromEvent(window, 'resize')
      .pipe(map(() => window.innerWidth)),
    {initialValue: window.innerWidth}
  );
  
}
