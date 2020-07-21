"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var accordion_panel_1 = require("./accordion-panel");
var accordion_service_1 = require("../services/accordion.service");
var SuiAccordion = /** @class */ (function () {
    function SuiAccordion() {
        // Accordion service is unique to each set of panels.
        this._service = new accordion_service_1.SuiAccordionService();
        this.hasClasses = true;
    }
    Object.defineProperty(SuiAccordion.prototype, "closeOthers", {
        get: function () {
            return this._service.closeOthers;
        },
        set: function (value) {
            this._service.closeOthers = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiAccordion.prototype, "transition", {
        set: function (transition) {
            this._service.transition = transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiAccordion.prototype, "transitionDuration", {
        set: function (duration) {
            this._service.transitionDuration = duration;
        },
        enumerable: true,
        configurable: true
    });
    SuiAccordion.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.updatePanels();
        // Reconnect panels after they have updated.
        this._panels.changes.subscribe(function () { return _this.updatePanels(); });
    };
    SuiAccordion.prototype.updatePanels = function () {
        var _this = this;
        this._panels.forEach(function (p) { return _this._service.addPanel(p); });
    };
    __decorate([
        core_1.HostBinding("class.ui"),
        core_1.HostBinding("class.accordion")
    ], SuiAccordion.prototype, "hasClasses", void 0);
    __decorate([
        core_1.Input()
    ], SuiAccordion.prototype, "closeOthers", null);
    __decorate([
        core_1.Input()
    ], SuiAccordion.prototype, "transition", null);
    __decorate([
        core_1.Input()
    ], SuiAccordion.prototype, "transitionDuration", null);
    __decorate([
        core_1.ContentChildren(accordion_panel_1.SuiAccordionPanel)
    ], SuiAccordion.prototype, "_panels", void 0);
    SuiAccordion = __decorate([
        core_1.Component({
            selector: "sui-accordion",
            template: "\n<ng-content></ng-content>\n",
            styles: ["\n/* Fix for general styling issues */\n:host {\n    display: block;\n}\n\n/* Fix for styled border issue */\n:host.styled sui-accordion-panel:first-child .title {\n    border-top: none\n}\n"]
        })
    ], SuiAccordion);
    return SuiAccordion;
}());
exports.SuiAccordion = SuiAccordion;
