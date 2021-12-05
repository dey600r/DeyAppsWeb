import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupTest } from '@testing/index';

import { BackgroundHeaderComponent } from './background-header.component';

describe('BackgroundHeaderComponent', () => {
  let component: BackgroundHeaderComponent;
  let fixture: ComponentFixture<BackgroundHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(SetupTest.config).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
