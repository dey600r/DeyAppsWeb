import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Constants } from '@utils/constants';

import { MockTranslate, SetupTest } from '@testing/index';

import { IconTabComponent } from './icon-tab.component';
import { UtilsService } from '@services/utils.service';
import { InfoTabModel } from '@models/index';
import { TranslateService } from '@ngx-translate/core';

describe('IconTabComponent', () => {
  let component: IconTabComponent;
  let fixture: ComponentFixture<IconTabComponent>;
  let utilsServices: UtilsService;
  let translate: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule(SetupTest.config)
    .compileComponents();
    utilsServices = TestBed.inject(UtilsService);
    translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTabComponent);
    component = fixture.componentInstance;
    const themes = utilsServices.getMtMThemes();
    component.dataInfo = [
      new InfoTabModel('Android', themes, Constants.TYPE_APP_ANDROID, 'pi pi-android'),
      new InfoTabModel('Windows 10', themes, Constants.TYPE_APP_WINDOWS, 'pi pi-microsoft')
    ];
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should translate title radiobutton - ES', () => {
    const radioTitle = fixture.debugElement.nativeElement.querySelectorAll('label');
    expect(radioTitle[1].innerHTML).toBe(MockTranslate.ES.COMMON.dark);
  });

  it('should translate title radiobutton - EN', async () => {
    await translate.use('en').toPromise();
    fixture.detectChanges();
    const radioTitle = fixture.debugElement.nativeElement.querySelectorAll('label');
    expect(radioTitle[0].innerHTML).toBe(MockTranslate.EN.COMMON.light);
  });

  it('should click event change theme', () => {
    spyOn(component, 'changeInfoCarousel');
    const radioButtons = fixture.debugElement.nativeElement.querySelectorAll('p-radioButton');
    radioButtons[0].childNodes[0].childNodes[0].childNodes[0].click();
    fixture.detectChanges();
    expect(component.changeInfoCarousel).toHaveBeenCalled();
  });

  it('should change theme light', () => {
    component.selectedTheme = Constants.THEME_LIGHT;
    component.changeInfoCarousel({});
    fixture.detectChanges();
    expect(component.dataInfoCarousel.theme).toBe(Constants.THEME_LIGHT);
  });
});
