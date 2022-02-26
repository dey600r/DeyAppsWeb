import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';

import { Constants } from '@utils/constants';
import { InfoDeveloperModel, InfoIconModel, InfoProjectModel } from '@models/index';

import { MockTranslate, SetupTest } from '@testing/index';

import { IconProjectComponent } from './icon-project.component';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

describe('IconProjectComponent', () => {
  let component: IconProjectComponent;
  let fixture: ComponentFixture<IconProjectComponent>;
  let translate: TranslateService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule(SetupTest.GetConfig(IconProjectComponent)).compileComponents();
    translate = TestBed.inject(TranslateService);
    await firstValueFrom(translate.use('es'));
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(IconProjectComponent);
    component = fixture.componentInstance;
    component.dataInfo = new InfoProjectModel('HOME.titleProjects',
    new InfoDeveloperModel(
      'COMMON.MTM_LARGE', 'HOME.descriptionProjects',
      [new InfoIconModel('pi pi-eye', translate.instant('COMMON.MTM_LARGE'), 'MtM', Constants.ROUTE_INFO_MTM,
        'button-gray')]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show title project - ES', () => {
    const title = fixture.debugElement.nativeElement.querySelector('#projectTitleApp');
    expect(title.innerHTML).toEqual(MockTranslate.ES.HOME.titleProjects);
  });

  it('should show title project - EN', async () => {
    await firstValueFrom(translate.use('en'));
    component.dataInfo = new InfoProjectModel('HOME.titleProjects',
    new InfoDeveloperModel(
      'COMMON.MTM_LARGE', 'HOME.descriptionProjects',
      [new InfoIconModel('pi pi-eye', translate.instant('COMMON.MTM_LARGE'), 'MtM', Constants.ROUTE_INFO_MTM,
        'button-gray')]));
    fixture.detectChanges();
    const title = fixture.debugElement.nativeElement.querySelector('#projectTitleApp');
    expect(title.innerHTML).toEqual(MockTranslate.EN.HOME.titleProjects);
  });

  it('should click and call navigateTo', () => {
    spyOn(component, 'navigateTo');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.navigateTo).toHaveBeenCalled();
  });

  it('should navigate to internal url', () => {
    // const comp = new IconProjectComponent(router); --- To MAKE CLICK
    const spy = spyOn(router, 'navigateByUrl');
    component.navigateTo(new InfoIconModel('pi pi-eye', translate.instant('COMMON.MTM_LARGE'), 'MtM', Constants.ROUTE_INFO_MTM,
        'button-gray'));
    expect(spy).toHaveBeenCalledWith(Constants.ROUTE_INFO_MTM);
  });

  it('should navigate to internal url', () => {
    const spy = spyOn(window, 'open');
    component.navigateTo(new InfoIconModel('pi pi-android', 'Android', 'MtM',
      Constants.URL_MTM_ANDROID_ES, 'button-gray', '', true));
    expect(spy).toHaveBeenCalledWith(Constants.URL_MTM_ANDROID_ES, '_blank');
  });
});
