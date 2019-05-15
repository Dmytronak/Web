(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"],{

/***/ "./src/app/history/history-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/history/history-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HistoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryRoutingModule", function() { return HistoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_games_user_games_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-games/user-games.component */ "./src/app/history/user-games/user-games.component.ts");




var routes = [
    { path: '', component: _user_games_user_games_component__WEBPACK_IMPORTED_MODULE_3__["UserGamesComponent"] },
];
var HistoryRoutingModule = /** @class */ (function () {
    function HistoryRoutingModule() {
    }
    HistoryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HistoryRoutingModule);
    return HistoryRoutingModule;
}());



/***/ }),

/***/ "./src/app/history/history.module.ts":
/*!*******************************************!*\
  !*** ./src/app/history/history.module.ts ***!
  \*******************************************/
/*! exports provided: HistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryModule", function() { return HistoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history-routing.module */ "./src/app/history/history-routing.module.ts");
/* harmony import */ var _user_games_user_games_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-games/user-games.component */ "./src/app/history/user-games/user-games.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






var HistoryModule = /** @class */ (function () {
    function HistoryModule() {
    }
    HistoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_games_user_games_component__WEBPACK_IMPORTED_MODULE_4__["UserGamesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _history_routing_module__WEBPACK_IMPORTED_MODULE_3__["HistoryRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ]
        })
    ], HistoryModule);
    return HistoryModule;
}());



/***/ }),

