webpackJsonp([0],{

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(523);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var ret = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
            .test(control.value);
        if (ret) {
            return null;
        }
        return {
            invalidEmail: true
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_email__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*import firebase from 'firebase';*/
/*import { FormControl } from '@angular/forms';*/
var SignupPage = (function () {
    function SignupPage(navCtrl, loadingCtrl, alertCtrl, authProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.signupForm = formBuilder.group({
            "firstName": [
                '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(15)])
            ],
            "lastName": [
                '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(15)])
            ],
            "email": [
                '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_email__["a" /* EmailValidator */].isValid])
            ],
            "password": [
                '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)])
            ],
            "gender": [
                '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
            ],
            "DOB": [
                '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
            ],
            "country": [
                '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
            ]
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        if (!this.signupForm.valid) {
            console.log("Need to complete the form, current value: " + this.signupForm.value);
        }
        else {
            var firstName = this.signupForm.value.firstName;
            var lastName = this.signupForm.value.lastName;
            var email = this.signupForm.value.email;
            var password = this.signupForm.value.password;
            var gender = this.signupForm.value.gender;
            var DOB = this.signupForm.value.DOB;
            var country = this.signupForm.value.country;
            this.authProvider.signupUser(firstName, lastName, email, password, gender, DOB, country).then(function (user) {
                _this.loading.dismiss().then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [{ text: "Ok", role: "cancel" }]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create({ content: "Signing Up" });
            this.loading.present();
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="page-signup">\n  <form [formGroup]="signupForm" (submit)="signupUser()" novalidate>\n    <ion-item>\n      <ion-label stacked>First Name</ion-label>\n      <ion-input formControlName="firstName" type="text" placeholder="Your first Name" [class.invalid]="!signupForm.controls.firstName.valid && signupForm.controls.firstName.touched"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!signupForm.controls.firstName.valid && signupForm.controls.firstName.touched">\n      <p>Your first name should be less than 15 characters.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Last Name</ion-label>\n      <ion-input formControlName="lastName" type="text" placeholder="Your last Name" [class.invalid]="!signupForm.controls.lastName.valid && signupForm.controls.lastName.touched"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!signupForm.controls.lastName.valid && signupForm.controls.lastName.touched">\n      <p>Your last name should be less than 15 characters.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input formControlName="email" type="email" placeholder="Your email address" [class.invalid]="!signupForm.controls.email.valid && signupForm.controls.email.touched"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!signupForm.controls.email.valid && signupForm.controls.email.touched">\n      <p>Please enter a valid email address.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input formControlName="password" type="password" placeholder="Your Password" [class.invalid]="!signupForm.controls.password.valid && signupForm.controls.password.touched"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!signupForm.controls.password.valid && signupForm.controls.password.touched">\n      <p>Password should be of or more than 6 characters.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Gender</ion-label>\n      <ion-select formControlName="gender" placeholder="Your Gender">\n        <ion-option value="Female">Female</ion-option>\n        <ion-option value="Male">Male</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Date of Birth</ion-label>\n      <ion-datetime formControlName="DOB" displayFormat="MMM D, YYYY" pickerFormat="D MMM YYYY" placeholder="Your Date of Birth"></ion-datetime>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label stacked>Destination</ion-label>\n      <ion-input formControlName="country" type="country" placeholder="In which country are you going to travel soon?" [class.invalid]="!signupForm.controls.country.valid && signupForm.controls.country.touched"></ion-input>\n    </ion-item>\n    <button ion-button color="secondary" text-center type="submit" [disabled]="!signupForm.valid">Register</button>\n    \n  </form>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=0.js.map