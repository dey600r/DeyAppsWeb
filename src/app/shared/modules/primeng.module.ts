import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  exports: [
    CarouselModule,
    TabMenuModule,
    ButtonModule,
    TooltipModule,
    TabViewModule,
    RadioButtonModule,
    DialogModule
  ]
})
export class PrimengModule { }
