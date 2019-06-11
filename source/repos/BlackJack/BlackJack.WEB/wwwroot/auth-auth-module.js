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
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/auth/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/registration-page/registration-page.component */ "./src/app/auth/pages/registration-page/registration-page.component.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");






var routes = [
    { path: '', component: _auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"],
        children: [{
                path: 'login', component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginAuthComponent"]
            },
            { path: 'register', component: _pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationAuthComponent"] }] },
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

module.exports = "div {\n  margin-bottom: 1%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9DOlxcVXNlcnNcXEFudWl0ZXgtODRcXGdpdFxcV2ViXFxzb3VyY2VcXHJlcG9zXFxCbGFja0phY2tcXEJsYWNrSmFjay5XRUJcXENsaWVudEFwcC9zcmNcXGFwcFxcYXV0aFxcYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7IFxyXG59Il19 */"

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
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/auth/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/registration-page/registration-page.component */ "./src/app/auth/pages/registration-page/registration-page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginAuthComponent"], _pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationAuthComponent"], _auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"]],
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

/***/ "./src/app/auth/pages/login-page/login-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/auth/pages/login-page/login-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n  <div class=\"formGroup\">\n    <label for=\"email\">Email</label>\n    <input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\n  </div>\n  <div\n    *ngIf=\"hasErrors(['email'])\"\n    class=\"alert alert-danger\">\n    <div *ngIf=\"loginForm.get(['email']).errors.required\">\n      Email is required.\n    </div>\n    <div *ngIf=\"loginForm.get(['email']).errors.email\">\n      Email not validate\n    </div>\n  </div>\n  <div class=\"loginForm\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\"\n      formControlName=\"password\">\n  </div>\n  <div\n    *ngIf=\"hasErrors(['password'])\"\n    class=\"alert alert-danger\">\n    <div *ngIf=\"loginForm.get(['password']).errors.required\">\n      Password is required.\n    </div>\n    <div *ngIf=\"loginForm.get(['password']).errors.minlength\">\n      Password minLength 6\n    </div>\n    <div *ngIf=\"loginForm.get(['password']).errors.pattern\">\n      Password not validate\n    </div>\n  </div>\n  <div class=\"loginForm\">\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"loginForm.invalid\">Login</button>\n  </div>\n</form>"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var LoginAuthComponent = /** @class */ (function () {
    function LoginAuthComponent(userService, formBuilder, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.componetDestroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    LoginAuthComponent.prototype.ngOnInit = function () {
        this.initForms();
    };
    LoginAuthComponent.prototype.initForms = function () {
        this.loginForm = this.formBuilder.group({
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)]],
        });
    };
    LoginAuthComponent.prototype.hasErrors = function (name) {
        return this.loginForm.get(name).invalid && (this.loginForm.get(name).dirty || this.loginForm.get(name).touched);
    };
    LoginAuthComponent.prototype.login = function () {
        var _this = this;
        var loginAccount = {
            email: this.loginForm.controls['email'].value,
            password: this.loginForm.controls['password'].value
        };
        if (this.loginForm.invalid) {
            return;
        }
        this.userService.login(loginAccount)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (x) {
            if (x) {
                _this.router.navigate(["/game/home"]);
            }
        });
    };
    LoginAuthComponent.prototype.ngOnDestroy = function () {
        this.componetDestroyed.next(true);
    };
    LoginAuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/auth/pages/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ../../auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginAuthComponent);
    return LoginAuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/pages/registration-page/registration-page.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/auth/pages/registration-page/registration-page.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h2>Please enter your information</h2>\n  </div>\n</div>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"registration()\">\n  <div class=\"formGroup\">\n    <label for=\"email\">Email</label>\n    <input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\n  </div>\n  <div\n    *ngIf=\"hasErrors(['email'])\"\n    class=\"alert alert-danger\">\n    <div *ngIf=\"registerForm.controls['email'].errors.required\">\n      Email is required.\n    </div>\n    <div *ngIf=\"registerForm.controls['email'].errors.email\">\n      Email not validate\n    </div>\n  </div>\n  <div class=\"formGroup\">\n    <label for=\"nmae\">Name</label>\n    <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\">\n  </div>\n  <div\n    *ngIf=\"hasErrors(['name'])\"\n    class=\"alert alert-danger\">\n    <div *ngIf=\"registerForm.controls['name'].errors.required\">\n      Name is required.\n    </div>\n    <div *ngIf=\"registerForm.controls['name'].errors.maxlength\">\n      Name max Length 15\n    </div>\n  </div>\n  <div class=\"formGroup\">\n    <label for=\"year\">Year</label>\n    <input type=\"text\" class=\"form-control\" name=\"year\" placeholder=\"Year\" formControlName=\"year\">\n  </div>\n  <div\n   *ngIf=\"hasErrors(['year'])\"\n    class=\"alert alert-danger\">\n    <div *ngIf=\"registerForm.controls['year'].errors.required\">\n      year is required.\n    </div>\n    <div *ngIf=\"registerForm.controls['year'].errors.minlength\">\n      year min min Length 4\n    </div>\n    <div *ngIf=\"registerForm.controls['year'].errors.maxlength\">\n      year min max Length 4\n    </div>\n    <div *ngIf=\"registerForm.controls['year'].errors.pattern\">\n      ONLY NUMB ERROR\n    </div>\n    <div *ngIf=\"registerForm.controls['year'].errors.ageRange\">\n      Year range from 1920 to 2019\n    </div>\n    <div *ngIf=\"registerForm.controls['year'].errors.adultRange\">\n      You don`t adult enough\n    </div>\n\n  </div>\n  <div class=\"formGroup\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\"\n      formControlName=\"password\">\n  </div>\n  <div\n  *ngIf=\"hasErrors(['password'])\"\n    class=\"alert alert-danger\">\n    <div *ngIf=\"registerForm.controls['password'].errors.required\">\n      Password is required.\n    </div>\n    <div *ngIf=\"registerForm.controls['password'].errors.minlength\">\n      Password minLength 6\n    </div>\n    <div *ngIf=\"registerForm.controls['password'].errors.pattern\">\n      Password not validate\n    </div>\n  </div>\n\n  <div class=\"formGroup\">\n    <label for=\"confirmPassword\">Confirm password</label>\n    <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" placeholder=\"Confirm password\"\n      formControlName=\"confirmPassword\">\n  </div>\n  <div\n  *ngIf=\"hasErrors(['confirmPassword'])\"\n    class=\"alert alert-danger\">\n    <div *ngIf=\"registerForm.controls['confirmPassword'].errors.required\">\n      Password is required.\n    </div>\n    <div *ngIf=\"registerForm.controls['confirmPassword'].errors.minlength\">\n      Password min Length 6\n    </div>\n    <div *ngIf=\"registerForm.controls['confirmPassword'].errors.pattern\">\n      Password not validate\n    </div>\n    <div *ngIf=\"registerForm.controls['confirmPassword'].errors.mustMatch\">\n      Passwords must match\n    </div>\n  </div>\n  <div class=\"formGroup\">\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"registerForm.invalid\">Register</button>\n  </div>\n</form>"

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
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_helpers_must_match_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helpers/must-match.helper */ "./src/app/shared/helpers/must-match.helper.ts");
/* harmony import */ var src_app_shared_helpers_year_range_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/helpers/year-range.helper */ "./src/app/shared/helpers/year-range.helper.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










