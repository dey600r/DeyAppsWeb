import { Component, OnInit } from '@angular/core';
import { UtilsService } from '@app/core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '@environments/environment';
import { InfoDeveloperModel, InfoIconModel, InfoTabModel, InfoProjectCardModel, InfoThemeModel } from '@models/index';
import { Constants } from '@utils/constants';
import { InfoCardModel } from '@app/core/models/info-card.model';
import { InfoBaseIconModel } from '@app/core/models/info-base.model';

@Component({
  selector: 'app-info-mtm',
  templateUrl: './info-mtm.component.html',
  styleUrls: ['./info-mtm.component.scss']
})
export class InfoMtmComponent implements OnInit {


  infoIconMtM: InfoIconModel = new InfoIconModel();
  infoListCard: InfoProjectCardModel = new InfoProjectCardModel();
  infoImageMtM: InfoTabModel[] = [];
  infoLinksMtm: InfoBaseIconModel [] = [];
  infoMtMFree: InfoDeveloperModel = new InfoDeveloperModel();
  infoLinksMtmFree: InfoBaseIconModel[] = [];
  infoMtM: InfoDeveloperModel = new InfoDeveloperModel();

  constructor(public translator: TranslateService,
              private utilService: UtilsService) {
  }

  ngOnInit(): void {
    const assetsIcon: string = environment.pathIcons;

    this.infoIconMtM = this.utilService.getIconMtm();

    const pathImages: string = this.utilService.getPathMtMImages(Constants.TYPE_APP_OTHERS);

    this.infoListCard = new InfoProjectCardModel('COMMON.MTM_LARGE', 'HOME.descriptionLargeProjects', [
      new InfoCardModel('INFO_MTM.titleExpensesVehicles', 'INFO_MTM.descriptionExpensesVehicles',
        this.utilService.joinPath([pathImages, 'info-mtm-expenses-vehicles.png'])),
      new InfoCardModel('INFO_MTM.titleCalendar', 'INFO_MTM.descriptionCalendar',
        this.utilService.joinPath([pathImages, 'info-mtm-calendar.png'])),
      new InfoCardModel('INFO_MTM.titleExpensesReplacement', 'INFO_MTM.descriptionExpensesReplacement',
        this.utilService.joinPath([pathImages, 'info-mtm-expenses-replacements.png'])),
      new InfoCardModel('INFO_MTM.titleNotifications', 'INFO_MTM.descriptionNotifications',
        this.utilService.joinPath([pathImages, 'info-mtm-notification.png']))
    ]);

    const themes: InfoThemeModel[] = this.utilService.getMtMThemes();

    this.infoImageMtM = [
      new InfoTabModel('Android', themes, Constants.TYPE_APP_ANDROID, 'pi pi-android'),
      new InfoTabModel('Windows 10', themes, Constants.TYPE_APP_WINDOWS, 'pi pi-microsoft')
    ];

    this.infoMtMFree = new InfoDeveloperModel('COMMON.MTM_FREE', 'INFO_MTM.descriptionMtMFree');

    this.infoMtM = new InfoDeveloperModel(
      'INFO_MTM.titleTechnologiesUsed', 'INFO_MTM.descriptionTechnologiesUsed',
      [
        new InfoIconModel(`${assetsIcon}/icon-ionic.png`, 'Ionic', 'Ionic', Constants.URL_IONIC),
        new InfoIconModel(`${assetsIcon}/icon-angular.png`, 'Angular', 'Angular', Constants.URL_ANGULAR),
        new InfoIconModel(`${assetsIcon}/icon-cordova.png`, 'Cordova', 'Cordova', Constants.ICON_URL_EGG),
        new InfoIconModel(`${assetsIcon}/icon-sqlite.png`, 'Sqlite', 'Sqlite', Constants.ICON_URL_KLIPARTZ)
      ]);

    const imgGooglePlay: string = this.utilService.joinPath(
      [environment.pathOthers, this.translator.currentLang, 'google_play.png']);
    const imgMicrosoftStore: string = this.utilService.joinPath(
      [environment.pathOthers, this.translator.currentLang, 'microsoft_store.png']);

    if (this.translator.currentLang === Constants.LANGUAGE_EN) {
      this.infoLinksMtm = [
        new InfoBaseIconModel(imgGooglePlay, Constants.URL_MTM_ANDROID_EN, Constants.URL_MTM_ANDROID_EN),
        new InfoBaseIconModel(imgMicrosoftStore, Constants.URL_MTM_WINDOWS_EN, Constants.URL_MTM_WINDOWS_EN)
      ];
      this.infoLinksMtmFree = [
        new InfoBaseIconModel(imgGooglePlay, Constants.URL_MTM_FREE_ANDROID_EN, Constants.URL_MTM_FREE_ANDROID_EN),
        new InfoBaseIconModel(imgMicrosoftStore, Constants.URL_MTM_FREE_WINDOWS_EN, Constants.URL_MTM_FREE_WINDOWS_EN)
      ];
    } else {
      this.infoLinksMtm = [
        new InfoBaseIconModel(imgGooglePlay, Constants.URL_MTM_ANDROID_ES, Constants.URL_MTM_ANDROID_ES),
        new InfoBaseIconModel(imgMicrosoftStore, Constants.URL_MTM_WINDOWS_ES, Constants.URL_MTM_WINDOWS_ES)
      ];
      this.infoLinksMtmFree = [
        new InfoBaseIconModel(imgGooglePlay, Constants.URL_MTM_FREE_ANDROID_ES, Constants.URL_MTM_FREE_ANDROID_ES),
        new InfoBaseIconModel(imgMicrosoftStore, Constants.URL_MTM_FREE_WINDOWS_ES, Constants.URL_MTM_FREE_WINDOWS_ES)
      ];
    }
  }

}
