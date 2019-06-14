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
/* harmony import */ var _history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history.component */ "./src/app/history/history.component.ts");




var routes = [
    { path: '', component: _history_component__WEBPACK_IMPORTED_MODULE_3__["HistoryComponent"] },
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

/***/ "./src/app/history/history.component.html":
/*!************************************************!*\
  !*** ./src/app/history/history.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-games-page></app-games-page>"

/***/ }),

/***/ "./src/app/history/history.component.scss":
/*!************************************************!*\
  !*** ./src/app/history/history.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/history/history.component.ts":
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HistoryComponent = /** @class */ (function () {
    function HistoryComponent() {
    }
    HistoryComponent.prototype.ngOnInit = function () {
    };
    HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.scss */ "./src/app/history/history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HistoryComponent);
    return HistoryComponent;
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
/* harmony import */ var _pages_games_page_games_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/games-page/games-page.component */ "./src/app/history/pages/games-page/games-page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.component */ "./src/app/history/history.component.ts");







var HistoryModule = /** @class */ (function () {
    function HistoryModule() {
    }
    HistoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_games_page_games_page_component__WEBPACK_IMPORTED_MODULE_4__["UserGamesComponent"], _history_component__WEBPACK_IMPORTED_MODULE_6__["HistoryComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _history_routing_module__WEBPACK_IMPORTED_MODULE_3__["HistoryRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]]
        })
    ], HistoryModule);
    return HistoryModule;
}());



/***/ }),

