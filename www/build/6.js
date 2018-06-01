webpackJsonp([6],{

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(516);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = (function () {
    function ProfilePage(navCtrl, alertCtrl, authProvider, profileProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.profileProvider = profileProvider;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.profileProvider.getUserProfile().on("value", function (userProfileSnapshot) {
            _this.userProfile = userProfileSnapshot.val();
            _this.DOB = userProfileSnapshot.val().DOB;
            _this.interestList = userProfileSnapshot.val().interestList;
            _this.gender = userProfileSnapshot.val().gender;
        });
    };
    ProfilePage.prototype.logOut = function () {
        var _this = this;
        this.authProvider.logoutUser().then(function () {
            _this.navCtrl.setRoot("LoginPage");
        });
    };
    ProfilePage.prototype.updateName = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Your fist & last name",
            inputs: [
                {
                    name: "firstName",
                    placeholder: "Your first name",
                    value: this.userProfile.firstName
                },
                {
                    name: "lastName",
                    placeholder: "Your last name",
                    value: this.userProfile.lastName
                }
            ],
            buttons: [
                { text: "Cancel" },
                {
                    text: "Save",
                    handler: function (data) {
                        _this.profileProvider.updateName(data.firstName, data.lastName);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updateDOB = function (DOB) {
        this.profileProvider.updateDOB(DOB);
    };
    ProfilePage.prototype.updateEmail = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            inputs: [{ name: 'newEmail', placeholder: 'Your new email' },
                { name: 'password', placeholder: 'Your password', type: 'password' }],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.profileProvider
                            .updateEmail(data.newEmail, data.password)
                            .then(function () { console.log('Email Changed Successfully'); })
                            .catch(function (error) { console.log('ERROR: ' + error.message); });
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updatePassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            inputs: [
                { name: 'newPassword', placeholder: 'New password', type: 'password' },
                { name: 'oldPassword', placeholder: 'Old password', type: 'password' }
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.profileProvider.updatePassword(data.newPassword, data.oldPassword);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updateInterests = function (interestList) {
        /*let alert: Alert = this.alertCtrl.create({
          inputs: [
            {
              name: 'newInterest',
              placeholder: "Your interest",
              value: this.userProfile.interestList
            }
          ],
          buttons: [
            { text: 'Cancel' },
            {
              text: 'Save',
              handler: data => {
                this.profileProvider.updateInterests(
                  data.newInterest
                );
              }
            }
          ]
        });
        alert.present();*/
        this.userProfile.interestList = interestList;
        this.profileProvider.updateInterests(interestList);
        console.log('Selected', interestList);
    };
    ProfilePage.prototype.updateGender = function (gender) {
        var _this = this;
        var alert = this.alertCtrl.create({
            inputs: [
                {
                    name: 'newGender',
                    placeholder: "Your Gender",
                    value: this.userProfile.gender
                }
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.profileProvider.updateGender(data.newGender);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.genderUpdate = function (value) {
        console.log('Selected gender', value);
        this.userProfile.gender = value;
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-profile",template:/*ion-inline-start:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Profile</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>Personal Information\n      <ion-badge>Me</ion-badge>\n    </ion-list-header>\n\n    <ion-item (click)="updateName()">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <ion-icon name="contact"> Name </ion-icon>\n          </ion-col>\n          <ion-col col-6 *ngIf="userProfile?.firstName || userProfile?.lastName">\n            {{userProfile?.firstName}} {{userProfile?.lastName}}\n          </ion-col>\n          <ion-col col-6 class="placeholder-profile" *ngIf="!userProfile?.firstName">\n            <span> Tap here to edit. </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="dob-label">\n        <ion-icon name="calendar"> Date of Birth </ion-icon>\n      </ion-label>\n      <ion-datetime displayFormat="MMM D, YYYY" pickerFormat="D MMM YYYY" [(ngModel)]="DOB" (ionChange)="updateDOB(DOB)">\n        <span> Tap here to edit. </span>\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item (click)="updateEmail()">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <ion-icon name="mail"> Email </ion-icon>\n          </ion-col>\n          <ion-col col-6 *ngIf="userProfile?.email">\n            {{userProfile?.email}}\n          </ion-col>\n          <ion-col col-6 class="placeholder-profile" *ngIf="!userProfile?.email">\n            <span> Tap here to edit. </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-item (click)="updatePassword()">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <ion-icon name="lock"> Password </ion-icon>\n          </ion-col>\n          <ion-col col-6 class="placeholder-profile">\n            <span> Tap here to edit. </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <!--\n    <ion-item (click)="updateInterests()">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <ion-icon name="bicycle"> Interests </ion-icon>\n          </ion-col>\n          <ion-col col-6 *ngIf="userProfile?.interestList">\n            {{userProfile?.interestList}}\n          </ion-col>\n          <ion-col col-6 class="placeholder-profile" *ngIf="!userProfile?.interestList">\n            <span> Tap here to edit.{{userProfile?.interestList}} </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  \n\n    <ion-item (click)="updateGender()">\n      <ion-grid item-content>\n        <ion-row>\n          <ion-col col-6>\n            <ion-icon name="contacts"> Gender </ion-icon>\n          </ion-col>\n          <ion-col col-6 *ngIf="userProfile?.gender">\n            {{userProfile?.gender}}\n          </ion-col>\n          <ion-col col-6 class="placeholder-profile" *ngIf="!userProfile?.gender">\n            <span> Tap here to edit.{{userProfile?.gender}} </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n-->\n    <ion-item>\n      <ion-grid item-content>\n        <ion-row>\n          <ion-col col-6>\n            <ion-icon name="contacts"> Gender </ion-icon>\n          </ion-col>\n          <ion-col col-6 *ngIf="userProfile?.gender">\n            <ion-select [(ngModel)]="gender" (ionChange)="genderUpdate($event)">\n              {{userProfile?.gender}}\n              <ion-option value="Female">Female</ion-option>\n              <ion-option value="Male">Male</ion-option>\n            </ion-select>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-grid item-content>\n        <ion-row>\n          <ion-col col-6>\n            <ion-icon name="bicycle"> Interests </ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-select [(ngModel)]="interestList" multiple="true" (ionChange)="updateInterests(interestList)">\n              <ion-option>Museum visiting</ion-option>\n              <ion-option>Food testing</ion-option>\n              <ion-option>Explore sightseeing</ion-option>\n              <ion-option>Trekking</ion-option>\n              <ion-option>Experience Nightlife</ion-option>\n              <ion-option>Watching live sports events</ion-option>\n              <ion-option>Parks</ion-option>\n            </ion-select>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-item>\n\n\n\n\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=6.js.map