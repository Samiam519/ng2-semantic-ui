import { TemplateRef, ViewContainerRef } from "@angular/core";
import { SuiComponentFactory } from '../../../misc/util/services/component-factory.service';
import { IResultContext } from "./search";
export declare class SuiSearchResult<T> {
    componentFactory: SuiComponentFactory;
    readonly hasClasses: boolean;
    value: T;
    query: string;
    formatter: (obj: T, query: string) => string;
    private _template?;
    template: TemplateRef<IResultContext<T>> | undefined;
    templateSibling: ViewContainerRef;
    constructor(componentFactory: SuiComponentFactory);
}
