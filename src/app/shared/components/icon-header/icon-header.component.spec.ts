import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';

import { SetupTest } from '@testing/index';

import { IconHeaderComponent } from './icon-header.component';

describe('IconHeaderComponent', () => {
  let component: IconHeaderComponent;
  let fixture: ComponentFixture<IconHeaderComponent>;
  let translate: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule(SetupTest.config).compileComponents();
    translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
