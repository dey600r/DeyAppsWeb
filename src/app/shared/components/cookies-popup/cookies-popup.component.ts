import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, Event } from '@angular/router';

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

  constructor(private location: Location,
              private router: Router,
              private utilsService: UtilsService,
              private analyticService: AnalyticsService) {
    this.router.events.subscribe((event: Event) => {
      if(this.location.path().includes(Constants.ROUTE_HOME_COOKIES)) 
        this.cookiesAccepted = true;
      else
        this.checkCookies();
    });
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
