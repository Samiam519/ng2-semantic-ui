import { EventEmitter } from "@angular/core";
export declare type DropdownAutoCloseType = "itemClick" | "outsideClick" | "disabled";
export declare const DropdownAutoCloseType: {
    ItemClick: import("../../../../../../../dist/public_api").DropdownAutoCloseType;
    OutsideClick: import("../../../../../../../dist/public_api").DropdownAutoCloseType;
    Disabled: import("../../../../../../../dist/public_api").DropdownAutoCloseType;
};
export declare class DropdownService {
    isOpen: boolean;
    isAnimating: boolean;
    isOpenChange: EventEmitter<boolean>;
    isDisabled: boolean;
    autoCloseMode: DropdownAutoCloseType;
    parent?: DropdownService;
    children: DropdownService[];
    readonly isNested: boolean;
    constructor(autoCloseMode?: DropdownAutoCloseType);
    setOpenState(isOpen: boolean, reflectInParent?: boolean): void;
    setDisabledState(isDisabled: boolean): void;
    toggleOpenState(): void;
    registerChild(child: DropdownService): void;
    isChildRegistered(child: DropdownService): boolean;
    clearChildren(): void;
    private delay;
}
