webpackJsonp([9],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_load_data_for_selected_month_load_data_for_selected_month__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_provided_care_service_provided_care_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_care_giver_care_giver__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_email_settings_email_settings__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_care_type_care_type__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EventViewPage = /** @class */ (function () {
    function EventViewPage(navCtrl, navParams, providedCareService, careGiverProvider, loadDataForSelectedMonth, emailSettingsProvider, emailComposer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.providedCareService = providedCareService;
        this.careGiverProvider = careGiverProvider;
        this.loadDataForSelectedMonth = loadDataForSelectedMonth;
        this.emailSettingsProvider = emailSettingsProvider;
        this.emailComposer = emailComposer;
        this.monthToShow = new Date();
        this.careGiverSelection = "";
        this.careGivers = [];
        careGiverProvider.getActiveCareGivers().then(function (loadedCareGivers) {
            _this.careGivers = loadedCareGivers;
        });
    }
    //todo netter maken, nu domweg doogesluisd
    EventViewPage.prototype.loadCareForMonthToShow = function () {
        this.loadDataForSelectedMonth.loadCareForMonthToShow(this.monthToShow, this.careGiverSelection, this.careTypeSelection);
    };
    EventViewPage.prototype.goToPreviousMonth = function () {
        var newDisplayDate = new Date(this.monthToShow);
        newDisplayDate.setMonth(newDisplayDate.getMonth() - 1);
        this.monthToShow = newDisplayDate;
        this.loadCareForMonthToShow();
    };
    EventViewPage.prototype.goToNextMonth = function () {
        var newDisplayDate = new Date(this.monthToShow);
        newDisplayDate.setMonth(newDisplayDate.getMonth() + 1);
        this.monthToShow = newDisplayDate;
        this.loadCareForMonthToShow();
    };
    //todo netter maken, nu domweg doogesluisd
    EventViewPage.prototype.getDays = function () {
        return this.loadDataForSelectedMonth.getDays();
    };
    //todo netter maken, nu domweg doogesluisd
    EventViewPage.prototype.getEvents = function (day) {
        return this.loadDataForSelectedMonth.getEvents(day);
    };
    EventViewPage.prototype.ionViewDidLoad = function () {
        this.loadCareForMonthToShow();
    };
    EventViewPage.prototype.showDuration = function (event) {
        return __WEBPACK_IMPORTED_MODULE_7__providers_care_type_care_type__["a" /* CARE_TYPES_WITH_DURATION */].find(function (it) { return it == event.careType; });
    };
    EventViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-view',template:/*ion-inline-start:"/Users/mabe/projects/nl/sasem/sasem-app/src/pages/event-view/event-view.html"*/'\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n      <ion-buttons>\n        <button icon-button icon-only (click)="goToPreviousMonth()">\n          <ion-icon name="arrow-dropleft-circle"></ion-icon>\n        </button>\n\n\n      <button icon-button icon-only (click)="goToNextMonth()">\n        <ion-icon name="arrow-dropright-circle"></ion-icon>\n      </button>      {{monthToShow|date: "MMMM yyyy"}}\n    </ion-buttons>\n\n\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label>Selecteer zorgverlener</ion-label>\n      <ion-select interface="popover" [(ngModel)]="careGiverSelection" (ionChange)="loadCareForMonthToShow()">\n        <ion-option value="">alles</ion-option>\n        <ion-option *ngFor="let careGiver of careGivers" value="{{careGiver.code}}">{{careGiver.name}}</ion-option>\n       </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <ion-card *ngFor="let day of getDays()">\n      <ion-card-header>\n        {{day}} {{monthToShow|date: "MMM"}}\n      </ion-card-header>\n      <ion-card-content>\n        <ul>\n            <li *ngFor="let event of getEvents(day)">\n               <strong>{{event.careTypeDescription}}</strong><br />\n               <span [ngSwitch]="event.careType">\n                  <span *ngSwitchCase="showDuration(event)">\n                      {{event.duration}} uur door {{event.careGiver.name}}\n                  </span>\n                  <span *ngSwitchCase="\'TRANSPORTATION\'">\n                      {{event.moment}} door {{event.careGiver.name}}\n                  </span>\n                </span>\n          </li>\n        </ul>\n      </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mabe/projects/nl/sasem/sasem-app/src/pages/event-view/event-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_provided_care_service_provided_care_service__["a" /* ProvidedCareService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_care_giver_care_giver__["a" /* CareGiverProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_load_data_for_selected_month_load_data_for_selected_month__["a" /* LoadDataForSelectedMonthProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_email_settings_email_settings__["a" /* EmailSettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], EventViewPage);
    return EventViewPage;
}());

//# sourceMappingURL=event-view.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCareGiverModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_care_giver_care_giver__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_care_giver_modal_add_care_giver_modal__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditCareGiverModalPage = /** @class */ (function () {
    function EditCareGiverModalPage(navCtrl, navParams, careGiverProvider, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.careGiverProvider = careGiverProvider;
        this.viewCtrl = viewCtrl;
        this.careGiver = navParams.get("selectedCareGiver");
        this.careGiverNameControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, Object(__WEBPACK_IMPORTED_MODULE_4__add_care_giver_modal_add_care_giver_modal__["b" /* preventDuplicatesValidatorFactory */])(this.careGiverProvider)]));
        this.editCaregiverForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]().group({
            'careGiverNameControl': this.careGiverNameControl
        });
    }
    EditCareGiverModalPage.prototype.editCaregiver = function () {
        var _this = this;
        var result = this.careGiverProvider.updateCareGiver(this.careGiver);
        result
            .then(function (any) { return _this.viewCtrl.dismiss(_this.careGiver); })
            .catch(function (any) { return console.log("Failed to store edited CareGiver"); });
    };
    EditCareGiverModalPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nameInput'),
        __metadata("design:type", Object)
    ], EditCareGiverModalPage.prototype, "nameInput", void 0);
    EditCareGiverModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-care-giver-modal',template:/*ion-inline-start:"/Users/mabe/projects/nl/sasem/sasem-app/src/pages/edit-care-giver-modal/edit-care-giver-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Wijzig naam</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form (ngSubmit)="editCaregiver(form)" [formGroup]="editCaregiverForm">\n\n    <div *ngIf="careGiverNameControl.dirty && !careGiverNameControl.valid">\n      <p *ngIf="careGiverNameControl.hasError(\'preventDuplicates\')">\n        Deze naam is al gebruikt.<br />\n      </p>\n      <p *ngIf="!careGiverNameControl.hasError(\'preventDuplicates\')">\n        Gebruik minimaal 3 tekens [A-Za-z0-9]<br />\n      </p>\n\n    </div>\n\n\n\n    <ion-item>\n      <ion-label>Naam</ion-label>\n      <ion-input type="text" #nameInput [(ngModel)]="careGiver.name" name="name" formControlName="careGiverNameControl"></ion-input>\n    </ion-item>\n    <button ion-button type="submit" [disabled]="!editCaregiverForm.valid">Sla op</button>\n  </form>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/mabe/projects/nl/sasem/sasem-app/src/pages/edit-care-giver-modal/edit-care-giver-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_care_giver_care_giver__["a" /* CareGiverProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], EditCareGiverModalPage);
    return EditCareGiverModalPage;
}());

