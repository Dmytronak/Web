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
/* harmony import */ var _home_game_home_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-game/home-game.component */ "./src/app/game/home-game/home-game.component.ts");
/* harmony import */ var _play_game_play_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./play-game/play-game.component */ "./src/app/game/play-game/play-game.component.ts");
/* harmony import */ var _root_game_root_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root-game/root-game.component */ "./src/app/game/root-game/root-game.component.ts");






var routes = [
    { path: '', component: _root_game_root_game_component__WEBPACK_IMPORTED_MODULE_5__["RootGameComponent"],
        children: [{
                path: 'home', component: _home_game_home_game_component__WEBPACK_IMPORTED_MODULE_3__["HomeGameComponent"]
            },
            { path: 'play', component: _play_game_play_game_component__WEBPACK_IMPORTED_MODULE_4__["PlayGameComponent"] }] },
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
/* harmony import */ var _home_game_home_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-game/home-game.component */ "./src/app/game/home-game/home-game.component.ts");
/* harmony import */ var _play_game_play_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./play-game/play-game.component */ "./src/app/game/play-game/play-game.component.ts");
/* harmony import */ var _root_game_root_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./root-game/root-game.component */ "./src/app/game/root-game/root-game.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var GameModule = /** @class */ (function () {
    function GameModule() {
    }
    GameModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_game_home_game_component__WEBPACK_IMPORTED_MODULE_4__["HomeGameComponent"], _play_game_play_game_component__WEBPACK_IMPORTED_MODULE_5__["PlayGameComponent"], _root_game_root_game_component__WEBPACK_IMPORTED_MODULE_6__["RootGameComponent"]],
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

/***/ "./src/app/game/home-game/home-game.component.html":
/*!*********************************************************!*\
  !*** ./src/app/game/home-game/home-game.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <form #f=\"ngForm\" class=\"form-group\">\n        <div>\n            <label for=\"numberOfBots\">Numbers Of Bots: </label>\n            <select class=\"form-control\"name=\"numberOfBots\" ngModel>\n                <option value=\"\" disabled>Choose a number</option>\n                <option>1</option>\n                <option>2</option>\n                <option>3</option>\n                <option>4</option>\n                <option>5</option>\n            </select>\n    \n        </div>\n    </form>\n    \n    <div *ngIf=\"gameExisting\">\n       <button class=\"btn btn-primary\" (click)=\"play(f.value)\">Play Game</button>\n    </div>\n\n    <div *ngIf=\"haveActiveGame\">\n      <label> You have active game already, you can`t start new</label>\n      <br>\n        <button class=\"btn btn-success\" (click)=\"continueActiveGame()\">Continue active</button>\n    </div>\n    <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">\n        <strong>Oops!</strong> {{error}}\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/game/home-game/home-game.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/game/home-game/home-game.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin-bottom: 0.4rem; }\n\n.btn-success {\n  margin-right: 0.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9ob21lLWdhbWUvQzpcXFVzZXJzXFxBbnVpdGV4LTg0XFxnaXRcXFdlYlxcc291cmNlXFxyZXBvc1xcQmxhY2tKYWNrXFxCbGFja0phY2suV0VCXFxDbGllbnRBcHAvc3JjXFxhcHBcXGdhbWVcXGhvbWUtZ2FtZVxcaG9tZS1nYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0Esb0JBQ0EsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dhbWUvaG9tZS1nYW1lL2hvbWUtZ2FtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XHJcbn1cclxuLmJ0bi1zdWNjZXNze1xyXG5tYXJnaW4tcmlnaHQ6IDAuMnJlbVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/game/home-game/home-game.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/game/home-game/home-game.component.ts ***!
  \*******************************************************/
