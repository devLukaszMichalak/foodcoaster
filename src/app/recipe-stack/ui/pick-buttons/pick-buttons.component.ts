import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { PositionService } from '../../data/position/position.service';
import { NgStyle } from '@angular/common';
import { WindowService } from '../../../common/data/window/window.service';
import { NgxNightwind } from 'ngx-nightwind';
import { heroHeart, heroXMark } from '@ng-icons/heroicons/outline';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInUp, rubberBand, wobble } from 'ng-animate';

@Component({
  selector: 'app-pick-buttons',
  standalone: true,
  imports: [
    NgIconComponent,
    NgStyle
  ],
  providers: [provideIcons({heroHeart, heroXMark})],
  templateUrl: './pick-buttons.component.html',
  styleUrl: './pick-buttons.component.scss',
  animations: [
    trigger('rubberBand', [
      transition('false => true, true => false', useAnimation(rubberBand, {params: {timing: 0.5}}))]
    ),
    trigger('wobble', [
      transition('false => true, true => false', useAnimation(wobble, {params: {timing: 0.5}}))]
    ),
    trigger('fadeUp', [
      transition(':enter', useAnimation(fadeInUp, {params: {timing: 0.5}}))]
    )
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PickButtonsComponent {
  
  isAnimating = input.required<boolean>();
  disabled = input<boolean>(false);
  
  nextCardEvent = output<boolean>();
  
  acceptButtonAnimationOscillator = false;
  rejectButtonAnimationOscillator = true;
  
  #positionService = inject(PositionService);
  #ngxNightwind = inject(NgxNightwind);
  #windowWidth = inject(WindowService).windowWidth;
  
  #cardOffset = this.#positionService.cardOffset;
  #isAccepted = this.#positionService.isAccepted;
  #isRejected = this.#positionService.isRejected;
  
  #isOffsetPositive = computed(() => this.#cardOffset().x > 0);
  #scaleRawValue = computed(() => (this.#windowWidth() + Math.abs(this.#cardOffset().x)) / this.#windowWidth());
  #scaleValue = computed(() => this.#scaleRawValue() >= 1.25 ? 1.25 : this.#scaleRawValue());
  
  #acceptScale = computed(() =>
    ({scale: this.#isOffsetPositive() ? this.#scaleValue() : 1}));
  
  #acceptColor = computed(() =>
    ({backgroundColor: this.#isAccepted() ? (this.#ngxNightwind.isLight ? 'rgb(34, 197, 94)' : 'rgb(74, 222, 128)') : ''}));
  
  acceptStyle = computed(() =>
    ({...this.#acceptScale(), ...this.#acceptColor()}));
  
  
  #rejectScale = computed(() =>
    ({scale: !this.#isOffsetPositive() ? this.#scaleValue() : 1}));
  
  #rejectColor = computed(() =>
    ({backgroundColor: this.#isRejected() ? (this.#ngxNightwind.isLight ? 'rgb(239, 68, 68)' : 'rgb(248, 113, 113)') : ''}));
  
  rejectStyle = computed(() =>
    ({...this.#rejectScale(), ...this.#rejectColor()}));
  
  reject = () => {
    if (this.disabled()) {
      return;
    }
    
    this.nextCardEvent.emit(false);
    this.rejectButtonAnimationOscillator = !this.rejectButtonAnimationOscillator;
  };
  
  accept = () => {
    if (this.disabled()) {
      return;
    }
    
    this.nextCardEvent.emit(true);
    this.acceptButtonAnimationOscillator = !this.acceptButtonAnimationOscillator;
  };
  
}
