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
var transition_1 = require("../../transition/classes/transition");
var transition_controller_1 = require("../../transition/classes/transition-controller");
var transition_2 = require("../../transition/directives/transition");
var SuiDimmer = /** @class */ (function (_super) {
    __extends(SuiDimmer, _super);
    function SuiDimmer(renderer, element, changeDetector) {
        var _this = _super.call(this, renderer, element, changeDetector) || this;
        _this._isDimmed = false;
        _this.isDimmedChange = new core_1.EventEmitter();
        _this.isClickable = true;
        _this.wrapContent = true;
        _this.hasClasses = true;
        return _this;
    }
    Object.defineProperty(SuiDimmer.prototype, "isDimmed", {
        get: function () {
            return this._isDimmed;
        },
        set: function (value) {
            var isDimmed = !!value;
            if (!this._transitionController) {
                // Initialise transition functionality when first setting dimmed, to ensure initial state doesn't transition.
                this._transitionController = new transition_controller_1.TransitionController(isDimmed, "block");
                this.setTransitionController(this._transitionController);
                this._isDimmed = isDimmed;
            }
            else if (this._isDimmed !== isDimmed) {
                this._isDimmed = isDimmed;
                this._transitionController.stopAll();
                this._transitionController.animate(new transition_1.Transition("fade", this.transitionDuration, isDimmed ? transition_1.TransitionDirection.In : transition_1.TransitionDirection.Out));
            }
        },
        enumerable: true,
        configurable: true
    });
    SuiDimmer.prototype.onClick = function () {
        if (this.isClickable) {
            this.isDimmed = false;
            this.isDimmedChange.emit(this.isDimmed);
        }
    };
    __decorate([
        core_1.HostBinding("class.ui"),
        core_1.HostBinding("class.dimmer")
    ], SuiDimmer.prototype, "hasClasses", void 0);
    __decorate([
        core_1.HostBinding("class.active"),
        core_1.Input()
    ], SuiDimmer.prototype, "isDimmed", null);
    __decorate([
        core_1.Output()
    ], SuiDimmer.prototype, "isDimmedChange", void 0);
    __decorate([
        core_1.Input()
    ], SuiDimmer.prototype, "isClickable", void 0);
    __decorate([
        core_1.Input()
    ], SuiDimmer.prototype, "transition", void 0);
    __decorate([
        core_1.Input()
    ], SuiDimmer.prototype, "transitionDuration", void 0);
    __decorate([
        core_1.Input()
    ], SuiDimmer.prototype, "wrapContent", void 0);
    __decorate([
        core_1.HostListener("click")
    ], SuiDimmer.prototype, "onClick", null);
    SuiDimmer = __decorate([
        core_1.Component({
            selector: "sui-dimmer",
            template: "\n<div [class.content]=\"wrapContent\">\n    <ng-content></ng-content>\n</div>\n",
            styles: ["\n:host.dimmer:not(.hidden) {\n    transition: none;\n    display: flex !important;\n}\n"]
        })
    ], SuiDimmer);
    return SuiDimmer;
}(transition_2.SuiTransition));
exports.SuiDimmer = SuiDimmer;
