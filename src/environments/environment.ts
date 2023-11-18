import packageInfo from '../../package.json';
export const environment = {
  production: false,
  lastVersion: packageInfo.version,
  lastUpdate: packageInfo.dateVersion,
  pathTranslate: './assets/i18n/',
  pathIcons: './assets/images/icons',
  pathOthers: './assets/images/others',
  pathMtM: './assets/images/mtm',
};

