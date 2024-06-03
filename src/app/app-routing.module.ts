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
    path: Constants.ROUTE_MY_EXPERIENCE,
    loadChildren: () => import('./pages/my-experience/my-experience.module').then(m => m.MyExperienceModule),
  },
  {
    path: '**',
    redirectTo: Constants.ROUTE_HOME
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
