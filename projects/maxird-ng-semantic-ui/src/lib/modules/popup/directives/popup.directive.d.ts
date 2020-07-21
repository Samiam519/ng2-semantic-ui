import { ElementRef, Renderer2, TemplateRef } from "@angular/core";
import { SuiComponentFactory } from '../../../misc/util/services/component-factory.service';
import { PositioningPlacement } from '../../../misc/util/services/positioning.service';
import { PopupSize, PopupTrigger, PopupWidth } from "../classes/popup-config";
import { ITemplatePopupConfig, ITemplatePopupContext, SuiPopupTemplateController } from "../classes/popup-template-controller";
import { SuiPopupConfig } from "../services/popup.service";
export declare class SuiPopupDirective<T> extends SuiPopupTemplateController<T> {
    popupHeader: string;
    popupText: string;
    popupInverted: boolean;
    popupBasic: boolean;
    popupInline: boolean;
    popupFlowing: boolean;
    popupTransition: string;
    popupTransitionDuration: number;
    popupPlacement: PositioningPlacement;
    popupWidth: PopupWidth;
    popupSize: PopupSize;
    popupDelay: number;
    popupTrigger: PopupTrigger;
    popupTemplate: TemplateRef<ITemplatePopupContext<T>> | undefined;
    popupTemplateContext: T | undefined;
    popupConfig: ITemplatePopupConfig<T> | undefined;
    constructor(renderer: Renderer2, element: ElementRef, componentFactory: SuiComponentFactory, popupDefaults: SuiPopupConfig);
}
