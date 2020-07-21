"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// See https://github.com/Microsoft/TypeScript/issues/13449.
var templateRef = core_1.TemplateRef;
var SuiSearchResult = /** @class */ (function () {
    function SuiSearchResult(componentFactory) {
        this.componentFactory = componentFactory;
        this.hasClasses = true;
        // By default we make this function return an empty string, for the brief moment when it isn't displaying the correct label.
        this.formatter = function (value) { return ""; };
    }
    Object.defineProperty(SuiSearchResult.prototype, "template", {
        get: function () {
            return this._template;
        },
        set: function (template) {
            this._template = template;
            if (this.template) {
                this.componentFactory.createView(this.templateSibling, this.template, {
                    $implicit: this.value,
                    query: this.query
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.HostBinding("class.result")
    ], SuiSearchResult.prototype, "hasClasses", void 0);
    __decorate([
        core_1.Input()
    ], SuiSearchResult.prototype, "value", void 0);
    __decorate([
        core_1.Input()
    ], SuiSearchResult.prototype, "query", void 0);
    __decorate([
        core_1.Input()
    ], SuiSearchResult.prototype, "formatter", void 0);
    __decorate([
        core_1.Input()
    ], SuiSearchResult.prototype, "template", null);
    __decorate([
        core_1.ViewChild("templateSibling", { read: core_1.ViewContainerRef })
    ], SuiSearchResult.prototype, "templateSibling", void 0);
    SuiSearchResult = __decorate([
        core_1.Component({
            selector: "sui-search-result",
            template: "\n<span #templateSibling></span>\n<span *ngIf=\"!template\" [innerHTML]=\"formatter(value, query)\"></span>\n"
        })
    ], SuiSearchResult);
    return SuiSearchResult;
}());
exports.SuiSearchResult = SuiSearchResult;
