(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

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
/* harmony import */ var _login_auth_login_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-auth/login-auth.component */ "./src/app/auth/login-auth/login-auth.component.ts");
/* harmony import */ var _registration_auth_registration_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration-auth/registration-auth.component */ "./src/app/auth/registration-auth/registration-auth.component.ts");





var routes = [
    { path: 'login', component: _login_auth_login_auth_component__WEBPACK_IMPORTED_MODULE_3__["LoginAuthComponent"] },
    { path: 'register', component: _registration_auth_registration_auth_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationAuthComponent"] }
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
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _login_auth_login_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-auth/login-auth.component */ "./src/app/auth/login-auth/login-auth.component.ts");
/* harmony import */ var _registration_auth_registration_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration-auth/registration-auth.component */ "./src/app/auth/registration-auth/registration-auth.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");







var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_auth_login_auth_component__WEBPACK_IMPORTED_MODULE_4__["LoginAuthComponent"], _registration_auth_registration_auth_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationAuthComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login-auth/login-auth.component.html":
/*!***********************************************************!*\
  !*** ./src/app/auth/login-auth/login-auth.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 new-user-alert\">\n    <div *ngIf=\"brandNew\" class=\"alert alert-success\" role=\"alert\">\n      <strong>All set!</strong> Please login with your account\n    </div>\n    <h2>Login</h2>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"login(formGroup.value)\">\n\n      <div class=\"formGroup\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" required name=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\n      </div>\n      <div\n        *ngIf=\"formGroup.controls['email'].invalid && (formGroup.controls['email'].dirty || formGroup.controls['email'].touched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"formGroup.controls['email'].errors.required\">\n          Email is required.\n        </div>\n        <div *ngIf=\"formGroup.controls['email'].errors.email\">\n          Email not validate\n        </div>\n\n      </div>\n      <div class=\"formGroup\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" required name=\"password\" placeholder=\"Password\" formControlName=\"password\">\n      </div>\n      <div\n        *ngIf=\"formGroup.controls['password'].invalid && (formGroup.controls['password'].dirty || formGroup.controls['password'].touched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"formGroup.controls['password'].errors.required\">\n          Password is required.\n        </div>\n        <div *ngIf=\"formGroup.controls['password'].errors.minlength\">\n          Password minLength 6\n        </div>\n        <div *ngIf=\"formGroup.controls['password'].errors.pattern\">\n            Password not validate\n          </div>\n      </div>\n\n      <div class=\"formGroup\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"formGroup.invalid\">Login</button>\n      </div>\n\n      <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">\n        <strong>Oops!</strong> {{error}}\n      </div>\n\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/login-auth/login-auth.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/auth/login-auth/login-auth.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  margin-bottom: 1%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi1hdXRoL0M6XFxVc2Vyc1xcQW51aXRleC04NFxcZ2l0XFxXZWJcXHNvdXJjZVxccmVwb3NcXEJsYWNrSmFja1xcQmxhY2tKYWNrLldFQlxcQ2xpZW50QXBwL3NyY1xcYXBwXFxhdXRoXFxsb2dpbi1hdXRoXFxsb2dpbi1hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luLWF1dGgvbG9naW4tYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIG1hcmdpbi1ib3R0b206IDElOyBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/login-auth/login-auth.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/auth/login-auth/login-auth.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAuthComponent", function() { return LoginAuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");






var LoginAuthComponent = /** @class */ (function () {
    function LoginAuthComponent(userService, router, activatedRoute, _formBuilder, alertService) {
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._formBuilder = _formBuilder;
        this.alertService = alertService;
        this.submitted = false;
        this.credentials = { email: '', name: '', password: '', confirmPassword: '', year: 0, token: '' };
        this.userService.loggedIn = !!localStorage.getItem('auth_token');
        this.formGroup = _formBuilder.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)]],
        });
    }
    LoginAuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService._authNavStatusSource.next(this.userService.loggedIn);
        this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
            _this.brandNew = param['brandNew'];
            _this.credentials.email = param['email'];
        });
    };
    LoginAuthComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    Object.defineProperty(LoginAuthComponent.prototype, "f", {
        get: function () {
            return this.formGroup.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginAuthComponent.prototype.login = function () {
        var _this = this;
        this.user = Object.assign(this.credentials, this.formGroup.value);
        this.submitted = true;
        if (this.formGroup.invalid) {
            return;
        }
        this.userService.login(this.user)
            .subscribe(function (x) {
            debugger;
            _this.user.token = x['token'];
            localStorage.setItem("auth_token", _this.user.token);
            localStorage.setItem("email", _this.user.email);
            _this.userService._authNavStatusSource.next(true);
            _this.userService.loggedIn = true;
            _this.router.navigate(["/game/home"]);
        }, function (err) {
            _this.userService.loggedIn = false;
            _this.error = err.error;
        });
    };
    LoginAuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-auth',
            template: __webpack_require__(/*! ./login-auth.component.html */ "./src/app/auth/login-auth/login-auth.component.html"),
            styles: [__webpack_require__(/*! ./login-auth.component.scss */ "./src/app/auth/login-auth/login-auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], LoginAuthComponent);
    return LoginAuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/registration-auth/registration-auth.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/auth/registration-auth/registration-auth.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h2>Please enter your information</h2>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"registration(formGroup.value)\">\n\n      <div class=\"formGroup\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" required name=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\n      </div>\n      <div\n        *ngIf=\"formGroup.controls['email'].invalid && (formGroup.controls['email'].dirty || formGroup.controls['email'].touched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"formGroup.controls['email'].errors.required\">\n          Email is required.\n        </div>\n        <div *ngIf=\"formGroup.controls['email'].errors.email\">\n          Email not validate\n        </div>\n      </div>\n      <div class=\"formGroup\">\n          <label for=\"nmae\">Name</label>\n          <input type=\"text\" required name=\"name\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\">\n        </div>\n        <div\n          *ngIf=\"formGroup.controls['name'].invalid && (formGroup.controls['name'].dirty || formGroup.controls['name'].touched)\"\n          class=\"alert alert-danger\">\n          <div *ngIf=\"formGroup.controls['name'].errors.required\">\n            Name is required.\n          </div>\n          <div *ngIf=\"formGroup.controls['name'].errors.maxlength\">\n            Name max Length 15\n          </div>\n        </div>\n      <div class=\"formGroup\">\n        <label for=\"year\">Year</label>\n        <input type=\"text\" class=\"form-control\" required name=\"year\" placeholder=\"Year\" formControlName=\"year\">\n      </div>\n      <div\n        *ngIf=\"formGroup.controls['year'].invalid && (formGroup.controls['year'].dirty || formGroup.controls['year'].touched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"formGroup.controls['year'].errors.required\">\n          year is required.\n        </div>\n        <div *ngIf=\"formGroup.controls['year'].errors.minlength\">\n          year min min Length 4\n        </div>\n        <div *ngIf=\"formGroup.controls['year'].errors.maxlength\">\n          year min max Length 4\n        </div>\n        <div *ngIf=\"formGroup.controls['year'].errors.pattern\">\n            ONLY NUMB ERROR\n          </div>\n          <div *ngIf=\"formGroup.controls['year'].errors.ageRange\">\n          Year range from 1920 to 2019\n          </div>\n          <div *ngIf=\"formGroup.controls['year'].errors.adultRange\">\n           You don`t adult enough\n          </div>\n          \n      </div>\n      <div class=\"formGroup\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" required class=\"form-control\" name=\"password\" placeholder=\"Password\"\n          formControlName=\"password\">\n      </div>\n      <div\n        *ngIf=\"formGroup.controls['password'].invalid && (formGroup.controls['password'].dirty || formGroup.controls['password'].touched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"formGroup.controls['password'].errors.required\">\n          Password is required.\n        </div>\n        <div *ngIf=\"formGroup.controls['password'].errors.minlength\">\n          Password minLength 6\n        </div>\n        <div *ngIf=\"formGroup.controls['password'].errors.pattern\">\n          Password not validate\n        </div>\n      </div>\n\n      <div class=\"formGroup\">\n        <label for=\"confirmPassword\">Confirm password</label>\n        <input type=\"password\" required class=\"form-control\" name=\"confirmPassword\" placeholder=\"Confirm password\"\n          formControlName=\"confirmPassword\">\n      </div>\n      <div\n        *ngIf=\"formGroup.controls['confirmPassword'].invalid && (formGroup.controls['confirmPassword'].dirty || formGroup.controls['confirmPassword'].touched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"formGroup.controls['confirmPassword'].errors.required\">\n          Password is required.\n        </div>\n        <div *ngIf=\"formGroup.controls['confirmPassword'].errors.minlength\">\n          Password min Length 6\n        </div>\n        <div *ngIf=\"formGroup.controls['confirmPassword'].errors.pattern\">\n          Password not validate\n        </div>\n        <div *ngIf=\"formGroup.controls['confirmPassword'].errors.mustMatch\">\n          Passwords must match\n        </div>\n      </div>\n      <div class=\"formGroup\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"formGroup.invalid\">Register</button>\n      </div>\n\n      <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">\n        <strong>Oops!</strong> {{error}}\n      </div>\n\n    </form>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/registration-auth/registration-auth.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/auth/registration-auth/registration-auth.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  margin-bottom: 1%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3RyYXRpb24tYXV0aC9DOlxcVXNlcnNcXEFudWl0ZXgtODRcXGdpdFxcV2ViXFxzb3VyY2VcXHJlcG9zXFxCbGFja0phY2tcXEJsYWNrSmFjay5XRUJcXENsaWVudEFwcC9zcmNcXGFwcFxcYXV0aFxccmVnaXN0cmF0aW9uLWF1dGhcXHJlZ2lzdHJhdGlvbi1hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3JlZ2lzdHJhdGlvbi1hdXRoL3JlZ2lzdHJhdGlvbi1hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7IFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/auth/registration-auth/registration-auth.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/auth/registration-auth/registration-auth.component.ts ***!
  \***********************************************************************/
/*! exports provided: RegistrationAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationAuthComponent", function() { return RegistrationAuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var src_app_shared_helpers_must_match_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/helpers/must-match.helper */ "./src/app/shared/helpers/must-match.helper.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_helpers_year_range_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/helpers/year-range.helper */ "./src/app/shared/helpers/year-range.helper.ts");









var RegistrationAuthComponent = /** @class */ (function () {
    function RegistrationAuthComponent(userService, router, _formBuilder, alertService) {
        this.userService = userService;
        this.router = router;
        this._formBuilder = _formBuilder;
        this.alertService = alertService;
        this.submitted = false;
        this.users = [];
        this.formGroup = _formBuilder.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)],
            'year': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), src_app_shared_helpers_year_range_helper__WEBPACK_IMPORTED_MODULE_8__["YearRange"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]],
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)]],
            'confirmPassword': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)]],
        }, {
            validator: Object(src_app_shared_helpers_must_match_helper__WEBPACK_IMPORTED_MODULE_6__["MustMatch"])('password', 'confirmPassword')
        });
    }
    RegistrationAuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm =
            {
                email: '',
                name: '',
                year: 0,
                password: '',
                confirmPassword: '',
                token: '',
            };
        this.userService.registerUsers().subscribe(function (user) {
            _this.users = user['users'];
            console.log(_this.users);
        }, function (error) { return error; });
    };
    RegistrationAuthComponent.prototype.registration = function () {
        var _this = this;
        this.submitted = true;
        this.isRequesting = true;
        this.user = Object.assign(this.registerForm, this.formGroup.value);
        var newUser = this.user.email;
        var duplicateUser = this.users.filter(function (x) { return x.email === newUser; }).length;
        if (this.formGroup.invalid) {
            return;
        }
        if (duplicateUser) {
            var errorMessage = { status: 422, message: 'Username "' + newUser + '" is already taken' };
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(new Error(errorMessage.message));
            this.error = errorMessage.message;
            return this.alertService.error(errorMessage.message);
        }
        this.userService.register(this.user)
            .subscribe(function (x) {
            if (x) {
                _this.router.navigate(['/auth/login'], { queryParams: { brandNew: true, email: _this.user.email } });
            }
        }, function (err) {
            _this.error = err.error;
        });
    };
    RegistrationAuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration-auth',
            template: __webpack_require__(/*! ./registration-auth.component.html */ "./src/app/auth/registration-auth/registration-auth.component.html"),
            styles: [__webpack_require__(/*! ./registration-auth.component.scss */ "./src/app/auth/registration-auth/registration-auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], RegistrationAuthComponent);
    return RegistrationAuthComponent;
}());



/***/ }),

/***/ "./src/app/shared/helpers/must-match.helper.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/helpers/must-match.helper.ts ***!
  \*****************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/shared/helpers/year-range.helper.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/helpers/year-range.helper.ts ***!
  \*****************************************************/
/*! exports provided: YearRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearRange", function() { return YearRange; });
// custom validator to check that two fields match
function YearRange(control) {
    var maxYear = 2019;
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
//# sourceMappingURL=auth-auth-module.js.map