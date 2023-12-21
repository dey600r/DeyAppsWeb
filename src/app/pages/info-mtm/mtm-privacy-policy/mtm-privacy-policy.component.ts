import { Component, OnInit } from '@angular/core';

// SERVICES
import { AnalyticsService, UtilsService } from '@services/index';

// UTILS
import { InfoIconModel } from '@models/index';

@Component({
  selector: 'app-mtm-privacy-policy',
  templateUrl: './mtm-privacy-policy.component.html',
  styleUrls: ['./mtm-privacy-policy.component.scss']
})
export class MtmPrivacyPolicyComponent implements OnInit {

  infoIconMtM: InfoIconModel = new InfoIconModel();

  constructor(private utilService: UtilsService,
              private analyticService: AnalyticsService) { }

  ngOnInit(): void {
    this.analyticService.logEvent('load_privacy_policy');
    this.infoIconMtM = this.utilService.getIconMtm();
  }

}
