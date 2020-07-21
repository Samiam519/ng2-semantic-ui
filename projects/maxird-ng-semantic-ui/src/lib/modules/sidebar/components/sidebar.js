"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidebar_service_1 = require("../services/sidebar.service");
var SuiSidebar = /** @class */ (function () {
    function SuiSidebar(_renderer, _element) {
        var _this = this;
        this._renderer = _renderer;
        this._element = _element;
        this.service = new sidebar_service_1.SidebarService();
        // We set the default here as well to force the classes to update.
        this.transition = sidebar_service_1.SidebarTransition.Uncover;
        this.direction = sidebar_service_1.SidebarDirection.Left;
        setTimeout(function () { return _this.updateDimensions(); });
        this.service.isVisibleChange.subscribe(function () { return _this.updateDimensions(); });
        this.hasClasses = true;
    }
    Object.defineProperty(SuiSidebar.prototype, "transition", {
        get: function () {
            return this.service.transition;
        },
        set: function (transition) {
            var _this = this;
            this.service.transition.split(" ").forEach(function (c) { return _this.setClass(c, false); });
            this.service.transition = transition;
            this.service.transition.split(" ").forEach(function (c) { return _this.setClass(c, true); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebar.prototype, "direction", {
        get: function () {
            return this.service.direction;
        },
        set: function (direction) {
            this.setClass(this.service.direction, false);
            this.service.direction = direction;
            this.setClass(this.service.direction, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebar.prototype, "isVisible", {
        get: function () {
            return this.service.isVisible;
        },
        set: function (isVisible) {
            this.service.setVisibleState(isVisible);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebar.prototype, "isVisibleChange", {
        get: function () {
            return this.service.isVisibleChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebar.prototype, "isAnimating", {
        get: function () {
            return this.service.isAnimating;
        },
        enumerable: true,
        configurable: true
    });
    SuiSidebar.prototype.updateDimensions = function () {
        this.service.width = this._element.nativeElement.offsetWidth;
        this.service.height = this._element.nativeElement.offsetHeight;
    };
    SuiSidebar.prototype.setClass = function (className, isAdd) {
        if (isAdd === void 0) { isAdd = true; }
        if (isAdd) {
            this._renderer.addClass(this._element.nativeElement, className);
        }
        else {
            this._renderer.removeClass(this._element.nativeElement, className);
        }
    };
    SuiSidebar.prototype.open = function () {
        this.service.setVisibleState(true);
    };
    SuiSidebar.prototype.close = function () {
        this.service.setVisibleState(false);
    };
    SuiSidebar.prototype.toggle = function () {
        this.service.toggleVisibleState();
    };
    __decorate([
        core_1.HostBinding("class.ui"),
        core_1.HostBinding("class.sidebar"),
        core_1.HostBinding("class.menu")
    ], SuiSidebar.prototype, "hasClasses", void 0);
    __decorate([
        core_1.Input()
    ], SuiSidebar.prototype, "transition", null);
    __decorate([
        core_1.Input()
    ], SuiSidebar.prototype, "direction", null);
    __decorate([
        core_1.HostBinding("class.visible"),
        core_1.Input()
    ], SuiSidebar.prototype, "isVisible", null);
    __decorate([
        core_1.Output()
    ], SuiSidebar.prototype, "isVisibleChange", null);
    __decorate([
        core_1.HostBinding("class.animating")
    ], SuiSidebar.prototype, "isAnimating", null);
    SuiSidebar = __decorate([
        core_1.Component({
            selector: "sui-sidebar",
            template: "<ng-content></ng-content>"
        })
    ], SuiSidebar);
    return SuiSidebar;
}());
exports.SuiSidebar = SuiSidebar;
