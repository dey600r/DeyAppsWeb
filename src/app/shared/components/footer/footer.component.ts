import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, Event } from '@angular/router';

// LIBRARIES
import cssVars from 'css-vars-ponyfill';

// UTILS
import { Constants } from '@utils/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  selectedRoute: any = {}

  constructor(private location: Location,
              private router: Router) {}
              
  ngOnInit(): void {
    cssVars();

    const routes: any = [
      {
        title: 'COOKIES.cookies',
        route: Constants.getRouteCookies()
      },
      {
      title: 'POLICY_PRIVACY.mtmPrivacyPolicy',
      route: Constants.getRoutePrivacyPolicy()
      }
    ];

    this.router.events.subscribe((event: Event) => {
      if (this.location.path().includes(Constants.ROUTE_INFO_MTM)) {
        this.selectedRoute = routes[1];
      } else {
        this.selectedRoute = routes[0];
      }
    });
  }

}
