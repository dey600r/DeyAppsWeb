import { CUSTOM_ELEMENTS_SCHEMA, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routes } from 'src/app/app.routes';
import { provideRouter } from '@angular/router';

// PRIMENG
import { CarouselModule } from 'primeng/carousel';
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';

// LIBRARIES
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
// import * as firebaseFunctions from "firebase/analytics";

// UTILS
import { environment } from '@environments/environment';

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
        RadioButtonModule,
        DialogModule,
        FormsModule
      ],
      declarations: [
      ],
      providers: [
        provideRouter(routes),
        provideZoneChangeDetection({ eventCoalescing: true }), 
        provideHttpClient(withFetch(), withInterceptorsFromDi()),
        importProvidersFrom([TranslateModule.forRoot()]),
        provideTranslateHttpLoader({ prefix: environment.pathTranslate, suffix: '.json'}),
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
