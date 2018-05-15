webpackJsonp([6],{

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCreatePageModule", function() { return EventCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_create__ = __webpack_require__(508);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventCreatePageModule = (function () {
    function EventCreatePageModule() {
    }
    EventCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event_create__["a" /* EventCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_create__["a" /* EventCreatePage */]),
            ],
        })
    ], EventCreatePageModule);
    return EventCreatePageModule;
}());

//# sourceMappingURL=event-create.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventCreatePage; });
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
 * Generated class for the EventCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventCreatePage = (function () {
    function EventCreatePage(navCtrl, eventProvider) {
        this.navCtrl = navCtrl;
        this.eventProvider = eventProvider;
    }
    EventCreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventCreatePage');
    };
    EventCreatePage.prototype.createEvent = function (eventName, eventDate, eventPrice, eventCost) {
        var _this = this;
        this.eventProvider
            .createEvent(eventName, eventDate, eventPrice, eventCost)
            .then(function (newEvent) {
            _this.navCtrl.pop();
        });
    };
    EventCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-create',template:/*ion-inline-start:"C:\Users\Christos\Desktop\trvlpl\src\pages\event-create\event-create.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>New Event</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-item>\n    <ion-label stacked>Event Name</ion-label>\n    <ion-input [(ngModel)]="eventName" type="text" placeholder="What\'s your event\'s name?">\n    </ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>Price</ion-label>\n    <ion-input [(ngModel)]="eventPrice" type="number" placeholder="How much will guests pay?">\n    </ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>Cost</ion-label>\n    <ion-input [(ngModel)]="eventCost" type="number" placeholder="How much are you spending?">\n    </ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Event Date</ion-label>\n    <ion-datetime  displayFormat="D MMM, YY" min="2018" max="2022-10-31" pickerFormat="DD MMM YYYY" [(ngModel)]="eventDate">\n    </ion-datetime>\n  </ion-item>\n  <button ion-button block (click)="createEvent(eventName, eventDate, eventPrice, eventCost)" >\n    Create Event\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\Christos\Desktop\trvlpl\src\pages\event-create\event-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */]])
    ], EventCreatePage);
    return EventCreatePage;
}());

//# sourceMappingURL=event-create.js.map

/***/ })

});
//# sourceMappingURL=6.js.map