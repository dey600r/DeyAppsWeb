import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { BackgroundHeaderComponent } from '@components/background-header/background-header.component';

import { PrimengModule } from './primeng.module';

import { HttpClientModule } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BackgroundHeaderComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    HttpClientModule,
    TranslateModule.forChild()
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BackgroundHeaderComponent
  ],
  providers: []
})
export class MainModule { }
