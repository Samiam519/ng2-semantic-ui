"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidebar_1 = require("./sidebar");
var sidebar_sibling_1 = require("./sidebar-sibling");
var SuiSidebarContainer = /** @class */ (function () {
    function SuiSidebarContainer() {
        this.hasClasses = true;
    }
    SuiSidebarContainer.prototype.ngAfterContentInit = function () {
        if (!this.sidebar) {
            throw new Error("You must include a <sui-sidebar> element within the container.");
        }
        this.service = this.sidebar.service;
        if (!this.sibling) {
            throw new Error("You must include a <sui-sidebar-sibling> element within the container.");
        }
        this.sibling.service = this.service;
    };
    __decorate([
        core_1.HostBinding("class.pushable")
    ], SuiSidebarContainer.prototype, "hasClasses", void 0);
    __decorate([
        core_1.ContentChild(sidebar_1.SuiSidebar)
    ], SuiSidebarContainer.prototype, "sidebar", void 0);
    __decorate([
        core_1.ContentChild(sidebar_sibling_1.SuiSidebarSibling)
    ], SuiSidebarContainer.prototype, "sibling", void 0);
    SuiSidebarContainer = __decorate([
        core_1.Component({
            selector: "sui-sidebar-container",
            template: "<ng-content></ng-content>",
            styles: ["\n:host {\n    display: block;\n}\n"]
        })
    ], SuiSidebarContainer);
    return SuiSidebarContainer;
}());
exports.SuiSidebarContainer = SuiSidebarContainer;
