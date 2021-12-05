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
}
