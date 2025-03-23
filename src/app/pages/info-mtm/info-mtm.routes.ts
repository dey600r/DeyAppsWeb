import { Routes } from '@angular/router';
import { Constants } from '@utils/constants';

export const routes: Routes = [
  {
    path: '',
    redirectTo: Constants.ROUTE_INFO_APP,
    pathMatch: 'full'
  },
  {
    path: Constants.ROUTE_INFO_APP,
    loadComponent: () => import('@pages/info-mtm/info-app/info-app.component').then(m => m.InfoAppComponent)
  },
  {
    path: Constants.ROUTE_MTM_PRIVACIY_POLICY,
    loadComponent: () => import('@pages/info-mtm/mtm-privacy-policy/mtm-privacy-policy.component').then(m => m.MtmPrivacyPolicyComponent)
  }
];