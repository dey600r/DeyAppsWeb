import { Injectable } from '@angular/core';

// LIBRARIES
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// SERVICES
import { UtilsService } from './utils.service';

// UTILS
import * as loginData from '@assets/firebase/login-firebase.json';
// import * as loginData from '@assets/firebase/private-login-firebase.json';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private utilsService: UtilsService) {
    this.initializeApp();
   }

   initializeApp() {
    if(this.utilsService.isCookiesAccepted()) {
      getAnalytics(initializeApp(loginData))
    }
   }

   logEvent(title: string) {
    if(this.utilsService.isCookiesAccepted()) {
      logEvent(getAnalytics(), title);
    }
   }

}
