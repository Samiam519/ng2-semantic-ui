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
var util_module_1 = require("../../misc/util/util.module");
var transition_module_1 = require("../transition/transition.module");
var popup_1 = require("./components/popup");
var popup_arrow_1 = require("./components/popup-arrow");
var popup_directive_1 = require("./directives/popup.directive");
var popup_service_1 = require("./services/popup.service");
var SuiPopupModule = /** @class */ (function () {
    function SuiPopupModule() {
    }
    SuiPopupModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                transition_module_1.SuiTransitionModule,
                util_module_1.SuiUtilityModule
            ],
            declarations: [
                popup_directive_1.SuiPopupDirective,
                popup_arrow_1.SuiPopupArrow,
                popup_1.SuiPopup
            ],
            exports: [
                popup_directive_1.SuiPopupDirective,
                popup_1.SuiPopup
            ],
            providers: [
                popup_service_1.SuiPopupConfig
            ],
            entryComponents: [
                popup_1.SuiPopup
            ]
        })
    ], SuiPopupModule);
    return SuiPopupModule;
}());
exports.SuiPopupModule = SuiPopupModule;
