import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { firstValueFrom } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { CookiesPopupComponent } from './cookies-popup.component';
import { MockTranslate, SetupTest } from '@testing/index';
import { AnalyticsService, UtilsService } from '@services/index';
import { Constants } from '@utils/constants';

describe('CookiesPopupComponent', () => {
  let component: CookiesPopupComponent;
  let fixture: ComponentFixture<CookiesPopupComponent>;
  let utilsService: UtilsService;
  let analyticService: AnalyticsService;
  let translate: TranslateService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule(SetupTest.GetConfig(CookiesPopupComponent)).compileComponents();
    utilsService = TestBed.inject(UtilsService);
    analyticService = TestBed.inject(AnalyticsService);
    translate = TestBed.inject(TranslateService);
    await firstValueFrom(translate.use('es'));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should define route to cookies page', () => {
    expect(Constants.getRouteCookies()).toEqual(`/${Constants.ROUTE_HOME}/${Constants.ROUTE_COOKIES}`);
  });

  it('shouldnt accept the cookies', () => {
    const acceptSpy = spyOn(utilsService, 'acceptCookies');
    const initSpy = spyOn(analyticService, 'initializeApp');
    const isAcceptSpy = spyOn(utilsService, 'isCookiesAccepted').and.returnValue(false);
    component.acceptCookies();
    expect(acceptSpy).toHaveBeenCalled();
    expect(initSpy).toHaveBeenCalled();
    expect(isAcceptSpy).toHaveBeenCalled();
  });

  it('shouldnt be accepted the cookies', () => {
    spyOn(utilsService, 'isCookiesAccepted').and.returnValue(false);
    component.checkCookies();
    expect(component.cookiesAccepted).toEqual(false);
  });

  it('should be accepted the cookies', () => {
    spyOn(utilsService, 'isCookiesAccepted').and.returnValue(true);
    component.checkCookies();
    expect(component.cookiesAccepted).toEqual(true);
  });

  it('should define route to cookies page - ES', () => {
    const buttonAgree = fixture.debugElement.query(By.css('.p-button-rounded.button-gray-soft'));
    const pCookies = fixture.debugElement.query(By.css('.p-cookies'));
    expect(buttonAgree.nativeNode.children[0].innerHTML).toBe(MockTranslate.ES.COOKIES.agree);
    expect(pCookies.nativeNode.innerHTML).toBe(MockTranslate.ES.COOKIES.popupDescription);
  });

  it('should define route to cookies page - EN', async () => {
    await firstValueFrom(translate.use('en'));
    fixture.detectChanges();
    const buttonAgree = fixture.debugElement.query(By.css('.p-button-rounded.button-gray-soft'));
    const pCookies = fixture.debugElement.query(By.css('.p-cookies'))
    expect(buttonAgree.nativeNode.children[0].innerHTML).toBe(MockTranslate.EN.COOKIES.agree);
    expect(pCookies.nativeNode.innerHTML).toBe(MockTranslate.EN.COOKIES.popupDescription);
  });
  
});
