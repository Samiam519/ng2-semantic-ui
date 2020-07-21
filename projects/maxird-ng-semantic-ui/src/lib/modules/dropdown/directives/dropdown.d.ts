import { AfterContentInit, ElementRef, EventEmitter } from "@angular/core";
import { IFocusEvent } from '../../../misc/util/helpers/focus-event';
import { HandledEvent } from '../../../misc/util/helpers/util';
import { DropdownAutoCloseType, DropdownService } from "../services/dropdown.service";
export declare class SuiDropdown implements AfterContentInit {
    private _element;
    service: DropdownService;
    private _menu;
    private _children;
    readonly children: SuiDropdown[];
    readonly isOpenChange: EventEmitter<boolean>;
    readonly isActive: boolean;
    isOpen: boolean;
    isDisabled: boolean;
    private _tabIndex?;
    readonly tabIndex: number | undefined;
    autoClose: DropdownAutoCloseType;
    constructor(_element: ElementRef);
    ngAfterContentInit(): void;
    private childrenUpdated;
    onClick(e: HandledEvent): void;
    onFocusOut(e: IFocusEvent): void;
    onKeypress(e: HandledEvent & KeyboardEvent): void;
    private externallyClose;
}
