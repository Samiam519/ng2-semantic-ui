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
var date_fns_1 = require("../helpers/date-fns");
var DateParser = /** @class */ (function () {
    function DateParser(format, locale) {
        this._format = format;
        this._parser = new date_fns_1.DateFnsParser(locale);
    }
    DateParser.prototype.format = function (date) {
        return this._parser.format(date, this._format);
    };
    DateParser.prototype.parse = function (dateString, baseDate) {
        if (baseDate === void 0) { baseDate = new Date(); }
        return this._parser.parse(dateString, this._format, baseDate);
    };
    return DateParser;
}());
exports.DateParser = DateParser;
var InternalDateParser = /** @class */ (function (_super) {
    __extends(InternalDateParser, _super);
    function InternalDateParser(mode, locale) {
        var _this = this;
        var internalFormats = {
            time: "HH:mm",
            datetime: "YYYY-MM-DDTHH:mm",
            date: "YYYY-MM-DD",
            month: "YYYY-MM",
            year: "YYYY"
        };
        _this = _super.call(this, internalFormats[mode], locale) || this;
        return _this;
    }
    return InternalDateParser;
}(DateParser));
exports.InternalDateParser = InternalDateParser;
