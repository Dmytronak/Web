(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["game-game-module"],{

/***/ "./node_modules/ng2-select/index.js":
/*!******************************************!*\
  !*** ./node_modules/ng2-select/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./select/common */ "./node_modules/ng2-select/select/common.js"));
__export(__webpack_require__(/*! ./select/off-click */ "./node_modules/ng2-select/select/off-click.js"));
__export(__webpack_require__(/*! ./select/select.module */ "./node_modules/ng2-select/select/select.module.js"));
__export(__webpack_require__(/*! ./select/select */ "./node_modules/ng2-select/select/select.js"));
__export(__webpack_require__(/*! ./select/select-item */ "./node_modules/ng2-select/select/select-item.js"));
__export(__webpack_require__(/*! ./select/select-pipes */ "./node_modules/ng2-select/select/select-pipes.js"));


/***/ }),

/***/ "./node_modules/ng2-select/select/common.js":
/*!**************************************************!*\
  !*** ./node_modules/ng2-select/select/common.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function escapeRegexp(queryToEscape) {
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
exports.escapeRegexp = escapeRegexp;


/***/ }),

/***/ "./node_modules/ng2-select/select/off-click.js":
/*!*****************************************************!*\
  !*** ./node_modules/ng2-select/select/off-click.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var OffClickDirective = (function () {
    function OffClickDirective() {
    }
    /* tslint:enable */
    OffClickDirective.prototype.onClick = function ($event) {
        $event.stopPropagation();
    };
    OffClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { if (typeof document !== 'undefined') {
            document.addEventListener('click', _this.offClickHandler);
        } }, 0);
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        if (typeof document !== 'undefined') {
            document.removeEventListener('click', this.offClickHandler);
        }
    };
    OffClickDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[offClick]'
                },] },
    ];
    /** @nocollapse */
    OffClickDirective.ctorParameters = function () { return []; };
    OffClickDirective.propDecorators = {
        'offClickHandler': [{ type: core_1.Input, args: ['offClick',] },],
        'onClick': [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
    };
    return OffClickDirective;
}());
exports.OffClickDirective = OffClickDirective;


/***/ }),

/***/ "./node_modules/ng2-select/select/select-item.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng2-select/select/select-item.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SelectItem = (function () {
    function SelectItem(source) {
        var _this = this;
        if (typeof source === 'string') {
            this.id = this.text = source;
        }
        if (typeof source === 'object') {
            this.id = source.id || source.text;
            this.text = source.text;
            if (source.children && source.text) {
                this.children = source.children.map(function (c) {
                    var r = new SelectItem(c);
                    r.parent = _this;
                    return r;
                });
                this.text = source.text;
            }
        }
    }
    SelectItem.prototype.fillChildrenHash = function (optionsMap, startIndex) {
        var i = startIndex;
        this.children.map(function (child) {
            optionsMap.set(child.id, i++);
        });
        return i;
    };
    SelectItem.prototype.hasChildren = function () {
        return this.children && this.children.length > 0;
    };
    SelectItem.prototype.getSimilar = function () {
        var r = new SelectItem(false);
        r.id = this.id;
        r.text = this.text;
        r.parent = this.parent;
        return r;
    };
    return SelectItem;
}());
exports.SelectItem = SelectItem;


/***/ }),

/***/ "./node_modules/ng2-select/select/select-pipes.js":
/*!********************************************************!*\
  !*** ./node_modules/ng2-select/select/select-pipes.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! ./common */ "./node_modules/ng2-select/select/common.js");
var HighlightPipe = (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (value, query) {
        if (query.length < 1) {
            return value;
        }
        if (query) {
            var tagRE = new RegExp('<[^<>]*>', 'ig');
            // get ist of tags
            var tagList = value.match(tagRE);
            // Replace tags with token
            var tmpValue = value.replace(tagRE, '$!$');
            // Replace search words
            value = tmpValue.replace(new RegExp(common_1.escapeRegexp(query), 'gi'), '<strong>$&</strong>');
            // Reinsert HTML
            for (var i = 0; value.indexOf('$!$') > -1; i++) {
                value = value.replace('$!$', tagList[i]);
            }
        }
        return value;
    };
    HighlightPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'highlight' },] },
    ];
    /** @nocollapse */
    HighlightPipe.ctorParameters = function () { return []; };
    return HighlightPipe;
}());
exports.HighlightPipe = HighlightPipe;
function stripTags(input) {
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '').replace(tags, '');
}
exports.stripTags = stripTags;


/***/ }),

/***/ "./node_modules/ng2-select/select/select.js":
/*!**************************************************!*\
  !*** ./node_modules/ng2-select/select/select.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var select_item_1 = __webpack_require__(/*! ./select-item */ "./node_modules/ng2-select/select/select-item.js");
