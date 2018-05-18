webpackJsonp([16],{

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListPageModule", function() { return EventListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_list__ = __webpack_require__(513);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventListPageModule = (function () {
    function EventListPageModule() {
    }
    EventListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event_list__["a" /* EventListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_list__["a" /* EventListPage */]),
            ],
        })
    ], EventListPageModule);
    return EventListPageModule;
}());

//# sourceMappingURL=event-list.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventListPage = (function () {
    function EventListPage(navCtrl, eventProvider) {
        this.navCtrl = navCtrl;
        this.eventProvider = eventProvider;
    }
    EventListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.eventProvider
            .getEventList().on("value", function (eventListSnapshot) {
            _this.eventList = [];
            eventListSnapshot.forEach(function (snap) {
                _this.eventList.push({
                    id: snap.key,
                    name: snap.val().name,
                    price: snap.val().price,
                    date: snap.val().date
                });
                return false;
            });
        });
    };
    EventListPage.prototype.goToEventDetail = function (eventId) {
        this.navCtrl.push('EventDetailPage', { eventId: eventId });
    };
    EventListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-event-list",template:/*ion-inline-start:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\pages\event-list\event-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>EventList</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let event of eventList" (click)="goToEventDetail(event.id)">\n      <h2>{{event?.name}}</h2>\n      <p>Ticket:\n        <strong>${{event?.price}}</strong>\n      </p>\n      <p>Date:\n        <strong>{{event?.date}}</strong>\n      </p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\pages\event-list\event-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */]])
    ], EventListPage);
    return EventListPage;
}());

//# sourceMappingURL=event-list.js.map

/***/ })

});
//# sourceMappingURL=16.js.map