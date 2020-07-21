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
var SuiSidebarSibling = /** @class */ (function () {
    function SuiSidebarSibling(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this.isDimmedWhenVisible = false;
        this.hasClasses = true;
    }
    Object.defineProperty(SuiSidebarSibling.prototype, "service", {
        get: function () {
            return this._service;
        },
        set: function (service) {
            var _this = this;
            this._service = service;
            setTimeout(function () { return _this.updateTransform(); });
            this._service.isVisibleChange.subscribe(function () { return _this.updateTransform(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebarSibling.prototype, "isVisible", {
        get: function () {
            if (!this.service) {
                return false;
            }
            return this.service.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebarSibling.prototype, "isDimmed", {
        get: function () {
            if (!this.service) {
                return false;
            }
            return this.service.isVisible && this.isDimmedWhenVisible;
        },
        enumerable: true,
        configurable: true
    });
    SuiSidebarSibling.prototype.updateTransform = function () {
        this._renderer.removeStyle(this._element.nativeElement, "transform");
        this._renderer.removeStyle(this._element.nativeElement, "-webkit-transform");
        if (this.service.isVisible &&
            this.service.transition !== sidebar_service_1.SidebarTransition.Overlay &&
            this.service.transition !== sidebar_service_1.SidebarTransition.ScaleDown) {
            var translate = this._element.nativeElement.width - this.service.width + 'px';
            this._renderer.setStyle(this._element.nativeElement, "width", translate);
        }
    };
    SuiSidebarSibling.prototype.onClick = function (event) {
        // Do not close on click
        /*
          if (this.service.isVisible && !this.service.wasJustOpened) {
              this.service.setVisibleState(false);
          }
        */
    };
    __decorate([
        core_1.Input()
    ], SuiSidebarSibling.prototype, "isDimmedWhenVisible", void 0);
    __decorate([
        core_1.HostBinding("class.visible")
    ], SuiSidebarSibling.prototype, "isVisible", null);
    __decorate([
        core_1.HostBinding("class.dimmed")
    ], SuiSidebarSibling.prototype, "isDimmed", null);
    __decorate([
        core_1.HostBinding("class.pusher")
    ], SuiSidebarSibling.prototype, "hasClasses", void 0);
    __decorate([
        core_1.HostListener("click", ["$event"])
    ], SuiSidebarSibling.prototype, "onClick", null);
    SuiSidebarSibling = __decorate([
        core_1.Component({
            selector: "sui-sidebar-sibling",
            template: "<ng-content></ng-content>",
            styles: ["\n    :host {\n      display: block;\n    }\n  "]
        })
    ], SuiSidebarSibling);
    return SuiSidebarSibling;
}());
exports.SuiSidebarSibling = SuiSidebarSibling;
