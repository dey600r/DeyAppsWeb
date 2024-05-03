import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartchatPolicyRoutingModule } from './smartchat-policy-routing.module';

import { ComponentModule } from '@modules/component.module';

import { PrimengModule } from '@shared/modules/primeng.module';

import { HttpClientModule } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';
import { SmartchatPolicyComponent } from './smartchat-policy.component';

@NgModule({
  declarations: [ SmartchatPolicyComponent ],
  imports: [
    PrimengModule,
    CommonModule,
    SmartchatPolicyRoutingModule,
    HttpClientModule,
    ComponentModule,
    TranslateModule.forChild()
  ],
  providers: [ ]
})
export class SmartchatPolicyModule { }
