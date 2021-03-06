webpackJsonp([1],{

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailSettingsModalPageModule", function() { return EmailSettingsModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_settings_modal__ = __webpack_require__(437);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmailSettingsModalPageModule = /** @class */ (function () {
    function EmailSettingsModalPageModule() {
    }
    EmailSettingsModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__email_settings_modal__["a" /* EmailSettingsModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__email_settings_modal__["a" /* EmailSettingsModalPage */]),
            ],
        })
    ], EmailSettingsModalPageModule);
    return EmailSettingsModalPageModule;
}());

//# sourceMappingURL=email-settings-modal.module.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailSettingsModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailSettingsModalPage = /** @class */ (function () {
    function EmailSettingsModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.emailSettings = this.navParams.get("emailSettings");
        //   buildEmailSettings(this.navParams.get('to'),
        // this.navParams.get('subject'),this.navParams.get('body'));
    }
    EmailSettingsModalPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    EmailSettingsModalPage.prototype.save = function () {
        console.log('email verzenden ingesteld: ' + this.emailSettings.to);
        this.viewCtrl.dismiss(this.emailSettings);
    };
    EmailSettingsModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmailSettingsModalPage');
    };
    EmailSettingsModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-email-settings-modal',template:/*ion-inline-start:"/Users/mabe/projects/nl/sasem/sasem-app/src/pages/email-settings-modal/email-settings-modal.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Email instellingen</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>e-mail adres</ion-label>\n      <ion-input type="email" [(ngModel)]="emailSettings.to"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>onderwerpregel</ion-label>\n      <ion-input type="text" [(ngModel)]="emailSettings.subject"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Tekst in email</ion-label>\n      <ion-input type="text" [(ngModel)]="emailSettings.body"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button full icon-left (click)="save()">\n    instellingen opslaan\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/mabe/projects/nl/sasem/sasem-app/src/pages/email-settings-modal/email-settings-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], EmailSettingsModalPage);
    return EmailSettingsModalPage;
}());

//# sourceMappingURL=email-settings-modal.js.map

/***/ })

});
//# sourceMappingURL=1.js.map