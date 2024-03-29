import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

import { MenuItem } from 'primeng/api';
import { Constants } from '@app/core/utils/constants';
import { Router, Event } from '@angular/router';
import cssVars from 'css-vars-ponyfill';
import { Tooltip } from 'primeng/tooltip';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  @ViewChild(Tooltip) tooltip!: Tooltip;

  items: MenuItem[] = [];
  selectedItem: MenuItem;

  versionApp: string = `v${environment.lastVersion} - ${environment.lastUpdate}`;

  constructor(private location: Location,
              private router: Router,
              private translator: TranslateService) {
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
    this.router.events.subscribe((event: Event) => {
      if (this.location.path().includes(Constants.ROUTE_INFO_MTM)) {
        this.selectedItem = this.items[1];
      } else {
        this.selectedItem = this.items[0];
      }
    });
  }

  showTooltip() {
    this.tooltip.activate();
  }

}
