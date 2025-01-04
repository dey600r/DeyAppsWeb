import { Component, Input } from '@angular/core';
import { InfoIconModel } from '@app/core/models';

@Component({
    selector: 'app-icon-header',
    templateUrl: './icon-header.component.html',
    styleUrls: ['./icon-header.component.scss'],
    standalone: false
})
export class IconHeaderComponent {

  @Input() dataInfo: InfoIconModel = new InfoIconModel();

}
