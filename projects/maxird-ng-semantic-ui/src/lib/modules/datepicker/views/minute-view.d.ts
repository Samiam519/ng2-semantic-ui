import { Renderer2 } from "@angular/core";
import { CalendarItem } from "../directives/calendar-item";
import { CalendarRangeService } from "../services/calendar-range.service";
import { CalendarView } from "./calendar-view";
export declare class CalendarRangeMinuteService extends CalendarRangeService {
    calcStart(start: Date): Date;
    calcDates(start: Date): Date[];
    configureItem(item: CalendarItem, baseDate: Date): void;
}
export declare class SuiCalendarMinuteView extends CalendarView {
    readonly date: string;
    constructor(renderer: Renderer2);
}
