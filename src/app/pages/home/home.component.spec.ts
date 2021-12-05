import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { SetupTest } from '@testing/index';
import { TranslateService } from '@ngx-translate/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let translate: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule(SetupTest.config).compileComponents();
    translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
