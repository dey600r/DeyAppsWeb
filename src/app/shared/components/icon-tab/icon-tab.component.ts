import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { Constants } from '@utils/constants';
import { InfoCarouselModel, InfoTabModel, InfoThemeModel } from '@models/index';
import { ComponentModule, SharedModule } from '@shared/modules/index';

@Component({
    selector: 'app-icon-tab',
    imports: [ SharedModule, ComponentModule ],
    standalone: true,
    templateUrl: './icon-tab.component.html',
    styleUrls: ['./icon-tab.component.scss']
})
export class IconTabComponent implements OnInit {
  
  // INJECTABLE
  private readonly detector: ChangeDetectorRef = inject(ChangeDetectorRef);
  
  @Input() dataInfo: InfoTabModel[] = [];

  activeIndex = 0;

  dataInfoCarousel: InfoCarouselModel = new InfoCarouselModel(Constants.TYPE_APP_ANDROID, Constants.THEME_DARK);
  themes: InfoThemeModel[] = [];
  selectedTheme = '';


  ngOnInit(): void {
    if (this.dataInfo && this.dataInfo.length > 0) {
      this.themes = this.dataInfo[this.activeIndex].themes;
      this.selectedTheme = this.dataInfo[this.activeIndex].themes.find(x => x.key === Constants.THEME_DARK_KEY).value;
    }
  }

  changeInfoCarousel(event: any = {}): void {
    this.dataInfoCarousel = new InfoCarouselModel(this.dataInfo[this.activeIndex].type, this.selectedTheme);
    this.detector.detectChanges();
  }
}
