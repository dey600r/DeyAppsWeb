import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Constants } from './core/utils/constants';

export const routes: Routes = [
  {
    path: '',
    redirectTo: Constants.ROUTE_HOME,
    pathMatch: 'full'
  },
  {
    path: Constants.ROUTE_HOME,
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: Constants.ROUTE_INFO_MTM,
    loadChildren: () => import('./pages/info-mtm/info-mtm.module').then(m => m.InfoMtmModule),
  },
  {
    path: Constants.ROUTE_MTM_PRIVACIY_POLICY,
    loadChildren: () => import('./pages/info-mtm/mtm-privacy-policy/mtm-privacy-policy.module').then(m => m.MtmPrivacyPolicyModule)
  },
  {
    path: '**',
    redirectTo: Constants.ROUTE_HOME
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