//# sourceMappingURL=edit-care-giver-modal.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendEmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_email_settings_email_settings__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_provided_care_service_provided_care_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_care_giver_care_giver__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_load_data_for_selected_month_load_data_for_selected_month__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_care_type_care_type__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SendEmailPage = /** @class */ (function () {
    function SendEmailPage(navCtrl, navParams, providedCareService, careGiverProvider, loadDataForSelectedMonth, emailSettingsProvider, emailComposer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.providedCareService = providedCareService;
        this.careGiverProvider = careGiverProvider;
        this.loadDataForSelectedMonth = loadDataForSelectedMonth;
        this.emailSettingsProvider = emailSettingsProvider;
        this.emailComposer = emailComposer;
        this.careTypes = __WEBPACK_IMPORTED_MODULE_7__providers_care_type_care_type__["c" /* SelectableCareTypes */];
        this.careGivers = [];
        this.monthSelection = new Date(Date.now() - (1000 * 60 * 60 * 24 * 28)).toISOString();
        this.adjustLabel();
        this.careGiverSelection = "";
        this.careTypeSelection = "";
        careGiverProvider.getActiveCareGivers().then(function (loadedCareGivers) {
            _this.careGivers = loadedCareGivers;
        });
    }
    SendEmailPage.prototype.sendEmail = function () {
        var _this = this;
        var selectedCareType = null;
        if (this.careTypeSelection != "") {
            selectedCareType = __WEBPACK_IMPORTED_MODULE_7__providers_care_type_care_type__["b" /* CareType */][this.careTypeSelection];
        }
        this.loadDataForSelectedMonth.loadCareForMonthToShow(this.monthLabel, this.careGiverSelection, selectedCareType);
        this.emailSettingsProvider.getEmailSettings().then(function (emailSettings) {
            if (emailSettings) {
                _this.sendEmailWithData(emailSettings);
            }
            else {
                console.log('email settings OFF');
            }
        });
    };
    SendEmailPage.prototype.sendEmailWithData = function (emailSettings) {
        var email = {
            to: emailSettings.to,
            cc: '',
            bcc: '',
            attachments: [],
            subject: emailSettings.subject,
            body: emailSettings.body + '<br>' + this.composeBody(),
            isHtml: true
        };
        // Send a text message using default options
        this.emailComposer.open(email);
    };
    SendEmailPage.prototype.composeBody = function () {
        var body = 'Datum , Zorgsoort , Zorgverlener , duur , moment <br>';
        function displayDuration(duration) {
            if (!duration || duration == 0) {
                return '';
            }
            return duration;
        }
        function displayMoment(moment) {
            if (!moment) {
                return '';
            }
            return moment;
        }
        for (var _i = 0, _a = this.loadDataForSelectedMonth.getDays(); _i < _a.length; _i++) {
            var day = _a[_i];
            for (var _b = 0, _c = this.loadDataForSelectedMonth.getEvents(day); _b < _c.length; _b++) {
                var event_1 = _c[_b];
                body = body.concat(day.toString() + ' ' + this.monthPlusYearName + ' , ', event_1.careTypeDescription + ' , ', event_1.careGiver.name + ' , ', displayDuration(event_1.duration) + ' , ', displayMoment(event_1.moment) + '<br>');
            }
        }
        return body;
    };
    SendEmailPage.prototype.composeEventStringForEmail = function (event) {
    };
    SendEmailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SendEmailPage');
    };
    SendEmailPage.prototype.selectCareGiver = function (selection) {
        var selectedCareGiver = selection;
    };
    SendEmailPage.prototype.adjustLabel = function () {
        this.monthLabel = new Date(this.monthSelection);
        this.monthPlusYearName = new Intl.DateTimeFormat("nl-NL", { month: "long", year: "numeric" }).format(this.monthLabel);
    };
    SendEmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-send-email',template:/*ion-inline-start:"/Users/mabe/projects/nl/sasem/sasem-app/src/pages/send-email/send-email.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Verstuur Maandoverzicht</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>Selecteer zorgverlener</ion-label>\n    <ion-select interface="popover"[(ngModel)]="careGiverSelection" >\n      <ion-option value="">alle zorgverleners</ion-option>\n      <ion-option *ngFor="let careGiver of careGivers" value="{{careGiver.code}}">{{careGiver.name}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <!--TODO-->\n  <ion-item>\n    <ion-label>Selecteer zorgsoort</ion-label>\n    <ion-select interface="popover" [(ngModel)]="careTypeSelection">\n      <ion-option value="">alle zorgsoorten</ion-option>\n      <ion-option *ngFor="let careType of careTypes" value="{{careType.careType}}">{{careType.description}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <!--TODO-->\n  <ion-item>\n    <ion-label>Selecteer maand</ion-label>\n        <ion-datetime monthNames="januari, februari, maart, april, mei, juni, juli, augustus, september, oktober, november, december"\n                      [(ngModel)]="monthSelection" displayFormat="MMMM YYYY" (ionChange)="adjustLabel()"></ion-datetime>\n  </ion-item>\n\n\n  <button ion-button full icon-left (click)="sendEmail()">\n    <ion-icon name="mail"></ion-icon> mail overzicht\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/mabe/projects/nl/sasem/sasem-app/src/pages/send-email/send-email.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_provided_care_service_provided_care_service__["a" /* ProvidedCareService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_care_giver_care_giver__["a" /* CareGiverProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_load_data_for_selected_month_load_data_for_selected_month__["a" /* LoadDataForSelectedMonthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_email_settings_email_settings__["a" /* EmailSettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], SendEmailPage);
    return SendEmailPage;
}());

