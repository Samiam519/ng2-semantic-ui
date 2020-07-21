import { ElementRef } from "@angular/core";
import { Data } from "popper.js";
export declare type PositioningPlacement = "auto" | "top left" | "top" | "top right" | "bottom left" | "bottom" | "bottom right" | "left top" | "left" | "left bottom" | "right top" | "right" | "right bottom";
export declare const PositioningPlacement: {
    Auto: import("../../../../../../../dist/public_api").PopupPlacement;
    TopLeft: import("../../../../../../../dist/public_api").PopupPlacement;
    Top: import("../../../../../../../dist/public_api").PopupPlacement;
    TopRight: import("../../../../../../../dist/public_api").PopupPlacement;
    LeftTop: import("../../../../../../../dist/public_api").PopupPlacement;
    Left: import("../../../../../../../dist/public_api").PopupPlacement;
    LeftBottom: import("../../../../../../../dist/public_api").PopupPlacement;
    BottomLeft: import("../../../../../../../dist/public_api").PopupPlacement;
    Bottom: import("../../../../../../../dist/public_api").PopupPlacement;
    BottomRight: import("../../../../../../../dist/public_api").PopupPlacement;
    RightTop: import("../../../../../../../dist/public_api").PopupPlacement;
    Right: import("../../../../../../../dist/public_api").PopupPlacement;
    RightBottom: import("../../../../../../../dist/public_api").PopupPlacement;
};
export interface IPositionBoundingBox {
    width: number;
    height: number;
    top: number;
    left: number;
    bottom: number;
    right: number;
}
export declare class PositioningService {
    readonly anchor: ElementRef;
    readonly subject: ElementRef;
    private _popper;
    private _popperState;
    private _placement;
    private _hasArrow;
    private _arrowSelector;
    placement: PositioningPlacement;
    hasArrow: boolean;
    readonly actualPlacement: PositioningPlacement;
    readonly state: Data;
    constructor(anchor: ElementRef, subject: ElementRef, placement: PositioningPlacement, arrowSelector?: string);
    init(): void;
    update(): void;
    destroy(): void;
    private calculateOffsets;
}