var select_pipes_1 = __webpack_require__(/*! ./select-pipes */ "./node_modules/ng2-select/select/select-pipes.js");
var common_1 = __webpack_require__(/*! ./common */ "./node_modules/ng2-select/select/common.js");
var styles = "\n  .ui-select-toggle {\n    position: relative;\n  }\n\n  /* Fix caret going into new line in Firefox */\n  .ui-select-placeholder {\n    float: left;\n  }\n  \n  /* Fix Bootstrap dropdown position when inside a input-group */\n  .input-group > .dropdown {\n    /* Instead of relative */\n    position: static;\n  }\n  \n  .ui-select-match > .btn {\n    /* Instead of center because of .btn */\n    text-align: left !important;\n  }\n  \n  .ui-select-match > .caret {\n    position: absolute;\n    top: 45%;\n    right: 15px;\n  }\n  \n  .ui-disabled {\n    background-color: #eceeef;\n    border-radius: 4px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 5;\n    opacity: 0.6;\n    top: 0;\n    left: 0;\n    cursor: not-allowed;\n  }\n  \n  .ui-select-choices {\n    width: 100%;\n    height: auto;\n    max-height: 200px;\n    overflow-x: hidden;\n    margin-top: 0;\n  }\n  \n  .ui-select-multiple .ui-select-choices {\n    margin-top: 1px;\n  }\n  .ui-select-choices-row>a {\n      display: block;\n      padding: 3px 20px;\n      clear: both;\n      font-weight: 400;\n      line-height: 1.42857143;\n      color: #333;\n      white-space: nowrap;\n  }\n  .ui-select-choices-row.active>a {\n      color: #fff;\n      text-decoration: none;\n      outline: 0;\n      background-color: #428bca;\n  }\n  \n  .ui-select-multiple {\n    height: auto;\n    padding:3px 3px 0 3px;\n  }\n  \n  .ui-select-multiple input.ui-select-search {\n    background-color: transparent !important; /* To prevent double background when disabled */\n    border: none;\n    outline: none;\n    box-shadow: none;\n    height: 1.6666em;\n    padding: 0;\n    margin-bottom: 3px;\n    \n  }\n  .ui-select-match .close {\n      font-size: 1.6em;\n      line-height: 0.75;\n  }\n  \n  .ui-select-multiple .ui-select-match-item {\n    outline: 0;\n    margin: 0 3px 3px 0;\n  }\n  .ui-select-toggle > .caret {\n      position: absolute;\n      height: 10px;\n      top: 50%;\n      right: 10px;\n      margin-top: -2px;\n  }\n";
var SelectComponent = (function () {
    function SelectComponent(element, sanitizer) {
        this.sanitizer = sanitizer;
        this.allowClear = false;
        this.placeholder = '';
        this.idField = 'id';
        this.textField = 'text';
        this.childrenField = 'children';
        this.multiple = false;
        this.data = new core_1.EventEmitter();
        this.selected = new core_1.EventEmitter();
        this.removed = new core_1.EventEmitter();
        this.typed = new core_1.EventEmitter();
        this.opened = new core_1.EventEmitter();
        this.options = [];
        this.itemObjects = [];
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inputMode = false;
        this._optionsOpened = false;
        this.inputValue = '';
        this._items = [];
        this._disabled = false;
        this._active = [];
        this.element = element;
        this.clickedOutside = this.clickedOutside.bind(this);
    }
    Object.defineProperty(SelectComponent.prototype, "items", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this._items = this.itemObjects = [];
            }
            else {
                this._items = value.filter(function (item) {
                    if ((typeof item === 'string') || (typeof item === 'object' && item && item[_this.textField] && item[_this.idField])) {
                        return item;
                    }
                });
                this.itemObjects = this._items.map(function (item) { return (typeof item === 'string' ? new select_item_1.SelectItem(item) : new select_item_1.SelectItem({ id: item[_this.idField], text: item[_this.textField], children: item[_this.childrenField] })); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value;
            if (this._disabled === true) {
                this.hideOptions();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (selectedItems) {
            var _this = this;
            if (!selectedItems || selectedItems.length === 0) {
                this._active = [];
            }
            else {
                var areItemsStrings_1 = typeof selectedItems[0] === 'string';
                this._active = selectedItems.map(function (item) {
                    var data = areItemsStrings_1
                        ? item
                        : { id: item[_this.idField], text: item[_this.textField] };
                    return new select_item_1.SelectItem(data);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "optionsOpened", {
        get: function () {
            return this._optionsOpened;
        },
        set: function (value) {
            this._optionsOpened = value;
            this.opened.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.sanitize = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SelectComponent.prototype.inputEvent = function (e, isUpMode) {
        if (isUpMode === void 0) { isUpMode = false; }
        // tab
        if (e.keyCode === 9) {
            return;
        }
        if (isUpMode && (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 38 ||
            e.keyCode === 40 || e.keyCode === 13)) {
            e.preventDefault();
            return;
        }
        // backspace
        if (!isUpMode && e.keyCode === 8) {
            var el = this.element.nativeElement
                .querySelector('div.ui-select-container > input');
            if (!el.value || el.value.length <= 0) {
                if (this.active.length > 0) {
                    this.remove(this.active[this.active.length - 1]);
                }
                e.preventDefault();
            }
        }
        // esc
        if (!isUpMode && e.keyCode === 27) {
            this.hideOptions();
            this.element.nativeElement.children[0].focus();
            e.preventDefault();
            return;
        }
        // del
        if (!isUpMode && e.keyCode === 46) {
            if (this.active.length > 0) {
                this.remove(this.active[this.active.length - 1]);
            }
            e.preventDefault();
        }
        // left
        if (!isUpMode && e.keyCode === 37 && this._items.length > 0) {
            this.behavior.first();
            e.preventDefault();
            return;
        }
        // right
        if (!isUpMode && e.keyCode === 39 && this._items.length > 0) {
            this.behavior.last();
            e.preventDefault();
            return;
        }
        // up
        if (!isUpMode && e.keyCode === 38) {
            this.behavior.prev();
            e.preventDefault();
            return;
        }
        // down
        if (!isUpMode && e.keyCode === 40) {
            this.behavior.next();
            e.preventDefault();
            return;
        }
        // enter
        if (!isUpMode && e.keyCode === 13) {
            if (this.active.indexOf(this.activeOption) === -1) {
                this.selectActiveMatch();
                this.behavior.next();
            }
            e.preventDefault();
            return;
        }
        var target = e.target || e.srcElement;
        if (target && target.value) {
            this.inputValue = target.value;
            this.behavior.filter(new RegExp(common_1.escapeRegexp(this.inputValue), 'ig'));
            this.doEvent('typed', this.inputValue);
        }
        else {
            this.open();
        }
    };
    SelectComponent.prototype.ngOnInit = function () {
        this.behavior = (this.firstItemHasChildren) ?
            new ChildrenBehavior(this) : new GenericBehavior(this);
    };
    SelectComponent.prototype.remove = function (item) {
        if (this._disabled === true) {
            return;
        }
        if (this.multiple === true && this.active) {
            var index = this.active.indexOf(item);
            this.active.splice(index, 1);
            this.data.next(this.active);
            this.doEvent('removed', item);
        }
        if (this.multiple === false) {
            this.active = [];
            this.data.next(this.active);
            this.doEvent('removed', item);
        }
    };
    SelectComponent.prototype.doEvent = function (type, value) {
        if (this[type] && value) {
            this[type].next(value);
        }
        this.onTouched();
        if (type === 'selected' || type === 'removed') {
            this.onChange(this.active);
        }
    };
    SelectComponent.prototype.clickedOutside = function () {
        this.inputMode = false;
        this.optionsOpened = false;
    };
    Object.defineProperty(SelectComponent.prototype, "firstItemHasChildren", {
        get: function () {
            return this.itemObjects[0] && this.itemObjects[0].hasChildren();
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.writeValue = function (val) {
        this.active = val;
        this.data.emit(this.active);
    };
    SelectComponent.prototype.validate = function (c) {
        var controlValue = c ? c.value : [];
        if (!controlValue) {
            controlValue = [];
        }
        return (controlValue.length > 0) ? null : {
            ng2SelectEmptyError: {
                valid: false
            }
        };
    };
    SelectComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    SelectComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    SelectComponent.prototype.matchClick = function (e) {
        if (this._disabled === true) {
            return;
        }
        this.inputMode = !this.inputMode;
        if (this.inputMode === true && ((this.multiple === true && e) || this.multiple === false)) {
            this.focusToInput();
            this.open();
        }
    };
    SelectComponent.prototype.mainClick = function (event) {
        if (this.inputMode === true || this._disabled === true) {
            return;
        }
        if (event.keyCode === 46) {
            event.preventDefault();
            this.inputEvent(event);
            return;
        }
        if (event.keyCode === 8) {
            event.preventDefault();
            this.inputEvent(event, true);
            return;
        }
        if (event.keyCode === 9 || event.keyCode === 13 ||
            event.keyCode === 27 || (event.keyCode >= 37 && event.keyCode <= 40)) {
            event.preventDefault();
            return;
        }
        this.inputMode = true;
        var value = String
            .fromCharCode(96 <= event.keyCode && event.keyCode <= 105 ? event.keyCode - 48 : event.keyCode)
            .toLowerCase();
        this.focusToInput(value);
        this.open();
        var target = event.target || event.srcElement;
        target.value = value;
        this.inputEvent(event);
    };
    SelectComponent.prototype.selectActive = function (value) {
        this.activeOption = value;
    };
    SelectComponent.prototype.isActive = function (value) {
        return this.activeOption.id === value.id;
    };
    SelectComponent.prototype.removeClick = function (value, event) {
        event.stopPropagation();
        this.remove(value);
    };
    SelectComponent.prototype.focusToInput = function (value) {
        var _this = this;
        if (value === void 0) { value = ''; }
        setTimeout(function () {
            var el = _this.element.nativeElement.querySelector('div.ui-select-container > input');
            if (el) {
                el.focus();
                el.value = value;
            }
        }, 0);
    };
    SelectComponent.prototype.open = function () {
        var _this = this;
        this.options = this.itemObjects
            .filter(function (option) { return (_this.multiple === false ||
            _this.multiple === true && !_this.active.find(function (o) { return option.text === o.text; })); });
        if (this.options.length > 0) {
            this.behavior.first();
        }
        this.optionsOpened = true;
    };
    SelectComponent.prototype.hideOptions = function () {
        this.inputMode = false;
        this.optionsOpened = false;
    };
    SelectComponent.prototype.selectActiveMatch = function () {
        this.selectMatch(this.activeOption);
    };
    SelectComponent.prototype.selectMatch = function (value, e) {
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (this.options.length <= 0) {
            return;
        }
        if (this.multiple === true) {
            this.active.push(value);
            this.data.next(this.active);
        }
        if (this.multiple === false) {
            this.active[0] = value;
            this.data.next(this.active[0]);
        }
        this.doEvent('selected', value);
        this.hideOptions();
        if (this.multiple === true) {
            this.focusToInput('');
        }
        else {
            this.focusToInput(select_pipes_1.stripTags(value.text));
            this.element.nativeElement.querySelector('.ui-select-container').focus();
        }
    };
    SelectComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng-select',
                    styles: [styles],
                    providers: [
                        {
                            provide: forms_1.NG_VALUE_ACCESSOR,
                            /* tslint:disable */
                            useExisting: core_1.forwardRef(function () { return SelectComponent; }),
                            /* tslint:enable */
                            multi: true
                        },
                        {
                            provide: forms_1.NG_VALIDATORS,
                            useExisting: core_1.forwardRef(function () { return SelectComponent; }),
                            multi: true,
                        }
                    ],
                    template: "\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === false\"\n     (keyup)=\"mainClick($event)\"\n     [offClick]=\"clickedOutside\"\n     class=\"ui-select-container dropdown open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <div class=\"ui-select-match\"\n         *ngIf=\"!inputMode\">\n      <span tabindex=\"-1\"\n          class=\"btn btn-default btn-secondary form-control ui-select-toggle\"\n          (click)=\"matchClick($event)\"\n          style=\"outline: 0;\">\n        <span *ngIf=\"active.length <= 0\" class=\"ui-select-placeholder text-muted\">{{placeholder}}</span>\n        <span *ngIf=\"active.length > 0\" class=\"ui-select-match-text pull-left\"\n              [ngClass]=\"{'ui-select-allow-clear': allowClear && active.length > 0}\"\n              [innerHTML]=\"sanitize(active[0].text)\"></span>\n        <i class=\"dropdown-toggle pull-right\"></i>\n        <i class=\"caret pull-right\"></i>\n        <a *ngIf=\"allowClear && active.length>0\" class=\"btn btn-xs btn-link pull-right\" style=\"margin-right: 10px; padding: 0;\" (click)=\"removeClick(active[0], $event)\">\n           <i class=\"glyphicon glyphicon-remove\"></i>\n        </a>\n      </span>\n    </div>\n    <input type=\"text\" autocomplete=\"false\" tabindex=\"-1\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           [disabled]=\"disabled\"\n           class=\"form-control ui-select-search\"\n           *ngIf=\"inputMode\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\">\n     <!-- options template -->\n     <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of options\" role=\"menuitem\">\n          <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  \n      <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n          <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n          <div class=\"dropdown-header\">{{c.text}}</div>\n  \n          <div *ngFor=\"let o of c.children\"\n               class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\"\n               [ngClass]=\"{'active': isActive(o)}\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  </div>\n\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === true\"\n     (keyup)=\"mainClick($event)\"\n     (focus)=\"focusToInput('')\"\n     [offClick]=\"clickedOutside\"\n     class=\"ui-select-container ui-select-multiple dropdown form-control open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <span class=\"ui-select-match\">\n        <span *ngFor=\"let a of active\">\n            <span class=\"ui-select-match-item btn btn-default btn-secondary btn-xs\"\n                  tabindex=\"-1\"\n                  type=\"button\"\n                  [ngClass]=\"{'btn-default': true}\">\n               <a class=\"close\"\n                  style=\"margin-left: 5px; padding: 0;\"\n                  (click)=\"removeClick(a, $event)\">&times;</a>\n               <span [innerHtml]=\"sanitize(a.text)\"></span>\n           </span>\n        </span>\n    </span>\n    <input type=\"text\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           (click)=\"matchClick($event)\"\n           [disabled]=\"disabled\"\n           autocomplete=\"false\"\n           autocorrect=\"off\"\n           autocapitalize=\"off\"\n           spellcheck=\"false\"\n           class=\"form-control ui-select-search\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\"\n           role=\"combobox\">\n     <!-- options template -->\n     <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of options\" role=\"menuitem\">\n          <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  \n      <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n          <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n          <div class=\"dropdown-header\">{{c.text}}</div>\n  \n          <div *ngFor=\"let o of c.children\"\n               class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\"\n               [ngClass]=\"{'active': isActive(o)}\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  </div>\n  "
                },] },
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: platform_browser_1.DomSanitizer, },
    ]; };
    SelectComponent.propDecorators = {
        'allowClear': [{ type: core_1.Input },],
        'placeholder': [{ type: core_1.Input },],
        'idField': [{ type: core_1.Input },],
        'textField': [{ type: core_1.Input },],
        'childrenField': [{ type: core_1.Input },],
        'multiple': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'active': [{ type: core_1.Input },],
        'data': [{ type: core_1.Output },],
        'selected': [{ type: core_1.Output },],
        'removed': [{ type: core_1.Output },],
        'typed': [{ type: core_1.Output },],
        'opened': [{ type: core_1.Output },],
    };
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;
var Behavior = (function () {
    function Behavior(actor) {
        this.optionsMap = new Map();
        this.actor = actor;
    }
    Behavior.prototype.fillOptionsMap = function () {
        var _this = this;
        this.optionsMap.clear();
        var startPos = 0;
        this.actor.itemObjects
            .map(function (item) {
            startPos = item.fillChildrenHash(_this.optionsMap, startPos);
        });
    };
    Behavior.prototype.ensureHighlightVisible = function (optionsMap) {
        if (optionsMap === void 0) { optionsMap = void 0; }
        var container = this.actor.element.nativeElement.querySelector('.ui-select-choices-content');
        if (!container) {
            return;
        }
        var choices = container.querySelectorAll('.ui-select-choices-row');
        if (choices.length < 1) {
            return;
        }
        var activeIndex = this.getActiveIndex(optionsMap);
        if (activeIndex < 0) {
            return;
        }
        var highlighted = choices[activeIndex];
        if (!highlighted) {
            return;
        }
        var posY = highlighted.offsetTop + highlighted.clientHeight - container.scrollTop;
        var height = container.offsetHeight;
        if (posY > height) {
            container.scrollTop += posY - height;
        }
        else if (posY < highlighted.clientHeight) {
            container.scrollTop -= highlighted.clientHeight - posY;
        }
    };
    Behavior.prototype.getActiveIndex = function (optionsMap) {
        if (optionsMap === void 0) { optionsMap = void 0; }
        var ai = this.actor.options.indexOf(this.actor.activeOption);
        if (ai < 0 && optionsMap !== void 0) {
            ai = optionsMap.get(this.actor.activeOption.id);
        }
        return ai;
    };
    return Behavior;
}());
exports.Behavior = Behavior;
var GenericBehavior = (function (_super) {
    __extends(GenericBehavior, _super);
    function GenericBehavior(actor) {
        return _super.call(this, actor) || this;
    }
    GenericBehavior.prototype.first = function () {
        this.actor.activeOption = this.actor.options[0];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.last = function () {
        this.actor.activeOption = this.actor.options[this.actor.options.length - 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.prev = function () {
        var index = this.actor.options.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .options[index - 1 < 0 ? this.actor.options.length - 1 : index - 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.next = function () {
        var index = this.actor.options.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .options[index + 1 > this.actor.options.length - 1 ? 0 : index + 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.filter = function (query) {
        var _this = this;
        var options = this.actor.itemObjects
            .filter(function (option) {
            return select_pipes_1.stripTags(option.text).match(query) &&
                (_this.actor.multiple === false ||
                    (_this.actor.multiple === true && _this.actor.active.map(function (item) { return item.id; }).indexOf(option.id) < 0));
        });
        this.actor.options = options;
        if (this.actor.options.length > 0) {
            this.actor.activeOption = this.actor.options[0];
            _super.prototype.ensureHighlightVisible.call(this);
        }
    };
    return GenericBehavior;
}(Behavior));
exports.GenericBehavior = GenericBehavior;
var ChildrenBehavior = (function (_super) {
    __extends(ChildrenBehavior, _super);
    function ChildrenBehavior(actor) {
        return _super.call(this, actor) || this;
    }
    ChildrenBehavior.prototype.first = function () {
        this.actor.activeOption = this.actor.options[0].children[0];
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.last = function () {
        this.actor.activeOption =
            this.actor
                .options[this.actor.options.length - 1]
                .children[this.actor.options[this.actor.options.length - 1].children.length - 1];
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.prev = function () {
        var _this = this;
        var indexParent = this.actor.options
            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
        var index = this.actor.options[indexParent].children
            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
        this.actor.activeOption = this.actor.options[indexParent].children[index - 1];
        if (!this.actor.activeOption) {
            if (this.actor.options[indexParent - 1]) {
                this.actor.activeOption = this.actor
                    .options[indexParent - 1]
                    .children[this.actor.options[indexParent - 1].children.length - 1];
            }
        }
        if (!this.actor.activeOption) {
            this.last();
        }
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.next = function () {
        var _this = this;
        var indexParent = this.actor.options
            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
        var index = this.actor.options[indexParent].children
            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
        this.actor.activeOption = this.actor.options[indexParent].children[index + 1];
        if (!this.actor.activeOption) {
            if (this.actor.options[indexParent + 1]) {
                this.actor.activeOption = this.actor.options[indexParent + 1].children[0];
            }
        }
        if (!this.actor.activeOption) {
            this.first();
        }
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.filter = function (query) {
        var options = [];
        var optionsMap = new Map();
        var startPos = 0;
        for (var _i = 0, _a = this.actor.itemObjects; _i < _a.length; _i++) {
            var si = _a[_i];
            var children = si.children.filter(function (option) { return query.test(option.text); });
            startPos = si.fillChildrenHash(optionsMap, startPos);
            if (children.length > 0) {
                var newSi = si.getSimilar();
                newSi.children = children;
                options.push(newSi);
            }
        }
        this.actor.options = options;
        if (this.actor.options.length > 0) {
            this.actor.activeOption = this.actor.options[0].children[0];
            _super.prototype.ensureHighlightVisible.call(this, optionsMap);
        }
    };
    return ChildrenBehavior;
}(Behavior));
exports.ChildrenBehavior = ChildrenBehavior;


/***/ }),

/***/ "./node_modules/ng2-select/select/select.module.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-select/select/select.module.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var select_1 = __webpack_require__(/*! ./select */ "./node_modules/ng2-select/select/select.js");
var select_pipes_1 = __webpack_require__(/*! ./select-pipes */ "./node_modules/ng2-select/select/select-pipes.js");
var off_click_1 = __webpack_require__(/*! ./off-click */ "./node_modules/ng2-select/select/off-click.js");
var SelectModule = (function () {
    function SelectModule() {
    }
    SelectModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [select_1.SelectComponent, select_pipes_1.HighlightPipe, off_click_1.OffClickDirective],
                    exports: [select_1.SelectComponent, select_pipes_1.HighlightPipe, off_click_1.OffClickDirective]
                },] },
    ];
    /** @nocollapse */
    SelectModule.ctorParameters = function () { return []; };
    return SelectModule;
}());
exports.SelectModule = SelectModule;


/***/ }),

/***/ "./src/app/game/game-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/game/game-routing.module.ts ***!
  \*********************************************/
/*! exports provided: GameRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameRoutingModule", function() { return GameRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/game/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_play_page_play_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/play-page/play-page.component */ "./src/app/game/pages/play-page/play-page.component.ts");
/* harmony import */ var _game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game.component */ "./src/app/game/game.component.ts");






var routes = [
    { path: '', component: _game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"],
        children: [{
                path: 'home', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomeGameComponent"]
            },
            { path: 'play', component: _pages_play_page_play_page_component__WEBPACK_IMPORTED_MODULE_4__["PlayGameComponent"] }] },
];
var GameRoutingModule = /** @class */ (function () {
    function GameRoutingModule() {
    }
    GameRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GameRoutingModule);
    return GameRoutingModule;
}());



/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <nav class=\"col-sm-2 col-md-1 d-none d-sm-block bg-light sidebar\">\n    <ul class=\"nav nav-pills flex-column\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/game/home\">New game</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/game/play\">Active game</a>\n      </li> \n    </ul>\n  </nav> \n  <main role=\"main\" class=\"col-sm-10 ml-sm-5 col-md-11 pt-3\">\n      <router-outlet></router-outlet>\n  </main>      \n</div>\n"

/***/ }),

/***/ "./src/app/game/game.component.scss":
/*!******************************************!*\
  !*** ./src/app/game/game.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  position: fixed;\n  top: 51px;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  padding: 20px 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  /* Scrollable contents if viewport is shorter than content. */\n  border-right: 1px solid #eee; }\n\n.sidebar .nav, a {\n  margin-bottom: 7px;\n  color: #343a40; }\n\n.sidebar .nav-item {\n  width: 100%; }\n\n.sidebar .nav-item + .nav-item {\n  margin-left: 0;\n  color: #343a40; }\n\n.sidebar .nav-link {\n  border-radius: 0; }\n\n.nav-pills .nav-link.active, .nav-pills .show > .nav-link {\n  color: white;\n  background-color: #343a40; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9DOlxcVXNlcnNcXEFudWl0ZXgtODRcXGdpdFxcV2ViXFxzb3VyY2VcXHJlcG9zXFxCbGFja0phY2tcXEJsYWNrSmFjay5XRUJcXENsaWVudEFwcC9zcmNcXGFwcFxcZ2FtZVxcZ2FtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixTQUFTO0VBQ1QsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFBRSw2REFBQTtFQUNsQiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWM7RUFDZCxjQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsWUFBeUI7RUFDekIseUJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2dhbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUxcHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87IC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovXHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5uYXYgLCBheyBcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIGNvbG9yOiAjMzQzYTQwO1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhciAubmF2LWl0ZW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYtaXRlbSArIC5uYXYtaXRlbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIGNvbG9yOiAgIzM0M2E0MDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXIgLm5hdi1saW5rIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIC5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSwgLm5hdi1waWxscyAuc2hvdz4ubmF2LWxpbmt7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICMzNDNhNDA7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GameComponent = /** @class */ (function () {
    function GameComponent() {
    }
    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.scss */ "./src/app/game/game.component.scss")]
        })
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/game/game.module.ts":
/*!*************************************!*\
  !*** ./src/app/game/game.module.ts ***!
  \*************************************/
/*! exports provided: GameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModule", function() { return GameModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _game_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-routing.module */ "./src/app/game/game-routing.module.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/game/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_play_page_play_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/play-page/play-page.component */ "./src/app/game/pages/play-page/play-page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var ng2_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-select */ "./node_modules/ng2-select/index.js");
/* harmony import */ var ng2_select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_select__WEBPACK_IMPORTED_MODULE_8__);









var gameComponents = [_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomeGameComponent"], _pages_play_page_play_page_component__WEBPACK_IMPORTED_MODULE_5__["PlayGameComponent"], _game_component__WEBPACK_IMPORTED_MODULE_7__["GameComponent"]];
var GameModule = /** @class */ (function () {
    function GameModule() {
    }
    GameModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: gameComponents.slice(),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _game_routing_module__WEBPACK_IMPORTED_MODULE_3__["GameRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ng2_select__WEBPACK_IMPORTED_MODULE_8__["SelectModule"]
            ],
        })
    ], GameModule);
    return GameModule;
}());



