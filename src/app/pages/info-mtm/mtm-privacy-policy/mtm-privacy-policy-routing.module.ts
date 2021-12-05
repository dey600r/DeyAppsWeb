import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MtmPrivacyPolicyComponent } from './mtm-privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    component: MtmPrivacyPolicyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MtmPrivacyPolicyRoutingModule {}
