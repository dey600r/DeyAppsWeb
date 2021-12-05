import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UtilsService } from '@services/utils.service';

import { PictureModel, InfoCarouselModel } from '@models/index';
import { Constants } from '@utils/constants';

@Component({
  selector: 'app-icon-carousel',
  templateUrl: './icon-carousel.component.html',
  styleUrls: ['./icon-carousel.component.scss']
})
export class IconCarouselComponent implements OnInit, OnChanges {

  @Input() dataInfo: InfoCarouselModel = new InfoCarouselModel(Constants.TYPE_APP_ANDROID, Constants.THEME_DARK);

  picturesApp: PictureModel[] = [];
  responsiveOptions: any = [];
  displayModal = false;
  selectedPicture: PictureModel = new PictureModel();

  constructor(private utilService: UtilsService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    const pathImages: string = this.utilService.getPathMtMImages(this.dataInfo.type);
    this.picturesApp = [];
    for (let i = 1; i < 11; i++) {
      this.picturesApp = [...this.picturesApp, {
        name: `Image${i}`,
        url: this.utilService.joinPath([pathImages, this.dataInfo.theme, `Capture${i}.png`]),
        type: this.dataInfo.type,
        app: 'mtm'
      }];
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
