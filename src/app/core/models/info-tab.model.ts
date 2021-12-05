import { Constants } from '../utils/constants';
import { InfoBaseModel } from './info-base.model';

export class InfoTabModel extends InfoBaseModel {
    type: string;
    icon: string;
    themes: InfoThemeModel[];
    constructor(t: string = '', th: InfoThemeModel[] = [], tp: string = Constants.TYPE_APP_ANDROID, i: string = '') {
        super(t);
        this.themes = th;
        this.type = tp;
        this.icon = i;
    }
}

export class InfoThemeModel {
    key: string;
    value: string;
    constructor(k: string, v: string) {
        this.key = k;
        this.value = v;
    }
}
