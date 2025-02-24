import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

import { ComponentModule } from '@modules/component.module';

import { PrimengModule } from '@shared/modules/primeng.module';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({ declarations: [HomeComponent], imports: [PrimengModule,
        CommonModule,
        HomeRoutingModule,
        ComponentModule,
        TranslateModule.forChild()], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class HomeModule { }
