webpackJsonp([0],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_account__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agenda_agenda__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notif_notif__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_message__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__account_account__["a" /* AccountPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__agenda_agenda__["a" /* AgendaPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__message_message__["a" /* MessagePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__notif_notif__["a" /* NotifPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/konata/zadsm/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="1">\n  <ion-tab [root]="tab1Root" tabTitle="Compte" tabIcon="person"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Agenda" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Messages" tabIcon="chatboxes" tabBadge="1" tabBadgeStyle="danger"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Notifications" tabIcon="notifications" tabBadge="2" tabBadgeStyle="danger"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/konata/zadsm/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_geocoder__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ActDetailsPage } from "../act-details/act-details";
//import {GoogleMaps, MyLocation} from "@ionic-native/google-maps";



var AccountPage = /** @class */ (function () {
    function AccountPage(popoverCtrl, _GEOCODE, angFire) {
        var _this = this;
        this.popoverCtrl = popoverCtrl;
        this._GEOCODE = _GEOCODE;
        this.angFire = angFire;
        /** **/
        this.myAccount = [];
        this.testItem = this.angFire.list('user/jdoe', { preserveSnapshot: true }).map(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                _this.myAccount.push(snapshot.val());
                alert(snapshot.val());
                return 1;
            });
        });
    }
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/home/konata/zadsm/src/pages/account/account.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title text-center>\n      <ion-icon name="car"></ion-icon>\n      Taxi Alain\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-item-group>\n\n    <ion-item-divider style="line-height: 25px;" color="primary2">\n      Compte\n      <ion-icon (click)="presentPopover();" style="font-size: 25px;margin-right:10px;" float-right name="checkmark-circle"></ion-icon>\n    </ion-item-divider>\n    <ion-list>\n        <ion-item>\n            <small>Mot de passe</small>\n            <p>lel</p>\n        </ion-item>\n        <ion-item>\n          <p>{{myAccount}}</p>\n        </ion-item>\n\n      <ion-item><small>Position</small><p>{{test}}</p><p>{{myLat}}, {{myLng}}</p></ion-item>\n\n    </ion-list>\n\n\n  </ion-item-group>\n\n</ion-content>\n'/*ion-inline-end:"/home/konata/zadsm/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cal_details_cal_details__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgendaPage = /** @class */ (function () {
    function AgendaPage(navCtrl, navParm, plt, firebaseProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParm = navParm;
        this.plt = plt;
        this.firebaseProvider = firebaseProvider;
        this.newItem = '';
        this.today = new Date();
        this.plt.ready().then(function () {
            _this.date = _this.today.toLocaleDateString();
            _this.shoppingItems = _this.firebaseProvider.getShoppingItems();
        });
    }
    AgendaPage.prototype.addItem = function () {
        this.firebaseProvider.addItem(this.newItem);
    };
    AgendaPage.prototype.removeItem = function (id) {
        this.firebaseProvider.removeItem(id);
    };
    AgendaPage.prototype.goToPush = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cal_details_cal_details__["a" /* CalDetailsPage */], { courseId: id });
    };
    AgendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agenda',template:/*ion-inline-start:"/home/konata/zadsm/src/pages/agenda/agenda.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title text-center>\n      <ion-icon name="car"></ion-icon>\n      Taxi Alain\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<!--\n  <ion-item-group>\n\n    <ion-item-divider style="line-height: 25px;" color="primary2">\n      Aujourd\'hui - {{date}}\n      <ion-icon style="font-size: 25px;margin-right:10px;" float-right name="settings"></ion-icon>\n    </ion-item-divider>\n\n    <ion-item color="light">\n      <h2>07:00</h2>\n      <p>\n        <ion-icon name="car"></ion-icon>\n        1 rue de Paris, Metz\n      </p>\n    </ion-item>\n\n    <ion-item (click)="goToPush(\'000000\')" class="doing">\n      <h1>\n        08:00\n        <small><i>#000000</i></small>\n      </h1>\n      <h2>\n        <ion-icon name="car"></ion-icon>\n        11 Place du Forum - Metz\n      </h2>\n      <h2>\n        <ion-icon name="flag"></ion-icon>\n        3 Rue du Mouzon - Laxou\n      </h2>\n    </ion-item>\n\n    <ion-item color="light">\n      <h2>09:00</h2>\n      <p>\n        <ion-icon name="car"></ion-icon>\n        1 rue de Paris, Metz\n      </p>\n    </ion-item>\n\n    <ion-item color="light">\n      <h2>10:00</h2>\n      <p>\n        <ion-icon name="car"></ion-icon>\n        1 rue de Paris, Metz\n      </p>\n    </ion-item>\n\n    <ion-item color="light">\n      <h2>11:00</h2>\n      <p>\n        <ion-icon name="car"></ion-icon>\n        1 rue de Paris, Metz\n      </p>\n    </ion-item>\n\n    <ion-item color="light">\n      <h2>12:00</h2>\n      <p>\n        <ion-icon name="car"></ion-icon>\n        1 rue de Paris, Metz\n      </p>\n    </ion-item>\n\n  </ion-item-group>\n-->\n\n  <ion-row>\n    <ion-col col-9>\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="newItem" placeholder="New Shopping item"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <button ion-button (click)="addItem()">Add!</button>\n    </ion-col>\n  </ion-row>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of shoppingItems | async">\n      <ion-item>\n        {{ item.$value }}\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" icon-only (click)="removeItem(item.$key)"><ion-icon name="trash"></ion-icon></button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/konata/zadsm/src/pages/agenda/agenda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], AgendaPage);
    return AgendaPage;
}());

