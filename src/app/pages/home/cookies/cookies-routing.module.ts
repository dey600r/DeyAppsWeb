import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CookiesComponent } from './cookies.component';
import { Constants } from '@utils/constants';

const routes: Routes = [
  {
    path: Constants.ROUTE_HOME_COOKIES,
    component: CookiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CookiesRoutingModule {}
