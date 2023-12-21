import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { InfoIconModel, InfoThemeModel } from '@models/index';
import { Constants } from '@utils/constants';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private translator: TranslateService) { }

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
    const accepted: string = localStorage.getItem(Constants.LOCAL_STORAGE_COOKIES_ACCEPTED);
    return (accepted !== null && accepted !== undefined && accepted === "true");
  }

  acceptCookies() {
    localStorage.setItem(Constants.LOCAL_STORAGE_COOKIES_ACCEPTED, "true");
  }
}
