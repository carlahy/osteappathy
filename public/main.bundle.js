webpackJsonp([1,4],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
    function PatientService(http, authService) {
        var _this = this;
        this.http = http;
        this.authService = authService;
        this.patients = [];
        this.ongoing_patients = [];
        this.discharged_patients = [];
        this.user_id = this.authService.getUserId();
        this.isDev = true;
        this.new_patient = {};
        this.new_treatment = {};
        this.patients$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.ongoing_patients$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.discharged_patients$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.patient_resource$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([])
            .asObservable();
        this.treatment_resource$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([])
            .asObservable();
        // Resources for patients and treatments - only needs to be loaded once
        this.getResources().subscribe(function (data) {
            if (data.success) {
                _this.patient_resource = [];
                _this.treatment_resource = [];
                for (var r in data.resources) {
                    if (data.resources[r].for == "Patient") {
                        _this.patient_resource.push(data.resources[r]);
                        _this.new_patient[data.resources[r].key] = undefined;
                    }
                    else {
                        _this.treatment_resource.push(data.resources[r]);
                        _this.new_treatment[data.resources[r].key] = undefined;
                    }
                }
            }
            else {
                console.log('Something went wrong, patients could not be loaded');
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
    PatientService.prototype.getResources = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('resources/');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PatientService.prototype.loadPatients = function () {
        var _this = this;
        this.getPatientList().subscribe(function (data) {
            _this.patient_list = data.patient_list;
            _this.getPatients();
        });
    };
    PatientService.prototype.getPatientList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/patients');
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
        var ep = this.prepEndpoint('patients/user');
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
            console.log('Something went wrong, patients could not be loaded');
        });
    };
    PatientService.prototype.getAllPatients = function () {
        // TODO: get all patients in patient collection
    };
    PatientService.prototype.validatePatient = function () {
        for (var r in this.patient_resource) {
            var key = this.patient_resource[r].key;
            if (this.new_patient[key] == undefined) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    // TODO: call this function
    PatientService.prototype.validateTreatment = function (treatment) {
        for (var r in this.treatment_resource) {
            var key = this.treatment_resource[r].key;
            if (treatment[key] == undefined) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    PatientService.prototype.createPatient = function (patient) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('patients/create');
        return this.http.post(ep, patient, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PatientService.prototype.updatePatient = function (patient) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('patients/update');
        return this.http.post(ep, { patient: patient }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PatientService.prototype.addPatientToUser = function (patient_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/newpatient');
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
    // Date inputs are binded as strings, convert to Date object
    PatientService.prototype.parseDate = function (date) {
        var d = {
            year: parseInt(date.split("-")[0]),
            month: parseInt(date.split("-")[1]) - 1,
            day: parseInt(date.split("-")[2])
        };
        return new Date(d.year, d.month, d.day);
    };
    PatientService.prototype.getNewPatient = function () {
        var dob = this.parseDate(this.new_patient.dob);
        var ageDate = new Date(Date.now() - dob.getTime());
        var age = Math.abs(ageDate.getUTCFullYear() - 1970);
        this.new_patient.age = age;
        this.new_patient.treatments = [this.new_treatment];
        this.new_patient.discharged = false;
        return this.new_patient;
    };
    PatientService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:8080/' + ep;
        }
    };
    PatientService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], PatientService);
    return PatientService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/patient.service.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_patient_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(56);
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
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(695),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_patient_service__["a" /* PatientService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_patient_service__["a" /* PatientService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _d) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function ValidateService() {
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
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/validate.service.js.map

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 392;


/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(511);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/main.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(693),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/app.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_patient_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_patient_edit_patient_edit_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_patient_create_patient_create_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_charts_ng2_charts__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_chart_chart_component__ = __webpack_require__(512);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
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
                __WEBPACK_IMPORTED_MODULE_20__components_chart_chart_component__["a" /* ChartComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_19_ng2_charts_ng2_charts__["ChartsModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_16__services_patient_service__["a" /* PatientService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/app.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_patient_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(708);
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
        this.chartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
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
            var _loop_1 = function() {
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
                    chartOptions: _this.chartOptions,
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
            // Repeat for treatment_attr
            var _loop_2 = function() {
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
                    chartOptions: _this.chartOptions,
                    chartLegend: _this.chartLegend,
                    chartType: treatment_attr[a].chart_type,
                    chartHovered: _this.chartHovered,
                    chartClicked: _this.chartClicked
                };
                _this.graphs.push(graph);
            };
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
    ChartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(694),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_patient_service__["a" /* PatientService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_patient_service__["a" /* PatientService */]) === 'function' && _b) || Object])
    ], ChartComponent);
    return ChartComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/chart.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(696),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/home.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(56);
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
                    timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(697),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/login.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(56);
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
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(698),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_patient_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__(224);
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
    function PatientCreateComponent(flashMessage, patientService, dashboardComponent) {
        this.flashMessage = flashMessage;
        this.patientService = patientService;
        this.dashboardComponent = dashboardComponent;
        this.patientService = patientService;
        this.dashboardComponent = dashboardComponent;
    }
    PatientCreateComponent.prototype.ngOnInit = function () {
    };
    PatientCreateComponent.prototype.createPatient = function () {
        var _this = this;
        if (!this.patientService.validatePatient()) {
            this.flashMessage.show('Please fill in required patient fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.patientService.validateTreatment(this.patientService.new_patient)) {
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
    PatientCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-patient-create',
            template: __webpack_require__(699),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_patient_service__["a" /* PatientService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_patient_service__["a" /* PatientService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */]) === 'function' && _c) || Object])
    ], PatientCreateComponent);
    return PatientCreateComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/patient-create.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_patient_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__(224);
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
    function PatientEditComponent(flashMessage, patientService, dashboardComponent) {
        this.flashMessage = flashMessage;
        this.patientService = patientService;
        this.dashboardComponent = dashboardComponent;
        this.new_treatment = {};
        this.patientService = patientService;
        this.dashboardComponent = dashboardComponent;
    }
    PatientEditComponent.prototype.ngOnInit = function () {
        this.selected_patient = this.patientService.getSelectedPatient();
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
        if (!this.patientService.validateTreatment(this.new_treatment)) {
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
    PatientEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-patient-edit',
            template: __webpack_require__(700),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_patient_service__["a" /* PatientService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_patient_service__["a" /* PatientService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */]) === 'function' && _c) || Object])
    ], PatientEditComponent);
    return PatientEditComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/patient-edit.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(80);
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
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(701),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/profile.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(80);
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
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(702),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/register.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(55);
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
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/environment.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(526);
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
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/Users/carlahyenne/Documents/osteappathy/angular-src/src/auth.service.js.map

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-6\" *ngFor=\"let g of graphs\">\n    <canvas baseChart\n            [datasets]=\"g.chartData\"\n            [labels]=\"g.chartLabels\"\n            [options]=\"g.chartOptions\"\n            [legend]=\"g.chartLegend\"\n            [chartType]=\"g.chartType\"\n            (chartHover)=\"g.chartHovered($event)\"\n            (chartClick)=\"g.chartClicked($event)\">\n    </canvas>\n  </div>\n</div>\n"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to your dashboard: add new patients, edit current patients, and generate reports.</p>\n\n<div class=\"row top-buffer\">\n  <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#newPatient\">Create new patient</button>\n  <!-- TODO: <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#newPatient\">Generate Report</button> -->\n</div>\n\n<app-patient-create></app-patient-create>\n\n<div class=\"row top-buffer\">\n  <app-chart></app-chart>\n</div>\n\n<!-- Display Patients -->\n\n<div class=\"row top-buffer\">\n  <!-- Ongoing Patients -->\n  <div class=\"col-md-6\">\n    <h2>Ongoing Patients</h2>\n    <ul *ngIf=\"hasOngoingPatients()\" class=\"list-group\">\n      <a *ngFor=\"let patient of patientService.ongoing_patients\" (click)=\"patientService.setSelectedPatient(patient)\" class=\"list-group-item\" style=\"cursor: pointer\" data-toggle=\"modal\" data-target=\"#editPatient\">\n          <h4>Patient {{patient.patient_num}}</h4>\n          <span>{{patient.age}} year old {{patient.ethnicity}} {{patient.sex}}, {{patient.occupation}}</span>\n          <br>\n          <span><b>Complaint: {{patient.stage}} {{patient.site_of_complaint}}</b></span>\n      </a>\n    </ul>\n  </div>\n\n  <!-- Discharged Patients -->\n  <div class=\"col-md-6\">\n    <h2>Discharged Patients</h2>\n    <ul *ngIf=\"hasDischargedPatients()\" class=\"list-group\">\n      <a *ngFor=\"let patient of patientService.discharged_patients\"  class=\"list-group-item\" style=\"cursor: pointer\" data-toggle=\"modal\" data-target=\"#editPatient\" (click)=\"patientService.setSelectedPatient(patient)\">\n        <h4>Patient {{patient.patient_num}}</h4>\n        <span>{{patient.age}} year old {{patient.ethnicity}} {{patient.sex}}, {{patient.occupation}}</span>\n        <br>\n        <span><b>Complaint: {{patient.stage}} {{patient.site_of_complaint}}</b></span>\n      </a>\n    </ul>\n  </div>\n  <app-patient-edit></app-patient-edit>\n</div>\n"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Osteappathy</h1>\n  <p class=\"lead\">Welcome to Patient Audit App</p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>What I do</h3>\n    <p>Because this...</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Why I'm great</h3>\n    <p>Because that...</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Why you need me</h3>\n    <p>Because this...</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-10 col-sm-push-1\">\n    <h2 class=\"page-header\">Login</h2>\n    <form (submit)=\"onLoginSubmit()\" autocomplete=\"off\">\n      <div class=\"form-group\">\n        <label for=\"\">Username</label>\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Password</label>\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n      </div>\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Osteappathy</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"newPatient\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">New Patient</h4>\n      </div>\n      <flash-messages></flash-messages>\n      <div class=\"modal-body\">\n        <form (submit)=\"createPatient()\" class=\"form-horizontal\" autocomplete=\"off\">\n          <div class=\"form-group form-inline\" *ngFor=\"let r of patientService.patient_resource\">\n            <label class=\"control-label col-sm-4\">{{r.name}}</label>\n            <input type=\"text\" *ngIf=\"r.type == 1 \" [(ngModel)]=\"patientService.new_patient[r.key]\" name=\"{{r.key}}\" class=\"form-control focusedInput\">\n            <input type=\"date\" *ngIf=\"r.type == 2\" [(ngModel)]=\"patientService.new_patient[r.key]\" name=\"{{r.key}}\" class=\"form-control\"/>\n            <input type=\"number\" *ngIf=\"r.type == 3\" [(ngModel)]=\"patientService.new_patient[r.key]\" name=\"{{r.key}}\" class=\"form-control\"/>\n            <select class=\"form-control\" *ngIf=\"r.type == 0\" [(ngModel)]=\"patientService.new_patient[r.key]\" name=\"{{r.key}}\">\n              <option *ngFor=\"let v of r.values\">{{v}}</option>\n            </select>\n          </div>\n          <p>This treatment is the consult</p>\n\n          <div class=\"form-group form-inline\" *ngFor=\"let r of patientService.treatment_resource\">\n            <label class=\"control-label col-sm-4\">{{r.name}}</label>\n            <input type=\"text\" *ngIf=\"r.type == 1 \" [(ngModel)]=\"patientService.new_patient[r.key]\" name=\"{{r.key}}\" class=\"form-control focusedInput\">\n            <input type=\"date\" *ngIf=\"r.type == 2\" [(ngModel)]=\"patientService.new_patient[r.key]\" name=\"{{r.key}}\" class=\"form-control\"/>\n            <input type=\"number\" *ngIf=\"r.type == 3\" [(ngModel)]=\"patientService.new_patient[r.key]\" name=\"{{r.key}}\" class=\"form-control\"/>\n            <select class=\"form-control\" *ngIf=\"r.type == 0\" [(ngModel)]=\"patientService.new_patient[r.key]\" name=\"{{r.key}}\">\n              <option *ngFor=\"let v of r.values\">{{v}}</option>\n            </select>\n          </div>\n\n          <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"editPatient\" role=\"dialog\" *ngIf=\"getSelectedPatient()\">\n  <div class=\"modal-dialog modal-lg\">\n  <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Edit Patient {{selected_patient.patient_num}}</h4>\n      </div>\n      <flash-messages></flash-messages>\n      <div class=\"modal-body\">\n\n        <div class=\"row\">\n          <div class=\"col-sm-8 col-push-2\">\n            <button type=\"button\" class=\"btn btn-info\" data-toggle=\"collapse\" data-target=\"#viewPatient\">View Patient</button>\n            <button type=\"button\" class=\"btn btn-info\" data-toggle=\"collapse\" data-target=\"#viewTreatments\">View Treatments</button>\n          </div>\n        </div>\n\n        <!-- View Patient -->\n          <div class=\"collapse\" id=\"viewPatient\">\n            <form (submit)=\"updatePatient()\" class=\"form-horizontal\" autocomplete=\"off\">\n              <div class=\"form-group form-inline\" *ngFor=\"let r of patientService.patient_resource\">\n                <label class=\"control-label col-sm-4\">{{r.name}}</label>\n                <input type=\"text\" *ngIf=\"r.type == 1 \" [(ngModel)]=\"selected_patient[r.key]\" name=\"{{r.key}}\" class=\"form-control\">\n                <input type=\"date\" *ngIf=\"r.type == 2\" [(ngModel)]=\"selected_patient[r.key]\" name=\"{{r.key}}\" class=\"form-control\"/>\n                <input type=\"number\" *ngIf=\"r.type == 3\" [(ngModel)]=\"selected_patient[r.key]\" name=\"{{r.key}}\" class=\"form-control\"/>\n                <select class=\"form-control\" *ngIf=\"r.type == 0\" [(ngModel)]=\"selected_patient[r.key]\" name=\"{{r.key}}\">\n                  <option *ngFor=\"let v of r.values\">{{v}}</option>\n                </select>\n              </div>\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n            </form>\n          </div>\n\n        <!-- View Treatments -->\n          <div class=\"collapse\" id=\"viewTreatments\">\n\n            <table class=\"table table-striped\">\n              <thead>\n                <tr>\n                  <th *ngFor=\"let t of this.patientService.treatment_resource\">{{t.name}}</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let t of selected_patient.treatments\">\n                  <td>{{t.treatment_date}}</td>\n                  <td>{{t.treatment_used}}</td>\n                  <td>{{t.vas}}</td>\n                  <td>{{t.qal}}</td>\n                </tr>\n                <!-- Add Treatment -->\n                <tr>\n                  <td *ngFor=\"let t of this.patientService.treatment_resource\">\n                    <input type=\"text\" *ngIf=\"t.type == 1 \" [(ngModel)]=\"new_treatment[t.key]\" name=\"{{t.key}}\" class=\"form-control focusedInput\">\n                    <input type=\"date\" *ngIf=\"t.type == 2\" [(ngModel)]=\"new_treatment[t.key]\" name=\"{{t.key}}\" class=\"form-control\"/>\n                    <input type=\"number\" *ngIf=\"t.type == 3\" [(ngModel)]=\"new_treatment[t.key]\" name=\"{{t.key}}\" class=\"form-control\"/>\n                    <select class=\"form-control\" *ngIf=\"t.type == 0\" [(ngModel)]=\"new_treatment[t.key]\" name=\"{{t.key}}\">\n                      <option *ngFor=\"let v of t.values\">{{v}}</option>\n                    </select>\n                  </td>\n                  <td><button type=\"button\" name=\"button\" class=\"btn btn-default\" (click)=\"addTreatment()\">Add</button></td>\n                </tr>\n              </tbody>\n            </table>\n\n            <form id=\"addTreatment\" (submit)=\"addTreatment()\" method=\"post\">\n              <div class=\"form-group form-inline\" *ngFor=\"let r of patientService.treatment_resource\">\n\n\n              </div>\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n            </form>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"discharge()\" *ngIf=\"selected_patient[discharged] == false\">Discharge</button>\n          </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">{{user.username}}</li>\n    <li class=\"list-group-item\">{{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-10 col-sm-push-1\">\n    <h2 class=\"page-header\">Register</h2>\n    <form (submit)=\"onRegisterSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"\">Name</label>\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Username</label>\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Email</label>\n        <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Password</label>\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n      </div>\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(393);


/***/ })

},[725]);
//# sourceMappingURL=main.bundle.map