var RegistrationAuthComponent = /** @class */ (function () {
    function RegistrationAuthComponent(userService, router, formBuilder, toastrService) {
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastrService = toastrService;
        this.componetDestroyed = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    }
    RegistrationAuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForms();
        this.userService.registerUsers()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (x) {
            debugger;
            _this.getAllAccounts = x;
        });
    };
    RegistrationAuthComponent.prototype.initForms = function () {
        this.registerForm = this.formBuilder.group({
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            'name': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]],
            'year': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), src_app_shared_helpers_year_range_helper__WEBPACK_IMPORTED_MODULE_6__["YearRange"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]],
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)]],
            'confirmPassword': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)]],
        }, {
            validator: Object(src_app_shared_helpers_must_match_helper__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('password', 'confirmPassword')
        });
    };
    RegistrationAuthComponent.prototype.hasErrors = function (name) {
        return this.registerForm.get(name).invalid && (this.registerForm.get(name).dirty || this.registerForm.get(name).touched);
    };
    RegistrationAuthComponent.prototype.registration = function () {
        var _this = this;
        var registerAccount = {
            email: this.registerForm.value['email'],
            name: this.registerForm.value['name'],
            year: this.registerForm.value['year'],
            password: this.registerForm.value['password'],
            confirmPassword: this.registerForm.value['confirmPassword'],
        };
        var duplicateUser = this.getAllAccounts.users
            .filter(function (x) {
            return x.email === registerAccount.email;
        })
            .length;
        if (duplicateUser) {
            var errorMessage = { message: 'Username "' + registerAccount.email + '" is already taken' };
            return this.toastrService.warning(errorMessage.message);
        }
        if (this.registerForm.invalid) {
            return;
        }
        this.userService.register(registerAccount)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (x) {
            if (x) {
                _this.toastrService.success('Email ' + registerAccount.email + ' is successfully register.', 'All set!');
                _this.router.navigate(['/auth/login']);
            }
        });
    };
    RegistrationAuthComponent.prototype.ngOnDestroy = function () {
        this.componetDestroyed.next(true);
    };
    RegistrationAuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration-page',
            template: __webpack_require__(/*! ./registration-page.component.html */ "./src/app/auth/pages/registration-page/registration-page.component.html"),
            styles: [__webpack_require__(/*! ../../auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
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
function MustMatch(controlName, matchingControlName) {
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

/***/ "./src/app/shared/helpers/year-range.helper.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/helpers/year-range.helper.ts ***!
  \*****************************************************/
/*! exports provided: YearRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearRange", function() { return YearRange; });
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