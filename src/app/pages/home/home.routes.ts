import { Routes } from '@angular/router';
import { Constants } from '@utils/constants';

export const routes: Routes = [
    {
        path: '',
        redirectTo: Constants.ROUTE_INFO_DEV,
        pathMatch: 'full'
    },
    {
        path: Constants.ROUTE_INFO_DEV,
        loadComponent: () => import('@pages/home/info-dev/info-dev.component').then(m => m.InfoDevComponent),
    },
    {
        path: Constants.ROUTE_COOKIES,
        loadComponent: () => import('@pages/home/cookies/cookies.component').then(m => m.CookiesComponent)
    }
];