/***/ }),

/***/ "./src/app/game/pages/home-page/home-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/game/pages/home-page/home-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div style=\"width: 300px; margin-bottom: 20px;\">\r\n        <h3>Select number of bots</h3>\r\n        <ng-select \r\n        [items]=\"numberOfBots\"\r\n        (data)=\"getNumberOfBots($event)\"\r\n         placeholder=\"Choose a number\">\r\n        </ng-select>\r\n      </div>\r\n    <div class=\"playGameForm\" *ngIf=\"playStatus\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"play()\">Play Game</button>\r\n    </div>\r\n    <div *ngIf=\"continueStatus\">\r\n            <button class=\"btn btn-success\" (click)=\"continueActiveGame()\">Continue active</button>\r\n        </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/game/pages/home-page/home-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/game/pages/home-page/home-page.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin-bottom: 0.4rem; }\n\n.btn-success {\n  margin-top: 0.2rem; }\n\n.btn-primary {\n  margin-top: 0.2rem; }\n\n.ui-select-choices.dropdown-menu {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9wYWdlcy9ob21lLXBhZ2UvQzpcXFVzZXJzXFxBbnVpdGV4LTg0XFxnaXRcXFdlYlxcc291cmNlXFxyZXBvc1xcQmxhY2tKYWNrXFxCbGFja0phY2suV0VCXFxDbGllbnRBcHAvc3JjXFxhcHBcXGdhbWVcXHBhZ2VzXFxob21lLXBhZ2VcXGhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dhbWUvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XHJcbn1cclxuLmJ0bi1zdWNjZXNze1xyXG4gICAgbWFyZ2luLXRvcDogMC4ycmVtO1xyXG59XHJcbi5idG4tcHJpbWFyeXtcclxuICAgIG1hcmdpbi10b3A6IDAuMnJlbTtcclxufVxyXG4udWktc2VsZWN0LWNob2ljZXMuZHJvcGRvd24tbWVudSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/game/pages/home-page/home-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/game/pages/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomeGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeGameComponent", function() { return HomeGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_services_toastr_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/toastr-messages.service */ "./src/app/shared/services/toastr-messages.service.ts");
/* harmony import */ var src_app_shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/base/base.component */ "./src/app/shared/components/base/base.component.ts");







var HomeGameComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HomeGameComponent, _super);
    function HomeGameComponent(gameService, router, toastrService) {
        var _this = _super.call(this) || this;
        _this.gameService = gameService;
        _this.router = router;
        _this.toastrService = toastrService;
        _this.continueStatus = false;
        _this.playStatus = false;
        _this.numberOfBots = ['1', '2', '3', '4', '5'];
        _this.value = {};
        _this.checkActiveGame();
        return _this;
    }
    HomeGameComponent.prototype.ngOnInit = function () {
    };
    HomeGameComponent.prototype.getNumberOfBots = function (value) {
        this.value = value;
    };
    HomeGameComponent.prototype.checkActiveGame = function () {
        var _this = this;
        this.gameService.getActiveGame()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (x) {
            _this.toastrService.info('You have active game! Click continue to play');
            _this.continueStatus = true;
        }, function (error) {
            _this.playStatus = true;
        });
    };
    HomeGameComponent.prototype.continueActiveGame = function () {
        this.router.navigate(["/game/play"]);
    };
    HomeGameComponent.prototype.play = function () {
        var _this = this;
        var numberOfBots = this.value.text;
        this.gameService.play(numberOfBots)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (x) {
            _this.router.navigate(['/game/play']);
        });
    };
    HomeGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/game/pages/home-page/home-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/game/pages/home-page/home-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_services_toastr_messages_service__WEBPACK_IMPORTED_MODULE_5__["ToastrMessagesService"]])
    ], HomeGameComponent);
    return HomeGameComponent;
}(src_app_shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ "./src/app/game/pages/play-page/play-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/game/pages/play-page/play-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"haveActiveGame\">\r\n    <div class=\"row\">\r\n        <table class=\"table\">\r\n            <thead class=\"thead-dark\">\r\n                <tr>\r\n                    <th colspan=\"6\">New Game</th>\r\n                </tr>\r\n                <tr>\r\n                    <th>\r\n                        <label *ngIf=\"playStatus\">Game status : {{convertStatusToString((playView | async)?.status)}}</label>\r\n                        <label *ngIf=\"continueStatus\">Game status : {{convertStatusToString((continueView | async)?.status)}}</label>\r\n                        <label *ngIf=\"endStatus\">Game status : {{convertStatusToString((endView | async)?.status)}}\r\n                        </label>\r\n                    </th>\r\n                    <th>\r\n                        <label *ngIf=\"playStatus\">Winner : {{ (playView | async)?.winner }} </label>\r\n                        <label *ngIf=\"continueStatus\">Winner : {{ (continueView | async)?.winner }} </label>\r\n                        <label *ngIf=\"endStatus\">Winner : {{ (endView | async)?.winner }} </label>\r\n\r\n                    </th>\r\n                    <th>\r\n                        <div *ngIf=\"game\">\r\n                            <button class=\"btn btn-success\" (click)=\"continue()\"><i class=\"fas fa-plus\"></i></button>\r\n                            <button class=\"btn btn-danger\" (click)=\"end()\"><i class=\"fas fa-times\"></i></button>\r\n                            <button class=\"btn btn-info\" (click)=\"backToHome()\"><i\r\n                                    class=\"fa fa-arrow-left\"></i></button>\r\n                        </div>\r\n                        <div *ngIf=\"!game\">\r\n                            <button class=\"btn btn-primary\" (click)=\"playAgain()\">Play again with the same parametrs?</button>\r\n                            <button class=\"btn btn-info\" (click)=\"backToHome()\"><i\r\n                                    class=\"fa fa-arrow-left\"></i></button>\r\n                        </div>\r\n                    </th>\r\n                </tr>\r\n            </thead>\r\n        </table>\r\n        <div>\r\n        </div>\r\n        <table class=\"table\">\r\n            <thead class=\"thead-dark\">\r\n                <th *ngFor=\"let head of headPlayerSteps\">{{head}}</th>\r\n                <th colspan=\"4\"></th>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <th *ngIf=\"playStatus\">{{ (playView | async)?.player.status }}</th>\r\n                    <th *ngIf=\"continueStatus\">{{ (continueView | async)?.player.status }}</th>\r\n                    <th *ngIf=\"endStatus\">{{ (endView | async)?.player.status }}</th>\r\n                    <td *ngIf=\"playStatus\">\r\n                <tr *ngFor=\"let step of (playView | async)?.player.cards\">\r\n                    <img [src]=\"getCardLink(step)\">\r\n                </tr>\r\n                </td>\r\n                <td *ngIf=\"continueStatus\">\r\n                    <tr *ngFor=\"let step of (continueView | async)?.player.cards\">\r\n                        <img [src]=\"getCardLink(step)\">\r\n                    </tr>\r\n                </td>\r\n                <td *ngIf=\"endStatus\">\r\n                    <tr *ngFor=\"let step of (endView | async)?.player.cards\">\r\n                      <img [src]=\"getCardLink(step)\">\r\n                    </tr>\r\n                </td>\r\n                </tr>\r\n            </tbody>\r\n            <thead class=\"thead-dark\">\r\n                <th colspan=\"8\" *ngFor=\"let head of headBots\">{{head}}</th>\r\n            </thead>\r\n            <thead class=\"thead-dark\" *ngIf=\"playStatus\">\r\n                <th *ngFor=\"let bot of (playView | async)?.bots\">{{bot.name}}</th>\r\n                <th colspan=\"8\"></th>\r\n            </thead>\r\n            <thead class=\"thead-dark\" *ngIf=\"continueStatus\">\r\n                <th *ngFor=\"let bot of (continueView | async)?.bots\">{{bot.name}}</th>\r\n                <th colspan=\"8\"></th>\r\n            </thead>\r\n            <thead class=\"thead-dark\" *ngIf=\"endStatus\">\r\n                <th *ngFor=\"let bot of (endView | async)?.bots\">{{bot.name}}</th>\r\n                <th colspan=\"8\"></th>\r\n            </thead>\r\n\r\n            <tbody *ngIf=\"playStatus\">\r\n                <td *ngFor=\"let bot of (playView | async)?.bots\">\r\n                    <tr *ngFor=\"let step of bot.cards\">\r\n                      <img [src]=\"getCardLink(step)\">\r\n                    </tr>\r\n                </td>\r\n            </tbody>\r\n            <tbody *ngIf=\"continueStatus\">\r\n                <td *ngFor=\"let bot of (continueView | async)?.bots\">\r\n                    <tr *ngFor=\"let step of bot.cards\">\r\n                        <img [src]=\"getCardLink(step)\">\r\n                    </tr>\r\n                </td>\r\n            </tbody>\r\n            <tbody *ngIf=\"endStatus\">\r\n                <td *ngFor=\"let bot of (endView | async)?.bots\">\r\n                    <tr *ngFor=\"let step of bot.cards\">\r\n                        <img [src]=\"getCardLink(step)\">\r\n                    </tr>\r\n                </td>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"!haveActiveGame\">\r\n    <p><label>Back to home : </label></p>\r\n    <button class=\"btn btn-success\" (click)=\"backToHome()\"><i class=\"fa fa-arrow-left\"></i></button>\r\n</div>"

/***/ }),

