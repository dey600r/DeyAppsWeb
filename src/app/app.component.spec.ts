import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { SetupTest } from '@testing/index';
import { Constants } from '@utils/constants';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule(SetupTest.config).compileComponents();
    router = TestBed.inject(Router);
  });

  beforeEach(() =>{
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'DeyApps'`, () => {
    expect(app.title).toEqual('DeyApps');
  });

  it('should router to HOME', fakeAsync (() => {
    const spy = spyOn(router, 'navigate');
    router.navigate([Constants.ROUTE_HOME]);
    tick();
    expect(spy).toHaveBeenCalledWith([Constants.ROUTE_HOME]);
  }));

  it('should router to INFOMTM', fakeAsync (() => {
    const spy = spyOn(router, 'navigate');
    router.navigate([Constants.ROUTE_INFO_MTM]);
    tick();
    expect(spy).toHaveBeenCalledWith([Constants.ROUTE_INFO_MTM]);
  }));

});
