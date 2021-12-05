import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';

import { UtilsService } from './utils.service';

import { SetupTest } from '@testing/index';
import { Constants } from '@utils/constants';
import { environment } from '@environments/environment';
import { InfoIconModel } from '@models/index';

describe('UtilsService', () => {
  let service: UtilsService;
  let translate: TranslateService;

  beforeEach(async () => {
    TestBed.configureTestingModule(SetupTest.config);
    service = TestBed.inject(UtilsService);
    translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be join several paths', () => {
    const result = service.joinPath(['hola', 'adios', 'hasta mañana']);
    expect(result).toEqual('./hola/adios/hasta mañana');
  });

  it('should be get path so - ES', () => {
    const result1 = service.getPathMtMImages(Constants.TYPE_APP_ANDROID);
    expect(result1).toEqual(`./${environment.pathMtM}/es/${Constants.TYPE_APP_ANDROID}`);
    const result2 = service.getPathMtMImages(Constants.TYPE_APP_WINDOWS);
    expect(result2).toEqual(`./${environment.pathMtM}/es/${Constants.TYPE_APP_WINDOWS}`);
  });

  it('should be get path so - EN', async () => {
    await translate.use('en').toPromise();
    const result1 = service.getPathMtMImages(Constants.TYPE_APP_ANDROID);
    expect(result1).toEqual(`./${environment.pathMtM}/en/${Constants.TYPE_APP_ANDROID}`);
    const result2 = service.getPathMtMImages(Constants.TYPE_APP_WINDOWS);
    expect(result2).toEqual(`./${environment.pathMtM}/en/${Constants.TYPE_APP_WINDOWS}`);
  });

  it('should be get path ICON MTM', () => {
    const result: InfoIconModel = service.getIconMtm();
    expect(result.alt).toEqual(`icon-mtm`);
    expect(result.icon).toContain(`assets/images/icons/icon.png`);
    expect(result.styleParentClass).toEqual(`item-mtm`);
  });
});
