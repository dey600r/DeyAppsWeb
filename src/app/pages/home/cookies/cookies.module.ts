import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookiesComponent } from './cookies.component';
import { CookiesRoutingModule } from './cookies-routing.module';

import { ComponentModule } from '@modules/component.module';

import { PrimengModule } from '@shared/modules/primeng.module';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({ declarations: [CookiesComponent], imports: [PrimengModule,
        CommonModule,
        CookiesRoutingModule,
        ComponentModule,
        TranslateModule.forChild()], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class CookiesModule { }
