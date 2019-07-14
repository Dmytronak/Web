(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"src/app/auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"src-app-auth-auth-module"
	],
	"src/app/game/game.module": [
		"./src/app/game/game.module.ts",
		"src-app-game-game-module"
	],
	"src/app/history/history.module": [
		"./src/app/history/history.module.ts",
		"src-app-history-history-module"
	],
	"src/app/home/home.module": [
		"./src/app/home/home.module.ts",
		"src-app-home-home-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_guards_only_logged_out_users_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/guards/only-logged-out-users.guard */ "./src/app/shared/guards/only-logged-out-users.guard.ts");
/* harmony import */ var src_app_shared_guards_only_logged_in_users_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/guards/only-logged-in-users.guard */ "./src/app/shared/guards/only-logged-in-users.guard.ts");





var routes = [
    { path: 'home', loadChildren: 'src/app/home/home.module#HomeModule', canActivate: [src_app_shared_guards_only_logged_out_users_guard__WEBPACK_IMPORTED_MODULE_3__["OnlyLoggedOut"]] },
    { path: 'auth', loadChildren: 'src/app/auth/auth.module#AuthModule', canActivate: [src_app_shared_guards_only_logged_out_users_guard__WEBPACK_IMPORTED_MODULE_3__["OnlyLoggedOut"]] },
    { path: 'game', loadChildren: 'src/app/game/game.module#GameModule', canActivate: [src_app_shared_guards_only_logged_in_users_guard__WEBPACK_IMPORTED_MODULE_4__["OnlyLoggedIn"]] },
    { path: 'history', loadChildren: 'src/app/history/history.module#HistoryModule', canActivate: [src_app_shared_guards_only_logged_in_users_guard__WEBPACK_IMPORTED_MODULE_4__["OnlyLoggedIn"]] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-main-header></app-main-header>\n<div style=\"text-align:center; padding-top: 5%\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"100\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<div class=\"container body-content\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'BlackJackClient';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_shared_guards_only_logged_out_users_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/guards/only-logged-out-users.guard */ "./src/app/shared/guards/only-logged-out-users.guard.ts");
/* harmony import */ var src_app_shared_guards_only_logged_in_users_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/guards/only-logged-in-users.guard */ "./src/app/shared/guards/only-logged-in-users.guard.ts");
/* harmony import */ var src_app_shared_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/interceptors/jwt.interceptor */ "./src/app/shared/interceptors/jwt.interceptor.ts");
/* harmony import */ var src_app_shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/interceptors/error.interceptor */ "./src/app/shared/interceptors/error.interceptor.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"]
            ],
            providers: [src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], src_app_shared_guards_only_logged_out_users_guard__WEBPACK_IMPORTED_MODULE_9__["OnlyLoggedOut"], src_app_shared_guards_only_logged_in_users_guard__WEBPACK_IMPORTED_MODULE_10__["OnlyLoggedIn"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: src_app_shared_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: src_app_shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_12__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/components/base/base.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/components/base/base.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hasErrors()\" class=\"validator\">\n  <ng-container *ngIf=\"getErrorMessage()\">\n    <p>{{getErrorMessage()}}</p>\n  </ng-container>\n</div>\n\n"

/***/ }),

/***/ "./src/app/shared/components/base/base.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/base/base.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.validator {\n  margin-top: 5px;\n  min-height: 18px; }\n  div.validator p {\n    color: #8b0000;\n    font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmFzZS9EOlxcV29ya1xcYW51aXRleFxcV2ViXFxzb3VyY2VcXHJlcG9zXFxCbGFja0phY2tcXEJsYWNrSmFjay5XRUJcXENsaWVudEFwcC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxiYXNlXFxiYXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBO0VBRnBCO0lBS00sY0FBYztJQUNkLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Jhc2UvYmFzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi52YWxpZGF0b3Ige1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtaW4taGVpZ2h0OiAxOHB4O1xuICBcbiAgICBwIHtcbiAgICAgIGNvbG9yOiAjOGIwMDAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/base/base.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/base/base.component.ts ***!
  \**********************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_enums_status_type_enum_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enums/status-type.enum.view */ "./src/app/shared/enums/status-type.enum.view.ts");





