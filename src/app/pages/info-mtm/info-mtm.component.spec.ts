import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { SetupTest, MockTranslate } from '@testing/index';
import { firstValueFrom } from 'rxjs';

import { InfoMtmComponent } from './info-mtm.component';
import { IconDocComponent } from '@components/icon-doc/icon-doc.component';
import { IconProjectComponent } from '@components/icon-project/icon-project.component';
import { IconCarouselComponent } from '@components/icon-carousel/icon-carousel.component';
import { IconTabComponent } from '@components/icon-tab/icon-tab.component';
import { IconListCardComponent } from '@components/icon-list-card/icon-list-card.component';
import { IconLinksComponent } from '@components/icon-links/icon-links.component';
import { IconHeaderComponent } from '@components/icon-header/icon-header.component';
import { CookiesPopupComponent } from '@components/cookies-popup/cookies-popup.component';

describe('InfoMtmComponent', () => {
  let component: InfoMtmComponent;
  let fixture: ComponentFixture<InfoMtmComponent>;
  let translate: TranslateService;

  beforeEach(async() => {
    await TestBed.configureTestingModule(SetupTest.GetConfig([
      InfoMtmComponent, IconDocComponent, IconProjectComponent, IconCarouselComponent, IconTabComponent,
      IconListCardComponent, IconLinksComponent, IconHeaderComponent, CookiesPopupComponent
    ])).compileComponents();
    translate = TestBed.inject(TranslateService);
    await firstValueFrom(translate.use('es'));
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
    await firstValueFrom(translate.use('en'));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
