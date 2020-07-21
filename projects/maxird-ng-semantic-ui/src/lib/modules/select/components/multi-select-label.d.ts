import { ChangeDetectorRef, ElementRef, EventEmitter, Renderer2, TemplateRef, ViewContainerRef } from "@angular/core";
import { HandledEvent } from '../../../misc/util/helpers/util';
import { SuiComponentFactory } from '../../../misc/util/services/component-factory.service';
import { SuiTransition } from '../../transition/directives/transition';
import { IOptionContext } from "../classes/select-base";
export declare class SuiMultiSelectLabel<T> extends SuiTransition {
    componentFactory: SuiComponentFactory;
    readonly hasClasses: boolean;
    private _transitionController;
    value: T;
    query?: string;
    onDeselected: EventEmitter<T>;
    formatter: (obj: T) => string;
    private _template?;
    template: TemplateRef<IOptionContext<T>> | undefined;
    templateSibling: ViewContainerRef;
    constructor(renderer: Renderer2, element: ElementRef, changeDetector: ChangeDetectorRef, componentFactory: SuiComponentFactory);
    deselectOption(e: HandledEvent): void;
    onClick(e: HandledEvent): void;
}
