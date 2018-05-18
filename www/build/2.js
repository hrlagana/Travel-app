webpackJsonp([2],{

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(514);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 510:
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

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_email__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(309);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    /*###*/
    function LoginPage(navCtrl, loadingCtrl, alertCtrl, authProvider, formBuilder, googlePlus) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.googlePlus = googlePlus;
        /*###*/
        this.userProfile = null;
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_email__["a" /* EmailValidator */].isValid])
            ],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)])
            ]
        });
        /*###*/
        __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user);
                _this.userProfile = user;
            }
            else {
                console.log("There's no user here");
            }
        });
        /*###*/
    }
    /*ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
    }*/
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push('SignupPage');
    };
    LoginPage.prototype.goToResetPassword = function () {
        this.navCtrl.push('ResetPasswordPage');
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log("Form is not valid yet, current value: " + this.loginForm.value);
        }
        else {
            var email = this.loginForm.value.email;
            var password = this.loginForm.value.password;
            this.authProvider.loginUser(email, password).then(function (authData) {
                _this.loading.dismiss().then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                });
            }, function (error) {
                var alert = _this.alertCtrl.create({
                    message: error.message,
                    buttons: [{ text: 'Ok', role: 'cancel' }]
                });
                _this.loading.dismiss();
                alert.present();
            });
            this.loading = this.loadingCtrl.create({ content: "Logging In" });
            this.loading.present();
        }
    };
    /*###*/
    LoginPage.prototype.googleLogin = function () {
        var _this = this;
        this.googlePlus.login({ 'webClientId': '608818035720-3nrc4058j3arghfbegkgeqcc8m9vqp2k.apps.googleusercontent.com', 'offline': true }).then(function (authData) {
            var googleCredential = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth.GoogleAuthProvider.credential(authData.idToken);
            __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().signInWithCredential(googleCredential)
                .then(function (response) {
                console.log("Firebase success: " + JSON.stringify(response));
                _this.loading.dismiss().then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                });
            });
        }, function (error) {
            var alert = _this.alertCtrl.create({
                message: error.message,
                buttons: [{ text: 'Ok', role: 'cancel' }]
            });
            _this.loading.dismiss();
            alert.present();
        });
        this.loading = this.loadingCtrl.create({ content: "Logging In" });
        this.loading.present();
        /*###*/
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\pages\login\login.html"*/'<form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n  <ion-item>\n    <ion-label stacked>Email</ion-label>\n    <ion-input formControlName="email" type="email" placeholder="Your email address" [class.invalid]="!loginForm.controls.email.valid && blur">\n    </ion-input>\n  </ion-item>\n  <ion-item class="error-message" *ngIf="!loginForm.controls.email.valid && loginForm.controls.email.touched">\n    <p>Please enter a valid email address.</p>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>Password</ion-label>\n    <ion-input formControlName="password" type="password" placeholder="Your password" [class.invalid]="!loginForm.controls.password.valid && blur">\n    </ion-input>\n  </ion-item>\n  <ion-item class="error-message" *ngIf="!loginForm.controls.password.valid && loginForm.controls.password.touched">\n    <p>Your password needs to be more than 6 characters.</p>\n  </ion-item>\n  <button ion-button block type="submit" [disabled]="!loginForm.valid">\n    Log In!\n  </button>\n</form>\n\n<button ion-button block (click)="googleLogin()" *ngIf="!userProfile">\n  <ion-icon name="logo-googleplus"> Google Login!</ion-icon>\n</button>\n\n<ion-card *ngIf="userProfile">\n  <ion-card-header>\n    {{ userProfile.email }}\n  </ion-card-header>\n  <ion-card-content>\n  </ion-card-content>\n</ion-card>\n\n<button ion-button block clear (click)="goToSignup()">\n  Don\'t have an account yet? Sign up.\n</button>\n\n<button ion-button block clear (click)="goToResetPassword()">\n  Forgot password?\n</button>\n'/*ion-inline-end:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=2.js.map