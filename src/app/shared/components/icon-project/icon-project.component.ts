import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import cssVars from 'css-vars-ponyfill';

import { SharedModule } from '@modules/shared.module';

import { InfoDeveloperModel, InfoProjectModel, InfoIconModel } from '@models/index';

@Component({
    selector: 'app-icon-project',
    imports: [ SharedModule ],
    standalone: true,
    templateUrl: './icon-project.component.html',
    styleUrls: ['./icon-project.component.scss']
})
export class IconProjectComponent {

  // INJECTABLES
  public router: Router = inject(Router);

  @Input() dataInfo: InfoProjectModel = new InfoProjectModel(
    '', new InfoDeveloperModel('', '', [new InfoIconModel()]));

  constructor() {
    cssVars();
  }

  navigateTo(url: InfoIconModel): void {
    if (url.external) {
      window.open(url.href, '_blank');
    } else {
      this.router.navigateByUrl(url.href);
    }
  }
}
