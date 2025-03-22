import { Component, inject, OnInit } from '@angular/core';

// LIBRARIES
import { TranslateService } from '@ngx-translate/core';

// UTILS
import { Constants } from '@utils/constants';
import { HomeModule } from '../home.module';

@Component({
    selector: 'app-cookies',
    imports: [ HomeModule ],
    standalone: true,
    templateUrl: './cookies.component.html',
    styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {

  // INJECTABLES
  private readonly translator: TranslateService = inject(TranslateService);

  linkDisableCookiesGoogle: string = '';
  linkDisableCookiesEdge: string = '';
  linkDisableCookiesFirefox: string = '';
  linkDisableCookiesSafari: string = '';

  ngOnInit(): void {

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
