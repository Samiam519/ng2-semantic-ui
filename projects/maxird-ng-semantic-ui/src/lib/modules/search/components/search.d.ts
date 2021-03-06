import { AfterViewInit, ElementRef, EventEmitter, Renderer2, TemplateRef } from "@angular/core";
import { ISearchLocaleValues, RecursivePartial } from '../../../behaviors/localization/locales/interfaces/values';
import { SuiLocalizationService } from '../../../behaviors/localization/services/localization.service';
import { IFocusEvent } from '../../../misc/util/helpers/focus-event';
import { ITemplateRefContext } from '../../../misc/util/helpers/util';
import { DropdownService } from '../../dropdown/services/dropdown.service';
import { FilterFn, LookupFn } from "../helpers/lookup-fn";
import { SearchService } from "../services/search.service";
export interface IResultContext<T> extends ITemplateRefContext<T> {
    query: string;
}
export declare class SuiSearch<T> implements AfterViewInit {
    private _element;
    private _localizationService;
    dropdownService: DropdownService;
    searchService: SearchService<T, T>;
    private _menu;
    readonly hasClasses: boolean;
    readonly tabindex: number;
    readonly isActive: boolean;
    hasIcon: boolean;
    private _placeholder;
    placeholder: string;
    private _localeValues;
    localeOverrides: RecursivePartial<ISearchLocaleValues>;
    readonly localeValues: ISearchLocaleValues;
    query: string;
    options: T[] | undefined;
    optionsFilter: FilterFn<T> | undefined;
    optionsLookup: LookupFn<T> | undefined;
    optionsField: string | undefined;
    private _resultFormatter?;
    resultFormatter: (result: T, query: string) => string;
    resultTemplate: TemplateRef<IResultContext<T>>;
    retainSelectedResult: boolean;
    searchDelay: number;
    readonly isSearching: boolean;
    maxResults: number;
    readonly results: T[];
    selectedResult?: T;
    onResultSelected: EventEmitter<T>;
    transition: string;
    transitionDuration: number;
    constructor(_element: ElementRef, renderer: Renderer2, _localizationService: SuiLocalizationService);
    ngAfterViewInit(): void;
    private onLocaleUpdate;
    select(result: T): void;
    onClick(e: MouseEvent): void;
    onFocusIn(): void;
    private open;
    onFocusOut(e: IFocusEvent): void;
    readValue(object: T): string;
}
