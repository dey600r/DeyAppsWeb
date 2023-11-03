import { ComponentFixture, TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { CookiesComponent } from './cookies.component';
import { SetupTest } from '@testing/index';

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

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