/***/ "./src/app/game/pages/play-page/play-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/game/pages/play-page/play-page.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, td, th, tr {\n  padding: 0.1rem;\n  text-align: -webkit-center;\n  margin-bottom: auto;\n  min-width: auto;\n  font-size: 0.7rem; }\n\n.table thead th {\n  vertical-align: middle; }\n\nimg {\n  margin-bottom: 3px;\n  margin-top: 3px;\n  width: 52px; }\n\np {\n  margin-bottom: 0rem; }\n\n.btn-success {\n  margin-right: 1%; }\n\n.btn-danger {\n  margin-right: 1%; }\n\n@media (min-width: 560px) {\n  table, td, th, tr {\n    padding: 0.1rem;\n    text-align: -webkit-center;\n    margin-bottom: auto;\n    min-width: auto;\n    font-size: 0.9rem; }\n  img {\n    width: 78px; } }\n\n@media (max-width: 411px) {\n  table, td, th, tr {\n    padding: 0.1rem;\n    text-align: -webkit-center;\n    margin-bottom: auto;\n    min-width: auto;\n    font-size: 0.7rem; }\n  img {\n    width: 61px; }\n  .btn-info {\n    margin-right: 1%;\n    padding: 6px 10px; }\n  .btn-danger {\n    margin-right: 1%;\n    padding: 6px 10px; }\n  .btn-success {\n    padding: 6px 10px; } }\n\n@media (max-width: 320px) {\n  table, td, th, tr {\n    padding: 0.1rem;\n    text-align: -webkit-center;\n    margin-bottom: auto;\n    min-width: auto;\n    font-size: 0.6rem; }\n  img {\n    width: 52px; }\n  .btn-info {\n    margin-right: 1%;\n    padding: 3px 10px; }\n  .btn-danger {\n    margin-right: 1%;\n    padding: 3px 10px; }\n  .btn-success {\n    padding: 3px 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9wYWdlcy9wbGF5LXBhZ2UvQzpcXFVzZXJzXFxBbnVpdGV4LTg0XFxnaXRcXFdlYlxcc291cmNlXFxyZXBvc1xcQmxhY2tKYWNrXFxCbGFja0phY2suV0VCXFxDbGllbnRBcHAvc3JjXFxhcHBcXGdhbWVcXHBhZ2VzXFxwbGF5LXBhZ2VcXHBsYXktcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWM7RUFDZCwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFZjtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJO0lBQ0ssZUFBYztJQUNkLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBRXJCO0lBQ0ksV0FBVyxFQUFBLEVBQ2Q7O0FBRUw7RUFDRztJQUNLLGVBQWM7SUFDZCwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtFQUVyQjtJQUNJLFdBQVcsRUFBQTtFQUVmO0lBQ0csZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBRXJCO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBRXJCO0lBQ0ksaUJBQWlCLEVBQUEsRUFDcEI7O0FBRUw7RUFDSTtJQUNJLGVBQWM7SUFDZCwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtFQUVyQjtJQUNBLFdBQVcsRUFBQTtFQUdmO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBRXJCO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBRXJCO0lBQ0ksaUJBQWlCLEVBQUEsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9nYW1lL3BhZ2VzL3BsYXktcGFnZS9wbGF5LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSx0ZCx0aCx0ciB7XHJcbiAgICBwYWRkaW5nOjAuMXJlbTtcclxuICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgXHJcbn1cclxuLnRhYmxlIHRoZWFkIHRoe1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5pbWd7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7IFxyXG4gICAgd2lkdGg6IDUycHg7XHJcbn1cclxucCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xyXG59XHJcbi5idG4tc3VjY2Vzc3tcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbn1cclxuLmJ0bi1kYW5nZXJ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElOyBcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTYwcHgpIHtcclxuICAgIHRhYmxlLHRkLHRoLHRyIHtcclxuICAgICAgICAgcGFkZGluZzowLjFyZW07XHJcbiAgICAgICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG4gICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgICAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgIH1cclxuICAgICBpbWd7XHJcbiAgICAgICAgIHdpZHRoOiA3OHB4O1xyXG4gICAgIH1cclxuIH1cclxuIEBtZWRpYSAobWF4LXdpZHRoOiA0MTFweCkge1xyXG4gICAgdGFibGUsdGQsdGgsdHIge1xyXG4gICAgICAgICBwYWRkaW5nOjAuMXJlbTtcclxuICAgICAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICAgICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgfVxyXG4gICAgIGltZ3tcclxuICAgICAgICAgd2lkdGg6IDYxcHg7XHJcbiAgICAgfVxyXG4gICAgIC5idG4taW5mbyB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIH1cclxuICAgIC5idG4tZGFuZ2VyIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1zdWNjZXNzIHtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIH1cclxuIH1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICB0YWJsZSx0ZCx0aCx0ciB7XHJcbiAgICAgICAgcGFkZGluZzowLjFyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgICAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICB3aWR0aDogNTJweDtcclxuICAgIFxyXG59XHJcbi5idG4taW5mbyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbn1cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG59XHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcclxufVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/game/pages/play-page/play-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/game/pages/play-page/play-page.component.ts ***!
  \*************************************************************/