/*! exports provided: HomeGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeGameComponent", function() { return HomeGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");






var HomeGameComponent = /** @class */ (function () {
    function HomeGameComponent(gameService, router, _formBuilder, alertService) {
        this.gameService = gameService;
        this.router = router;
        this._formBuilder = _formBuilder;
        this.alertService = alertService;
        this.email = '';
        this.error = '';
        this.haveActiveGame = false;
        this.gameExisting = false;
        this.cardsGame = { rank: 0, suit: 0 };
        this.botsGame = { name: '', cards: [this.cardsGame] };
        this.playerGame = { name: '', cards: [this.cardsGame] };
        this.createGame = { status: '0', winner: '', numberOfBots: 0, player: this.playerGame, bots: [this.botsGame] };
        this.newPlayer = { id: '', email: '', name: '' };
        debugger;
        this.email = localStorage.getItem('email');
        this.player = { email: this.email, name: '', id: '' };
    }
    HomeGameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameService.getActiveGame()
            .subscribe(function (x) {
            if (x['error']) {
                return _this.gameExisting = true;
            }
            _this.haveActiveGame = true;
        }, function (err) {
            _this.error = err;
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
            selector: 'app-home-game',
            template: __webpack_require__(/*! ./home-game.component.html */ "./src/app/game/home-game/home-game.component.html"),
            styles: [__webpack_require__(/*! ./home-game.component.scss */ "./src/app/game/home-game/home-game.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], HomeGameComponent);
    return HomeGameComponent;
}());



/***/ }),

/***/ "./src/app/game/play-game/play-game.component.html":
/*!*********************************************************!*\
  !*** ./src/app/game/play-game/play-game.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"haveActiveGame\">\n    <div class=\"row\">\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <th colspan=\"6\">New Game</th>\n                </tr>\n                <tr>\n                    <th> <label>Game status : {{ playGame.status }}</label></th>\n                    <th> <label>Winner : {{ playGame.winner }} </label></th>\n                    <th>\n                        <div *ngIf=\"gameExisting\">\n                            <button class=\"btn btn-success\" (click)=\"continue()\"><i\n                                    class=\"fas fa-plus\"></i></button>\n                            <button class=\"btn btn-danger\" (click)=\"end()\"><i class=\"fas fa-times\"></i></button>\n                            <button class=\"btn btn-info\" (click)=\"backToHome()\"><i\n                                    class=\"fa fa-arrow-left\"></i></button>\n                        </div>\n                        <div *ngIf=\"!gameExisting\">\n                            <button class=\"btn btn-primary\" (click)=\"playAgain()\">Play again with the same parametrs?</button>\n                            <button class=\"btn btn-info\" (click)=\"backToHome()\"><i\n                                    class=\"fa fa-arrow-left\"></i></button>\n                        </div>\n                    </th>\n                </tr>\n            </thead>\n        </table>\n<div>\n</div>\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n                <th *ngFor=\"let head of headPlayerSteps\">{{head}}</th>\n                <th colspan=\"4\"></th>\n            </thead>\n            <tbody>\n                <tr><th>{{playGame.player.name}}</th>\n                <td>\n                    <tr *ngFor=\"let q of playGame.player.cards\">\n                            <img src=\"../../../assets/cards/{{q.rank}}_{{q.suit}}.svg\">\n                    </tr>\n                </td>\n            </tr>\n            </tbody>\n            <thead class=\"thead-dark\">\n                <th colspan=\"8\" *ngFor=\"let head of headBots\">{{head}}</th>\n            </thead>\n            <thead class=\"thead-dark\">\n                <th *ngFor=\"let e of playGame.bots\">{{e.name}}</th>\n                <th colspan=\"8\"></th>\n            </thead>\n                <tbody>\n                    <td *ngFor=\"let e of playGame.bots\">\n                        <tr *ngFor=\"let q of e.cards\">\n                            <img src=\"../../../assets/cards/{{q.rank}}_{{q.suit}}.svg\">\n                        </tr>\n                    </td>\n                </tbody>\n        </table>\n    </div>\n</div>\n<div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">\n    <strong>Oops!</strong> {{error}}\n</div>\n<div *ngIf=\"error\">\n    <p><label>Back to home : </label></p>\n    <button class=\"btn btn-success\" (click)=\"backToHome()\"><i\n        class=\"fa fa-arrow-left\"></i></button>\n</div>"

/***/ }),

