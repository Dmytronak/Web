(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-auth-auth-module"],{

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/pages/login-page/login-page.component */ "./src/app/auth/pages/login-page/login-page.component.ts");
/* harmony import */ var src_app_auth_pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/pages/registration-page/registration-page.component */ "./src/app/auth/pages/registration-page/registration-page.component.ts");
/* harmony import */ var src_app_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.component */ "./src/app/auth/auth.component.ts");






var routes = [
    { path: '', component: src_app_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"],
        children: [{
                path: 'login', component: src_app_auth_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginAuthComponent"]
            },
            { path: 'register', component: src_app_auth_pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationAuthComponent"] }] },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n  <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")]
        })
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var src_app_auth_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/pages/login-page/login-page.component */ "./src/app/auth/pages/login-page/login-page.component.ts");
/* harmony import */ var src_app_auth_pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/pages/registration-page/registration-page.component */ "./src/app/auth/pages/registration-page/registration-page.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth/auth.component */ "./src/app/auth/auth.component.ts");








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [src_app_auth_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginAuthComponent"], src_app_auth_pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationAuthComponent"], src_app_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/pages/login-page/login-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/auth/pages/login-page/login-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n  <div class=\"formGroup\">\n    <label for=\"email\">Email</label>\n    <input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\n  </div>\n  <div\n    *ngIf=\"hasErrors('email')\" class=\"alert alert-danger\">\n    <div *ngIf=\"loginForm.get('email').errors.required\">\n      Email is required.\n    </div>\n    <div *ngIf=\"loginForm.get('email').errors.email\">\n      Email not validate\n    </div>\n  </div>\n\n  <div class=\"loginForm\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\"\n      formControlName=\"password\">\n  </div>\n  <div\n    *ngIf=\"hasErrors('password')\"\n    class=\"alert alert-danger\">\n    <div *ngIf=\"loginForm.get('password').errors.required\">\n      Password is required.\n    </div>\n    <div *ngIf=\"loginForm.get('password').errors.minlength\">\n      Password minLength 6\n    </div>\n    <div *ngIf=\"loginForm.get('password').errors.pattern\">\n      Password not validate\n    </div>\n  </div>\n  <div class=\"loginForm\">\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"loginForm.invalid\">Login</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/auth/pages/login-page/login-page.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/auth/pages/login-page/login-page.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  margin-bottom: 1%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9wYWdlcy9sb2dpbi1wYWdlL0Q6XFxXb3JrXFxhbnVpdGV4XFxXZWJcXHNvdXJjZVxccmVwb3NcXEJsYWNrSmFja1xcQmxhY2tKYWNrLldFQlxcQ2xpZW50QXBwL3NyY1xcYXBwXFxhdXRoXFxwYWdlc1xcbG9naW4tcGFnZVxcbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9wYWdlcy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XG4gICAgbWFyZ2luLWJvdHRvbTogMSU7IFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/pages/login-page/login-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/auth/pages/login-page/login-page.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAuthComponent", function() { return LoginAuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_validators_password_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/validators/password.validator */ "./src/app/shared/validators/password.validator.ts");
/* harmony import */ var src_app_shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/base/base.component */ "./src/app/shared/components/base/base.component.ts");








var LoginAuthComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginAuthComponent, _super);
    function LoginAuthComponent(authService, formBuilder, router) {
        var _this = _super.call(this) || this;
        _this.authService = authService;
        _this.formBuilder = formBuilder;
        _this.router = router;
        _this.initForms();
        return _this;
    }
    LoginAuthComponent.prototype.ngOnInit = function () {
    };
    LoginAuthComponent.prototype.initForms = function () {
        this.loginForm = this.formBuilder.group({
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), src_app_shared_validators_password_validator__WEBPACK_IMPORTED_MODULE_6__["passwordValidation"]]],
        });
    };
    LoginAuthComponent.prototype.hasErrors = function (name) {
        return this.loginForm.get(name).invalid && (this.loginForm.get(name).dirty || this.loginForm.get(name).touched);
    };
    LoginAuthComponent.prototype.login = function () {
        var _this = this;
        if (this.loginForm.invalid) {
            return;
        }
        var loginAccount = this.loginForm.getRawValue();
        this.authService.login(loginAccount)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (response) {
            _this.router.navigate(["/game/home"]);
        });
    };
    LoginAuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/auth/pages/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/auth/pages/login-page/login-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginAuthComponent);
    return LoginAuthComponent;
}(src_app_shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_7__["BaseComponent"]));



/***/ }),

