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

module.exports = ".sidebar {\n  position: fixed;\n  top: 51px;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  padding: 20px 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  /* Scrollable contents if viewport is shorter than content. */\n  border-right: 1px solid #eee; }\n\n.sidebar .nav, a {\n  margin-bottom: 7px;\n  color: #343a40; }\n\n.sidebar .nav-item {\n  width: 100%; }\n\n.sidebar .nav-item + .nav-item {\n  margin-left: 0;\n  color: #343a40; }\n\n.sidebar .nav-link {\n  border-radius: 0; }\n\n.nav-pills .nav-link.active, .nav-pills .show > .nav-link {\n  color: white;\n  background-color: #343a40; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9EOlxcV29ya1xcYW51aXRleFxcV2ViXFxzb3VyY2VcXHJlcG9zXFxCbGFja0phY2tcXEJsYWNrSmFjay5XRUJcXENsaWVudEFwcC9zcmNcXGFwcFxcZ2FtZVxcZ2FtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixTQUFTO0VBQ1QsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFBRSw2REFBQTtFQUNsQiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWM7RUFDZCxjQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsWUFBeUI7RUFDekIseUJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2dhbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTFweDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bzsgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xuICAgIFxuICB9XG4gIC5zaWRlYmFyIC5uYXYgLCBheyBcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgY29sb3I6ICMzNDNhNDA7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIC5uYXYtaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIC5uYXYtaXRlbSArIC5uYXYtaXRlbSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgY29sb3I6ICAjMzQzYTQwO1xuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWxpbmsge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGlua3tcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICAjMzQzYTQwO1xuICB9Il19 */"

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

