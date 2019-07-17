(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-game-game-module"],{

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
/* harmony import */ var src_app_game_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/game/pages/home-page/home-page.component */ "./src/app/game/pages/home-page/home-page.component.ts");
/* harmony import */ var src_app_game_pages_play_page_play_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/game/pages/play-page/play-page.component */ "./src/app/game/pages/play-page/play-page.component.ts");
/* harmony import */ var src_app_game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/game/game.component */ "./src/app/game/game.component.ts");






var routes = [
    { path: '', component: src_app_game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"],
        children: [{
                path: 'home', component: src_app_game_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomeGameComponent"]
            },
            { path: 'play', component: src_app_game_pages_play_page_play_page_component__WEBPACK_IMPORTED_MODULE_4__["PlayGameComponent"] }] },
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
/* harmony import */ var src_app_game_game_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/game/game-routing.module */ "./src/app/game/game-routing.module.ts");
/* harmony import */ var src_app_game_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/game/pages/home-page/home-page.component */ "./src/app/game/pages/home-page/home-page.component.ts");
/* harmony import */ var src_app_game_pages_play_page_play_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/game/pages/play-page/play-page.component */ "./src/app/game/pages/play-page/play-page.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_game_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/game/game.component */ "./src/app/game/game.component.ts");








var GameModule = /** @class */ (function () {
    function GameModule() {
    }
    GameModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [src_app_game_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomeGameComponent"], src_app_game_pages_play_page_play_page_component__WEBPACK_IMPORTED_MODULE_5__["PlayGameComponent"], src_app_game_game_component__WEBPACK_IMPORTED_MODULE_7__["GameComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_game_game_routing_module__WEBPACK_IMPORTED_MODULE_3__["GameRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
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

module.exports = "<div>\r\n    <div style=\"width: fit-content; margin-bottom: 7px;\">\r\n        <h3>Select number of bots</h3>\r\n        <ng-select \r\n        [items]=\"itemsForSelect\"\r\n        (data)=\"getNumberOfBots($event)\"\r\n        placeholder=\"Choose a number\">\r\n        </ng-select>\r\n      </div>\r\n    <div class=\"playGameForm\" *ngIf=\"activeStatus===StatusType.New\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"play()\">Play Game</button>\r\n    </div>\r\n    <div *ngIf=\"activeStatus===StatusType.Continue\">\r\n            <button class=\"btn btn-success\" (click)=\"continueActiveGame()\">Continue active</button>\r\n        </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/game/pages/home-page/home-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/game/pages/home-page/home-page.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin-bottom: 0.4rem; }\n\n.ui-select-choices.dropdown-menu {\n  display: block; }\n\n.text-muted {\n  color: white !important; }\n\n.form-control:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #343a40;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(109, 109, 109, 0.897); }\n\n.ui-select-choices-row.active > a {\n  color: #fff !important;\n  text-decoration: none;\n  outline: 0;\n  background-color: #343a40 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9wYWdlcy9ob21lLXBhZ2UvQzpcXFVzZXJzXFxBbnVpdGV4LTg0XFxnaXRcXFdlYlxcc291cmNlXFxyZXBvc1xcQmxhY2tKYWNrXFxCbGFja0phY2suV0VCXFxDbGllbnRBcHAvc3JjXFxhcHBcXGdhbWVcXHBhZ2VzXFxob21lLXBhZ2VcXGhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSx1QkFBdUIsRUFBQTs7QUFFM0I7RUFDSSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsbURBQW1ELEVBQUE7O0FBR3ZEO0VBQ0ksc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1Ysb0NBQW9DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9nYW1lL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xyXG59XHJcbi51aS1zZWxlY3QtY2hvaWNlcy5kcm9wZG93bi1tZW51IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi50ZXh0LW11dGVkIHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICMzNDNhNDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMTA5LCAxMDksIDEwOSwgMC44OTcpO1xyXG5cclxufVxyXG4udWktc2VsZWN0LWNob2ljZXMtcm93LmFjdGl2ZSA+YSB7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDAgIWltcG9ydGFudDtcclxufSJdfQ== */"

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
/* harmony import */ var src_app_shared_enums_status_type_enum_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enums/status-type.enum.view */ "./src/app/shared/enums/status-type.enum.view.ts");








var HomeGameComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HomeGameComponent, _super);
    function HomeGameComponent(gameService, router, toastrService) {
        var _this = _super.call(this) || this;
        _this.gameService = gameService;
        _this.router = router;
        _this.toastrService = toastrService;
        _this.StatusType = src_app_shared_enums_status_type_enum_view__WEBPACK_IMPORTED_MODULE_7__["StatusType"];
        _this.continueStatus = false;
        _this.itemsForSelect = Array.from({ length: 5 }, function (v, k) { return "" + (k + 1); });
        _this.checkActiveGame();
        return _this;
    }
    HomeGameComponent.prototype.ngOnInit = function () {
    };
    HomeGameComponent.prototype.getNumberOfBots = function (item) {
        this.numberOfBots = item.id;
    };
    HomeGameComponent.prototype.checkActiveGame = function () {
        var _this = this;
        this.gameService.getActiveGame()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (x) {
            _this.toastrService.info('You have active game! Click continue to play');
            _this.activeStatus = src_app_shared_enums_status_type_enum_view__WEBPACK_IMPORTED_MODULE_7__["StatusType"].Continue;
        }, function (error) {
            _this.activeStatus = src_app_shared_enums_status_type_enum_view__WEBPACK_IMPORTED_MODULE_7__["StatusType"].New;
        });
    };
    HomeGameComponent.prototype.continueActiveGame = function () {
        this.router.navigate(["/game/play"]);
    };
    HomeGameComponent.prototype.play = function () {
        var _this = this;
        var numberOfBots = this.numberOfBots;
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

module.exports = "<div *ngIf=\"haveActiveGame\">\r\n    <div class=\"row\">\r\n        <table class=\"table\">\r\n            <thead class=\"thead-dark\">\r\n                <tr>\r\n                    <th colspan=\"6\">New Game</th>\r\n                </tr>\r\n                <tr>\r\n                    <th>\r\n                        <label *ngIf=\"activeStatus===StatusType.New\">Game status : {{convertStatusToString(playGameView.status)}}</label>\r\n                        <label *ngIf=\"activeStatus===StatusType.Continue\">Game status : {{convertStatusToString(continueGameView.status)}}</label>\r\n                        <label *ngIf=\"activeStatus===StatusType.End\">Game status : {{convertStatusToString(endGameView.status)}}\r\n                        </label>\r\n                    </th>\r\n                    <th>\r\n                        <label *ngIf=\"activeStatus===StatusType.New\">Winner : {{ playGameView.winner }} </label>\r\n                        <label *ngIf=\"activeStatus===StatusType.Continue\">Winner : {{ continueGameView.winner }} </label>\r\n                        <label *ngIf=\"activeStatus===StatusType.End\">Winner : {{ endGameView.winner }} </label>\r\n\r\n                    </th>\r\n                    <th>\r\n                        <div *ngIf=\"game\">\r\n                            <button class=\"btn btn-success\" (click)=\"continue()\"><i class=\"fas fa-plus\"></i></button>\r\n                            <button class=\"btn btn-danger\" (click)=\"end()\"><i class=\"fas fa-times\"></i></button>\r\n                            <button class=\"btn btn-info\" (click)=\"backToHome()\"><i\r\n                                    class=\"fa fa-arrow-left\"></i></button>\r\n                        </div>\r\n                        <div *ngIf=\"!game\">\r\n                            <button class=\"btn btn-primary\" (click)=\"playAgain()\">Play again with the same parametrs?</button>\r\n                            <button class=\"btn btn-info\" (click)=\"backToHome()\"><i\r\n                                    class=\"fa fa-arrow-left\"></i></button>\r\n                        </div>\r\n                    </th>\r\n                </tr>\r\n            </thead>\r\n        </table>\r\n        <div>\r\n        </div>\r\n        <table class=\"table\">\r\n            <thead class=\"thead-dark\">\r\n                <th *ngFor=\"let head of headPlayerSteps\">{{head}}</th>\r\n                <th colspan=\"4\"></th>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <th *ngIf=\"activeStatus===StatusType.New\">{{ playGameView.player.status }}</th>\r\n                    <th *ngIf=\"activeStatus===StatusType.Continue\">{{ continueGameView.player.status }}</th>\r\n                    <th *ngIf=\"activeStatus===StatusType.End\">{{ endGameView.player.status }}</th>\r\n                    <td *ngIf=\"activeStatus===StatusType.New\">\r\n                <tr *ngFor=\"let step of playGameView.player.cards\">\r\n                    <img [src]=\"getCardLink(step)\">\r\n                </tr>\r\n                </td>\r\n                <td *ngIf=\"activeStatus===StatusType.Continue\">\r\n                    <tr *ngFor=\"let step of continueGameView.player.cards\">\r\n                        <img [src]=\"getCardLink(step)\">\r\n                    </tr>\r\n                </td>\r\n                <td *ngIf=\"activeStatus===StatusType.End\">\r\n                    <tr *ngFor=\"let step of endGameView.player.cards\">\r\n                      <img [src]=\"getCardLink(step)\">\r\n                    </tr>\r\n                </td>\r\n                </tr>\r\n            </tbody>\r\n            <thead class=\"thead-dark\">\r\n                <th colspan=\"8\" *ngFor=\"let head of headBots\">{{head}}</th>\r\n            </thead>\r\n            <thead class=\"thead-dark\" *ngIf=\"activeStatus===StatusType.New\">\r\n                <th *ngFor=\"let bot of playGameView.bots\">{{bot.name}}</th>\r\n                <th colspan=\"8\"></th>\r\n            </thead>\r\n            <thead class=\"thead-dark\" *ngIf=\"activeStatus===StatusType.Continue\">\r\n                <th *ngFor=\"let bot of continueGameView.bots\">{{bot.name}}</th>\r\n                <th colspan=\"8\"></th>\r\n            </thead>\r\n            <thead class=\"thead-dark\" *ngIf=\"activeStatus===StatusType.End\">\r\n                <th *ngFor=\"let bot of endGameView.bots\">{{bot.name}}</th>\r\n                <th colspan=\"8\"></th>\r\n            </thead>\r\n\r\n            <tbody *ngIf=\"activeStatus===StatusType.New\">\r\n                <td *ngFor=\"let bot of playGameView.bots\">\r\n                    <tr *ngFor=\"let step of bot.cards\">\r\n                      <img [src]=\"getCardLink(step)\">\r\n                    </tr>\r\n                </td>\r\n            </tbody>\r\n            <tbody *ngIf=\"activeStatus===StatusType.Continue\">\r\n                <td *ngFor=\"let bot of continueGameView.bots\">\r\n                    <tr *ngFor=\"let step of bot.cards\">\r\n                        <img [src]=\"getCardLink(step)\">\r\n                    </tr>\r\n                </td>\r\n            </tbody>\r\n            <tbody *ngIf=\"activeStatus===StatusType.End\">\r\n                <td *ngFor=\"let bot of endGameView.bots\">\r\n                    <tr *ngFor=\"let step of bot.cards\">\r\n                        <img [src]=\"getCardLink(step)\">\r\n                    </tr>\r\n                </td>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"!haveActiveGame\">\r\n    <p><label>Back to home : </label></p>\r\n    <button class=\"btn btn-success\" (click)=\"backToHome()\"><i class=\"fa fa-arrow-left\"></i></button>\r\n</div>"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/base/base.component */ "./src/app/shared/components/base/base.component.ts");
/* harmony import */ var src_app_shared_enums_status_type_enum_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enums/status-type.enum.view */ "./src/app/shared/enums/status-type.enum.view.ts");







var PlayGameComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PlayGameComponent, _super);
    function PlayGameComponent(gameService, router) {
        var _this = _super.call(this) || this;
        _this.gameService = gameService;
        _this.router = router;
        _this.StatusType = src_app_shared_enums_status_type_enum_view__WEBPACK_IMPORTED_MODULE_6__["StatusType"];
        _this.game = false;
        _this.haveActiveGame = false;
        _this.headBotSteps = ['Cards'];
        _this.headBots = ['Bots'];
        _this.headPlayerSteps = ['Player name', 'Player cards'];
        _this.headElements = ['Number of bots', 'Status', 'Winner', ''];
        _this.gameInit();
        return _this;
    }
    PlayGameComponent.prototype.ngOnInit = function () {
    };
    PlayGameComponent.prototype.gameInit = function () {
        var _this = this;
        this.gameService.getActiveGame()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (playGameView) {
            _this.numberOfBots = playGameView.numberOfBots;
            _this.game = true;
            _this.haveActiveGame = true;
            if (playGameView.winner !== 'No one') {
                _this.game = false;
            }
            _this.activeStatus = src_app_shared_enums_status_type_enum_view__WEBPACK_IMPORTED_MODULE_6__["StatusType"].New;
            _this.playGameView = playGameView;
        }, function (error) {
            _this.haveActiveGame = false;
        });
    };
    PlayGameComponent.prototype.continue = function () {
        var _this = this;
        this.gameService.continue()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (continueGameView) {
            _this.game = true;
            if (continueGameView.winner !== 'No one') {
                _this.game = false;
            }
            _this.activeStatus = src_app_shared_enums_status_type_enum_view__WEBPACK_IMPORTED_MODULE_6__["StatusType"].Continue;
            _this.continueGameView = continueGameView;
        });
    };
    PlayGameComponent.prototype.end = function () {
        var _this = this;
        this.gameService.end()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (endGameView) {
            _this.game = false;
            _this.activeStatus = src_app_shared_enums_status_type_enum_view__WEBPACK_IMPORTED_MODULE_6__["StatusType"].End;
            _this.endGameView = endGameView;
        });
    };
    PlayGameComponent.prototype.playAgain = function () {
        var _this = this;
        var numberOfBots = this.numberOfBots;
        this.gameService.play(numberOfBots)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (playGameView) {
            _this.game = true;
            _this.haveActiveGame = true;
            if (playGameView.winner !== 'No one') {
                _this.game = false;
            }
            _this.activeStatus = src_app_shared_enums_status_type_enum_view__WEBPACK_IMPORTED_MODULE_6__["StatusType"].New;
            _this.playGameView = playGameView;
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
}(src_app_shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



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
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var GameService = /** @class */ (function () {
    function GameService(http) {
        this.http = http;
    }
    GameService.prototype.getActiveGame = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/game/getActive");
    };
    GameService.prototype.play = function (numberOfBots) {
        var params = {
            numberOfBots: numberOfBots
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/game/play", { params: params });
    };
    GameService.prototype.continue = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/game/continue");
    };
    GameService.prototype.end = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/game/end");
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
//# sourceMappingURL=src-app-game-game-module.js.map