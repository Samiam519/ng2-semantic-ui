import { Renderer2, ElementRef, EventEmitter } from "@angular/core";
import { SidebarService, SidebarTransition, SidebarDirection } from "../services/sidebar.service";
export declare class SuiSidebar {
    private _renderer;
    private _element;
    service: SidebarService;
    readonly hasClasses: boolean;
    transition: SidebarTransition;
    direction: SidebarDirection;
    isVisible: boolean;
    readonly isVisibleChange: EventEmitter<boolean>;
    readonly isAnimating: boolean;
    constructor(_renderer: Renderer2, _element: ElementRef);
    private updateDimensions;
    private setClass;
    open(): void;
    close(): void;
    toggle(): void;
}
