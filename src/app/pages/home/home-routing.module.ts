import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CookiesModule } from './cookies/cookies.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '', // child route path
        loadChildren: () => import('./cookies/cookies.module').then(m => m.CookiesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, CookiesModule],
})
export class HomeRoutingModule {}
