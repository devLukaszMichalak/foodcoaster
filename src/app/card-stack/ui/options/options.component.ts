import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { NgxNightwind } from 'ngx-nightwind';
import { heroMoon, heroSun } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [
    NgIconComponent
  ],
  providers: [provideIcons({heroMoon, heroSun})],
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionsComponent {
  
  private ngxNightwind = inject(NgxNightwind);
  
  toggleDarkMode = () => this.ngxNightwind.toggle();
  
  getDarkModeIconName = () =>
    this.ngxNightwind.isLight ? 'heroMoon' : 'heroSun';
  
}
