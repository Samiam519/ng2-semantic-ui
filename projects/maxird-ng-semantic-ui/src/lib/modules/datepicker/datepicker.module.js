"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var localization_module_1 = require("../../behaviors/localization/localization.module");
var util_module_1 = require("../../misc/util/util.module");
var popup_module_1 = require("../popup/popup.module");
var calendar_view_title_1 = require("./components/calendar-view-title");
var datepicker_1 = require("./components/datepicker");
var calendar_item_1 = require("./directives/calendar-item");
var datepicker_directive_1 = require("./directives/datepicker.directive");
var input_directive_1 = require("./directives/input.directive");
var date_view_1 = require("./views/date-view");
var hour_view_1 = require("./views/hour-view");
var minute_view_1 = require("./views/minute-view");
var month_view_1 = require("./views/month-view");
var year_view_1 = require("./views/year-view");
var SuiDatepickerModule = /** @class */ (function () {
    function SuiDatepickerModule() {
    }
    SuiDatepickerModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                popup_module_1.SuiPopupModule,
                localization_module_1.SuiLocalizationModule,
                util_module_1.SuiUtilityModule
            ],
            declarations: [
                calendar_item_1.SuiCalendarItem,
                calendar_view_title_1.SuiCalendarViewTitle,
                year_view_1.SuiCalendarYearView,
                month_view_1.SuiCalendarMonthView,
                date_view_1.SuiCalendarDateView,
                hour_view_1.SuiCalendarHourView,
                minute_view_1.SuiCalendarMinuteView,
                datepicker_1.SuiDatepicker,
                datepicker_directive_1.SuiDatepickerDirective,
                datepicker_directive_1.SuiDatepickerDirectiveValueAccessor,
                datepicker_directive_1.SuiDatepickerDirectiveValidator,
                input_directive_1.SuiDatepickerInputDirective
            ],
            exports: [
                datepicker_directive_1.SuiDatepickerDirective,
                datepicker_directive_1.SuiDatepickerDirectiveValueAccessor,
                datepicker_directive_1.SuiDatepickerDirectiveValidator,
                input_directive_1.SuiDatepickerInputDirective
            ],
            entryComponents: [
                datepicker_1.SuiDatepicker
            ]
        })
    ], SuiDatepickerModule);
    return SuiDatepickerModule;
}());
exports.SuiDatepickerModule = SuiDatepickerModule;