//# sourceMappingURL=agenda.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agd_map_agd_map__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalDetailsPage = /** @class */ (function () {
    function CalDetailsPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.courseId = this.navParams.get('courseId');
    }
    CalDetailsPage.prototype.ionViewDidLoad = function () { };
    CalDetailsPage.prototype.goToPush = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__agd_map_agd_map__["a" /* AgdMapPage */], { courseId: id });
    };
    CalDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cal-details',template:/*ion-inline-start:"/home/konata/zadsm/src/pages/cal-details/cal-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>\n      Course #{{courseId}}\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div id="map_canvas">\n    <ion-icon (click)="goToPush(courseId);" name="open" color="primary" class="myIcon"></ion-icon>\n  </div>\n  <ion-item-group>\n\n    <ion-item-divider color="light">Informations</ion-item-divider>\n    <ion-item><ion-icon name="person" margin-right></ion-icon>M John DOE</ion-item>\n    <ion-item><ion-icon name="call" margin-right></ion-icon>06.12.34.56.78</ion-item>\n    <ion-item><ion-icon name="car" margin-right></ion-icon>11 Place du Forum - Metz</ion-item>\n    <ion-item><ion-icon name="flag" margin-right></ion-icon>3 Rue du Mouzon - Laxou</ion-item>\n    <ion-item><ion-icon name="time" margin-right></ion-icon>08:00 - 08:30</ion-item>\n\n    <ion-item-divider color="light">Actions</ion-item-divider>\n    <ion-item>\n      <ion-row>\n\n        <ion-col text-center>\n          <button ion-button icon-only>\n            <ion-icon name="call"></ion-icon>\n          </button>\n        </ion-col>\n\n        <ion-col text-center>\n          <button ion-button icon-only>\n            <ion-icon name="share-alt"></ion-icon>\n          </button>\n        </ion-col>\n\n        <ion-col text-center>\n          <button ion-button icon-only>\n            <ion-icon name="camera"></ion-icon>\n          </button>\n        </ion-col>\n\n        <ion-col text-center>\n          <button color="info" ion-button icon-only>\n            <ion-icon name="alert"></ion-icon>\n          </button>\n        </ion-col>\n\n        <ion-col text-center>\n          <button color="danger" ion-button icon-only>\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-col>\n\n      </ion-row>\n    </ion-item>\n\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/home/konata/zadsm/src/pages/cal-details/cal-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], CalDetailsPage);
    return CalDetailsPage;
}());

