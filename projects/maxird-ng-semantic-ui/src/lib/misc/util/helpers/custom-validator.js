"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var CustomValidator = /** @class */ (function () {
    function CustomValidator(_host) {
        this._host = _host;
        this.onValidatorChange = function () { };
    }
    CustomValidator.prototype.validate = function (c) {
        return this._host.validate(c);
    };
    CustomValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onValidatorChange = fn;
    };
    return CustomValidator;
}());
exports.CustomValidator = CustomValidator;
function customValidatorFactory(type) {
    return {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () { return type; }),
        multi: true
    };
}
exports.customValidatorFactory = customValidatorFactory;
