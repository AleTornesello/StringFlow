import { HttpClient } from '@angular/common/http';
import {
  provideTransloco,
  Translation,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  translocoConfig,
  TranslocoLoader,
  TranslocoModule,
  TranslocoService,
} from '@ngneat/transloco';
import { APP_INITIALIZER, Injectable, isDevMode, NgModule, } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";
import { tap } from "rxjs";

@Injectable({providedIn: 'root'})
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private _http: HttpClient, private _primengConfig: PrimeNGConfig) {
  }

  getTranslation(lang: string) {
    return this._http.get<Translation>(`/assets/i18n/${lang}.json`)
      .pipe(tap((translation: Translation) => {
        this._primengConfig.setTranslation(translation["primeng"]);
      }));
  }
}

@NgModule({
  exports: [TranslocoModule],
  providers: [
    provideTransloco({
      config: {
        availableLangs: [
          'en',
        ],
        defaultLang: 'en',
        fallbackLang: 'en',
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
    })
  ],
})
export class TranslocoRootModule {
}