/*! exports provided: PlayGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayGameComponent", function() { return PlayGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_entities_game_continue_game_view___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/entities/game/continue-game.view. */ "./src/app/shared/entities/game/continue-game.view..ts");
/* harmony import */ var src_app_shared_entities_game_end_game_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/entities/game/end-game.view */ "./src/app/shared/entities/game/end-game.view.ts");
/* harmony import */ var src_app_shared_entities_game_play_game_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/entities/game/play-game.view */ "./src/app/shared/entities/game/play-game.view.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/components/base/base.component */ "./src/app/shared/components/base/base.component.ts");










var PlayGameComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PlayGameComponent, _super);
    function PlayGameComponent(gameService, router) {
        var _this = _super.call(this) || this;
        _this.gameService = gameService;
        _this.router = router;
        _this.playStatus = false;
        _this.continueStatus = false;
        _this.endStatus = false;
        _this.game = false;
        _this.haveActiveGame = false;
        _this.headBotSteps = ['Cards'];
        _this.headBots = ['Bots'];
        _this.headPlayerSteps = ['Player name', 'Player cards'];
        _this.headElements = ['Number of bots', 'Status', 'Winner', ''];
        _this.endSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](new src_app_shared_entities_game_end_game_view__WEBPACK_IMPORTED_MODULE_5__["EndGameView"]);
        _this.endView = _this.endSubject.asObservable();
        _this.continueSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](new src_app_shared_entities_game_continue_game_view___WEBPACK_IMPORTED_MODULE_4__["ContinueGameView"]);
        _this.continueView = _this.continueSubject.asObservable();
        _this.playSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](new src_app_shared_entities_game_play_game_view__WEBPACK_IMPORTED_MODULE_6__["PlayGameView"]);
        _this.playView = _this.playSubject.asObservable();
        _this.gameInit();
        return _this;
    }
    PlayGameComponent.prototype.ngOnInit = function () {
    };
    PlayGameComponent.prototype.gameInit = function () {
        var _this = this;
        this.gameService.getActiveGame()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (x) {
            _this.numberOfBots = x.numberOfBots;
            _this.game = true;
            _this.haveActiveGame = true;
            if (x.winner !== 'No one') {
                _this.game = false;
            }
            _this.playStatus = true;
            _this.playSubject.next(x);
        }, function (errorForStatus) {
            _this.haveActiveGame = false;
        });
    };
    PlayGameComponent.prototype.continue = function () {
        var _this = this;
        this.gameService.continue()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (x) {
            _this.game = true;
            if (x.winner !== 'No one') {
                _this.game = false;
            }
            _this.playStatus = false;
            _this.continueStatus = true;
            _this.endStatus = false;
            _this.continueSubject.next(x);
        });
    };
    PlayGameComponent.prototype.end = function () {
        var _this = this;
        this.gameService.end()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (x) {
            _this.game = false;
            _this.playStatus = false;
            _this.continueStatus = false;
            _this.endStatus = true;
            _this.endSubject.next(x);
        });
    };
    PlayGameComponent.prototype.playAgain = function () {
        var _this = this;
        var numberOfBots = this.numberOfBots;
        this.gameService.play(numberOfBots)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (x) {
            _this.game = true;
            _this.haveActiveGame = true;
            if (x.winner !== 'No one') {
                _this.game = false;
            }
            _this.continueStatus = false;
            _this.endStatus = false;
            _this.playStatus = true;
            _this.playSubject.next(x);
        });
    };
    PlayGameComponent.prototype.backToHome = function () {
        this.router.navigate(['/game/home']);
    };
    PlayGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-play-page',
            template: __webpack_require__(/*! ./play-page.component.html */ "./src/app/game/pages/play-page/play-page.component.html"),
            styles: [__webpack_require__(/*! ./play-page.component.scss */ "./src/app/game/pages/play-page/play-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PlayGameComponent);
    return PlayGameComponent;
}(src_app_shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_9__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shared/entities/game/continue-game.view..ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/entities/game/continue-game.view..ts ***!
  \*************************************************************/
/*! exports provided: ContinueGameView, PlayerContinueGameView, BotContinueGameViewItem, CardContinueGameViewItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContinueGameView", function() { return ContinueGameView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerContinueGameView", function() { return PlayerContinueGameView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotContinueGameViewItem", function() { return BotContinueGameViewItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContinueGameViewItem", function() { return CardContinueGameViewItem; });
var ContinueGameView = /** @class */ (function () {
    function ContinueGameView() {
        this.bots = [];
    }
    return ContinueGameView;
}());

var PlayerContinueGameView = /** @class */ (function () {
    function PlayerContinueGameView() {
        this.cards = [];
    }
    return PlayerContinueGameView;
}());

var BotContinueGameViewItem = /** @class */ (function () {
    function BotContinueGameViewItem() {
        this.cards = [];
    }
    return BotContinueGameViewItem;
}());

var CardContinueGameViewItem = /** @class */ (function () {
    function CardContinueGameViewItem() {
    }
    return CardContinueGameViewItem;
}());



/***/ }),

