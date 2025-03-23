import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { firstValueFrom } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { Constants } from '@utils/constants';
import { MockTranslate, SetupTest } from '@testing/index';

import { HeaderComponent } from './header.component';

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should event router activate tab home', () => {
    spyOn(location, 'path').and.returnValue(Constants.ROUTE_HOME);
    component.ngOnInit();
    router.navigateByUrl(Constants.ROUTE_HOME);
    expect(component.selectedItem).toEqual(component.items[0]);
  });

  it('should event router activate tab infoMtM', () => {
    spyOn(location, 'path').and.returnValue(Constants.ROUTE_INFO_MTM);
    component.ngOnInit();
    router.navigateByUrl(Constants.ROUTE_INFO_MTM);
    expect(component.selectedItem).toEqual(component.items[1]);
  });

  it('should init header component', () => {
    component.ngOnInit();
    expect(component.items[0].label).toEqual(MockTranslate.ES.COMMON.home);
    expect(component.items[0].icon).toEqual('pi pi-fw pi-home');
    expect(component.items[0].routerLink.length).toEqual(1);
    expect(component.items[0].routerLink[0]).toEqual(Constants.getRouteInfoDev());
    expect(component.items[1].label).toEqual(MockTranslate.ES.COMMON.infoMtm);
    expect(component.items[1].icon).toEqual('icon-mtm');
    expect(component.items[1].routerLink.length).toEqual(1);
    expect(component.items[1].routerLink[0]).toEqual(Constants.getRouteMTM());
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
