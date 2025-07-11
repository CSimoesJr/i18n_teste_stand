import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { PoHttpRequestModule, PoI18nConfig, PoI18nModule } from '@po-ui/ng-components';
import { PoUiI18nLibModule } from 'po-ui-i18n-lib';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export const defaultContext = 'general';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([PoHttpRequestModule]),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
  ],
};