//# sourceMappingURL=send-email.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_email_settings_email_settings__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, modalCtrl, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.provider = provider;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
    };
    SettingsPage.prototype.setEmailSettings = function () {
        var _this = this;
        var storedEmailSettings = this.provider.getEmailSettings();
        storedEmailSettings.then(function (emailSettings) {
            var modal = _this.modalCtrl.create('EmailSettingsModalPage', { emailSettings: emailSettings });
            modal.present();
            modal.onDidDismiss(function (data) {
                if (data) {
                    var emailSettings_1 = data;
                    _this.provider.saveEmailSettings(emailSettings_1);
                }
            });
        });
    };
    SettingsPage.prototype.adjustCareGivers = function () {
        var modal = this.modalCtrl.create("CaregiversModalPage", {});
        modal.present();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/mabe/projects/nl/sasem/sasem-app/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Instellingen</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button ion-button full class="settingsButton" (click)="adjustCareGivers()">\n          Zorgverleners\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button full class="settingsButton" (click)="setEmailSettings()">\n          Email instellingen\n        </button>\n      </ion-col>\n    </ion-row>\n    <!--\n    <ion-row>\n\n      <ion-col>\n        <button ion-button full class="settingsButton">\n          <div><p>Zorg</p>\n            <p>type</p>\n          </div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button full class="settingsButton">\n          Push berichten\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button full class="settingsButton" disabled="disabled">\n          Extra instellingen button\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button full class="settingsButton" disabled="disabled">\n          Nog meer gekkigheid\n        </button>\n      </ion-col>\n    </ion-row>\n    -->\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/mabe/projects/nl/sasem/sasem-app/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_email_settings_email_settings__["a" /* EmailSettingsProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 123:
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
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-care-giver-modal/add-care-giver-modal.module": [
		427,
		8
	],
	"../pages/calendar/calendar.module": [
		428,
		7
	],
	"../pages/care-giver-modal/care-giver-modal.module": [
		429,
		2
	],
	"../pages/edit-care-giver-modal/edit-care-giver-modal.module": [
		292
	],
	"../pages/email-settings-modal/email-settings-modal.module": [
		430,
		1
	],
	"../pages/event-modal/event-modal.module": [
		431,
		0
	],
	"../pages/event-view/event-view.module": [
		432,
		6
	],
	"../pages/send-email/send-email.module": [
		433,
		5
	],
	"../pages/settings/settings.module": [
		435,
		4
	],
	"../pages/welcome/welcome.module": [
		434,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareGiverProvider; });
/* unused harmony export careGiverWithName */
/* harmony export (immutable) */ __webpack_exports__["b"] = buildCareGiver;
/* harmony export (immutable) */ __webpack_exports__["c"] = generateGuid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CareGiverProvider = /** @class */ (function () {
    function CareGiverProvider(storage) {
        this.storage = storage;
        this.getAllCareGivers().then(function (careGivers) {
            if (careGivers == null || careGivers.length == 0) {
                var defaultCareGivers = [
                    careGiverWithName("Ikzelf"),
                ];
                storage.set('careGivers', JSON.stringify(defaultCareGivers));
            }
        });
    }
    CareGiverProvider.prototype.getActiveCareGivers = function () {
        return Promise.resolve(this.storage.get('careGivers')).then(function (rawData) {
            var careGivers = JSON.parse(rawData);
            return careGivers.filter(function (it) { return it.active; });
        });
    };
    CareGiverProvider.prototype.getAllCareGivers = function () {
        return Promise.resolve(this.storage.get('careGivers')).then(function (rawData) {
            return JSON.parse(rawData);
        });
    };
    CareGiverProvider.prototype.addCareGiver = function (additionalCareGiver) {
        return Promise.resolve(this.storeAdditionalCareGiver(additionalCareGiver));
    };
    CareGiverProvider.prototype.removeCareGiver = function (careGiverToRemove) {
        var _this = this;
        return Promise.resolve(this.getAllCareGivers().then(function (storedCareGivers) {
            var indexOfCareGiverToDelete = storedCareGivers.findIndex(function (value) {
                return value.name === careGiverToRemove.name;
            });
            storedCareGivers.splice(indexOfCareGiverToDelete, 1);
            return Promise.resolve(_this.storage.set('careGivers', JSON.stringify(storedCareGivers)));
        }).catch(function (reason) {
            return Promise.reject("Could not load original set of careGivers");
        }));
    };
    CareGiverProvider.prototype.updateCareGiver = function (careGiverToUpdate) {
        return Promise.resolve(this.storeUpdatedCareGiver(careGiverToUpdate));
    };
    CareGiverProvider.prototype.storeAdditionalCareGiver = function (additionalCareGiver) {
        var _this = this;
        return this.getAllCareGivers().then(function (loadedCareGivers) {
            loadedCareGivers.push(additionalCareGiver);
            return Promise.resolve(_this.storage.set('careGivers', JSON.stringify(loadedCareGivers)));
        }).catch(function (reason) {
            return Promise.reject("Could not load original set of careGivers");
        });
    };
    CareGiverProvider.prototype.storeUpdatedCareGiver = function (careGiverToUpdate) {
        var _this = this;
        return this.getAllCareGivers().then(function (storedCareGivers) {
            storedCareGivers.filter(function (it) { return it.code == careGiverToUpdate.code; })
                .forEach(function (it) {
                it.active = careGiverToUpdate.active;
                it.name = careGiverToUpdate.name;
            });
            _this.storage.set('careGivers', JSON.stringify(storedCareGivers));
        });
    };
    CareGiverProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], CareGiverProvider);
    return CareGiverProvider;
}());

