"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var en_GB_1 = __importDefault(require("../locales/en-GB"));
var $extend = __importStar(require("extend"));
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
function deepExtend(target, source) {
    // Rollup...
    var extend = $extend.default || $extend;
    return extend(true, target, source);
}
function lang(language) {
    return language.toLowerCase().replace("-", "");
}
var SuiLocalizationService = /** @class */ (function () {
    function SuiLocalizationService() {
        this.onLanguageUpdate = new core_1.EventEmitter();
        this._fallbackValues = en_GB_1.default;
        this._values = {};
        this._language = "en-GB";
        this.load("en-GB", en_GB_1.default);
    }
    Object.defineProperty(SuiLocalizationService.prototype, "language", {
        get: function () {
            return this._language;
        },
        enumerable: true,
        configurable: true
    });
    SuiLocalizationService.prototype.setLanguage = function (language) {
        if (lang(this._language) !== lang(language)) {
            this._language = language;
            this.onLanguageUpdate.emit();
        }
    };
    SuiLocalizationService.prototype.get = function (language) {
        if (language === void 0) { language = this.language; }
        var values = deepClone(this._fallbackValues);
        if (!this._values[lang(language)]) {
            throw new Error("Locale " + language + " is not loaded");
        }
        deepExtend(values, this._values[lang(language)]);
        return deepClone(values);
    };
    SuiLocalizationService.prototype.override = function (values, overrides) {
        return deepExtend(deepClone(values), overrides);
    };
    SuiLocalizationService.prototype.load = function (language, values) {
        this._values[lang(language)] = deepClone(values);
        this.onLanguageUpdate.emit();
    };
    SuiLocalizationService.prototype.patch = function (language, values) {
        deepExtend(this._values[lang(language)], values);
    };
    SuiLocalizationService.prototype.interpolate = function (value, variables) {
        return variables.reduce(function (s, _a) {
            var k = _a[0], v = _a[1];
            return s.replace(new RegExp("#{" + k + "}", "g"), v);
        }, value);
    };
    SuiLocalizationService = __decorate([
        core_1.Injectable()
    ], SuiLocalizationService);
    return SuiLocalizationService;
}());
exports.SuiLocalizationService = SuiLocalizationService;
