import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideNgxNightwind } from 'ngx-nightwind';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideNgxNightwind('light'), provideAnimations()]
};
