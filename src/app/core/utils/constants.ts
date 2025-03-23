export class Constants {
  static readonly ROUTE_HOME = 'home';
  static readonly ROUTE_INFO_DEV = 'infodev';
  static readonly ROUTE_COOKIES = 'cookies';
  static readonly ROUTE_INFO_APP = 'infoapp';
  static readonly ROUTE_INFO_MTM = 'infomtm';
  static readonly ROUTE_MTM_PRIVACIY_POLICY = 'privacypolicy';

  static getRouteInfoDev(): string {
    return `/${this.ROUTE_HOME}/${this.ROUTE_INFO_DEV}`;
  }

  static getRouteCookies(): string {
    return `/${this.ROUTE_HOME}/${this.ROUTE_COOKIES}`;
  }
  
  static getRouteMTM(): string {
    return `/${this.ROUTE_INFO_MTM}/${this.ROUTE_INFO_APP}`;
  }

  static getRoutePrivacyPolicy(): string {
    return `/${this.ROUTE_INFO_MTM}/${this.ROUTE_MTM_PRIVACIY_POLICY}`;
  }


  static readonly LANGUAGE_EN = 'en';
  static readonly LANGUAGE_ES = 'es';

  static readonly URL_ANGULAR = 'https://angular.io/';
  static readonly URL_NET_CORE = 'https://dotnet.microsoft.com/';
  static readonly URL_IONIC = 'https://ionicframework.com/';
  static readonly URL_ANDROID = 'https://www.android.com/';
  static readonly URL_SQLITE = 'https://www.sqlite.org/index.html';
  static readonly ICON_URL_FREE = 'https://www.flaticon.es';
  static readonly ICON_URL_FREEPIK = 'https://www.flaticon.es/autores/freepik';
  static readonly ICON_URL_EGG = 'https://www.pngegg.com/';
  static readonly ICON_URL_KLIPARTZ = 'https://www.klipartz.com/';

  static readonly TYPE_APP_ANDROID = 'android';
  static readonly TYPE_APP_WINDOWS = 'windows';
  static readonly TYPE_APP_OTHERS = 'others';

  static readonly THEME_LIGHT = 'light';
  static readonly THEME_DARK = 'dark';
  static readonly THEME_SKY = 'sky';

  static readonly THEME_LIGHT_KEY = 'L';
  static readonly THEME_DARK_KEY = 'D';
  static readonly THEME_SKY_KEY = 'S';

  static readonly LOCAL_STORAGE_COOKIES_ACCEPTED = 'cookies_accepted';

  static readonly URL_MTM_WEB = 'https://mtmionicdey125r.web.app';

  static readonly URL_MTM_ANDROID_ES = 'https://play.google.com/store/apps/details?id=mtm.ionic.dey125r&hl=es_419';
  static readonly URL_MTM_ANDROID_EN = 'https://play.google.com/store/apps/details?id=mtm.ionic.dey125r&hl=en_419';
  static readonly URL_MTM_WINDOWS_ES = 'https://www.microsoft.com/es-es/p/motor-track-manager/9nzcmw19fh21?activetab=pivot:overviewtab';
  static readonly URL_MTM_WINDOWS_EN = 'https://www.microsoft.com/en-us/p/motor-track-manager/9nzcmw19fh21?activetab=pivot:overviewtab';

  static readonly URL_MTM_FREE_ANDROID_ES = 'https://play.google.com/store/apps/details?id=mtm.free.ionic.dey125r&hl=es_419';
  static readonly URL_MTM_FREE_ANDROID_EN = 'https://play.google.com/store/apps/details?id=mtm.free.ionic.dey125r&hl=en_419';
  static readonly URL_MTM_FREE_WINDOWS_ES = 'https://www.microsoft.com/es-es/p/motor-track-manager-free/9pcbjjbqkj59?activetab=pivot:overviewtab';
  static readonly URL_MTM_FREE_WINDOWS_EN = 'https://www.microsoft.com/en-us/p/motor-track-manager-free/9pcbjjbqkj59?activetab=pivot:overviewtab';

  static readonly URL_DISABLE_COOKIES_GOOGLE_ES = 'https://support.google.com/chrome/answer/95647?hl=es';
  static readonly URL_DISABLE_COOKIES_GOOGLE_EN = 'https://support.google.com/chrome/answer/95647?hl=en';
  static readonly URL_DISABLE_COOKIES_EDGE_ES = 'https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09';
  static readonly URL_DISABLE_COOKIES_EDGE_EN = 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09';
  static readonly URL_DISABLE_COOKIES_FIREFOX_ES = 'https://support.mozilla.org/es/kb/Deshabilitar%20cookies%20de%20terceros';
  static readonly URL_DISABLE_COOKIES_FIREFOX_EN = 'https://support.mozilla.org/en-US/kb/websites-say-cookies-are-blocked-unblock-them';
  static readonly URL_DISABLE_COOKIES_SAFARI_ES = 'https://support.apple.com/es-es/HT201265';
  static readonly URL_DISABLE_COOKIES_SAFARI_EN = 'https://support.apple.com/en-us/HT201265';
}
