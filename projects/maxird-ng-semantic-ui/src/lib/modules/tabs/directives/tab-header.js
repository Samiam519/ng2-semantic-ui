"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SuiTabHeader = /** @class */ (function () {
    function SuiTabHeader() {
        this._isActive = false;
        this.isActiveChange = new core_1.EventEmitter();
        this.isActiveExternalChange = new core_1.EventEmitter();
        this.onActivate = new core_1.EventEmitter();
        this.onDeactivate = new core_1.EventEmitter();
        this.isDisabled = false;
        this.hasClasses = true;
    }
    Object.defineProperty(SuiTabHeader.prototype, "isActive", {
        get: function () {
            return this._isActive;
        },
        set: function (active) {
            var _this = this;
            var isActive = active;
            // Only used by @Input(), runs whenever user input changes `isActive`.
            // Run in timeout because `isDisabled` can prohibit user from changing `isActive`.
            // so update is delayed to avoid 'changed after checked' error.
            setTimeout(function () {
                // Only allow change if tab header is not disabled.
                isActive = !_this.isDisabled ? active : false;
                _this.setActiveState(isActive);
                // Fire 'external change' event as user input has occured.
                _this.isActiveExternalChange.emit(isActive);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiTabHeader.prototype, "isDisabled", {
        get: function () {
            return this._isDisabled;
        },
        set: function (disabled) {
            // Only update if value provided is different to current one.
            if (this._isDisabled !== disabled) {
                this._isDisabled = disabled;
                // If now disabled, then tab header must be deactivated.
                if (this.isDisabled) {
                    this.isActive = false;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    // Internally update active state.
    SuiTabHeader.prototype.setActiveState = function (active) {
        // If (cast) active value has changed:
        if (!!this._isActive !== active) {
            // Update to the new value.
            this._isActive = active;
            // Fire the appropriate activation event.
            if (active) {
                this.onActivate.emit();
            }
            else {
                this.onDeactivate.emit();
            }
        }
        // Regardless, emit a change to `isActive`, so [(isActive)] works correctly.
        this.isActiveChange.emit(active);
    };
    SuiTabHeader.prototype.onClick = function () {
        if (!this.isDisabled) {
            // Activate the tab when clicked, so long as it isn't disabled.
            this.isActive = true;
        }
    };
    __decorate([
        core_1.HostBinding("class.item")
    ], SuiTabHeader.prototype, "hasClasses", void 0);
    __decorate([
        core_1.Input("suiTabHeader")
    ], SuiTabHeader.prototype, "id", void 0);
    __decorate([
        core_1.Output()
    ], SuiTabHeader.prototype, "isActiveChange", void 0);
    __decorate([
        core_1.Output("activate")
    ], SuiTabHeader.prototype, "onActivate", void 0);
    __decorate([
        core_1.Output("deactivate")
    ], SuiTabHeader.prototype, "onDeactivate", void 0);
    __decorate([
        core_1.HostBinding("class.active"),
        core_1.Input()
    ], SuiTabHeader.prototype, "isActive", null);
    __decorate([
        core_1.HostBinding("class.disabled"),
        core_1.Input()
    ], SuiTabHeader.prototype, "isDisabled", null);
    __decorate([
        core_1.HostListener("click")
    ], SuiTabHeader.prototype, "onClick", null);
    SuiTabHeader = __decorate([
        core_1.Directive({
            selector: "[suiTabHeader]"
        })
    ], SuiTabHeader);
    return SuiTabHeader;
}());
exports.SuiTabHeader = SuiTabHeader;
