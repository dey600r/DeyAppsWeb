import { InfoBaseModel } from './info-base.model';
import { InfoDeveloperModel } from './info-developer.model';
import { InfoIconModel } from './info-icon.model';

export class InfoProjectModel extends InfoBaseModel {
    infoDeveloper: InfoDeveloperModel;
    infoIcon: InfoIconModel;
    constructor(t: string = '', infoD: InfoDeveloperModel = new InfoDeveloperModel(),
                infoI: InfoIconModel = new InfoIconModel()) {
        super(t);
        this.infoDeveloper = infoD;
        this.infoIcon = infoI;
    }
}
