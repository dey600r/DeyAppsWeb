import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';

import { SetupTest } from '@testing/index';
import { firstValueFrom } from 'rxjs';

import { IconListCardComponent } from './icon-list-card.component';

describe('IconListCardComponent', () => {
  let component: IconListCardComponent;
  let fixture: ComponentFixture<IconListCardComponent>;
  let translate: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule(SetupTest.config).compileComponents();
    translate = TestBed.inject(TranslateService);
    await firstValueFrom(translate.use('es'));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
