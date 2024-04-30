import { APP_INITIALIZER, EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

export const provideMetaThemeColor = (): EnvironmentProviders =>
  makeEnvironmentProviders([
    {provide: APP_INITIALIZER, useFactory: () => initializeThemeColorMeta, multi: true}
  ]);

const initializeThemeColorMeta = () => {
  
  /**
   * Retrieves the initial color mode based on localStorage, user preferences,
   * or default mode.
   * @returns The initial color mode.
   */
  const getInitialColorMode = (): string => {
    const persistedColorPreference = window.localStorage.getItem('nightwind-mode');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';
    if (hasPersistedPreference) {
      return persistedColorPreference;
    }
    
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }
    
    return 'light';
  };
  
  
  const metaTag = document.getElementById('themeColorMeta');
  if (getInitialColorMode() == 'light') {
    metaTag?.setAttribute('content', '#f0fdfa');
  } else {
    metaTag?.setAttribute('content', '#042f2e');
  }
};
