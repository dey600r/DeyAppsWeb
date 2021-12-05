import { Component, OnInit } from '@angular/core';
import { Constants } from '@utils/constants';
import { TranslateService } from '@ngx-translate/core';
import { InfoDeveloperModel, InfoIconModel, InfoProjectModel } from '@app/core/models';

import { environment } from '@environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  infoIconDeveloper: InfoIconModel = new InfoIconModel();
  infoDeveloper: InfoDeveloperModel = new InfoDeveloperModel();
  infoProjects: InfoProjectModel = new InfoProjectModel();
  infoSkills: InfoDeveloperModel = new InfoDeveloperModel();
  infoHobbies: InfoDeveloperModel = new InfoDeveloperModel();

  constructor(private translator: TranslateService) {
  }

  ngOnInit(): void {
    const assetsIcon: string = environment.pathIcons;

    this.infoIconDeveloper = new InfoIconModel(`${assetsIcon}/icon-developer.png`, '', 'icon-developer', '',
      '', 'item-developer');

    this.infoDeveloper = new InfoDeveloperModel('HOME.titleInfoDeveloper', 'HOME.descriptionInfoDeveloper');
    this.infoProjects = new InfoProjectModel('HOME.titleProjects',
      new InfoDeveloperModel(
        'COMMON.MTM_LARGE', 'HOME.descriptionProjects',
        [new InfoIconModel('pi pi-eye', this.translator.instant('COMMON.MTM_LARGE'), 'MtM', Constants.ROUTE_INFO_MTM,
          'button-gray'),
        new InfoIconModel('pi pi-android', 'Android', 'MtM',
          (this.translator.currentLang === Constants.LANGUAGE_EN ? Constants.URL_MTM_ANDROID_EN : Constants.URL_MTM_ANDROID_ES),
          'button-gray', '', true),
          new InfoIconModel('pi pi-microsoft', 'Windows', 'MtM',
          (this.translator.currentLang === Constants.LANGUAGE_EN ? Constants.URL_MTM_WINDOWS_EN : Constants.URL_MTM_WINDOWS_ES),
          'button-gray', '', true)],
      ),
      new InfoIconModel(`${assetsIcon}/icon.png`, this.translator.instant('COMMON.MTM_LARGE'), 'MtM', Constants.ROUTE_INFO_MTM));
    this.infoSkills = new InfoDeveloperModel(
      'HOME.titleTechnologicalSkills', 'HOME.descriptionTechnologicalSkills',
      [
        new InfoIconModel(`${assetsIcon}/icon-angular.png`, 'Angular', 'Angular', Constants.URL_ANGULAR),
        new InfoIconModel(`${assetsIcon}/icon-net.png`, 'NetCore', 'NetCore', Constants.URL_NET_CORE),
        new InfoIconModel(`${assetsIcon}/icon-ionic.png`, 'Ionic', 'Ionic', Constants.URL_IONIC),
        new InfoIconModel(`${assetsIcon}/icon-sql.svg`,
          this.translator.instant('COMMON.iconDesignedBy', {url: 'Freepik ' + Constants.ICON_URL_FREE}), 'SQL',
          Constants.ICON_URL_FREEPIK)
      ]);
    this.infoHobbies = new InfoDeveloperModel(
      'HOME.titleHobbies', 'HOME.descriptionHobbies',
      [
        new InfoIconModel(`${assetsIcon}/icon-moto.png`, '', 'Moto'),
        new InfoIconModel(`${assetsIcon}/icon-android.png`, 'Android', 'Android', Constants.URL_ANDROID),
        new InfoIconModel(`${assetsIcon}/icon-game.svg`,
          this.translator.instant('COMMON.iconDesignedBy', {url: 'Freepik ' + Constants.ICON_URL_FREE}), 'Game',
          Constants.ICON_URL_FREEPIK),
        new InfoIconModel(`${assetsIcon}/icon-skate.svg`,
          this.translator.instant('COMMON.iconDesignedBy', {url: 'Freepik ' + Constants.ICON_URL_FREE}), 'Skate',
          Constants.ICON_URL_FREEPIK)
      ]);
  }
}
