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
const browserLanguage = navigator.language || 'pt';
const i18nConfig: PoI18nConfig = {
  default: {
    language: browserLanguage,
    context: defaultContext,
    cache: false,
  },
  contexts: {
    general: {
      en: {
        teste: 'Texto do en-us App Final AAAA',
        str0003: 'App text',
      },
      pt: {
        teste: 'Texto do pt App Final',
        str0003: 'sttr 0003 PT',
      },
    },
    teste: {
      en: {
        teste: 'Texto do en-us App FinalLLLL',
        str0003: 'App text',
      },
    },
  },
};

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([PoHttpRequestModule, PoUiI18nLibModule, PoI18nModule.config(i18nConfig)]),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
  ],
};
