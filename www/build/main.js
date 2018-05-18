webpackJsonp([9],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthProvider = (function () {
    function AuthProvider() {
    }
    AuthProvider.prototype.loginUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.googleLogin = function () {
        console.log("googleLogin started.");
        var provider = new __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth.GoogleAuthProvider();
        if (!window.cordova) {
            return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithPopup(provider);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithRedirect(provider).then(function () {
                return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().getRedirectResult().then(function (result) {
                    // This gives you a Google Access Token.
                    // You can use it to access the Google API.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    console.log(token, user);
                }).catch(function (error) {
                    console.log(error.message);
                });
            }).catch(function (error) {
                console.log(error.message);
            });
        }
    };
    AuthProvider.prototype.signupUser = function (firstName, lastName, email, password, gender, DOB, country) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(function (newUser) {
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
                .database()
                .ref("/userProfile/" + newUser.uid + "/firstName")
                .set(firstName);
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
                .database()
                .ref("/userProfile/" + newUser.uid + "/lastName")
                .set(lastName);
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
                .database()
                .ref("/userProfile/" + newUser.uid + "/email")
                .set(email);
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
                .database()
                .ref("/userProfile/" + newUser.uid + "/gender")
                .set(gender);
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
                .database()
                .ref("/userProfile/" + newUser.uid + "/DOB")
                .set(DOB);
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
                .database()
                .ref("/userProfile/" + newUser.uid + "/country")
                .set(country);
        })
            .catch(function (error) {
            console.error(error);
            throw new Error(error);
        });
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.logoutUser = function () {
        var userId = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid;
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("/userProfile/" + userId)
            .off();
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(151);
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





var HomePage = (function () {
    function HomePage(navCtrl, authProvider, profileProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.profileProvider = profileProvider;
        this.searchValue = "";
        this.country = {};
        this.countryRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/countries');
        this.countryRef.on('value', function (countryList) {
            var countries = [];
            countryList.forEach(function (country) {
                countries.push({
                    id: country.val().key,
                    name: country.val().name,
                    code: country.val().code
                });
                return false;
            });
            _this.countryList = countries;
            _this.loadedCountryList = countries;
        });
    }
    HomePage.prototype.goToProfile = function () {
        this.navCtrl.push("ProfilePage");
    };
    HomePage.prototype.logOut = function () {
        var _this = this;
        this.authProvider.logoutUser().then(function () {
            _this.navCtrl.setRoot("LoginPage");
        });
    };
    HomePage.prototype.goToCreate = function () {
        this.navCtrl.push('EventCreatePage');
    };
    HomePage.prototype.goToList = function () {
        this.navCtrl.push('EventListPage');
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.profileProvider.getUserProfile().on("value", function (userProfileSnapshot) {
            _this.userProfile = userProfileSnapshot.val();
        });
    };
    HomePage.prototype.initializeCountries = function () {
        this.countryList = this.loadedCountryList;
    };
    HomePage.prototype.getCountries = function (searchbar) {
        // Reset items back to all of the items
        this.initializeCountries();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.countryList = this.countryList.filter(function (v) {
            if (v.name && q) {
                if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        console.log(q, this.countryList.length);
    };
    HomePage.prototype.updateCountry = function (Selcountry) {
        this.userProfile.country = Selcountry;
        this.profileProvider.updateCountry(Selcountry);
        console.log('Selected country', Selcountry);
    };
    HomePage.prototype.CreateQuestion = function () {
        this.navCtrl.push('QuestionCreatePage');
    };
    HomePage.prototype.goToQuestionList = function () {
        this.navCtrl.push('QuestionListPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only *ngIf="userProfile?.firstName" (click)="goToProfile()">\n        <ion-icon name="person">Profile</ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="page-home">\n  <h3 col-6 *ngIf="userProfile?.firstName || userProfile?.lastName;else guest">\n    Welcome, {{userProfile?.firstName}} {{userProfile?.lastName}}!\n  </h3>\n  <ng-template #guest>\n    <h3> Welcome guest!</h3>\n  </ng-template>\n  <button ion-button block color="primary" (click)="goToCreate()">\n    Create a new Event\n  </button>\n  <button ion-button block color="primary" (click)="goToList()">\n    See your events\n  </button>\n\n  <button ion-button block color="primary" (click)="CreateQuestion()">\n    Ask a new Question\n  </button>\n  <button ion-button block color="primary" (click)="goToQuestionList()">\n    Question List\n  </button>\n\n\n\n  <ion-label stacked>In which country are you going to travel ?</ion-label>\n  <ion-searchbar [(ngModel)]="searchValue" (ionInput)="getCountries($event)"></ion-searchbar>\n  <ion-list *ngIf="searchValue.length >= 1">\n    <ion-item  *ngFor="let country of countryList">\n      <h2> {{ country.name }} </h2>\n      <h3> Code:\n        <strong>{{ country.code }}</strong>\n      </h3>\n      <ion-item (click)="updateCountry(country.name)"> <h4>Lets travel!</h4></ion-item>\n    </ion-item>\n    <ion-item *ngIf="userProfile?.country">\n      <h3>Your destination is {{userProfile?.country}}!</h3>\n    </ion-item>\n  </ion-list>\n\n  <ion-label stacked>Top3 Destinations</ion-label>\n  <ion-list>\n\n  </ion-list>\n  <ion-grid>\n    <ion-row>\n      <ion-col col6>\n        <h3>Dest 1</h3>\n      </ion-col>\n      <ion-col col6>\n        <h3>Dest 2</h3>\n      </ion-col>\n      <ion-col col6>\n        <h3>Dest 3</h3>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <button ion-button block (click)="logOut()">Logout</button>\n</ion-content>'/*ion-inline-end:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  an  updateInterests: any;
d Angular DI.
*/
var ProfileProvider = (function () {
    function ProfileProvider() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.currentUser = user;
                _this.userProfile = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("/userProfile/" + user.uid);
            }
        });
    }
    ProfileProvider.prototype.getUserProfile = function () {
        return this.userProfile;
    };
    ProfileProvider.prototype.updateName = function (firstName, lastName) {
        return this.userProfile.update({ firstName: firstName, lastName: lastName });
    };
    ProfileProvider.prototype.updateDOB = function (DOB) {
        return this.userProfile.update({ DOB: DOB });
    };
    ProfileProvider.prototype.updateEmail = function (newEmail, password) {
        var _this = this;
        var credential = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth.EmailAuthProvider.credential(this.currentUser.email, password);
        return this.currentUser.reauthenticateWithCredential(credential).then(function (user) {
            _this.currentUser.updateEmail(newEmail).then(function (user) {
                _this.userProfile.update({ email: newEmail });
            });
        }).catch(function (error) {
            console.error(error);
        });
    };
    ProfileProvider.prototype.updatePassword = function (newPassword, oldPassword) {
        var _this = this;
        var credential = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth.EmailAuthProvider.credential(this.currentUser.email, oldPassword);
        return this.currentUser.reauthenticateWithCredential(credential).then(function (user) {
            _this.currentUser.updatePassword(newPassword).then(function (user) {
                console.log('Password Changed');
            });
        }).catch(function (error) {
            console.error(error);
        });
    };
    ProfileProvider.prototype.updateInterests = function (interestList) {
        return this.userProfile.update({ interestList: interestList });
    };
    ProfileProvider.prototype.updateGender = function (gender) {
        return this.userProfile.update({ gender: gender });
    };
    ProfileProvider.prototype.updateCountry = function (country) {
        return this.userProfile.update({ country: country });
    };
    ProfileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProfileProvider);
    return ProfileProvider;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/event-create/event-create.module": [
		501,
		8
	],
	"../pages/event-detail/event-detail.module": [
		502,
		7
	],
	"../pages/event-list/event-list.module": [
		503,
		6
	],
	"../pages/login/login.module": [
		504,
		2
	],
	"../pages/profile/profile.module": [
		505,
		5
	],
	"../pages/question-create/question-create.module": [
		506,
		4
	],
	"../pages/question-list/question-list.module": [
		507,
		3
	],
	"../pages/reset-password/reset-password.module": [
		508,
		1
	],
	"../pages/signup/signup.module": [
		509,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 206;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EventProvider = (function () {
    function EventProvider() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.eventListRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
                    .database()
                    .ref("/userProfile/" + user.uid + "/eventList");
            }
        });
    }
    EventProvider.prototype.createEvent = function (eventName, eventDate, eventPrice, eventCost) {
        return this.eventListRef.push({
            name: eventName,
            date: eventDate,
            price: eventPrice * 1,
            cost: eventCost * 1,
            revenue: eventCost * -1
        });
    };
    EventProvider.prototype.getEventList = function () {
        return this.eventListRef;
    };
    EventProvider.prototype.getEventDetail = function (eventId) {
        return this.eventListRef.child(eventId);
    };
    EventProvider.prototype.addGuest = function (guestName, eventId, eventPrice) {
        var _this = this;
        return this.eventListRef
            .child(eventId + "/guestList")
            .push({ guestName: guestName })
            .then(function (newGuest) {
            _this.eventListRef.child(eventId).transaction(function (event) {
                event.revenue += eventPrice;
                return event;
            });
        });
    };
    EventProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EventProvider);
    return EventProvider;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionProvider = (function () {
    function QuestionProvider() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.QuestionListRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
                    .database()
                    .ref("/countries/questionList");
            }
        });
    }
    QuestionProvider.prototype.createQuestion = function (questionName, questionDate) {
        return this.QuestionListRef.push({
            name: questionName,
            date: questionDate
        });
    };
    QuestionProvider.prototype.getQuestionList = function () {
        return this.QuestionListRef;
    };
    QuestionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], QuestionProvider);
    return QuestionProvider;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(331);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_event_event__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_profile_profile__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_question_question__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_plus__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var firebaseConfig = {
    apiKey: "AIzaSyAMXFGqwJQP_ffWx12uPGWQDNjXGDGKiro",
    authDomain: "eventmanager-b4218.firebaseapp.com",
    databaseURL: "https://eventmanager-b4218.firebaseio.com",
    projectId: "eventmanager-b4218",
    storageBucket: "",
    messagingSenderId: "608818035720"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/event-create/event-create.module#EventCreatePageModule', name: 'EventCreatePage', segment: 'event-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-detail/event-detail.module#EventDetailPageModule', name: 'EventDetailPage', segment: 'event-detail/:eventId', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-list/event-list.module#EventListPageModule', name: 'EventListPage', segment: 'event-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/question-create/question-create.module#QuestionCreatePageModule', name: 'QuestionCreatePage', segment: 'question-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/question-list/question-list.module#EventListPageModule', name: 'QuestionListPage', segment: 'question-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["a" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_event_event__["a" /* EventProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_10__providers_question_question__["a" /* QuestionProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__credentials__ = __webpack_require__(459);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.initializeApp(__WEBPACK_IMPORTED_MODULE_6__credentials__["a" /* firebaseConfig */]);
        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a
            .auth()
            .getRedirectResult()
            .then(function (result) {
            if (result.credential) {
                var token = result.credential.accessToken;
                var user = result.user;
                console.log(token, user);
            }
        })
            .catch(function (error) {
            // Handle Errors here.
            var errorMessage = error.message;
            console.log(errorMessage);
        });
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (!user) {
                _this.rootPage = 'LoginPage';
                unsubscribe();
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                unsubscribe();
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Christos\Documents\GitHub\Travel app\Travel-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAMXFGqwJQP_ffWx12uPGWQDNjXGDGKiro",
    authDomain: "eventmanager-b4218.firebaseapp.com",
    databaseURL: "https://eventmanager-b4218.firebaseio.com",
    projectId: "eventmanager-b4218",
    storageBucket: "",
    messagingSenderId: "608818035720"
};
//# sourceMappingURL=credentials.js.map

/***/ })

},[310]);
//# sourceMappingURL=main.js.map