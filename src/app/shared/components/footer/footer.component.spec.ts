import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { firstValueFrom } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { SetupTest } from '@testing/index';
import { Constants } from '@utils/constants';

import { FooterComponent } from './footer.component';


describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let translate: TranslateService;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule(SetupTest.GetConfig(FooterComponent)).compileComponents();
    translate = TestBed.inject(TranslateService);
    await firstValueFrom(translate.use('es'));
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should event router activate cookie page', () => {
    spyOn(location, 'path').and.returnValue(Constants.ROUTE_HOME);
    component.ngOnInit();
    router.navigateByUrl(Constants.ROUTE_HOME);
    expect(component.selectedRoute).toEqual({
      title: 'COOKIES.cookies',
      route: Constants.getRouteCookies()
    });
  });

  it('should event router activate privacy policy page', () => {
    spyOn(location, 'path').and.returnValue(Constants.ROUTE_INFO_MTM);
    component.ngOnInit();
    router.navigateByUrl(Constants.ROUTE_INFO_MTM);
    expect(component.selectedRoute).toEqual({
      title: 'POLICY_PRIVACY.mtmPrivacyPolicy',
      route: Constants.getRoutePrivacyPolicy()
      });
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
