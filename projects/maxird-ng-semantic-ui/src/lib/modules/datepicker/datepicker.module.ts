import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SuiLocalizationModule } from '../../behaviors/localization/localization.module';
import { SuiUtilityModule } from '../../misc/util/util.module';
import { SuiPopupModule } from '../popup/popup.module';
import { SuiCalendarViewTitle } from "./components/calendar-view-title";
import { SuiDatepicker } from "./components/datepicker";
import { SuiCalendarItem } from "./directives/calendar-item";
import { SuiDatepickerDirective, SuiDatepickerDirectiveValidator, SuiDatepickerDirectiveValueAccessor } from "./directives/datepicker.directive";
import { SuiDatepickerInputDirective } from "./directives/input.directive";
import { SuiCalendarDateView } from "./views/date-view";
import { SuiCalendarHourView } from "./views/hour-view";
import { SuiCalendarMinuteView } from "./views/minute-view";
import { SuiCalendarMonthView } from "./views/month-view";
import { SuiCalendarYearView } from "./views/year-view";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SuiPopupModule,
        SuiLocalizationModule,
        SuiUtilityModule
    ],
    declarations: [
        SuiCalendarItem,

        SuiCalendarViewTitle,
        SuiCalendarYearView,
        SuiCalendarMonthView,
        SuiCalendarDateView,
        SuiCalendarHourView,
        SuiCalendarMinuteView,

        SuiDatepicker,
        SuiDatepickerDirective,
        SuiDatepickerDirectiveValueAccessor,
        SuiDatepickerDirectiveValidator,
        SuiDatepickerInputDirective
    ],
    exports: [
        SuiDatepickerDirective,
        SuiDatepickerDirectiveValueAccessor,
        SuiDatepickerDirectiveValidator,
        SuiDatepickerInputDirective
    ],
    entryComponents: [
        SuiDatepicker
    ]
})
export class SuiDatepickerModule {}
