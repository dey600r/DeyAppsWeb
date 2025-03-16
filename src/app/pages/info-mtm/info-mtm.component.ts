import { Component, inject, OnInit } from '@angular/core';

// SERVICES
import { UtilsService } from '@services/index';

// MODELS
import { InfoIconModel } from '@models/index';

// UTILS
import { InfoMtmModule } from './info-mtm.module';

@Component({
    selector: 'app-info-mtm',
    imports: [ InfoMtmModule],
    standalone: true,
    templateUrl: './info-mtm.component.html',
    styleUrls: ['./info-mtm.component.scss'],
})
export class InfoMtmComponent implements OnInit {

  // INJECTABLES
  private readonly utilService: UtilsService = inject(UtilsService);

  infoIconMtM: InfoIconModel = new InfoIconModel();

  ngOnInit(): void {

    this.infoIconMtM = this.utilService.getIconMtm();
   
  }

}
