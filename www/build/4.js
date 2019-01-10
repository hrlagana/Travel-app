webpackJsonp([4],{

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListPageModule", function() { return EventListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_list__ = __webpack_require__(520);
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
                __WEBPACK_IMPORTED_MODULE_2__question_list__["a" /* QuestionListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__question_list__["a" /* QuestionListPage */]),
            ],
        })
    ], EventListPageModule);
    return EventListPageModule;
}());

//# sourceMappingURL=question-list.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionListPage; });
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



var QuestionListPage = (function () {
    function QuestionListPage(navCtrl, questionProvider) {
        this.navCtrl = navCtrl;
        this.questionProvider = questionProvider;
    }
    QuestionListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.questionProvider.getQuestionList().on("value", function (questionListSnapshot) {
            _this.questionList = [];
            questionListSnapshot.forEach(function (snap) {
                _this.questionList.push({
                    id: snap.key,
                    name: snap.val().name,
                    date: snap.val().date
                });
                return false;
            });
        });
    };
    QuestionListPage.prototype.goToQuestionDetail = function (questionId) {
        this.navCtrl.push('QuestionDetailPage', { questionId: questionId });
    };
    QuestionListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-question-list",template:/*ion-inline-start:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\pages\question-list\question-list.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Question List</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item *ngFor="let question of questionList" (click)="goToQuestionDetail(question.id)">\n\n            <p>Date: {{question?.date}}</p>\n\n            <h2>{{question?.name}}</h2>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\pages\question-list\question-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_question_question__["a" /* QuestionProvider */]])
    ], QuestionListPage);
    return QuestionListPage;
}());

//# sourceMappingURL=question-list.js.map

/***/ })

});
//# sourceMappingURL=4.js.map