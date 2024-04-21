import { ChangeDetectionStrategy, Component, computed, inject, output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroCheckSolid, heroXMarkSolid } from '@ng-icons/heroicons/solid';
import { PositionService } from '../../data/position/position.service';
import { NgStyle } from '@angular/common';
import { WindowService } from '../../data/window/window.service';
import { NgxNightwind } from 'ngx-nightwind';

@Component({
  selector: 'app-pick-buttons',
  standalone: true,
  imports: [
    NgIconComponent,
    NgStyle
  ],
  providers: [provideIcons({heroCheckSolid, heroXMarkSolid})],
  templateUrl: './pick-buttons.component.html',
  styleUrl: './pick-buttons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PickButtonsComponent {
  
  nextCardEvent = output<boolean>();
  
  private positionService = inject(PositionService);
  private ngxNightwind = inject(NgxNightwind);
  private windowSize = inject(WindowService).windowSize;
  
  private cardOffset = this.positionService.cardOffset;
  private isAccepted = this.positionService.isAccepted;
  private isRejected = this.positionService.isRejected;
  
  private isOffsetPositive = computed(() => this.cardOffset().x > 0);
  private scaleRawValue = computed(() => (this.windowSize() + Math.abs(this.cardOffset().x)) / this.windowSize());
  
  private acceptScale = computed(() =>
    ({scale: this.isOffsetPositive() ? this.scaleRawValue() : 1}));
  
  private acceptColor = computed(() =>
    ({backgroundColor: this.isAccepted() ? (this.ngxNightwind.isLight ? 'rgb(34, 197, 94)' : 'rgb(74, 222, 128)') : ''}));
  
  acceptStyle = computed(() =>
    ({...this.acceptScale(), ...this.acceptColor()}));
  
  private rejectScale = computed(() =>
    ({scale: !this.isOffsetPositive() ? this.scaleRawValue() : 1}));
  
  private rejectColor = computed(() =>
    ({backgroundColor: this.isRejected() ? (this.ngxNightwind.isLight ? 'rgb(239, 68, 68)' : 'rgb(248, 113, 113)') : ''}));
  
  rejectStyle = computed(() =>
    ({...this.rejectScale(), ...this.rejectColor()}));
  
  reject = () => this.nextCardEvent.emit(false);
  
  accept = () => this.nextCardEvent.emit(true);
}
