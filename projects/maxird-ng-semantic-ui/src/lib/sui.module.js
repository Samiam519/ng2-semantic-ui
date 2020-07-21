"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var localization_module_1 = require("./behaviors/localization/localization.module");
var message_module_1 = require("./collections/message/message.module");
var pagination_module_1 = require("./collections/pagination/pagination.module");
var util_module_1 = require("./misc/util/util.module");
var accordion_module_1 = require("./modules/accordion/accordion.module");
var checkbox_module_1 = require("./modules/checkbox/checkbox.module");
var collapse_module_1 = require("./modules/collapse/collapse.module");
var datepicker_module_1 = require("./modules/datepicker/datepicker.module");
var dimmer_module_1 = require("./modules/dimmer/dimmer.module");
var dropdown_module_1 = require("./modules/dropdown/dropdown.module");
var modal_module_1 = require("./modules/modal/modal.module");
var popup_module_1 = require("./modules/popup/popup.module");
var progress_module_1 = require("./modules/progress/progress.module");
var rating_module_1 = require("./modules/rating/rating.module");
var search_module_1 = require("./modules/search/search.module");
var select_module_1 = require("./modules/select/select.module");
var sidebar_module_1 = require("./modules/sidebar/sidebar.module");
var tab_module_1 = require("./modules/tabs/tab.module");
var transition_module_1 = require("./modules/transition/transition.module");
var SuiModule = /** @class */ (function () {
    function SuiModule() {
    }
    SuiModule = __decorate([
        core_1.NgModule({
            exports: [
                // Collections
                message_module_1.SuiMessageModule,
                pagination_module_1.SuiPaginationModule,
                // Modules
                accordion_module_1.SuiAccordionModule,
                checkbox_module_1.SuiCheckboxModule,
                collapse_module_1.SuiCollapseModule,
                datepicker_module_1.SuiDatepickerModule,
                dimmer_module_1.SuiDimmerModule,
                dropdown_module_1.SuiDropdownModule,
                modal_module_1.SuiModalModule,
                popup_module_1.SuiPopupModule,
                progress_module_1.SuiProgressModule,
                rating_module_1.SuiRatingModule,
                search_module_1.SuiSearchModule,
                select_module_1.SuiSelectModule,
                sidebar_module_1.SuiSidebarModule,
                tab_module_1.SuiTabsModule,
                transition_module_1.SuiTransitionModule,
                // Behaviors
                localization_module_1.SuiLocalizationModule,
                // // Misc
                util_module_1.SuiUtilityModule
            ]
        })
    ], SuiModule);
    return SuiModule;
}());
exports.SuiModule = SuiModule;
