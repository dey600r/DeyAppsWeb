import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

// LIBRARIES
import { provideTranslate, provideServiceWorker, providePrime } from '@providers/index';

// UTILS
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideClientHydration(withEventReplay()), 
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    provideRouter(routes),
    provideTranslate,
    provideServiceWorker,
    providePrime
  ]
};
