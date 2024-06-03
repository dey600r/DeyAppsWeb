import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyExperienceRoutingModule } from './my-experience-routing.module';

import { MyExperienceComponent } from './my-experience.component';
import { ComponentModule } from '@modules/component.module';

import { PrimengModule } from '@shared/modules/primeng.module';

import { HttpClientModule } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ MyExperienceComponent ],
  imports: [
    PrimengModule,
    CommonModule,
    MyExperienceRoutingModule,
    HttpClientModule,
    ComponentModule,
    TranslateModule.forChild()
  ]
})
export class MyExperienceModule { }
