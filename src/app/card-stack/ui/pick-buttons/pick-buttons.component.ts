import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroCheckSolid, heroXMarkSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-pick-buttons',
  standalone: true,
  imports: [
    NgIconComponent
  ],
  providers: [provideIcons({heroCheckSolid, heroXMarkSolid})],
  templateUrl: './pick-buttons.component.html',
  styleUrl: './pick-buttons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PickButtonsComponent {

}
