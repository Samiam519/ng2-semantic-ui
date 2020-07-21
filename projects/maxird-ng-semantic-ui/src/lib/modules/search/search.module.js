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
var forms_1 = require("@angular/forms");
var localization_module_1 = require("../../behaviors/localization/localization.module");
var util_module_1 = require("../../misc/util/util.module");
var dropdown_module_1 = require("../dropdown/dropdown.module");
var search_1 = require("./components/search");
var search_result_1 = require("./components/search-result");
var SuiSearchModule = /** @class */ (function () {
    function SuiSearchModule() {
    }
    SuiSearchModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                dropdown_module_1.SuiDropdownModule,
                localization_module_1.SuiLocalizationModule,
                util_module_1.SuiUtilityModule
            ],
            declarations: [
                search_1.SuiSearch,
                search_result_1.SuiSearchResult
            ],
            exports: [
                search_1.SuiSearch
            ]
        })
    ], SuiSearchModule);
    return SuiSearchModule;
}());
exports.SuiSearchModule = SuiSearchModule;
