import { AfterViewInit, Component, inject, OnInit } from '@angular/core';

// SERVICES
import { AnalyticsService, UtilsService } from '@services/index';
import { TranslateService } from '@ngx-translate/core';

// MODELS
import { 
  InfoDeveloperModel, InfoIconModel, InfoTabModel, InfoProjectCardModel, InfoThemeModel,
  InfoCardModel, InfoBaseIconModel
 } from '@models/index';

// UTILS
import { environment } from '@environments/environment';
import { Constants } from '@utils/constants';
import { InfoMtmModule } from '../info-mtm.module';

@Component({
    selector: 'app-info-app',
    imports: [ InfoMtmModule ],
    standalone: true,
    templateUrl: './info-app.component.html',
    styleUrls: ['./info-app.component.scss'],
})
export class InfoAppComponent implements OnInit, AfterViewInit {
  
  // INJECTABLE
  public readonly translator: TranslateService = inject(TranslateService);
  private readonly utilService: UtilsService = inject(UtilsService);
  private readonly analyticService: AnalyticsService = inject(AnalyticsService);
  
  infoIconMtM: InfoIconModel = new InfoIconModel();
  infoListCard: InfoProjectCardModel = new InfoProjectCardModel();
  infoImageMtM: InfoTabModel[] = [];
  infoLinksMtm: InfoBaseIconModel [] = [];
  infoMtMFree: InfoDeveloperModel = new InfoDeveloperModel();
  infoLinksMtmFree: InfoBaseIconModel[] = [];
  infoMtM: InfoDeveloperModel = new InfoDeveloperModel();

  ngAfterViewInit(): void {
    this.loadCards();
  }
  
  ngOnInit(): void {
    this.analyticService.logEvent('load_info_MtM');

    this.loadCards();
    this.loadInfo();
    this.loadLinks();
  }

  loadCards() {
    const pathImages: string = this.utilService.getPathMtMImages(Constants.TYPE_APP_OTHERS);
    this.infoListCard = new InfoProjectCardModel('COMMON.MTM_LARGE', 'HOME.descriptionLargeProjects', [
      new InfoCardModel('INFO_MTM.titleExpensesVehicles', 'INFO_MTM.descriptionExpensesVehicles',
        [this.utilService.joinPath([pathImages, 'info-mtm-expenses-vehicles.png']),
        this.utilService.joinPath([pathImages, 'info-mtm-expenses-operations.png'])]),
        new InfoCardModel('INFO_MTM.titleCalendar', 'INFO_MTM.descriptionCalendar',
          [this.utilService.joinPath([pathImages, 'info-mtm-calendar.png']),
          this.utilService.joinPath([pathImages, 'info-mtm-calendar-day.png'])]),
          new InfoCardModel('INFO_MTM.titleExpensesReplacement', 'INFO_MTM.descriptionExpensesReplacement',
            [this.utilService.joinPath([pathImages, 'info-mtm-expenses-replacements.png']),
            this.utilService.joinPath([pathImages, 'info-mtm-expenses-replacements-year.png'])]),
            new InfoCardModel('INFO_MTM.titleNotifications', 'INFO_MTM.descriptionNotifications',
              [this.utilService.joinPath([pathImages, 'info-mtm-notification.png']),
              this.utilService.joinPath([pathImages, 'info-mtm-notification-chart.png'])])
            ]);
  }

  loadInfo() {
    const assetsIcon: string = environment.pathIcons;
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
  }
  

  loadLinks() {
    const imgGooglePlay: string = this.utilService.joinPath(
      [environment.pathOthers, this.translator.currentLang, 'google_play.png']);
      const imgMicrosoftStore: string = this.utilService.joinPath(
      [environment.pathOthers, this.translator.currentLang, 'microsoft_store.png']);
      const imgWebVersion: string = this.utilService.joinPath(
        [environment.pathOthers, this.translator.currentLang, 'web_version.png']);
        
        if (this.translator.currentLang === Constants.LANGUAGE_EN) {
          this.infoLinksMtm = [
            new InfoBaseIconModel(imgGooglePlay, Constants.URL_MTM_ANDROID_EN, Constants.URL_MTM_ANDROID_EN),
            new InfoBaseIconModel(imgMicrosoftStore, Constants.URL_MTM_WINDOWS_EN, Constants.URL_MTM_WINDOWS_EN),
            new InfoBaseIconModel(imgWebVersion, Constants.URL_MTM_WEB, Constants.URL_MTM_WEB)
          ];
          this.infoLinksMtmFree = [
            new InfoBaseIconModel(imgGooglePlay, Constants.URL_MTM_FREE_ANDROID_EN, Constants.URL_MTM_FREE_ANDROID_EN),
            new InfoBaseIconModel(imgMicrosoftStore, Constants.URL_MTM_FREE_WINDOWS_EN, Constants.URL_MTM_FREE_WINDOWS_EN)
          ];
        } else {
          this.infoLinksMtm = [
            new InfoBaseIconModel(imgGooglePlay, Constants.URL_MTM_ANDROID_ES, Constants.URL_MTM_ANDROID_ES),
            new InfoBaseIconModel(imgMicrosoftStore, Constants.URL_MTM_WINDOWS_ES, Constants.URL_MTM_WINDOWS_ES),
            new InfoBaseIconModel(imgWebVersion, Constants.URL_MTM_WEB, Constants.URL_MTM_WEB)
          ];
          this.infoLinksMtmFree = [
            new InfoBaseIconModel(imgGooglePlay, Constants.URL_MTM_FREE_ANDROID_ES, Constants.URL_MTM_FREE_ANDROID_ES),
            new InfoBaseIconModel(imgMicrosoftStore, Constants.URL_MTM_FREE_WINDOWS_ES, Constants.URL_MTM_FREE_WINDOWS_ES)
          ];
        }
  }
}
    