import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// CONFIGS
import { HeaderComponent } from '@shared/components/header/header.component';
import { BackgroundHeaderComponent } from '@shared/components/background-header/background-header.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { SharedModule } from '@shared/modules';


@NgModule({ 
  declarations: [
  ],
  imports: [
    HeaderComponent,
    FooterComponent,
    BackgroundHeaderComponent
    ],
    exports: [ 
      HeaderComponent,
      FooterComponent,
      BackgroundHeaderComponent,
      RouterModule,
      SharedModule
     ],
    schemas :[ CUSTOM_ELEMENTS_SCHEMA ]
  })

export class AppModule { }
