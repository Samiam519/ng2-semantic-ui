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
var custom_validator_1 = require("../../../misc/util/helpers/custom-validator");
var custom_value_accessor_1 = require("../../../misc/util/helpers/custom-value-accessor");
var util_1 = require("../../../misc/util/helpers/util");
var positioning_service_1 = require("../../../misc/util/services/positioning.service");
var popup_component_controller_1 = require("../../popup/classes/popup-component-controller");
var popup_config_1 = require("../../popup/classes/popup-config");
var calendar_config_1 = require("../classes/calendar-config");
var datepicker_1 = require("../components/datepicker");
var SuiDatepickerDirective = /** @class */ (function (_super) {
    __extends(SuiDatepickerDirective, _super);
    function SuiDatepickerDirective(renderer, element, componentFactory, localizationService) {
        var _this = _super.call(this, renderer, element, componentFactory, datepicker_1.SuiDatepicker, new popup_config_1.PopupConfig({
            trigger: popup_config_1.PopupTrigger.Focus,
            placement: positioning_service_1.PositioningPlacement.BottomLeft,
            transition: "scale",
            transitionDuration: 200
        })) || this;
        _this.localizationService = localizationService;
        // This ensures the popup is drawn correctly (i.e. no border).
        _this._renderer.addClass(_this.popup.elementRef.nativeElement, "ui");
        _this._renderer.addClass(_this.popup.elementRef.nativeElement, "calendar");
        _this.onLocaleUpdate();
        _this.localizationService.onLanguageUpdate.subscribe(function () { return _this.onLocaleUpdate(); });
        _this.onSelectedDateChange = new core_1.EventEmitter();
        _this.onValidatorChange = new core_1.EventEmitter();
        _this.mode = datepicker_1.DatepickerMode.Datetime;
        return _this;
    }
    SuiDatepickerDirective_1 = SuiDatepickerDirective;
    Object.defineProperty(SuiDatepickerDirective.prototype, "selectedDate", {
        get: function () {
            return this._selectedDate;
        },
        set: function (date) {
            this._selectedDate = date;
            this.onSelectedDateChange.emit(date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (mode) {
            this._mode = mode || datepicker_1.DatepickerMode.Datetime;
            switch (this._mode) {
                case datepicker_1.DatepickerMode.Year:
                    this.config = new calendar_config_1.YearConfig();
                    break;
                case datepicker_1.DatepickerMode.Month:
                    this.config = new calendar_config_1.MonthConfig();
                    break;
                case datepicker_1.DatepickerMode.Date:
                default:
                    this.config = new calendar_config_1.DateConfig();
                    break;
                case datepicker_1.DatepickerMode.Datetime:
                    this.config = new calendar_config_1.DatetimeConfig();
                    break;
                case datepicker_1.DatepickerMode.Time:
                    this.config = new calendar_config_1.TimeConfig();
                    break;
            }
            this.writeValue(this.selectedDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "localeValues", {
        get: function () {
            return this.localizationService.override(this._localeValues, this.localeOverrides);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "placement", {
        set: function (placement) {
            this.popup.config.placement = placement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "transition", {
        set: function (transition) {
            this.popup.config.transition = transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "transitionDuration", {
        set: function (duration) {
            this.popup.config.transitionDuration = duration;
        },
        enumerable: true,
        configurable: true
    });
    SuiDatepickerDirective.prototype.popupOnOpen = function () {
        var _this = this;
        if (this.componentInstance) {
            this.componentInstance.service.config = this.config;
            this.componentInstance.service.localeValues = this.localeValues;
            this.componentInstance.service.currentDate = this.initialDate || new Date();
            this.componentInstance.service.selectedDate = this.selectedDate;
            this.componentInstance.service.maxDate = this.maxDate;
            this.componentInstance.service.minDate = this.minDate;
            if (this.firstDayOfWeek != undefined) {
                this.componentInstance.service.firstDayOfWeek = this.firstDayOfWeek;
            }
            this.componentInstance.service.reset();
            this.componentInstance.service.onDateChange.subscribe(function (d) {
                _this.selectedDate = d;
                _this.close();
            });
        }
    };
    SuiDatepickerDirective.prototype.ngOnChanges = function (_a) {
        var maxDate = _a.maxDate, minDate = _a.minDate, mode = _a.mode;
        if (maxDate || minDate || mode) {
            this.onValidatorChange.emit();
        }
    };
    SuiDatepickerDirective.prototype.onLocaleUpdate = function () {
        this._localeValues = this.localizationService.get().datepicker;
    };
    SuiDatepickerDirective.prototype.validate = function (c) {
        var value = c.value;
        if (value != undefined) {
            // We post process the min & max date because sometimes this puts the date outside of the allowed range.
            if (this.minDate && value < this.minDate) {
                return { suiMinDate: { required: this.minDate, actual: value } };
            }
            if (this.maxDate && value > this.maxDate) {
                return { suiMaxDate: { required: this.maxDate, actual: value } };
            }
        }
        // Angular expects null
        // tslint:disable-next-line:no-null-keyword
        return null;
    };
    SuiDatepickerDirective.prototype.writeValue = function (value) {
        this.selectedDate = value;
        if (this.componentInstance) {
            this.componentInstance.service.selectedDate = value;
        }
    };
    SuiDatepickerDirective.prototype.onKeyDown = function (e) {
        if (e.keyCode === util_1.KeyCode.Escape) {
            this.close();
        }
    };
    var SuiDatepickerDirective_1;
    __decorate([
        core_1.Input("pickerMode")
    ], SuiDatepickerDirective.prototype, "mode", null);
    __decorate([
        core_1.Input("pickerInitialDate")
    ], SuiDatepickerDirective.prototype, "initialDate", void 0);
    __decorate([
        core_1.Input("pickerMaxDate")
    ], SuiDatepickerDirective.prototype, "maxDate", void 0);
    __decorate([
        core_1.Input("pickerMinDate")
    ], SuiDatepickerDirective.prototype, "minDate", void 0);
    __decorate([
        core_1.Input("pickerFirstDayOfWeek")
    ], SuiDatepickerDirective.prototype, "firstDayOfWeek", void 0);
    __decorate([
        core_1.Input("pickerLocaleOverrides")
    ], SuiDatepickerDirective.prototype, "localeOverrides", void 0);
    __decorate([
        core_1.Input("pickerPlacement")
    ], SuiDatepickerDirective.prototype, "placement", null);
    __decorate([
        core_1.Input("pickerTransition")
    ], SuiDatepickerDirective.prototype, "transition", null);
    __decorate([
        core_1.Input("pickerTransitionDuration")
    ], SuiDatepickerDirective.prototype, "transitionDuration", null);
    __decorate([
        core_1.Output("pickerSelectedDateChange")
    ], SuiDatepickerDirective.prototype, "onSelectedDateChange", void 0);
    __decorate([
        core_1.Output("pickerValidatorChange")
    ], SuiDatepickerDirective.prototype, "onValidatorChange", void 0);
    __decorate([
        core_1.HostListener("keydown", ["$event"])
    ], SuiDatepickerDirective.prototype, "onKeyDown", null);
    SuiDatepickerDirective = SuiDatepickerDirective_1 = __decorate([
        core_1.Directive({
            selector: "[suiDatepicker]",
            providers: [custom_validator_1.customValidatorFactory(SuiDatepickerDirective_1)]
        })
    ], SuiDatepickerDirective);
    return SuiDatepickerDirective;
}(popup_component_controller_1.SuiPopupComponentController));
exports.SuiDatepickerDirective = SuiDatepickerDirective;
var SuiDatepickerDirectiveValueAccessor = /** @class */ (function (_super) {
    __extends(SuiDatepickerDirectiveValueAccessor, _super);
    function SuiDatepickerDirectiveValueAccessor(host) {
        var _this = _super.call(this, host) || this;
        _this.host = host;
        return _this;
    }
    SuiDatepickerDirectiveValueAccessor_1 = SuiDatepickerDirectiveValueAccessor;
    var SuiDatepickerDirectiveValueAccessor_1;
    SuiDatepickerDirectiveValueAccessor = SuiDatepickerDirectiveValueAccessor_1 = __decorate([
        core_1.Directive({
            selector: "[suiDatepicker]",
            host: { "(pickerSelectedDateChange)": "onChange($event)" },
            providers: [custom_value_accessor_1.customValueAccessorFactory(SuiDatepickerDirectiveValueAccessor_1)]
        })
    ], SuiDatepickerDirectiveValueAccessor);
    return SuiDatepickerDirectiveValueAccessor;
}(custom_value_accessor_1.CustomValueAccessor));
exports.SuiDatepickerDirectiveValueAccessor = SuiDatepickerDirectiveValueAccessor;
var SuiDatepickerDirectiveValidator = /** @class */ (function (_super) {
    __extends(SuiDatepickerDirectiveValidator, _super);
    function SuiDatepickerDirectiveValidator(host) {
        var _this = _super.call(this, host) || this;
        _this.host = host;
        return _this;
    }
    SuiDatepickerDirectiveValidator_1 = SuiDatepickerDirectiveValidator;
    var SuiDatepickerDirectiveValidator_1;
    SuiDatepickerDirectiveValidator = SuiDatepickerDirectiveValidator_1 = __decorate([
        core_1.Directive({
            selector: "[suiDatepicker]",
            host: { "(pickerValidatorChange)": "onValidatorChange()" },
            providers: [custom_validator_1.customValidatorFactory(SuiDatepickerDirectiveValidator_1)]
        })
    ], SuiDatepickerDirectiveValidator);
    return SuiDatepickerDirectiveValidator;
}(custom_validator_1.CustomValidator));
exports.SuiDatepickerDirectiveValidator = SuiDatepickerDirectiveValidator;
