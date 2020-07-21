"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var positioning_service_1 = require("../../../misc/util/services/positioning.service");
exports.PopupTrigger = {
    Hover: "hover",
    Click: "click",
    OutsideClick: "outsideClick",
    Focus: "focus",
    Manual: "manual"
};
var PopupConfig = /** @class */ (function () {
    function PopupConfig(defaults) {
        if (defaults === void 0) { defaults = {}; }
        this.placement = positioning_service_1.PositioningPlacement.TopLeft;
        this.trigger = exports.PopupTrigger.Hover;
        this.isInverted = false;
        this.delay = 0;
        this.isBasic = false;
        this.transition = "scale";
        this.transitionDuration = 200;
        this.isFlowing = false;
        this.isInline = false;
        Object.assign(this, defaults);
    }
    return PopupConfig;
}());
exports.PopupConfig = PopupConfig;
