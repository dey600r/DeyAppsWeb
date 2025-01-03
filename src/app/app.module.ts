import { NgModule, Injector, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

// LIBRARIES
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

// ROUTING
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// MODULES
import { MainModule } from '@modules/main.module';

// CONFIGS
import { environment } from '@environments/environment';
import { LOCATION_INITIALIZED } from '@angular/common';

// UTILS
import { Constants } from '@utils/constants';

@NgModule({ 
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    MainModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        // Register the ServiceWorker as soon as the app is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
    })], 
    providers: [{
        provide: APP_INITIALIZER,
        useFactory: appInitializerFactory,
        deps: [TranslateService, Injector],
        multi: true
    },
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(), 
    providePrimeNG({ 
      theme: {
          preset: Aura,
          options: {
            darkModeSelector: false,
            cssLayer: {
              name: 'primeng',
              order: 'theme/variables, styles, primeng'
          }
        }
      }
    })
] })

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


