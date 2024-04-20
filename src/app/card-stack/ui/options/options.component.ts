import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMoonSolid, heroSunSolid } from '@ng-icons/heroicons/solid';
import { NgxNightwind } from 'ngx-nightwind';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [
    NgIconComponent
  ],
  providers: [provideIcons({heroMoonSolid, heroSunSolid})],
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionsComponent {
  
  private ngxNightwind = inject(NgxNightwind);
  
  toggleDarkMode = () => this.ngxNightwind.toggle();
  
  getDarkModeIconName = () =>
    this.ngxNightwind.isLight ? 'heroMoonSolid' : 'heroSunSolid';
  
}
