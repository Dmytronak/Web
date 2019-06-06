(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["game-game-module"],{

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
    GameComponent.prototype.ngOnInit = function () {
    };
    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.scss */ "./src/app/game/game.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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








var GameModule = /** @class */ (function () {
    function GameModule() {
    }
    GameModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomeGameComponent"], _pages_play_page_play_page_component__WEBPACK_IMPORTED_MODULE_5__["PlayGameComponent"], _game_component__WEBPACK_IMPORTED_MODULE_7__["GameComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _game_routing_module__WEBPACK_IMPORTED_MODULE_3__["GameRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ]
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

module.exports = "<div>\r\n    <form #f=\"ngForm\" class=\"form-group\">\r\n        <div>\r\n            <label for=\"numberOfBots\">Numbers Of Bots: </label>\r\n            <select class=\"form-control\"name=\"numberOfBots\" ngModel>\r\n                <option value=\"\" disabled>Choose a number</option>\r\n                <option>1</option>\r\n                <option>2</option>\r\n                <option>3</option>\r\n                <option>4</option>\r\n                <option>5</option>\r\n            </select>\r\n    \r\n        </div>\r\n    </form>\r\n    \r\n    <div *ngIf=\"gameExisting\">\r\n       <button class=\"btn btn-primary\" (click)=\"play(f.value)\">Play Game</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"haveActiveGame\">\r\n      <label> You have active game already, you can`t start new</label>\r\n      <br>\r\n        <button class=\"btn btn-success\" (click)=\"continueActiveGame()\">Continue active</button>\r\n    </div>\r\n    <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">\r\n        <strong>Oops!</strong> {{error}}\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/game/pages/home-page/home-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/game/pages/home-page/home-page.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin-bottom: 0.4rem; }\n\n.btn-success {\n  margin-right: 0.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9wYWdlcy9ob21lLXBhZ2UvQzpcXFVzZXJzXFxBbnVpdGV4LTg0XFxnaXRcXFdlYlxcc291cmNlXFxyZXBvc1xcQmxhY2tKYWNrXFxCbGFja0phY2suV0VCXFxDbGllbnRBcHAvc3JjXFxhcHBcXGdhbWVcXHBhZ2VzXFxob21lLXBhZ2VcXGhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQixFQUFBOztBQUV6QjtFQUNBLG9CQUNBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9nYW1lL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xyXG59XHJcbi5idG4tc3VjY2Vzc3tcclxubWFyZ2luLXJpZ2h0OiAwLjJyZW1cclxufVxyXG4iXX0= */"

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




var HomeGameComponent = /** @class */ (function () {
    function HomeGameComponent(gameService, router) {
        this.gameService = gameService;
        this.router = router;
        this.email = '';
        this.error = '';
        this.haveActiveGame = false;
        this.gameExisting = false;
        this.botsGame = { name: '', cards: this.cardsGame };
        this.playerGame = { name: '', cards: this.cardsGame };
        this.createGame = { status: '0', winner: '', numberOfBots: 0, player: this.playerGame, bots: [this.botsGame] };
    }
    HomeGameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameService.getActiveGame()
            .subscribe(function () {
            _this.haveActiveGame = true;
        }, function () {
            _this.gameExisting = true;
        });
    };
    HomeGameComponent.prototype.showInput = function () {
        this.showForm = true;
    };
    HomeGameComponent.prototype.continueActiveGame = function () {
        this.router.navigate(["/game/play"]);
    };
    HomeGameComponent.prototype.closeInput = function () {
        this.showForm = false;
        this.brandNew = false;
    };
    HomeGameComponent.prototype.play = function (f) {
        var _this = this;
        debugger;
        this.createGame.numberOfBots = f['numberOfBots'];
        this.gameService.play(this.createGame)
            .subscribe(function (x) {
            if (x) {
                debugger;
                _this.router.navigate(['/game/play']);
            }
        }, function (err) {
            _this.error = err;
        });
    };
    HomeGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/game/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/game/pages/home-page/home-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeGameComponent);
    return HomeGameComponent;
}());



/***/ }),

/***/ "./src/app/game/pages/play-page/play-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/game/pages/play-page/play-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"haveActiveGame\">\r\n    <div class=\"row\">\r\n        <table class=\"table\">\r\n            <thead class=\"thead-dark\">\r\n                <tr>\r\n                    <th colspan=\"6\">New Game</th>\r\n                </tr>\r\n                <tr>\r\n                    <th> <label>Game status : {{ playGame.status }}</label></th>\r\n                    <th> <label>Winner : {{ playGame.winner }} </label></th>\r\n                    <th>\r\n                        <div *ngIf=\"gameExisting\">\r\n                            <button class=\"btn btn-success\" (click)=\"continue()\"><i\r\n                                    class=\"fas fa-plus\"></i></button>\r\n                            <button class=\"btn btn-danger\" (click)=\"end()\"><i class=\"fas fa-times\"></i></button>\r\n                            <button class=\"btn btn-info\" (click)=\"backToHome()\"><i\r\n                                    class=\"fa fa-arrow-left\"></i></button>\r\n                        </div>\r\n                        <div *ngIf=\"!gameExisting\">\r\n                            <button class=\"btn btn-primary\" (click)=\"playAgain()\">Play again with the same parametrs?</button>\r\n                            <button class=\"btn btn-info\" (click)=\"backToHome()\"><i\r\n                                    class=\"fa fa-arrow-left\"></i></button>\r\n                        </div>\r\n                    </th>\r\n                </tr>\r\n            </thead>\r\n        </table>\r\n<div>\r\n</div>\r\n        <table class=\"table\">\r\n            <thead class=\"thead-dark\">\r\n                <th *ngFor=\"let head of headPlayerSteps\">{{head}}</th>\r\n                <th colspan=\"4\"></th>\r\n            </thead>\r\n            <tbody>\r\n                <tr><th>{{playGame.player.name}}</th>\r\n                <td>\r\n                    <tr *ngFor=\"let q of playGame.player.cards\">\r\n                            <img src=\"../../../assets/cards/{{q.rank}}_{{q.suit}}.svg\">\r\n                    </tr>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n            <thead class=\"thead-dark\">\r\n                <th colspan=\"8\" *ngFor=\"let head of headBots\">{{head}}</th>\r\n            </thead>\r\n            <thead class=\"thead-dark\">\r\n                <th *ngFor=\"let e of playGame.bots\">{{e.name}}</th>\r\n                <th colspan=\"8\"></th>\r\n            </thead>\r\n                <tbody>\r\n                    <td *ngFor=\"let e of playGame.bots\">\r\n                        <tr *ngFor=\"let q of e.cards\">\r\n                            <img src=\"../../../assets/cards/{{q.rank}}_{{q.suit}}.svg\">\r\n                        </tr>\r\n                    </td>\r\n                </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">\r\n    <strong>Oops!</strong> {{error}}\r\n</div>\r\n<div *ngIf=\"error\">\r\n    <p><label>Back to home : </label></p>\r\n    <button class=\"btn btn-success\" (click)=\"backToHome()\"><i\r\n        class=\"fa fa-arrow-left\"></i></button>\r\n</div>"

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
/* harmony import */ var src_app_shared_enums_status_type_enum_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/status-type.enum.view */ "./src/app/shared/enums/status-type.enum.view.ts");
/* harmony import */ var src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PlayGameComponent = /** @class */ (function () {
    function PlayGameComponent(gameService, router) {
        this.gameService = gameService;
        this.router = router;
        this.error = '';
        this.gameExisting = false;
        this.haveActiveGame = false;
        this.headBotSteps = ['Cards'];
        this.headBots = ['Bots'];
        this.headPlayerSteps = ['Player name', 'Player cards'];
        this.headElements = ['Number of bots', 'Status', 'Winner', ''];
        this.bots = { name: '', cards: this.cardsGame };
        this.player = { name: '', cards: this.cardsGame };
        this.playGame = { status: '', winner: '', numberOfBots: 0, player: this.player, bots: [this.bots] };
    }
    PlayGameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameService.getActiveGame()
            .subscribe(function (x) {
            _this.playGame.numberOfBots = x['numberOfBots'];
            _this.statusEnum = x['status'];
            _this.playGame.status = src_app_shared_enums_status_type_enum_view__WEBPACK_IMPORTED_MODULE_2__["Status"][_this.statusEnum];
            _this.playGame.winner = x['winner'];
            _this.playGame.player.name = x['player'].name;
            _this.playGame.player.cards = x['player'].cards;
            _this.playGame.bots = x['bots'];
            _this.gameExisting = true;
            _this.haveActiveGame = true;
            if (_this.playGame.winner !== 'No one') {
                _this.gameExisting = false;
            }
        }, function (err) {
            _this.haveActiveGame = false;
            return _this.error = err;
        });
    };
    PlayGameComponent.prototype.continue = function () {
        var _this = this;
        this.gameService.continue(this.playGame)
            .subscribe(function (x) {
            if (x) {
                _this.statusEnum = x['status'];
                _this.playGame.status = src_app_shared_enums_status_type_enum_view__WEBPACK_IMPORTED_MODULE_2__["Status"][_this.statusEnum];
                _this.playGame.winner = x['winner'];
                _this.playGame.player.name = x['player'].name;
                _this.playGame.player.cards = x['player'].cards;
                _this.playGame.bots = x['bots'];
                _this.gameExisting = true;
                if (_this.playGame.winner !== 'No one') {
                    _this.gameExisting = false;
                }
            }
        }, function (err) {
            _this.error = err;
        });
    };
    PlayGameComponent.prototype.end = function () {
        var _this = this;
        this.gameService.end(this.playGame)
            .subscribe(function (x) {
            if (x) {
                _this.statusEnum = x['status'];
                _this.playGame.status = src_app_shared_enums_status_type_enum_view__WEBPACK_IMPORTED_MODULE_2__["Status"][_this.statusEnum];
                _this.playGame.winner = x['winner'];
                _this.playGame.player.name = x['player'].name;
                _this.playGame.player.cards = x['player'].cards;
                _this.playGame.bots = x['bots'];
                _this.gameExisting = false;
            }
        }, function (err) {
            _this.error = err;
        });
    };
    PlayGameComponent.prototype.backToHome = function () {
        this.router.navigate(['/game/home']);
    };
    PlayGameComponent.prototype.playAgain = function () {
        var _this = this;
        this.gameService.play(this.playGame)
            .subscribe(function (x) {
            if (x) {
                _this.statusEnum = x['status'];
                _this.playGame.status = src_app_shared_enums_status_type_enum_view__WEBPACK_IMPORTED_MODULE_2__["Status"][_this.statusEnum];
                _this.playGame.winner = x['winner'];
                _this.playGame.player.name = x['player'].name;
                _this.playGame.player.cards = x['player'].cards;
                _this.playGame.bots = x['bots'];
                _this.gameExisting = true;
            }
        }, function (err) {
            _this.error = err;
        });
    };
    PlayGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-play-page',
            template: __webpack_require__(/*! ./play-page.component.html */ "./src/app/game/pages/play-page/play-page.component.html"),
            styles: [__webpack_require__(/*! ./play-page.component.scss */ "./src/app/game/pages/play-page/play-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PlayGameComponent);
    return PlayGameComponent;
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
        this.baseUrl = '';
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    GameService.prototype.getActiveGame = function () {
        return this.http.get(this.baseUrl + "/game/getActive");
    };
    GameService.prototype.play = function (game) {
        debugger;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("numberOfBots", game.numberOfBots.toString());
        return this.http.post(this.baseUrl + "/game/play?" + params, '');
    };
    GameService.prototype.continue = function (game) {
        debugger;
        return this.http.post(this.baseUrl + "/game/continue", game);
    };
    GameService.prototype.end = function (game) {
        debugger;
        return this.http.post(this.baseUrl + "/game/end", game);
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