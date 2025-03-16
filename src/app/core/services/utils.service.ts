import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import { environment } from '@environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { InfoIconModel, InfoThemeModel } from '@models/index';
import { Constants } from '@utils/constants';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  isBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId,
    private readonly translator: TranslateService) { 
      this.isBrowser = isPlatformBrowser(platformId);
    }

  joinPath(paths: string []): string {
    let result = '.';
    paths.forEach(path => {
      result += `/${path}`;
    });
    return result;
  }

  getPathMtMImages(type: string): string {
    return this.joinPath([environment.pathMtM, this.translator.currentLang, type]);
  }

  getMtMThemes(): InfoThemeModel[] {
    return [
      new InfoThemeModel(Constants.THEME_LIGHT_KEY, Constants.THEME_LIGHT),
      new InfoThemeModel(Constants.THEME_DARK_KEY, Constants.THEME_DARK),
      new InfoThemeModel(Constants.THEME_SKY_KEY, Constants.THEME_SKY)
    ];
  }

  getIconMtm() {
    return new InfoIconModel(this.joinPath([environment.pathIcons, 'icon.png']), '', 'icon-mtm', '', '', 'item-mtm');
  }

  getIconDeveloper() {
    return new InfoIconModel(this.joinPath([environment.pathIcons, 'icon-developer.png']), '', 'icon-developer', '', '', 'item-developer');
  }

  isCookiesAccepted(): boolean {
    const accepted: string = (this.isBrowser ? window.localStorage.getItem(Constants.LOCAL_STORAGE_COOKIES_ACCEPTED) : null);
    return (accepted !== null && accepted !== undefined && accepted === "true");
  }

  acceptCookies() {
    window.localStorage.setItem(Constants.LOCAL_STORAGE_COOKIES_ACCEPTED, "true");
  }
}