/***/ "./src/app/auth/pages/registration-page/registration-page.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/auth/pages/registration-page/registration-page.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h2>Please enter your information</h2>\n  </div>\n</div>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n  <div class=\"formGroup\">\n    <label for=\"email\">Email</label>\n    <input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\n  </div>\n  <div *ngIf=\"hasErrors('email')\" class=\"alert alert-danger\">\n    <div *ngIf=\"registerForm.get('email').errors.required\">\n      Email is required.\n    </div>\n    <div *ngIf=\"registerForm.get('email').errors.email\">\n      Email not validate\n    </div>\n  </div>\n\n  <div class=\"formGroup\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\">\n  </div>\n  <div *ngIf=\"hasErrors('name')\"\n    class=\"alert alert-danger\">\n    <div *ngIf=\"registerForm.get('name').errors.required\">\n      Name is required.\n    </div>\n    <div *ngIf=\"registerForm.get('name').errors.maxlength\">\n      Name max Length 15\n    </div>\n  </div>\n\n  <div class=\"formGroup\">\n    <label for=\"year\">Year</label>\n    <input type=\"text\" class=\"form-control\" name=\"year\" placeholder=\"Year\" formControlName=\"year\">\n  </div>\n  <div *ngIf=\"hasErrors('year')\" class=\"alert alert-danger\">\n   <div *ngIf=\"registerForm.get('year').errors.required\">\n     year is required.\n   </div>\n   <div *ngIf=\"registerForm.get('year').errors.minlength\">\n     year min min Length 4\n   </div>\n   <div *ngIf=\"registerForm.get('year').errors.maxlength\">\n     year min max Length 4\n   </div>\n   <div *ngIf=\"registerForm.get('year').errors.pattern\">\n     ONLY NUMB ERROR\n   </div>\n   <div *ngIf=\"registerForm.get('year').errors.ageRange\">\n     Year range from 1920 to 2019\n   </div>\n   <div *ngIf=\"registerForm.get('year').errors.adultRange\">\n     You don`t adult enough\n   </div>\n  </div>\n\n  <div class=\"formGroup\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\"\n      formControlName=\"password\">\n  </div>\n\n  <div *ngIf=\"hasErrors('password')\"\n    class=\"alert alert-danger\">\n    <div *ngIf=\"registerForm.get('password').errors.required\">\n      Password is required.\n    </div>\n    <div *ngIf=\"registerForm.get('password').errors.minlength\">\n      Password minLength 6\n    </div>\n    <div *ngIf=\"registerForm.get('password').errors.passwordValidation\">\n      Password not validate\n    </div>\n  </div>\n\n  <div class=\"formGroup\">\n    <label for=\"confirmPassword\">Confirm password</label>\n    <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" placeholder=\"Confirm password\"\n      formControlName=\"confirmPassword\">\n  </div>\n\n  <div\n  *ngIf=\"hasErrors('confirmPassword')\" class=\"alert alert-danger\">\n    <div *ngIf=\"registerForm.get('confirmPassword').errors.required\">\n      Password is required.\n    </div>\n    <div *ngIf=\"registerForm.get('confirmPassword').errors.minlength\">\n      Password min Length 6\n    </div>\n    <div *ngIf=\"registerForm.get('confirmPassword').errors.passwordValidation\">\n      Password not validate\n    </div>\n    <div *ngIf=\"registerForm.get('confirmPassword').errors.mustMatch\">\n      Passwords must match\n    </div>\n  </div>\n\n  <div class=\"formGroup\">\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"registerForm.invalid\">Register</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/auth/pages/registration-page/registration-page.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/auth/pages/registration-page/registration-page.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  margin-bottom: 1%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9wYWdlcy9yZWdpc3RyYXRpb24tcGFnZS9EOlxcV29ya1xcYW51aXRleFxcV2ViXFxzb3VyY2VcXHJlcG9zXFxCbGFja0phY2tcXEJsYWNrSmFjay5XRUJcXENsaWVudEFwcC9zcmNcXGFwcFxcYXV0aFxccGFnZXNcXHJlZ2lzdHJhdGlvbi1wYWdlXFxyZWdpc3RyYXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9wYWdlcy9yZWdpc3RyYXRpb24tcGFnZS9yZWdpc3RyYXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcbiAgICBtYXJnaW4tYm90dG9tOiAxJTsgXG59Il19 */"

/***/ }),

