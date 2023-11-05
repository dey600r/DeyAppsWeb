import { ComponentFixture, TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { CookiesComponent } from './cookies.component';
import { SetupTest } from '@testing/index';
import { Constants } from '@utils/constants';

describe('CookiesComponent', () => {
  let component: CookiesComponent;
  let fixture: ComponentFixture<CookiesComponent>;
  let translate: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule(SetupTest.GetConfig(CookiesComponent)).compileComponents();
    translate = TestBed.inject(TranslateService);
    await firstValueFrom(translate.use('es'));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init url modify cookies - ES', () => {
    component.ngOnInit();
    expect(component.linkDisableCookiesGoogle).toEqual(Constants.URL_DISABLE_COOKIES_GOOGLE_ES);
    expect(component.linkDisableCookiesEdge).toEqual(Constants.URL_DISABLE_COOKIES_EDGE_ES);
    expect(component.linkDisableCookiesFirefox).toEqual(Constants.URL_DISABLE_COOKIES_FIREFOX_ES);
    expect(component.linkDisableCookiesSafari).toEqual(Constants.URL_DISABLE_COOKIES_SAFARI_ES);
  });

  it('should init url modify cookies - EN', async () => {
    await firstValueFrom(translate.use('en'));
    component.ngOnInit();
    expect(component.linkDisableCookiesGoogle).toEqual(Constants.URL_DISABLE_COOKIES_GOOGLE_EN);
    expect(component.linkDisableCookiesEdge).toEqual(Constants.URL_DISABLE_COOKIES_EDGE_EN);
    expect(component.linkDisableCookiesFirefox).toEqual(Constants.URL_DISABLE_COOKIES_FIREFOX_EN);
    expect(component.linkDisableCookiesSafari).toEqual(Constants.URL_DISABLE_COOKIES_SAFARI_EN);
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
