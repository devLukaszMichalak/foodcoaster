import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { PositionService } from '../../data/position/position.service';
import { NgStyle } from '@angular/common';
import { WindowService } from '../../data/window/window.service';
import { NgxNightwind } from 'ngx-nightwind';
import { heroHeart, heroXMark } from '@ng-icons/heroicons/outline';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInLeft, fadeInRight, rubberBand, wobble } from 'ng-animate';

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
    trigger('enterFadeLeft', [
        transition(':enter', useAnimation(fadeInLeft, {params: {timing: 0.5}}))]
    ),
    trigger('enterFadeRight', [
        transition(':enter', useAnimation(fadeInRight, {params: {timing: 0.5}}))
      ]
    )
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PickButtonsComponent {
  
  isAnimating = input.required<boolean>();
  
  nextCardEvent = output<boolean>();
  
  acceptButtonAnimationOscillator = false;
  rejectButtonAnimationOscillator = true;
  
  private positionService = inject(PositionService);
  private ngxNightwind = inject(NgxNightwind);
  private windowWidth = inject(WindowService).windowWidth;
  
  private cardOffset = this.positionService.cardOffset;
  private isAccepted = this.positionService.isAccepted;
  private isRejected = this.positionService.isRejected;
  
  private isOffsetPositive = computed(() => this.cardOffset().x > 0);
  private scaleRawValue = computed(() => (this.windowWidth() + Math.abs(this.cardOffset().x)) / this.windowWidth());
  private scaleValue = computed(() => this.scaleRawValue() >= 1.25 ? 1.25 : this.scaleRawValue());
  
  private acceptScale = computed(() =>
    ({scale: this.isOffsetPositive() ? this.scaleValue() : 1}));
  
  private acceptColor = computed(() =>
    ({backgroundColor: this.isAccepted() ? (this.ngxNightwind.isLight ? 'rgb(34, 197, 94)' : 'rgb(74, 222, 128)') : ''}));
  
  acceptStyle = computed(() =>
    ({...this.acceptScale(), ...this.acceptColor()}));
  
  private rejectScale = computed(() =>
    ({scale: !this.isOffsetPositive() ? this.scaleValue() : 1}));
  
  private rejectColor = computed(() =>
    ({backgroundColor: this.isRejected() ? (this.ngxNightwind.isLight ? 'rgb(239, 68, 68)' : 'rgb(248, 113, 113)') : ''}));
  
  rejectStyle = computed(() =>
    ({...this.rejectScale(), ...this.rejectColor()}));
  
  reject = () => {
    this.nextCardEvent.emit(false);
    this.rejectButtonAnimationOscillator = !this.rejectButtonAnimationOscillator;
  };
  
  accept = () => {
    this.nextCardEvent.emit(true);
    this.acceptButtonAnimationOscillator = !this.acceptButtonAnimationOscillator;
  };
  
}
