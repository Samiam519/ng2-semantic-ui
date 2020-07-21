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
var multi_select_1 = require("./components/multi-select");
var multi_select_label_1 = require("./components/multi-select-label");
var select_1 = require("./components/select");
var select_option_1 = require("./components/select-option");
var select_search_1 = require("./directives/select-search");
var SuiSelectModule = /** @class */ (function () {
    function SuiSelectModule() {
    }
    SuiSelectModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                dropdown_module_1.SuiDropdownModule,
                util_module_1.SuiUtilityModule,
                localization_module_1.SuiLocalizationModule
            ],
            declarations: [
                select_1.SuiSelect,
                select_option_1.SuiSelectOption,
                select_search_1.SuiSelectSearch,
                select_1.SuiSelectValueAccessor,
                multi_select_1.SuiMultiSelect,
                multi_select_label_1.SuiMultiSelectLabel,
                multi_select_1.SuiMultiSelectValueAccessor
            ],
            exports: [
                select_1.SuiSelect,
                select_option_1.SuiSelectOption,
                select_search_1.SuiSelectSearch,
                select_1.SuiSelectValueAccessor,
                multi_select_1.SuiMultiSelect,
                multi_select_1.SuiMultiSelectValueAccessor
            ]
        })
    ], SuiSelectModule);
    return SuiSelectModule;
}());
exports.SuiSelectModule = SuiSelectModule;
