import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoMtmComponent } from './info-mtm.component';
import { MtmPrivacyPolicyModule } from './mtm-privacy-policy/mtm-privacy-policy.module';

const routes: Routes = [
  {
    path: '',
    component: InfoMtmComponent,
    children: [
      {
        path: '', // child route path
        loadChildren: () => import('./mtm-privacy-policy/mtm-privacy-policy.module').then(m => m.MtmPrivacyPolicyModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, MtmPrivacyPolicyModule]
})
export class InfoMtmRoutingModule {}
