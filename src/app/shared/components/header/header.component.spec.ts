import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Constants } from '@utils/constants';
import { TranslateService } from '@ngx-translate/core';
import { SetupTest } from '@testing/index';

import { HeaderComponent } from './header.component';
import { Location } from '@angular/common';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let translate: TranslateService;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: SetupTest.config.imports,
      providers: SetupTest.config.providers,
      schemas: SetupTest.config.schemas
    }).compileComponents();
    translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should event router activate tab home', () => {
    spyOn(location, 'path').and.returnValue(Constants.ROUTE_HOME);
    router.navigateByUrl(Constants.ROUTE_HOME);
    expect(component.selectedItem).toEqual(component.items[0]);
  });

  it('should event router activate tab infoMtM', () => {
    spyOn(location, 'path').and.returnValue(Constants.ROUTE_INFO_MTM);
    router.navigateByUrl(Constants.ROUTE_INFO_MTM);
    expect(component.selectedItem).toEqual(component.items[1]);
  });
});
