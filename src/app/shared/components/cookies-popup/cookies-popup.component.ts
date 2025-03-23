import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { SharedModule } from '@modules/shared.module';

// SERVICES
import { UtilsService, AnalyticsService } from '@services/index';

// UTILS
import { Constants } from '@utils/constants';

@Component({
    selector: 'app-cookies-popup',
    imports: [ SharedModule ],
    standalone: true,
    templateUrl: './cookies-popup.component.html',
    styleUrls: ['./cookies-popup.component.scss']
})
export class CookiesPopupComponent {

  // INJECTABLES
  private readonly router: Router = inject(Router);
  private readonly utilsService: UtilsService = inject(UtilsService);
  private readonly analyticService: AnalyticsService = inject(AnalyticsService);

  cookiesAccepted: boolean = true;

  constructor() {
    this.checkCookies();
  }

  acceptCookies() {
    this.utilsService.acceptCookies();
    this.checkCookies();
    this.analyticService.initializeApp();
  }

  checkCookies() {
    this.cookiesAccepted = this.utilsService.isCookiesAccepted();
  }

  navigateToCookies() {
    this.router.navigate([Constants.getRouteCookies()]);
  }
}
