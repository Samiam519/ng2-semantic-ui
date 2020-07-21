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
var util_1 = require("../../../misc/util/helpers/util");
var calendar_range_service_1 = require("../services/calendar-range.service");
var calendar_view_1 = require("./calendar-view");
var CalendarRangeYearService = /** @class */ (function (_super) {
    __extends(CalendarRangeYearService, _super);
    function CalendarRangeYearService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarRangeYearService.prototype.configureItem = function (item, baseDate) {
        item.humanReadable = util_1.Util.String.padLeft(item.date.getFullYear().toString(), 4, "0");
        item.isOutsideRange = item.date.getFullYear() >= this.calcStart(baseDate).getFullYear() + 10;
    };
    return CalendarRangeYearService;
}(calendar_range_service_1.CalendarRangeService));
exports.CalendarRangeYearService = CalendarRangeYearService;
var SuiCalendarYearView = /** @class */ (function (_super) {
    __extends(SuiCalendarYearView, _super);
    function SuiCalendarYearView(renderer) {
        return _super.call(this, renderer, calendar_view_1.CalendarViewType.Year, new CalendarRangeYearService(date_1.DatePrecision.Decade, 4, 3)) || this;
    }
    Object.defineProperty(SuiCalendarYearView.prototype, "decadeStart", {
        get: function () {
            return date_1.DateUtil
                .startOf(date_1.DatePrecision.Decade, date_1.DateUtil.clone(this.service.currentDate))
                .getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    SuiCalendarYearView.prototype.pad = function (year) {
        return util_1.Util.String.padLeft(year.toString(), 4, "0");
    };
    SuiCalendarYearView = __decorate([
        core_1.Component({
            selector: "sui-calendar-year-view",
            template: "\n<table class=\"ui celled center aligned unstackable table three column year\">\n<thead>\n    <tr>\n        <th colspan=\"3\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ pad(decadeStart) }} - {{ pad(decadeStart + 10) }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
        })
    ], SuiCalendarYearView);
    return SuiCalendarYearView;
}(calendar_view_1.CalendarView));
exports.SuiCalendarYearView = SuiCalendarYearView;
