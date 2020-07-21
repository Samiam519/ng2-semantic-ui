import { ElementRef, Renderer2, Type } from "@angular/core";
import { SuiComponentFactory } from '../../../misc/util/services/component-factory.service';
import { PopupConfig } from "./popup-config";
import { SuiPopupController } from "./popup-controller";
export declare class SuiPopupComponentController<T> extends SuiPopupController {
    private _component;
    private _contentComponentRef?;
    readonly componentInstance: T | undefined;
    constructor(renderer: Renderer2, element: ElementRef, componentFactory: SuiComponentFactory, _component: Type<T>, config: PopupConfig);
    open(): void;
    protected cleanup(): void;
}