/***/ "./src/app/history/user-games/user-games.component.html":
/*!**************************************************************!*\
  !*** ./src/app/history/user-games/user-games.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> History of user games</h2>\n<div class=\"tableFixHead\">\n  <div *ngIf=\"showMainTable\">\n      <table>\n          <thead class=\"thead-dark\">\n            <tr>\n              <th scope=\"row\" *ngFor=\"let head of headElements\">{{head}}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let x of historyGames.games | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize\">\n              <td>{{x.numberOfBots}}</td>\n              <td>{{x.status}}</td>\n              <td>{{x.winner}}</td>\n              <td>\n                <button class=\"btn btn-info\" (click)=\"bot(x)\">\n                    <i class=\"fas fa-robot\"></i>\n                </button>\n                <button class=\"btn btn-success\" (click)=\"player(x)\">\n                    <i class=\"fas fa-user\"></i>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <ngb-pagination [collectionSize]=\"listCount\" [(page)]=\"page\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\n  </div>\n  <div *ngIf=\"showPlayerTable\">\n      <table class=\"table\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th *ngFor=\"let head of headPlayerSteps\">{{head}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <td>{{playerSteps.name}}</td>\n          <td colspan=\"\" *ngFor=\"let d of playerSteps.playerSteps\">\n            <img src=\"../../../assets/cards/{{d.rank}}_{{d.suit}}.svg\">\n          </td>\n        </tbody>\n      </table>\n      <button class=\"btn btn-danger\" (click)=\"hideTable()\">\n        <i class=\"fa fa-arrow-left\"></i>\n      </button>\n    </div>\n    <div *ngIf=\"showBotTable\">\n      <table class=\"table\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th *ngFor=\"let head of headBots\">{{head}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let e of allBotSteps.bots\">\n            <td>{{e.name}}</td>\n            <td *ngFor=\"let q of e.steps\">\n              <img src=\"../../../assets/cards/{{q.rank}}_{{q.suit}}.svg\">\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <button class=\"btn btn-danger\" (click)=\"hideTable()\">\n        <i class=\"fa fa-arrow-left\"></i>\n      </button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/history/user-games/user-games.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/history/user-games/user-games.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-collapse: collapse;\n  width: 100%;\n  text-align: center; }\n\nth, td {\n  padding: 0.5%; }\n\nimg {\n  width: 78px; }\n\nth {\n  background: #343a40;\n  color: white; }\n\n::ng-deep .page-item.active .page-link {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #474c52; }\n\n::ng-deep .page-link {\n  color: #343a40; }\n\n::ng-deep .page-link:hover {\n  color: #6b7075; }\n\n::ng-deep .pagination > li > a:focus,\n.pagination > li > a:hover,\n.pagination > li > span:focus,\n.pagination > li > span:hover {\n  box-shadow: 0 0 0 0.2rem rgba(62, 63, 65, 0.25);\n  color: #343a40;\n  border-color: #ddd; }\n\n@media (min-width: 560px) {\n  .tableFixHead {\n    overflow-y: auto;\n    height: 34rem;\n    width: auto;\n    font-size: 1rem; }\n  .tableFixHead th {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    border-top: 0px; }\n  img {\n    width: 78px; }\n  .btn-info {\n    margin-right: 1%;\n    padding: 7px 17px; }\n  .btn-success {\n    padding: 7px 17px; } }\n\n@media (max-width: 411px) {\n  .tableFixHead {\n    overflow-y: auto;\n    height: 25rem;\n    width: auto;\n    font-size: 0.8rem; }\n  .tableFixHead th {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    border-top: 0px; }\n  img {\n    width: 59px; }\n  .btn-info {\n    margin-right: 1%;\n    padding: 7px; }\n  .btn-success {\n    padding: 7px; } }\n\n@media (max-width: 360px) {\n  .tableFixHead {\n    overflow-y: auto;\n    height: 25rem;\n    width: auto;\n    font-size: 0.7rem; }\n  .tableFixHead th {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    border-top: 0px; }\n  img {\n    width: 52px; }\n  .btn-info {\n    margin-right: 1%;\n    padding: 3px; }\n  .btn-success {\n    padding: 3px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS91c2VyLWdhbWVzL0M6XFxVc2Vyc1xcQW51aXRleC04NFxcZ2l0XFxXZWJcXHNvdXJjZVxccmVwb3NcXEJsYWNrSmFja1xcQmxhY2tKYWNrLldFQlxcQ2xpZW50QXBwL3NyY1xcYXBwXFxoaXN0b3J5XFx1c2VyLWdhbWVzXFx1c2VyLWdhbWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBaUIsRUFBQTs7QUFFckI7RUFDSyxhQUFhLEVBQUE7O0FBRWxCO0VBQ0csV0FBVyxFQUFBOztBQUVkO0VBQ0ksbUJBQWtCO0VBQ2xCLFlBQXlCLEVBQUE7O0FBRTdCO0VBQ0csV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUIsRUFBQTs7QUFFeEI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0csY0FBYyxFQUFBOztBQUVqQjs7OztFQUlHLCtDQUErQztFQUMvQyxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3JCO0VBQ0c7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxlQUFlLEVBQUE7RUFFbkI7SUFDSSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixlQUFjLEVBQUE7RUFFaEI7SUFDSSxXQUFXLEVBQUE7RUFFZjtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTtFQUVyQjtJQUNJLGlCQUFpQixFQUFBLEVBQ3BCOztBQUVKO0VBQ0c7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUIsRUFBQTtFQUVyQjtJQUNJLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLGVBQWMsRUFBQTtFQUVqQjtJQUNBLFdBQVcsRUFBQTtFQUVaO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVksRUFBQTtFQUVoQjtJQUNJLFlBQVksRUFBQSxFQUNmOztBQUVKO0VBQ0c7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUIsRUFBQTtFQUVyQjtJQUNJLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLGVBQWMsRUFBQTtFQUVqQjtJQUNBLFdBQVcsRUFBQTtFQUVaO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVksRUFBQTtFQUVoQjtJQUNJLFlBQVksRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvaGlzdG9yeS91c2VyLWdhbWVzL3VzZXItZ2FtZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSAgeyBcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IFxyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxudGgsIHRkIHtcclxuICAgICBwYWRkaW5nOiAwLjUlO1xyXG59XHJcbmltZ3tcclxuICAgd2lkdGg6IDc4cHg7XHJcbn1cclxudGggeyBcclxuICAgIGJhY2tncm91bmQ6IzM0M2E0MDsgXHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyBcclxufVxyXG46Om5nLWRlZXAgLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XHJcbiAgIGNvbG9yOiAjZmZmO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xyXG4gICBib3JkZXItY29sb3I6ICM0NzRjNTI7O1xyXG59XHJcbjo6bmctZGVlcCAucGFnZS1saW5re1xyXG4gICAgY29sb3I6ICMzNDNhNDA7XHJcbiAgIH1cclxuOjpuZy1kZWVwICAucGFnZS1saW5rOmhvdmVyeyBcclxuICAgY29sb3I6ICM2YjcwNzU7XHJcbn1cclxuOjpuZy1kZWVwIC5wYWdpbmF0aW9uID4gbGkgPiBhOmZvY3VzLFxyXG4ucGFnaW5hdGlvbiA+IGxpID4gYTpob3ZlcixcclxuLnBhZ2luYXRpb24gPiBsaSA+IHNwYW46Zm9jdXMsXHJcbi5wYWdpbmF0aW9uID4gbGkgPiBzcGFuOmhvdmVye1xyXG4gICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg2MiwgNjMsIDY1LCAwLjI1KTtcclxuICAgY29sb3I6ICMzNDNhNDA7XHJcbiAgIGJvcmRlci1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU2MHB4KSB7XHJcbiAgIC50YWJsZUZpeEhlYWQgeyBcclxuICAgICAgIG92ZXJmbG93LXk6IGF1dG87IFxyXG4gICAgICAgaGVpZ2h0OiAzNHJlbTtcclxuICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICB9XHJcbiAgIC50YWJsZUZpeEhlYWQgdGggeyBcclxuICAgICAgIHBvc2l0aW9uOiBzdGlja3k7IFxyXG4gICAgICAgdG9wOiAwOyBcclxuICAgICAgIGJvcmRlci10b3A6MHB4O1xyXG4gICB9XHJcbiAgICAgaW1ne1xyXG4gICAgICAgICB3aWR0aDogNzhweDtcclxuICAgICB9XHJcbiAgICAgLmJ0bi1pbmZvIHtcclxuICAgICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICAgICBwYWRkaW5nOiA3cHggMTdweDtcclxuICAgfVxyXG4gICAuYnRuLXN1Y2Nlc3Mge1xyXG4gICAgICAgcGFkZGluZzogN3B4IDE3cHg7XHJcbiAgIH1cclxuIH1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQxMXB4KSB7XHJcbiAgIC50YWJsZUZpeEhlYWQgICAgeyBcclxuICAgICAgIG92ZXJmbG93LXk6IGF1dG87IFxyXG4gICAgICAgaGVpZ2h0OiAyNXJlbTtcclxuICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgIH1cclxuICAgLnRhYmxlRml4SGVhZCB0aCB7IFxyXG4gICAgICAgcG9zaXRpb246IHN0aWNreTsgXHJcbiAgICAgICB0b3A6IDA7IFxyXG4gICAgICAgYm9yZGVyLXRvcDowcHg7XHJcbiAgIH1cclxuICAgIGltZ3tcclxuICAgIHdpZHRoOiA1OXB4O1xyXG4gICB9XHJcbiAgIC5idG4taW5mbyB7XHJcbiAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgICAgcGFkZGluZzogN3B4O1xyXG4gICB9XHJcbiAgIC5idG4tc3VjY2VzcyB7XHJcbiAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgIH1cclxufSBcclxuQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgIC50YWJsZUZpeEhlYWQgICAgeyBcclxuICAgICAgIG92ZXJmbG93LXk6IGF1dG87IFxyXG4gICAgICAgaGVpZ2h0OiAyNXJlbTtcclxuICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgIH1cclxuICAgLnRhYmxlRml4SGVhZCB0aCB7IFxyXG4gICAgICAgcG9zaXRpb246IHN0aWNreTsgXHJcbiAgICAgICB0b3A6IDA7IFxyXG4gICAgICAgYm9yZGVyLXRvcDowcHg7XHJcbiAgIH1cclxuICAgIGltZ3tcclxuICAgIHdpZHRoOiA1MnB4O1xyXG4gICB9XHJcbiAgIC5idG4taW5mbyB7XHJcbiAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgICAgcGFkZGluZzogM3B4O1xyXG4gICB9XHJcbiAgIC5idG4tc3VjY2VzcyB7XHJcbiAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgIH1cclxufSAiXX0= */"

