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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// Shorthand for a modal template. Sets up ability to write: `<ng-template let-context let-modal="modal">...</ng-template>`
// We use an abstract class as ModalTemplate tends to be used within decorated properties, which means it needs to exist!
var ModalTemplate = /** @class */ (function (_super) {
    __extends(ModalTemplate, _super);
    function ModalTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModalTemplate;
}(core_1.TemplateRef));
exports.ModalTemplate = ModalTemplate;
