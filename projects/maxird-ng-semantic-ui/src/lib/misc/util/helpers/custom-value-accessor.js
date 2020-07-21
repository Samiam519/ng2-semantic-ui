"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var CustomValueAccessor = /** @class */ (function () {
    function CustomValueAccessor(_host) {
        this._host = _host;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    CustomValueAccessor.prototype.writeValue = function (value) {
        this._host.writeValue(value);
    };
    CustomValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    CustomValueAccessor.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return CustomValueAccessor;
}());
exports.CustomValueAccessor = CustomValueAccessor;
function customValueAccessorFactory(type) {
    return {
        provide: forms_1.NG_VALUE_ACCESSOR,
        useExisting: core_1.forwardRef(function () { return type; }),
        multi: true
    };
}
exports.customValueAccessorFactory = customValueAccessorFactory;
