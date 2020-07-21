"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var custom_value_accessor_1 = require("../../../misc/util/helpers/custom-value-accessor");
var SuiRating = /** @class */ (function () {
    function SuiRating() {
        this.hoveredIndex = -1;
        this.value = 0;
        this.valueChange = new core_1.EventEmitter();
        this.maximum = 5;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    Object.defineProperty(SuiRating.prototype, "maximum", {
        get: function () {
            return this._maximum;
        },
        set: function (value) {
            this._maximum = +value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiRating.prototype, "icons", {
        get: function () {
            // tslint:disable-next-line:prefer-literal
            return new Array(this.maximum);
        },
        enumerable: true,
        configurable: true
    });
    SuiRating.prototype.onClick = function (i) {
        if (!this.isReadonly) {
            this.value = i + 1;
            this.valueChange.emit(this.value);
        }
    };
    SuiRating.prototype.onMouseover = function (i) {
        this.hoveredIndex = i;
    };
    SuiRating.prototype.onMouseout = function () {
        this.hoveredIndex = -1;
    };
    SuiRating.prototype.writeValue = function (value) {
        this.value = value;
    };
    __decorate([
        core_1.HostBinding("class.ui"),
        core_1.HostBinding("class.rating")
    ], SuiRating.prototype, "hasClasses", void 0);
    __decorate([
        core_1.Output()
    ], SuiRating.prototype, "valueChange", void 0);
    __decorate([
        core_1.Input()
    ], SuiRating.prototype, "maximum", null);
    __decorate([
        core_1.HostBinding("class.read-only"),
        core_1.Input()
    ], SuiRating.prototype, "isReadonly", void 0);
    __decorate([
        core_1.HostListener("mouseout")
    ], SuiRating.prototype, "onMouseout", null);
    SuiRating = __decorate([
        core_1.Component({
            selector: "sui-rating",
            template: "\n<i class=\"icon\"\n   *ngFor=\"let icon of icons; let i = index\"\n   (mouseover)=\"onMouseover(i)\"\n   (click)=\"onClick(i)\"\n   [class.selected]=\"hoveredIndex >= i && !isReadonly\"\n   [class.active]=\"value > i\">\n</i>\n",
            styles: ["\n:host.read-only .icon {\n    cursor: auto\n}\n"]
        })
    ], SuiRating);
    return SuiRating;
}());
exports.SuiRating = SuiRating;
var SuiRatingValueAccessor = /** @class */ (function (_super) {
    __extends(SuiRatingValueAccessor, _super);
    function SuiRatingValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    SuiRatingValueAccessor_1 = SuiRatingValueAccessor;
    var SuiRatingValueAccessor_1;
    SuiRatingValueAccessor = SuiRatingValueAccessor_1 = __decorate([
        core_1.Directive({
            selector: "sui-rating",
            host: { "(valueChange)": "onChange($event)" },
            providers: [custom_value_accessor_1.customValueAccessorFactory(SuiRatingValueAccessor_1)]
        })
    ], SuiRatingValueAccessor);
    return SuiRatingValueAccessor;
}(custom_value_accessor_1.CustomValueAccessor));
exports.SuiRatingValueAccessor = SuiRatingValueAccessor;
