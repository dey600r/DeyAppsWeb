import { ComponentFixture, TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { UtilsService } from '@services/index';

import { InfoDevComponent } from './info-dev.component';

import { SetupTest } from '@testing/index';

describe('InfoDevComponent', () => {
  let component: InfoDevComponent;
  let fixture: ComponentFixture<InfoDevComponent>;
  let translate: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule(SetupTest.GetConfig(InfoDevComponent)).compileComponents();
    translate = TestBed.inject(TranslateService);
    await firstValueFrom(translate.use('es'));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDevComponent);
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
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
