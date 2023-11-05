import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import * as firebaseFunctions from "firebase/analytics";

import { AnalyticsService } from './analytics.service';
import { UtilsService } from './utils.service';

import { SetupTest } from '@testing/index';

describe('AnalyticsService', () => {
  let service: AnalyticsService;
  let utilsService: UtilsService;

  beforeEach(async () => {
    TestBed.configureTestingModule(SetupTest.config);
    service = TestBed.inject(AnalyticsService);
    utilsService = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should initialice analytics', () => {
  //   spyOn(utilsService, 'isCookiesAccepted').and.returnValue(true);
  //   var firebaseGetAnalyitics = jasmine.createSpyObj(firebaseFunctions, ['getAnalytics']);
  //   // var firebaseGetAnalyitics = spyOn(firebaseFunctions, 'getAnalytics').and.returnValue({ app : {name : '', automaticDataCollectionEnabled: false, options: {}}});
  //   service.initializeApp();
  //   expect(firebaseGetAnalyitics.getAnalytics).toHaveBeenCalled();
  //   //expect(SetupTest.SpyConfig.analytics.getAnalytics).toHaveBeenCalled();
  // });
});
