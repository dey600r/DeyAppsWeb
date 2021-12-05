import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { SetupTest, MockTranslate } from '@testing/index';

import { MtmPrivacyPolicyComponent } from './mtm-privacy-policy.component';

describe('MtmPrivacyPolicyComponent', () => {
  let component: MtmPrivacyPolicyComponent;
  let fixture: ComponentFixture<MtmPrivacyPolicyComponent>;
  let translate: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule(SetupTest.config).compileComponents();
    translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtmPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
