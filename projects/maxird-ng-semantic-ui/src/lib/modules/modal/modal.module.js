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
var dimmer_module_1 = require("../dimmer/dimmer.module");
var transition_module_1 = require("../transition/transition.module");
var dimmer_1 = require("./components/dimmer");
var modal_1 = require("./components/modal");
var modal_service_1 = require("./services/modal.service");
var SuiModalModule = /** @class */ (function () {
    function SuiModalModule() {
    }
    SuiModalModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                dimmer_module_1.SuiDimmerModule,
                transition_module_1.SuiTransitionModule,
                util_module_1.SuiUtilityModule
            ],
            declarations: [
                modal_1.SuiModal,
                dimmer_1.SuiModalDimmer
            ],
            exports: [
                modal_1.SuiModal
            ],
            providers: [
                modal_service_1.SuiModalService
            ],
            entryComponents: [
                modal_1.SuiModal
            ]
        })
    ], SuiModalModule);
    return SuiModalModule;
}());
exports.SuiModalModule = SuiModalModule;
