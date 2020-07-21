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
// See https://github.com/Microsoft/TypeScript/issues/13449.
var templateRef = core_1.TemplateRef;
var SuiMultiSelectLabel = /** @class */ (function (_super) {
    __extends(SuiMultiSelectLabel, _super);
    function SuiMultiSelectLabel(renderer, element, changeDetector, componentFactory) {
        var _this = _super.call(this, renderer, element, changeDetector) || this;
        _this.componentFactory = componentFactory;
        // Initialise transition functionality.
        _this._transitionController = new transition_controller_1.TransitionController(false, "inline-block");
        _this.setTransitionController(_this._transitionController);
        _this.onDeselected = new core_1.EventEmitter();
        _this.hasClasses = true;
        _this._transitionController.animate(new transition_1.Transition("scale", 100, transition_1.TransitionDirection.In));
        return _this;
    }
    Object.defineProperty(SuiMultiSelectLabel.prototype, "template", {
        get: function () {
            return this._template;
        },
        set: function (template) {
            this._template = template;
            if (this.template) {
                this.componentFactory.createView(this.templateSibling, this.template, {
                    $implicit: this.value,
                    query: this.query
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    SuiMultiSelectLabel.prototype.deselectOption = function (e) {
        var _this = this;
        e.eventHandled = true;
        this._transitionController.animate(new transition_1.Transition("scale", 100, transition_1.TransitionDirection.Out, function () {
            return _this.onDeselected.emit(_this.value);
        }));
    };
    SuiMultiSelectLabel.prototype.onClick = function (e) {
        e.eventHandled = true;
    };
    __decorate([
        core_1.HostBinding("class.ui"),
        core_1.HostBinding("class.label")
    ], SuiMultiSelectLabel.prototype, "hasClasses", void 0);
    __decorate([
        core_1.Input()
    ], SuiMultiSelectLabel.prototype, "value", void 0);
    __decorate([
        core_1.Input()
    ], SuiMultiSelectLabel.prototype, "query", void 0);
    __decorate([
        core_1.Output("deselected")
    ], SuiMultiSelectLabel.prototype, "onDeselected", void 0);
    __decorate([
        core_1.Input()
    ], SuiMultiSelectLabel.prototype, "formatter", void 0);
    __decorate([
        core_1.Input()
    ], SuiMultiSelectLabel.prototype, "template", null);
    __decorate([
        core_1.ViewChild("templateSibling", { read: core_1.ViewContainerRef })
    ], SuiMultiSelectLabel.prototype, "templateSibling", void 0);
    __decorate([
        core_1.HostListener("click", ["$event"])
    ], SuiMultiSelectLabel.prototype, "onClick", null);
    SuiMultiSelectLabel = __decorate([
        core_1.Component({
            selector: "sui-multi-select-label",
            template: "\n<span #templateSibling></span>\n<span *ngIf=\"!template\" [innerHTML]=\"formatter(value)\"></span>\n<i class=\"delete icon\" (click)=\"deselectOption($event)\"></i>\n"
        })
    ], SuiMultiSelectLabel);
    return SuiMultiSelectLabel;
}(transition_2.SuiTransition));
exports.SuiMultiSelectLabel = SuiMultiSelectLabel;