//# sourceMappingURL=cal-details.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgdMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgdMapPage = /** @class */ (function () {
    function AgdMapPage(navCtrl, navParams, platform, _GEOCODE, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this._GEOCODE = _GEOCODE;
        this.geolocation = geolocation;
        this.courseId = this.navParams.get('courseId');
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
    }
    AgdMapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.initMap();
        });
    };
    AgdMapPage.prototype.initMap = function () {
        var _this = this;
        var latlong;
        this.geolocation.getCurrentPosition().then(function (position) {
            _this.myLat = position.coords.latitude;
            _this.myLng = position.coords.longitude;
            latlong = new google.maps.LatLng(_this.myLat, _this.myLng);
            _this.myLatLng = latlong;
            var map = new google.maps.Map(_this.mapElement.nativeElement, {
                zoom: 15,
                center: _this.myLatLng
            });
            _this.directionsDisplay.setMap(map);
            _this.directionsService.route({
                origin: _this.myLatLng,
                destination: { lat: 48.695858, lng: 6.123274 },
                waypoints: [
                    {
                        location: { lat: 49.117912, lng: 6.177136 },
                        stopover: true
                    }
                ],
                travelMode: 'DRIVING'
            }, function (response, status) {
                if (status === 'OK') {
                    _this.directionsDisplay.setDirections(response);
                }
                else {
                    alert('Directions request failed due to ' + status);
                }
            });
        }).catch(function (error) {
            alert('Error getting location ' + error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map_canvas2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AgdMapPage.prototype, "mapElement", void 0);
    AgdMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agd-map',template:/*ion-inline-start:"/home/konata/zadsm/src/pages/agd-map/agd-map.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Course #{{courseId}} - Plan\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div #map_canvas2 id="map_canvas2"></div>\n</ion-content>\n'/*ion-inline-end:"/home/konata/zadsm/src/pages/agd-map/agd-map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], AgdMapPage);
    return AgdMapPage;
}());

//# sourceMappingURL=agd-map.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseProvider = /** @class */ (function () {
    function FirebaseProvider(afd) {
        this.afd = afd;
    }
    /** ***************** **/
    /** ****USER DATA**** **/
    /** ***************** **/
    FirebaseProvider.prototype.getUser = function () {
        return this.afd.object('/user/');
    };
    FirebaseProvider.prototype.getShoppingItems = function () {
        return this.afd.list('/shoppingItems/');
    };
    FirebaseProvider.prototype.addItem = function (name) {
        this.afd.list('/shoppingItems/').push(name);
    };
    FirebaseProvider.prototype.removeItem = function (id) {
        this.afd.list('/shoppingItems/').remove(id);
    };
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotifPage = /** @class */ (function () {
    function NotifPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotifPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotifPage');
    };
    NotifPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notif',template:/*ion-inline-start:"/home/konata/zadsm/src/pages/notif/notif.html"*/'<!--\n  Generated template for the NotifPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title text-center>\n      <ion-icon name="car"></ion-icon>\n      Taxi Alain\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-item-group>\n\n    <ion-item-divider style="line-height: 25px;" color="primary2">Notifications</ion-item-divider>\n\n    <ion-item>\n      <h2>Notification</h2>\n      <p>\n        Notification notification\n      </p>\n      <small text-right item-end>08:00<br/>01/01/99</small>\n    </ion-item>\n    <ion-item>\n      <h2>Notification</h2>\n      <p>\n        Notification notification\n      </p>\n      <small text-right item-end>08:00<br/>01/01/99</small>\n    </ion-item>\n\n    <ion-item color="light">\n      Notification\n      <small text-right item-end>08:00<br/>01/01/99</small>\n    </ion-item>\n    <ion-item color="light">\n      Notification\n      <small text-right item-end>08:00<br/>01/01/99</small>\n    </ion-item>\n    <ion-item color="light">\n      Notification\n      <small text-right item-end>08:00<br/>01/01/99</small>\n    </ion-item>\n\n  </ion-item-group>\n\n</ion-content>\n'/*ion-inline-end:"/home/konata/zadsm/src/pages/notif/notif.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], NotifPage);
    return NotifPage;
}());

//# sourceMappingURL=notif.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__msg_details_msg_details__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__msg_new_msg_new__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagePage = /** @class */ (function () {
    function MessagePage(navCtrl, navParm, plt) {
        this.navCtrl = navCtrl;
        this.navParm = navParm;
        this.plt = plt;
        this.plt.ready().then(function () {
            //wot
        });
    }
    MessagePage.prototype.goToPush = function (page, id) {
        switch (page) {
            case 'MsgDetailsPage':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__msg_details_msg_details__["a" /* MsgDetailsPage */], { msgId: id });
                break;
            case 'MsgNewPage':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__msg_new_msg_new__["a" /* MsgNewPage */], { msgId: id });
                break;
        }
    };
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"/home/konata/zadsm/src/pages/message/message.html"*/'<!--\n  Generated template for the MessagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title text-center>\n      <ion-icon name="car"></ion-icon>\n      Taxi Alain\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-item-group>\n\n    <ion-item-divider style="line-height: 25px;" color="primary2">\n      Messages\n      <ion-icon (click)="goToPush(\'MsgNewPage\', 1)" style="font-size: 25px;margin-right:10px;" float-right name="add"></ion-icon>\n    </ion-item-divider>\n\n    <ion-item (click)="goToPush(\'MsgDetailsPage\', 1)">\n      <h2>John DOE</h2>\n      <p>\n        John DOE wants to send you his course\n      </p>\n      <small text-right item-end>08:00<br/>01/01/99</small>\n    </ion-item>\n\n    <ion-item color="light">\n      <h2>John DOE</h2>\n      <p>\n        Hey ! I\'m a message !\n      </p>\n      <small text-right item-end>08:00<br/>01/01/99</small>\n    </ion-item>\n    <ion-item color="light">\n      <h2>John DOE</h2>\n      <p>\n        Hey ! I\'m a message !\n      </p>\n      <small text-right item-end>08:00<br/>01/01/99</small>\n    </ion-item>\n\n  </ion-item-group>\n\n</ion-content>\n'/*ion-inline-end:"/home/konata/zadsm/src/pages/message/message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MsgDetailsPage = /** @class */ (function () {
    function MsgDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MsgDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MsgDetailsPage');
    };
    MsgDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-msg-details',template:/*ion-inline-start:"/home/konata/zadsm/src/pages/msg-details/msg-details.html"*/'<!--\n  Generated template for the MsgDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>\n      John DOE\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-item-group>\n\n    <ion-item no-margin text-left no-lines>\n      <h2>John DOE</h2>\n      <p>\n        Hi, are you here ? 😱😱\n      </p>\n      <small color="light" text-left>08:00 - 01/01/99</small>\n    </ion-item>\n\n    <ion-item text-right no-lines>\n      <p>\n        Hey ! What\'s up ? 😋\n      </p>\n      <small text-right>08:00 - 01/01/99</small>\n    </ion-item>\n\n    <ion-item text-left no-lines>\n      <h2>John DOE</h2>\n      <p>\n        Can you take care of my stuff today?<br/>\n        I\'ll be too busy ! 😭😭😭\n      </p>\n      <small color="light" text-left>08:00 - 01/01/99</small>\n    </ion-item>\n\n    <ion-item text-center no-lines>\n      <span class="mySpan">\n        John DOE wants to send you his course\n      </span>\n      <ion-row>\n        <ion-col text-right><button class="request" ion-button><ion-icon name="eye"></ion-icon></button></ion-col>\n        <ion-col><button class="request" color="secondary" ion-button><ion-icon name="checkmark"></ion-icon></button></ion-col>\n        <ion-col text-left><button class="request" color="danger" ion-button><ion-icon name="close"></ion-icon></button></ion-col>\n      </ion-row>\n    </ion-item>\n\n  </ion-item-group>\n  <ion-row class="myKeyboard">\n    <ion-col col-10>\n      <ion-input type="text" value=""></ion-input>\n    </ion-col>\n    <ion-col col-1>\n      <button ion-button><ion-icon name="paper-plane"></ion-icon></button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/konata/zadsm/src/pages/msg-details/msg-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], MsgDetailsPage);
    return MsgDetailsPage;
}());

//# sourceMappingURL=msg-details.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MsgNewPage = /** @class */ (function () {
    function MsgNewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MsgNewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MsgNewPage');
    };
    MsgNewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-msg-new',template:/*ion-inline-start:"/home/konata/zadsm/src/pages/msg-new/msg-new.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Nouveau message\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-item-group>\n\n    <ion-item-divider style="line-height: 25px;" color="primary2">\n          <ion-label>Destinataire</ion-label>\n          <ion-select>\n            <ion-option value="dest1">John DOE 1</ion-option>\n            <ion-option value="dest2">John DOE 2</ion-option>\n            <ion-option value="dest3">John DOE 3</ion-option>\n            <ion-option value="dest4">John DOE 4</ion-option>\n            <ion-option value="dest5">John DOE 5</ion-option>\n            <ion-option value="dest6">John DOE 6</ion-option>\n          </ion-select>\n    </ion-item-divider>\n\n  </ion-item-group>\n\n  <ion-row class="myKeyboard">\n    <ion-col col-10>\n      <ion-input type="text" value=""></ion-input>\n    </ion-col>\n    <ion-col col-1>\n      <button ion-button><ion-icon name="paper-plane"></ion-icon></button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/home/konata/zadsm/src/pages/msg-new/msg-new.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], MsgNewPage);
    return MsgNewPage;
}());

