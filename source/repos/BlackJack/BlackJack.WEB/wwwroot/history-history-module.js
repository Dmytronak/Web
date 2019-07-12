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
    HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.scss */ "./src/app/history/history.component.scss")]
        })
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
/* harmony import */ var _pages_games_detail_page_games_detail_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/games-detail-page/games-detail-page.component */ "./src/app/history/pages/games-detail-page/games-detail-page.component.ts");








var historyComponents = [_pages_games_page_games_page_component__WEBPACK_IMPORTED_MODULE_4__["UserGamesComponent"], _history_component__WEBPACK_IMPORTED_MODULE_6__["HistoryComponent"], _pages_games_detail_page_games_detail_page_component__WEBPACK_IMPORTED_MODULE_7__["GamesDetailPageComponent"]];
var HistoryModule = /** @class */ (function () {
    function HistoryModule() {
    }
    HistoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: historyComponents.slice(),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _history_routing_module__WEBPACK_IMPORTED_MODULE_3__["HistoryRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ],
            entryComponents: [_pages_games_detail_page_games_detail_page_component__WEBPACK_IMPORTED_MODULE_7__["GamesDetailPageComponent"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]]
        })
    ], HistoryModule);
    return HistoryModule;
}());



/***/ }),

/***/ "./src/app/history/pages/games-detail-page/games-detail-page.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/history/pages/games-detail-page/games-detail-page.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Details of game</h4>\n</div>\n<div class=\"modal-body\">\n  <div *ngIf=\"playerSteps\">\n    <table class=\"table\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th *ngFor=\"let head of headPlayerSteps\">{{head}}</th>\n        </tr>\n      </thead>\n      <tbody>\n        <td>{{playerSteps.name}}</td>\n        <td colspan=\"\" *ngFor=\"let step of playerSteps.steps\">\n          <img [src]=\"getCardLink(step)\">\n        </td>\n      </tbody>\n    </table>\n  </div>\n  <div *ngIf=\"botSteps\">\n    <table class=\"table\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th *ngFor=\"let head of headBots\">{{head}}</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let botStep of botSteps.bots\">\n          <td>{{botStep.name}}</td>\n          <td *ngFor=\"let step of botStep.steps\">\n            <img [src]=\"getCardLink(step)\">\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>"

/***/ }),

