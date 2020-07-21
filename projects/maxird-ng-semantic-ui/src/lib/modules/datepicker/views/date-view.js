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
var CalendarRangeDateService = /** @class */ (function (_super) {
    __extends(CalendarRangeDateService, _super);
    function CalendarRangeDateService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarRangeDateService.prototype.calcStart = function (start) {
        var monthStart = date_1.DateUtil.startOf(date_1.DatePrecision.Month, date_1.DateUtil.clone(start));
        monthStart.setDate((1 - monthStart.getDay() + this.service.firstDayOfWeek - 7) % 7);
        return monthStart;
    };
    CalendarRangeDateService.prototype.configureItem = function (item, baseDate) {
        item.humanReadable = item.date.getDate().toString();
        item.isOutsideRange = item.date.getMonth() !== baseDate.getMonth();
        item.isSelectable = item.isDisabled;
    };
    return CalendarRangeDateService;
}(calendar_range_service_1.CalendarRangeService));
exports.CalendarRangeDateService = CalendarRangeDateService;
var SuiCalendarDateView = /** @class */ (function (_super) {
    __extends(SuiCalendarDateView, _super);
    function SuiCalendarDateView(renderer) {
        return _super.call(this, renderer, calendar_view_1.CalendarViewType.Date, new CalendarRangeDateService(date_1.DatePrecision.Month, 6, 7)) || this;
    }
    Object.defineProperty(SuiCalendarDateView.prototype, "days", {
        get: function () {
            var _this = this;
            var days = this.service.localeValues.weekdaysNarrow;
            return days.map(function (d, i) { return days[(i + _this.service.firstDayOfWeek) % days.length]; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCalendarDateView.prototype, "date", {
        get: function () {
            return new date_parser_1.DateParser(this.service.localeValues.formats.month, this.service.localeValues).format(this.currentDate);
        },
        enumerable: true,
        configurable: true
    });
    SuiCalendarDateView = __decorate([
        core_1.Component({
            selector: "sui-calendar-date-view",
            template: "\n<table class=\"ui celled center aligned unstackable table seven column day\">\n<thead>\n    <tr>\n        <th colspan=\"7\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ date }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n    <tr>\n        <th *ngFor=\"let day of days\">{{ day }}</th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
        })
    ], SuiCalendarDateView);
    return SuiCalendarDateView;
}(calendar_view_1.CalendarView));
exports.SuiCalendarDateView = SuiCalendarDateView;
