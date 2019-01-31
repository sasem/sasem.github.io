webpackJsonp([2],{

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaregiversModalPageModule", function() { return CaregiversModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__care_giver_modal__ = __webpack_require__(436);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CaregiversModalPageModule = /** @class */ (function () {
    function CaregiversModalPageModule() {
    }
    CaregiversModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__care_giver_modal__["a" /* CaregiversModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__care_giver_modal__["a" /* CaregiversModalPage */]),
            ],
        })
    ], CaregiversModalPageModule);
    return CaregiversModalPageModule;
}());

//# sourceMappingURL=care-giver-modal.module.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaregiversModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_care_giver_care_giver__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_care_giver_modal_edit_care_giver_modal__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CaregiversModalPage = /** @class */ (function () {
    function CaregiversModalPage(careGiverProvider, modalCtrl, viewCtrl) {
        this.careGiverProvider = careGiverProvider;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.selector = new Date(Date.now()).toISOString();
        this.loadCareGiversIntoPageContext();
    }
    CaregiversModalPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    CaregiversModalPage.prototype.openAddCareGiver = function () {
        var _this = this;
        var modal = this.modalCtrl.create("AddCaregiverModalPage", {});
        modal.onDidDismiss(function (extraCareGiver) {
            if ("undefined" !== typeof extraCareGiver) {
                _this.careGivers.push(extraCareGiver);
            }
        });
        modal.present();
    };
    CaregiversModalPage.prototype.openEditCareGiverModal = function (selectedCareGiver) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__edit_care_giver_modal_edit_care_giver_modal__["a" /* EditCareGiverModalPage */], { "selectedCareGiver": selectedCareGiver });
        modal.onDidDismiss(function (editedCareGiver) {
            if ("undefined" !== typeof editedCareGiver) {
                _this.careGivers.filter(function (it) { return it.code == editedCareGiver.code; })
                    .forEach(function (it) {
                    it.name = editedCareGiver.name;
                });
            }
        });
        modal.present();
    };
    CaregiversModalPage.prototype.switchActiveState = function (careGiver) {
        this.careGiverProvider.updateCareGiver(careGiver);
    };
    CaregiversModalPage.prototype.loadCareGiversIntoPageContext = function () {
        var _this = this;
        this.careGiverProvider.getAllCareGivers().then(function (loadedCareGivers) {
            _this.careGivers = loadedCareGivers;
        });
    };
    CaregiversModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-caregivers',template:/*ion-inline-start:"/Users/mabe/projects/nl/sasem/sasem-app/src/pages/care-giver-modal/care-giver-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Zorgverleners</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor="let careGiver of careGivers">\n        <button ion-button icon-only item-right  (click)="openEditCareGiverModal(careGiver)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n      <ion-label>\n        {{ careGiver.name }}</ion-label>\n      <ion-toggle [(ngModel)]="careGiver.active" (ngModelChange)="switchActiveState(careGiver)"></ion-toggle>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n\n<ion-fab bottom right>\n  <button ion-fab icon-only (click)="openAddCareGiver()">\n    <ion-icon name="add"></ion-icon>\n  </button>\n</ion-fab>\n\n'/*ion-inline-end:"/Users/mabe/projects/nl/sasem/sasem-app/src/pages/care-giver-modal/care-giver-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_care_giver_care_giver__["a" /* CareGiverProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], CaregiversModalPage);
    return CaregiversModalPage;
}());

//# sourceMappingURL=care-giver-modal.js.map

/***/ })

});
//# sourceMappingURL=2.js.map