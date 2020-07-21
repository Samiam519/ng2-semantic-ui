"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var util_1 = require("../../../misc/util/helpers/util");
var dropdown_service_1 = require("../services/dropdown.service");
var dropdown_menu_1 = require("./dropdown-menu");
var SuiDropdown = /** @class */ (function () {
    function SuiDropdown(_element) {
        var _this = this;
        this._element = _element;
        this.service = new dropdown_service_1.DropdownService();
        this.service.isOpenChange.subscribe(function () {
            if (_this.service.isOpen) {
                _this._element.nativeElement.focus();
            }
        });
    }
    SuiDropdown_1 = SuiDropdown;
    Object.defineProperty(SuiDropdown.prototype, "children", {
        get: function () {
            var _this = this;
            // @ContentChildren includes the current element by default.
            return this._children.filter(function (c) { return c !== _this; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "isOpenChange", {
        get: function () {
            return this.service.isOpenChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "isActive", {
        get: function () {
            // This is to ensure nested dropdowns don't get made bold.
            return this.service.isOpen && !this.service.isNested;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "isOpen", {
        get: function () {
            return this.service.isOpen;
        },
        set: function (value) {
            // If we are opening the dropdown, we want to always open its parents.
            this.service.setOpenState(value, !!value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "isDisabled", {
        get: function () {
            return this.service.isDisabled;
        },
        set: function (value) {
            this.service.setDisabledState(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "tabIndex", {
        get: function () {
            if (this.isDisabled || this.service.isNested) {
                // If disabled, remove from tabindex.
                return undefined;
            }
            if (this._tabIndex != undefined) {
                // If custom tabindex, default to that.
                return this._tabIndex;
            }
            // Otherwise, return default of 0.
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "autoClose", {
        get: function () {
            return this.service.autoCloseMode;
        },
        set: function (value) {
            this.service.autoCloseMode = value;
        },
        enumerable: true,
        configurable: true
    });
    SuiDropdown.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (!this._menu) {
            throw new Error("You must set [suiDropdownMenu] on the menu element.");
        }
        this._menu.service = this.service;
        this._menu.parentElement = this._element;
        this.childrenUpdated();
        this._children.changes
            .subscribe(function () { return _this.childrenUpdated(); });
    };
    SuiDropdown.prototype.childrenUpdated = function () {
        var _this = this;
        // Reregister child dropdowns each time the menu content changes.
        this.children
            .map(function (c) { return c.service; })
            .forEach(function (s) { return _this.service.registerChild(s); });
    };
    SuiDropdown.prototype.onClick = function (e) {
        if (!e.eventHandled) {
            e.eventHandled = true;
            this.service.toggleOpenState();
        }
    };
    SuiDropdown.prototype.onFocusOut = function (e) {
        if (!this._element.nativeElement.contains(e.relatedTarget)) {
            this.externallyClose();
        }
    };
    SuiDropdown.prototype.onKeypress = function (e) {
        // Block the keyboard event from being fired on parent dropdowns.
        if (!e.eventHandled) {
            if (e.keyCode === util_1.KeyCode.Enter) {
                e.eventHandled = true;
                this.service.setOpenState(true);
            }
        }
    };
    SuiDropdown.prototype.externallyClose = function () {
        if (this.service.autoCloseMode === dropdown_service_1.DropdownAutoCloseType.ItemClick ||
            this.service.autoCloseMode === dropdown_service_1.DropdownAutoCloseType.OutsideClick) {
            // No need to reflect in parent since they are also bound to document.
            this.service.setOpenState(false);
        }
    };
    var SuiDropdown_1;
    __decorate([
        core_1.ContentChild(dropdown_menu_1.SuiDropdownMenu)
    ], SuiDropdown.prototype, "_menu", void 0);
    __decorate([
        core_1.ContentChildren(SuiDropdown_1, { descendants: true })
    ], SuiDropdown.prototype, "_children", void 0);
    __decorate([
        core_1.Output()
    ], SuiDropdown.prototype, "isOpenChange", null);
    __decorate([
        core_1.HostBinding("class.active")
    ], SuiDropdown.prototype, "isActive", null);
    __decorate([
        core_1.Input()
    ], SuiDropdown.prototype, "isOpen", null);
    __decorate([
        core_1.HostBinding("class.disabled"),
        core_1.Input()
    ], SuiDropdown.prototype, "isDisabled", null);
    __decorate([
        core_1.Input("tabindex")
    ], SuiDropdown.prototype, "_tabIndex", void 0);
    __decorate([
        core_1.HostBinding("attr.tabindex")
    ], SuiDropdown.prototype, "tabIndex", null);
    __decorate([
        core_1.Input()
    ], SuiDropdown.prototype, "autoClose", null);
    __decorate([
        core_1.HostListener("click", ["$event"])
    ], SuiDropdown.prototype, "onClick", null);
    __decorate([
        core_1.HostListener("focusout", ["$event"])
    ], SuiDropdown.prototype, "onFocusOut", null);
    __decorate([
        core_1.HostListener("keypress", ["$event"])
    ], SuiDropdown.prototype, "onKeypress", null);
    SuiDropdown = SuiDropdown_1 = __decorate([
        core_1.Directive({
            selector: "[suiDropdown]"
        })
    ], SuiDropdown);
    return SuiDropdown;
}());
exports.SuiDropdown = SuiDropdown;
