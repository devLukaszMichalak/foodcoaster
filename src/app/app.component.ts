import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeStackComponent } from './recipe-stack/recipe-stack.component';
import { OptionsComponent } from './recipe-stack/ui/options/options.component';
import { NgxConfettiExplosionComponent } from 'ngx-confetti-explosion';
import { ConfettiService } from './common/data/confetti/confetti.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WindowService } from './common/data/window/window.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipeStackComponent, OptionsComponent, NgxConfettiExplosionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  
  #destroyRef = inject(DestroyRef);
  #confettiStart$ = inject(ConfettiService).confettiStart$;
  
  windowHeight = inject(WindowService).windowHeight;
  windowWidth = inject(WindowService).windowWidth;
  showConfetti: WritableSignal<boolean> = signal(false);
  
  ngOnInit() {
    this.#confettiStart$
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => {
        this.showConfetti.set(true);
      });
  }
  
  handleConfettiEnd = () => this.showConfetti.set(false);
  
}
