"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_1 = require("../../../misc/util/helpers/date");
var util_1 = require("../../../misc/util/helpers/util");
var DateComparer = /** @class */ (function () {
    function DateComparer(precision, isSmallest) {
        this._precision = precision;
        this._isSmallest = isSmallest;
    }
    DateComparer.prototype.equal = function (a, b) {
        if (this._precision === date_1.DatePrecision.Minute) {
            return !!b &&
                date_1.DateUtil.equal(date_1.DatePrecision.Hour, b, a) &&
                util_1.Util.Math.roundDown(b.getMinutes(), 5) === util_1.Util.Math.roundDown(a.getMinutes(), 5);
        }
        return !!b && date_1.DateUtil.equal(this._precision, a, b);
    };
    DateComparer.prototype.lessThan = function (a, b) {
        if (this._isSmallest) {
            return !b || (b >= a);
        }
        return !b || (date_1.DateUtil.endOf(this._precision, date_1.DateUtil.clone(b)) >= a);
    };
    DateComparer.prototype.greaterThan = function (a, b) {
        if (this._isSmallest) {
            return !b || (b <= a);
        }
        return !b || (date_1.DateUtil.startOf(this._precision, date_1.DateUtil.clone(b)) <= a);
    };
    DateComparer.prototype.between = function (date, left, right) {
        return this.greaterThan(date, left) && this.lessThan(date, right);
    };
    return DateComparer;
}());
exports.DateComparer = DateComparer;
