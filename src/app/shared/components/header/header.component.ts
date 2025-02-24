import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { MenuItem } from 'primeng/api';
import { Constants } from '@app/core/utils/constants';
import { Router, Event, RouterEvent, NavigationStart } from '@angular/router';
import cssVars from 'css-vars-ponyfill';
import { Tooltip } from 'primeng/tooltip';
import { environment } from '@environments/environment';
import { filter } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class HeaderComponent implements OnInit {

  @ViewChild(Tooltip) tooltip!: Tooltip;

  items: MenuItem[] = [];
  selectedItem: MenuItem;

  versionApp: string = `v${environment.lastVersion} - ${environment.lastUpdate}`;

  constructor(private readonly router: Router,
              private readonly translator: TranslateService) {
    cssVars();
  }

  ngOnInit(): void {
    this.items = [
      {
        label: this.translator.instant('COMMON.home'),
        icon: 'pi pi-fw pi-home',
        routerLink: [Constants.ROUTE_HOME]
      },
      {
        label: this.translator.instant('COMMON.infoMtm'),
        icon: 'icon-mtm',
        routerLink: [Constants.ROUTE_INFO_MTM]
      }
    ];
    
    this.router.events.pipe(
        filter((e: Event | RouterEvent): e is NavigationStart => e instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      const currentPath = this.items.find(x => event.url.includes(x.routerLink));
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