function careGiverWithName(name) {
    return buildCareGiver(generateGuid(), name);
}
function buildCareGiver(code, name) {
    return { 'code': code, 'name': name, 'active': true };
}
function generateGuid() {
    var result, i, j;
    result = '';
    for (j = 0; j < 32; j++) {
        if (j == 8 || j == 12 || j == 16 || j == 20)
            result = result + '-';
        i = Math.floor(Math.random() * 16).toString(16).toUpperCase();
        result = result + i;
    }
    return result;
}
//# sourceMappingURL=care-giver.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultCareProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__care_type_care_type__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DefaultCareProvider = /** @class */ (function () {
    function DefaultCareProvider() {
        console.log('Hello DefaultCareProvider Provider');
    }
    DefaultCareProvider.prototype.getCareGiver = function (date) {
        switch (date.getDay()) {
            case 0: return 'boshoeve';
            case 1: return 'boshoeve';
            case 2: return 'boshoeve';
            case 3: return 'boshoeve';
            case 4: return 'boshoeve';
            case 5: return 'boshoeve';
            case 6: return 'boshoeve';
        }
    };
    DefaultCareProvider.prototype.getCareType = function (date) {
        switch (date.getDay()) {
            case 0:
                return __WEBPACK_IMPORTED_MODULE_1__care_type_care_type__["b" /* CareType */].NURSING;
            case 1:
                return __WEBPACK_IMPORTED_MODULE_1__care_type_care_type__["b" /* CareType */].NURSING;
            case 2:
                return __WEBPACK_IMPORTED_MODULE_1__care_type_care_type__["b" /* CareType */].PERSONAL_CARE;
            case 3:
                return __WEBPACK_IMPORTED_MODULE_1__care_type_care_type__["b" /* CareType */].TRANSPORTATION;
            case 4:
                return __WEBPACK_IMPORTED_MODULE_1__care_type_care_type__["b" /* CareType */].NURSING;
            case 5:
                return __WEBPACK_IMPORTED_MODULE_1__care_type_care_type__["b" /* CareType */].NURSING;
            case 6:
                return __WEBPACK_IMPORTED_MODULE_1__care_type_care_type__["b" /* CareType */].NURSING;
        }
    };
    DefaultCareProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DefaultCareProvider);
    return DefaultCareProvider;
}());

//# sourceMappingURL=default-care.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = convertProvidedCareToCareActivity;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_care_type_care_type__ = __webpack_require__(45);

function convertProvidedCareToCareActivity(providedCare, allCareGiversMap) {
    return {
        careGiver: allCareGiversMap.get(providedCare.careGiver),
        careType: providedCare.careType,
        moment: providedCare.moment,
        duration: providedCare.duration,
        startTime: new Date(providedCare.startTime),
        endTime: new Date(providedCare.endTime),
        allDay: false,
        careTypeDescription: Object(__WEBPACK_IMPORTED_MODULE_0__providers_care_type_care_type__["d" /* describe */])(providedCare.careType),
    };
}
//# sourceMappingURL=ProvidedCareConverter.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCareGiverModalPageModule", function() { return EditCareGiverModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_care_giver_modal__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditCareGiverModalPageModule = /** @class */ (function () {
    function EditCareGiverModalPageModule() {
    }
    EditCareGiverModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_care_giver_modal__["a" /* EditCareGiverModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_care_giver_modal__["a" /* EditCareGiverModalPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__edit_care_giver_modal__["a" /* EditCareGiverModalPage */]
            ]
        })
    ], EditCareGiverModalPageModule);
    return EditCareGiverModalPageModule;
}());

