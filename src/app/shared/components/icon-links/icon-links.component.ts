import { Component, Input } from '@angular/core';
import { InfoBaseIconModel } from '@app/core/models/info-base.model';

@Component({
    selector: 'app-icon-links',
    templateUrl: './icon-links.component.html',
    styleUrls: ['./icon-links.component.scss'],
    standalone: false
})
export class IconLinksComponent {

  @Input() dataInfo: InfoBaseIconModel[] = [];

}
