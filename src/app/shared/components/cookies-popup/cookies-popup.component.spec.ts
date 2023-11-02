import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesPopupComponent } from './cookies-popup.component';

describe('CookiesPopupComponent', () => {
  let component: CookiesPopupComponent;
  let fixture: ComponentFixture<CookiesPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookiesPopupComponent]
    });
    fixture = TestBed.createComponent(CookiesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
