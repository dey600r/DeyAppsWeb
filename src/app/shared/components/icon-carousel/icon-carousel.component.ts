import { AfterViewInit, Component, inject, Input, OnChanges } from '@angular/core';
import { UtilsService } from '@services/utils.service';

import { SharedModule } from '@modules/shared.module';

// UTILS
import { PictureModel, InfoCarouselModel } from '@models/index';
import { Constants } from '@utils/constants';

@Component({
    selector: 'app-icon-carousel',
    imports: [ SharedModule ],
    standalone: true,
    templateUrl: './icon-carousel.component.html',
    styleUrls: ['./icon-carousel.component.scss']
})
export class IconCarouselComponent implements OnChanges, AfterViewInit {
  
  // INJECTABLES
  private readonly utilService: UtilsService = inject(UtilsService);

  @Input() dataInfo: InfoCarouselModel = new InfoCarouselModel(Constants.TYPE_APP_ANDROID, Constants.THEME_DARK);

  picturesApp: PictureModel[] = [];
  responsiveOptions: any = [];
  displayModal = false;
  selectedPicture: PictureModel = new PictureModel();

  ngAfterViewInit(): void {
    this.ngOnChanges();
  }

  ngOnChanges(): void {
    const pathImages: string = this.utilService.getPathMtMImages(this.dataInfo.type);
    this.picturesApp = [];
    for (let i = 1; i < 12; i++) {
      this.picturesApp .push({
        name: `Image${i}`,
        url: this.utilService.joinPath([pathImages, this.dataInfo.theme, `Capture${i}.png`]),
        type: this.dataInfo.type,
        app: 'mtm'
      });
    }
    this.calculateNumVisibleImages();
  }

  calculateNumVisibleImages(): void {
    if (this.dataInfo.type === Constants.TYPE_APP_ANDROID) {
      this.responsiveOptions = [
        {
            breakpoint: '4000px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '840px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    } else {
      this.responsiveOptions = [
        {
            breakpoint: '4000px',
            numVisible: 1,
            numScroll: 1
        }
      ];
    }
  }

  showModalDialog(pict: PictureModel): void {
    this.selectedPicture = pict;
    this.displayModal = true;
  }

}
