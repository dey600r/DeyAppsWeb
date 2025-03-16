import { Component, Input } from '@angular/core';
import { SharedModule } from '@modules/shared.module';
import { InfoBaseIconModel } from '@models/index';

@Component({
    selector: 'app-icon-links',
    imports: [ SharedModule ],
    standalone: true,
    templateUrl: './icon-links.component.html',
    styleUrls: ['./icon-links.component.scss']
})
export class IconLinksComponent {

  @Input() dataInfo: InfoBaseIconModel[] = [];

}