/***/ "./src/app/history/pages/games-detail-page/games-detail-page.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/history/pages/games-detail-page/games-detail-page.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td, .table th {\n  padding: .1rem;\n  vertical-align: top;\n  border-top: 0px; }\n\n@media (min-width: 600px) {\n  .tableFixHead {\n    overflow-y: auto;\n    height: 34rem;\n    width: auto;\n    font-size: 1rem; }\n  .tableFixHead th {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    border-top: 0px; }\n  img {\n    width: 78px; } }\n\n@media (max-width: 568px) {\n  .modal-body {\n    padding: 0.1rem; }\n  .tableFixHead {\n    overflow-y: auto;\n    height: 25rem;\n    width: auto;\n    font-size: 0.8rem;\n    padding: 0px; }\n  .tableFixHead th {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    border-top: 0px; }\n  .table td, .table th {\n    font-size: 0.6rem; }\n  img {\n    width: 43px; } }\n\n@media (max-width: 411px) {\n  .modal-body {\n    padding: 0.1rem; }\n  .tableFixHead {\n    overflow-y: auto;\n    height: 25rem;\n    width: auto;\n    font-size: 0.8rem;\n    padding: 0px; }\n  .tableFixHead th {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    border-top: 0.5px; }\n  .table td, .table th {\n    font-size: 0.6rem; }\n  img {\n    width: 43px; } }\n\n@media (max-width: 360px) {\n  .modal-body {\n    padding: 0.1rem; }\n  .tableFixHead {\n    overflow-y: auto;\n    height: 25rem;\n    width: auto; }\n  .tableFixHead th {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    border-top: 0px;\n    padding: 0px; }\n  img {\n    width: 34px; }\n  .table td, .table th {\n    font-size: 0.5rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS9wYWdlcy9nYW1lcy1kZXRhaWwtcGFnZS9DOlxcVXNlcnNcXEFudWl0ZXgtODRcXGdpdFxcV2ViXFxzb3VyY2VcXHJlcG9zXFxCbGFja0phY2tcXEJsYWNrSmFjay5XRUJcXENsaWVudEFwcC9zcmNcXGFwcFxcaGlzdG9yeVxccGFnZXNcXGdhbWVzLWRldGFpbC1wYWdlXFxnYW1lcy1kZXRhaWwtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUVuQjtFQUNJO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0lBQ1gsZUFBZSxFQUFBO0VBRW5CO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sZUFBYyxFQUFBO0VBRWhCO0lBQ0ksV0FBVyxFQUFBLEVBQ2Q7O0FBRUw7RUFDRTtJQUNJLGVBQWUsRUFBQTtFQUVuQjtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZLEVBQUE7RUFFaEI7SUFDSSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixlQUFjLEVBQUE7RUFFbEI7SUFDSSxpQkFBaUIsRUFBQTtFQUVwQjtJQUNBLFdBQVcsRUFBQSxFQUNYOztBQUVKO0VBQ0c7SUFDSSxlQUFlLEVBQUE7RUFFbkI7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWSxFQUFBO0VBRWhCO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04saUJBQWdCLEVBQUE7RUFFcEI7SUFDSSxpQkFBaUIsRUFBQTtFQUVwQjtJQUNBLFdBQVcsRUFBQSxFQUNYOztBQUVKO0VBQ0c7SUFDSSxlQUFlLEVBQUE7RUFFbkI7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVcsRUFBQTtFQUVmO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sZUFBYztJQUNkLFlBQVksRUFBQTtFQUVmO0lBQ0EsV0FBVyxFQUFBO0VBRVo7SUFDSSxpQkFBaUIsRUFBQSxFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnkvcGFnZXMvZ2FtZXMtZGV0YWlsLXBhZ2UvZ2FtZXMtZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUgdGQsIC50YWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nOiAuMXJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBib3JkZXItdG9wOiAwcHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICAudGFibGVGaXhIZWFkIHsgXHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bzsgXHJcbiAgICAgICAgaGVpZ2h0OiAzNHJlbTtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICAudGFibGVGaXhIZWFkIHRoIHsgXHJcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTsgXHJcbiAgICAgICAgdG9wOiAwOyBcclxuICAgICAgICBib3JkZXItdG9wOjBweDtcclxuICAgIH1cclxuICAgICAgaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDc4cHg7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU2OHB4KSB7XHJcbiAgICAubW9kYWwtYm9keXtcclxuICAgICAgICBwYWRkaW5nOiAwLjFyZW07XHJcbiAgICB9XHJcbiAgICAudGFibGVGaXhIZWFkICAgIHsgXHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bzsgXHJcbiAgICAgICAgaGVpZ2h0OiAyNXJlbTtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAudGFibGVGaXhIZWFkIHRoIHsgXHJcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTsgXHJcbiAgICAgICAgdG9wOiAwOyBcclxuICAgICAgICBib3JkZXItdG9wOjBweDtcclxuICAgIH1cclxuICAgIC50YWJsZSB0ZCwgLnRhYmxlIHRoe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgfVxyXG4gICAgIGltZ3tcclxuICAgICB3aWR0aDogNDNweDtcclxuICAgIH1cclxuIH0gXHJcbiBAbWVkaWEgKG1heC13aWR0aDogNDExcHgpIHtcclxuICAgIC5tb2RhbC1ib2R5e1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMXJlbTtcclxuICAgIH1cclxuICAgIC50YWJsZUZpeEhlYWQgICAgeyBcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvOyBcclxuICAgICAgICBoZWlnaHQ6IDI1cmVtO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICAgIC50YWJsZUZpeEhlYWQgdGggeyBcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5OyBcclxuICAgICAgICB0b3A6IDA7IFxyXG4gICAgICAgIGJvcmRlci10b3A6MC41cHg7XHJcbiAgICB9XHJcbiAgICAudGFibGUgdGQsIC50YWJsZSB0aHtcclxuICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgIH1cclxuICAgICBpbWd7XHJcbiAgICAgd2lkdGg6IDQzcHg7XHJcbiAgICB9XHJcbiB9IFxyXG4gQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgICAubW9kYWwtYm9keXtcclxuICAgICAgICBwYWRkaW5nOiAwLjFyZW07XHJcbiAgICB9XHJcbiAgICAudGFibGVGaXhIZWFkICAgIHsgXHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bzsgXHJcbiAgICAgICAgaGVpZ2h0OiAyNXJlbTtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICAgIC50YWJsZUZpeEhlYWQgdGggeyBcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5OyBcclxuICAgICAgICB0b3A6IDA7IFxyXG4gICAgICAgIGJvcmRlci10b3A6MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICAgICBpbWd7XHJcbiAgICAgd2lkdGg6IDM0cHg7XHJcbiAgICB9XHJcbiAgICAudGFibGUgdGQsIC50YWJsZSB0aHtcclxuICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcclxuICAgIH1cclxuIH0gIl19 */"

/***/ }),

