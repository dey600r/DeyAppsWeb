import { ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';

// PRIMENG
import { CarouselModule } from 'primeng/carousel';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';

// LIBRARIES
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import * as firebaseFunctions from "firebase/analytics";

import { environment } from '@environments/environment';

const createTranslateLoader = (http: HttpClient): TranslateHttpLoader => {
  return new TranslateHttpLoader(http, environment.pathTranslate, '.json');
}

export class SetupTest {
  // public static SpyConfig = {
  //   analytics: jasmine.createSpyObj(firebaseFunctions, ['getAnalytics'])
  // };

  static config = {
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes(routes),
        TooltipModule,
        CarouselModule,
        TabMenuModule,
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
        ChangeDetectorRef
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
