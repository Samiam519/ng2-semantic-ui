"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var util_1 = require("../../../misc/util/helpers/util");
var dropdown_menu_1 = require("../../dropdown/directives/dropdown-menu");
var dropdown_service_1 = require("../../dropdown/services/dropdown.service");
var search_service_1 = require("../../search/services/search.service");
var select_option_1 = require("../components/select-option");
var select_search_1 = require("../directives/select-search");
// We use generic type T to specify the type of the options we are working with,
// and U to specify the type of the property of the option used as the value.
var SuiSelectBase = /** @class */ (function () {
    function SuiSelectBase(_element, _localizationService) {
        var _this = this;
        this._element = _element;
        this._localizationService = _localizationService;
        this.dropdownService = new dropdown_service_1.DropdownService();
        // We do want an empty query to return all results.
        this.searchService = new search_service_1.SearchService(true);
        this.isSearchable = false;
        this.onLocaleUpdate();
        this._localizationService.onLanguageUpdate.subscribe(function () { return _this.onLocaleUpdate(); });
        this._renderedSubscriptions = [];
        this.icon = "dropdown";
        this.transition = "slide down";
        this.transitionDuration = 200;
        this.onTouched = new core_1.EventEmitter();
        this.hasClasses = true;
    }
    Object.defineProperty(SuiSelectBase.prototype, "isActive", {
        get: function () {
            return this.dropdownService.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "isVisible", {
        get: function () {
            return this._menu.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "hasSearchClass", {
        get: function () {
            return this.isSearchable && !this.isSearchExternal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "isSearching", {
        get: function () {
            return this.searchService.isSearching;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "searchInput", {
        get: function () {
            return this._manualSearch || this._internalSearch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "tabindex", {
        get: function () {
            if (this.isDisabled) {
                // If disabled, remove from tabindex.
                return -1;
            }
            if (this.dropdownService.isOpen && this.isSearchExternal) {
                // If open & in menu search, remove from tabindex (as input always autofocusses).
                return -1;
            }
            if (this._tabIndex != undefined) {
                // If custom tabindex, default to that.
                return this._tabIndex;
            }
            if (this.hasSearchClass) {
                // If search input enabled, tab goes to input.
                return -1;
            }
            // Otherwise, return default of 0.
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "isDisabled", {
        get: function () {
            return this.dropdownService.isDisabled;
        },
        set: function (value) {
            this.dropdownService.isDisabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "options", {
        set: function (options) {
            if (options) {
                this.searchService.options = options;
                this.optionsUpdateHook();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "optionsFilter", {
        set: function (filter) {
            if (filter) {
                this.searchService.optionsFilter = filter;
                this.optionsUpdateHook();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "optionsLookup", {
        set: function (lookup) {
            if (lookup) {
                this.searchService.optionsLookup = lookup;
                this.optionsUpdateHook();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "filteredOptions", {
        get: function () {
            return this.searchService.results;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "availableOptions", {
        // Deprecated
        get: function () {
            return this.filteredOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "query", {
        get: function () {
            return this.isSearchable ? this.searchService.query : undefined;
        },
        set: function (query) {
            var _this = this;
            if (query != undefined) {
                this.queryUpdateHook();
                this.updateQuery(query);
                // Update the rendered text as query has changed.
                this._renderedOptions.forEach(function (ro) { return _this.initialiseRenderedOption(ro); });
                if (this.searchInput) {
                    this.searchInput.query = query;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "labelField", {
        get: function () {
            return this.searchService.optionsField;
        },
        set: function (field) {
            this.searchService.optionsField = field;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "labelGetter", {
        get: function () {
            var _this = this;
            // Helper function to retrieve the label from an item.
            return function (obj) {
                var label = util_1.Util.Object.readValue(obj, _this.labelField);
                if (label != undefined) {
                    return label.toString();
                }
                return "";
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "valueGetter", {
        get: function () {
            var _this = this;
            // Helper function to retrieve the value from an item.
            return function (obj) { return util_1.Util.Object.readValue(obj, _this.valueField); };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "configuredFormatter", {
        get: function () {
            var _this = this;
            if (this._optionFormatter) {
                return function (o) { return _this._optionFormatter(o, _this.isSearchable ? _this.query : undefined); };
            }
            else if (this.searchService.optionsLookup) {
                return function (o) { return _this.labelGetter(o); };
            }
            else {
                return function (o) { return _this.searchService.highlightMatches(_this.labelGetter(o), _this.query || ""); };
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "optionFormatter", {
        set: function (formatter) {
            this._optionFormatter = formatter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "localeValues", {
        get: function () {
            return this._localizationService.override(this._localeValues, this.localeOverrides);
        },
        enumerable: true,
        configurable: true
    });
    SuiSelectBase.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._menu.service = this.dropdownService;
        // We manually specify the menu items to the menu because the @ContentChildren doesn't pick up our dynamically rendered items.
        this._menu.items = this._renderedOptions;
        this._menu.parentElement = this._element;
        if (this._manualSearch) {
            this.isSearchable = true;
            this.isSearchExternal = true;
        }
        if (this.searchInput) {
            this.searchInput.onQueryUpdated.subscribe(function (q) { return _this.query = q; });
            this.searchInput.onQueryKeyDown.subscribe(function (e) { return _this.onQueryInputKeydown(e); });
        }
        // We must call this immediately as changes doesn't fire when you subscribe.
        this.onAvailableOptionsRendered();
        this._renderedOptions.changes.subscribe(function () { return _this.onAvailableOptionsRendered(); });
    };
    SuiSelectBase.prototype.onLocaleUpdate = function () {
        this._localeValues = this._localizationService.get().select;
    };
    // Hook is here since Typescript doesn't yet support overriding getters & setters while still calling the superclass.
    SuiSelectBase.prototype.optionsUpdateHook = function () { };
    // Hook is here since Typescript doesn't yet support overriding getters & setters while still calling the superclass.
    SuiSelectBase.prototype.queryUpdateHook = function () { };
    SuiSelectBase.prototype.updateQuery = function (query) {
        var _this = this;
        // Update the query then open the dropdown, as after keyboard input it should always be open.
        this.searchService.updateQuery(query, function () {
            return _this.dropdownService.setOpenState(true);
        });
    };
    SuiSelectBase.prototype.resetQuery = function (delayed) {
        if (delayed === void 0) { delayed = true; }
        // The search delay is set to the transition duration to ensure results
        // aren't rendered as the select closes as that causes a sudden flash.
        if (delayed) {
            this.searchService.searchDelay = this._menu.menuTransitionDuration;
            this.searchService.updateQueryDelayed("");
        }
        else {
            this.searchService.updateQuery("");
        }
        if (this.searchInput) {
            this.searchInput.query = "";
        }
    };
    SuiSelectBase.prototype.onAvailableOptionsRendered = function () {
        var _this = this;
        // Unsubscribe from all previous subscriptions to avoid memory leaks on large selects.
        this._renderedSubscriptions.forEach(function (rs) { return rs.unsubscribe(); });
        this._renderedSubscriptions = [];
        this._renderedOptions.forEach(function (ro) {
            // Slightly delay initialisation to avoid change after checked errors. TODO - look into avoiding this!
            setTimeout(function () { return _this.initialiseRenderedOption(ro); });
            _this._renderedSubscriptions.push(ro.onSelected.subscribe(function () { return _this.selectOption(ro.value); }));
        });
        // If no options have been provided, autogenerate them from the rendered ones.
        if (this.searchService.options.length === 0 && !this.searchService.optionsLookup) {
            this.options = this._renderedOptions.map(function (ro) { return ro.value; });
        }
    };
    SuiSelectBase.prototype.initialiseRenderedOption = function (option) {
        option.usesTemplate = !!this.optionTemplate;
        option.formatter = this.configuredFormatter;
        if (option.usesTemplate) {
            this.drawTemplate(option.templateSibling, option.value);
        }
        option.changeDetector.markForCheck();
    };
    SuiSelectBase.prototype.findOption = function (options, value) {
        var _this = this;
        // Tries to find an option in options array
        return options.find(function (o) { return value === _this.valueGetter(o); });
    };
    SuiSelectBase.prototype.onCaretClick = function (e) {
        if (!e.eventHandled) {
            e.eventHandled = true;
            if (!this.dropdownService.isAnimating) {
                this.dropdownService.setOpenState(!this.dropdownService.isOpen);
                this.focus();
            }
        }
    };
    SuiSelectBase.prototype.onClick = function (e) {
        if (!e.eventHandled && !this.dropdownService.isAnimating) {
            e.eventHandled = true;
            // If the dropdown is searchable, clicking should keep it open, otherwise we toggle the open state.
            this.dropdownService.setOpenState(this.isSearchable ? true : !this.dropdownService.isOpen);
            // Immediately focus the search input whenever clicking on the select.
            this.focus();
        }
    };
    SuiSelectBase.prototype.onFocusIn = function () {
        if (!this.dropdownService.isOpen && !this.dropdownService.isAnimating) {
            this.dropdownService.setOpenState(true);
            this.focus();
        }
    };
    SuiSelectBase.prototype.onFocusOut = function (e) {
        if (!this._element.nativeElement.contains(e.relatedTarget)) {
            this.dropdownService.setOpenState(false);
            this.onTouched.emit();
        }
    };
    SuiSelectBase.prototype.onKeyPress = function (e) {
        if (e.keyCode === util_1.KeyCode.Enter) {
            // Enables support for focussing and opening with the keyboard alone.
            // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
            this._element.nativeElement.click();
        }
    };
    SuiSelectBase.prototype.onKeyDown = function (e) {
        if (!this.dropdownService.isOpen && e.keyCode === util_1.KeyCode.Down) {
            // Enables support for focussing and opening with the keyboard alone.
            // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
            this._element.nativeElement.click();
            e.preventDefault();
        }
    };
    SuiSelectBase.prototype.onQueryInputKeydown = function (event) { };
    SuiSelectBase.prototype.focus = function () {
        if (this.isSearchable && this.searchInput) {
            // Focusses the search input only when searchable.
            // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
            this.searchInput.focus();
        }
        else {
            this._element.nativeElement.focus();
        }
    };
    // Helper that draws the provided template beside the provided ViewContainerRef.
    SuiSelectBase.prototype.drawTemplate = function (siblingRef, value) {
        siblingRef.clear();
        // Use of `$implicit` means use of <ng-template let-option> syntax is supported.
        siblingRef.createEmbeddedView(this.optionTemplate, {
            $implicit: value,
            query: this.query
        });
    };
    SuiSelectBase.prototype.ngOnDestroy = function () {
        this._renderedSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    __decorate([
        core_1.ViewChild(dropdown_menu_1.SuiDropdownMenu)
    ], SuiSelectBase.prototype, "_menu", void 0);
    __decorate([
        core_1.ContentChildren(select_option_1.SuiSelectOption, { descendants: true })
    ], SuiSelectBase.prototype, "_renderedOptions", void 0);
    __decorate([
        core_1.HostBinding("class.ui"),
        core_1.HostBinding("class.dropdown")
    ], SuiSelectBase.prototype, "hasClasses", void 0);
    __decorate([
        core_1.HostBinding("class.active")
    ], SuiSelectBase.prototype, "isActive", null);
    __decorate([
        core_1.HostBinding("class.visible")
    ], SuiSelectBase.prototype, "isVisible", null);
    __decorate([
        core_1.Input()
    ], SuiSelectBase.prototype, "isSearchable", void 0);
    __decorate([
        core_1.HostBinding("class.search")
    ], SuiSelectBase.prototype, "hasSearchClass", null);
    __decorate([
        core_1.HostBinding("class.loading")
    ], SuiSelectBase.prototype, "isSearching", null);
    __decorate([
        core_1.ViewChild(select_search_1.SuiSelectSearch)
    ], SuiSelectBase.prototype, "_internalSearch", void 0);
    __decorate([
        core_1.ContentChild(select_search_1.SuiSelectSearch)
    ], SuiSelectBase.prototype, "_manualSearch", void 0);
    __decorate([
        core_1.Input("tabindex")
    ], SuiSelectBase.prototype, "_tabIndex", void 0);
    __decorate([
        core_1.HostBinding("attr.tabindex")
    ], SuiSelectBase.prototype, "tabindex", null);
    __decorate([
        core_1.HostBinding("class.disabled"),
        core_1.Input()
    ], SuiSelectBase.prototype, "isDisabled", null);
    __decorate([
        core_1.Input()
    ], SuiSelectBase.prototype, "options", null);
    __decorate([
        core_1.Input()
    ], SuiSelectBase.prototype, "optionsFilter", null);
    __decorate([
        core_1.Input()
    ], SuiSelectBase.prototype, "optionsLookup", null);
    __decorate([
        core_1.Input()
    ], SuiSelectBase.prototype, "labelField", null);
    __decorate([
        core_1.Input()
    ], SuiSelectBase.prototype, "valueField", void 0);
    __decorate([
        core_1.Input()
    ], SuiSelectBase.prototype, "optionTemplate", void 0);
    __decorate([
        core_1.Input()
    ], SuiSelectBase.prototype, "optionFormatter", null);
    __decorate([
        core_1.Input()
    ], SuiSelectBase.prototype, "icon", void 0);
    __decorate([
        core_1.Input()
    ], SuiSelectBase.prototype, "transition", void 0);
    __decorate([
        core_1.Input()
    ], SuiSelectBase.prototype, "transitionDuration", void 0);
    __decorate([
        core_1.Output("touched")
    ], SuiSelectBase.prototype, "onTouched", void 0);
    __decorate([
        core_1.HostListener("click", ["$event"])
    ], SuiSelectBase.prototype, "onClick", null);
    __decorate([
        core_1.HostListener("focusin")
    ], SuiSelectBase.prototype, "onFocusIn", null);
    __decorate([
        core_1.HostListener("focusout", ["$event"])
    ], SuiSelectBase.prototype, "onFocusOut", null);
    __decorate([
        core_1.HostListener("keypress", ["$event"])
    ], SuiSelectBase.prototype, "onKeyPress", null);
    __decorate([
        core_1.HostListener("keydown", ["$event"])
    ], SuiSelectBase.prototype, "onKeyDown", null);
    return SuiSelectBase;
}());
exports.SuiSelectBase = SuiSelectBase;
