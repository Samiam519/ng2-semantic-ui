import { Renderer2 } from "@angular/core";
import { CalendarItem } from "../directives/calendar-item";
import { CalendarRangeService } from "../services/calendar-range.service";
import { CalendarView } from "./calendar-view";
export declare class CalendarRangeHourService extends CalendarRangeService {
    configureItem(item: CalendarItem, baseDate: Date): void;
}
export declare class SuiCalendarHourView extends CalendarView {
    readonly date: string;
    constructor(renderer: Renderer2);
}