/***/ "./src/app/history/pages/games-detail-page/games-detail-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/history/pages/games-detail-page/games-detail-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: GamesDetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesDetailPageComponent", function() { return GamesDetailPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_entities_history_get_bot_steps_history_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/entities/history/get-bot-steps-history.view */ "./src/app/shared/entities/history/get-bot-steps-history.view.ts");
/* harmony import */ var src_app_shared_entities_history_get_player_steps_history_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/entities/history/get-player-steps-history.view */ "./src/app/shared/entities/history/get-player-steps-history.view.ts");
/* harmony import */ var src_app_shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/base/base.component */ "./src/app/shared/components/base/base.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");






var GamesDetailPageComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GamesDetailPageComponent, _super);
    function GamesDetailPageComponent(activeModal) {
        var _this = _super.call(this) || this;
        _this.activeModal = activeModal;
        _this.headBots = ['Bot name', 'Steps', '', '', '', '', '', ''];
        _this.headPlayerSteps = ['Player name', 'Player steps', '', '', '', ''];
        debugger;
        return _this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_entities_history_get_bot_steps_history_view__WEBPACK_IMPORTED_MODULE_2__["GetBotStepsHistoryView"])
    ], GamesDetailPageComponent.prototype, "botSteps", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_entities_history_get_player_steps_history_view__WEBPACK_IMPORTED_MODULE_3__["GetPlayerStepsHistoryView"])
    ], GamesDetailPageComponent.prototype, "playerSteps", void 0);
    GamesDetailPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-games-detail-page',
            template: __webpack_require__(/*! ./games-detail-page.component.html */ "./src/app/history/pages/games-detail-page/games-detail-page.component.html"),
            styles: [__webpack_require__(/*! ./games-detail-page.component.scss */ "./src/app/history/pages/games-detail-page/games-detail-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"]])
    ], GamesDetailPageComponent);
    return GamesDetailPageComponent;
}(src_app_shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/history/pages/games-page/games-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/history/pages/games-page/games-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> History of user games</h2>\r\n<label>\r\n  Searching\r\n  <input type=\"text\" class=\"form-control\" (input)=\"onSearchChange($event.target.value)\">\r\n</label>\r\n<div class=\"tableFixHead\">\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\" *ngFor=\"let head of headElements\">{{head}}</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let game of games\">\r\n        <td>\r\n          {{game.numberOfBots}}\r\n        </td>\r\n        <td>\r\n          {{convertStatusToString(game.status)}}\r\n        </td>\r\n        <td>\r\n          {{ game.winner}}\r\n        </td>\r\n        <td>\r\n          <button class=\"btn btn-info\" (click)=\"bot(game)\">\r\n            <i class=\"fas fa-robot\"></i>\r\n          </button>\r\n          <button class=\"btn btn-success\" (click)=\"player(game)\">\r\n            <i class=\"fas fa-user\"></i>\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <ngb-pagination (pageChange)=\"onPageChange($event)\" [collectionSize]=\"paginationConfig.paginationModel.collectionSize\"\r\n    [(page)]=\"paginationConfig.paginationModel.pageNumber\">\r\n  </ngb-pagination>\r\n</div>"

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
/* harmony import */ var src_app_shared_services_history_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/history.service */ "./src/app/shared/services/history.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/base/base.component */ "./src/app/shared/components/base/base.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _games_detail_page_games_detail_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../games-detail-page/games-detail-page.component */ "./src/app/history/pages/games-detail-page/games-detail-page.component.ts");
/* harmony import */ var src_app_shared_configs_pagination_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/configs/pagination.config */ "./src/app/shared/configs/pagination.config.ts");








var UserGamesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserGamesComponent, _super);
    function UserGamesComponent(historyService, modalService, paginationConfig) {
        var _this = _super.call(this) || this;
        _this.historyService = historyService;
        _this.modalService = modalService;
        _this.paginationConfig = paginationConfig;
        _this.searchString = '';
        _this.headElements = ['Number of bots', 'Status', 'Winner', 'Steps of Bots and players'];
        _this.initTable();
        return _this;
    }
    UserGamesComponent.prototype.ngOnInit = function () {
    };
    UserGamesComponent.prototype.initTable = function () {
        var _this = this;
        this.historyService.getGamesByUser(this.paginationConfig.paginationModel.pageNumber.toString(), this.searchString)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (x) {
            _this.games = x.games;
            _this.paginationConfig.paginationModel.collectionSize = x.totalGamesCount;
        });
    };
    UserGamesComponent.prototype.onSearchChange = function (searchString) {
        this.searchString = searchString;
        this.initTable();
    };
    UserGamesComponent.prototype.onPageChange = function (pageNumber) {
        this.paginationConfig.paginationModel.pageNumber = pageNumber;
        this.initTable();
    };
    UserGamesComponent.prototype.bot = function (game) {
        var _this = this;
        var id = game.id;
        this.historyService.getBotSteps(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (botSteps) {
            var modalRef = _this.modalService.open(_games_detail_page_games_detail_page_component__WEBPACK_IMPORTED_MODULE_6__["GamesDetailPageComponent"], { size: 'lg' });
            modalRef.componentInstance.botSteps = botSteps;
        });
    };
    UserGamesComponent.prototype.player = function (game) {
        var _this = this;
        var id = game.id;
        this.historyService.getPlayerSteps(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (playerSteps) {
            var modalRef = _this.modalService.open(_games_detail_page_games_detail_page_component__WEBPACK_IMPORTED_MODULE_6__["GamesDetailPageComponent"], { size: 'lg' });
            modalRef.componentInstance.playerSteps = playerSteps;
        });
    };
    UserGamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-games-page',
            template: __webpack_require__(/*! ./games-page.component.html */ "./src/app/history/pages/games-page/games-page.component.html"),
            styles: [__webpack_require__(/*! ./games-page.component.scss */ "./src/app/history/pages/games-page/games-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_history_service__WEBPACK_IMPORTED_MODULE_2__["HistoryService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], src_app_shared_configs_pagination_config__WEBPACK_IMPORTED_MODULE_7__["PaginationConfig"]])
    ], UserGamesComponent);
    return UserGamesComponent;
}(src_app_shared_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shared/configs/pagination.config.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/configs/pagination.config.ts ***!
  \*****************************************************/
/*! exports provided: PaginationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationConfig", function() { return PaginationConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var PaginationConfig = /** @class */ (function () {
    function PaginationConfig(config) {
        this.paginationModel = {
            collectionSize: 0,
            pageNumber: 1,
            maxSize: 4
        };
        config.maxSize = this.paginationModel.maxSize;
        config.rotate = true;
        config.boundaryLinks = true;
    }
    PaginationConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationConfig"]])
    ], PaginationConfig);
    return PaginationConfig;
}());



/***/ }),

/***/ "./src/app/shared/entities/history/get-bot-steps-history.view.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/entities/history/get-bot-steps-history.view.ts ***!
  \***********************************************************************/
/*! exports provided: GetBotStepsHistoryView, BotGetBotStepsHistoryViewItem, CardGetBotStepsHistoryViewItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBotStepsHistoryView", function() { return GetBotStepsHistoryView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotGetBotStepsHistoryViewItem", function() { return BotGetBotStepsHistoryViewItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardGetBotStepsHistoryViewItem", function() { return CardGetBotStepsHistoryViewItem; });
var GetBotStepsHistoryView = /** @class */ (function () {
    function GetBotStepsHistoryView() {
        this.bots = [];
    }
    return GetBotStepsHistoryView;
}());

var BotGetBotStepsHistoryViewItem = /** @class */ (function () {
    function BotGetBotStepsHistoryViewItem() {
        this.steps = [];
    }
    return BotGetBotStepsHistoryViewItem;
}());

var CardGetBotStepsHistoryViewItem = /** @class */ (function () {
    function CardGetBotStepsHistoryViewItem() {
    }
    return CardGetBotStepsHistoryViewItem;
}());



/***/ }),

/***/ "./src/app/shared/entities/history/get-player-steps-history.view.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/entities/history/get-player-steps-history.view.ts ***!
  \**************************************************************************/
/*! exports provided: GetPlayerStepsHistoryView, CardGetPlayerStepsHistoryViewItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPlayerStepsHistoryView", function() { return GetPlayerStepsHistoryView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardGetPlayerStepsHistoryViewItem", function() { return CardGetPlayerStepsHistoryViewItem; });
var GetPlayerStepsHistoryView = /** @class */ (function () {
    function GetPlayerStepsHistoryView() {
        this.steps = [];
    }
    return GetPlayerStepsHistoryView;
}());

var CardGetPlayerStepsHistoryViewItem = /** @class */ (function () {
    function CardGetPlayerStepsHistoryViewItem() {
    }
    return CardGetPlayerStepsHistoryViewItem;
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
    }
    HistoryService.prototype.getGamesByUser = function (pageNumber, searchString) {
        var params = {
            pageNumber: pageNumber,
            searchString: searchString
        };
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/history/getAllGames", { params: params });
    };
    HistoryService.prototype.getPlayerSteps = function (id) {
        var params = {
            gameId: id
        };
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/history/getPlayerSteps", { params: params });
    };
    HistoryService.prototype.getBotSteps = function (id) {
        var params = {
            gameId: id
        };
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/history/getBotSteps", { params: params });
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