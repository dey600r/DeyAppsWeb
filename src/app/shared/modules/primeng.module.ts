import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  exports: [
    CarouselModule,
    TabsModule,
    ButtonModule,
    TooltipModule,
    TabViewModule,
    RadioButtonModule,
    DialogModule
  ]
})
export class PrimengModule { }
