webpackJsonp([4],{

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionCreatePageModule", function() { return QuestionCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_create__ = __webpack_require__(516);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuestionCreatePageModule = (function () {
    function QuestionCreatePageModule() {
    }
    QuestionCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__question_create__["a" /* QuestionCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__question_create__["a" /* QuestionCreatePage */]),
            ],
        })
    ], QuestionCreatePageModule);
    return QuestionCreatePageModule;
}());

//# sourceMappingURL=question-create.module.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_question_question__ = __webpack_require__(308);
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
var QuestionCreatePage = (function () {
    function QuestionCreatePage(navCtrl, questionProvider) {
        this.navCtrl = navCtrl;
        this.questionProvider = questionProvider;
        this.questionDate = new Date().toISOString();
    }
    QuestionCreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionCreatePage');
    };
    QuestionCreatePage.prototype.createQuestion = function (questionName, questionDate) {
        var _this = this;
        this.questionProvider
            .createQuestion(questionName, questionDate)
            .then(function (newQuestion) {
            _this.navCtrl.pop();
        });
        console.log('Question submitted');
    };
    QuestionCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-question-create',template:/*ion-inline-start:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\pages\question-create\question-create.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>New Question</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-item>\n\n        <ion-label stacked>Question Name</ion-label>\n\n        <ion-input [(ngModel)]="questionName" type="text" placeholder="What\'s your question?">\n\n        </ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Question Date</ion-label>\n\n        <ion-datetime disabled displayFormat="D MMM YYYY, HH:mm" [(ngModel)]="questionDate"></ion-datetime>\n\n    </ion-item>\n\n    <button ion-button block (click)="createQuestion(questionName, questionDate)">\n\n        Submit your Question\n\n    </button>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\pages\question-create\question-create.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_question_question__["a" /* QuestionProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_question_question__["a" /* QuestionProvider */]) === "function" && _b || Object])
    ], QuestionCreatePage);
    return QuestionCreatePage;
    var _a, _b;
}());

//# sourceMappingURL=question-create.js.map

/***/ })

});
//# sourceMappingURL=4.js.map