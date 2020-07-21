import { AfterContentInit, ElementRef, EventEmitter, OnDestroy, QueryList, TemplateRef, ViewContainerRef } from "@angular/core";
import { ISelectLocaleValues, RecursivePartial } from '../../../behaviors/localization/locales/interfaces/values';
import { SuiLocalizationService } from '../../../behaviors/localization/services/localization.service';
import { IFocusEvent } from '../../../misc/util/helpers/focus-event';
import { HandledEvent, ITemplateRefContext } from '../../../misc/util/helpers/util';
import { SuiDropdownMenu } from '../../dropdown/directives/dropdown-menu';
import { DropdownService } from '../../dropdown/services/dropdown.service';
import { FilterFn, LookupFn } from '../../search/helpers/lookup-fn';
import { SearchService } from '../../search/services/search.service';
import { SuiSelectOption } from "../components/select-option";
import { SuiSelectSearch } from "../directives/select-search";
export interface IOptionContext<T> extends ITemplateRefContext<T> {
    query?: string;
}
export declare abstract class SuiSelectBase<T, U> implements AfterContentInit, OnDestroy {
    private _element;
    protected _localizationService: SuiLocalizationService;
    dropdownService: DropdownService;
    searchService: SearchService<T, U>;
    protected _menu: SuiDropdownMenu;
    protected _renderedOptions: QueryList<SuiSelectOption<T>>;
    private _renderedSubscriptions;
    readonly hasClasses: boolean;
    readonly isActive: boolean;
    readonly isVisible: boolean;
    isSearchable: boolean;
    isSearchExternal: boolean;
    readonly hasSearchClass: boolean;
    readonly isSearching: boolean;
    private _internalSearch?;
    private _manualSearch?;
    readonly searchInput: SuiSelectSearch | undefined;
    private _tabIndex?;
    readonly tabindex: number;
    isDisabled: boolean;
    options: T[];
    optionsFilter: FilterFn<T> | undefined;
    optionsLookup: LookupFn<T, U> | undefined;
    readonly filteredOptions: T[];
    readonly availableOptions: T[];
    query: string | undefined;
    labelField: string | undefined;
    readonly labelGetter: (obj: T) => string;
    valueField: string;
    readonly valueGetter: (obj: T) => U;
    optionTemplate: TemplateRef<IOptionContext<T>>;
    private _optionFormatter?;
    readonly configuredFormatter: (option: T) => string;
    optionFormatter: ((option: T, query?: string) => string) | undefined;
    private _localeValues;
    localeOverrides: RecursivePartial<ISelectLocaleValues>;
    readonly localeValues: ISelectLocaleValues;
    icon: string;
    transition: string;
    transitionDuration: number;
    onTouched: EventEmitter<void>;
    constructor(_element: ElementRef, _localizationService: SuiLocalizationService);
    ngAfterContentInit(): void;
    private onLocaleUpdate;
    protected optionsUpdateHook(): void;
    protected queryUpdateHook(): void;
    protected updateQuery(query: string): void;
    protected resetQuery(delayed?: boolean): void;
    protected onAvailableOptionsRendered(): void;
    protected initialiseRenderedOption(option: SuiSelectOption<T>): void;
    abstract selectOption(option: T): void;
    protected findOption(options: T[], value: U): T | undefined;
    onCaretClick(e: HandledEvent): void;
    onClick(e: HandledEvent): void;
    onFocusIn(): void;
    onFocusOut(e: IFocusEvent): void;
    onKeyPress(e: KeyboardEvent): void;
    onKeyDown(e: KeyboardEvent): void;
    onQueryInputKeydown(event: KeyboardEvent): void;
    protected focus(): void;
    protected drawTemplate(siblingRef: ViewContainerRef, value: T): void;
    ngOnDestroy(): void;
}
