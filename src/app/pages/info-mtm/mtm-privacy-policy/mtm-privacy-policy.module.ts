import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtmPrivacyPolicyComponent } from './mtm-privacy-policy.component';
import { MtmPrivacyPolicyRoutingModule } from './mtm-privacy-policy-routing.module';
import { ComponentModule } from '@modules/component.module';

import { PrimengModule } from '@shared/modules/primeng.module';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({ declarations: [MtmPrivacyPolicyComponent], imports: [PrimengModule,
        CommonModule,
        MtmPrivacyPolicyRoutingModule,
        ComponentModule,
        TranslateModule.forChild()], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class MtmPrivacyPolicyModule { }