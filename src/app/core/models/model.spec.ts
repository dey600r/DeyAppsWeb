import { Constants } from '@utils/constants';
import {
    InfoBaseDescModel, InfoBaseIconModel, InfoBaseModel, InfoCardModel,
    InfoCarouselModel, InfoDeveloperModel, InfoIconModel, InfoProjectCardModel,
    InfoProjectModel, InfoTabModel, InfoThemeModel
} from './index';

describe('TestModels', () => {

    it('should initialize info base model', () => {
        let infobase: InfoBaseModel = new InfoBaseModel('david');
        expect(infobase.title).toEqual('david');
    });

    it('should initialize info base desc model', () => {
        let infobase: InfoBaseDescModel = new InfoBaseDescModel('david', 'desc');
        expect(infobase.title).toEqual('david');
        expect(infobase.description).toEqual('desc');
    });

    it('should initialize info base icon model', () => {
        let infobase: InfoBaseIconModel = new InfoBaseIconModel();
        expect(infobase.alt).toEqual('');
        expect(infobase.href).toEqual('');
        expect(infobase.icon).toEqual('');
        infobase = new InfoBaseIconModel('icon', 'alt', 'href');
        expect(infobase.alt).toEqual('alt');
        expect(infobase.href).toEqual('href');
        expect(infobase.icon).toEqual('icon');
    });

    it('should initialize info project card model', () => {
        let infobase: InfoProjectCardModel = new InfoProjectCardModel();
        expect(infobase.title).toEqual('');
        expect(infobase.description).toEqual('');
        expect(infobase.listInfoCard).toEqual([]);
        infobase = new InfoProjectCardModel('title', 'desc', [new InfoCardModel()]);
        expect(infobase.title).toEqual('title');
        expect(infobase.description).toEqual('desc');
        expect(infobase.listInfoCard).toEqual([new InfoCardModel()]);
    });

    it('should initialize info card model', () => {
        let infobase: InfoCardModel = new InfoCardModel();
        expect(infobase.title).toEqual('');
        expect(infobase.description).toEqual('');
        expect(infobase.images).toEqual([]);
        infobase = new InfoCardModel('title', 'desc', ['david']);
        expect(infobase.title).toEqual('title');
        expect(infobase.description).toEqual('desc');
        expect(infobase.images).toEqual(['david']);
    });

    it('should initialize info carousel model', () => {
        let infobase: InfoCarouselModel = new InfoCarouselModel('type', 'theme');
        expect(infobase.type).toEqual('type');
        expect(infobase.theme).toEqual('theme');
    });

    it('should initialize info developer model', () => {
        let infobase: InfoDeveloperModel = new InfoDeveloperModel();
        expect(infobase.title).toEqual('');
        expect(infobase.description).toEqual('');
        expect(infobase.icons).toEqual([]);
        infobase = new InfoDeveloperModel('title', 'desc', [new InfoIconModel()]);
        expect(infobase.title).toEqual('title');
        expect(infobase.description).toEqual('desc');
        expect(infobase.icons).toEqual([new InfoIconModel()]);
    });

    it('should initialize info icon model', () => {
        let infobase: InfoIconModel = new InfoIconModel();
        expect(infobase.alt).toEqual('');
        expect(infobase.href).toEqual('');
        expect(infobase.icon).toEqual('');
        expect(infobase.tooltip).toEqual('');
        expect(infobase.styleClass).toEqual('');
        expect(infobase.styleParentClass).toEqual('');
        expect(infobase.external).toEqual(false);
        infobase = new InfoIconModel('icon', 'tooltip', 'alt', 'href', 'style', 'styleParent', true);
        expect(infobase.alt).toEqual('alt');
        expect(infobase.href).toEqual('href');
        expect(infobase.icon).toEqual('icon');
        expect(infobase.tooltip).toEqual('tooltip');
        expect(infobase.styleClass).toEqual('style');
        expect(infobase.styleParentClass).toEqual('styleParent');
        expect(infobase.external).toEqual(true);
    });

    it('should initialize info project model', () => {
        let infobase: InfoProjectModel = new InfoProjectModel();
        expect(infobase.title).toEqual('');
        expect(infobase.infoDeveloper).toEqual(new InfoDeveloperModel());
        expect(infobase.infoIcon).toEqual(new InfoIconModel());
        infobase = new InfoProjectModel('title', new InfoDeveloperModel(), new InfoIconModel());
        expect(infobase.title).toEqual('title');
        expect(infobase.infoDeveloper).toEqual(new InfoDeveloperModel());
        expect(infobase.infoIcon).toEqual(new InfoIconModel());
    });

    it('should initialize info tab model', () => {
        let infobase: InfoTabModel = new InfoTabModel();
        expect(infobase.title).toEqual('');
        expect(infobase.type).toEqual(Constants.TYPE_APP_ANDROID);
        expect(infobase.icon).toEqual('');
        expect(infobase.themes).toEqual([]);
        infobase = new InfoTabModel('title', [new InfoThemeModel('', '')], 'type', 'icon');
        expect(infobase.title).toEqual('title');
        expect(infobase.type).toEqual('type');
        expect(infobase.icon).toEqual('icon');
        expect(infobase.themes).toEqual([new InfoThemeModel('', '')]);
    });

    it('should initialize info theme model', () => {
        let infobase: InfoThemeModel = new InfoThemeModel('key', 'value');
        expect(infobase.key).toEqual('key');
        expect(infobase.value).toEqual('value');
    });
});
