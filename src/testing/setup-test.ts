import { CUSTOM_ELEMENTS_SCHEMA, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { HttpClient, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routes } from 'src/app/app.routes';
import { provideRouter, RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// PRIMENG
import { CarouselModule } from 'primeng/carousel';
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';

// LIBRARIES
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
// import * as firebaseFunctions from "firebase/analytics";

// UTILS
import { environment } from '@environments/environment';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

const createTranslateLoader = (http: HttpClient): TranslateHttpLoader => {
  return new TranslateHttpLoader(http, environment.pathTranslate, '.json');
}

export class SetupTest {
  // public static SpyConfig = {
  //   analytics: jasmine.createSpyObj(firebaseFunctions, ['getAnalytics'])
  // };

  private static readonly config = {
      imports: [
        TooltipModule,
        CarouselModule,
        TabsModule,
        ButtonModule,
        TabViewModule,
        RadioButtonModule,
        DialogModule,
        FormsModule
      ],
      declarations: [
      ],
      providers: [
        provideRouter(routes),
        provideClientHydration(withEventReplay()), 
        provideZoneChangeDetection({ eventCoalescing: true }), 
        provideHttpClient(withFetch(), withInterceptorsFromDi()),
        provideAnimationsAsync(),
        importProvidersFrom([
          TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: (createTranslateLoader),
              deps: [HttpClient]
            }
          }),
        ]),
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
        // { provide: firebaseFunctions, useValue: SetupTest.SpyConfig.analytics }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA ]
  };

  public static GetConfig(component: any): any {
    let result: any = SetupTest.config;
    result.imports = [component];
    return result;
  }

  public static GetConfigs(components: any[]): any {
    let result: any = SetupTest.config;
    result.imports = components;
    return result;
  }
}
