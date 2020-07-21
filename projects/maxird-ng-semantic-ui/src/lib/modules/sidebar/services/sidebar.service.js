"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
exports.SidebarTransition = {
    Overlay: "overlay",
    Push: "push",
    ScaleDown: "scale down",
    Uncover: "uncover",
    SlideAlong: "slide along",
    SlideOut: "slide out"
};
exports.SidebarDirection = {
    Left: "left",
    Right: "right",
    Top: "top",
    Bottom: "bottom"
};
var SidebarService = /** @class */ (function () {
    function SidebarService(isVisible) {
        if (isVisible === void 0) { isVisible = false; }
        this.isVisible = isVisible;
        this.isAnimating = false;
        this.wasJustOpened = false;
        this.isVisibleChange = new core_1.EventEmitter();
        this.widthChange = new core_1.EventEmitter();
        this.heightChange = new core_1.EventEmitter();
        this.width = 260;
        this.height = 0;
        this.transition = exports.SidebarTransition.Uncover;
    }
    Object.defineProperty(SidebarService.prototype, "width", {
        get: function () {
            if (this.direction === exports.SidebarDirection.Left) {
                return this._width;
            }
            if (this.direction === exports.SidebarDirection.Right) {
                return -this._width;
            }
            return 0;
        },
        set: function (width) {
            this._width = width;
            this.widthChange.emit();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarService.prototype, "height", {
        get: function () {
            if (this.direction === exports.SidebarDirection.Top) {
                return this._height;
            }
            if (this.direction === exports.SidebarDirection.Bottom) {
                return -this._height;
            }
            return 0;
        },
        set: function (height) {
            this._height = height;
            this.heightChange.emit();
        },
        enumerable: true,
        configurable: true
    });
    SidebarService.prototype.setVisibleState = function (isVisible) {
        var _this = this;
        if (this.isVisible !== isVisible) {
            this.isVisible = isVisible;
            this.isAnimating = true;
            this.wasJustOpened = true;
            this.isVisibleChange.emit(isVisible);
            setTimeout(function () { return _this.wasJustOpened = false; });
            clearTimeout(this._isAnimatingTimeout);
            this._isAnimatingTimeout = window.setTimeout(function () { return _this.isAnimating = false; }, 500);
        }
    };
    SidebarService.prototype.toggleVisibleState = function () {
        this.setVisibleState(!this.isVisible);
    };
    return SidebarService;
}());
exports.SidebarService = SidebarService;
