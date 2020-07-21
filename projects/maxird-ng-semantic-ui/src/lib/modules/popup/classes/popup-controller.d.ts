import { ElementRef, OnDestroy, Renderer2 } from "@angular/core";
import { SuiComponentFactory } from '../../../misc/util/services/component-factory.service';
import { SuiPopup } from "../components/popup";
import { IPopupConfig, PopupConfig } from "./popup-config";
export interface IPopup {
    open(): void;
    close(): void;
    toggle(): void;
}
export declare abstract class SuiPopupController implements IPopup, OnDestroy {
    protected _renderer: Renderer2;
    protected _element: ElementRef;
    protected _componentFactory: SuiComponentFactory;
    private _componentRef;
    readonly popup: SuiPopup;
    private _openingTimeout;
    private _documentListener;
    constructor(_renderer: Renderer2, _element: ElementRef, _componentFactory: SuiComponentFactory, config: PopupConfig);
    configure(config?: IPopupConfig): void;
    openDelayed(): void;
    open(): void;
    close(): void;
    toggleDelayed(): void;
    toggle(): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    onClick(): void;
    private onDocumentClick;
    onFocusIn(): void;
    onFocusOut(e: any): void;
    protected cleanup(): void;
    ngOnDestroy(): void;
}
