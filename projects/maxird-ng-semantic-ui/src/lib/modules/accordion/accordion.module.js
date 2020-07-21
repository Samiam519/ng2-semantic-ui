"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var collapse_module_1 = require("../collapse/collapse.module");
var transition_module_1 = require("../transition/transition.module");
var accordion_1 = require("./components/accordion");
var accordion_panel_1 = require("./components/accordion-panel");
var SuiAccordionModule = /** @class */ (function () {
    function SuiAccordionModule() {
    }
    SuiAccordionModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                collapse_module_1.SuiCollapseModule,
                transition_module_1.SuiTransitionModule
            ],
            declarations: [
                accordion_1.SuiAccordion,
                accordion_panel_1.SuiAccordionPanel
            ],
            exports: [
                accordion_1.SuiAccordion,
                accordion_panel_1.SuiAccordionPanel
            ],
            providers: []
        })
    ], SuiAccordionModule);
    return SuiAccordionModule;
}());
exports.SuiAccordionModule = SuiAccordionModule;
