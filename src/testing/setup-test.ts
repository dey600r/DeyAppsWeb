import { ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

// PRIMENG
import { CarouselModule } from 'primeng/carousel';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';

// COMPONENTS
import { AppComponent } from 'src/app/app.component';
import { routes } from 'src/app/app-routing.module';
import { HomeComponent } from '@pages/home/home.component';
import { InfoMtmComponent } from '@pages/info-mtm/info-mtm.component';
import { MtmPrivacyPolicyComponent } from '@pages/info-mtm/mtm-privacy-policy/mtm-privacy-policy.component';

import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { IconDocComponent } from '@components/icon-doc/icon-doc.component';
import { IconProjectComponent } from '@components/icon-project/icon-project.component';
import { IconCarouselComponent } from '@components/icon-carousel/icon-carousel.component';
import { IconTabComponent } from '@components/icon-tab/icon-tab.component';
import { IconListCardComponent } from '@components/icon-list-card/icon-list-card.component';
import { IconLinksComponent } from '@components/icon-links/icon-links.component';
import { IconHeaderComponent } from '@components/icon-header/icon-header.component';
import { BackgroundHeaderComponent } from '@components/background-header/background-header.component';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '@environments/environment';

export class SetupTest {
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
          AppComponent,
          HomeComponent,
          InfoMtmComponent,
          MtmPrivacyPolicyComponent,
          HeaderComponent,
          FooterComponent,
          IconDocComponent,
          IconProjectComponent,
          IconCarouselComponent,
          IconTabComponent,
          IconListCardComponent,
          IconLinksComponent,
          IconHeaderComponent,
          BackgroundHeaderComponent
        ],
        providers: [
          TranslateService,
          ChangeDetectorRef
        ],
        schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    };
}

// tslint:disable-next-line: typedef
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, environment.pathTranslate, '.json');
}