/***/ "./src/app/shared/entities/game/end-game.view.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/entities/game/end-game.view.ts ***!
  \*******************************************************/
/*! exports provided: EndGameView, PlayerEndGameView, BotEndGameViewItem, CardEndGameViewItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndGameView", function() { return EndGameView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerEndGameView", function() { return PlayerEndGameView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotEndGameViewItem", function() { return BotEndGameViewItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardEndGameViewItem", function() { return CardEndGameViewItem; });
var EndGameView = /** @class */ (function () {
    function EndGameView() {
        this.bots = [];
    }
    return EndGameView;
}());

var PlayerEndGameView = /** @class */ (function () {
    function PlayerEndGameView() {
        this.cards = [];
    }
    return PlayerEndGameView;
}());

var BotEndGameViewItem = /** @class */ (function () {
    function BotEndGameViewItem() {
        this.cards = [];
    }
    return BotEndGameViewItem;
}());

var CardEndGameViewItem = /** @class */ (function () {
    function CardEndGameViewItem() {
    }
    return CardEndGameViewItem;
}());



/***/ }),

/***/ "./src/app/shared/entities/game/play-game.view.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/entities/game/play-game.view.ts ***!
  \********************************************************/
/*! exports provided: PlayGameView, PlayerPlayGameView, BotPlayGameViewItem, CardPlayGameViewItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayGameView", function() { return PlayGameView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPlayGameView", function() { return PlayerPlayGameView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotPlayGameViewItem", function() { return BotPlayGameViewItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPlayGameViewItem", function() { return CardPlayGameViewItem; });
var PlayGameView = /** @class */ (function () {
    function PlayGameView() {
        this.bots = [];
    }
    return PlayGameView;
}());

var PlayerPlayGameView = /** @class */ (function () {
    function PlayerPlayGameView() {
        this.cards = [];
    }
    return PlayerPlayGameView;
}());

var BotPlayGameViewItem = /** @class */ (function () {
    function BotPlayGameViewItem() {
        this.cards = [];
    }
    return BotPlayGameViewItem;
}());

var CardPlayGameViewItem = /** @class */ (function () {
    function CardPlayGameViewItem() {
    }
    return CardPlayGameViewItem;
}());



/***/ }),

/***/ "./src/app/shared/services/game.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/game.service.ts ***!
  \*************************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var GameService = /** @class */ (function () {
    function GameService(http) {
        this.http = http;
    }
    GameService.prototype.getActiveGame = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/game/getActive");
    };
    GameService.prototype.play = function (numberOfBots) {
        var params = {
            numberOfBots: numberOfBots
        };
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/game/play", { params: params });
    };
    GameService.prototype.continue = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/game/continue");
    };
    GameService.prototype.end = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/game/end");
    };
    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], GameService);
    return GameService;
}());



/***/ })

}]);
//# sourceMappingURL=game-game-module.js.map