/***/ }),

/***/ "./src/app/history/user-games/user-games.component.ts":
/*!************************************************************!*\
  !*** ./src/app/history/user-games/user-games.component.ts ***!
  \************************************************************/
/*! exports provided: UserGamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGamesComponent", function() { return UserGamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_enums_status_type_enum_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/status-type.enum.view */ "./src/app/shared/enums/status-type.enum.view.ts");
/* harmony import */ var src_app_shared_services_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/history.service */ "./src/app/shared/services/history.service.ts");




var UserGamesComponent = /** @class */ (function () {
    function UserGamesComponent(historyService) {
        this.historyService = historyService;
        this.error = '';
        this.showPlayerTable = false;
        this.showBotTable = false;
        this.showMainTable = true;
        this.email = localStorage.getItem('email');
        this.game = { id: '', numberOfBots: 0, status: '', winner: '' };
        this.historyGames = { email: this.email, games: [this.game] };
        this.playerStepsItem = { rank: 0, suit: 0 };
        this.playerSteps = { gameId: '', name: '', playerSteps: [this.playerStepsItem] };
        this.cards = { rank: 0, suit: 0 };
        this.bots = { name: '', steps: [this.cards] };
        this.allBotSteps = { gameId: '', bots: [this.bots] };
        this.page = 1;
        this.pageSize = 9;
        this.headBotSteps = ['Cards', '', '', ''];
        this.headBots = ['Bot name', 'Steps', '', '', ''];
        this.headPlayerSteps = ['Player name', 'Player steps', '', ''];
        this.headElements = ['Number of bots', 'Status', 'Winner', 'Steps of Bots and players'];
    }
    UserGamesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.historyService.getGamesByUser(this.historyGames).subscribe(function (x) {
            _this.historyGames.games = x['games'];
            _this.listCount = _this.historyGames.games.length;
            _this.historyGames.games.forEach(function (x) {
                x.status = src_app_shared_enums_status_type_enum_view__WEBPACK_IMPORTED_MODULE_2__["Status"][x.status];
            });
        }, function (error) { return error; });
    };
    UserGamesComponent.prototype.bot = function (x) {
        var _this = this;
        this.allBotSteps.gameId = x.id;
        this.historyService.getBotSteps(this.allBotSteps).subscribe(function (x) {
            _this.allBotSteps.bots = x['bots'];
        }, function (error) { return error; });
        this.showBotTable = true;
        this.showPlayerTable = false;
        this.showMainTable = false;
    };
    UserGamesComponent.prototype.player = function (x) {
        var _this = this;
        this.playerSteps.gameId = x.id;
        this.historyService.getPlayerSteps(this.playerSteps).subscribe(function (x) {
            _this.playerSteps.name = x['name'];
            _this.playerSteps.playerSteps = x['playerSteps'];
        }, function (error) { return error; });
        this.showPlayerTable = true;
        this.showBotTable = false;
        this.showMainTable = false;
    };
    UserGamesComponent.prototype.hideTable = function () {
        this.showPlayerTable = false;
        this.showBotTable = false;
        this.showMainTable = true;
        this.playerSteps.playerSteps = null;
        this.allBotSteps.bots = null;
    };
    UserGamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-games',
            template: __webpack_require__(/*! ./user-games.component.html */ "./src/app/history/user-games/user-games.component.html"),
            styles: [__webpack_require__(/*! ./user-games.component.scss */ "./src/app/history/user-games/user-games.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"]])
    ], UserGamesComponent);
    return UserGamesComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/history.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/history.service.ts ***!
  \****************************************************/
/*! exports provided: HistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryService", function() { return HistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/url.config */ "./src/app/shared/configs/url.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HistoryService = /** @class */ (function () {
    function HistoryService(http, configService, router) {
        this.http = http;
        this.configService = configService;
        this.router = router;
        this.baseUrl = '';
        this.baseUrl = configService.getApiURI();
    }
    HistoryService.prototype.getGamesByUser = function (history) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("email", history.email);
        return this.http.get(this.baseUrl + "/history/allUserGames", { params: params });
    };
    HistoryService.prototype.getPlayerSteps = function (history) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("gameId", history.gameId);
        return this.http.get(this.baseUrl + "/history/playerSteps", { params: params });
    };
    HistoryService.prototype.getBotSteps = function (history) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("gameId", history.gameId);
        return this.http.get(this.baseUrl + "/history/botSteps", { params: params });
    };
    HistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _configs_url_config__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HistoryService);
    return HistoryService;
}());



/***/ })

}]);
//# sourceMappingURL=history-history-module.js.map