/***/ "./src/app/auth/pages/registration-page/registration-page.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/auth/pages/registration-page/registration-page.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RegistrationAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationAuthComponent", function() { return RegistrationAuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_validators_must_match_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/validators/must-match.validator */ "./src/app/shared/validators/must-match.validator.ts");
/* harmony import */ var src_app_shared_validators_year_range_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/validators/year-range.validator */ "./src/app/shared/validators/year-range.validator.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_services_toastr_messages_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/toastr-messages.service */ "./src/app/shared/services/toastr-messages.service.ts");
/* harmony import */ var src_app_shared_validators_password_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/validators/password.validator */ "./src/app/shared/validators/password.validator.ts");
/* harmony import */ var src_app_shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/base/base.component */ "./src/app/shared/components/base/base.component.ts");











var RegistrationAuthComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RegistrationAuthComponent, _super);
    function RegistrationAuthComponent(authService, router, formBuilder, toastrService) {
        var _this = _super.call(this) || this;
        _this.authService = authService;
        _this.router = router;
        _this.formBuilder = formBuilder;
        _this.toastrService = toastrService;
        _this.initForms();
        return _this;
    }
    RegistrationAuthComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    RegistrationAuthComponent.prototype.getAll = function () {
        var _this = this;
        this.authService.getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (response) {
            _this.accoutsModel = response;
        });
    };
    RegistrationAuthComponent.prototype.initForms = function () {
        this.registerForm = this.formBuilder.group({
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            'name': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]],
            'year': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), src_app_shared_validators_year_range_validator__WEBPACK_IMPORTED_MODULE_6__["yearRange"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]],
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), src_app_shared_validators_password_validator__WEBPACK_IMPORTED_MODULE_9__["passwordValidation"]]],
            'confirmPassword': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), src_app_shared_validators_password_validator__WEBPACK_IMPORTED_MODULE_9__["passwordValidation"]]],
        }, {
            validator: Object(src_app_shared_validators_must_match_validator__WEBPACK_IMPORTED_MODULE_5__["mustMatch"])('password', 'confirmPassword')
        });
    };
    RegistrationAuthComponent.prototype.hasErrors = function (name) {
        return this.registerForm.get(name).invalid && (this.registerForm.get(name).dirty || this.registerForm.get(name).touched);
    };
    RegistrationAuthComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.invalid) {
            return;
        }
        var registerAccount = Object.assign({
            email: this.registerForm.value['email'],
            name: this.registerForm.value['name'],
            year: this.registerForm.value['year'],
            password: this.registerForm.value['password'],
            confirmPassword: this.registerForm.value['confirmPassword'],
        });
        var isExistUser = !!this.accoutsModel.users
            .find(function (user) { return user.email === registerAccount.email; });
        if (isExistUser) {
            var errorMessage = { message: "Username " + registerAccount.email + " is already taken" };
            this.toastrService.warning(errorMessage.message);
            return;
        }
        this.authService.register(registerAccount)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (response) {
            _this.toastrService.success("Email " + registerAccount.email + " is successfully register.");
            _this.router.navigate(['/auth/login']);
        });
    };
    RegistrationAuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration-page',
            template: __webpack_require__(/*! ./registration-page.component.html */ "./src/app/auth/pages/registration-page/registration-page.component.html"),
            styles: [__webpack_require__(/*! ./registration-page.component.scss */ "./src/app/auth/pages/registration-page/registration-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_services_toastr_messages_service__WEBPACK_IMPORTED_MODULE_8__["ToastrMessagesService"]])
    ], RegistrationAuthComponent);
    return RegistrationAuthComponent;
}(src_app_shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_10__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shared/validators/must-match.validator.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/validators/must-match.validator.ts ***!
  \***********************************************************/
/*! exports provided: mustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mustMatch", function() { return mustMatch; });
function mustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/shared/validators/password.validator.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/validators/password.validator.ts ***!
  \*********************************************************/
/*! exports provided: passwordValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordValidation", function() { return passwordValidation; });
function passwordValidation(control) {
    var regexp = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
    if (!regexp.test(control.value)) {
        return { 'passwordValidation': true };
    }
    return null;
}


/***/ }),

/***/ "./src/app/shared/validators/year-range.validator.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/validators/year-range.validator.ts ***!
  \***********************************************************/
/*! exports provided: yearRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearRange", function() { return yearRange; });
function yearRange(control) {
    var maxYear = new Date().getFullYear();
    var minYear = 1920;
    if (control.value > maxYear || control.value < minYear) {
        return { 'ageRange': true };
    }
    if (maxYear - control.value < 18) {
        return { 'adultRange': true };
    }
    return null;
}


/***/ })

}]);
//# sourceMappingURL=src-app-auth-auth-module.js.map