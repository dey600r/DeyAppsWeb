import { Routes } from '@angular/router';
import { Constants } from '@utils/constants';

export const routes: Routes = [
  {
    path: '',
    redirectTo: Constants.getRouteInfoDev(),
    pathMatch: 'full'
  },
  {
    path: Constants.ROUTE_HOME,
    loadComponent: () => import('@pages/home/home.component').then(m => m.HomeComponent),
    loadChildren: () => import('@pages/home/home.routes').then(m => m.routes),
  },
  {
    path: Constants.ROUTE_INFO_MTM,
    loadComponent: () => import('@pages/info-mtm/info-mtm.component').then(m => m.InfoMtmComponent),
    loadChildren: () => import('@pages/info-mtm/info-mtm.routes').then(m => m.routes),
  },
  {
    path: '**',
    redirectTo: Constants.getRouteInfoDev()
  },
];