/***/ "./src/app/game/play-game/play-game.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/game/play-game/play-game.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, td, th, tr {\n  padding: 0.1rem;\n  text-align: -webkit-center;\n  margin-bottom: auto;\n  min-width: auto;\n  font-size: 0.7rem; }\n\n.table thead th {\n  vertical-align: middle; }\n\nimg {\n  margin-bottom: 3px;\n  margin-top: 3px;\n  width: 52px; }\n\np {\n  margin-bottom: 0rem; }\n\n.btn-success {\n  margin-right: 1%; }\n\n.btn-danger {\n  margin-right: 1%; }\n\n@media (min-width: 560px) {\n  table, td, th, tr {\n    padding: 0.1rem;\n    text-align: -webkit-center;\n    margin-bottom: auto;\n    min-width: auto;\n    font-size: 0.9rem; }\n  img {\n    width: 78px; } }\n\n@media (max-width: 411px) {\n  table, td, th, tr {\n    padding: 0.1rem;\n    text-align: -webkit-center;\n    margin-bottom: auto;\n    min-width: auto;\n    font-size: 0.7rem; }\n  img {\n    width: 61px; }\n  .btn-info {\n    margin-right: 1%;\n    padding: 6px 10px; }\n  .btn-danger {\n    margin-right: 1%;\n    padding: 6px 10px; }\n  .btn-success {\n    padding: 6px 10px; } }\n\n@media (max-width: 320px) {\n  table, td, th, tr {\n    padding: 0.1rem;\n    text-align: -webkit-center;\n    margin-bottom: auto;\n    min-width: auto;\n    font-size: 0.6rem; }\n  img {\n    width: 52px; }\n  .btn-info {\n    margin-right: 1%;\n    padding: 3px 10px; }\n  .btn-danger {\n    margin-right: 1%;\n    padding: 3px 10px; }\n  .btn-success {\n    padding: 3px 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9wbGF5LWdhbWUvQzpcXFVzZXJzXFxBbnVpdGV4LTg0XFxnaXRcXFdlYlxcc291cmNlXFxyZXBvc1xcQmxhY2tKYWNrXFxCbGFja0phY2suV0VCXFxDbGllbnRBcHAvc3JjXFxhcHBcXGdhbWVcXHBsYXktZ2FtZVxccGxheS1nYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBYztFQUNkLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUVmO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0k7SUFDSyxlQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7RUFFckI7SUFDSSxXQUFXLEVBQUEsRUFDZDs7QUFFTDtFQUNHO0lBQ0ssZUFBYztJQUNkLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBRXJCO0lBQ0ksV0FBVyxFQUFBO0VBRWY7SUFDRyxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFFckI7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFFckI7SUFDSSxpQkFBaUIsRUFBQSxFQUNwQjs7QUFFTDtFQUNJO0lBQ0ksZUFBYztJQUNkLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBRXJCO0lBQ0EsV0FBVyxFQUFBO0VBR2Y7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFFckI7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFFckI7SUFDSSxpQkFBaUIsRUFBQSxFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvcGxheS1nYW1lL3BsYXktZ2FtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLHRkLHRoLHRyIHtcclxuICAgIHBhZGRpbmc6MC4xcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBcclxufVxyXG4udGFibGUgdGhlYWQgdGh7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbmltZ3tcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDsgXHJcbiAgICB3aWR0aDogNTJweDtcclxufVxyXG5wIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDByZW07XHJcbn1cclxuLmJ0bi1zdWNjZXNze1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxufVxyXG4uYnRuLWRhbmdlcntcclxuICAgIG1hcmdpbi1yaWdodDogMSU7IFxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NjBweCkge1xyXG4gICAgdGFibGUsdGQsdGgsdHIge1xyXG4gICAgICAgICBwYWRkaW5nOjAuMXJlbTtcclxuICAgICAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICAgICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgfVxyXG4gICAgIGltZ3tcclxuICAgICAgICAgd2lkdGg6IDc4cHg7XHJcbiAgICAgfVxyXG4gfVxyXG4gQG1lZGlhIChtYXgtd2lkdGg6IDQxMXB4KSB7XHJcbiAgICB0YWJsZSx0ZCx0aCx0ciB7XHJcbiAgICAgICAgIHBhZGRpbmc6MC4xcmVtO1xyXG4gICAgICAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxuICAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICB9XHJcbiAgICAgaW1ne1xyXG4gICAgICAgICB3aWR0aDogNjFweDtcclxuICAgICB9XHJcbiAgICAgLmJ0bi1pbmZvIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1kYW5nZXIge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLXN1Y2Nlc3Mge1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgfVxyXG4gfVxyXG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgIHRhYmxlLHRkLHRoLHRyIHtcclxuICAgICAgICBwYWRkaW5nOjAuMXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgXHJcbn1cclxuLmJ0bi1pbmZvIHtcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcclxufVxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbn1cclxuLmJ0bi1zdWNjZXNzIHtcclxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG59XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/game/play-game/play-game.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/game/play-game/play-game.component.ts ***!
  \*******************************************************/
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
/* harmony import */ var src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");






