webpackJsonp([6],{

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionCreatePageModule", function() { return QuestionCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_create__ = __webpack_require__(517);
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

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_question_question__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionCreatePage = (function () {
    function QuestionCreatePage(navCtrl, questionProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.questionProvider = questionProvider;
        this.formBuilder = formBuilder;
        this.questionDate = new Date().toString();
        this.questionForm = formBuilder.group({
            'questionName': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])]
        });
    }
    QuestionCreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionCreatePage');
    };
    QuestionCreatePage.prototype.createQuestion = function (questionName, questionDate, uid, umail, qlikes, qdislikes, answers) {
        var _this = this;
        var qName = this.questionForm.value.questionName;
        uid = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid;
        umail = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.email;
        var qlikes = 0;
        var qdislikes = 0;
        var answers = 0;
        this.questionProvider
            .createQuestion(qName, questionDate, uid, umail, qlikes, qdislikes, answers)
            .then(function (newQuestion) {
            _this.navCtrl.pop();
        });
        console.log('Question submitted');
    };
    QuestionCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-question-create',template:/*ion-inline-start:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\pages\question-create\question-create.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>New Question</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n\n\n\n\n    <form [formGroup]="questionForm">\n\n        <ion-item>\n\n            <ion-label floating>What\'s your question?</ion-label>\n\n            <ion-input formControlName="questionName"></ion-input>\n\n        </ion-item>\n\n        <button ion-button [disabled]="!questionForm.valid" block (click)="createQuestion(questionName, questionDate)">Submit</button>\n\n    </form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\pages\question-create\question-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_question_question__["a" /* QuestionProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], QuestionCreatePage);
    return QuestionCreatePage;
}());

//# sourceMappingURL=question-create.js.map

/***/ })

});
//# sourceMappingURL=6.js.map