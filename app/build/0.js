webpackJsonp([0],{

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModalPageModule", function() { return EventModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_modal__ = __webpack_require__(438);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventModalPageModule = /** @class */ (function () {
    function EventModalPageModule() {
    }
    EventModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event_modal__["a" /* EventModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_modal__["a" /* EventModalPage */]),
            ],
        })
    ], EventModalPageModule);
    return EventModalPageModule;
}());

//# sourceMappingURL=event-modal.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_care_giver_care_giver__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_care_type_care_type__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_provided_care_service_provided_care_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventModalPage = /** @class */ (function () {
    function EventModalPage(navCtrl, navParams, viewCtrl, careGiverProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.event = Object(__WEBPACK_IMPORTED_MODULE_5__providers_provided_care_service_provided_care_service__["b" /* createDefaultProvidedCare */])();
        this.careType = __WEBPACK_IMPORTED_MODULE_4__providers_care_type_care_type__["b" /* CareType */];
        this.selectableCareTypes = __WEBPACK_IMPORTED_MODULE_4__providers_care_type_care_type__["c" /* SelectableCareTypes */];
        var selectedDay = this.navParams.get('selectedDay');
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_2_moment__(selectedDay).format();
        this.event.careGiver = this.navParams.get('careGiver');
        this.event.careType = this.navParams.get('careType');
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
        this.careGivers = [];
        careGiverProvider.getActiveCareGivers().then(function (loadedCareGivers) {
            _this.careGivers = loadedCareGivers;
        });
    }
    EventModalPage.prototype.setDuration = function (duration) {
        this.event.duration = duration;
    };
    EventModalPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    EventModalPage.prototype.save = function () {
        this.viewCtrl.dismiss(this.event);
    };
    EventModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-modal',template:/*ion-inline-start:"/Users/mabe/projects/nl/sasem/sasem-app/src/pages/event-modal/event-modal.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Voeg afgenomen zorg toe voor {{event.startTime | date }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>Wie</ion-label>\n      <ion-select [(ngModel)]="event.careGiver" interface="popover">\n        <ion-option *ngFor="let careGiver of careGivers" value="{{careGiver.code}}">{{careGiver.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Wat</ion-label>\n      <ion-select [(ngModel)]="event.careType" interface="popover">\n        <ion-option *ngFor="let selectableCareType of selectableCareTypes" \n            value="{{selectableCareType.careType}}">{{selectableCareType.description}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n\n    <div [ngSwitch]="event.careType">\n        <div *ngSwitchCase="careType.PERSONAL_CARE">\n            <ion-item>\n                <ion-label>Duur</ion-label>\n                <ion-input type="number" [ngModel]="event.duration"\n                           (input)="setDuration($event.target.value)"></ion-input>\n            </ion-item>\n          </div>\n\n      <div *ngSwitchCase="careType.NURSING">\n        <ion-item>\n            <ion-label>Duur</ion-label>\n            <ion-input type="number" [ngModel]="event.duration"\n                       (input)="setDuration($event.target.value)"></ion-input>\n        </ion-item>\n      </div>\n\n      <div *ngSwitchCase="careType.INDIVIDUAL_GUIDANCE">\n        <ion-item>\n            <ion-label>Duur</ion-label>\n            <ion-input type="number" [ngModel]="event.duration"\n                       (input)="setDuration($event.target.value)"></ion-input>\n        </ion-item>\n      </div>\n\n      <div *ngSwitchCase="careType.GROUP_GUIDANCE">\n        <ion-item>\n            <ion-label>Duur</ion-label>\n            <ion-input type="number" [ngModel]="event.duration"\n                       (input)="setDuration($event.target.value)"></ion-input>\n        </ion-item>\n      </div>\n\n\n      <div *ngSwitchCase="careType.DOMESTIC_ASSISTANCE">\n        <ion-item>\n            <ion-label>Duur</ion-label>\n            <ion-input type="number" [ngModel]="event.duration"\n                       (input)="setDuration($event.target.value)"></ion-input>\n        </ion-item>\n      </div>\n\n      <div *ngSwitchCase="careType.TRANSPORTATION">\n        <ion-item>\n          <ion-label>Wanneer</ion-label>\n          <ion-select [(ngModel)]="event.moment" interface="popover">\n            <ion-option value="ochtend">\'s morgens</ion-option>\n            <ion-option value="middag">\'s middags</ion-option>\n          </ion-select> \n        </ion-item>\n      </div>\n    </div>\n\n  </ion-list>\n\n  <button ion-button full icon-left (click)="save()">\n    <ion-icon name="checkmark"></ion-icon> Add Event\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/mabe/projects/nl/sasem/sasem-app/src/pages/event-modal/event-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_care_giver_care_giver__["a" /* CareGiverProvider */]])
    ], EventModalPage);
    return EventModalPage;
}());

//# sourceMappingURL=event-modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map