var PlayGameComponent = /** @class */ (function () {
    function PlayGameComponent(gameService, router, alertService) {
        this.gameService = gameService;
        this.router = router;
        this.alertService = alertService;
        this.error = '';
        this.gameExisting = false;
        this.haveActiveGame = false;
        this.headBotSteps = ['Cards'];
        this.headBots = ['Bots'];
        this.headPlayerSteps = ['Player name', 'Player cards'];
        this.headElements = ['Number of bots', 'Status', 'Winner', ''];
        this.cardsGame = { rank: 0, suit: 0 };
        this.bots = { name: '', cards: [this.cardsGame] };
        this.player = { name: '', cards: [this.cardsGame] };
        this.playGame = { status: '', winner: '', numberOfBots: 0, player: this.player, bots: [this.bots] };
    }
    PlayGameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameService.getActiveGame()
            .subscribe(function (x) {
            if (x['error']) {
                _this.haveActiveGame = false;
                var errorMessage = { message: 'You havent active games! Play new game.' };
                _this.error = errorMessage.message;
                return _this.error;
            }
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
            return _this.alertService.error(err);
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
            selector: 'app-play-game',
            template: __webpack_require__(/*! ./play-game.component.html */ "./src/app/game/play-game/play-game.component.html"),
            styles: [__webpack_require__(/*! ./play-game.component.scss */ "./src/app/game/play-game/play-game.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], PlayGameComponent);
    return PlayGameComponent;
}());



/***/ }),

/***/ "./src/app/game/root-game/root-game.component.html":
/*!*********************************************************!*\
  !*** ./src/app/game/root-game/root-game.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <nav class=\"col-sm-2 col-md-1 d-none d-sm-block bg-light sidebar\">\n      <ul class=\"nav nav-pills flex-column\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/game/home\">New game</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/game/play\">Active game</a>\n        </li> \n      </ul>\n    </nav> \n    <main role=\"main\" class=\"col-sm-10 ml-sm-5 col-md-11 pt-3\">\n        <router-outlet></router-outlet>\n    </main>      \n</div>\n "

/***/ }),

/***/ "./src/app/game/root-game/root-game.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/game/root-game/root-game.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  position: fixed;\n  top: 51px;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  padding: 20px 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  /* Scrollable contents if viewport is shorter than content. */\n  border-right: 1px solid #eee; }\n\n.sidebar .nav, a {\n  margin-bottom: 7px;\n  color: #343a40; }\n\n.sidebar .nav-item {\n  width: 100%; }\n\n.sidebar .nav-item + .nav-item {\n  margin-left: 0;\n  color: #343a40; }\n\n.sidebar .nav-link {\n  border-radius: 0; }\n\n.nav-pills .nav-link.active, .nav-pills .show > .nav-link {\n  color: white;\n  background-color: #343a40; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9yb290LWdhbWUvQzpcXFVzZXJzXFxBbnVpdGV4LTg0XFxnaXRcXFdlYlxcc291cmNlXFxyZXBvc1xcQmxhY2tKYWNrXFxCbGFja0phY2suV0VCXFxDbGllbnRBcHAvc3JjXFxhcHBcXGdhbWVcXHJvb3QtZ2FtZVxccm9vdC1nYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLFNBQVM7RUFDVCxTQUFTO0VBQ1QsT0FBTztFQUNQLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUFFLDZEQUFBO0VBQ2xCLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsY0FBYztFQUNkLGNBQWUsRUFBQTs7QUFHakI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxZQUF5QjtFQUN6Qix5QkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dhbWUvcm9vdC1nYW1lL3Jvb3QtZ2FtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTFweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBcclxuICB9XHJcbiAgLnNpZGViYXIgLm5hdiAsIGF7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgY29sb3I6ICMzNDNhNDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYtaXRlbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXIgLm5hdi1pdGVtICsgLm5hdi1pdGVtIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgY29sb3I6ICAjMzQzYTQwO1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhciAubmF2LWxpbmsge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbiAgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGlua3tcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzM0M2E0MDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/game/root-game/root-game.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/game/root-game/root-game.component.ts ***!
  \*******************************************************/
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
            selector: 'app-root-game',
            template: __webpack_require__(/*! ./root-game.component.html */ "./src/app/game/root-game/root-game.component.html"),
            styles: [__webpack_require__(/*! ./root-game.component.scss */ "./src/app/game/root-game/root-game.component.scss")]
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
/* harmony import */ var _configs_url_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs/url.config */ "./src/app/shared/configs/url.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var GameService = /** @class */ (function () {
    function GameService(http, configService, router) {
        this.http = http;
        this.configService = configService;
        this.router = router;
        this.baseUrl = '';
        this.baseUrl = configService.getApiURI();
    }
    GameService.prototype.getActiveGame = function () {
        return this.http.get(this.baseUrl + "/game/getActiveGame");
    };
    GameService.prototype.play = function (game) {
        debugger;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set("numberOfBots", game.numberOfBots.toString());
        return this.http.post(this.baseUrl + "/game/playGame?" + params, '');
    };
    GameService.prototype.continue = function (game) {
        debugger;
        return this.http.post(this.baseUrl + "/game/continueGame", game);
    };
    GameService.prototype.end = function (game) {
        debugger;
        return this.http.post(this.baseUrl + "/game/endGame", game);
    };
    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _configs_url_config__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GameService);
    return GameService;
}());



/***/ })

}]);
//# sourceMappingURL=game-game-module.js.map