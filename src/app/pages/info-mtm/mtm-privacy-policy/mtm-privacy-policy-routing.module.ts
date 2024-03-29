import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MtmPrivacyPolicyComponent } from './mtm-privacy-policy.component';
import { Constants } from '@utils/constants';

const routes: Routes = [
  {
    path: Constants.ROUTE_MTM_PRIVACIY_POLICY,
    component: MtmPrivacyPolicyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MtmPrivacyPolicyRoutingModule {}
