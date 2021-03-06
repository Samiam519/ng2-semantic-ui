import { ElementRef, Renderer2 } from "@angular/core";
import { SuiLocalizationService } from '../../../behaviors/localization/services/localization.service';
import { DateParser } from "../classes/date-parser";
import "../helpers/is-webview";
import { SuiDatepickerDirective, SuiDatepickerDirectiveValueAccessor } from "./datepicker.directive";
export declare class SuiDatepickerInputDirective {
    datepicker: SuiDatepickerDirective;
    valueAccessor: SuiDatepickerDirectiveValueAccessor;
    private _renderer;
    private _element;
    private _useNativeOnMobile;
    useNativeOnMobile: boolean;
    private _fallbackActive;
    fallbackActive: boolean;
    readonly parser: DateParser;
    private _currentInputValue;
    private _lastUpdateTyped;
    readonly selectedDateString: string | undefined;
    readonly type: string;
    readonly max: string | undefined;
    readonly min: string | undefined;
    constructor(datepicker: SuiDatepickerDirective, valueAccessor: SuiDatepickerDirectiveValueAccessor, _renderer: Renderer2, _element: ElementRef, localizationService: SuiLocalizationService);
    private updateValue;
    typeValue(value: string | undefined): void;
    onFocusOut(): void;
}
