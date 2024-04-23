import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, signal, Signal, viewChild } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { NgxNightwind } from 'ngx-nightwind';
import { heroBars3, heroMoon, heroSun, heroXMark } from '@ng-icons/heroicons/outline';
import { fadeInRight, fadeOutRight, swing } from 'ng-animate';
import { transition, trigger, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [
    NgIconComponent
  ],
  providers: [provideIcons({heroMoon, heroSun, heroBars3, heroXMark})],
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('swing', [
      transition('false => true, true => false', useAnimation(swing, {params: {timing: 0.5}}))]
    ),
    trigger('fadeInOut', [
        transition(':enter', useAnimation(fadeInRight, {params: {timing: 0.2}})),
        transition(':leave', useAnimation(fadeOutRight, {params: {timing: 0.2}}))
      ]
    )
  ]
})
export class OptionsComponent {
  
  private ngxNightwind = inject(NgxNightwind);
  
  private menuDivRef: Signal<ElementRef<HTMLDivElement>> = viewChild.required('dropdownContent');
  private menuDiv = computed(() => this.menuDivRef().nativeElement);
  
  isMenuOpen = signal<boolean>(false);
  
  toggleDarkMode = () => this.ngxNightwind.toggle();
  
  getMenuIconName = () =>
    this.isMenuOpen() ? 'heroXMark' : 'heroBars3';
  
  getDarkModeIconName = () =>
    this.ngxNightwind.isLight ? 'heroMoon' : 'heroSun';
  
  toggleMenu() {
    this.isMenuOpen.update(isOpen => !isOpen);
  }
}
