import { importProvidersFrom } from "@angular/core";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "@environments/environment";

export const provideServiceWorker = [
    importProvidersFrom([
            ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: environment.production,
                registrationStrategy: 'registerWhenStable:30000'
            })
        ])
    ];