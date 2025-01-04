import { Component, Input } from '@angular/core';
import { InfoProjectCardModel } from '@app/core/models/info-card.model';

@Component({
    selector: 'app-icon-list-card',
    templateUrl: './icon-list-card.component.html',
    styleUrls: ['./icon-list-card.component.scss'],
    standalone: false
})
export class IconListCardComponent {

  @Input() dataInfo: InfoProjectCardModel = new InfoProjectCardModel();

}