//# sourceMappingURL=edit-care-giver-modal.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCaregiverModalPage; });
/* harmony export (immutable) */ __webpack_exports__["b"] = preventDuplicatesValidatorFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_care_giver_care_giver__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddCaregiverModalPage = /** @class */ (function () {
    function AddCaregiverModalPage(navCtrl, navParams, careGiverProvider, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.careGiverProvider = careGiverProvider;
        this.viewCtrl = viewCtrl;
        this.careGiver = Object(__WEBPACK_IMPORTED_MODULE_2__providers_care_giver_care_giver__["b" /* buildCareGiver */])(Object(__WEBPACK_IMPORTED_MODULE_2__providers_care_giver_care_giver__["c" /* generateGuid */])(), "");
        this.careGiverNameControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(3),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, preventDuplicatesValidatorFactory(this.careGiverProvider)]));
        this.addCaregiverForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]().group({
            'careGiverNameControl': this.careGiverNameControl
        });
    }
    AddCaregiverModalPage.prototype.ngAfterViewChecked = function () {
        this.nameInput.setFocus();
    };
    AddCaregiverModalPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddCaregiverModalPage.prototype.addCaregiver = function (form) {
        var _this = this;
        var result = this.careGiverProvider.addCareGiver(this.careGiver);
        result
            .then(function (any) { return _this.viewCtrl.dismiss(_this.careGiver); })
            .catch(function (any) { return console.log("Failed to store new CareGiver"); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nameInput'),
        __metadata("design:type", Object)
    ], AddCaregiverModalPage.prototype, "nameInput", void 0);
    AddCaregiverModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'add-caregives',template:/*ion-inline-start:"/Users/mabe/projects/nl/sasem/sasem-app/src/pages/add-care-giver-modal/add-care-giver-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n      <ion-buttons start>\n          <button ion-button icon-only (click)="cancel()">\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>Zorgverlener toevoegen</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form (ngSubmit)="addCaregiver(form)" [formGroup]="addCaregiverForm">\n\n    <div *ngIf="careGiverNameControl.dirty && !careGiverNameControl.valid">\n      <p *ngIf="careGiverNameControl.hasError(\'preventDuplicates\')">\n        Deze naam is al gebruikt.<br />\n      </p>\n      <p *ngIf="!careGiverNameControl.hasError(\'preventDuplicates\')">\n        Gebruik minimaal 3 tekens [A-Za-z0-9]<br />\n      </p>\n\n    </div>\n\n\n\n    <ion-item>\n      <ion-label>Naam</ion-label>\n      <ion-input type="text" #nameInput [(ngModel)]="careGiver.name" name="name" formControlName="careGiverNameControl"></ion-input>\n    </ion-item>\n    <button ion-button type="submit" [disabled]="!addCaregiverForm.valid">Voeg toe</button>\n  </form>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/mabe/projects/nl/sasem/sasem-app/src/pages/add-care-giver-modal/add-care-giver-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_care_giver_care_giver__["a" /* CareGiverProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], AddCaregiverModalPage);
    return AddCaregiverModalPage;
}());

function preventDuplicatesValidatorFactory(careGiverProvider) {
    var allExistingCareGivers = [];
    careGiverProvider.getAllCareGivers().then(function (careGivers) { return allExistingCareGivers = careGivers; });
    return function (c) {
        return preventDuplicates(c, allExistingCareGivers);
    };
}
function preventDuplicates(c, allExistingCareGivers) {
    var input = c.value;
    var inputToValidate = input.toLowerCase().trim();
    var firstCareGiverWithSameName = allExistingCareGivers.find(function (careGiver) {
        return careGiver.name.toLowerCase().trim() == inputToValidate;
    });
    if (typeof firstCareGiverWithSameName === "undefined") {
        return null;
    }
    else {
        return {
            preventDuplicates: {
                valid: false
            }
        };
    }
}
//# sourceMappingURL=add-care-giver-modal.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_calendar__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.toCalendarButton = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__calendar_calendar__["a" /* CalendarPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/mabe/projects/nl/sasem/sasem-app/src/pages/welcome/welcome.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>welcome</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\nWelkom bij SaSem, waarmee kan ik je helpen?\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button full (click)="toCalendarButton()">\n          Kalender\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mabe/projects/nl/sasem/sasem-app/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_calendar_calendar__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic2_calendar__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_provided_care_service_provided_care_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_event_view_event_view__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_care_giver_care_giver__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_default_care_default_care__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_email_settings_email_settings__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_send_email_send_email__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_load_data_for_selected_month_load_data_for_selected_month__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_edit_care_giver_modal_edit_care_giver_modal__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_edit_care_giver_modal_edit_care_giver_modal_module__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_event_view_event_view__["a" /* EventViewPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_send_email_send_email__["a" /* SendEmailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_11_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20__pages_edit_care_giver_modal_edit_care_giver_modal_module__["EditCareGiverModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-care-giver-modal/add-care-giver-modal.module#AddCaregiverModalPageModule', name: 'AddCaregiverModalPage', segment: 'add-care-giver-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/care-giver-modal/care-giver-modal.module#CaregiversModalPageModule', name: 'CaregiversModalPage', segment: 'care-giver-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-care-giver-modal/edit-care-giver-modal.module#EditCareGiverModalPageModule', name: 'EditCareGiverModalPage', segment: 'edit-care-giver-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email-settings-modal/email-settings-modal.module#EmailSettingsModalPageModule', name: 'EmailSettingsModalPage', segment: 'email-settings-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-modal/event-modal.module#EventModalPageModule', name: 'EventModalPage', segment: 'event-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-view/event-view.module#EventViewPageModule', name: 'EventViewPage', segment: 'event-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/send-email/send-email.module#SendEmailPageModule', name: 'SendEmailPage', segment: 'send-email', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_edit_care_giver_modal_edit_care_giver_modal__["a" /* EditCareGiverModalPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_event_view_event_view__["a" /* EventViewPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_send_email_send_email__["a" /* SendEmailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_provided_care_service_provided_care_service__["a" /* ProvidedCareService */],
                Storage,
                __WEBPACK_IMPORTED_MODULE_14__providers_care_giver_care_giver__["a" /* CareGiverProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_default_care_default_care__["a" /* DefaultCareProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_16__providers_email_settings_email_settings__["a" /* EmailSettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_load_data_for_selected_month_load_data_for_selected_month__["a" /* LoadDataForSelectedMonthProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = shouldThisEventBeDeleted;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvidedCareService; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createDefaultProvidedCare;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function shouldThisEventBeDeleted(providedCare, careToDelete) {
    return (providedCare.careGiver === careToDelete.careGiver) &&
        (providedCare.careType === careToDelete.careType) &&
        (providedCare.startTime.getTime() === careToDelete.startTime.getTime());
}
var ProvidedCareService = /** @class */ (function () {
    function ProvidedCareService(storage) {
        this.storage = storage;
    }
    ProvidedCareService.prototype.storeProvidedCare = function (providedCare) {
        var _this = this;
        this.getStoredCare().then(function (storedCare) {
            if (storedCare) {
                console.log(storedCare);
            }
            else {
                storedCare = [];
            }
            storedCare.push(providedCare);
            _this.storage.set('care', JSON.stringify(storedCare));
        });
    };
    //
    ProvidedCareService.prototype.removeSelectedCare = function (careToDelete) {
        var _this = this;
        this.getStoredCare().then(function (storedCare) {
            var indexOfEventToDelete = storedCare.findIndex(function (value) {
                return shouldThisEventBeDeleted(value, careToDelete);
            });
            storedCare.splice(indexOfEventToDelete, 1);
            _this.storage.set('care', JSON.stringify(storedCare));
        });
    };
    ProvidedCareService.prototype.getStoredCare = function () {
        return Promise.resolve(this.storage.get('care')).then(function (rawData) {
            return JSON.parse(rawData, function (key, value) {
                if (key === "startTime") {
                    return new Date(value);
                }
                return value;
            });
        });
    };
    ProvidedCareService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], ProvidedCareService);
    return ProvidedCareService;
}());