//# sourceMappingURL=msg-new.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(247);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mobiscroll_angular__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_account_account__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_act_details_act_details__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_agenda_agenda__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cal_details_cal_details__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_agd_map_agd_map__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_message_message__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_msg_details_msg_details__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_msg_new_msg_new__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_notif_notif__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_firebase_firebase__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_calendar__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_google_maps__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_geocoder_geocoder__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_native_geocoder__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/*            */












/*            */




var firebaseConfig = {
    apiKey: "AIzaSyAlKofmUNMYNPB0F1IEOLa373Pr_Iy4Hew",
    authDomain: "taxialain-e16f4.firebaseapp.com",
    databaseURL: "https://taxialain-e16f4.firebaseio.com",
    projectId: "taxialain-e16f4",
    storageBucket: "taxialain-e16f4.appspot.com",
    messagingSenderId: "129064210858"
};
/*            */







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                //
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                //
                __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_act_details_act_details__["a" /* ActDetailsPage */],
                //
                __WEBPACK_IMPORTED_MODULE_10__pages_agenda_agenda__["a" /* AgendaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cal_details_cal_details__["a" /* CalDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_agd_map_agd_map__["a" /* AgdMapPage */],
                //
                __WEBPACK_IMPORTED_MODULE_13__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_msg_details_msg_details__["a" /* MsgDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_msg_new_msg_new__["a" /* MsgNewPage */],
                //
                __WEBPACK_IMPORTED_MODULE_16__pages_notif_notif__["a" /* NotifPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__mobiscroll_angular__["a" /* MbscModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                //
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                //
                __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_act_details_act_details__["a" /* ActDetailsPage */],
                //
                __WEBPACK_IMPORTED_MODULE_10__pages_agenda_agenda__["a" /* AgendaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cal_details_cal_details__["a" /* CalDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_agd_map_agd_map__["a" /* AgdMapPage */],
                //
                __WEBPACK_IMPORTED_MODULE_13__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_msg_details_msg_details__["a" /* MsgDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_msg_new_msg_new__["a" /* MsgNewPage */],
                //
                __WEBPACK_IMPORTED_MODULE_16__pages_notif_notif__["a" /* NotifPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_calendar__["a" /* Calendar */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_26__providers_geocoder_geocoder__["a" /* GeocoderProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_firebase_firebase__["a" /* FirebaseProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from "../pages/home/home";

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        //rootPage:any = HomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/konata/zadsm/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/konata/zadsm/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.connect = function (login, password) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/konata/zadsm/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title text-center>\n      <ion-icon name="car"></ion-icon>\n      Taxi Alain\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding text-center>\n  <ion-list>\n\n    <ion-item>\n      <ion-label fixed>Username</ion-label>\n      <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>Password</ion-label>\n      <ion-input type="password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button (click)="connect(\'login\', \'password\');" ion-button block>Button</button>\n</ion-content>\n'/*ion-inline-end:"/home/konata/zadsm/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActDetailsPage = /** @class */ (function () {
    function ActDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ActDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActDetailsPage');
    };
    ActDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-act-details',template:/*ion-inline-start:"/home/konata/zadsm/src/pages/act-details/act-details.html"*/'<ion-content>\n  <ion-item-divider style="line-height: 25px;" color="primary2">\n    Disponibilité\n  </ion-item-divider>\n  <ion-item (click)="changeDispo(\'Disponible\');" color="light">Disponible</ion-item>\n  <ion-item (click)="changeDispo(\'En Course\');">En Course</ion-item>\n  <ion-item (click)="changeDispo(\'Indisponible\');">Indisponible</ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/konata/zadsm/src/pages/act-details/act-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], ActDetailsPage);
    return ActDetailsPage;
}());

//# sourceMappingURL=act-details.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocoderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
  Generated class for the GeocoderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GeocoderProvider = /** @class */ (function () {
    function GeocoderProvider(http) {
        this.http = http;
        console.log('Hello GeocoderProvider Provider');
    }
    GeocoderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GeocoderProvider);
    return GeocoderProvider;
}());

//# sourceMappingURL=geocoder.js.map

/***/ })

},[227]);
//# sourceMappingURL=main.js.map