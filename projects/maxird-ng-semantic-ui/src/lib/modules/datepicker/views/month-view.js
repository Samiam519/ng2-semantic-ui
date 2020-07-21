"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var date_1 = require("../../../misc/util/helpers/date");
var date_parser_1 = require("../classes/date-parser");
var calendar_range_service_1 = require("../services/calendar-range.service");
var calendar_view_1 = require("./calendar-view");
var CalendarRangeMonthService = /** @class */ (function (_super) {
    __extends(CalendarRangeMonthService, _super);
    function CalendarRangeMonthService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarRangeMonthService.prototype.configureItem = function (item, baseDate) {
        item.humanReadable = this.service.localeValues.monthsShort[item.date.getMonth()];
        item.isOutsideRange = false;
    };
    return CalendarRangeMonthService;
}(calendar_range_service_1.CalendarRangeService));
exports.CalendarRangeMonthService = CalendarRangeMonthService;
var SuiCalendarMonthView = /** @class */ (function (_super) {
    __extends(SuiCalendarMonthView, _super);
    function SuiCalendarMonthView(renderer) {
        return _super.call(this, renderer, calendar_view_1.CalendarViewType.Month, new CalendarRangeMonthService(date_1.DatePrecision.Year, 4, 3)) || this;
    }
    Object.defineProperty(SuiCalendarMonthView.prototype, "year", {
        get: function () {
            return new date_parser_1.DateParser(this.service.localeValues.formats.year, this.service.localeValues).format(this.currentDate);
        },
        enumerable: true,
        configurable: true
    });
    SuiCalendarMonthView = __decorate([
        core_1.Component({
            selector: "sui-calendar-month-view",
            template: "\n<table class=\"ui celled center aligned unstackable table three column month\">\n<thead>\n    <tr>\n        <th colspan=\"3\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ year }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
        })
    ], SuiCalendarMonthView);
    return SuiCalendarMonthView;
}(calendar_view_1.CalendarView));
exports.SuiCalendarMonthView = SuiCalendarMonthView;
