import { Component, inject, OnInit } from '@angular/core';

// SERVICES
import { HomeModule } from './home.module';
import { AnalyticsService, UtilsService } from '@services/index';

// MODELS
import { InfoIconModel } from '@models/index';

@Component({
    selector: 'app-home',
    imports: [ HomeModule ],
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // INJECTABLES
  private readonly utilService: UtilsService = inject(UtilsService);
  private readonly analyticService: AnalyticsService = inject(AnalyticsService);

  infoIconDeveloper: InfoIconModel = new InfoIconModel();

  ngOnInit(): void {
    this.analyticService.logEvent('load_home');

    this.infoIconDeveloper = this.utilService.getIconDeveloper();

    
  }
}
