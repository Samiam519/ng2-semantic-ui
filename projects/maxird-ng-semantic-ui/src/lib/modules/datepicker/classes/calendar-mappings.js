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
Object.defineProperty(exports, "__esModule", { value: true });
var calendar_view_1 = require("../views/calendar-view");
var CalendarMappings = /** @class */ (function () {
    function CalendarMappings() {
    }
    return CalendarMappings;
}());
exports.CalendarMappings = CalendarMappings;
var DateMappings = /** @class */ (function (_super) {
    __extends(DateMappings, _super);
    function DateMappings() {
        var _this = _super.call(this) || this;
        _this.initialView = calendar_view_1.CalendarViewType.Date;
        _this.finalView = calendar_view_1.CalendarViewType.Date;
        _this.changed = new Map([
            [calendar_view_1.CalendarViewType.Year, calendar_view_1.CalendarViewType.Month],
            [calendar_view_1.CalendarViewType.Month, calendar_view_1.CalendarViewType.Date],
            [calendar_view_1.CalendarViewType.Date, calendar_view_1.CalendarViewType.Date]
        ]);
        _this.zoom = new Map([
            [calendar_view_1.CalendarViewType.Year, calendar_view_1.CalendarViewType.Date],
            [calendar_view_1.CalendarViewType.Month, calendar_view_1.CalendarViewType.Year],
            [calendar_view_1.CalendarViewType.Date, calendar_view_1.CalendarViewType.Month]
        ]);
        return _this;
    }
    return DateMappings;
}(CalendarMappings));
exports.DateMappings = DateMappings;
var TimeMappings = /** @class */ (function (_super) {
    __extends(TimeMappings, _super);
    function TimeMappings() {
        var _this = _super.call(this) || this;
        _this.initialView = calendar_view_1.CalendarViewType.Hour;
        _this.finalView = calendar_view_1.CalendarViewType.Minute;
        _this.changed = new Map([
            [calendar_view_1.CalendarViewType.Hour, calendar_view_1.CalendarViewType.Minute],
            [calendar_view_1.CalendarViewType.Minute, calendar_view_1.CalendarViewType.Minute]
        ]);
        _this.zoom = new Map([
            [calendar_view_1.CalendarViewType.Hour, calendar_view_1.CalendarViewType.Minute],
            [calendar_view_1.CalendarViewType.Minute, calendar_view_1.CalendarViewType.Hour]
        ]);
        return _this;
    }
    return TimeMappings;
}(CalendarMappings));
exports.TimeMappings = TimeMappings;
var DatetimeMappings = /** @class */ (function (_super) {
    __extends(DatetimeMappings, _super);
    function DatetimeMappings() {
        var _this = _super.call(this) || this;
        _this.initialView = calendar_view_1.CalendarViewType.Date;
        _this.finalView = calendar_view_1.CalendarViewType.Minute;
        _this.changed = new Map([
            [calendar_view_1.CalendarViewType.Year, calendar_view_1.CalendarViewType.Month],
            [calendar_view_1.CalendarViewType.Month, calendar_view_1.CalendarViewType.Date],
            [calendar_view_1.CalendarViewType.Date, calendar_view_1.CalendarViewType.Hour],
            [calendar_view_1.CalendarViewType.Hour, calendar_view_1.CalendarViewType.Minute],
            [calendar_view_1.CalendarViewType.Minute, calendar_view_1.CalendarViewType.Minute]
        ]);
        _this.zoom = new Map([
            [calendar_view_1.CalendarViewType.Year, calendar_view_1.CalendarViewType.Date],
            [calendar_view_1.CalendarViewType.Month, calendar_view_1.CalendarViewType.Year],
            [calendar_view_1.CalendarViewType.Date, calendar_view_1.CalendarViewType.Month],
            [calendar_view_1.CalendarViewType.Hour, calendar_view_1.CalendarViewType.Date],
            [calendar_view_1.CalendarViewType.Minute, calendar_view_1.CalendarViewType.Hour]
        ]);
        return _this;
    }
    return DatetimeMappings;
}(CalendarMappings));
exports.DatetimeMappings = DatetimeMappings;
var MonthMappings = /** @class */ (function (_super) {
    __extends(MonthMappings, _super);
    function MonthMappings() {
        var _this = _super.call(this) || this;
        _this.initialView = calendar_view_1.CalendarViewType.Month;
        _this.finalView = calendar_view_1.CalendarViewType.Month;
        _this.changed = new Map([
            [calendar_view_1.CalendarViewType.Year, calendar_view_1.CalendarViewType.Month],
            [calendar_view_1.CalendarViewType.Month, calendar_view_1.CalendarViewType.Month]
        ]);
        _this.zoom = new Map([
            [calendar_view_1.CalendarViewType.Year, calendar_view_1.CalendarViewType.Month],
            [calendar_view_1.CalendarViewType.Month, calendar_view_1.CalendarViewType.Year]
        ]);
        return _this;
    }
    return MonthMappings;
}(CalendarMappings));
exports.MonthMappings = MonthMappings;
var YearMappings = /** @class */ (function (_super) {
    __extends(YearMappings, _super);
    function YearMappings() {
        var _this = _super.call(this) || this;
        _this.initialView = calendar_view_1.CalendarViewType.Year;
        _this.finalView = calendar_view_1.CalendarViewType.Year;
        _this.changed = new Map([
            [calendar_view_1.CalendarViewType.Year, calendar_view_1.CalendarViewType.Year]
        ]);
        _this.zoom = new Map([
            [calendar_view_1.CalendarViewType.Year, calendar_view_1.CalendarViewType.Year]
        ]);
        return _this;
    }
    return YearMappings;
}(CalendarMappings));
exports.YearMappings = YearMappings;
