"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var calendar_config_1 = require("../classes/calendar-config");
var calendar_service_1 = require("./../services/calendar.service");
exports.DatepickerMode = {
    Year: "year",
    Month: "month",
    Date: "date",
    Datetime: "datetime",
    Time: "time"
};
var SuiDatepicker = /** @class */ (function () {
    function SuiDatepicker(localizationService) {
        this.service = new calendar_service_1.CalendarService(new calendar_config_1.DatetimeConfig(), localizationService.get().datepicker);
        this.hasClasses = true;
    }
    SuiDatepicker.prototype.onMouseDown = function (e) {
        e.preventDefault();
    };
    __decorate([
        core_1.HostBinding("class.ui"),
        core_1.HostBinding("class.active"),
        core_1.HostBinding("class.calendar")
    ], SuiDatepicker.prototype, "hasClasses", void 0);
    __decorate([
        core_1.HostListener("mousedown", ["$event"])
    ], SuiDatepicker.prototype, "onMouseDown", null);
    SuiDatepicker = __decorate([
        core_1.Component({
            selector: "sui-datepicker",
            template: "\n<ng-container [ngSwitch]=\"service.currentView\">\n    <sui-calendar-year-view [service]=\"service\" *ngSwitchCase=\"0\"></sui-calendar-year-view>\n    <sui-calendar-month-view [service]=\"service\" *ngSwitchCase=\"1\"></sui-calendar-month-view>\n    <sui-calendar-date-view [service]=\"service\" *ngSwitchCase=\"2\"></sui-calendar-date-view>\n    <sui-calendar-hour-view [service]=\"service\" *ngSwitchCase=\"3\"></sui-calendar-hour-view>\n    <sui-calendar-minute-view [service]=\"service\" *ngSwitchCase=\"4\"></sui-calendar-minute-view>\n</ng-container>\n",
            styles: ["\n:host {\n    user-select: none;\n}\n"]
        })
    ], SuiDatepicker);
    return SuiDatepicker;
}());
exports.SuiDatepicker = SuiDatepicker;
