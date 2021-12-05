import { InfoBaseDescModel } from './info-base.model';
import { InfoIconModel } from './info-icon.model';

export class InfoDeveloperModel extends InfoBaseDescModel {
    icons: InfoIconModel[];
    constructor(t: string = '', d: string = '', i: InfoIconModel[] = []) {
        super(t, d);
        this.icons = i;
    }
}
