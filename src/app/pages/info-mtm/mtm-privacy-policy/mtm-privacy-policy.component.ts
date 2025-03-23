import { Component, inject, OnInit } from '@angular/core';

// SERVICES
import { AnalyticsService, UtilsService } from '@services/index';

// UTILS
import { InfoIconModel } from '@models/index';
import { InfoMtmModule } from '../info-mtm.module';

@Component({
    selector: 'app-mtm-privacy-policy',
    imports: [ InfoMtmModule],
    standalone: true,
    templateUrl: './mtm-privacy-policy.component.html',
    styleUrls: ['./mtm-privacy-policy.component.scss'],
})
export class MtmPrivacyPolicyComponent implements OnInit {

  // INJECTABLES
  private readonly utilService: UtilsService = inject(UtilsService);
  private readonly analyticService: AnalyticsService = inject(AnalyticsService);

  infoIconMtM: InfoIconModel = new InfoIconModel();

  ngOnInit(): void {
    this.analyticService.logEvent('load_privacy_policy');
    this.infoIconMtM = this.utilService.getIconMtm();
  }

}
