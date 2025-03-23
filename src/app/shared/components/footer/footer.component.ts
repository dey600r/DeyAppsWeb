import { Component, inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, Event } from '@angular/router';

import { SharedModule } from '@modules/shared.module';

// LIBRARIES
import cssVars from 'css-vars-ponyfill';

// UTILS
import { Constants } from '@utils/constants';

@Component({
    selector: 'app-footer',
    imports: [ SharedModule ],
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // INJECTABLES
  private readonly location: Location = inject(Location);
  private readonly router: Router = inject(Router);

  selectedRoute: any = {}
              
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
