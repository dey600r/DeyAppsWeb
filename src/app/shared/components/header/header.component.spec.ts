import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Constants } from '@utils/constants';
import { TranslateService } from '@ngx-translate/core';
import { SetupTest } from '@testing/index';

import { HeaderComponent } from './header.component';
import { Location } from '@angular/common';
import { firstValueFrom } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let translate: TranslateService;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule(SetupTest.GetConfig(HeaderComponent)).compileComponents();
    translate = TestBed.inject(TranslateService);
    await firstValueFrom(translate.use('es'));
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should event router activate tab home', () => {
    spyOn(location, 'path').and.returnValue(Constants.ROUTE_HOME);
    router.navigateByUrl(Constants.ROUTE_HOME);
    expect(component.selectedItem).toEqual(component.items[0]);
  });

  it('should event router activate tab infoMtM', () => {
    spyOn(location, 'path').and.returnValue(Constants.ROUTE_INFO_MTM);
    router.navigateByUrl(Constants.ROUTE_INFO_MTM);
    expect(component.selectedItem).toEqual(component.items[1]);
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
