import { Component, Input } from '@angular/core';
import { SharedModule } from '@modules/shared.module';
import { InfoIconModel } from '@models/index';

@Component({
    selector: 'app-icon-header',
    imports: [ SharedModule ],
    standalone: true,
    templateUrl: './icon-header.component.html',
    styleUrls: ['./icon-header.component.scss']
})
export class IconHeaderComponent {

  @Input() dataInfo: InfoIconModel = new InfoIconModel();

}