function createDefaultProvidedCare() {
    return {
        careGiver: '',
        careType: '',
        duration: 0,
        moment: "",
        startTime: new Date().toISOString(),
        endTime: new Date().toISOString(),
        allDay: false
    };
}
//# sourceMappingURL=provided-care-service.js.map

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 165,
	"./af.js": 165,
	"./ar": 166,
	"./ar-dz": 167,
	"./ar-dz.js": 167,
	"./ar-kw": 168,
	"./ar-kw.js": 168,
	"./ar-ly": 169,
	"./ar-ly.js": 169,
	"./ar-ma": 170,
	"./ar-ma.js": 170,
	"./ar-sa": 171,
	"./ar-sa.js": 171,
	"./ar-tn": 172,
	"./ar-tn.js": 172,
	"./ar.js": 166,
	"./az": 173,
	"./az.js": 173,
	"./be": 174,
	"./be.js": 174,
	"./bg": 175,
	"./bg.js": 175,
	"./bm": 176,
	"./bm.js": 176,
	"./bn": 177,
	"./bn.js": 177,
	"./bo": 178,
	"./bo.js": 178,
	"./br": 179,
	"./br.js": 179,
	"./bs": 180,
	"./bs.js": 180,
	"./ca": 181,
	"./ca.js": 181,
	"./cs": 182,
	"./cs.js": 182,
	"./cv": 183,
	"./cv.js": 183,
	"./cy": 184,
	"./cy.js": 184,
	"./da": 185,
	"./da.js": 185,
	"./de": 186,
	"./de-at": 187,
	"./de-at.js": 187,
	"./de-ch": 188,
	"./de-ch.js": 188,
	"./de.js": 186,
	"./dv": 189,
	"./dv.js": 189,
	"./el": 190,
	"./el.js": 190,
	"./en-au": 191,
	"./en-au.js": 191,
	"./en-ca": 192,
	"./en-ca.js": 192,
	"./en-gb": 193,
	"./en-gb.js": 193,
	"./en-ie": 194,
	"./en-ie.js": 194,
	"./en-il": 195,
	"./en-il.js": 195,
	"./en-nz": 196,
	"./en-nz.js": 196,
	"./eo": 197,
	"./eo.js": 197,
	"./es": 198,
	"./es-do": 199,
	"./es-do.js": 199,
	"./es-us": 200,
	"./es-us.js": 200,
	"./es.js": 198,
	"./et": 201,
	"./et.js": 201,
	"./eu": 202,
	"./eu.js": 202,
	"./fa": 203,
	"./fa.js": 203,
	"./fi": 204,
	"./fi.js": 204,
	"./fo": 205,
	"./fo.js": 205,
	"./fr": 206,
	"./fr-ca": 207,
	"./fr-ca.js": 207,
	"./fr-ch": 208,
	"./fr-ch.js": 208,
	"./fr.js": 206,
	"./fy": 209,
	"./fy.js": 209,
	"./gd": 210,
	"./gd.js": 210,
	"./gl": 211,
	"./gl.js": 211,
	"./gom-latn": 212,
	"./gom-latn.js": 212,
	"./gu": 213,
	"./gu.js": 213,
	"./he": 214,
	"./he.js": 214,
	"./hi": 215,
	"./hi.js": 215,
	"./hr": 216,
	"./hr.js": 216,
	"./hu": 217,
	"./hu.js": 217,
	"./hy-am": 218,
	"./hy-am.js": 218,
	"./id": 219,
	"./id.js": 219,
	"./is": 220,
	"./is.js": 220,
	"./it": 221,
	"./it.js": 221,
	"./ja": 222,
	"./ja.js": 222,
	"./jv": 223,
	"./jv.js": 223,
	"./ka": 224,
	"./ka.js": 224,
	"./kk": 225,
	"./kk.js": 225,
	"./km": 226,
	"./km.js": 226,
	"./kn": 227,
	"./kn.js": 227,
	"./ko": 228,
	"./ko.js": 228,
	"./ky": 229,
	"./ky.js": 229,
	"./lb": 230,
	"./lb.js": 230,
	"./lo": 231,
	"./lo.js": 231,
	"./lt": 232,
	"./lt.js": 232,
	"./lv": 233,
	"./lv.js": 233,
	"./me": 234,
	"./me.js": 234,
	"./mi": 235,
	"./mi.js": 235,
	"./mk": 236,
	"./mk.js": 236,
	"./ml": 237,
	"./ml.js": 237,
	"./mn": 238,
	"./mn.js": 238,
	"./mr": 239,
	"./mr.js": 239,
	"./ms": 240,
	"./ms-my": 241,
	"./ms-my.js": 241,
	"./ms.js": 240,
	"./mt": 242,
	"./mt.js": 242,
	"./my": 243,
	"./my.js": 243,
	"./nb": 244,
	"./nb.js": 244,
	"./ne": 245,
	"./ne.js": 245,
	"./nl": 246,
	"./nl-be": 247,
	"./nl-be.js": 247,
	"./nl.js": 246,
	"./nn": 248,
	"./nn.js": 248,
	"./pa-in": 249,
	"./pa-in.js": 249,
	"./pl": 250,
	"./pl.js": 250,
	"./pt": 251,
	"./pt-br": 252,
	"./pt-br.js": 252,
	"./pt.js": 251,
	"./ro": 253,
	"./ro.js": 253,
	"./ru": 254,
	"./ru.js": 254,
	"./sd": 255,
	"./sd.js": 255,
	"./se": 256,
	"./se.js": 256,
	"./si": 257,
	"./si.js": 257,
	"./sk": 258,
	"./sk.js": 258,
	"./sl": 259,
	"./sl.js": 259,
	"./sq": 260,
	"./sq.js": 260,
	"./sr": 261,
	"./sr-cyrl": 262,
	"./sr-cyrl.js": 262,
	"./sr.js": 261,
	"./ss": 263,
	"./ss.js": 263,
	"./sv": 264,
	"./sv.js": 264,
	"./sw": 265,
	"./sw.js": 265,
	"./ta": 266,
	"./ta.js": 266,
	"./te": 267,
	"./te.js": 267,
	"./tet": 268,
	"./tet.js": 268,
	"./tg": 269,
	"./tg.js": 269,
	"./th": 270,
	"./th.js": 270,
	"./tl-ph": 271,
	"./tl-ph.js": 271,
	"./tlh": 272,
	"./tlh.js": 272,
	"./tr": 273,
	"./tr.js": 273,
	"./tzl": 274,
	"./tzl.js": 274,
	"./tzm": 275,
	"./tzm-latn": 276,
	"./tzm-latn.js": 276,
	"./tzm.js": 275,
	"./ug-cn": 277,
	"./ug-cn.js": 277,
	"./uk": 278,
	"./uk.js": 278,
	"./ur": 279,
	"./ur.js": 279,
	"./uz": 280,
	"./uz-latn": 281,
	"./uz-latn.js": 281,
	"./uz.js": 280,
	"./vi": 282,
	"./vi.js": 282,
	"./x-pseudo": 283,
	"./x-pseudo.js": 283,
	"./yo": 284,
	"./yo.js": 284,
	"./zh-cn": 285,
	"./zh-cn.js": 285,
	"./zh-hk": 286,
	"./zh-hk.js": 286,
	"./zh-tw": 287,
	"./zh-tw.js": 287
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 389;

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_calendar_calendar__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_send_email_send_email__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.initializeApp();
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */]; // CalendarPage;
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Kalender', component: __WEBPACK_IMPORTED_MODULE_4__pages_calendar_calendar__["a" /* CalendarPage */] },
            { title: 'Instellingen', component: __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */] },
            { title: 'Verstuur maandoverzicht', component: __WEBPACK_IMPORTED_MODULE_6__pages_send_email_send_email__["a" /* SendEmailPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mabe/projects/nl/sasem/sasem-app/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/mabe/projects/nl/sasem/sasem-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 421:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CareType; });
/* unused harmony export CareTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SelectableCareTypes; });
/* harmony export (immutable) */ __webpack_exports__["d"] = describe;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CARE_TYPES_WITH_DURATION; });
var CareType;
(function (CareType) {
    CareType["DOMESTIC_ASSISTANCE"] = "DOMESTIC_ASSISTANCE";
    CareType["GROUP_GUIDANCE"] = "GROUP_GUIDANCE";
    CareType["INDIVIDUAL_GUIDANCE"] = "INDIVIDUAL_GUIDANCE";
    CareType["NURSING"] = "NURSING";
    CareType["PERSONAL_CARE"] = "PERSONAL_CARE";
    CareType["TRANSPORTATION"] = "TRANSPORTATION";
})(CareType || (CareType = {}));
var CareTypes = Object.keys(CareType);
var SelectableCareTypes = CareTypes.map(function (element) {
    return {
        careType: CareType[element],
        description: describe(CareType[element])
    };
});
function describe(careType) {
    switch (careType) {
        case CareType.PERSONAL_CARE: return "Persoonlijke verzorging";
        case CareType.NURSING: return "Verpleging";
        case CareType.INDIVIDUAL_GUIDANCE: return "Begeleiding individueel";
        case CareType.GROUP_GUIDANCE: return "Begeleiding groep";
        case CareType.DOMESTIC_ASSISTANCE: return "Huishoudelijke hulp ";
        case CareType.TRANSPORTATION: return "Vervoer";
        default: return "";
    }
}
var CARE_TYPES_WITH_DURATION = [CareType.DOMESTIC_ASSISTANCE,
    CareType.INDIVIDUAL_GUIDANCE,
    CareType.GROUP_GUIDANCE,
    CareType.NURSING,
    CareType.PERSONAL_CARE];
