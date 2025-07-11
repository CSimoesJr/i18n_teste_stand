import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PoButtonModule, PoI18nService, PoPageModule, PoWidgetModule } from '@po-ui/ng-components';
import { defaultContext } from './app.config';
import { NewModule } from '../new-module/new-module.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PoPageModule, PoButtonModule, PoWidgetModule, NewModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'teste-i18n';
  literals: any = '';

  constructor(private poI18nService: PoI18nService) {
    this.loadTranslations(defaultContext);
  }

  title2: string = '';
  title3: string = '';
  description: string = '';
  selectedLanguage: string = 'pt-BR';
  translations: { [key: string]: string } = {};
  message: string = '';
  message2: string = '';

  changeLanguage(language: string, context: string): void {
    this.selectedLanguage = language;
    this.poI18nService.setLanguage(language);
    console.log('Estou aqui de novo', context);
    this.loadTranslations(context);
    console.log('Estou aqui de novo', language);
  }

  loadTranslations(context?: string): void {
    this.poI18nService
      .getLiterals({ context: context })
      .subscribe((literals) => {
        this.literals = literals;
        console.log('app: ', literals);
      });
  }
}
