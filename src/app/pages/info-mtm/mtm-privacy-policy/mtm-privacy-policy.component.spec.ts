import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { SetupTest } from '@testing/index';
import { firstValueFrom } from 'rxjs';

import { MtmPrivacyPolicyComponent } from './mtm-privacy-policy.component';

describe('MtmPrivacyPolicyComponent', () => {
  let component: MtmPrivacyPolicyComponent;
  let fixture: ComponentFixture<MtmPrivacyPolicyComponent>;
  let translate: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule(SetupTest.GetConfig(MtmPrivacyPolicyComponent)).compileComponents();
    translate = TestBed.inject(TranslateService);
    await firstValueFrom(translate.use('es'));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtmPrivacyPolicyComponent);
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