/***/ "./src/app/history/pages/games-page/games-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/history/pages/games-page/games-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> History of user games</h2>\r\n<form>\r\n  <div class=\"form-group form-inline\">\r\n    History search: <input class=\"form-control ml-2\" type=\"text\" [formControl]=\"filter\" />\r\n  </div>\r\n</form>\r\n<div class=\"tableFixHead\">\r\n  <div [hidden]=\"!showMainTable\">\r\n   \r\n        <table>\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\" *ngFor=\"let head of headElements\">{{head}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let x of games | async\">\r\n                <td>\r\n                  <ngb-highlight [result]=\"x.numberOfBots | number\" [term]=\"filter.value\"></ngb-highlight>\r\n                </td>\r\n                <td>\r\n                  <ngb-highlight [result]=\"x.status\" [term]=\"filter.value\"></ngb-highlight>\r\n                </td>\r\n                <td>\r\n                  <ngb-highlight [result]=\"x.winner\" [term]=\"filter.value\"></ngb-highlight>\r\n                </td>\r\n                <td>\r\n                  <button class=\"btn btn-info\" (click)=\"bot(x)\">\r\n                    <i class=\"fas fa-robot\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-success\" (click)=\"player(x)\">\r\n                    <i class=\"fas fa-user\"></i>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <ngb-pagination [collectionSize]=\"listCount | async\" [(page)]=\"page\" [pageSize]=\"pageSize\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n  </div>\r\n  <div *ngIf=\"showPlayerTable\">\r\n    <table class=\"table\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th *ngFor=\"let head of headPlayerSteps\">{{head}}</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <td>{{(playerSteps | async)?.name}}</td>\r\n        <td colspan=\"\" *ngFor=\"let d of (playerSteps | async)?.steps\">\r\n          <img src=\"../../../assets/cards/{{d.rank}}_{{d.suit}}.svg\">\r\n        </td>\r\n      </tbody>\r\n    </table>\r\n    <button class=\"btn btn-danger\" (click)=\"hideTable()\">\r\n      <i class=\"fa fa-arrow-left\"></i>\r\n    </button>\r\n  </div>\r\n  <div *ngIf=\"showBotTable\">\r\n    <table class=\"table\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th *ngFor=\"let head of headBots\">{{head}}</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let e of (botSteps | async)?.bots\">\r\n          <td>{{e.name}}</td>\r\n          <td *ngFor=\"let q of e.steps\">\r\n            <img src=\"../../../assets/cards/{{q.rank}}_{{q.suit}}.svg\">\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <button class=\"btn btn-danger\" (click)=\"hideTable()\">\r\n      <i class=\"fa fa-arrow-left\"></i>\r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/history/pages/games-page/games-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/history/pages/games-page/games-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-collapse: collapse;\n  width: 100%;\n  text-align: center; }\n\nth, td {\n  padding: 0.5%; }\n\nimg {\n  width: 78px; }\n\nth {\n  background: #343a40;\n  color: white; }\n\n::ng-deep .page-item.active .page-link {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #474c52; }\n\n::ng-deep .page-link {\n  color: #343a40; }\n\n::ng-deep .page-link:hover {\n  color: #6b7075; }\n\n::ng-deep .pagination > li > a:focus,\n.pagination > li > a:hover,\n.pagination > li > span:focus,\n.pagination > li > span:hover {\n  box-shadow: 0 0 0 0.2rem rgba(62, 63, 65, 0.25);\n  color: #343a40;\n  border-color: #ddd; }\n\n@media (min-width: 560px) {\n  .tableFixHead {\n    overflow-y: auto;\n    height: 34rem;\n    width: auto;\n    font-size: 1rem; }\n  .tableFixHead th {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    border-top: 0px; }\n  img {\n    width: 78px; }\n  .btn-info {\n    margin-right: 1%;\n    padding: 7px 17px; }\n  .btn-success {\n    padding: 7px 17px; } }\n\n@media (max-width: 411px) {\n  .tableFixHead {\n    overflow-y: auto;\n    height: 25rem;\n    width: auto;\n    font-size: 0.8rem; }\n  .tableFixHead th {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    border-top: 0px; }\n  img {\n    width: 59px; }\n  .btn-info {\n    margin-right: 1%;\n    padding: 7px; }\n  .btn-success {\n    padding: 7px; } }\n\n@media (max-width: 360px) {\n  .tableFixHead {\n    overflow-y: auto;\n    height: 25rem;\n    width: auto;\n    font-size: 0.7rem; }\n  .tableFixHead th {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    border-top: 0px; }\n  img {\n    width: 52px; }\n  .btn-info {\n    margin-right: 1%;\n    padding: 3px; }\n  .btn-success {\n    padding: 3px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS9wYWdlcy9nYW1lcy1wYWdlL0M6XFxVc2Vyc1xcQW51aXRleC04NFxcZ2l0XFxXZWJcXHNvdXJjZVxccmVwb3NcXEJsYWNrSmFja1xcQmxhY2tKYWNrLldFQlxcQ2xpZW50QXBwL3NyY1xcYXBwXFxoaXN0b3J5XFxwYWdlc1xcZ2FtZXMtcGFnZVxcZ2FtZXMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWlCLEVBQUE7O0FBRXJCO0VBQ0ssYUFBYSxFQUFBOztBQUVsQjtFQUNHLFdBQVcsRUFBQTs7QUFFZDtFQUNJLG1CQUFrQjtFQUNsQixZQUF5QixFQUFBOztBQUU3QjtFQUNHLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCLEVBQUE7O0FBRXhCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNHLGNBQWMsRUFBQTs7QUFFakI7Ozs7RUFJRywrQ0FBK0M7RUFDL0MsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUdyQjtFQUNHO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0lBQ1gsZUFBZSxFQUFBO0VBRW5CO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sZUFBYyxFQUFBO0VBRWhCO0lBQ0ksV0FBVyxFQUFBO0VBRWY7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFFckI7SUFDSSxpQkFBaUIsRUFBQSxFQUNwQjs7QUFFSjtFQUNHO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCLEVBQUE7RUFFckI7SUFDSSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixlQUFjLEVBQUE7RUFFakI7SUFDQSxXQUFXLEVBQUE7RUFFWjtJQUNJLGdCQUFnQjtJQUNoQixZQUFZLEVBQUE7RUFFaEI7SUFDSSxZQUFZLEVBQUEsRUFDZjs7QUFFSjtFQUNHO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCLEVBQUE7RUFFckI7SUFDSSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixlQUFjLEVBQUE7RUFFakI7SUFDQSxXQUFXLEVBQUE7RUFFWjtJQUNJLGdCQUFnQjtJQUNoQixZQUFZLEVBQUE7RUFFaEI7SUFDSSxZQUFZLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnkvcGFnZXMvZ2FtZXMtcGFnZS9nYW1lcy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUgIHsgXHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyBcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbnRoLCB0ZCB7XHJcbiAgICAgcGFkZGluZzogMC41JTtcclxufVxyXG5pbWd7XHJcbiAgIHdpZHRoOiA3OHB4O1xyXG59XHJcbnRoIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiMzNDNhNDA7IFxyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgXHJcbn1cclxuOjpuZy1kZWVwIC5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xyXG4gICBjb2xvcjogI2ZmZjtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcclxuICAgYm9yZGVyLWNvbG9yOiAjNDc0YzUyOztcclxufVxyXG46Om5nLWRlZXAgLnBhZ2UtbGlua3tcclxuICAgIGNvbG9yOiAjMzQzYTQwO1xyXG4gICB9XHJcbjo6bmctZGVlcCAgLnBhZ2UtbGluazpob3ZlcnsgXHJcbiAgIGNvbG9yOiAjNmI3MDc1O1xyXG59XHJcbjo6bmctZGVlcCAucGFnaW5hdGlvbiA+IGxpID4gYTpmb2N1cyxcclxuLnBhZ2luYXRpb24gPiBsaSA+IGE6aG92ZXIsXHJcbi5wYWdpbmF0aW9uID4gbGkgPiBzcGFuOmZvY3VzLFxyXG4ucGFnaW5hdGlvbiA+IGxpID4gc3Bhbjpob3ZlcntcclxuICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNjIsIDYzLCA2NSwgMC4yNSk7XHJcbiAgIGNvbG9yOiAjMzQzYTQwO1xyXG4gICBib3JkZXItY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NjBweCkge1xyXG4gICAudGFibGVGaXhIZWFkIHsgXHJcbiAgICAgICBvdmVyZmxvdy15OiBhdXRvOyBcclxuICAgICAgIGhlaWdodDogMzRyZW07XHJcbiAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgfVxyXG4gICAudGFibGVGaXhIZWFkIHRoIHsgXHJcbiAgICAgICBwb3NpdGlvbjogc3RpY2t5OyBcclxuICAgICAgIHRvcDogMDsgXHJcbiAgICAgICBib3JkZXItdG9wOjBweDtcclxuICAgfVxyXG4gICAgIGltZ3tcclxuICAgICAgICAgd2lkdGg6IDc4cHg7XHJcbiAgICAgfVxyXG4gICAgIC5idG4taW5mbyB7XHJcbiAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgICAgcGFkZGluZzogN3B4IDE3cHg7XHJcbiAgIH1cclxuICAgLmJ0bi1zdWNjZXNzIHtcclxuICAgICAgIHBhZGRpbmc6IDdweCAxN3B4O1xyXG4gICB9XHJcbiB9XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MTFweCkge1xyXG4gICAudGFibGVGaXhIZWFkICAgIHsgXHJcbiAgICAgICBvdmVyZmxvdy15OiBhdXRvOyBcclxuICAgICAgIGhlaWdodDogMjVyZW07XHJcbiAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICB9XHJcbiAgIC50YWJsZUZpeEhlYWQgdGggeyBcclxuICAgICAgIHBvc2l0aW9uOiBzdGlja3k7IFxyXG4gICAgICAgdG9wOiAwOyBcclxuICAgICAgIGJvcmRlci10b3A6MHB4O1xyXG4gICB9XHJcbiAgICBpbWd7XHJcbiAgICB3aWR0aDogNTlweDtcclxuICAgfVxyXG4gICAuYnRuLWluZm8ge1xyXG4gICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgfVxyXG4gICAuYnRuLXN1Y2Nlc3Mge1xyXG4gICAgICAgcGFkZGluZzogN3B4O1xyXG4gICB9XHJcbn0gXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAudGFibGVGaXhIZWFkICAgIHsgXHJcbiAgICAgICBvdmVyZmxvdy15OiBhdXRvOyBcclxuICAgICAgIGhlaWdodDogMjVyZW07XHJcbiAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICB9XHJcbiAgIC50YWJsZUZpeEhlYWQgdGggeyBcclxuICAgICAgIHBvc2l0aW9uOiBzdGlja3k7IFxyXG4gICAgICAgdG9wOiAwOyBcclxuICAgICAgIGJvcmRlci10b3A6MHB4O1xyXG4gICB9XHJcbiAgICBpbWd7XHJcbiAgICB3aWR0aDogNTJweDtcclxuICAgfVxyXG4gICAuYnRuLWluZm8ge1xyXG4gICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgfVxyXG4gICAuYnRuLXN1Y2Nlc3Mge1xyXG4gICAgICAgcGFkZGluZzogM3B4O1xyXG4gICB9XHJcbn0gIl19 */"

