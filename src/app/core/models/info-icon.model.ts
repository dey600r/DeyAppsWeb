import { InfoBaseIconModel } from './info-base.model';

export class InfoIconModel extends InfoBaseIconModel {
    tooltip: string;
    styleClass: string;
    styleParentClass: string;
    external: boolean;
    constructor(i: string = '', t: string = '', a: string = '', h: string = '', style: string = '',
                styleParent: string = '', ext: boolean = false) {
        super(i, a, h);
        this.tooltip = t;
        this.styleClass = style;
        this.styleParentClass = styleParent;
        this.external = ext;
    }
}
