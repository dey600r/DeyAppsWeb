import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routes } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
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

const createTranslateLoader = (http: HttpClient): TranslateHttpLoader => {
  return new TranslateHttpLoader(http, environment.pathTranslate, '.json');
}

export class SetupTest {
  // public static SpyConfig = {
  //   analytics: jasmine.createSpyObj(firebaseFunctions, ['getAnalytics'])
  // };

  private static readonly config = {
      imports: [
        RouterModule.forRoot(routes),
        TooltipModule,
        CarouselModule,
        TabsModule,
        ButtonModule,
        TabViewModule,
        RadioButtonModule,
        DialogModule,
        FormsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
          }
        })
      ],
      declarations: [
      ],
      providers: [
        TranslateService,
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
        }),
        // { provide: firebaseFunctions, useValue: SetupTest.SpyConfig.analytics }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA ]
  };

  public static GetConfig(component: any): any {
    let result: any = SetupTest.config;
    result.declarations = [component];
    return result;
  }

  public static GetConfigs(components: any[]): any {
    let result: any = SetupTest.config;
    result.declarations = components;
    return result;
  }
}
