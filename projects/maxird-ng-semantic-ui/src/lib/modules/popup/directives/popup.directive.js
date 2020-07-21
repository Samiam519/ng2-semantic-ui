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
var util_1 = require("../../../misc/util/helpers/util");
var popup_config_1 = require("../classes/popup-config");
var popup_template_controller_1 = require("../classes/popup-template-controller");
var templateRef = core_1.TemplateRef;
var SuiPopupDirective = /** @class */ (function (_super) {
    __extends(SuiPopupDirective, _super);
    function SuiPopupDirective(renderer, element, componentFactory, popupDefaults) {
        return _super.call(this, renderer, element, componentFactory, new popup_config_1.PopupConfig(popupDefaults)) || this;
    }
    Object.defineProperty(SuiPopupDirective.prototype, "popupHeader", {
        set: function (header) {
            this.popup.config.header = header;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupText", {
        set: function (text) {
            this.popup.config.text = text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupInverted", {
        set: function (inverted) {
            this.popup.config.isInverted = util_1.Util.DOM.parseBooleanAttribute(inverted);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupBasic", {
        set: function (basic) {
            this.popup.config.isBasic = util_1.Util.DOM.parseBooleanAttribute(basic);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupInline", {
        set: function (inline) {
            this.popup.config.isInline = util_1.Util.DOM.parseBooleanAttribute(inline);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupFlowing", {
        set: function (flowing) {
            this.popup.config.isFlowing = util_1.Util.DOM.parseBooleanAttribute(flowing);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTransition", {
        set: function (transition) {
            this.popup.config.transition = transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTransitionDuration", {
        set: function (duration) {
            this.popup.config.transitionDuration = duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupPlacement", {
        set: function (placement) {
            this.popup.config.placement = placement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupWidth", {
        set: function (width) {
            this.popup.config.width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupSize", {
        set: function (size) {
            this.popup.config.size = size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupDelay", {
        set: function (delay) {
            this.popup.config.delay = delay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTrigger", {
        get: function () {
            return this.popup.config.trigger;
        },
        set: function (trigger) {
            this.popup.config.trigger = trigger;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTemplate", {
        set: function (template) {
            this.template = template;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTemplateContext", {
        set: function (context) {
            this.context = context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupConfig", {
        set: function (config) {
            this.configure(config);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], SuiPopupDirective.prototype, "popupHeader", null);
    __decorate([
        core_1.Input()
    ], SuiPopupDirective.prototype, "popupText", null);
    __decorate([
        core_1.Input()
    ], SuiPopupDirective.prototype, "popupInverted", null);
    __decorate([
        core_1.Input()
    ], SuiPopupDirective.prototype, "popupBasic", null);
    __decorate([
        core_1.Input()
    ], SuiPopupDirective.prototype, "popupInline", null);
    __decorate([
        core_1.Input()
    ], SuiPopupDirective.prototype, "popupFlowing", null);
    __decorate([
        core_1.Input()
    ], SuiPopupDirective.prototype, "popupTransition", null);
    __decorate([
        core_1.Input()
    ], SuiPopupDirective.prototype, "popupTransitionDuration", null);
    __decorate([
        core_1.Input()
    ], SuiPopupDirective.prototype, "popupPlacement", null);
    __decorate([
        core_1.Input()
    ], SuiPopupDirective.prototype, "popupWidth", null);
    __decorate([
        core_1.Input()
    ], SuiPopupDirective.prototype, "popupSize", null);
    __decorate([
        core_1.Input()
    ], SuiPopupDirective.prototype, "popupDelay", null);
    __decorate([
        core_1.Input()
    ], SuiPopupDirective.prototype, "popupTrigger", null);
    __decorate([
        core_1.Input()
    ], SuiPopupDirective.prototype, "popupTemplate", null);
    __decorate([
        core_1.Input()
    ], SuiPopupDirective.prototype, "popupTemplateContext", null);
    __decorate([
        core_1.Input()
    ], SuiPopupDirective.prototype, "popupConfig", null);
    SuiPopupDirective = __decorate([
        core_1.Directive({
            selector: "[suiPopup]",
            exportAs: "suiPopup"
        })
    ], SuiPopupDirective);
    return SuiPopupDirective;
}(popup_template_controller_1.SuiPopupTemplateController));
exports.SuiPopupDirective = SuiPopupDirective;
