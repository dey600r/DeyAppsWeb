import { Component, Input } from '@angular/core';
import { SharedModule } from '@modules/shared.module';
import { InfoProjectCardModel } from '@models/index';

@Component({
    selector: 'app-icon-list-card',
    imports: [ SharedModule ],
    standalone: true,
    templateUrl: './icon-list-card.component.html',
    styleUrls: ['./icon-list-card.component.scss']
})
export class IconListCardComponent {

  @Input() dataInfo: InfoProjectCardModel = new InfoProjectCardModel();

}