var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
        this.componetDestroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    BaseComponent.prototype.ngOnInit = function () {
    };
    BaseComponent.prototype.getCardLink = function (card) {
        return "assets/cards/" + card.rank + "_" + card.suit + ".svg";
    };
    BaseComponent.prototype.hasErrors = function () {
        return this.control.invalid && (this.control.dirty || this.control.touched);
    };
    BaseComponent.prototype.getControlName = function () {
        var controlName = null;
        var parent = this.control['parent'];
        if (parent instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) {
            for (var name_1 in parent.controls) {
                if (this.control === parent.controls[name_1]) {
                    controlName = name_1;
                }
            }
        }
        return controlName;
    };
    BaseComponent.prototype.convertStatusToString = function (type) {
        return src_app_shared_enums_status_type_enum_view__WEBPACK_IMPORTED_MODULE_4__["StatusType"][type];
    };
    BaseComponent.prototype.getErrorMessage = function () {
        var errorMessage = this.control.errors.required ? this.getControlName() + " is required!" :
            this.control.errors.email ? 'Email is not valid!' :
                this.control.errors.minlength ? this.getControlName() + " min length not valid!" :
                    this.control.errors.maxlength ? this.getControlName() + " max length not valid!" :
                        this.control.errors.pattern ? this.getControlName() + " is not valid!" :
                            this.control.errors.passwordValidation ? this.getControlName() + " is not valid!" :
                                this.control.errors.mustMatch ? this.getControlName() + " must match!" :
                                    this.control.errors.ageRange ? "Year range from 1920 to 2019!" :
                                        this.control.errors.adultRange ? 'You don`t adult enough!' : '';
        return errorMessage;
    };
    BaseComponent.prototype.ngOnDestroy = function () {
        this.componetDestroyed.next(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"])
    ], BaseComponent.prototype, "control", void 0);
    BaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-base',
            template: __webpack_require__(/*! ./base.component.html */ "./src/app/shared/components/base/base.component.html"),
            styles: [__webpack_require__(/*! ./base.component.scss */ "./src/app/shared/components/base/base.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BaseComponent);
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/layout/logged-in-header/logged-in-header.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/layout/logged-in-header/logged-in-header.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">BlackJackClient</a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"navbarCollapsed = !navbarCollapsed\" [attr.aria-expanded]=\"!navbarCollapsed\" aria-controls=\"navbarContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" [ngbCollapse]=\"navbarCollapsed\" id=\"navbarSupportedContent\"> \n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/game/home\">Game</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/history\">History</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\">{{email}}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"logout()\" routerLink=\"/home\">Logoff</a>\n        </li>\n      </ul>\n    </div>\n\n  </nav>\n</header>"

/***/ }),

/***/ "./src/app/shared/components/layout/logged-in-header/logged-in-header.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/layout/logged-in-header/logged-in-header.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xheW91dC9sb2dnZWQtaW4taGVhZGVyL2xvZ2dlZC1pbi1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/layout/logged-in-header/logged-in-header.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/layout/logged-in-header/logged-in-header.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: LoggedInHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInHeaderComponent", function() { return LoggedInHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/local-storage.service */ "./src/app/shared/services/local-storage.service.ts");




var LoggedInHeaderComponent = /** @class */ (function () {
    function LoggedInHeaderComponent(authService, localStorageService) {
        this.authService = authService;
        this.localStorageService = localStorageService;
        this.email = '';
    }
    LoggedInHeaderComponent.prototype.logout = function () {
        this.authService.logout();
    };
    LoggedInHeaderComponent.prototype.ngOnInit = function () {
        this.email = this.authService.getEmail();
    };
    LoggedInHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logged-in-header',
            template: __webpack_require__(/*! ./logged-in-header.component.html */ "./src/app/shared/components/layout/logged-in-header/logged-in-header.component.html"),
            styles: [__webpack_require__(/*! ./logged-in-header.component.scss */ "./src/app/shared/components/layout/logged-in-header/logged-in-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], LoggedInHeaderComponent);
    return LoggedInHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/layout/logged-out-header/logged-out-header.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/components/layout/logged-out-header/logged-out-header.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">BlackJackClient</a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"navbarCollapsed = !navbarCollapsed\" [attr.aria-expanded]=\"!navbarCollapsed\" aria-controls=\"navbarContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" [ngbCollapse]=\"navbarCollapsed\" id=\"navbarSupportedContent\"> \n      <ul class=\"nav navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/auth/register\">Register</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/auth/login\">Login</a>\n        </li>\n      </ul>\n    </div>\n\n  </nav>\n</header>"

/***/ }),

/***/ "./src/app/shared/components/layout/logged-out-header/logged-out-header.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/components/layout/logged-out-header/logged-out-header.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xheW91dC9sb2dnZWQtb3V0LWhlYWRlci9sb2dnZWQtb3V0LWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/layout/logged-out-header/logged-out-header.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/layout/logged-out-header/logged-out-header.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LoggedOutHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedOutHeaderComponent", function() { return LoggedOutHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoggedOutHeaderComponent = /** @class */ (function () {
    function LoggedOutHeaderComponent() {
        this.navbarCollapsed = true;
    }
    LoggedOutHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logged-out-header',
            template: __webpack_require__(/*! ./logged-out-header.component.html */ "./src/app/shared/components/layout/logged-out-header/logged-out-header.component.html"),
            styles: [__webpack_require__(/*! ./logged-out-header.component.scss */ "./src/app/shared/components/layout/logged-out-header/logged-out-header.component.scss")]
        })
    ], LoggedOutHeaderComponent);
    return LoggedOutHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/layout/main-header/main-header.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/layout/main-header/main-header.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-logged-out-header *ngIf=\"!(isLogged | async)\"></app-logged-out-header>\n<app-logged-in-header *ngIf=\"isLogged | async \"></app-logged-in-header>"

/***/ }),

