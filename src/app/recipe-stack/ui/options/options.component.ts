import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { NgxNightwind } from 'ngx-nightwind';
import { heroBars3, heroMoon, heroSun, heroXMark } from '@ng-icons/heroicons/outline';
import { fadeInDown, fadeInRight, fadeOutRight, swing } from 'ng-animate';
import { transition, trigger, useAnimation } from '@angular/animations';
import { ionEyeOffOutline, ionImageOutline, ionRefreshOutline } from '@ng-icons/ionicons';
import { RecipeService } from '../../../common/data/recipe/recipe.service';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [
    NgIconComponent
  ],
  providers: [provideIcons({
    heroMoon,
    heroSun,
    heroBars3,
    heroXMark,
    ionImageOutline,
    ionEyeOffOutline,
    ionRefreshOutline
  })],
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
    ),
    trigger('fadeDown', [
        transition(':enter', useAnimation(fadeInDown, {params: {timing: 0.5}}))
      ]
    )
  ]
})
export class OptionsComponent {
  
  #ngxNightwind = inject(NgxNightwind);
  #recipeService = inject(RecipeService);
  
  isMenuOpen = signal<boolean>(false);
  isDarkMode = () => this.#ngxNightwind.isDark;
  isImageOnly = this.#recipeService.isImageOnly;
  
  refreshButtonAnimationOscillator = false;
  
  toggleDarkMode = () => {
    const metaTag = document.getElementById('themeColorMeta');
    
    if (this.#ngxNightwind.isDark) {
      metaTag?.setAttribute('content', '#f0fdfa');
      this.#ngxNightwind.enableLight();
    } else {
      metaTag?.setAttribute('content', '#042f2e');
      this.#ngxNightwind.enableDark();
    }
  };
  
  toggleOnlyImages = () => this.#recipeService.toggleImageOnlyMode();
  
  resetSwiping = () => {
    this.#recipeService.reset();
    this.refreshButtonAnimationOscillator = !this.refreshButtonAnimationOscillator;
  };
  
  toggleMenu = () => this.isMenuOpen.update(isOpen => !isOpen);
  
  getMenuIconName = () =>
    this.isMenuOpen() ? 'heroXMark' : 'heroBars3';
  
  getDarkModeIconName = () =>
    this.#ngxNightwind.isLight ? 'heroMoon' : 'heroSun';
  
  getImagesOnlyIconName() {
    return this.isImageOnly() ? 'ionEyeOffOutline' : 'ionImageOutline';
  }
}
