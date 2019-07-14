(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-history-history-module"],{

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
/* harmony import */ var src_app_history_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/history/history.component */ "./src/app/history/history.component.ts");




var routes = [
    { path: '', component: src_app_history_history_component__WEBPACK_IMPORTED_MODULE_3__["HistoryComponent"] },
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
/* harmony import */ var src_app_history_history_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/history/history-routing.module */ "./src/app/history/history-routing.module.ts");
/* harmony import */ var src_app_history_pages_games_page_games_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/history/pages/games-page/games-page.component */ "./src/app/history/pages/games-page/games-page.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_history_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var src_app_history_pages_games_detail_page_games_detail_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/history/pages/games-detail-page/games-detail-page.component */ "./src/app/history/pages/games-detail-page/games-detail-page.component.ts");








var HistoryModule = /** @class */ (function () {
    function HistoryModule() {
    }
    HistoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [src_app_history_pages_games_page_games_page_component__WEBPACK_IMPORTED_MODULE_4__["UserGamesComponent"], src_app_history_history_component__WEBPACK_IMPORTED_MODULE_6__["HistoryComponent"], src_app_history_pages_games_detail_page_games_detail_page_component__WEBPACK_IMPORTED_MODULE_7__["GamesDetailPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_history_history_routing_module__WEBPACK_IMPORTED_MODULE_3__["HistoryRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ],
            entryComponents: [src_app_history_pages_games_detail_page_games_detail_page_component__WEBPACK_IMPORTED_MODULE_7__["GamesDetailPageComponent"]],
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

module.exports = ".table td, .table th {\n  padding: .1rem;\n  vertical-align: top;\n  border-top: 0px; }\n\n@media (min-width: 600px) {\n  .tableFixHead {\n    overflow-y: auto;\n    height: 34rem;\n    width: auto;\n    font-size: 1rem; }\n  .tableFixHead th {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    border-top: 0px; }\n  img {\n    width: 78px; } }\n\n@media (max-width: 568px) {\n  .modal-body {\n    padding: 0.1rem; }\n  .tableFixHead {\n    overflow-y: auto;\n    height: 25rem;\n    width: auto;\n    font-size: 0.8rem;\n    padding: 0px; }\n  .tableFixHead th {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    border-top: 0px; }\n  .table td, .table th {\n    font-size: 0.6rem; }\n  img {\n    width: 43px; } }\n\n@media (max-width: 411px) {\n  .modal-body {\n    padding: 0.1rem; }\n  .tableFixHead {\n    overflow-y: auto;\n    height: 25rem;\n    width: auto;\n    font-size: 0.8rem;\n    padding: 0px; }\n  .tableFixHead th {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    border-top: 0.5px; }\n  .table td, .table th {\n    font-size: 0.6rem; }\n  img {\n    width: 43px; } }\n\n@media (max-width: 360px) {\n  .modal-body {\n    padding: 0.1rem; }\n  .tableFixHead {\n    overflow-y: auto;\n    height: 25rem;\n    width: auto; }\n  .tableFixHead th {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    border-top: 0px;\n    padding: 0px; }\n  img {\n    width: 34px; }\n  .table td, .table th {\n    font-size: 0.5rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS9wYWdlcy9nYW1lcy1kZXRhaWwtcGFnZS9EOlxcV29ya1xcYW51aXRleFxcV2ViXFxzb3VyY2VcXHJlcG9zXFxCbGFja0phY2tcXEJsYWNrSmFjay5XRUJcXENsaWVudEFwcC9zcmNcXGFwcFxcaGlzdG9yeVxccGFnZXNcXGdhbWVzLWRldGFpbC1wYWdlXFxnYW1lcy1kZXRhaWwtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUVuQjtFQUNJO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0lBQ1gsZUFBZSxFQUFBO0VBRW5CO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sZUFBYyxFQUFBO0VBRWhCO0lBQ0ksV0FBVyxFQUFBLEVBQ2Q7O0FBRUw7RUFDRTtJQUNJLGVBQWUsRUFBQTtFQUVuQjtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZLEVBQUE7RUFFaEI7SUFDSSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixlQUFjLEVBQUE7RUFFbEI7SUFDSSxpQkFBaUIsRUFBQTtFQUVwQjtJQUNBLFdBQVcsRUFBQSxFQUNYOztBQUVKO0VBQ0c7SUFDSSxlQUFlLEVBQUE7RUFFbkI7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWSxFQUFBO0VBRWhCO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04saUJBQWdCLEVBQUE7RUFFcEI7SUFDSSxpQkFBaUIsRUFBQTtFQUVwQjtJQUNBLFdBQVcsRUFBQSxFQUNYOztBQUVKO0VBQ0c7SUFDSSxlQUFlLEVBQUE7RUFFbkI7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVcsRUFBQTtFQUVmO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sZUFBYztJQUNkLFlBQVksRUFBQTtFQUVmO0lBQ0EsV0FBVyxFQUFBO0VBRVo7SUFDSSxpQkFBaUIsRUFBQSxFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnkvcGFnZXMvZ2FtZXMtZGV0YWlsLXBhZ2UvZ2FtZXMtZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUgdGQsIC50YWJsZSB0aCB7XG4gICAgcGFkZGluZzogLjFyZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItdG9wOiAwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAudGFibGVGaXhIZWFkIHsgXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87IFxuICAgICAgICBoZWlnaHQ6IDM0cmVtO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICAudGFibGVGaXhIZWFkIHRoIHsgXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7IFxuICAgICAgICB0b3A6IDA7IFxuICAgICAgICBib3JkZXItdG9wOjBweDtcbiAgICB9XG4gICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDc4cHg7XG4gICAgICB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU2OHB4KSB7XG4gICAgLm1vZGFsLWJvZHl7XG4gICAgICAgIHBhZGRpbmc6IDAuMXJlbTtcbiAgICB9XG4gICAgLnRhYmxlRml4SGVhZCAgICB7IFxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvOyBcbiAgICAgICAgaGVpZ2h0OiAyNXJlbTtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIC50YWJsZUZpeEhlYWQgdGggeyBcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTsgXG4gICAgICAgIHRvcDogMDsgXG4gICAgICAgIGJvcmRlci10b3A6MHB4O1xuICAgIH1cbiAgICAudGFibGUgdGQsIC50YWJsZSB0aHtcbiAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgfVxuICAgICBpbWd7XG4gICAgIHdpZHRoOiA0M3B4O1xuICAgIH1cbiB9IFxuIEBtZWRpYSAobWF4LXdpZHRoOiA0MTFweCkge1xuICAgIC5tb2RhbC1ib2R5e1xuICAgICAgICBwYWRkaW5nOiAwLjFyZW07XG4gICAgfVxuICAgIC50YWJsZUZpeEhlYWQgICAgeyBcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bzsgXG4gICAgICAgIGhlaWdodDogMjVyZW07XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgICAudGFibGVGaXhIZWFkIHRoIHsgXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7IFxuICAgICAgICB0b3A6IDA7IFxuICAgICAgICBib3JkZXItdG9wOjAuNXB4O1xuICAgIH1cbiAgICAudGFibGUgdGQsIC50YWJsZSB0aHtcbiAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgfVxuICAgICBpbWd7XG4gICAgIHdpZHRoOiA0M3B4O1xuICAgIH1cbiB9IFxuIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIC5tb2RhbC1ib2R5e1xuICAgICAgICBwYWRkaW5nOiAwLjFyZW07XG4gICAgfVxuICAgIC50YWJsZUZpeEhlYWQgICAgeyBcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bzsgXG4gICAgICAgIGhlaWdodDogMjVyZW07XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cbiAgICAudGFibGVGaXhIZWFkIHRoIHsgXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7IFxuICAgICAgICB0b3A6IDA7IFxuICAgICAgICBib3JkZXItdG9wOjBweDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgICAgaW1ne1xuICAgICB3aWR0aDogMzRweDtcbiAgICB9XG4gICAgLnRhYmxlIHRkLCAudGFibGUgdGh7XG4gICAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xuICAgIH1cbiB9ICJdfQ== */"

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

module.exports = "<h2> History of user games</h2>\n<label>\n  Searching\n  <input type=\"text\" class=\"form-control\" (input)=\"onSearchChange($event.target.value)\">\n</label>\n<div class=\"tableFixHead\">\n  <table>\n    <thead>\n      <tr>\n        <th scope=\"col\" *ngFor=\"let head of headElements\">{{head}}</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let game of games\">\n        <td>\n          {{game.numberOfBots}}\n        </td>\n        <td>\n          {{convertStatusToString(game.status)}}\n        </td>\n        <td>\n          {{ game.winner}}\n        </td>\n        <td>\n          <button class=\"btn btn-info\" (click)=\"getBotSteps(game)\">\n            <i class=\"fas fa-robot\"></i>\n          </button>\n          <button class=\"btn btn-success\" (click)=\"getPlayerSteps(game)\">\n            <i class=\"fas fa-user\"></i>\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <ngb-pagination (pageChange)=\"onPageChange($event)\" [collectionSize]=\"paginationModel.collectionSize\"\n    [(page)]=\"paginationModel.pageNumber\" [maxSize] = \"paginationModel.maxSize\" [boundaryLinks] = \"true\" [rotate]= \"true\">\n  </ngb-pagination>\n</div>"

/***/ }),

/***/ "./src/app/history/pages/games-page/games-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/history/pages/games-page/games-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-collapse: collapse;\n  width: 100%;\n  text-align: center; }\n\nth, td {\n  padding: 0.5%; }\n\nimg {\n  width: 78px; }\n\nth {\n  background: #343a40;\n  color: white; }\n\n::ng-deep .page-item.active .page-link {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #474c52; }\n\n::ng-deep .page-link {\n  color: #343a40; }\n\n::ng-deep .page-link:hover {\n  color: #6b7075; }\n\n::ng-deep .pagination > li > a:focus,\n.pagination > li > a:hover,\n.pagination > li > span:focus,\n.pagination > li > span:hover {\n  box-shadow: 0 0 0 0.2rem rgba(62, 63, 65, 0.25);\n  color: #343a40;\n  border-color: #ddd; }\n\n@media (min-width: 560px) {\n  .tableFixHead {\n    overflow-y: auto;\n    height: 34rem;\n    width: auto;\n    font-size: 1rem; }\n  .tableFixHead th {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    border-top: 0px; }\n  img {\n    width: 78px; }\n  .btn-info {\n    margin-right: 1%;\n    padding: 7px 17px; }\n  .btn-success {\n    padding: 7px 17px; } }\n\n@media (max-width: 411px) {\n  .tableFixHead {\n    overflow-y: auto;\n    height: 25rem;\n    width: auto;\n    font-size: 0.8rem; }\n  .tableFixHead th {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    border-top: 0px; }\n  img {\n    width: 59px; }\n  .btn-info {\n    margin-right: 1%;\n    padding: 7px; }\n  .btn-success {\n    padding: 7px; } }\n\n@media (max-width: 360px) {\n  .tableFixHead {\n    overflow-y: auto;\n    height: 25rem;\n    width: auto;\n    font-size: 0.7rem; }\n  .tableFixHead th {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    border-top: 0px; }\n  img {\n    width: 52px; }\n  .btn-info {\n    margin-right: 1%;\n    padding: 3px; }\n  .btn-success {\n    padding: 3px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS9wYWdlcy9nYW1lcy1wYWdlL0Q6XFxXb3JrXFxhbnVpdGV4XFxXZWJcXHNvdXJjZVxccmVwb3NcXEJsYWNrSmFja1xcQmxhY2tKYWNrLldFQlxcQ2xpZW50QXBwL3NyY1xcYXBwXFxoaXN0b3J5XFxwYWdlc1xcZ2FtZXMtcGFnZVxcZ2FtZXMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWlCLEVBQUE7O0FBRXJCO0VBQ0ssYUFBYSxFQUFBOztBQUVsQjtFQUNHLFdBQVcsRUFBQTs7QUFFZDtFQUNJLG1CQUFrQjtFQUNsQixZQUF5QixFQUFBOztBQUU3QjtFQUNHLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCLEVBQUE7O0FBRXhCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNHLGNBQWMsRUFBQTs7QUFFakI7Ozs7RUFJRywrQ0FBK0M7RUFDL0MsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUdyQjtFQUNHO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0lBQ1gsZUFBZSxFQUFBO0VBRW5CO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sZUFBYyxFQUFBO0VBRWhCO0lBQ0ksV0FBVyxFQUFBO0VBRWY7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFFckI7SUFDSSxpQkFBaUIsRUFBQSxFQUNwQjs7QUFFSjtFQUNHO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCLEVBQUE7RUFFckI7SUFDSSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixlQUFjLEVBQUE7RUFFakI7SUFDQSxXQUFXLEVBQUE7RUFFWjtJQUNJLGdCQUFnQjtJQUNoQixZQUFZLEVBQUE7RUFFaEI7SUFDSSxZQUFZLEVBQUEsRUFDZjs7QUFFSjtFQUNHO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCLEVBQUE7RUFFckI7SUFDSSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixlQUFjLEVBQUE7RUFFakI7SUFDQSxXQUFXLEVBQUE7RUFFWjtJQUNJLGdCQUFnQjtJQUNoQixZQUFZLEVBQUE7RUFFaEI7SUFDSSxZQUFZLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnkvcGFnZXMvZ2FtZXMtcGFnZS9nYW1lcy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUgIHsgXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xufVxudGgsIHRkIHtcbiAgICAgcGFkZGluZzogMC41JTtcbn1cbmltZ3tcbiAgIHdpZHRoOiA3OHB4O1xufVxudGggeyBcbiAgICBiYWNrZ3JvdW5kOiMzNDNhNDA7IFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7IFxufVxuOjpuZy1kZWVwIC5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xuICAgY29sb3I6ICNmZmY7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xuICAgYm9yZGVyLWNvbG9yOiAjNDc0YzUyOztcbn1cbjo6bmctZGVlcCAucGFnZS1saW5re1xuICAgIGNvbG9yOiAjMzQzYTQwO1xuICAgfVxuOjpuZy1kZWVwICAucGFnZS1saW5rOmhvdmVyeyBcbiAgIGNvbG9yOiAjNmI3MDc1O1xufVxuOjpuZy1kZWVwIC5wYWdpbmF0aW9uID4gbGkgPiBhOmZvY3VzLFxuLnBhZ2luYXRpb24gPiBsaSA+IGE6aG92ZXIsXG4ucGFnaW5hdGlvbiA+IGxpID4gc3Bhbjpmb2N1cyxcbi5wYWdpbmF0aW9uID4gbGkgPiBzcGFuOmhvdmVye1xuICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNjIsIDYzLCA2NSwgMC4yNSk7XG4gICBjb2xvcjogIzM0M2E0MDtcbiAgIGJvcmRlci1jb2xvcjogI2RkZDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU2MHB4KSB7XG4gICAudGFibGVGaXhIZWFkIHsgXG4gICAgICAgb3ZlcmZsb3cteTogYXV0bzsgXG4gICAgICAgaGVpZ2h0OiAzNHJlbTtcbiAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICBmb250LXNpemU6IDFyZW07XG4gICB9XG4gICAudGFibGVGaXhIZWFkIHRoIHsgXG4gICAgICAgcG9zaXRpb246IHN0aWNreTsgXG4gICAgICAgdG9wOiAwOyBcbiAgICAgICBib3JkZXItdG9wOjBweDtcbiAgIH1cbiAgICAgaW1ne1xuICAgICAgICAgd2lkdGg6IDc4cHg7XG4gICAgIH1cbiAgICAgLmJ0bi1pbmZvIHtcbiAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgICAgIHBhZGRpbmc6IDdweCAxN3B4O1xuICAgfVxuICAgLmJ0bi1zdWNjZXNzIHtcbiAgICAgICBwYWRkaW5nOiA3cHggMTdweDtcbiAgIH1cbiB9XG5AbWVkaWEgKG1heC13aWR0aDogNDExcHgpIHtcbiAgIC50YWJsZUZpeEhlYWQgICAgeyBcbiAgICAgICBvdmVyZmxvdy15OiBhdXRvOyBcbiAgICAgICBoZWlnaHQ6IDI1cmVtO1xuICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgfVxuICAgLnRhYmxlRml4SGVhZCB0aCB7IFxuICAgICAgIHBvc2l0aW9uOiBzdGlja3k7IFxuICAgICAgIHRvcDogMDsgXG4gICAgICAgYm9yZGVyLXRvcDowcHg7XG4gICB9XG4gICAgaW1ne1xuICAgIHdpZHRoOiA1OXB4O1xuICAgfVxuICAgLmJ0bi1pbmZvIHtcbiAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgICAgIHBhZGRpbmc6IDdweDtcbiAgIH1cbiAgIC5idG4tc3VjY2VzcyB7XG4gICAgICAgcGFkZGluZzogN3B4O1xuICAgfVxufSBcbkBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgLnRhYmxlRml4SGVhZCAgICB7IFxuICAgICAgIG92ZXJmbG93LXk6IGF1dG87IFxuICAgICAgIGhlaWdodDogMjVyZW07XG4gICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICB9XG4gICAudGFibGVGaXhIZWFkIHRoIHsgXG4gICAgICAgcG9zaXRpb246IHN0aWNreTsgXG4gICAgICAgdG9wOiAwOyBcbiAgICAgICBib3JkZXItdG9wOjBweDtcbiAgIH1cbiAgICBpbWd7XG4gICAgd2lkdGg6IDUycHg7XG4gICB9XG4gICAuYnRuLWluZm8ge1xuICAgICAgIG1hcmdpbi1yaWdodDogMSU7XG4gICAgICAgcGFkZGluZzogM3B4O1xuICAgfVxuICAgLmJ0bi1zdWNjZXNzIHtcbiAgICAgICBwYWRkaW5nOiAzcHg7XG4gICB9XG59ICJdfQ== */"

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
/* harmony import */ var src_app_history_pages_games_detail_page_games_detail_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/history/pages/games-detail-page/games-detail-page.component */ "./src/app/history/pages/games-detail-page/games-detail-page.component.ts");
/* harmony import */ var src_app_shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/pagination.model */ "./src/app/shared/models/pagination.model.ts");








var UserGamesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserGamesComponent, _super);
    function UserGamesComponent(historyService, modalService, paginationModel) {
        var _this = _super.call(this) || this;
        _this.historyService = historyService;
        _this.modalService = modalService;
        _this.paginationModel = paginationModel;
        _this.searchString = '';
        _this.headElements = ['Number of bots', 'Status', 'Winner', 'Steps of Bots and players'];
        _this.initTable();
        return _this;
    }
    UserGamesComponent.prototype.ngOnInit = function () {
    };
    UserGamesComponent.prototype.initTable = function () {
        var _this = this;
        this.historyService.getGamesByUser(this.paginationModel.pageNumber.toString(), this.searchString)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (x) {
            _this.games = x.games;
            _this.paginationModel.collectionSize = x.totalGamesCount;
        });
    };
    UserGamesComponent.prototype.onSearchChange = function (searchString) {
        this.searchString = searchString;
        this.initTable();
    };
    UserGamesComponent.prototype.onPageChange = function (pageNumber) {
        this.paginationModel.pageNumber = pageNumber;
        this.initTable();
    };
    UserGamesComponent.prototype.getBotSteps = function (game) {
        var _this = this;
        var id = game.id;
        this.historyService.getBotSteps(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (botSteps) {
            var modalRef = _this.modalService.open(src_app_history_pages_games_detail_page_games_detail_page_component__WEBPACK_IMPORTED_MODULE_6__["GamesDetailPageComponent"], { size: 'lg' });
            modalRef.componentInstance.botSteps = botSteps;
        });
    };
    UserGamesComponent.prototype.getPlayerSteps = function (game) {
        var _this = this;
        var id = game.id;
        this.historyService.getPlayerSteps(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.componetDestroyed))
            .subscribe(function (playerSteps) {
            var modalRef = _this.modalService.open(src_app_history_pages_games_detail_page_games_detail_page_component__WEBPACK_IMPORTED_MODULE_6__["GamesDetailPageComponent"], { size: 'lg' });
            modalRef.componentInstance.playerSteps = playerSteps;
        });
    };
    UserGamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-games-page',
            template: __webpack_require__(/*! ./games-page.component.html */ "./src/app/history/pages/games-page/games-page.component.html"),
            styles: [__webpack_require__(/*! ./games-page.component.scss */ "./src/app/history/pages/games-page/games-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_history_service__WEBPACK_IMPORTED_MODULE_2__["HistoryService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], src_app_shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_7__["PaginationModel"]])
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
var PaginationConfig = {
    collectionSize: 0,
    pageNumber: 1,
    maxSize: 4
};


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

