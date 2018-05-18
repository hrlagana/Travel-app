webpackJsonp([7],{

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailPageModule", function() { return EventDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_detail__ = __webpack_require__(512);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventDetailPageModule = (function () {
    function EventDetailPageModule() {
    }
    EventDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event_detail__["a" /* EventDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_detail__["a" /* EventDetailPage */]),
            ],
        })
    ], EventDetailPageModule);
    return EventDetailPageModule;
}());

//# sourceMappingURL=event-detail.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailPage; });
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



/**
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventDetailPage = (function () {
    function EventDetailPage(navCtrl, navParams, eventProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventProvider = eventProvider;
        this.currentEvent = {};
        this.guestName = '';
    }
    EventDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.eventProvider
            .getEventDetail(this.navParams.get("eventId"))
            .on("value", function (eventSnapshot) {
            _this.currentEvent = eventSnapshot.val();
            _this.currentEvent.id = eventSnapshot.key;
        });
    };
    EventDetailPage.prototype.addGuest = function (guestName) {
        var _this = this;
        this.eventProvider.addGuest(guestName, this.currentEvent.id, this.currentEvent.price)
            .then(function (newGuest) {
            _this.guestName =
                "";
        });
    };
    EventDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-detail',template:/*ion-inline-start:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\pages\event-detail\event-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header>\n      {{currentEvent?.name}}\n    </ion-card-header>\n    <ion-card-content>\n      <p>Ticket:\n        <strong>${{currentEvent?.price}}</strong>\n      </p>\n      <p>Date:\n        <strong>{{currentEvent?.date}}</strong>\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-row padding>\n    <ion-col col-8>Event\'s Revenue</ion-col>\n    <ion-col col-4 [class.profitable]="currentEvent?.revenue > 0" [class.no-profit]="currentEvent?.revenue < 0">\n      {{currentEvent?.revenue}}\n    </ion-col>\n  </ion-row>\n\n  <ion-card class="add-guest-form">\n    <ion-card-header>\n      Add a Guests\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label stacked>Name</ion-label>\n        <ion-input [(ngModel)]="guestName" type="text" placeholder="What\'s your guest\'s name?"></ion-input>\n      </ion-item>\n      <button ion-button color="primary" block (click)="addGuest(guestName)" [disabled]="!guestName">\n        Add a Guest\n      </button>\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\pages\event-detail\event-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */]])
    ], EventDetailPage);
    return EventDetailPage;
}());

//# sourceMappingURL=event-detail.js.map

/***/ })

});
//# sourceMappingURL=7.js.map