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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/game/home/home.component.ts");
/* harmony import */ var _play_play_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./play/play.component */ "./src/app/game/play/play.component.ts");
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root/root.component */ "./src/app/game/root/root.component.ts");






var routes = [
    { path: '', component: _root_root_component__WEBPACK_IMPORTED_MODULE_5__["RootGameComponent"],
        children: [{
                path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeGameComponent"]
            },
            { path: 'play', component: _play_play_component__WEBPACK_IMPORTED_MODULE_4__["PlayGameComponent"] }] },
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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/game/home/home.component.ts");
/* harmony import */ var _play_play_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./play/play.component */ "./src/app/game/play/play.component.ts");
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./root/root.component */ "./src/app/game/root/root.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var GameModule = /** @class */ (function () {
    function GameModule() {
    }
    GameModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeGameComponent"], _play_play_component__WEBPACK_IMPORTED_MODULE_5__["PlayGameComponent"], _root_root_component__WEBPACK_IMPORTED_MODULE_6__["RootGameComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _game_routing_module__WEBPACK_IMPORTED_MODULE_3__["GameRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ]
        })
    ], GameModule);
    return GameModule;
}());



/***/ }),

/***/ "./src/app/game/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/game/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <form #f=\"ngForm\" class=\"form-group\">\r\n        <div>\r\n            <label for=\"numberOfBots\">Numbers Of Bots: </label>\r\n            <select class=\"form-control\"name=\"numberOfBots\" ngModel>\r\n                <option value=\"\" disabled>Choose a number</option>\r\n                <option>1</option>\r\n                <option>2</option>\r\n                <option>3</option>\r\n                <option>4</option>\r\n                <option>5</option>\r\n            </select>\r\n    \r\n        </div>\r\n    </form>\r\n    \r\n    <div *ngIf=\"gameExisting\">\r\n       <button class=\"btn btn-primary\" (click)=\"play(f.value)\">Play Game</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"haveActiveGame\">\r\n      <label> You have active game already, you can`t start new</label>\r\n      <br>\r\n        <button class=\"btn btn-success\" (click)=\"continueActiveGame()\">Continue active</button>\r\n    </div>\r\n    <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">\r\n        <strong>Oops!</strong> {{error}}\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/game/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/game/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin-bottom: 0.4rem; }\n\n.btn-success {\n  margin-right: 0.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9ob21lL0M6XFxVc2Vyc1xcQW51aXRleC04NFxcZ2l0XFxXZWJcXHNvdXJjZVxccmVwb3NcXEJsYWNrSmFja1xcQmxhY2tKYWNrLldFQlxcQ2xpZW50QXBwL3NyY1xcYXBwXFxnYW1lXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0Esb0JBQ0EsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dhbWUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcclxufVxyXG4uYnRuLXN1Y2Nlc3N7XHJcbm1hcmdpbi1yaWdodDogMC4ycmVtXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/game/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/game/home/home.component.ts ***!
  \*********************************************/
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
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/game/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/game/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeGameComponent);
    return HomeGameComponent;
}());



/***/ }),

/***/ "./src/app/game/play/play.component.html":
/*!***********************************************!*\
  !*** ./src/app/game/play/play.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"haveActiveGame\">\r\n    <div class=\"row\">\r\n        <table class=\"table\">\r\n            <thead class=\"thead-dark\">\r\n                <tr>\r\n                    <th colspan=\"6\">New Game</th>\r\n                </tr>\r\n                <tr>\r\n                    <th> <label>Game status : {{ playGame.status }}</label></th>\r\n                    <th> <label>Winner : {{ playGame.winner }} </label></th>\r\n                    <th>\r\n                        <div *ngIf=\"gameExisting\">\r\n                            <button class=\"btn btn-success\" (click)=\"continue()\"><i\r\n                                    class=\"fas fa-plus\"></i></button>\r\n                            <button class=\"btn btn-danger\" (click)=\"end()\"><i class=\"fas fa-times\"></i></button>\r\n                            <button class=\"btn btn-info\" (click)=\"backToHome()\"><i\r\n                                    class=\"fa fa-arrow-left\"></i></button>\r\n                        </div>\r\n                        <div *ngIf=\"!gameExisting\">\r\n                            <button class=\"btn btn-primary\" (click)=\"playAgain()\">Play again with the same parametrs?</button>\r\n                            <button class=\"btn btn-info\" (click)=\"backToHome()\"><i\r\n                                    class=\"fa fa-arrow-left\"></i></button>\r\n                        </div>\r\n                    </th>\r\n                </tr>\r\n            </thead>\r\n        </table>\r\n<div>\r\n</div>\r\n        <table class=\"table\">\r\n            <thead class=\"thead-dark\">\r\n                <th *ngFor=\"let head of headPlayerSteps\">{{head}}</th>\r\n                <th colspan=\"4\"></th>\r\n            </thead>\r\n            <tbody>\r\n                <tr><th>{{playGame.player.name}}</th>\r\n                <td>\r\n                    <tr *ngFor=\"let q of playGame.player.cards\">\r\n                            <img src=\"../../../assets/cards/{{q.rank}}_{{q.suit}}.svg\">\r\n                    </tr>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n            <thead class=\"thead-dark\">\r\n                <th colspan=\"8\" *ngFor=\"let head of headBots\">{{head}}</th>\r\n            </thead>\r\n            <thead class=\"thead-dark\">\r\n                <th *ngFor=\"let e of playGame.bots\">{{e.name}}</th>\r\n                <th colspan=\"8\"></th>\r\n            </thead>\r\n                <tbody>\r\n                    <td *ngFor=\"let e of playGame.bots\">\r\n                        <tr *ngFor=\"let q of e.cards\">\r\n                            <img src=\"../../../assets/cards/{{q.rank}}_{{q.suit}}.svg\">\r\n                        </tr>\r\n                    </td>\r\n                </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">\r\n    <strong>Oops!</strong> {{error}}\r\n</div>\r\n<div *ngIf=\"error\">\r\n    <p><label>Back to home : </label></p>\r\n    <button class=\"btn btn-success\" (click)=\"backToHome()\"><i\r\n        class=\"fa fa-arrow-left\"></i></button>\r\n</div>"

/***/ }),