/***/ "./src/app/shared/models/pagination.model.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/models/pagination.model.ts ***!
  \***************************************************/
/*! exports provided: PaginationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModel", function() { return PaginationModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_configs_pagination_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/configs/pagination.config */ "./src/app/shared/configs/pagination.config.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var PaginationModel = /** @class */ (function () {
    function PaginationModel() {
        this.collectionSize = src_app_shared_configs_pagination_config__WEBPACK_IMPORTED_MODULE_1__["PaginationConfig"].collectionSize;
        this.pageNumber = src_app_shared_configs_pagination_config__WEBPACK_IMPORTED_MODULE_1__["PaginationConfig"].pageNumber;
        this.maxSize = src_app_shared_configs_pagination_config__WEBPACK_IMPORTED_MODULE_1__["PaginationConfig"].maxSize;
    }
    PaginationModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginationModel);
    return PaginationModel;
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
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var HistoryService = /** @class */ (function () {
    function HistoryService(http) {
        this.http = http;
    }
    HistoryService.prototype.getGamesByUser = function (pageNumber, searchString) {
        var params = {
            pageNumber: pageNumber,
            searchString: searchString
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/history/getAllGames", { params: params });
    };
    HistoryService.prototype.getPlayerSteps = function (id) {
        var params = {
            gameId: id
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/history/getPlayerSteps", { params: params });
    };
    HistoryService.prototype.getBotSteps = function (id) {
        var params = {
            gameId: id
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/history/getBotSteps", { params: params });
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
//# sourceMappingURL=src-app-history-history-module.js.map