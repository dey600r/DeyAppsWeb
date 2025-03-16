import { Component, Input } from '@angular/core';

import { SharedModule } from '@modules/shared.module';

import { InfoDeveloperModel } from '@models/index';

@Component({
    selector: 'app-icon-doc',
    imports: [ SharedModule ],
    standalone: true,
    templateUrl: './icon-doc.component.html',
    styleUrls: ['./icon-doc.component.scss']
})
export class IconDocComponent {

  @Input() dataInfo: InfoDeveloperModel = new InfoDeveloperModel();

}
