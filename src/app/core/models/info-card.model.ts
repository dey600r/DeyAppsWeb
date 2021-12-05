import { InfoBaseDescModel } from './info-base.model';

export class InfoProjectCardModel extends InfoBaseDescModel {
    listInfoCard: InfoCardModel[] = [];
    constructor(t: string = '', d: string = '', listInfo: InfoCardModel[] = []) {
        super(t, d);
        this.listInfoCard = listInfo;
    }
}

export class InfoCardModel extends InfoBaseDescModel {
    image: string;
    constructor(t: string = '', d: string = '', i: string = '') {
        super(t, d);
        this.image = i;
    }
}
