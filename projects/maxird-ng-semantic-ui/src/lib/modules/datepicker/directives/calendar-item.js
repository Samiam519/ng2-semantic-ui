"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CalendarItem = /** @class */ (function () {
    function CalendarItem(date) {
        this.date = date;
    }
    return CalendarItem;
}());
exports.CalendarItem = CalendarItem;
var SuiCalendarItem = /** @class */ (function () {
    function SuiCalendarItem(changeDetector) {
        this.changeDetector = changeDetector;
        this.hasFocus = false;
        this.onFocussed = new core_1.EventEmitter();
    }
    Object.defineProperty(SuiCalendarItem.prototype, "isSelectable", {
        get: function () {
            return this.item.isSelectable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCalendarItem.prototype, "isActive", {
        get: function () {
            return this.item.isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCalendarItem.prototype, "isToday", {
        get: function () {
            return this.item.isToday;
        },
        enumerable: true,
        configurable: true
    });
    SuiCalendarItem.prototype.onMouseMove = function () {
        if (!this.hasFocus) {
            this.hasFocus = true;
            this.onFocussed.emit(this.hasFocus);
        }
    };
    SuiCalendarItem.prototype.onMouseLeave = function () {
        this.hasFocus = false;
        this.onFocussed.emit(this.hasFocus);
    };
    __decorate([
        core_1.Input("calendarItem")
    ], SuiCalendarItem.prototype, "item", void 0);
    __decorate([
        core_1.HostBinding("class.disabled")
    ], SuiCalendarItem.prototype, "isSelectable", null);
    __decorate([
        core_1.HostBinding("class.active")
    ], SuiCalendarItem.prototype, "isActive", null);
    __decorate([
        core_1.HostBinding("class.today")
    ], SuiCalendarItem.prototype, "isToday", null);
    __decorate([
        core_1.HostBinding("class.focus")
    ], SuiCalendarItem.prototype, "hasFocus", void 0);
    __decorate([
        core_1.HostListener("mousemove")
    ], SuiCalendarItem.prototype, "onMouseMove", null);
    __decorate([
        core_1.HostListener("mouseleave")
    ], SuiCalendarItem.prototype, "onMouseLeave", null);
    SuiCalendarItem = __decorate([
        core_1.Directive({
            selector: "[calendarItem]"
        })
    ], SuiCalendarItem);
    return SuiCalendarItem;
}());
exports.SuiCalendarItem = SuiCalendarItem;
