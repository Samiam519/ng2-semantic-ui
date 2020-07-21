import { ChangeDetectorRef, ElementRef, EventEmitter, Renderer2, ViewContainerRef } from "@angular/core";
import { HandledEvent } from '../../../misc/util/helpers/util';
import { SuiDropdownMenuItem } from '../../dropdown/directives/dropdown-menu';
export declare class SuiSelectOption<T> extends SuiDropdownMenuItem {
    changeDetector: ChangeDetectorRef;
    readonly hasClasses: boolean;
    value: T;
    onSelected: EventEmitter<T>;
    isActive: boolean;
    renderedText?: string;
    formatter: (obj: T) => string;
    usesTemplate: boolean;
    templateSibling: ViewContainerRef;
    constructor(renderer: Renderer2, element: ElementRef, changeDetector: ChangeDetectorRef);
    onClick(e: HandledEvent): void;
}
