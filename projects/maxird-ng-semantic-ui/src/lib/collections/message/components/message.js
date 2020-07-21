"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var transition_1 = require("../../../modules/transition/classes/transition");
var transition_controller_1 = require("../../../modules/transition/classes/transition-controller");
var SuiMessage = /** @class */ (function () {
    function SuiMessage() {
        this.isDismissable = true;
        this.onDismiss = new core_1.EventEmitter();
        this.isDismissed = false;
        this.transitionController = new transition_controller_1.TransitionController();
        this.transition = "fade";
        this.transitionDuration = 300;
        this.class = "";
    }
    SuiMessage.prototype.dismiss = function () {
        var _this = this;
        this.transitionController.animate(new transition_1.Transition(this.transition, this.transitionDuration, transition_1.TransitionDirection.Out, function () {
            _this.isDismissed = true;
            _this.onDismiss.emit(_this);
        }));
    };
    __decorate([
        core_1.Input()
    ], SuiMessage.prototype, "isDismissable", void 0);
    __decorate([
        core_1.Output("dismiss")
    ], SuiMessage.prototype, "onDismiss", void 0);
    __decorate([
        core_1.Input()
    ], SuiMessage.prototype, "transition", void 0);
    __decorate([
        core_1.Input()
    ], SuiMessage.prototype, "transitionDuration", void 0);
    __decorate([
        core_1.Input("class")
    ], SuiMessage.prototype, "class", void 0);
    SuiMessage = __decorate([
        core_1.Component({
            selector: "sui-message",
            template: "\n<div class=\"ui message {{ class }}\" *ngIf=\"!isDismissed\" [suiTransition]=\"transitionController\">\n    <i class=\"close icon\" *ngIf=\"isDismissable\" (click)=\"dismiss()\"></i>\n    <ng-content></ng-content>\n</div>\n",
            styles: ["\n/* Fix for CSS Bug */\n.ui.icon.visible.message {\n    display: flex !important;\n}\n"]
        })
    ], SuiMessage);
    return SuiMessage;
}());
exports.SuiMessage = SuiMessage;
