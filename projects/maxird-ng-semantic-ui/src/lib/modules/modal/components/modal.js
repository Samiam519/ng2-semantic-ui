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
var transition_1 = require("../../transition/classes/transition");
var transition_controller_1 = require("../../transition/classes/transition-controller");
var modal_config_1 = require("../classes/modal-config");
var modal_controls_1 = require("../classes/modal-controls");
var SuiModal = /** @class */ (function () {
    function SuiModal(_renderer, _element, _componentFactory) {
        var _this = this;
        this._renderer = _renderer;
        this._element = _element;
        this._componentFactory = _componentFactory;
        // Initialise with default configuration from `ModalConfig` (to avoid writing defaults twice).
        var config = new modal_config_1.ModalConfig();
        this.loadConfig(config);
        // Event emitters for each of the possible modal outcomes.
        this.onApprove = new core_1.EventEmitter();
        this.onDeny = new core_1.EventEmitter();
        this.onDismiss = new core_1.EventEmitter();
        // Initialise controls with actions for the `approve` and `deny` cases.
        this.controls = new modal_controls_1.ModalControls(function (res) { return _this.dismiss(function () { return _this.onApprove.emit(res); }); }, function (res) { return _this.dismiss(function () { return _this.onDeny.emit(res); }); });
        // Internal variable initialisation.
        this.dimBackground = false;
        this._isClosing = false;
        this.transitionController = new transition_controller_1.TransitionController(false);
    }
    Object.defineProperty(SuiModal.prototype, "approve", {
        get: function () {
            return this.controls.approve;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiModal.prototype, "deny", {
        get: function () {
            return this.controls.deny;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiModal.prototype, "isCentered", {
        get: function () {
            return this._isCentered;
        },
        set: function (inverted) {
            this._isCentered = util_1.Util.DOM.parseBooleanAttribute(inverted);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiModal.prototype, "isFullScreen", {
        // Value to deny with when closing via `isClosable`.
        get: function () {
            return this._isFullScreen;
        },
        set: function (fullScreen) {
            this._isFullScreen = util_1.Util.DOM.parseBooleanAttribute(fullScreen);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiModal.prototype, "mustScroll", {
        get: function () {
            return this._mustScroll;
        },
        set: function (mustScroll) {
            this._mustScroll = mustScroll;
            // 'Cache' value in _mustAlwaysScroll so that if `true`, _mustScroll isn't ever auto-updated.
            this._mustAlwaysScroll = mustScroll;
            this.updateScroll();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiModal.prototype, "isInverted", {
        get: function () {
            return this._isInverted;
        },
        set: function (inverted) {
            this._isInverted = util_1.Util.DOM.parseBooleanAttribute(inverted);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiModal.prototype, "dynamicClasses", {
        get: function () {
            var classes = {};
            if (this.size) {
                classes[this.size] = true;
            }
            return classes;
        },
        enumerable: true,
        configurable: true
    });
    SuiModal.prototype.ngOnInit = function () {
        var _this = this;
        // Transition the modal to be visible.
        this.transitionController.animate(new transition_1.Transition(this.transition, this.transitionDuration, transition_1.TransitionDirection.In));
        setTimeout(function () { return _this.dimBackground = true; });
    };
    SuiModal.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Move the modal to the document body to ensure correct scrolling.
        this._originalContainer = this._element.nativeElement.parentNode;
        document.querySelector("body").appendChild(this._element.nativeElement);
        // Remove the #templateSibling element from the DOM to fix bottom border styles.
        var templateElement = this.templateSibling.element.nativeElement;
        if (templateElement.parentNode) {
            templateElement.parentNode.removeChild(templateElement);
        }
        var element = this._modalElement.nativeElement;
        setTimeout(function () { return _this.updateScroll(); });
        // Focus any element with [autofocus] attribute.
        var autoFocus = element.querySelector("[autofocus]");
        if (autoFocus) {
            // Autofocus after the browser has had time to process other event handlers.
            setTimeout(function () { return autoFocus.focus(); }, 10);
            // Try to focus again when the modal has opened so that autofocus works in IE11.
            setTimeout(function () { return autoFocus.focus(); }, this.transitionDuration);
        }
    };
    // Updates the modal with the specified configuration.
    SuiModal.prototype.loadConfig = function (config) {
        this.isClosable = config.isClosable;
        this.closeResult = config.closeResult;
        this.size = config.size;
        this.isFullScreen = config.isFullScreen;
        this.isBasic = config.isBasic;
        this.isInverted = config.isInverted;
        this.isCentered = config.isCentered;
        this.mustScroll = config.mustScroll;
        this.transition = config.transition;
        this.transitionDuration = config.transitionDuration;
    };
    // Dismisses the modal with a transition, firing the callback after the modal has finished transitioning.
    SuiModal.prototype.dismiss = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = function () { }; }
        // If we aren't currently closing,
        if (!this._isClosing) {
            this._isClosing = true;
            // Transition the modal to be invisible.
            this.dimBackground = false;
            this.transitionController.stopAll();
            this.transitionController.animate(new transition_1.Transition(this.transition, this.transitionDuration, transition_1.TransitionDirection.Out, function () {
                // When done, move the modal back to its original location, emit a dismiss event, and fire the callback.
                if (_this._originalContainer) {
                    _this._originalContainer.appendChild(_this._element.nativeElement);
                }
                _this.onDismiss.emit();
                callback();
            }));
        }
    };
    // Closes the modal with a 'deny' outcome, using the specified default reason.
    SuiModal.prototype.close = function () {
        if (this.isClosable) {
            // If we are allowed to close, fire the deny result with the default value.
            this.deny(this.closeResult);
        }
    };
    // Decides whether the modal needs to reposition to allow scrolling.
    SuiModal.prototype.updateScroll = function () {
        // _mustAlwaysScroll works by stopping _mustScroll from being automatically updated, so it stays `true`.
        if (!this._mustAlwaysScroll && this._modalElement) {
            // Semantic UI modal margin and dimmer padding are 1rem, which is relative to the global font size, so for compatibility:
            var fontSize = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"));
            var margin = fontSize * 2;
            var element = this._modalElement.nativeElement;
            // The modal must scroll if the window height is smaller than the modal height + both margins.
            this._mustScroll = window.innerHeight < element.clientHeight + margin * 2;
        }
    };
    SuiModal.prototype.onClick = function (e) {
        // Makes sense here, as the modal shouldn't be attached to any DOM element.
        e.stopPropagation();
    };
    // Document listener is fine here because nobody will have enough modals open.
    SuiModal.prototype.onDocumentKeyUp = function (e) {
        if (e.keyCode === util_1.KeyCode.Escape) {
            // Close automatically covers case of `!isClosable`, so check not needed.
            this.close();
        }
    };
    SuiModal.prototype.onDocumentResize = function () {
        this.updateScroll();
    };
    __decorate([
        core_1.Input()
    ], SuiModal.prototype, "isClosable", void 0);
    __decorate([
        core_1.Input()
    ], SuiModal.prototype, "closeResult", void 0);
    __decorate([
        core_1.Output("approved")
    ], SuiModal.prototype, "onApprove", void 0);
    __decorate([
        core_1.Output("denied")
    ], SuiModal.prototype, "onDeny", void 0);
    __decorate([
        core_1.Output("dismissed")
    ], SuiModal.prototype, "onDismiss", void 0);
    __decorate([
        core_1.ViewChild("modal")
    ], SuiModal.prototype, "_modalElement", void 0);
    __decorate([
        core_1.Input()
    ], SuiModal.prototype, "size", void 0);
    __decorate([
        core_1.Input()
    ], SuiModal.prototype, "isCentered", null);
    __decorate([
        core_1.Input()
    ], SuiModal.prototype, "isFullScreen", null);
    __decorate([
        core_1.Input()
    ], SuiModal.prototype, "isBasic", void 0);
    __decorate([
        core_1.Input()
    ], SuiModal.prototype, "mustScroll", null);
    __decorate([
        core_1.Input()
    ], SuiModal.prototype, "isInverted", null);
    __decorate([
        core_1.Input()
    ], SuiModal.prototype, "transition", void 0);
    __decorate([
        core_1.Input()
    ], SuiModal.prototype, "transitionDuration", void 0);
    __decorate([
        core_1.ViewChild("templateSibling", { read: core_1.ViewContainerRef })
    ], SuiModal.prototype, "templateSibling", void 0);
    __decorate([
        core_1.HostListener("document:keyup", ["$event"])
    ], SuiModal.prototype, "onDocumentKeyUp", null);
    __decorate([
        core_1.HostListener("window:resize")
    ], SuiModal.prototype, "onDocumentResize", null);
    SuiModal = __decorate([
        core_1.Component({
            selector: "sui-modal",
            template: "\n<!-- Page dimmer for modal background. -->\n<sui-modal-dimmer [ngClass]=\"{'top aligned': !isCentered}\"\n                  [class.inverted]=\"isInverted\"\n                  [(isDimmed)]=\"dimBackground\"\n                  [transitionDuration]=\"transitionDuration\"\n                  (click)=\"close()\">\n\n    <!-- Modal component, with transition component attached -->\n    <div class=\"ui modal\"\n         [suiTransition]=\"transitionController\"\n         [class.active]=\"transitionController?.isVisible\"\n         [class.fullscreen]=\"isFullScreen\"\n         [class.basic]=\"isBasic\"\n         [class.scrolling]=\"mustScroll\"\n         [class.inverted]=\"isInverted\"\n         [ngClass]=\"dynamicClasses\"\n         (click)=\"onClick($event)\"\n         #modal>\n\n        <!-- Configurable close icon -->\n        <i class=\"close icon\" *ngIf=\"isClosable\" (click)=\"close()\"></i>\n        <!-- <ng-content> so that <sui-modal> can be used as a normal component. -->\n        <ng-content></ng-content>\n        <!-- @ViewChild reference so we can insert elements beside this div. -->\n        <div #templateSibling></div>\n    </div>\n</sui-modal-dimmer>\n",
            styles: [""]
        })
    ], SuiModal);
    return SuiModal;
}());
exports.SuiModal = SuiModal;
