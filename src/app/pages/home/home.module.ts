import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ComponentModule, SharedModule } from '@modules/index';

@NgModule({ 
        imports: [
                ComponentModule
        ], 
        exports: [
                ComponentModule,
                SharedModule
        ],
        schemas :[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