/***/ }),

/***/ "./src/app/history/pages/games-page/games-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/history/pages/games-page/games-page.component.ts ***!
  \******************************************************************/
/*! exports provided: UserGamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGamesComponent", function() { return UserGamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_enums_status_type_enum_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/status-type.enum.view */ "./src/app/shared/enums/status-type.enum.view.ts");
/* harmony import */ var src_app_shared_services_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/history.service */ "./src/app/shared/services/history.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var UserGamesComponent = /** @class */ (function () {
    function UserGamesComponent(historyService, pipe) {
        this.historyService = historyService;
        this.pipe = pipe;
        this.tableState = { page: 1, pageSize: 8 };
        this.showPlayerTable = false;
        this.showBotTable = false;
        this.showMainTable = true;
        this.searchOnTable = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.componetDestroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.listCount = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](0);
        this.headBotSteps = ['Cards', '', '', ''];
        this.headBots = ['Bot name', 'Steps', '', '', '', ''];
        this.headPlayerSteps = ['Player name', 'Player steps', '', '', '', ''];
        this.headElements = ['Number of bots', 'Status', 'Winner', 'Steps of Bots and players'];
        this.filter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
    }
    Object.defineProperty(UserGamesComponent.prototype, "page", {
        get: function () { return this.tableState.page; },
        set: function (page) { this.pagination({ page: page }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserGamesComponent.prototype, "pageSize", {
        get: function () { return this.tableState.pageSize; },
        set: function (pageSize) { this.pagination({ pageSize: pageSize }); },
        enumerable: true,
        configurable: true
    });
    UserGamesComponent.prototype.ngOnInit = function () {
        this.initTable();
    };
    UserGamesComponent.prototype.initTable = function () {
        var _this = this;
        this.historyService.getGamesByUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (x) {
            x.games.forEach(function (x) {
                x.status = src_app_shared_enums_status_type_enum_view__WEBPACK_IMPORTED_MODULE_2__["Status"][x.status];
            });
            _this.getAllGamesHistory = x;
            _this.games = _this.filterOfTable();
        });
    };
    UserGamesComponent.prototype.filterOfTable = function () {
        var _this = this;
        return this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this.filter.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (text) { return _this.search(text, _this.pipe); }));
    };
    UserGamesComponent.prototype.search = function (text, pipe) {
        var result = this.getAllGamesHistory.games.filter(function (x) {
            var term = text.toLowerCase();
            return x.status.toLowerCase().includes(term)
                || pipe.transform(x.numberOfBots).includes(term)
                || x.winner.toLowerCase().includes(term);
        });
        this.listCount = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](result.length);
        var response = result.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
        return response;
    };
    UserGamesComponent.prototype.pagination = function (patch) {
        Object.assign(this.tableState, patch);
        this.searchOnTable.next();
        this.games = this.filterOfTable();
    };
    UserGamesComponent.prototype.bot = function (id) {
        this.botSteps = this.historyService.getBotSteps(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.componetDestroyed));
        this.botSteps.subscribe();
        this.showBotTable = true;
        this.showPlayerTable = false;
        this.showMainTable = false;
    };
    UserGamesComponent.prototype.player = function (id) {
        this.playerSteps = this.historyService.getPlayerSteps(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.componetDestroyed));
        this.playerSteps.subscribe();
        this.showPlayerTable = true;
        this.showBotTable = false;
        this.showMainTable = false;
    };
    UserGamesComponent.prototype.hideTable = function () {
        this.showPlayerTable = false;
        this.showBotTable = false;
        this.showMainTable = true;
    };
    UserGamesComponent.prototype.ngOnDestroy = function () {
        this.componetDestroyed.next(true);
    };
    UserGamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-games-page',
            template: __webpack_require__(/*! ./games-page.component.html */ "./src/app/history/pages/games-page/games-page.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]],
            styles: [__webpack_require__(/*! ./games-page.component.scss */ "./src/app/history/pages/games-page/games-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]])
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var HistoryService = /** @class */ (function () {
    function HistoryService(http) {
        this.http = http;
        this.baseUrl = '';
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    HistoryService.prototype.getGamesByUser = function () {
        return this.http.get(this.baseUrl + "/history/allUserGames");
    };
    HistoryService.prototype.getPlayerSteps = function (x) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("gameId", x.id);
        return this.http.get(this.baseUrl + "/history/playerSteps", { params: params });
    };
    HistoryService.prototype.getBotSteps = function (x) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("gameId", x.id);
        return this.http.get(this.baseUrl + "/history/botSteps", { params: params });
    };
    HistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HistoryService);
    return HistoryService;
}());



/***/ })

}]);
//# sourceMappingURL=history-history-module.js.map