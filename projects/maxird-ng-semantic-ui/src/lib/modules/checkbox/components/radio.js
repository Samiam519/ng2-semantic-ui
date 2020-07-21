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
var custom_value_accessor_1 = require("../../../misc/util/helpers/custom-value-accessor");
var SuiRadio = /** @class */ (function () {
    function SuiRadio() {
        this.isChecked = false;
        this.onCurrentValueChange = new core_1.EventEmitter();
        this.onTouched = new core_1.EventEmitter();
        this.isDisabled = false;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    Object.defineProperty(SuiRadio.prototype, "checkedAttribute", {
        get: function () {
            return this.isChecked ? "" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiRadio.prototype, "isDisabledAttribute", {
        get: function () {
            return this.isDisabled ? "disabled" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    SuiRadio.prototype.onMouseDown = function (e) {
        e.preventDefault();
    };
    SuiRadio.prototype.onClick = function () {
        if (!this.isDisabled && !this.isReadonly) {
            this.currentValue = this.value;
            this.onCurrentValueChange.emit(this.currentValue);
            this.update();
            this.focusRadio();
        }
    };
    SuiRadio.prototype.onFocusOut = function () {
        this.onTouched.emit();
    };
    SuiRadio.prototype.update = function () {
        this.isChecked = this.currentValue === this.value;
    };
    SuiRadio.prototype.writeValue = function (value) {
        this.currentValue = value;
        this.update();
    };
    SuiRadio.prototype.focusRadio = function () {
        this._radioElement.nativeElement.focus();
    };
    __decorate([
        core_1.HostBinding("class.ui"),
        core_1.HostBinding("class.radio"),
        core_1.HostBinding("class.checkbox")
    ], SuiRadio.prototype, "hasClasses", void 0);
    __decorate([
        core_1.Input()
    ], SuiRadio.prototype, "name", void 0);
    __decorate([
        core_1.Input()
    ], SuiRadio.prototype, "value", void 0);
    __decorate([
        core_1.HostBinding("class.checked")
    ], SuiRadio.prototype, "isChecked", void 0);
    __decorate([
        core_1.Output("currentValueChange")
    ], SuiRadio.prototype, "onCurrentValueChange", void 0);
    __decorate([
        core_1.Output("touched")
    ], SuiRadio.prototype, "onTouched", void 0);
    __decorate([
        core_1.Input()
    ], SuiRadio.prototype, "isDisabled", void 0);
    __decorate([
        core_1.HostBinding("class.read-only"),
        core_1.Input()
    ], SuiRadio.prototype, "isReadonly", void 0);
    __decorate([
        core_1.ViewChild("radio")
    ], SuiRadio.prototype, "_radioElement", void 0);
    __decorate([
        core_1.HostListener("mousedown", ["$event"])
    ], SuiRadio.prototype, "onMouseDown", null);
    __decorate([
        core_1.HostListener("click")
    ], SuiRadio.prototype, "onClick", null);
    __decorate([
        core_1.HostListener("focusout")
    ], SuiRadio.prototype, "onFocusOut", null);
    SuiRadio = __decorate([
        core_1.Component({
            selector: "sui-radio-button",
            template: "\n<input class=\"hidden\"\n       type=\"checkbox\"\n       [attr.name]=\"name\"\n       [attr.checked]=\"checkedAttribute\"\n       [attr.disabled]=\"isDisabledAttribute\"\n       [ngModel]=\"isChecked\"\n       (ngModel)=\"currentValue = value\"\n       #radio>\n<label>\n    <ng-content></ng-content>\n</label>\n"
        })
    ], SuiRadio);
    return SuiRadio;
}());
exports.SuiRadio = SuiRadio;
var SuiRadioValueAccessor = /** @class */ (function (_super) {
    __extends(SuiRadioValueAccessor, _super);
    function SuiRadioValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    SuiRadioValueAccessor_1 = SuiRadioValueAccessor;
    var SuiRadioValueAccessor_1;
    SuiRadioValueAccessor = SuiRadioValueAccessor_1 = __decorate([
        core_1.Directive({
            selector: "sui-radio-button",
            host: {
                "(currentValueChange)": "onChange($event)",
                "(touched)": "onTouched()"
            },
            providers: [custom_value_accessor_1.customValueAccessorFactory(SuiRadioValueAccessor_1)]
        })
    ], SuiRadioValueAccessor);
    return SuiRadioValueAccessor;
}(custom_value_accessor_1.CustomValueAccessor));
exports.SuiRadioValueAccessor = SuiRadioValueAccessor;