//# sourceMappingURL=care-type.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailSettingsProvider; });
/* unused harmony export buildEmailSettings */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailSettingsProvider = /** @class */ (function () {
    function EmailSettingsProvider(storage) {
        var _this = this;
        this.storage = storage;
        this.getEmailSettings().then(function (emailSettings) {
            if (emailSettings == null) {
                var defaultEmailSettings = buildEmailSettings("persoon@emailadres.nl", "Sasem informatie", "hallo Sasem stuurt een berichtje");
                _this.saveEmailSettings(defaultEmailSettings);
            }
        });
    }
    EmailSettingsProvider.prototype.saveEmailSettings = function (emailSettings) {
        this.storage.set('emailSettings', JSON.stringify(emailSettings));
    };
    ;
    EmailSettingsProvider.prototype.getEmailSettings = function () {
        return Promise.resolve(this.storage.get('emailSettings')).then(function (rawData) {
            return JSON.parse(rawData);
        });
    };
    EmailSettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], EmailSettingsProvider);
    return EmailSettingsProvider;
}());

function buildEmailSettings(to, subject, body) {
    return { 'to': to, 'subject': subject, 'body': body };
}
//# sourceMappingURL=email-settings.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_provided_care_service_provided_care_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_default_care_default_care__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_calendar_calendar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_view_event_view__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ProvidedCareConverter__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_locales_nl__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_care_giver_care_giver__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











