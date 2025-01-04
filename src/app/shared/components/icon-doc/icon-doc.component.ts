import { Component, Input } from '@angular/core';
import { InfoDeveloperModel } from '@app/core/models';

@Component({
    selector: 'app-icon-doc',
    templateUrl: './icon-doc.component.html',
    styleUrls: ['./icon-doc.component.scss'],
    standalone: false
})
export class IconDocComponent {

  @Input() dataInfo: InfoDeveloperModel = new InfoDeveloperModel();

}
