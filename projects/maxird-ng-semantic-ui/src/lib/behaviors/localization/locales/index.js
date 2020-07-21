"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var de_1 = __importDefault(require("./de"));
var en_AU_1 = __importDefault(require("./en-AU"));
var en_GB_1 = __importDefault(require("./en-GB"));
var en_US_1 = __importDefault(require("./en-US"));
var es_1 = __importDefault(require("./es"));
var fr_1 = __importDefault(require("./fr"));
var ge_1 = __importDefault(require("./ge"));
var he_1 = __importDefault(require("./he"));
var it_1 = __importDefault(require("./it"));
var nl_1 = __importDefault(require("./nl"));
var pt_1 = __importDefault(require("./pt"));
var ru_1 = __importDefault(require("./ru"));
// This file exists for the demo app. Don't use this in real life.
exports.default = {
    de: de_1.default,
    enAU: en_AU_1.default,
    enGB: en_GB_1.default,
    enUS: en_US_1.default,
    es: es_1.default,
    it: it_1.default,
    fr: fr_1.default,
    pt: pt_1.default,
    ru: ru_1.default,
    he: he_1.default,
    ge: ge_1.default,
    nl: nl_1.default
};
/*

// Potentially cleaner format:

export default [
    ["de", de],
    ["enAU", enAU],
    ["enGB", enGB],
    ["enUS", enUS],
    ["es", es],
    ["it", it],
    ["fr", fr],
    ["pt", pt],
    ["ru", ru],
    ["he", he],
    ["ge", ge],
    ["nl", nl]
];

*/
