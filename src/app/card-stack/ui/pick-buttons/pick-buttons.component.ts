import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { PositionService } from '../../data/position/position.service';
import { NgStyle } from '@angular/common';
import { WindowService } from '../../data/window/window.service';
import { NgxNightwind } from 'ngx-nightwind';
import { heroHeart, heroXMark } from '@ng-icons/heroicons/outline';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInLeft, fadeInRight, rubberBand, wobble } from 'ng-animate';
import { NextCardEvent } from '../../recipe-stack.component';

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
        transition(':enter', useAnimation(fadeInLeft, {params: {timing: 0.5}}))
      ]
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
  
  nextCardEvent = output<NextCardEvent>();
  
  acceptButtonAnimationOscillator = false;
  rejectButtonAnimationOscillator = true;
  
  private positionService = inject(PositionService);
  private ngxNightwind = inject(NgxNightwind);
  private windowSize = inject(WindowService).windowSize;
  
  private cardOffset = this.positionService.cardOffset;
  private isAccepted = this.positionService.isAccepted;
  private isRejected = this.positionService.isRejected;
  
  private isOffsetPositive = computed(() => this.cardOffset().x > 0);
  private scaleRawValue = computed(() => (this.windowSize() + Math.abs(this.cardOffset().x)) / this.windowSize());
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
    this.positionService.clickStartPosition = {x: -1, y: -1};
    this.nextCardEvent.emit({isAccepted: false, position: this.positionService.clickStartPosition()});
    this.rejectButtonAnimationOscillator = !this.rejectButtonAnimationOscillator;
  };
  
  accept = () => {
    this.positionService.clickStartPosition = {x: 1, y: 1};
    this.nextCardEvent.emit({isAccepted: true, position: this.positionService.clickStartPosition()});
    this.acceptButtonAnimationOscillator = !this.acceptButtonAnimationOscillator;
  };
  
}
