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
var transition_module_1 = require("../transition/transition.module");
var dropdown_1 = require("./directives/dropdown");
var dropdown_menu_1 = require("./directives/dropdown-menu");
var SuiDropdownModule = /** @class */ (function () {
    function SuiDropdownModule() {
    }
    SuiDropdownModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                transition_module_1.SuiTransitionModule
            ],
            declarations: [
                dropdown_1.SuiDropdown,
                dropdown_menu_1.SuiDropdownMenu,
                dropdown_menu_1.SuiDropdownMenuItem
            ],
            exports: [
                dropdown_1.SuiDropdown,
                dropdown_menu_1.SuiDropdownMenu,
                dropdown_menu_1.SuiDropdownMenuItem
            ]
        })
    ], SuiDropdownModule);
    return SuiDropdownModule;
}());
exports.SuiDropdownModule = SuiDropdownModule;
