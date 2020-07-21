import { EventEmitter } from "@angular/core";
export declare type SidebarTransition = "overlay" | "push" | "scale down" | "uncover" | "slide along" | "slide out";
export declare const SidebarTransition: {
    Overlay: import("../../../../../../../dist/public_api").SidebarTransition;
    Push: import("../../../../../../../dist/public_api").SidebarTransition;
    ScaleDown: import("../../../../../../../dist/public_api").SidebarTransition;
    Uncover: import("../../../../../../../dist/public_api").SidebarTransition;
    SlideAlong: import("../../../../../../../dist/public_api").SidebarTransition;
    SlideOut: import("../../../../../../../dist/public_api").SidebarTransition;
};
export declare type SidebarDirection = "left" | "right" | "top" | "bottom";
export declare const SidebarDirection: {
    Left: import("popper.js").default.Position;
    Right: import("popper.js").default.Position;
    Top: import("popper.js").default.Position;
    Bottom: import("popper.js").default.Position;
};
export declare class SidebarService {
    isVisible: boolean;
    isAnimating: boolean;
    wasJustOpened: boolean;
    direction: SidebarDirection;
    private _width;
    private _height;
    width: number;
    height: number;
    isVisibleChange: EventEmitter<boolean>;
    widthChange: EventEmitter<void>;
    heightChange: EventEmitter<void>;
    private _isAnimatingTimeout;
    transition: SidebarTransition;
    constructor(isVisible?: boolean);
    setVisibleState(isVisible: boolean): void;
    toggleVisibleState(): void;
}