Object(__WEBPACK_IMPORTED_MODULE_8__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_9__angular_common_locales_nl__["a" /* default */]);
var CalendarPage = /** @class */ (function () {
    function CalendarPage(navCtrl, navParams, modalCtrl, alertCtrl, providedCareService, defaultCare, careGiverProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.providedCareService = providedCareService;
        this.defaultCare = defaultCare;
        this.allCareGiversMap = new Map();
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            startDay: '1',
            noEvents: "Geen gegevens",
            currentDate: new Date(),
            locale: 'nl-NL'
        };
        careGiverProvider.getAllCareGivers().then(function (careGivers) {
            careGivers.forEach(function (careGiver) { return _this.allCareGiversMap.set(careGiver.code, careGiver); });
        });
    }
    CalendarPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    CalendarPage.prototype.addEvent = function () {
        var _this = this;
        var modalData = {
            careGiver: this.defaultCare.getCareGiver(this.selectedDay),
            careType: this.defaultCare.getCareType(this.selectedDay),
            selectedDay: this.selectedDay
        };
        var modal = this.modalCtrl.create('EventModalPage', modalData);
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                var providedCare = {
                    careGiver: data.careGiver,
                    careType: data.careType,
                    moment: data.moment,
                    duration: data.duration,
                    startTime: new Date(data.startTime),
                    endTime: new Date(data.endTime),
                    allDay: false
                };
                var careActivity = Object(__WEBPACK_IMPORTED_MODULE_7__ProvidedCareConverter__["a" /* convertProvidedCareToCareActivity */])(providedCare, _this.allCareGiversMap);
                var events_1 = _this.eventSource;
                events_1.push(careActivity);
                _this.providedCareService.storeProvidedCare(providedCare);
                _this.eventSource = [];
                setTimeout(function () {
                    _this.eventSource = events_1;
                });
            }
        });
    };
    CalendarPage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        var sameYear = (today.getFullYear() === event.getFullYear());
        var sameMonth = (today.getMonth() === event.getMonth());
        var sameDay = (today.getDate() === event.getDate());
        this.isToday = (sameYear && sameMonth && sameDay);
    };
    CalendarPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    CalendarPage.prototype.onEventSelected = function (event) {
        var _this = this;
        var start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.startTime).format('LLLL');
        var end = __WEBPACK_IMPORTED_MODULE_2_moment__(event.endTime).format('LLLL');
        var alert = this.alertCtrl.create({
            title: '' + event.careTypeDescription,
            subTitle: 'From: ' + start + '<br>To: ' + end,
            buttons: [
                {
                    text: 'REMOVE',
                    handler: function () {
                        console.log('Remove clicked');
                        console.log(event);
                        _this.removeCareActivity(event);
                    }
                },
                { text: 'OK' }
            ]
        });
        alert.present();
    };
    CalendarPage.prototype.removeCareActivity = function (careToDelete) {
        this.providedCareService.removeSelectedCare(careToDelete);
        var indexOfEventToDelete = this.eventSource.findIndex(function (value) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__providers_provided_care_service_provided_care_service__["c" /* shouldThisEventBeDeleted */])(value, careToDelete);
        });
        this.eventSource.splice(indexOfEventToDelete, 1);
        this.myCalendar.loadEvents();
    };
    CalendarPage.prototype.onTimeSelected = function (ev) {
        this.selectedDay = ev.selectedTime;
    };
    CalendarPage.prototype.toEventView = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__event_view_event_view__["a" /* EventViewPage */]);
    };
    CalendarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.providedCareService.getStoredCare().then(function (storedCare) {
            if (storedCare) {
                var events_2 = _this.eventSource;
                for (var _i = 0, storedCare_1 = storedCare; _i < storedCare_1.length; _i++) {
                    var providedCare = storedCare_1[_i];
                    var careActivity = Object(__WEBPACK_IMPORTED_MODULE_7__ProvidedCareConverter__["a" /* convertProvidedCareToCareActivity */])(providedCare, _this.allCareGiversMap);
                    events_2.push(careActivity);
                }
                setTimeout(function () {
                    _this.eventSource = events_2;
                });
                _this.myCalendar.loadEvents();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ionic2_calendar_calendar__["a" /* CalendarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic2_calendar_calendar__["a" /* CalendarComponent */])
    ], CalendarPage.prototype, "myCalendar", void 0);
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendar',template:/*ion-inline-start:"/Users/mabe/projects/nl/sasem/sasem-app/src/pages/calendar/calendar.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n           {{ viewTitle }}\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <calendar [eventSource]="eventSource"\n            [calendarMode]="calendar.mode"\n            [startingDayMonth]="calendar.startDay"\n            [noEventsLabel]="calendar.noEvents"\n            [currentDate]="calendar.currentDate"\n            [locale]="calendar.locale"\n            [monthviewEventDetailTemplate]="detailTemplate"\n            (onEventSelected)="onEventSelected($event)"\n            (onTitleChanged)="onViewTitleChanged($event)"\n            (onTimeSelected)="onTimeSelected($event)"\n            (onCurrentDateChanged)="onCurrentDateChanged($event)"\n            step="30"\n            class="calendar">\n  </calendar>\n\n  <!--vorm de regel die getoond wordt onder de kalender wanneer er een careActivity voor de geselecteerde dag is ingevoerd-->\n  <ng-template #detailTemplate let-showEventDetail="showEventDetail" let-selectedDate="selectedDate" let-noEventsLabel="noEventsLabel">\n    <ion-list class="event-detail-container" has-bouncing="false" *ngIf="showEventDetail" overflow-scroll="false">\n      <ion-item *ngFor="let event of selectedDate?.events" (click)="onEventSelected(event)">\n        <ul>\n          <li>\n            <span class="event-detail">{{event.careTypeDescription}}</span><br>\n            <span class="event-detail">door: {{event.careGiver.name}}</span><br>\n            <span *ngIf="!event.allDay" class="monthview-eventdetail-timecolumn">\n                            tijd: {{event.startTime|date: \'HH:mm\'}} - {{event.endTime|date: \'HH:mm\'}}\n                  </span>\n            <span *ngIf="event.allDay" class="monthview-eventdetail-timecolumn">{{allDayLabel}}</span>\n          </li>\n        </ul>\n\n\n      </ion-item>\n      <ion-item *ngIf="selectedDate?.events.length==0">\n        <div class="no-events-label">{{noEventsLabel}}</div>\n      </ion-item>\n    </ion-list>\n  </ng-template>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar>\n    <div text-center>\n    <ion-buttons middle>\n      <button ion-button icon-only [disabled]="isToday" (click)="today()">\n        <ion-icon name="clock"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="addEvent()" >\n        <ion-icon name="add"></ion-icon>\n      </button>\n      <button ion-button full (click)="toEventView()">\n        als lijst\n      </button>\n    </ion-buttons>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/mabe/projects/nl/sasem/sasem-app/src/pages/calendar/calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_provided_care_service_provided_care_service__["a" /* ProvidedCareService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_default_care_default_care__["a" /* DefaultCareProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_care_giver_care_giver__["a" /* CareGiverProvider */]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadDataForSelectedMonthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_provided_care_service_provided_care_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_care_giver_care_giver__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_ProvidedCareConverter__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoadDataForSelectedMonthProvider = /** @class */ (function () {
    function LoadDataForSelectedMonthProvider(providedCareService, careGiverProvider) {
        var _this = this;
        this.providedCareService = providedCareService;
        this.allCareGiversMap = new Map();
        this.daysWithEvents = new Map();
        careGiverProvider.getAllCareGivers().then(function (careGivers) {
            careGivers.forEach(function (careGiver) { return _this.allCareGiversMap.set(careGiver.code, careGiver); });
        });
        console.log('Hello LoadDataForSelectedMonthProvider Provider');
    }
    LoadDataForSelectedMonthProvider.prototype.loadCareForMonthToShow = function (monthToShow, careGiverSelection, careTypeSelection) {
        var _this = this;
        this.daysWithEvents = new Map();
        this.providedCareService.getStoredCare().then(function (storedCare) {
            if (storedCare) {
                for (var _i = 0, storedCare_1 = storedCare; _i < storedCare_1.length; _i++) {
                    var careEvent = storedCare_1[_i];
                    if (_this.shouldDisplayEvent(careEvent, monthToShow)
                        && _this.hasTheRightCareGiver(careEvent, careGiverSelection)
                        && _this.hasTheRightCareType(careEvent, careTypeSelection)) {
                        _this.addEventToDaysToDisplay(careEvent);
                    }
                }
            }
        });
    };
    LoadDataForSelectedMonthProvider.prototype.shouldDisplayEvent = function (careEvent, monthToShow) {
        var startTime = new Date(careEvent.startTime);
        return startTime.getMonth() === monthToShow.getMonth() &&
            startTime.getFullYear() === monthToShow.getFullYear();
    };
    LoadDataForSelectedMonthProvider.prototype.hasTheRightCareGiver = function (careEvent, careGiverSelection) {
        if (careGiverSelection === "") {
            return true;
        }
        return careGiverSelection === careEvent.careGiver;
    };
    LoadDataForSelectedMonthProvider.prototype.hasTheRightCareType = function (careEvent, careTypeSelection) {
        if (careTypeSelection == null) {
            return true;
        }
        return careTypeSelection === careEvent.careType;
    };
    LoadDataForSelectedMonthProvider.prototype.addEventToDaysToDisplay = function (careEvent) {
        var loadedEvent = Object(__WEBPACK_IMPORTED_MODULE_3__pages_ProvidedCareConverter__["a" /* convertProvidedCareToCareActivity */])(careEvent, this.allCareGiversMap);
        var day = loadedEvent.startTime.getDate();
        if (this.daysWithEvents.has(day)) {
            this.daysWithEvents.get(day).push(loadedEvent);
        }
        else {
            var loadedEvents = [];
            loadedEvents.push(loadedEvent);
            this.daysWithEvents.set(day, loadedEvents);
        }
    };
    LoadDataForSelectedMonthProvider.prototype.getDays = function () {
        return Array.from(this.daysWithEvents.keys()).sort(function (n1, n2) { return n1 - n2; });
    };
    LoadDataForSelectedMonthProvider.prototype.getEvents = function (day) {
        return this.daysWithEvents.get(day);
    };
    LoadDataForSelectedMonthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_provided_care_service_provided_care_service__["a" /* ProvidedCareService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_care_giver_care_giver__["a" /* CareGiverProvider */]])
    ], LoadDataForSelectedMonthProvider);
    return LoadDataForSelectedMonthProvider;
}());

//# sourceMappingURL=load-data-for-selected-month.js.map

/***/ })

},[336]);
//# sourceMappingURL=main.js.map