/***/ "./src/app/game/play/play.component.scss":
/*!***********************************************!*\
  !*** ./src/app/game/play/play.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, td, th, tr {\n  padding: 0.1rem;\n  text-align: -webkit-center;\n  margin-bottom: auto;\n  min-width: auto;\n  font-size: 0.7rem; }\n\n.table thead th {\n  vertical-align: middle; }\n\nimg {\n  margin-bottom: 3px;\n  margin-top: 3px;\n  width: 52px; }\n\np {\n  margin-bottom: 0rem; }\n\n.btn-success {\n  margin-right: 1%; }\n\n.btn-danger {\n  margin-right: 1%; }\n\n@media (min-width: 560px) {\n  table, td, th, tr {\n    padding: 0.1rem;\n    text-align: -webkit-center;\n    margin-bottom: auto;\n    min-width: auto;\n    font-size: 0.9rem; }\n  img {\n    width: 78px; } }\n\n@media (max-width: 411px) {\n  table, td, th, tr {\n    padding: 0.1rem;\n    text-align: -webkit-center;\n    margin-bottom: auto;\n    min-width: auto;\n    font-size: 0.7rem; }\n  img {\n    width: 61px; }\n  .btn-info {\n    margin-right: 1%;\n    padding: 6px 10px; }\n  .btn-danger {\n    margin-right: 1%;\n    padding: 6px 10px; }\n  .btn-success {\n    padding: 6px 10px; } }\n\n@media (max-width: 320px) {\n  table, td, th, tr {\n    padding: 0.1rem;\n    text-align: -webkit-center;\n    margin-bottom: auto;\n    min-width: auto;\n    font-size: 0.6rem; }\n  img {\n    width: 52px; }\n  .btn-info {\n    margin-right: 1%;\n    padding: 3px 10px; }\n  .btn-danger {\n    margin-right: 1%;\n    padding: 3px 10px; }\n  .btn-success {\n    padding: 3px 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9wbGF5L0M6XFxVc2Vyc1xcQW51aXRleC04NFxcZ2l0XFxXZWJcXHNvdXJjZVxccmVwb3NcXEJsYWNrSmFja1xcQmxhY2tKYWNrLldFQlxcQ2xpZW50QXBwL3NyY1xcYXBwXFxnYW1lXFxwbGF5XFxwbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBYztFQUNkLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUVmO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0k7SUFDSyxlQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7RUFFckI7SUFDSSxXQUFXLEVBQUEsRUFDZDs7QUFFTDtFQUNHO0lBQ0ssZUFBYztJQUNkLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBRXJCO0lBQ0ksV0FBVyxFQUFBO0VBRWY7SUFDRyxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFFckI7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFFckI7SUFDSSxpQkFBaUIsRUFBQSxFQUNwQjs7QUFFTDtFQUNJO0lBQ0ksZUFBYztJQUNkLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBRXJCO0lBQ0EsV0FBVyxFQUFBO0VBR2Y7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFFckI7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFFckI7SUFDSSxpQkFBaUIsRUFBQSxFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvcGxheS9wbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUsdGQsdGgsdHIge1xyXG4gICAgcGFkZGluZzowLjFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIFxyXG59XHJcbi50YWJsZSB0aGVhZCB0aHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuaW1ne1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4OyBcclxuICAgIHdpZHRoOiA1MnB4O1xyXG59XHJcbnAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcclxufVxyXG4uYnRuLXN1Y2Nlc3N7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG59XHJcbi5idG4tZGFuZ2Vye1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxJTsgXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDU2MHB4KSB7XHJcbiAgICB0YWJsZSx0ZCx0aCx0ciB7XHJcbiAgICAgICAgIHBhZGRpbmc6MC4xcmVtO1xyXG4gICAgICAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxuICAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICB9XHJcbiAgICAgaW1ne1xyXG4gICAgICAgICB3aWR0aDogNzhweDtcclxuICAgICB9XHJcbiB9XHJcbiBAbWVkaWEgKG1heC13aWR0aDogNDExcHgpIHtcclxuICAgIHRhYmxlLHRkLHRoLHRyIHtcclxuICAgICAgICAgcGFkZGluZzowLjFyZW07XHJcbiAgICAgICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG4gICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgICAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgIH1cclxuICAgICBpbWd7XHJcbiAgICAgICAgIHdpZHRoOiA2MXB4O1xyXG4gICAgIH1cclxuICAgICAuYnRuLWluZm8ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLWRhbmdlciB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIH1cclxuICAgIC5idG4tc3VjY2VzcyB7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICB9XHJcbiB9XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgdGFibGUsdGQsdGgsdHIge1xyXG4gICAgICAgIHBhZGRpbmc6MC4xcmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgd2lkdGg6IDUycHg7XHJcbiAgICBcclxufVxyXG4uYnRuLWluZm8ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG59XHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcclxufVxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbn1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/game/play/play.component.ts":
/*!*********************************************!*\
  !*** ./src/app/game/play/play.component.ts ***!
  \*********************************************/
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
            selector: 'app-play',
            template: __webpack_require__(/*! ./play.component.html */ "./src/app/game/play/play.component.html"),
            styles: [__webpack_require__(/*! ./play.component.scss */ "./src/app/game/play/play.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PlayGameComponent);
    return PlayGameComponent;
}());



