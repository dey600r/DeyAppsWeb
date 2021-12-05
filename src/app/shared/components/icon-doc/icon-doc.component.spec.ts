import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';

import { SetupTest } from '@testing/index';

import { IconDocComponent } from './icon-doc.component';

describe('IconDocComponent', () => {
  let component: IconDocComponent;
  let fixture: ComponentFixture<IconDocComponent>;
  let translate: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule(SetupTest.config).compileComponents();
    translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