module.exports = "<div>\n    <div style=\"width: fit-content; margin-bottom: 7px;\">\n        <h3>Select number of bots</h3>\n        <ng-select \n        [items]=\"itemsForSelect\"\n        (data)=\"getNumberOfBots($event)\"\n        placeholder=\"Choose a number\">\n        </ng-select>\n      </div>\n    <div class=\"playGameForm\" *ngIf=\"activeStatus===0\">\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"play()\">Play Game</button>\n    </div>\n    <div *ngIf=\"activeStatus===1\">\n            <button class=\"btn btn-success\" (click)=\"continueActiveGame()\">Continue active</button>\n        </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/game/pages/home-page/home-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/game/pages/home-page/home-page.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin-bottom: 0.4rem; }\n\n.ui-select-choices.dropdown-menu {\n  display: block; }\n\n.text-muted {\n  color: white !important; }\n\n.form-control:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #343a40;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(109, 109, 109, 0.897); }\n\n.ui-select-choices-row.active > a {\n  color: #fff !important;\n  text-decoration: none;\n  outline: 0;\n  background-color: #343a40 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9wYWdlcy9ob21lLXBhZ2UvRDpcXFdvcmtcXGFudWl0ZXhcXFdlYlxcc291cmNlXFxyZXBvc1xcQmxhY2tKYWNrXFxCbGFja0phY2suV0VCXFxDbGllbnRBcHAvc3JjXFxhcHBcXGdhbWVcXHBhZ2VzXFxob21lLXBhZ2VcXGhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSx1QkFBdUIsRUFBQTs7QUFFM0I7RUFDSSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsbURBQW1ELEVBQUE7O0FBR3ZEO0VBQ0ksc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1Ysb0NBQW9DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9nYW1lL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xuICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcbn1cbi51aS1zZWxlY3QtY2hvaWNlcy5kcm9wZG93bi1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi50ZXh0LW11dGVkIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5mb3JtLWNvbnRyb2w6Zm9jdXN7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICMzNDNhNDA7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMDksIDEwOSwgMTA5LCAwLjg5Nyk7XG5cbn1cbi51aS1zZWxlY3QtY2hvaWNlcy1yb3cuYWN0aXZlID5hIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDAgIWltcG9ydGFudDtcbn0iXX0= */"

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
        _this.itemsForSelect = [{ id: 1, text: '1' }, { id: 2, text: '2' }, { id: 3, text: '3' }, { id: 4, text: '4' }, { id: 5, text: '5' }];
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
            _this.activeStatus = 1;
        }, function (error) {
            _this.activeStatus = 0;
        });
    };
    HomeGameComponent.prototype.continueActiveGame = function () {
        this.router.navigate(["/game/play"]);
    };
    HomeGameComponent.prototype.play = function () {
        var _this = this;
        debugger;
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

module.exports = "<div *ngIf=\"haveActiveGame\">\n    <div class=\"row\">\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <th colspan=\"6\">New Game</th>\n                </tr>\n                <tr>\n                    <th>\n                        <label *ngIf=\"activeStatus===0\">Game status : {{convertStatusToString(playGameView.status)}}</label>\n                        <label *ngIf=\"activeStatus===1\">Game status : {{convertStatusToString(continueGameView.status)}}</label>\n                        <label *ngIf=\"activeStatus===3\">Game status : {{convertStatusToString(endGameView.status)}}\n                        </label>\n                    </th>\n                    <th>\n                        <label *ngIf=\"activeStatus===0\">Winner : {{ playGameView.winner }} </label>\n                        <label *ngIf=\"activeStatus===1\">Winner : {{ continueGameView.winner }} </label>\n                        <label *ngIf=\"activeStatus===3\">Winner : {{ endGameView.winner }} </label>\n\n                    </th>\n                    <th>\n                        <div *ngIf=\"game\">\n                            <button class=\"btn btn-success\" (click)=\"continue()\"><i class=\"fas fa-plus\"></i></button>\n                            <button class=\"btn btn-danger\" (click)=\"end()\"><i class=\"fas fa-times\"></i></button>\n                            <button class=\"btn btn-info\" (click)=\"backToHome()\"><i\n                                    class=\"fa fa-arrow-left\"></i></button>\n                        </div>\n                        <div *ngIf=\"!game\">\n                            <button class=\"btn btn-primary\" (click)=\"playAgain()\">Play again with the same parametrs?</button>\n                            <button class=\"btn btn-info\" (click)=\"backToHome()\"><i\n                                    class=\"fa fa-arrow-left\"></i></button>\n                        </div>\n                    </th>\n                </tr>\n            </thead>\n        </table>\n        <div>\n        </div>\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n                <th *ngFor=\"let head of headPlayerSteps\">{{head}}</th>\n                <th colspan=\"4\"></th>\n            </thead>\n            <tbody>\n                <tr>\n                    <th *ngIf=\"activeStatus===0\">{{ playGameView.player.status }}</th>\n                    <th *ngIf=\"activeStatus===1\">{{ continueGameView.player.status }}</th>\n                    <th *ngIf=\"activeStatus===3\">{{ endGameView.player.status }}</th>\n                    <td *ngIf=\"activeStatus===0\">\n                <tr *ngFor=\"let step of playGameView.player.cards\">\n                    <img [src]=\"getCardLink(step)\">\n                </tr>\n                </td>\n                <td *ngIf=\"activeStatus===1\">\n                    <tr *ngFor=\"let step of continueGameView.player.cards\">\n                        <img [src]=\"getCardLink(step)\">\n                    </tr>\n                </td>\n                <td *ngIf=\"activeStatus===3\">\n                    <tr *ngFor=\"let step of endGameView.player.cards\">\n                      <img [src]=\"getCardLink(step)\">\n                    </tr>\n                </td>\n                </tr>\n            </tbody>\n            <thead class=\"thead-dark\">\n                <th colspan=\"8\" *ngFor=\"let head of headBots\">{{head}}</th>\n            </thead>\n            <thead class=\"thead-dark\" *ngIf=\"activeStatus===0\">\n                <th *ngFor=\"let bot of playGameView.bots\">{{bot.name}}</th>\n                <th colspan=\"8\"></th>\n            </thead>\n            <thead class=\"thead-dark\" *ngIf=\"activeStatus===1\">\n                <th *ngFor=\"let bot of continueGameView.bots\">{{bot.name}}</th>\n                <th colspan=\"8\"></th>\n            </thead>\n            <thead class=\"thead-dark\" *ngIf=\"activeStatus===3\">\n                <th *ngFor=\"let bot of endGameView.bots\">{{bot.name}}</th>\n                <th colspan=\"8\"></th>\n            </thead>\n\n            <tbody *ngIf=\"activeStatus===0\">\n                <td *ngFor=\"let bot of playGameView.bots\">\n                    <tr *ngFor=\"let step of bot.cards\">\n                      <img [src]=\"getCardLink(step)\">\n                    </tr>\n                </td>\n            </tbody>\n            <tbody *ngIf=\"activeStatus===1\">\n                <td *ngFor=\"let bot of continueGameView.bots\">\n                    <tr *ngFor=\"let step of bot.cards\">\n                        <img [src]=\"getCardLink(step)\">\n                    </tr>\n                </td>\n            </tbody>\n            <tbody *ngIf=\"activeStatus===3\">\n                <td *ngFor=\"let bot of endGameView.bots\">\n                    <tr *ngFor=\"let step of bot.cards\">\n                        <img [src]=\"getCardLink(step)\">\n                    </tr>\n                </td>\n            </tbody>\n        </table>\n    </div>\n</div>\n<div *ngIf=\"!haveActiveGame\">\n    <p><label>Back to home : </label></p>\n    <button class=\"btn btn-success\" (click)=\"backToHome()\"><i class=\"fa fa-arrow-left\"></i></button>\n</div>"

/***/ }),

