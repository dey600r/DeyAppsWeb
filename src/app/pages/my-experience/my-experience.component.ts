import { Component, OnInit } from '@angular/core';

// LIBS
import { TranslateService } from '@ngx-translate/core';

// MODELS
import { InfoDeveloperModel, InfoIconModel, InfoProjectModel } from '@models/index';

// SERVICE
import { UtilsService } from '@services/index';

// UTILS
import { Constants } from '@utils/constants';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-my-experience',
  templateUrl: './my-experience.component.html',
  styleUrl: './my-experience.component.scss'
})
export class MyExperienceComponent implements OnInit {

  infoIconDeveloper: InfoIconModel = new InfoIconModel();
  infoProjects: InfoProjectModel = new InfoProjectModel();

  constructor(private utilService: UtilsService,
    private translator: TranslateService
  ) {}

  ngOnInit(): void {
    const assetsIcon: string = environment.pathIcons;

    this.infoIconDeveloper = this.utilService.getIconDeveloper();

    this.infoProjects = new InfoProjectModel('HOME.titleProjects',
      new InfoDeveloperModel(
        'COMMON.MTM_LARGE', 'HOME.descriptionProjects',
        [new InfoIconModel('pi pi-eye', this.translator.instant('COMMON.MTM_LARGE'), 'MtM', Constants.ROUTE_INFO_MTM,
          'button-gray-soft'),
          new InfoIconModel('pi pi-android', 'Android', 'MtM',
          (this.translator.currentLang === Constants.LANGUAGE_EN ? Constants.URL_MTM_ANDROID_EN : Constants.URL_MTM_ANDROID_ES),
          'button-gray', '', true),
        new InfoIconModel('pi pi-sitemap', 'Web', 'MtM', Constants.URL_MTM_WEB, 'button-gray-soft', '', true),
        new InfoIconModel('pi pi-microsoft', 'Windows', 'MtM',
          (this.translator.currentLang === Constants.LANGUAGE_EN ? Constants.URL_MTM_WINDOWS_EN : Constants.URL_MTM_WINDOWS_ES),
          'button-gray', '', true)],
      ),
      new InfoIconModel(`${assetsIcon}/icon.png`, this.translator.instant('COMMON.MTM_LARGE'), 'MtM', Constants.ROUTE_INFO_MTM));
  }
}
