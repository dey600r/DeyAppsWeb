import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconDocComponent } from '@components/icon-doc/icon-doc.component';
import { IconProjectComponent } from '@components/icon-project/icon-project.component';
import { IconCarouselComponent } from '@components/icon-carousel/icon-carousel.component';
import { IconTabComponent } from '@components/icon-tab/icon-tab.component';
import { IconListCardComponent } from '@components/icon-list-card/icon-list-card.component';
import { IconLinksComponent } from '@components/icon-links/icon-links.component';
import { IconHeaderComponent } from '@components/icon-header/icon-header.component';

import { PrimengModule } from './primeng.module';

import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IconDocComponent,
    IconProjectComponent,
    IconCarouselComponent,
    IconTabComponent,
    IconListCardComponent,
    IconLinksComponent,
    IconHeaderComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  exports: [
    IconDocComponent,
    IconProjectComponent,
    IconCarouselComponent,
    IconTabComponent,
    IconListCardComponent,
    IconLinksComponent,
    IconHeaderComponent
  ],
  providers: []
})
export class ComponentModule { }
