import { AfterViewInit, OnDestroy, Renderer2 } from "@angular/core";
import { CalendarItem } from "../directives/calendar-item";
import { CalendarRangeService } from "../services/calendar-range.service";
import { CalendarService } from "../services/calendar.service";
export declare enum CalendarViewType {
    Year = 0,
    Month = 1,
    Date = 2,
    Hour = 3,
    Minute = 4
}
export declare type CalendarViewResult = [Date, CalendarViewType];
export declare abstract class CalendarView implements AfterViewInit, OnDestroy {
    private _type;
    private _service;
    private _renderedItems;
    private _highlightedItem?;
    service: CalendarService;
    ranges: CalendarRangeService;
    readonly currentDate: Date;
    readonly selectedDate: Date | undefined;
    private _documentKeyDownListener;
    constructor(renderer: Renderer2, viewType: CalendarViewType, ranges: CalendarRangeService);
    setDate(item: CalendarItem): void;
    zoomOut(): void;
    ngAfterViewInit(): void;
    private onRenderedItemsChanged;
    private autoHighlight;
    private highlightItem;
    private onDocumentKeyDown;
    ngOnDestroy(): void;
}
