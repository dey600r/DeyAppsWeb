import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartchatPolicyComponent } from './smartchat-policy.component';

const routes: Routes = [
  {
    path: '',
    component: SmartchatPolicyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartchatPolicyRoutingModule {}
