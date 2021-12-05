import { NgModule, Injector, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from '@modules/main.module';

import { environment } from '@environments/environment';
import { LOCATION_INITIALIZED } from '@angular/common';
import { Constants } from '@utils/constants';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, Injector],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, environment.pathTranslate, '.json');
}

export function appInitializerFactory(translate: TranslateService, injector: Injector): any {
  return () => new Promise<any>((resolve: any) => {
    const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
    locationInitialized.then(() => {
      let userLang = navigator.language.split('-')[0];
      userLang = /(es|en)/gi.test(userLang) ? userLang : Constants.LANGUAGE_EN;
      translate.setDefaultLang(userLang);
      translate.use(userLang).subscribe(() => {
        console.warn(`Successfully initialized '${userLang}' language.'`);
      }, err => {
        console.error(`Problem with '${userLang}' language initialization.'`);
      }, () => {
        resolve(null);
      });
    });
  });
}
