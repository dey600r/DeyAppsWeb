import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { BackgroundHeaderComponent } from '@components/background-header/background-header.component';

import { PrimengModule } from './primeng.module';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({ 
    declarations: [
        HeaderComponent,
        FooterComponent,
        BackgroundHeaderComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        BackgroundHeaderComponent
    ], 
    imports: [
        CommonModule,
        PrimengModule,
        TranslateModule.forChild()
    ], 
    providers: [
        provideHttpClient(withInterceptorsFromDi())
    ] 
})
export class MainModule { }
