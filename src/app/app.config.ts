import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideNgxNightwind } from 'ngx-nightwind';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideServiceWorker } from '@angular/service-worker';
import { provideMetaThemeColor } from './meta-theme-color.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideNgxNightwind(),
    provideAnimations(),
    provideMetaThemeColor(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })]
};
