webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
        this.deploy = false;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_patient_service__ = __webpack_require__("../../../../../src/app/services/patient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_patient_edit_patient_edit_component__ = __webpack_require__("../../../../../src/app/components/patient-edit/patient-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_patient_create_patient_create_component__ = __webpack_require__("../../../../../src/app/components/patient-create/patient-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_date_service__ = __webpack_require__("../../../../../src/app/services/date.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_booking_service__ = __webpack_require__("../../../../../src/app/services/booking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_chart_chart_component__ = __webpack_require__("../../../../../src/app/components/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_datepicker_datepicker_component__ = __webpack_require__("../../../../../src/app/components/datepicker/datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ngx_bootstrap_datepicker__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_patient_dashboard_patient_dashboard_component__ = __webpack_require__("../../../../../src/app/components/patient-dashboard/patient-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_booking_dashboard_booking_dashboard_component__ = __webpack_require__("../../../../../src/app/components/booking-dashboard/booking-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular2_fullcalendar_src_calendar_calendar__ = __webpack_require__("../../../../angular2-fullcalendar/src/calendar/calendar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_booking_create_booking_create_component__ = __webpack_require__("../../../../../src/app/components/booking-create/booking-create.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'patient-dashboard', component: __WEBPACK_IMPORTED_MODULE_26__components_patient_dashboard_patient_dashboard_component__["a" /* PatientDashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'booking-dashboard', component: __WEBPACK_IMPORTED_MODULE_27__components_booking_dashboard_booking_dashboard_component__["a" /* BookingDashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_patient_edit_patient_edit_component__["a" /* PatientEditComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_patient_create_patient_create_component__["a" /* PatientCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_chart_chart_component__["a" /* ChartComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_datepicker_datepicker_component__["a" /* DatepickerComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_patient_dashboard_patient_dashboard_component__["a" /* PatientDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_booking_dashboard_booking_dashboard_component__["a" /* BookingDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_28_angular2_fullcalendar_src_calendar_calendar__["a" /* CalendarComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_booking_create_booking_create_component__["a" /* BookingCreateComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_22_ng2_charts_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_25_ngx_bootstrap_datepicker__["a" /* DatepickerModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_16__services_patient_service__["a" /* PatientService */],
            __WEBPACK_IMPORTED_MODULE_19__services_date_service__["a" /* DateService */],
            __WEBPACK_IMPORTED_MODULE_20__services_resource_service__["a" /* ResourceService */],
            __WEBPACK_IMPORTED_MODULE_21__services_booking_service__["a" /* BookingService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/booking-create/booking-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/booking-create/booking-create.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/components/booking-create/booking-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_date_service__ = __webpack_require__("../../../../../src/app/services/date.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookingCreateComponent = (function () {
    function BookingCreateComponent(resourceService, dateService, authService, http) {
        var _this = this;
        this.resourceService = resourceService;
        this.dateService = dateService;
        this.authService = authService;
        this.http = http;
        this.dateService = dateService;
        this.resourceService = resourceService;
        this.authService = authService;
        this.http = http;
        this.new_booking = {};
        this.resourceService.getResourcesFor('booking').subscribe(function (data) {
            if (data.success) {
                _this.booking_resource = data.resources;
            }
            else {
                console.log('Something went wrong, booking resources could not be loaded');
            }
        });
    }
    BookingCreateComponent.prototype.ngOnInit = function () {
    };
    BookingCreateComponent.prototype.createBooking = function () {
        this.new_booking.month = this.dateService.dateFields.months.indexOf(this.new_booking.month);
        var start = this.dateService.formatDateTime(this.new_booking.year, this.new_booking.month, this.new_booking.day, this.new_booking.hour, this.new_booking.minutes).toISOString();
        // console.log('Start is ', start);
        var event = {
            title: this.new_booking.title,
            start: start
        };
        console.log('EVENT ', event);
        // let headers = new Headers();
        // headers.append('Content-Type','application/json');
        // let ep = this.authService.prepEndpoint('bookings/');
        // return this.http.post(ep, event, {headers:headers})
        //   .map(res => res.json())
        //   .subscribe(data => {
        //     if(data.success) {
        //       // this.getBookings();
        //     } else {
        //       console.log('Something went wrong, booking could not be created');
        //     }
        //   });
    };
    return BookingCreateComponent;
}());
BookingCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-booking-create',
        template: __webpack_require__("../../../../../src/app/components/booking-create/booking-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/booking-create/booking-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_resource_service__["a" /* ResourceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_date_service__["a" /* DateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_date_service__["a" /* DateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _d || Object])
], BookingCreateComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/booking-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/booking-dashboard/booking-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/booking-dashboard/booking-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  Your Bookings\n</h1>\n\n<div class=\"row top-buffer\">\n  <div class=\"col-md-6\">\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#newBooking\">New Booking</button>\n  </div>\n</div>\n\n<!-- <app-booking-create></app-booking-create> -->\n\n<div class=\"modal fade\" id=\"newBooking\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">New Booking</h4>\n      </div>\n      <flash-messages></flash-messages>\n      <div class=\"modal-body\">\n        <form (submit)=\"createBooking()\" class=\"form-horizontal\" autocomplete=\"off\">\n          <div class=\"form-group form-inline\" *ngFor=\"let r of booking_resource\">\n            <label class=\"control-label col-sm-4\">{{r.name}}</label>\n            <input type=\"text\" *ngIf=\"r.type == 1 \" [(ngModel)]=\"new_booking[r.key]\" name=\"{{r.key}}\" class=\"form-control focusedInput\">\n\n            <!-- Date -->\n            <div class=\"\" *ngIf=\"r.type == 2\">\n              <select class=\"form-control\" [(ngModel)]=\"new_booking.day\" name=\"{{r.key}}\">\n                <option *ngFor=\"let v of dateService.dateFields.days; let i=index\">{{i+1}}</option>\n              </select>\n              <select class=\"form-control\" [(ngModel)]=\"new_booking.month\" name=\"{{r.key}}\">\n                <option *ngFor=\"let v of dateService.dateFields.months;\">{{v}}</option>\n              </select>\n              <select class=\"form-control\" [(ngModel)]=\"new_booking.year\" name=\"{{r.key}}\">\n                <option *ngFor=\"let v of dateService.dateFields.years; let i=index\">{{dateService.year - i}}</option>\n              </select>\n            </div>\n\n            <!-- Time -->\n            <div class=\"\" *ngIf=\"r.type == 4\">\n              <select class=\"form-control\" [(ngModel)]=\"new_booking.hour\" name=\"{{r.key}}\">\n                <option *ngFor=\"let v of dateService.timeFields.hours; let i=index\">{{i}}</option>\n              </select>\n              <select class=\"form-control\" [(ngModel)]=\"new_booking.minutes\" name=\"{{r.key}}\">\n                <option *ngFor=\"let v of dateService.timeFields.minutes;\">{{v}}</option>\n              </select>\n            </div>\n\n            <input type=\"number\" *ngIf=\"r.type == 3\" [(ngModel)]=\"new_booking[r.key]\" name=\"{{r.key}}\" class=\"form-control\"/>\n\n            <select class=\"form-control\" *ngIf=\"r.type == 0\" [(ngModel)]=\"new_booking[r.key]\" name=\"{{r.key}}\">\n              <option *ngFor=\"let v of r.values\">{{v}}</option>\n            </select>\n          </div>\n\n          <input type=\"submit\" class=\"btn btn-primary\" value=\"Add Booking\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row top-buffer\">\n  <div class=\"col-md-12\">\n    <angular2-fullcalendar [options]=\"calendarOptions\" id=\"myCalendar\" #myCalendar></angular2-fullcalendar>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/booking-dashboard/booking-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_date_service__ = __webpack_require__("../../../../../src/app/services/date.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookingDashboardComponent = (function () {
    function BookingDashboardComponent(http, authService, dateService, resourceService, flashMessage) {
        var _this = this;
        this.http = http;
        this.authService = authService;
        this.dateService = dateService;
        this.resourceService = resourceService;
        this.flashMessage = flashMessage;
        this.calendarOptions = {
            header: { center: 'month,agendaWeek' },
            fixedWeekCount: false,
            defaultDate: new Date(),
            editable: true,
            eventLimit: true // allow "more" link when too many events
        };
        this.http = http;
        this.authService = authService;
        this.dateService = dateService;
        this.resourceService = resourceService;
        this.flashMessage = flashMessage;
        // Get resources
        this.dateService = dateService;
        this.resourceService = resourceService;
        this.authService = authService;
        this.http = http;
        this.new_booking = {};
        this.resourceService.getResourcesFor('booking').subscribe(function (data) {
            if (data.success) {
                _this.booking_resource = data.resources;
            }
            else {
                console.log('Something went wrong, booking resources could not be loaded');
            }
        });
    }
    BookingDashboardComponent.prototype.ngOnInit = function () {
        this.getBookings();
    };
    BookingDashboardComponent.prototype.ngAfterViewInit = function () {
    };
    BookingDashboardComponent.prototype.getBookings = function () {
        var url = this.authService.prepEndpoint('bookings/');
        return __WEBPACK_IMPORTED_MODULE_6_jquery__(this.myCalendar.nativeElement).fullCalendar({
            events: function (start, end, timezone, addEventSource) {
                __WEBPACK_IMPORTED_MODULE_6_jquery__["ajax"]({
                    url: url,
                    dataType: 'json',
                    // data: {
                    //   // our hypothetical feed requires UNIX timestamps
                    //   start: start.unix(),
                    //   end: end.unix()
                    // },
                    success: function (res) {
                        addEventSource(res.events);
                    }
                });
            },
            eventClick: function (eventcal, jsEvent, view) {
                console.log('Event ', eventcal);
                console.log('Event ' + jsEvent.pageX + ',' + jsEvent.pageY);
                console.log('Event ', view.name);
            }
        });
    };
    BookingDashboardComponent.prototype.addEventSource = function (events) {
        this.calendarOptions.events = events;
        __WEBPACK_IMPORTED_MODULE_6_jquery__(this.myCalendar.nativeElement).fullCalendar('addEventSource', events);
    };
    // ! month is 0 based
    BookingDashboardComponent.prototype.getCurrentMonth = function () {
        var currentdate = __WEBPACK_IMPORTED_MODULE_6_jquery__("#myCalendar").fullCalendar('getDate');
        return currentdate.month();
    };
    BookingDashboardComponent.prototype.createBooking = function () {
        var _this = this;
        this.new_booking.month = this.dateService.dateFields.months.indexOf(this.new_booking.month);
        var start = this.dateService.formatDateTime(this.new_booking.year, this.new_booking.month, this.new_booking.day, this.new_booking.hour, this.new_booking.minutes);
        var booking = {
            title: this.new_booking.title,
            start: start
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('bookings/');
        return this.http.post(ep, booking, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                __WEBPACK_IMPORTED_MODULE_6_jquery__(_this.myCalendar.nativeElement).fullCalendar('refetchEvents');
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return BookingDashboardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myCalendar', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], BookingDashboardComponent.prototype, "myCalendar", void 0);
BookingDashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-booking-dashboard',
        template: __webpack_require__("../../../../../src/app/components/booking-dashboard/booking-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/booking-dashboard/booking-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_date_service__["a" /* DateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_date_service__["a" /* DateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_resource_service__["a" /* ResourceService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _f || Object])
], BookingDashboardComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/booking-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/chart/chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4\" *ngFor=\"let g of graphs\">\n    <canvas baseChart\n            [datasets]=\"g.chartData\"\n            [labels]=\"g.chartLabels\"\n            [options]=\"g.chartOptions\"\n            [legend]=\"g.chartLegend\"\n            [chartType]=\"g.chartType\"\n            (chartHover)=\"g.chartHovered($event)\"\n            (chartClick)=\"g.chartClicked($event)\">\n    </canvas>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_patient_service__ = __webpack_require__("../../../../../src/app/services/patient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChartComponent = (function () {
    function ChartComponent(flashMessage, patientService) {
        this.flashMessage = flashMessage;
        this.patientService = patientService;
        this.chartLegend = true;
        this.graph_attributes = [
            // TODO: create age ranges {
            // key:'age',
            // name:'Age',
            // for:'patient',
            // chart_type:'bar'
            // },
            {
                key: 'sex',
                name: 'Sex',
                for: 'patient',
                chart_type: 'pie'
            },
            {
                key: 'site_of_complaint',
                name: 'Site of Complaint',
                for: 'patient',
                chart_type: 'pie'
            },
            {
                key: 'treatment_used',
                name: 'Treatment Used',
                for: 'treatment',
                chart_type: 'pie'
            },
            {
                key: 'vas_before',
                name: 'VAS Before',
                for: 'discharged',
                chart_type: 'pie'
            },
            {
                key: 'vas_after',
                name: 'VAS After',
                for: 'discharged',
                chart_type: 'pie'
            },
            {
                key: 'qal_before',
                name: 'QAL Before',
                for: 'discharged',
                chart_type: 'pie'
            },
            {
                key: 'qal_after',
                name: 'QAL After',
                for: 'discharged',
                chart_type: 'pie'
            }
        ];
        this.patientService = patientService;
    }
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patients$ = this.patientService.subscribeToDataService(1);
        this.patients$.subscribe(function (patients) {
            _this.patients = patients;
        });
        this.discharged_patients$ = this.patientService.subscribeToDataService(3);
        this.discharged_patients$.subscribe(function (patients) {
            _this.discharged_patients = patients;
            var patient_attr = _this.graph_attributes.filter(function (attr) { return attr.for == 'patient'; });
            var treatment_attr = _this.graph_attributes.filter(function (attr) { return attr.for == 'treatment'; });
            _this.graphs = [];
            var _loop_1 = function () {
                var key = patient_attr[a].key;
                var name = patient_attr[a].name;
                var arr = patients.map(function (p) { return p[key]; });
                var unique_labels = Array.from(new Set(arr));
                var filtered_data = [];
                unique_labels.forEach(function (label) {
                    filtered_data.push(arr.filter(function (a) { return a == label; }).length);
                });
                var graph = {
                    chartData: [
                        { data: filtered_data, label: 'Discharged Patient ' + name }
                    ],
                    chartLabels: unique_labels,
                    chartOptions: {
                        scaleShowVerticalLines: false,
                        responsive: true,
                        title: {
                            display: true,
                            text: name
                        }
                    },
                    chartLegend: _this.chartLegend,
                    chartType: patient_attr[a].chart_type,
                    chartHovered: _this.chartHovered,
                    chartClicked: _this.chartClicked
                };
                _this.graphs.push(graph);
            };
            for (var a in patient_attr) {
                _loop_1();
            }
            var _loop_2 = function () {
                var key = treatment_attr[a].key;
                var name = treatment_attr[a].name;
                var arr = [];
                patients.map(function (p) { return p.treatments.map(function (t) { return t[key]; }).forEach(function (t) {
                    arr.push(t);
                }); });
                var unique_labels = Array.from(new Set(arr));
                var filtered_data = [];
                unique_labels.forEach(function (label) {
                    filtered_data.push(arr.filter(function (a) { return a == label; }).length);
                });
                var graph = {
                    chartData: [
                        { data: filtered_data, label: 'Discharged Patient ' + name }
                    ],
                    chartLabels: unique_labels,
                    chartOptions: {
                        scaleShowVerticalLines: false,
                        responsive: true,
                        title: {
                            display: true,
                            text: name
                        }
                    },
                    chartLegend: _this.chartLegend,
                    chartType: treatment_attr[a].chart_type,
                    chartHovered: _this.chartHovered,
                    chartClicked: _this.chartClicked
                };
                _this.graphs.push(graph);
            };
            // Repeat for treatment_attr
            for (var a in treatment_attr) {
                _loop_2();
            }
            // TODO: vas and qal charts
            // Filter: Returns an array of patients that match the test
            // var females = patients.filter(patients => patients.age <  40);
            // console.log('Females = ', females);
            // Map: Returns an array with only the required attribute from an object
            // var onlyage = patients.map(p => p.age);
            // console.log('Only age ',onlyage);
        });
    };
    ChartComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    ChartComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    return ChartComponent;
}());
ChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chart',
        template: __webpack_require__("../../../../../src/app/components/chart/chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chart/chart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_patient_service__["a" /* PatientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_patient_service__["a" /* PatientService */]) === "function" && _b || Object])
], ChartComponent);

var _a, _b;
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to your dashboard: add new patients, edit current patients, create bookings.</p>\n\n<h2>Add Agenda</h2>\n\n<h2>Charts</h2>\n\n<div class=\"row top-buffer\" *ngIf=\"hasDischargedPatients()\">\n  <app-chart></app-chart>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_patient_service__ = __webpack_require__("../../../../../src/app/services/patient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(validateService, flashMessage, patientService, authService) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.patientService = patientService;
        this.authService = authService;
        this.patientService = patientService;
        this.authService = authService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.hasPatients = function () {
        if (this.patientService.patients.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    DashboardComponent.prototype.hasOngoingPatients = function () {
        if (this.patientService.ongoing_patients.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    DashboardComponent.prototype.hasDischargedPatients = function () {
        if (this.patientService.discharged_patients.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_patient_service__["a" /* PatientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_patient_service__["a" /* PatientService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/datepicker/datepicker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/datepicker/datepicker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <select class=\"form-control\" [(ngModel)]=\"patientService.new_treatment['treatment_date']\" name=\"{{model[key]}}\">\n    <option *ngFor=\"let v of dateFields.days; let i=index\">{{i+1}}</option>\n  </select>\n  <select class=\"form-control\" [(ngModel)]=\"model\" name=\"{{model[key]}}\">\n    <option *ngFor=\"let v of dateFields.months\">{{v}}</option>\n  </select>\n  <select class=\"form-control\" [(ngModel)]=\"model\" name=\"{{model[key]}}\">\n    <option *ngFor=\"let v of dateFields.years; let i=index\">{{year - i}}</option>\n  </select>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/datepicker/datepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_patient_service__ = __webpack_require__("../../../../../src/app/services/patient.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatepickerComponent = (function () {
    function DatepickerComponent(patientService) {
        this.patientService = patientService;
        this.today = new Date();
        this.year = this.today.getUTCFullYear();
        this.dateFields = {
            days: Array(31),
            months: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
            years: Array(100)
        };
        this.patientService = patientService;
    }
    DatepickerComponent.prototype.ngOnInit = function () {
        console.log(this.key + ' and ' + this.model);
    };
    DatepickerComponent.prototype.getDate = function () {
        return this.today && this.today.getTime() || new Date().getTime();
    };
    return DatepickerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DatepickerComponent.prototype, "key", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DatepickerComponent.prototype, "model", void 0);
DatepickerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-datepicker',
        template: __webpack_require__("../../../../../src/app/components/datepicker/datepicker.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/datepicker/datepicker.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_patient_service__["a" /* PatientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_patient_service__["a" /* PatientService */]) === "function" && _a || Object])
], DatepickerComponent);

var _a;
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/datepicker.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Osteappathy</h1>\n  <p class=\"lead\">Welcome to Patient Audit App</p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n<!-- <div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>What I do</h3>\n    <p>Because this...</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Why I'm great</h3>\n    <p>Because that...</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Why you need me</h3>\n    <p>Because this...</p>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-10 col-sm-push-1\">\n    <h2 class=\"page-header\">Login</h2>\n    <form (submit)=\"onLoginSubmit()\" autocomplete=\"off\">\n      <div class=\"form-group\">\n        <label for=\"\">Username</label>\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Password</label>\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n      </div>\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/dashboard']\">Osteappathy</a>\n      <a class=\"navbar-brand\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/']\">Osteappathy</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/patient-dashboard']\">Patients</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/booking-dashboard']\">Bookings</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/patient-create/patient-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/patient-create/patient-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"newPatient\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">New Patient</h4>\n      </div>\n      <flash-messages></flash-messages>\n      <div class=\"modal-body\">\n        <form (submit)=\"createPatient()\" class=\"form-horizontal\" autocomplete=\"off\">\n          <div class=\"form-group form-inline\" *ngFor=\"let r of patientService.patient_resource\">\n            <label class=\"control-label col-sm-4\">{{r.name}}</label>\n            <input type=\"text\" *ngIf=\"r.type == 1 \" [(ngModel)]=\"patientService.new_patient[r.key]\" name=\"{{r.key}}\" class=\"form-control focusedInput\">\n\n            <!-- TODO <app-datepicker *ngIf=\"r.type == 2\" key=\"{{r.key}}\" model=\"patientService.new_patient\"></app-datepicker> -->\n            <div class=\"\" *ngIf=\"r.type == 2\">\n              <select class=\"form-control\" [(ngModel)]=\"patientService.new_patient.day\" name=\"{{r.key}}\">\n                <option *ngFor=\"let v of dateService.dateFields.days; let i=index\">{{i+1}}</option>\n              </select>\n              <select class=\"form-control\" [(ngModel)]=\"patientService.new_patient.month\" name=\"{{r.key}}\">\n                <option *ngFor=\"let v of dateService.dateFields.months\">{{v}}</option>\n              </select>\n              <select class=\"form-control\" [(ngModel)]=\"patientService.new_patient.year\" name=\"{{r.key}}\">\n                <option *ngFor=\"let v of dateService.dateFields.years; let i=index\">{{dateService.year - i}}</option>\n              </select>\n            </div>\n\n            <input type=\"number\" *ngIf=\"r.type == 3\" [(ngModel)]=\"patientService.new_patient[r.key]\" name=\"{{r.key}}\" class=\"form-control\"/>\n\n            <select class=\"form-control\" *ngIf=\"r.type == 0\" [(ngModel)]=\"patientService.new_patient[r.key]\" name=\"{{r.key}}\">\n              <option *ngFor=\"let v of r.values\">{{v}}</option>\n            </select>\n          </div>\n\n          <p>This treatment is the consult</p>\n\n          <div class=\"form-group form-inline\" *ngFor=\"let r of patientService.treatment_resource\">\n            <label class=\"control-label col-sm-4\">{{r.name}}</label>\n            <input type=\"text\" *ngIf=\"r.type == 1 \" [(ngModel)]=\"patientService.new_treatment[r.key]\" name=\"{{r.key}}\" class=\"form-control focusedInput\">\n\n            <!--TODO <app-datepicker *ngIf=\"r.type == 2\" name=\"patientService.new_treatment[{{r.key}}]\" key=\"{{r.key}}\" model=\"patientService.new_treatment\" ngModel></app-datepicker> -->\n            <div class=\"\" *ngIf=\"r.type == 2\">\n              <select class=\"form-control\" [(ngModel)]=\"patientService.new_treatment.day\" name=\"{{r.key}}\">\n                <option *ngFor=\"let v of dateService.dateFields.days; let i=index\">{{i+1}}</option>\n              </select>\n              <select class=\"form-control\" [(ngModel)]=\"patientService.new_treatment.month\" name=\"{{r.key}}\">\n                <option *ngFor=\"let v of dateService.dateFields.months\">{{v}}</option>\n              </select>\n              <select class=\"form-control\" [(ngModel)]=\"patientService.new_treatment.year\" name=\"{{r.key}}\">\n                <option *ngFor=\"let v of dateService.dateFields.years; let i=index\">{{dateService.year - i}}</option>\n              </select>\n            </div>\n\n            <input type=\"number\" *ngIf=\"r.type == 3\" [(ngModel)]=\"patientService.new_treatment[r.key]\" name=\"{{r.key}}\" class=\"form-control\"/>\n            <select class=\"form-control\" *ngIf=\"r.type == 0\" [(ngModel)]=\"patientService.new_treatment[r.key]\" name=\"{{r.key}}\">\n              <option *ngFor=\"let v of r.values\">{{v}}</option>\n            </select>\n          </div>\n\n          <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/patient-create/patient-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_patient_service__ = __webpack_require__("../../../../../src/app/services/patient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_date_service__ = __webpack_require__("../../../../../src/app/services/date.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PatientCreateComponent = (function () {
    function PatientCreateComponent(flashMessage, validateService, patientService, dateService) {
        this.flashMessage = flashMessage;
        this.validateService = validateService;
        this.patientService = patientService;
        this.dateService = dateService;
        this.validateService = validateService;
        this.patientService = patientService;
        this.dateService = dateService;
    }
    PatientCreateComponent.prototype.ngOnInit = function () {
    };
    PatientCreateComponent.prototype.createPatient = function () {
        var _this = this;
        if (!this.validateService.validatePatient()) {
            this.flashMessage.show('Please fill in required patient fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateTreatment(this.patientService.new_treatment)) {
            this.flashMessage.show('Please fill in required treatment fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        var newPatient = this.patientService.getNewPatient();
        this.patientService.createPatient(newPatient).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.patientService.addPatientToUser(data.patient_id).subscribe(function (data) {
                    if (data.success) {
                        _this.patientService.loadPatients();
                    }
                    else {
                        _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                    }
                });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return PatientCreateComponent;
}());
PatientCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-patient-create',
        template: __webpack_require__("../../../../../src/app/components/patient-create/patient-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/patient-create/patient-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_patient_service__["a" /* PatientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_patient_service__["a" /* PatientService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_date_service__["a" /* DateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_date_service__["a" /* DateService */]) === "function" && _d || Object])
], PatientCreateComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/patient-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/patient-dashboard/patient-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/patient-dashboard/patient-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- Search Patient -->\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Patient number\">\n      <span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\">Search</button></span>\n    </div>\n  </div>\n</div>\n\n<!-- Filter Patients -->\n<br>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Filter by...\">\n      <span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\">Filter</button></span>\n    </div>\n  </div>\n</div>\n\n<!-- Create Patient -->\n\n<div class=\"row top-buffer\">\n  <div class=\"col-md-6\">\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#newPatient\">Create new patient</button>\n  </div>\n</div>\n\n\n<app-patient-create></app-patient-create>\n\n<!-- Display Patients -->\n\n<div class=\"row top- bottom-buffer\" *ngIf=\"!hasPatients()\">\n  <div class=\"col-md-6\">\n    <h2>Create a patient to get started</h2>\n  </div>\n</div>\n\n<div class=\"row top-buffer bottom-buffer\" *ngIf=\"hasPatients()\">\n  <!-- Ongoing Patients -->\n  <div class=\"col-md-6\">\n    <h2>Ongoing Patients</h2>\n    <ul *ngIf=\"hasOngoingPatients()\" class=\"list-group\">\n      <a *ngFor=\"let patient of patientService.ongoing_patients\" (click)=\"patientService.setSelectedPatient(patient)\" class=\"list-group-item\" style=\"cursor: pointer\" data-toggle=\"modal\" data-target=\"#editPatient\">\n          <h4>Patient {{patient.patient_num}}</h4>\n          <span>{{patient.age}} year old {{patient.ethnicity}} {{patient.sex}}, {{patient.occupation}}</span>\n          <br>\n          <span><b>Complaint: {{patient.stage}} {{patient.site_of_complaint}}</b></span>\n      </a>\n    </ul>\n  </div>\n\n  <!-- Discharged Patients -->\n  <div class=\"col-md-6\">\n    <h2>Discharged Patients</h2>\n    <ul *ngIf=\"hasDischargedPatients()\" class=\"list-group\">\n      <a *ngFor=\"let patient of patientService.discharged_patients\"  class=\"list-group-item\" style=\"cursor: pointer\" data-toggle=\"modal\" data-target=\"#editPatient\" (click)=\"patientService.setSelectedPatient(patient)\">\n        <h4>Patient {{patient.patient_num}}</h4>\n        <span>{{patient.age}} year old {{patient.ethnicity}} {{patient.sex}}, {{patient.occupation}}</span>\n        <br>\n        <span><b>Complaint: {{patient.stage}} {{patient.site_of_complaint}}</b></span>\n      </a>\n    </ul>\n  </div>\n  <app-patient-edit></app-patient-edit>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/patient-dashboard/patient-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_patient_service__ = __webpack_require__("../../../../../src/app/services/patient.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


;
var PatientDashboardComponent = (function () {
    function PatientDashboardComponent(patientService) {
        this.patientService = patientService;
        this.patientService = patientService;
    }
    PatientDashboardComponent.prototype.ngOnInit = function () {
    };
    PatientDashboardComponent.prototype.hasPatients = function () {
        if (this.patientService.patients.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    PatientDashboardComponent.prototype.hasOngoingPatients = function () {
        if (this.patientService.ongoing_patients.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    PatientDashboardComponent.prototype.hasDischargedPatients = function () {
        if (this.patientService.discharged_patients.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return PatientDashboardComponent;
}());
PatientDashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-patient-dashboard',
        template: __webpack_require__("../../../../../src/app/components/patient-dashboard/patient-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/patient-dashboard/patient-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_patient_service__["a" /* PatientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_patient_service__["a" /* PatientService */]) === "function" && _a || Object])
], PatientDashboardComponent);

var _a;
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/patient-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/patient-edit/patient-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/patient-edit/patient-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"editPatient\" role=\"dialog\" *ngIf=\"getSelectedPatient()\">\n  <div class=\"modal-dialog modal-lg\">\n  <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Edit Patient {{selected_patient.patient_num}}</h4>\n      </div>\n      <flash-messages></flash-messages>\n      <div class=\"modal-body\">\n\n        <div class=\"row\">\n          <div class=\"col-sm-8 col-push-2\">\n            <button type=\"button\" class=\"btn btn-info\" data-toggle=\"collapse\" data-target=\"#viewPatient\">View Patient</button>\n            <button type=\"button\" class=\"btn btn-info\" data-toggle=\"collapse\" data-target=\"#viewTreatments\">View Treatments</button>\n          </div>\n        </div>\n\n        <!-- View Patient -->\n          <div class=\"collapse\" id=\"viewPatient\">\n            <form (submit)=\"updatePatient()\" class=\"form-horizontal\" autocomplete=\"off\">\n              <div class=\"form-group form-inline\" *ngFor=\"let r of patientService.patient_resource\">\n                <label class=\"control-label col-sm-4\">{{r.name}}</label>\n                <input type=\"text\" *ngIf=\"r.type == 1 \" [(ngModel)]=\"selected_patient[r.key]\" name=\"{{r.key}}\" class=\"form-control\">\n                <input type=\"date\" *ngIf=\"r.type == 2\" [(ngModel)]=\"selected_patient[r.key]\" name=\"{{r.key}}\" class=\"form-control\"/>\n                <input type=\"number\" *ngIf=\"r.type == 3\" [(ngModel)]=\"selected_patient[r.key]\" name=\"{{r.key}}\" class=\"form-control\"/>\n                <select class=\"form-control\" *ngIf=\"r.type == 0\" [(ngModel)]=\"selected_patient[r.key]\" name=\"{{r.key}}\">\n                  <option *ngFor=\"let v of r.values\">{{v}}</option>\n                </select>\n              </div>\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n            </form>\n          </div>\n\n        <!-- View Treatments -->\n          <div class=\"collapse\" id=\"viewTreatments\">\n            <table class=\"table table-striped\">\n              <thead>\n                <tr>\n                  <th *ngFor=\"let t of this.patientService.treatment_resource\">{{t.name}}</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let t of selected_patient.treatments\">\n                  <td>{{t.treatment_date}}</td>\n                  <td>{{t.treatment_used}}</td>\n                  <td>{{t.vas}}</td>\n                  <td>{{t.qal}}</td>\n                </tr>\n                <!-- Add Treatment -->\n                <tr>\n                  <td *ngFor=\"let t of this.patientService.treatment_resource\">\n                    <input type=\"text\" *ngIf=\"t.type == 1 \" [(ngModel)]=\"new_treatment[t.key]\" name=\"{{t.key}}\" class=\"form-control focusedInput\">\n                    <input type=\"date\" *ngIf=\"t.type == 2\" [(ngModel)]=\"new_treatment[t.key]\" name=\"{{t.key}}\" class=\"form-control\"/>\n                    <input type=\"number\" *ngIf=\"t.type == 3\" [(ngModel)]=\"new_treatment[t.key]\" name=\"{{t.key}}\" class=\"form-control\"/>\n                    <select class=\"form-control\" *ngIf=\"t.type == 0\" [(ngModel)]=\"new_treatment[t.key]\" name=\"{{t.key}}\">\n                      <option *ngFor=\"let v of t.values\">{{v}}</option>\n                    </select>\n                  </td>\n                  <td><button type=\"button\" name=\"button\" class=\"btn btn-default\" (click)=\"addTreatment()\">Add</button></td>\n                </tr>\n              </tbody>\n            </table>\n\n            <form id=\"addTreatment\" (submit)=\"addTreatment()\" method=\"post\">\n              <div class=\"form-group form-inline\" *ngFor=\"let r of patientService.treatment_resource\">\n\n\n              </div>\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n            </form>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"discharge()\" *ngIf=\"!selected_patient.discharged\">Discharge</button>\n          </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/patient-edit/patient-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_patient_service__ = __webpack_require__("../../../../../src/app/services/patient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PatientEditComponent = (function () {
    function PatientEditComponent(flashMessage, patientService, validateService) {
        this.flashMessage = flashMessage;
        this.patientService = patientService;
        this.validateService = validateService;
        this.new_treatment = {};
        this.patientService = patientService;
        this.validateService = validateService;
    }
    PatientEditComponent.prototype.ngOnInit = function () {
        this.selected_patient = this.patientService.getSelectedPatient();
        $('#viewPatient').show();
        $('#viewTreatments').hide();
    };
    PatientEditComponent.prototype.toggleSection = function () {
        $('#viewPatient').toggle();
        $('#viewTreatments').toggle();
        return;
    };
    PatientEditComponent.prototype.getSelectedPatient = function () {
        if (this.patientService.getSelectedPatient() == undefined) {
            return false;
        }
        else {
            this.selected_patient = this.patientService.getSelectedPatient();
            return true;
        }
    };
    PatientEditComponent.prototype.updatePatient = function () {
        var _this = this;
        this.patientService.updatePatient(this.selected_patient).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Saved patient details', { cssClass: 'alert-success', timeout: 3000 });
                _this.patientService.getPatients();
            }
            else {
                _this.flashMessage.show('Something went wrong, patient could not be saved', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    PatientEditComponent.prototype.addTreatment = function () {
        var _this = this;
        if (!this.validateService.validateTreatment(this.new_treatment)) {
            this.flashMessage.show('Please fill in required treatment fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.selected_patient.treatments.push(this.new_treatment);
        this.patientService.updatePatient(this.selected_patient).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Added new treatment', { cssClass: 'alert-success', timeout: 3000 });
                _this.patientService.getPatients();
                _this.new_treatment = {};
            }
            else {
                _this.flashMessage.show('Something went wrong, treatment could not be added', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    PatientEditComponent.prototype.discharge = function () {
        var _this = this;
        this.selected_patient.discharged = true;
        this.patientService.updatePatient(this.selected_patient).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Patient has been discharged', { cssClass: 'alert-success', timeout: 3000 });
                _this.patientService.getPatients();
            }
            else {
                _this.flashMessage.show('Something went wrong, patient could not be discharged', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return PatientEditComponent;
}());
PatientEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-patient-edit',
        template: __webpack_require__("../../../../../src/app/components/patient-edit/patient-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/patient-edit/patient-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_patient_service__["a" /* PatientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_patient_service__["a" /* PatientService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object])
], PatientEditComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/patient-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">{{user.username}}</li>\n    <li class=\"list-group-item\">{{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log('Error ' + err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-10 col-sm-push-1\">\n    <h2 class=\"page-header\">Register</h2>\n    <form (submit)=\"onRegisterSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"\">Name</label>\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Username</label>\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Email</label>\n        <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Password</label>\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n      </div>\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
            patients: []
        };
        // Required fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                // Redirect
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/register.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = true;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // Observable that can be subscribed to
        var ep = this.prepEndpoint('users/register');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/authenticate');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/profile');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUserId = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        return user.id;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:8080/' + ep;
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/booking.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookingService = (function () {
    function BookingService() {
    }
    return BookingService;
}());
BookingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], BookingService);

//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/booking.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/date.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateService = (function () {
    function DateService() {
        this.today = new Date();
        this.year = this.today.getUTCFullYear();
        this.dateFields = {
            days: Array(31),
            months: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
            years: Array(100)
        };
        this.timeFields = {
            minutes: ['00', '15', '30', '45'],
            hours: Array(24)
        };
    }
    DateService.prototype.parseDate = function (year, month, day) {
        console.log(year, month, this.dateFields.months.indexOf(month), day);
        return new Date(year, this.dateFields.months.indexOf(month), day);
    };
    DateService.prototype.formatDate = function (yyyy, mm, dd) {
        mm = mm + 1; // mm is zero-based
        return [yyyy,
            (mm > 9 ? '' : '0') + mm,
            (dd > 9 ? '' : '0') + dd].join('-');
    };
    DateService.prototype.formatDateTime = function (yyyy, mm, dd, hh, m) {
        var date = this.formatDate(yyyy, mm, dd);
        date = date + "T" + [hh, ":", m].join('') + "Z";
        return new Date(date);
    };
    return DateService;
}());
DateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DateService);

//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/date.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/patient.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_date_service__ = __webpack_require__("../../../../../src/app/services/date.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PatientService = (function () {
    function PatientService(http, authService, dateService, resourceService) {
        var _this = this;
        this.http = http;
        this.authService = authService;
        this.dateService = dateService;
        this.resourceService = resourceService;
        this.patients = [];
        this.ongoing_patients = [];
        this.discharged_patients = [];
        this.resourceService = resourceService;
        this.dateService = dateService;
        this.user_id = this.authService.getUserId();
        this.new_patient = {};
        this.new_treatment = {};
        this.patients$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.ongoing_patients$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.discharged_patients$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.patient_resource$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]([])
            .asObservable();
        this.treatment_resource$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]([])
            .asObservable();
        // Resources for patients and treatments - only needs to be loaded once
        this.resourceService.getResources().subscribe(function (data) {
            if (data.success) {
                _this.patient_resource = [];
                _this.treatment_resource = [];
                for (var r in data.resources) {
                    if (data.resources[r].for == "patient") {
                        _this.patient_resource.push(data.resources[r]);
                        _this.new_patient[data.resources[r].key] = undefined;
                    }
                    else if (data.resources[r].for == "treatment") {
                        _this.treatment_resource.push(data.resources[r]);
                        _this.new_treatment[data.resources[r].key] = undefined;
                    }
                }
            }
            else {
                console.log('Something went wrong, resources could not be loaded');
            }
        });
        this.loadPatients();
    }
    PatientService.prototype.subscribeToDataService = function (d) {
        switch (d) {
            case 1: return this.patients$.asObservable();
            case 2: return this.ongoing_patients$.asObservable();
            case 3: return this.discharged_patients$.asObservable();
            default: break;
        }
        return;
    };
    PatientService.prototype.loadPatients = function () {
        var _this = this;
        this.getPatientList().subscribe(function (data) {
            _this.patient_list = data.patient_list;
            if (_this.patient_list.length == 0) {
                console.log('No patients to load');
            }
            else {
                _this.getPatients();
            }
        });
    };
    PatientService.prototype.getPatientList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('users/patients');
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set('user_id', this.authService.getUserId());
        return this.http.get(ep, {
            search: params,
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    PatientService.prototype.getPatients = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('patients/user');
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set('patient_list', this.patient_list);
        this.http.get(ep, {
            search: params,
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.patients = data.patients;
            _this.ongoing_patients = [];
            _this.discharged_patients = [];
            for (var p in data.patients) {
                var ageDate = new Date(Date.now() - new Date(data.patients[p].dob).getTime());
                var age = Math.abs(ageDate.getUTCFullYear() - 1970);
                data.patients[p].age = age;
                if (data.patients[p].discharged == false) {
                    _this.ongoing_patients.push(data.patients[p]);
                }
                else {
                    _this.discharged_patients.push(data.patients[p]);
                }
            }
            // Push new copy of patient to all Subscribers
            _this.patients$.next(_this.patients);
            _this.ongoing_patients$.next(_this.ongoing_patients);
            _this.discharged_patients$.next(_this.discharged_patients);
        }, function (err) {
            console.log('Something went wrong, patients could not be loaded; in patient service, getPatients()');
        });
    };
    PatientService.prototype.getAllPatients = function () {
        // TODO: get all patients in patient collection
    };
    PatientService.prototype.createPatient = function (patient) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('patients/create');
        return this.http.post(ep, patient, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PatientService.prototype.updatePatient = function (patient) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('patients/update');
        return this.http.post(ep, { patient: patient }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PatientService.prototype.addPatientToUser = function (patient_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('users/newpatient');
        var user_id = this.authService.getUserId();
        return this.http.post(ep, { user_id: user_id, patient_id: patient_id }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PatientService.prototype.setSelectedPatient = function (patient) {
        this.selected_patient = patient;
    };
    PatientService.prototype.getSelectedPatient = function () {
        return this.selected_patient;
    };
    PatientService.prototype.getNewPatient = function () {
        this.new_patient.treatments = [this.new_treatment];
        this.new_patient.discharged = false;
        console.log('New patient ', this.new_patient);
        return this.new_patient;
    };
    return PatientService;
}());
PatientService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_date_service__["a" /* DateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_date_service__["a" /* DateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_resource_service__["a" /* ResourceService */]) === "function" && _d || Object])
], PatientService);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/patient.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/resource.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResourceService = (function () {
    function ResourceService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.http = http;
        this.authService = authService;
    }
    ResourceService.prototype.getResources = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('resources/');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ResourceService.prototype.getResourcesFor = function (resource) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('resources/' + resource);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ResourceService;
}());
ResourceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], ResourceService);

var _a, _b;
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/resource.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_date_service__ = __webpack_require__("../../../../../src/app/services/date.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_patient_service__ = __webpack_require__("../../../../../src/app/services/patient.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ValidateService = (function () {
    function ValidateService(dateService, patientService) {
        this.dateService = dateService;
        this.patientService = patientService;
        this.dateService = dateService;
        this.patientService = patientService;
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validatePatient = function () {
        var dateReq = ['day', 'month', 'year'];
        for (var d in dateReq) {
            if (this.patientService.new_patient[dateReq[d]] == undefined) {
                return false;
            }
        }
        this.patientService.new_patient.dob = this.dateService.parseDate(this.patientService.new_patient.year, this.patientService.new_patient.month, this.patientService.new_patient.day);
        for (var r in this.patientService.patient_resource) {
            var key = this.patientService.patient_resource[r].key;
            if (this.patientService.new_patient[key] == undefined) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    ValidateService.prototype.validateTreatment = function (treatment) {
        var dateReq = ['day', 'month', 'year'];
        for (var d in dateReq) {
            if (this.patientService.new_treatment[dateReq[d]] == undefined) {
                console.log(dateReq[d]);
                return false;
            }
        }
        this.patientService.new_treatment.treatment_date = this.dateService.parseDate(this.patientService.new_treatment.year, this.patientService.new_treatment.month, this.patientService.new_treatment.day);
        //new Date(this.new_treatment.year,this.new_treatment.month,this.new_treatment.day);
        for (var r in this.patientService.treatment_resource) {
            var key = this.patientService.treatment_resource[r].key;
            if (treatment[key] == undefined) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_date_service__["a" /* DateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_date_service__["a" /* DateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_patient_service__["a" /* PatientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_patient_service__["a" /* PatientService */]) === "function" && _b || Object])
], ValidateService);

var _a, _b;
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
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
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map