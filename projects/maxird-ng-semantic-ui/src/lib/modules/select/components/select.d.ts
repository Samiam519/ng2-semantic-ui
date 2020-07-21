import { ElementRef, EventEmitter } from "@angular/core";
import { SuiLocalizationService } from '../../../behaviors/localization/services/localization.service';
import { CustomValueAccessor, ICustomValueAccessorHost } from '../../../misc/util/helpers/custom-value-accessor';
import { SuiSelectBase } from "../classes/select-base";
import { SuiSelectOption } from "./select-option";
export declare class SuiSelect<T, U> extends SuiSelectBase<T, U> implements ICustomValueAccessorHost<U> {
    selectedOption?: T;
    private _writtenOption?;
    private _optionTemplateSibling;
    selectedOptionChange: EventEmitter<U>;
    private _placeholder;
    placeholder: string;
    constructor(element: ElementRef, localizationService: SuiLocalizationService);
    protected optionsUpdateHook(): void;
    protected queryUpdateHook(): void;
    selectOption(option: T): void;
    writeValue(value: U): void;
    protected initialiseRenderedOption(option: SuiSelectOption<T>): void;
    private drawSelectedOption;
}
export declare class SuiSelectValueAccessor<T, U> extends CustomValueAccessor<U, SuiSelect<T, U>> {
    constructor(host: SuiSelect<T, U>);
}
