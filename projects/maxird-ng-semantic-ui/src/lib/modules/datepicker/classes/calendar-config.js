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
var date_1 = require("../../../misc/util/helpers/date");
var calendar_service_1 = require("../services/calendar.service");
var calendar_mappings_1 = require("./calendar-mappings");
var CalendarConfig = /** @class */ (function () {
    function CalendarConfig(mode, precision, mappings, fallback) {
        this.mode = mode;
        this.precision = precision;
        this.mappings = mappings;
        this.fallback = fallback;
    }
    CalendarConfig.prototype.updateBounds = function (providedDate) {
        this.dateMinBound = date_1.DateUtil.startOf(date_1.DatePrecision.Year, new Date(), true);
        this.dateMinBound.setFullYear(0);
    };
    return CalendarConfig;
}());
exports.CalendarConfig = CalendarConfig;
var DateConfigBase = /** @class */ (function (_super) {
    __extends(DateConfigBase, _super);
    function DateConfigBase(precision, mappings, fallback) {
        return _super.call(this, calendar_service_1.CalendarMode.DateOnly, precision, mappings, fallback) || this;
    }
    return DateConfigBase;
}(CalendarConfig));
exports.DateConfigBase = DateConfigBase;
var YearConfig = /** @class */ (function (_super) {
    __extends(YearConfig, _super);
    function YearConfig() {
        return _super.call(this, date_1.DatePrecision.Year, new calendar_mappings_1.YearMappings(), "number") || this;
    }
    return YearConfig;
}(DateConfigBase));
exports.YearConfig = YearConfig;
var MonthConfig = /** @class */ (function (_super) {
    __extends(MonthConfig, _super);
    function MonthConfig() {
        return _super.call(this, date_1.DatePrecision.Month, new calendar_mappings_1.MonthMappings(), "month") || this;
    }
    return MonthConfig;
}(DateConfigBase));
exports.MonthConfig = MonthConfig;
var DateConfig = /** @class */ (function (_super) {
    __extends(DateConfig, _super);
    function DateConfig() {
        return _super.call(this, date_1.DatePrecision.Date, new calendar_mappings_1.DateMappings(), "date") || this;
    }
    return DateConfig;
}(DateConfigBase));
exports.DateConfig = DateConfig;
var DatetimeConfig = /** @class */ (function (_super) {
    __extends(DatetimeConfig, _super);
    function DatetimeConfig() {
        return _super.call(this, calendar_service_1.CalendarMode.Both, date_1.DatePrecision.Minute, new calendar_mappings_1.DatetimeMappings(), "datetime-local") || this;
    }
    return DatetimeConfig;
}(CalendarConfig));
exports.DatetimeConfig = DatetimeConfig;
var TimeConfig = /** @class */ (function (_super) {
    __extends(TimeConfig, _super);
    function TimeConfig() {
        return _super.call(this, calendar_service_1.CalendarMode.TimeOnly, date_1.DatePrecision.Minute, new calendar_mappings_1.TimeMappings(), "time") || this;
    }
    TimeConfig.prototype.updateBounds = function (providedDate) {
        this.dateMaxBound = date_1.DateUtil.endOf(date_1.DatePrecision.Date, date_1.DateUtil.clone(providedDate));
        this.dateMinBound = date_1.DateUtil.previous(date_1.DatePrecision.Date, date_1.DateUtil.clone(this.dateMaxBound));
    };
    return TimeConfig;
}(CalendarConfig));
exports.TimeConfig = TimeConfig;
