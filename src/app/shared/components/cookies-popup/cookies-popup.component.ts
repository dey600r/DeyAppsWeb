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
    styleUrls: ['./cookies-popup.component.scss'],
    standalone: false
})
export class CookiesPopupComponent {

  routeDeyAppsCookies: string = Constants.getRouteCookies();
  cookiesAccepted: boolean = false;

  constructor(private readonly location: Location,
              private readonly router: Router,
              private readonly utilsService: UtilsService,
              private readonly analyticService: AnalyticsService) {
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

  navigateToCookies() {
    this.router.navigate([this.routeDeyAppsCookies]);
  }
}
