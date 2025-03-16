import { Component } from '@angular/core';
import { SharedModule } from '@modules/shared.module';

@Component({
    selector: 'app-background-header',
    imports: [ SharedModule ],
    standalone: true,
    templateUrl: './background-header.component.html',
    styleUrls: ['./background-header.component.scss']
})
export class BackgroundHeaderComponent {
}
