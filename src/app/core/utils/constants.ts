export class Constants {
  static ROUTE_HOME = 'home';
  static ROUTE_HOME_COOKIES = 'cookies';
  static ROUTE_INFO_MTM = 'infomtm';
  static ROUTE_MTM_PRIVACIY_POLICY = 'privacypolicy';

  static getRoutePrivacyPolicy(): string {
    return `/${this.ROUTE_INFO_MTM}/${this.ROUTE_MTM_PRIVACIY_POLICY}`;
  }

  static getRouteCookies(): string {
    return `/${this.ROUTE_HOME}/${this.ROUTE_HOME_COOKIES}`;
  }

  static LANGUAGE_EN = 'en';
  static LANGUAGE_ES = 'es';

  static URL_ANGULAR = 'https://angular.io/';
  static URL_NET_CORE = 'https://dotnet.microsoft.com/';
  static URL_IONIC = 'https://ionicframework.com/';
  static URL_ANDROID = 'https://www.android.com/';
  static URL_SQLITE = 'https://www.sqlite.org/index.html';
  static ICON_URL_FREE = 'https://www.flaticon.es';
  static ICON_URL_FREEPIK = 'https://www.flaticon.es/autores/freepik';
  static ICON_URL_EGG = 'https://www.pngegg.com/';
  static ICON_URL_KLIPARTZ = 'https://www.klipartz.com/';

  static TYPE_APP_ANDROID = 'android';
  static TYPE_APP_WINDOWS = 'windows';
  static TYPE_APP_OTHERS = 'others';

  static THEME_LIGHT = 'light';
  static THEME_DARK = 'dark';
  static THEME_SKY = 'sky';

  static THEME_LIGHT_KEY = 'L';
  static THEME_DARK_KEY = 'D';
  static THEME_SKY_KEY = 'S';

  static LOCAL_STORAGE_COOKIES_ACCEPTED = 'cookies_accepted';

  static URL_MTM_WEB = 'https://mtmionicdey125r.web.app';

  static URL_MTM_ANDROID_ES = 'https://play.google.com/store/apps/details?id=mtm.ionic.dey125r&hl=es_419';
  static URL_MTM_ANDROID_EN = 'https://play.google.com/store/apps/details?id=mtm.ionic.dey125r&hl=en_419';
  static URL_MTM_WINDOWS_ES = 'https://www.microsoft.com/es-es/p/motor-track-manager/9nzcmw19fh21?activetab=pivot:overviewtab';
  static URL_MTM_WINDOWS_EN = 'https://www.microsoft.com/en-us/p/motor-track-manager/9nzcmw19fh21?activetab=pivot:overviewtab';

  static URL_MTM_FREE_ANDROID_ES = 'https://play.google.com/store/apps/details?id=mtm.free.ionic.dey125r&hl=es_419';
  static URL_MTM_FREE_ANDROID_EN = 'https://play.google.com/store/apps/details?id=mtm.free.ionic.dey125r&hl=en_419';
  static URL_MTM_FREE_WINDOWS_ES = 'https://www.microsoft.com/es-es/p/motor-track-manager-free/9pcbjjbqkj59?activetab=pivot:overviewtab';
  static URL_MTM_FREE_WINDOWS_EN = 'https://www.microsoft.com/en-us/p/motor-track-manager-free/9pcbjjbqkj59?activetab=pivot:overviewtab';

  static URL_DISABLE_COOKIES_GOOGLE_ES = 'https://support.google.com/chrome/answer/95647?hl=es';
  static URL_DISABLE_COOKIES_GOOGLE_EN = 'https://support.google.com/chrome/answer/95647?hl=en';
  static URL_DISABLE_COOKIES_EDGE_ES = 'https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09';
  static URL_DISABLE_COOKIES_EDGE_EN = 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09';
  static URL_DISABLE_COOKIES_FIREFOX_ES = 'https://support.mozilla.org/es/kb/Deshabilitar%20cookies%20de%20terceros';
  static URL_DISABLE_COOKIES_FIREFOX_EN = 'https://support.mozilla.org/en-US/kb/websites-say-cookies-are-blocked-unblock-them';
  static URL_DISABLE_COOKIES_SAFARI_ES = 'https://support.apple.com/es-es/HT201265';
  static URL_DISABLE_COOKIES_SAFARI_EN = 'https://support.apple.com/en-us/HT201265';
}
