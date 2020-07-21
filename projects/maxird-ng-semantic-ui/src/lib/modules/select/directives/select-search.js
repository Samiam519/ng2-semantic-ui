"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SuiSelectSearch = /** @class */ (function () {
    function SuiSelectSearch(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this.onQueryUpdated = new core_1.EventEmitter();
        this.onQueryKeyDown = new core_1.EventEmitter();
        this.hasClasses = true;
        this.autoComplete = "off";
    }
    Object.defineProperty(SuiSelectSearch.prototype, "query", {
        set: function (query) {
            this._renderer.setProperty(this._element.nativeElement, "value", query);
        },
        enumerable: true,
        configurable: true
    });
    SuiSelectSearch.prototype.updateQuery = function (query) {
        this.onQueryUpdated.emit(query);
    };
    SuiSelectSearch.prototype.onKeyDown = function (e) {
        this.onQueryKeyDown.emit(e);
    };
    SuiSelectSearch.prototype.focus = function () {
        var _this = this;
        // Slightly delay to support in menu search.
        this._element.nativeElement.focus();
        setTimeout(function () { return _this._element.nativeElement.focus(); });
    };
    __decorate([
        core_1.HostBinding("class.search")
    ], SuiSelectSearch.prototype, "hasClasses", void 0);
    __decorate([
        core_1.HostBinding("attr.autocomplete")
    ], SuiSelectSearch.prototype, "autoComplete", void 0);
    __decorate([
        core_1.HostListener("input", ["$event.target.value"])
    ], SuiSelectSearch.prototype, "updateQuery", null);
    __decorate([
        core_1.HostListener("keydown", ["$event"])
    ], SuiSelectSearch.prototype, "onKeyDown", null);
    SuiSelectSearch = __decorate([
        core_1.Directive({
            selector: "input[suiSelectSearch]"
        })
    ], SuiSelectSearch);
    return SuiSelectSearch;
}());
exports.SuiSelectSearch = SuiSelectSearch;
