import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Constants } from '@utils/constants';
import { InfoCarouselModel, PictureModel } from '@models/index';
import { TranslateService } from '@ngx-translate/core';

import { SetupTest } from '@testing/index';

import { IconCarouselComponent } from './icon-carousel.component';
import { By } from '@angular/platform-browser';

describe('IconCarouselComponent', () => {
  let component: IconCarouselComponent;
  let fixture: ComponentFixture<IconCarouselComponent>;
  let translate: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule(SetupTest.config)
    .compileComponents();
    translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCarouselComponent);
    component = fixture.componentInstance;
    component.dataInfo = new InfoCarouselModel(Constants.TYPE_APP_ANDROID, Constants.THEME_DARK);
    component.ngOnChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize carousel android dark', () => {
    expect(component.picturesApp.some(x => x.url.includes(Constants.THEME_DARK))).toBeTrue();
    expect(component.responsiveOptions.length).toBe(3);
  });

  it('should initialize carousel windows sky', () => {
    component.dataInfo = new InfoCarouselModel(Constants.TYPE_APP_WINDOWS, Constants.THEME_SKY);
    component.ngOnChanges();
    fixture.detectChanges();
    expect(component.picturesApp.some(x => x.url.includes(Constants.THEME_SKY))).toBeTrue();
    expect(component.responsiveOptions.length).toBe(1);
  });

  it('should event click show modal dialog', () => {
    spyOn(component, 'showModalDialog');
    const imageClick = fixture.debugElement.query(By.css('.p-mb-3'));
    imageClick.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.showModalDialog).toHaveBeenCalled();
  });

  it('should show modal dialog', () => {
    component.showModalDialog(component.picturesApp[0]);
    expect(component.displayModal).toBeTrue();
    expect(component.selectedPicture).toEqual(component.picturesApp[0]);
  });
});
