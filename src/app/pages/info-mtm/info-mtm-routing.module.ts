import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Constants } from '@utils/constants';

import { InfoMtmComponent } from './info-mtm.component';

const routes: Routes = [
  {
    path: '',
    component: InfoMtmComponent,
    // children: [
    //   {
    //     path: Constants.ROUTE_MTM_PRIVACIY_POLICY, // child route path
    //     loadChildren: () => import('./mtm-privacy-policy/mtm-privacy-policy.module').then(m => m.MtmPrivacyPolicyModule)
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoMtmRoutingModule {}