/***/ }),

/***/ "./src/app/game/root/root.component.html":
/*!***********************************************!*\
  !*** ./src/app/game/root/root.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <nav class=\"col-sm-2 col-md-1 d-none d-sm-block bg-light sidebar\">\r\n      <ul class=\"nav nav-pills flex-column\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/game/home\">New game</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/game/play\">Active game</a>\r\n        </li> \r\n      </ul>\r\n    </nav> \r\n    <main role=\"main\" class=\"col-sm-10 ml-sm-5 col-md-11 pt-3\">\r\n        <router-outlet></router-outlet>\r\n    </main>      \r\n</div>\r\n "

/***/ }),

/***/ "./src/app/game/root/root.component.scss":
/*!***********************************************!*\
  !*** ./src/app/game/root/root.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  position: fixed;\n  top: 51px;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  padding: 20px 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  /* Scrollable contents if viewport is shorter than content. */\n  border-right: 1px solid #eee; }\n\n.sidebar .nav, a {\n  margin-bottom: 7px;\n  color: #343a40; }\n\n.sidebar .nav-item {\n  width: 100%; }\n\n.sidebar .nav-item + .nav-item {\n  margin-left: 0;\n  color: #343a40; }\n\n.sidebar .nav-link {\n  border-radius: 0; }\n\n.nav-pills .nav-link.active, .nav-pills .show > .nav-link {\n  color: white;\n  background-color: #343a40; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9yb290L0M6XFxVc2Vyc1xcQW51aXRleC04NFxcZ2l0XFxXZWJcXHNvdXJjZVxccmVwb3NcXEJsYWNrSmFja1xcQmxhY2tKYWNrLldFQlxcQ2xpZW50QXBwL3NyY1xcYXBwXFxnYW1lXFxyb290XFxyb290LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLFNBQVM7RUFDVCxTQUFTO0VBQ1QsT0FBTztFQUNQLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUFFLDZEQUFBO0VBQ2xCLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsY0FBYztFQUNkLGNBQWUsRUFBQTs7QUFHakI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxZQUF5QjtFQUN6Qix5QkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dhbWUvcm9vdC9yb290LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1MXB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvOyAvKiBTY3JvbGxhYmxlIGNvbnRlbnRzIGlmIHZpZXdwb3J0IGlzIHNob3J0ZXIgdGhhbiBjb250ZW50LiAqL1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZTtcclxuICAgIFxyXG4gIH1cclxuICAuc2lkZWJhciAubmF2ICwgYXsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICBjb2xvcjogIzM0M2E0MDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXIgLm5hdi1pdGVtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhciAubmF2LWl0ZW0gKyAubmF2LWl0ZW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBjb2xvcjogICMzNDNhNDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYtbGluayB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsIC5uYXYtcGlsbHMgLnNob3c+Lm5hdi1saW5re1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjMzQzYTQwO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/game/root/root.component.ts":
/*!*********************************************!*\
  !*** ./src/app/game/root/root.component.ts ***!
  \*********************************************/
/*! exports provided: RootGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootGameComponent", function() { return RootGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RootGameComponent = /** @class */ (function () {
    function RootGameComponent() {
    }
    RootGameComponent.prototype.ngOnInit = function () {
    };
    RootGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./root.component.html */ "./src/app/game/root/root.component.html"),
            styles: [__webpack_require__(/*! ./root.component.scss */ "./src/app/game/root/root.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RootGameComponent);
    return RootGameComponent;
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