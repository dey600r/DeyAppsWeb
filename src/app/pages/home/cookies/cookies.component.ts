import { Component, OnInit } from '@angular/core';

// LIBRARIES
import { TranslateService } from '@ngx-translate/core';

// SERVICES
import { UtilsService } from '@services/index';

// MODELS
import { InfoIconModel } from '@models/index';

// UTILS
import { Constants } from '@utils/constants';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {

  infoIconDeveloper: InfoIconModel = new InfoIconModel();

  linkDisableCookiesGoogle: string = '';
  linkDisableCookiesEdge: string = '';
  linkDisableCookiesFirefox: string = '';
  linkDisableCookiesSafari: string = '';

  constructor(private readonly utilService: UtilsService,
              private readonly translator: TranslateService) {}

  ngOnInit(): void {
    this.infoIconDeveloper = this.utilService.getIconDeveloper();

    if(this.translator.currentLang === Constants.LANGUAGE_EN) {
      this.linkDisableCookiesGoogle = Constants.URL_DISABLE_COOKIES_GOOGLE_EN;
      this.linkDisableCookiesEdge = Constants.URL_DISABLE_COOKIES_EDGE_EN;
      this.linkDisableCookiesFirefox = Constants.URL_DISABLE_COOKIES_FIREFOX_EN;
      this.linkDisableCookiesSafari = Constants.URL_DISABLE_COOKIES_SAFARI_EN;
    } else {
      this.linkDisableCookiesGoogle = Constants.URL_DISABLE_COOKIES_GOOGLE_ES;
      this.linkDisableCookiesEdge = Constants.URL_DISABLE_COOKIES_EDGE_ES;
      this.linkDisableCookiesFirefox = Constants.URL_DISABLE_COOKIES_FIREFOX_ES;
      this.linkDisableCookiesSafari = Constants.URL_DISABLE_COOKIES_SAFARI_ES;
    }
  }
}