/***/ "./src/app/game/pages/play-page/play-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/game/pages/play-page/play-page.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, td, th, tr {\n  padding: 0.1rem;\n  text-align: -webkit-center;\n  margin-bottom: auto;\n  min-width: auto;\n  font-size: 0.7rem; }\n\n.table thead th {\n  vertical-align: middle; }\n\nimg {\n  margin-bottom: 3px;\n  margin-top: 3px;\n  width: 52px; }\n\np {\n  margin-bottom: 0rem; }\n\n.btn-success {\n  margin-right: 1%; }\n\n.btn-danger {\n  margin-right: 1%; }\n\n@media (min-width: 560px) {\n  table, td, th, tr {\n    padding: 0.1rem;\n    text-align: -webkit-center;\n    margin-bottom: auto;\n    min-width: auto;\n    font-size: 0.9rem; }\n  img {\n    width: 78px; } }\n\n@media (max-width: 411px) {\n  table, td, th, tr {\n    padding: 0.1rem;\n    text-align: -webkit-center;\n    margin-bottom: auto;\n    min-width: auto;\n    font-size: 0.7rem; }\n  img {\n    width: 61px; }\n  .btn-info {\n    margin-right: 1%;\n    padding: 6px 10px; }\n  .btn-danger {\n    margin-right: 1%;\n    padding: 6px 10px; }\n  .btn-success {\n    padding: 6px 10px; } }\n\n@media (max-width: 320px) {\n  table, td, th, tr {\n    padding: 0.1rem;\n    text-align: -webkit-center;\n    margin-bottom: auto;\n    min-width: auto;\n    font-size: 0.6rem; }\n  img {\n    width: 52px; }\n  .btn-info {\n    margin-right: 1%;\n    padding: 3px 10px; }\n  .btn-danger {\n    margin-right: 1%;\n    padding: 3px 10px; }\n  .btn-success {\n    padding: 3px 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9wYWdlcy9wbGF5LXBhZ2UvRDpcXFdvcmtcXGFudWl0ZXhcXFdlYlxcc291cmNlXFxyZXBvc1xcQmxhY2tKYWNrXFxCbGFja0phY2suV0VCXFxDbGllbnRBcHAvc3JjXFxhcHBcXGdhbWVcXHBhZ2VzXFxwbGF5LXBhZ2VcXHBsYXktcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWM7RUFDZCwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFZjtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJO0lBQ0ssZUFBYztJQUNkLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBRXJCO0lBQ0ksV0FBVyxFQUFBLEVBQ2Q7O0FBRUw7RUFDRztJQUNLLGVBQWM7SUFDZCwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtFQUVyQjtJQUNJLFdBQVcsRUFBQTtFQUVmO0lBQ0csZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBRXJCO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBRXJCO0lBQ0ksaUJBQWlCLEVBQUEsRUFDcEI7O0FBRUw7RUFDSTtJQUNJLGVBQWM7SUFDZCwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtFQUVyQjtJQUNBLFdBQVcsRUFBQTtFQUdmO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBRXJCO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBRXJCO0lBQ0ksaUJBQWlCLEVBQUEsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9nYW1lL3BhZ2VzL3BsYXktcGFnZS9wbGF5LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSx0ZCx0aCx0ciB7XG4gICAgcGFkZGluZzowLjFyZW07XG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgXG59XG4udGFibGUgdGhlYWQgdGh7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbmltZ3tcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgbWFyZ2luLXRvcDogM3B4OyBcbiAgICB3aWR0aDogNTJweDtcbn1cbnAge1xuICAgIG1hcmdpbi1ib3R0b206IDByZW07XG59XG4uYnRuLXN1Y2Nlc3N7XG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcbn1cbi5idG4tZGFuZ2Vye1xuICAgIG1hcmdpbi1yaWdodDogMSU7IFxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2MHB4KSB7XG4gICAgdGFibGUsdGQsdGgsdHIge1xuICAgICAgICAgcGFkZGluZzowLjFyZW07XG4gICAgICAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgfVxuICAgICBpbWd7XG4gICAgICAgICB3aWR0aDogNzhweDtcbiAgICAgfVxuIH1cbiBAbWVkaWEgKG1heC13aWR0aDogNDExcHgpIHtcbiAgICB0YWJsZSx0ZCx0aCx0ciB7XG4gICAgICAgICBwYWRkaW5nOjAuMXJlbTtcbiAgICAgICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICB9XG4gICAgIGltZ3tcbiAgICAgICAgIHdpZHRoOiA2MXB4O1xuICAgICB9XG4gICAgIC5idG4taW5mbyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMSU7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgIH1cbiAgICAuYnRuLWRhbmdlciB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMSU7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgIH1cbiAgICAuYnRuLXN1Y2Nlc3Mge1xuICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICB9XG4gfVxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgdGFibGUsdGQsdGgsdHIge1xuICAgICAgICBwYWRkaW5nOjAuMXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgfVxuICAgIGltZ3tcbiAgICB3aWR0aDogNTJweDtcbiAgICBcbn1cbi5idG4taW5mbyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcbn1cbi5idG4tZGFuZ2VyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xufVxuLmJ0bi1zdWNjZXNzIHtcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcbn1cbn0iXX0= */"

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






var PlayGameComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PlayGameComponent, _super);
    function PlayGameComponent(gameService, router) {
        var _this = _super.call(this) || this;
        _this.gameService = gameService;
        _this.router = router;
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
            _this.activeStatus = 0;
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
            _this.activeStatus = 1;
            _this.continueGameView = continueGameView;
        });
    };
    PlayGameComponent.prototype.end = function () {
        var _this = this;
        this.gameService.end()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (endGameView) {
            _this.game = false;
            _this.activeStatus = 3;
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
            _this.activeStatus = 0;
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