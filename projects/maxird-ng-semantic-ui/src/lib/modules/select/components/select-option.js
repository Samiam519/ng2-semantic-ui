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
var dropdown_menu_1 = require("../../dropdown/directives/dropdown-menu");
var SuiSelectOption = /** @class */ (function (_super) {
    __extends(SuiSelectOption, _super);
    function SuiSelectOption(renderer, element, changeDetector) {
        var _this = 
        // We inherit SuiDropdownMenuItem to automatically gain all keyboard navigation functionality.
        // This is not done via adding the .item class because it isn't supported by Angular.
        _super.call(this, renderer, element) || this;
        _this.changeDetector = changeDetector;
        _this.hasClasses = true;
        _this.isActive = false;
        _this.onSelected = new core_1.EventEmitter();
        // By default we make the default text an empty label, for the brief moment when it isn't displaying the correct one.
        _this.renderedText = "";
        _this.usesTemplate = false;
        return _this;
    }
    Object.defineProperty(SuiSelectOption.prototype, "formatter", {
        set: function (formatter) {
            if (!this.usesTemplate) {
                this.renderedText = formatter(this.value);
            }
            else {
                this.renderedText = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    SuiSelectOption.prototype.onClick = function (e) {
        var _this = this;
        e.eventHandled = true;
        setTimeout(function () { return _this.onSelected.emit(_this.value); });
    };
    __decorate([
        core_1.HostBinding("class.item")
    ], SuiSelectOption.prototype, "hasClasses", void 0);
    __decorate([
        core_1.Input()
    ], SuiSelectOption.prototype, "value", void 0);
    __decorate([
        core_1.Output()
    ], SuiSelectOption.prototype, "onSelected", void 0);
    __decorate([
        core_1.HostBinding("class.active")
    ], SuiSelectOption.prototype, "isActive", void 0);
    __decorate([
        core_1.ViewChild("templateSibling", { read: core_1.ViewContainerRef })
    ], SuiSelectOption.prototype, "templateSibling", void 0);
    __decorate([
        core_1.HostListener("click", ["$event"])
    ], SuiSelectOption.prototype, "onClick", null);
    SuiSelectOption = __decorate([
        core_1.Component({
            selector: "sui-select-option",
            template: "\n<span #templateSibling></span>\n<span [innerHTML]=\"renderedText\"></span>\n"
        })
    ], SuiSelectOption);
    return SuiSelectOption;
}(dropdown_menu_1.SuiDropdownMenuItem));
exports.SuiSelectOption = SuiSelectOption;