/***/ "./src/app/shared/components/layout/main-header/main-header.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/layout/main-header/main-header.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xheW91dC9tYWluLWhlYWRlci9tYWluLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/layout/main-header/main-header.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/layout/main-header/main-header.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MainHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function() { return MainHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");



var MainHeaderComponent = /** @class */ (function () {
    function MainHeaderComponent(authService) {
        this.authService = authService;
    }
    MainHeaderComponent.prototype.ngOnInit = function () {
        this.isLogged = this.authService.isLoggedIn;
    };
    MainHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-header',
            template: __webpack_require__(/*! ./main-header.component.html */ "./src/app/shared/components/layout/main-header/main-header.component.html"),
            styles: [__webpack_require__(/*! ./main-header.component.scss */ "./src/app/shared/components/layout/main-header/main-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MainHeaderComponent);
    return MainHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/enums/status-type.enum.view.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/enums/status-type.enum.view.ts ***!
  \*******************************************************/
/*! exports provided: StatusType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusType", function() { return StatusType; });
var StatusType;
(function (StatusType) {
    StatusType[StatusType["New"] = 0] = "New";
    StatusType[StatusType["Continue"] = 1] = "Continue";
    StatusType[StatusType["Blackjack"] = 2] = "Blackjack";
    StatusType[StatusType["End"] = 3] = "End";
    StatusType[StatusType["Busted"] = 4] = "Busted";
    StatusType[StatusType["Winner"] = 5] = "Winner";
    StatusType[StatusType["LoseAll"] = 6] = "LoseAll";
    StatusType[StatusType["Draw"] = 7] = "Draw";
    StatusType[StatusType["NoGames"] = 8] = "NoGames";
})(StatusType || (StatusType = {}));


/***/ }),

/***/ "./src/app/shared/guards/only-logged-in-users.guard.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/guards/only-logged-in-users.guard.ts ***!
  \*************************************************************/
/*! exports provided: OnlyLoggedIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyLoggedIn", function() { return OnlyLoggedIn; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var OnlyLoggedIn = /** @class */ (function () {
    function OnlyLoggedIn(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    OnlyLoggedIn.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (isLoggedIn) {
            if (isLoggedIn) {
                return true;
            }
            _this.router.navigate(['/home']);
            return false;
        }));
    };
    OnlyLoggedIn = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OnlyLoggedIn);
    return OnlyLoggedIn;
}());



/***/ }),

/***/ "./src/app/shared/guards/only-logged-out-users.guard.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/guards/only-logged-out-users.guard.ts ***!
  \**************************************************************/
/*! exports provided: OnlyLoggedOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyLoggedOut", function() { return OnlyLoggedOut; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var OnlyLoggedOut = /** @class */ (function () {
    function OnlyLoggedOut(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    OnlyLoggedOut.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (isLoggedIn) {
            if (!isLoggedIn) {
                return true;
            }
            _this.router.navigate(['/game/home']);
            return false;
        }));
    };
    OnlyLoggedOut = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OnlyLoggedOut);
    return OnlyLoggedOut;
}());



/***/ }),

/***/ "./src/app/shared/interceptors/error.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/interceptors/error.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_toastr_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/toastr-messages.service */ "./src/app/shared/services/toastr-messages.service.ts");







