import { AfterContentInit, ChangeDetectorRef, ElementRef, OnDestroy, QueryList, Renderer2 } from "@angular/core";
import "element-closest";
import { HandledEvent, KeyCode } from '../../../misc/util/helpers/util';
import { SuiTransition } from '../../transition/directives/transition';
import { DropdownService } from "../services/dropdown.service";
export declare class SuiDropdownMenuItem {
    private _renderer;
    element: ElementRef;
    readonly isDisabled: boolean;
    private _isSelected;
    isSelected: boolean;
    selectedClass: string;
    childDropdownMenu: SuiDropdownMenu;
    readonly hasChildDropdown: boolean;
    constructor(_renderer: Renderer2, element: ElementRef);
    performClick(): void;
}
export declare class SuiDropdownMenu extends SuiTransition implements AfterContentInit, OnDestroy {
    private _service;
    private _transitionController;
    menuTransition: string;
    menuTransitionDuration: number;
    service: DropdownService;
    parentElement: ElementRef;
    private _itemsQueryInternal;
    private _itemsQueryOverride;
    items: QueryList<SuiDropdownMenuItem>;
    private readonly _itemsQuery;
    private readonly _items;
    selectedItems: SuiDropdownMenuItem[];
    menuAutoSelectFirst: boolean;
    menuSelectedItemClass: string;
    private _parentKeyDownListener;
    constructor(renderer: Renderer2, element: ElementRef, changeDetector: ChangeDetectorRef);
    onClick(e: HandledEvent & MouseEvent): void;
    onParentKeyDown(e: KeyboardEvent): void;
    resetSelection(): void;
    updateSelection(selectedItem: SuiDropdownMenuItem, keyCode: KeyCode): SuiDropdownMenuItem;
    scrollToItem(item: SuiDropdownMenuItem): void;
    ngAfterContentInit(): void;
    private onItemsChanged;
    ngOnDestroy(): void;
}
