import { ElementRef, EventEmitter, OnChanges, Renderer2, SimpleChanges } from "@angular/core";
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { IDatepickerLocaleValues, RecursivePartial } from '../../../behaviors/localization/locales/interfaces/values';
import { SuiLocalizationService } from '../../../behaviors/localization/services/localization.service';
import { CustomValidator, ICustomValidatorHost } from '../../../misc/util/helpers/custom-validator';
import { CustomValueAccessor, ICustomValueAccessorHost } from '../../../misc/util/helpers/custom-value-accessor';
import { SuiComponentFactory } from '../../../misc/util/services/component-factory.service';
import { PositioningPlacement } from '../../../misc/util/services/positioning.service';
import { SuiPopupComponentController } from '../../popup/classes/popup-component-controller';
import { PopupAfterOpen } from '../../popup/classes/popup-lifecycle';
import { CalendarConfig } from "../classes/calendar-config";
import { DatepickerMode, SuiDatepicker } from "../components/datepicker";
export declare class SuiDatepickerDirective extends SuiPopupComponentController<SuiDatepicker> implements ICustomValueAccessorHost<Date>, ICustomValidatorHost, OnChanges, PopupAfterOpen {
    localizationService: SuiLocalizationService;
    private _selectedDate?;
    selectedDate: Date | undefined;
    private _mode;
    config: CalendarConfig;
    mode: DatepickerMode;
    initialDate?: Date;
    maxDate?: Date;
    minDate?: Date;
    firstDayOfWeek?: number;
    private _localeValues;
    localeOverrides: RecursivePartial<IDatepickerLocaleValues>;
    readonly localeValues: IDatepickerLocaleValues;
    placement: PositioningPlacement;
    transition: string;
    transitionDuration: number;
    onSelectedDateChange: EventEmitter<Date>;
    onValidatorChange: EventEmitter<void>;
    constructor(renderer: Renderer2, element: ElementRef, componentFactory: SuiComponentFactory, localizationService: SuiLocalizationService);
    popupOnOpen(): void;
    ngOnChanges({ maxDate, minDate, mode }: SimpleChanges): void;
    private onLocaleUpdate;
    validate(c: AbstractControl): ValidationErrors | null;
    writeValue(value: Date | undefined): void;
    onKeyDown(e: KeyboardEvent): void;
}
export declare class SuiDatepickerDirectiveValueAccessor extends CustomValueAccessor<Date, SuiDatepickerDirective> {
    host: SuiDatepickerDirective;
    constructor(host: SuiDatepickerDirective);
}
export declare class SuiDatepickerDirectiveValidator extends CustomValidator<SuiDatepickerDirective> {
    host: SuiDatepickerDirective;
    constructor(host: SuiDatepickerDirective);
}
