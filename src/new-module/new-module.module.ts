import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PoI18nConfig, PoI18nModule } from '@po-ui/ng-components';
import { PoUiI18nLibModule } from 'po-ui-i18n-lib';

export const defaultContext = 'general';
const browserLanguage = navigator.language || 'pt';
const i18nConfig: PoI18nConfig = {
  default: {
    language: browserLanguage,
    context: defaultContext,
    cache: false
  },
  contexts: {
    general: {
      en: {
        str0003: 'Subscribe text context GENERAL',
        teste: 'Text English Context GENERAL'
      },
      pt: {
        str0003: 'Sobrescrevendo o texto do contexto GENERAL',
        teste: 'Texto teste contexto GENERAL'
      }
    },
    teste: {
      en: {
        str0003: 'App text',
        teste: 'Texto do en-us App FinalLLLL'
      }
    },
    hcm: {
      url: 'http://localhost:3000/hcm'
    }
  }
};

@NgModule({
  declarations: [],
  bootstrap: [],
  imports: [CommonModule, PoUiI18nLibModule, PoI18nModule.config(i18nConfig)],
  providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class NewModule {}
