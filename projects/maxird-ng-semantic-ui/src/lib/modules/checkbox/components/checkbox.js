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
var SuiCheckbox = /** @class */ (function () {
    function SuiCheckbox() {
        this.isChecked = false;
        this.onCheckChange = new core_1.EventEmitter();
        this.onTouched = new core_1.EventEmitter();
        this.isDisabled = false;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    Object.defineProperty(SuiCheckbox.prototype, "checkedAttribute", {
        get: function () {
            return this.isChecked ? "" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCheckbox.prototype, "isDisabledAttribute", {
        get: function () {
            return this.isDisabled ? "disabled" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    SuiCheckbox.prototype.onMouseDown = function (e) {
        e.preventDefault();
    };
    SuiCheckbox.prototype.onClick = function () {
        if (!this.isDisabled && !this.isReadonly) {
            this.toggle();
            this.focusCheckbox();
        }
    };
    SuiCheckbox.prototype.onFocusOut = function () {
        this.onTouched.emit();
    };
    SuiCheckbox.prototype.toggle = function () {
        this.isChecked = !this.isChecked;
        this.onCheckChange.emit(this.isChecked);
    };
    SuiCheckbox.prototype.writeValue = function (value) {
        this.isChecked = value;
    };
    SuiCheckbox.prototype.focusCheckbox = function () {
        this._checkboxElement.nativeElement.focus();
    };
    __decorate([
        core_1.HostBinding("class.ui"),
        core_1.HostBinding("class.checkbox")
    ], SuiCheckbox.prototype, "hasClasses", void 0);
    __decorate([
        core_1.Input()
    ], SuiCheckbox.prototype, "name", void 0);
    __decorate([
        core_1.HostBinding("class.checked")
    ], SuiCheckbox.prototype, "isChecked", void 0);
    __decorate([
        core_1.Output("checkChange")
    ], SuiCheckbox.prototype, "onCheckChange", void 0);
    __decorate([
        core_1.Output("touched")
    ], SuiCheckbox.prototype, "onTouched", void 0);
    __decorate([
        core_1.Input()
    ], SuiCheckbox.prototype, "isDisabled", void 0);
    __decorate([
        core_1.HostBinding("class.read-only"),
        core_1.Input()
    ], SuiCheckbox.prototype, "isReadonly", void 0);
    __decorate([
        core_1.ViewChild("checkbox")
    ], SuiCheckbox.prototype, "_checkboxElement", void 0);
    __decorate([
        core_1.HostListener("mousedown", ["$event"])
    ], SuiCheckbox.prototype, "onMouseDown", null);
    __decorate([
        core_1.HostListener("click")
    ], SuiCheckbox.prototype, "onClick", null);
    __decorate([
        core_1.HostListener("focusout")
    ], SuiCheckbox.prototype, "onFocusOut", null);
    SuiCheckbox = __decorate([
        core_1.Component({
            selector: 'sui-checkbox',
            exportAs: 'suiCheckbox',
            template: "\n<input class=\"hidden\"\n       type=\"checkbox\"\n       [attr.name]=\"name\"\n       [attr.checked]=\"checkedAttribute\"\n       [attr.disabled]=\"isDisabledAttribute\"\n       [(ngModel)]=\"isChecked\"\n       #checkbox>\n<label>\n    <ng-content></ng-content>\n</label>\n"
        })
    ], SuiCheckbox);
    return SuiCheckbox;
}());
exports.SuiCheckbox = SuiCheckbox;
var SuiCheckboxValueAccessor = /** @class */ (function (_super) {
    __extends(SuiCheckboxValueAccessor, _super);
    function SuiCheckboxValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    SuiCheckboxValueAccessor_1 = SuiCheckboxValueAccessor;
    var SuiCheckboxValueAccessor_1;
    SuiCheckboxValueAccessor = SuiCheckboxValueAccessor_1 = __decorate([
        core_1.Directive({
            selector: 'sui-checkbox',
            host: {
                '(checkChange)': 'onChange()',
                '(touched)': 'onTouched()'
            },
            providers: [custom_value_accessor_1.customValueAccessorFactory(SuiCheckboxValueAccessor_1)]
        })
    ], SuiCheckboxValueAccessor);
    return SuiCheckboxValueAccessor;
}(custom_value_accessor_1.CustomValueAccessor));
exports.SuiCheckboxValueAccessor = SuiCheckboxValueAccessor;
