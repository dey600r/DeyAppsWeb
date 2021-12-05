export class InfoBaseModel {
    title: string;
    constructor(t: string) {
        this.title = t;
    }
}

export class InfoBaseDescModel extends InfoBaseModel {
    description: string;
    constructor(t: string, d: string ) {
        super(t);
        this.description = d;
    }
}

export class InfoBaseIconModel {
    icon: string;
    alt: string;
    href: string;
    constructor(i: string = '', a: string = '', h: string = '') {
        this.icon = i;
        this.alt = a;
        this.href = h;
    }
}
