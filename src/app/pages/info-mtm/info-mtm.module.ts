import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoMtmRoutingModule } from './info-mtm-routing.module';

import { InfoMtmComponent } from './info-mtm.component';
import { ComponentModule } from '@modules/component.module';

import { PrimengModule } from '@shared/modules/primeng.module';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({ declarations: [InfoMtmComponent], imports: [PrimengModule,
        CommonModule,
        InfoMtmRoutingModule,
        ComponentModule,
        TranslateModule.forChild()], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class InfoMtmModule { }
