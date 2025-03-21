import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrimengModule } from './primeng.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    PrimengModule,
    NgOptimizedImage
  ],
  exports: [
    CommonModule,
    PrimengModule,
    TranslateModule,
    RouterModule,
    FormsModule
  ],
  providers: []
})
export class SharedModule { }