var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            var errorMessage = err.error || err.statusText;
            if (err.status === 401) {
                _this.authService.logout();
                _this.router.navigate(['']);
                _this.toastr.warning(errorMessage);
            }
            if (err.status === 400) {
                _this.toastr.info(errorMessage);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
            }
            _this.toastr.error(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_shared_services_toastr_messages_service__WEBPACK_IMPORTED_MODULE_6__["ToastrMessagesService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/interceptors/jwt.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/interceptors/jwt.interceptor.ts ***!
  \********************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/local-storage.service */ "./src/app/shared/services/local-storage.service.ts");




var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authService, localStorageService) {
        this.authService = authService;
        this.localStorageService = localStorageService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        if (this.authService.isLoggedIn) {
            var token = this.localStorageService.getItem('auth_token');
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/local-storage.service */ "./src/app/shared/services/local-storage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var AuthService = /** @class */ (function () {
    function AuthService(http, localStorageService) {
        this.http = http;
        this.localStorageService = localStorageService;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.loggedIn.next(!!this.localStorageService.getItem('auth_token'));
    }
    AuthService.prototype.register = function (registerAccount) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/account/register", registerAccount);
    };
    AuthService.prototype.getAll = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/account/getall");
    };
    AuthService.prototype.login = function (loginAccount) {
        var _this = this;
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/account/login", loginAccount)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (response) { return !!response.token; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (response) {
            _this.completeAuthentication(response.token, loginAccount.email);
            return response;
        }));
    };
    AuthService.prototype.logout = function () {
        this.localStorageService.removeItem('auth_token');
        this.localStorageService.removeItem('email');
        this.loggedIn.next(false);
    };
    AuthService.prototype.completeAuthentication = function (token, email) {
        this.localStorageService.setItem("auth_token", token);
        this.localStorageService.setItem("email", email);
        this.loggedIn.next(true);
    };
    AuthService.prototype.getEmail = function () {
        return this.localStorageService.getItem('email');
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/local-storage.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/local-storage.service.ts ***!
  \**********************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.getItem = function (key) {
        var result = JSON.parse(localStorage.getItem(key));
        return result;
    };
    LocalStorageService.prototype.setItem = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    LocalStorageService.prototype.removeItem = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorageService.prototype.clear = function () {
        localStorage.clear();
    };
    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/shared/services/toastr-messages.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/toastr-messages.service.ts ***!
  \************************************************************/
/*! exports provided: ToastrMessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrMessagesService", function() { return ToastrMessagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ToastrMessagesService = /** @class */ (function () {
    function ToastrMessagesService(toastr) {
        this.toastr = toastr;
        this.title = 'Dear user';
        this.options = this.toastr.toastrConfig;
        this.options.progressBar = true;
        this.options.closeButton = true;
        this.options.preventDuplicates = true;
        this.options.countDuplicates = true;
    }
    ToastrMessagesService.prototype.error = function (message) {
        return this.toastr.error(message, this.title);
    };
    ToastrMessagesService.prototype.info = function (message) {
        return this.toastr.info(message, this.title);
    };
    ToastrMessagesService.prototype.warning = function (message) {
        return this.toastr.warning(message, this.title);
    };
    ToastrMessagesService.prototype.success = function (message) {
        return this.toastr.success(message, this.title);
    };
    ToastrMessagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], ToastrMessagesService);
    return ToastrMessagesService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_shared_components_layout_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/layout/main-header/main-header.component */ "./src/app/shared/components/layout/main-header/main-header.component.ts");
/* harmony import */ var src_app_shared_components_layout_logged_in_header_logged_in_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/layout/logged-in-header/logged-in-header.component */ "./src/app/shared/components/layout/logged-in-header/logged-in-header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/components/base/base.component */ "./src/app/shared/components/base/base.component.ts");
/* harmony import */ var src_app_shared_components_layout_logged_out_header_logged_out_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/layout/logged-out-header/logged-out-header.component */ "./src/app/shared/components/layout/logged-out-header/logged-out-header.component.ts");
/* harmony import */ var ng2_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-select */ "./node_modules/ng2-select/index.js");
/* harmony import */ var ng2_select__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_select__WEBPACK_IMPORTED_MODULE_11__);












var sharedComponents = [src_app_shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_9__["BaseComponent"], src_app_shared_components_layout_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_4__["MainHeaderComponent"]];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [src_app_shared_components_layout_logged_in_header_logged_in_header_component__WEBPACK_IMPORTED_MODULE_5__["LoggedInHeaderComponent"], src_app_shared_components_layout_logged_out_header_logged_out_header_component__WEBPACK_IMPORTED_MODULE_10__["LoggedOutHeaderComponent"]].concat(sharedComponents),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
            ],
            exports: sharedComponents.concat([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ng2_select__WEBPACK_IMPORTED_MODULE_11__["SelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
            ])
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:59257/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Work\anuitex\Web\source\repos\BlackJack\BlackJack.WEB\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map