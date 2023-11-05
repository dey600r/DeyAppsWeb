import { ComponentFixture, TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { UtilsService } from '@services/index';

import { HomeComponent } from './home.component';

import { SetupTest } from '@testing/index';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let translate: TranslateService;
  let utilsService: UtilsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule(SetupTest.GetConfig(HomeComponent)).compileComponents();
    translate = TestBed.inject(TranslateService);
    await firstValueFrom(translate.use('es'));
  });

  beforeEach(() => {
    utilsService = TestBed.inject(UtilsService);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create - ES', () => {
    expect(component).toBeTruthy();
  });

  it('should create - EN', async () => {
    await firstValueFrom(translate.use('en'));
    component.ngOnInit();
    expect(component).toBeTruthy();
    expect(component.infoIconDeveloper).toEqual(utilsService.getIconDeveloper());
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
