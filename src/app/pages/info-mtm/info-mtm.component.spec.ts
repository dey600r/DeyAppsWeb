import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { SetupTest, MockTranslate } from '@testing/index';

import { InfoMtmComponent } from './info-mtm.component';

describe('InfoMtmComponent', () => {
  let component: InfoMtmComponent;
  let fixture: ComponentFixture<InfoMtmComponent>;
  let translate: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule(SetupTest.config)
    .compileComponents();
    translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create - ES', () => {
    expect(component).toBeTruthy();
  });

  it('should create - EN', async () => {
    await translate.use('en').toPromise();
    component.ngOnInit();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should translate Motor Track Description - ES', () => {
    const title = fixture.debugElement.nativeElement.querySelector('#cardTitleApp');
    expect(title.innerHTML).toBe(MockTranslate.ES.COMMON.MTM_LARGE);
    const desc = fixture.debugElement.nativeElement.querySelector('#cardDescriptionApp');
    expect(desc.innerHTML).toBe(MockTranslate.ES.HOME.descriptionLargeProjects);
  });

  it('should translate Motor Track Description - EN', async () => {
    await translate.use('en').toPromise();
    fixture.detectChanges();
    const title = fixture.debugElement.nativeElement.querySelector('#cardTitleApp');
    expect(title.innerHTML).toBe(MockTranslate.EN.COMMON.MTM_LARGE);
    const desc = fixture.debugElement.nativeElement.querySelector('#cardDescriptionApp');
    expect(desc.innerHTML).toBe(MockTranslate.EN.HOME.descriptionLargeProjects);
  });
});
