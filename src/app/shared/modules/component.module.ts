import { NgModule } from '@angular/core';

import { IconDocComponent } from '@components/icon-doc/icon-doc.component';
import { IconProjectComponent } from '@components/icon-project/icon-project.component';
import { IconCarouselComponent } from '@components/icon-carousel/icon-carousel.component';
import { IconTabComponent } from '@components/icon-tab/icon-tab.component';
import { IconListCardComponent } from '@components/icon-list-card/icon-list-card.component';
import { IconLinksComponent } from '@components/icon-links/icon-links.component';
import { IconHeaderComponent } from '@components/icon-header/icon-header.component';
import { CookiesPopupComponent } from '@components/cookies-popup/cookies-popup.component';

@NgModule({ 
    imports: [
        IconDocComponent,
        IconProjectComponent,
        IconCarouselComponent,
        IconTabComponent,
        IconListCardComponent,
        IconLinksComponent,
        IconHeaderComponent,
        CookiesPopupComponent
    ],
    exports: [
        IconDocComponent,
        IconProjectComponent,
        IconCarouselComponent,
        IconTabComponent,
        IconListCardComponent,
        IconLinksComponent,
        IconHeaderComponent,
        CookiesPopupComponent
    ] 
})
export class ComponentModule { }
