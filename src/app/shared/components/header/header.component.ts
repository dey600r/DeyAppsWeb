import { Component, inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, Event, RouterEvent, NavigationStart } from '@angular/router';
import { filter } from 'rxjs';

import { SharedModule } from '@modules/shared.module';

// LIBRARIES
import { Tooltip } from 'primeng/tooltip';
import { MenuItem } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import cssVars from 'css-vars-ponyfill';

// UTILS
import { Constants } from '@utils/constants';
import { environment } from '@environments/environment';

@Component({
    selector: 'app-header',
    imports: [ SharedModule ],
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  // INJECTABLES
  private readonly router: Router = inject(Router);
  private readonly translator: TranslateService = inject(TranslateService);
  
  @ViewChild(Tooltip) tooltip!: Tooltip;

  items: MenuItem[] = [];
  selectedItem: MenuItem;

  versionApp: string = `v${environment.lastVersion} - ${environment.lastUpdate}`;

  constructor() {
    cssVars();
  }

  ngOnInit(): void {
    this.items = [
      {
        label: this.translator.instant('COMMON.home'),
        icon: 'pi pi-fw pi-home',
        routerLink: [Constants.getRouteInfoDev()],
        root: Constants.ROUTE_HOME
      },
      {
        label: this.translator.instant('COMMON.infoMtm'),
        icon: 'icon-mtm',
        routerLink: [Constants.getRouteMTM()],
        root: Constants.ROUTE_INFO_MTM
      }
    ];
    
    this.router.events.pipe(
        filter((e: Event | RouterEvent): e is NavigationStart => e instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      const currentPath = this.items.find(x => event.url.includes(x.root));
      if(currentPath) 
        this.selectedItem = currentPath;
      else
        this.selectedItem = this.items[0];
    });
  }
  
  onTabChange(event: any) {
    this.router.navigate(event.routerLink);
  }

  showTooltip() {
    this.tooltip.activate();
  }

}
