import { ElementRef, Renderer2, TemplateRef } from "@angular/core";
import { IImplicitContext, SuiComponentFactory } from '../../../misc/util/services/component-factory.service';
import { IPopupConfig, PopupConfig } from "./popup-config";
import { IPopup, SuiPopupController } from "./popup-controller";
export interface ITemplatePopupContext<T> extends IImplicitContext<IPopup> {
    context?: T;
}
export interface ITemplatePopupConfig<T> extends IPopupConfig {
    template?: TemplateRef<ITemplatePopupContext<T>>;
    context?: T;
}
export declare class TemplatePopupConfig<T> extends PopupConfig {
    template?: TemplateRef<ITemplatePopupContext<T>>;
    context?: T;
}
export declare class SuiPopupTemplateController<T> extends SuiPopupController {
    template?: TemplateRef<ITemplatePopupContext<T>>;
    context?: T;
    constructor(renderer: Renderer2, element: ElementRef, componentFactory: SuiComponentFactory, config: PopupConfig);
    configure(config?: ITemplatePopupConfig<T>): void;
    open(): void;
}
