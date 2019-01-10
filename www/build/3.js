webpackJsonp([3],{

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofPageModule", function() { return UserprofPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userprof__ = __webpack_require__(522);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserprofPageModule = (function () {
    function UserprofPageModule() {
    }
    UserprofPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__userprof__["a" /* UserprofPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__userprof__["a" /* UserprofPage */]),
            ],
        })
    ], UserprofPageModule);
    return UserprofPageModule;
}());

//# sourceMappingURL=userprof.module.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_question_question__ = __webpack_require__(307);
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
 * Generated class for the UserprofPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserprofPage = (function () {
    function UserprofPage(navCtrl, alertCtrl, authProvider, profileProvider, questionProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.profileProvider = profileProvider;
        this.questionProvider = questionProvider;
    }
    UserprofPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad UserprofPage');
        this.profileProvider.getUserProfile().on("value", function (userProfileSnapshot) {
            _this.userProfile = userProfileSnapshot.val();
        });
    };
    UserprofPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-userprof',template:/*ion-inline-start:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\pages\userprof\userprof.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>User Information</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <ion-icon name="contact"> Name </ion-icon>\n          </ion-col>\n          <ion-col col-6 *ngIf="userProfile?.firstName || userProfile?.lastName">\n            {{userProfile?.firstName}} {{userProfile?.lastName}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <ion-icon name="calendar"> Date of Birth </ion-icon>\n          </ion-col>\n          <ion-col col-6>\n            \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <ion-icon name="contacts"> Gender </ion-icon>\n          </ion-col>\n          <ion-col col-6 >\n            Gender\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <ion-icon name="bicycle"> Interests </ion-icon>\n          </ion-col>\n          <ion-col>\n           Interests\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n  </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\pages\userprof\userprof.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_question_question__["a" /* QuestionProvider */]])
    ], UserprofPage);
    return UserprofPage;
}());

//# sourceMappingURL=userprof.js.map

/***/ })

});
//# sourceMappingURL=3.js.map