import { Component } from '@angular/core';

// SERVICES
import { UtilsService, AnalyticsService } from '@services/index';

// UTILS
import { Constants } from '@utils/constants';

@Component({
  selector: 'app-cookies-popup',
  templateUrl: './cookies-popup.component.html',
  styleUrls: ['./cookies-popup.component.scss']
})
export class CookiesPopupComponent {

  routeDeyAppsCookies: string = Constants.getRouteCookies();
  cookiesAccepted: boolean = false;

  constructor(private utilsService: UtilsService,
              private analyticService: AnalyticsService) {
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
}
