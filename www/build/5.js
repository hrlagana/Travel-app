webpackJsonp([5],{

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDetailPageModule", function() { return QuestionDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_detail__ = __webpack_require__(519);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuestionDetailPageModule = (function () {
    function QuestionDetailPageModule() {
    }
    QuestionDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__question_detail__["a" /* QuestionDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__question_detail__["a" /* QuestionDetailPage */]),
            ],
        })
    ], QuestionDetailPageModule);
    return QuestionDetailPageModule;
}());

//# sourceMappingURL=question-detail.module.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_question_question__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import firebase from 'firebase';
var QuestionDetailPage = (function () {
    function QuestionDetailPage(navCtrl, navParams, QuestionProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.QuestionProvider = QuestionProvider;
        this.currentQuestion = {};
        this.currentUser = {};
    }
    QuestionDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.QuestionProvider
            .getQuestionDetail(this.navParams.get("questionId"))
            .on("value", function (QuestionSnapshot) {
            _this.currentQuestion = QuestionSnapshot.val();
            _this.currentQuestion.id = QuestionSnapshot.key;
        });
    };
    QuestionDetailPage.prototype.likeQuestion = function (questionId) {
        this.QuestionProvider.likeQuestion(this.currentQuestion.id);
    };
    QuestionDetailPage.prototype.dislikeQuestion = function (questionId) {
        this.QuestionProvider.dislikeQuestion(this.currentQuestion.id);
    };
    QuestionDetailPage.prototype.showUserProfile = function () {
        this.navCtrl.push('UserprofPage');
    };
    QuestionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-question-detail',template:/*ion-inline-start:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\pages\question-detail\question-detail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <h1>{{currentQuestion?.name}}</h1>\n\n            <p>by User:\n\n                <button ion-button (click)="showUserProfile()">\n\n                    <ion-icon>{{currentQuestion?.email}}</ion-icon>\n\n                </button>\n\n            </p>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <p>Date Posted: {{currentQuestion?.date}}</p>\n\n            <!--<h2>{{question?.name}}</h2> -->\n\n\n\n            <button ion-button (click)="likeQuestion()" icon-left clear small>\n\n                <ion-icon name="thumbs-up"></ion-icon>\n\n                <div>{{currentQuestion?.qlikes}} Likes</div>\n\n            </button>\n\n            <button ion-button (click)="dislikeQuestion()" icon-left clear small>\n\n                <ion-icon name="thumbs-down"></ion-icon>\n\n                <div>{{currentQuestion?.qdislikes}} Dislikes</div>\n\n            </button>\n\n            <button ion-button icon-left clear small>\n\n                <ion-icon name="text"></ion-icon>\n\n                <div>{{currentQuestion?.answers}} Answers</div>\n\n            </button>\n\n\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\pages\question-detail\question-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_question_question__["a" /* QuestionProvider */]])
    ], QuestionDetailPage);
    return QuestionDetailPage;
}());

//# sourceMappingURL=question-detail.js.map

/***/ })

});
//# sourceMappingURL=5.js.map