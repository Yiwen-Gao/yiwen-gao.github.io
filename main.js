(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  text-align: center;\n  vertical-align: middle;\n}\n\n.about-me {\n  width: 500px; /*40%;*/\n  /*margin: auto;*/\n  display: inline-block;\n}\n\n#profile-picture {\n  background-image: url('chinese-gradient-landscape.png');\n}\n\nmat-card-title, mat-card-content {\n  text-align: left;\n}\n\n.fa, .material-icons {\n  font-size: 30px;\n}\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n<button mat-icon-button (click)=\"changeCard(-1)\">\n  <i class=\"material-icons\">keyboard_arrow_left</i>\n</button>\n\n<mat-card class=\"about-me\">\n  <mat-card-header>\n    <div mat-card-avatar id=\"profile-picture\"></div>\n    <mat-card-title>Yiwen Gao</mat-card-title>\n    <mat-card-subtitle>\n      <!--<i class=\"material-icons\">location_on</i>-->\n      {{currentCard.location}}\n    </mat-card-subtitle>\n  </mat-card-header>\n\n  <img mat-card-image src=\"{{currentCard.picture}}\">\n\n  <mat-card-content>\n    {{currentCard.description}}\n  </mat-card-content>\n\n  <mat-card-actions>\n    <a href=\"https://github.com/Yiwen-Gao\">\n      <button mat-icon-button color=\"accent\" matTooltip=\"GitHub\">\n        <i class=\"fa fa-github\"></i>\n      </button>\n    </a>\n    <a href=\"https://www.linkedin.com/in/yiwen-gao-89a7a8131/\">\n      <button mat-icon-button color=\"accent\" matTooltip=\"LinkedIn\">\n        <i class=\"fa fa-linkedin\"></i>\n      </button>\n    </a>\n    <a href=\"https://www.gmail.com\">\n      <button mat-icon-button color=\"accent\" matTooltip=\"Email\">\n        <i class=\"material-icons\">mail</i>\n      </button>\n    </a>\n  </mat-card-actions>\n</mat-card>\n\n<button mat-icon-button (click)=\"changeCard(1)\">\n  <i class=\"material-icons\">keyboard_arrow_right</i>\n</button>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.cards = {
            '1': {
                location: 'Pentacrest, Iowa City',
                picture: '../../assets/old_capitol.jpg',
                description: 'One of the last days at home'
            },
            '2': {
                location: 'Navy Pier, Chicago',
                picture: '../../assets/navy_pier.jpg',
                description: 'Enjoying the warm weather and the waves'
            },
            '3': {
                location: 'Upper West Side, New York',
                picture: '../../assets/fair.jpg',
                description: 'A lazy afternoon 🍭'
            }
        };
        this.currentId = '1';
        this.currentCard = this.cards[this.currentId];
    }
    AboutComponent.prototype.changeCard = function (step) {
        var newId = parseInt(this.currentId, 10) + step;
        if (newId >= 1 && newId <= Object.keys(this.cards).length) {
            newId += '';
            this.currentId = newId;
            this.currentCard = this.cards[newId];
        }
    };
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { DetailsComponent } from './details/details.component';
var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'projects',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"container\">\n  <app-navbar></app-navbar>\n\n  <div id=\"main-content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Yiwen Gao';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _my_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-material */ "./src/app/my-material.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _my_material__WEBPACK_IMPORTED_MODULE_2__["MyMaterial"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            entryComponents: [_details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#project-details-title {\n  display: inline-block;\n}\n\nbutton.details {\n  float: right;\n}\n\n.app-visual {\n  /*height: 70%;*/\n  width: 100%;\n  overflow: hidden;\n}\n\n.material-icons {\n  margin-top: 1%;\n}\n\n#buttons {\n  text-align: right;\n  display: block;\n}\n\n\n"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-title>\n  <h3 id=\"project-details-title\">{{data.title}}</h3> | <span>{{data.organization}}</span>\n  <button class=\"details\" mat-icon-button color=\"accent\" (click)=\"closeDialog()\">\n    <i class=\"material-icons\">clear</i>\n  </button>\n</div>\n\n<img *ngIf=\"data.picture\" class=\"app-visual\" src=\"{{data.picture}}\" />\n<video *ngIf=\"data.video\" class=\"app-visual\" controls autoplay preload=\"auto\">\n  <source src=\"{{data.video}}\" type=\"video/mp4\">\n</video>\n\n<div mat-dialog-content>\n  <p>\n  <i class=\"material-icons\">event</i>\n  {{data.date}}\n  <br>\n  <i class=\"material-icons\">build</i>\n  {{data.technologies}}\n  <p>\n  {{data.description}}\n</div>\n\n<div *ngIf=\"data.url\" id=\"buttons\" mat-dialog-actions>\n  <a href=\"{{data.url}}\">\n    <button mat-mini-fab color=\"accent\" matTooltip=\"View Source Code\">\n      <i class=\"material-icons\">visibility</i>\n    </button>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(dialogRef, data /*: DialogData*/) {
        this.dialogRef = dialogRef;
        this.data = data; /*: DialogData*/
    }
    DetailsComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        })
        // export interface DialogData {
        //   description: string;
        // }
        ,
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#intro {\n  //display: flex;\n  width: 500px; /*40%;*/\n  margin: auto;\n}\n\n#cover-photo {\n  position: absolute;\n  height: 300px;\n  width: 100%;\n  border-bottom: deeppink;\n  -webkit-filter: grayscale(100%);\n}\n\n#me { /*TODO remove hardcoded stuff*/\n  position: relative;\n  border: deeppink;\n\n  width: 250px;\n  height: 250px;\n\n  background-image: url('yiwen_and_puppy.jpg');\n  background-size: cover;\n  background-position: center top;\n\n  border-radius: 50%;\n  margin: 25% auto 0; /*TODO change this hack*/\n}\n\n#description {\n  text-transform: uppercase;\n  text-align: center;\n}\n\n#welcome-message {\n  display: inline-block;\n  vertical-align: text-bottom;\n  padding: 5% 0 0 5%;\n  font: 500 150%/100% 'Roboto';\n}\n\n#name {\n  display: inline-block;\n  margin: 0;\n  padding: 0 5% 0;\n\n  font: 100 200%/160% 'Covered By Your Grace', cursive;\n}\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card id=\"intro\">\n  <img id=\"cover-photo\" mat-card-image src=\"{{coverPhoto}}\">\n  <div id=\"me\"></div>\n\n  <mat-card-content id=\"description\">\n    <div id=\"welcome-message\">\n      Nice to\n      meet you,\n    </div>\n    <div id=\"name\">\n      <h1>I'm Yiwen</h1>\n    </div>\n\n    <mat-chip-list>\n      <mat-chip *ngFor=\"let chip of myRoles\" selected [color]=\"chip.color\">\n        {{chip.role}}\n      </mat-chip>\n    </mat-chip-list>\n  </mat-card-content>\n</mat-card>\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.coverPhoto = '../../assets/cafe_lala.jpg';
        this.myRoles = [
            { role: 'Developer', color: 'accent' },
            { role: 'Reader', color: 'none' },
            { role: 'Activist', color: 'none' },
            { role: 'Designer', color: 'accent' },
            { role: 'Traveler', color: 'none' },
            { role: 'Yoga Student', color: 'none' },
            { role: 'Engineer', color: 'accent' },
            { role: 'Christian', color: 'none' },
            { role: 'Runner', color: 'none' }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/my-material.ts":
/*!********************************!*\
  !*** ./src/app/my-material.ts ***!
  \********************************/
/*! exports provided: MyMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMaterial", function() { return MyMaterial; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyMaterial = /** @class */ (function () {
    function MyMaterial() {
    }
    MyMaterial = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"]],
            declarations: []
        })
    ], MyMaterial);
    return MyMaterial;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  width: 550px; /*40%;*/\n  margin: auto;\n  padding: 0;\n  text-align: center;\n}\n\nul {\n  background: white;\n  list-style-type: none;\n  margin-bottom: 10px;\n  padding: 0 5%;\n}\n\nli {\n  display: inline-block;\n  padding: 1%;\n}\n\nli a {\n  display: inline-block;\n  position: relative;\n  color: pink;\n}\n\nli .activated {\n  color: deeppink;\n}\n\n.material-icons {\n  font-size: 30px;\n}\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul>\n    <li>\n      <a routerLink=\"\" [class.activated]=\"currentUrl == '/'\">\n        <button mat-button>\n          <i class=\"material-icons\">home</i>\n          Home\n        </button>\n      </a>\n    </li>\n    <li>\n      <a routerLink=\"projects\" [class.activated]=\"currentUrl == '/projects'\">\n        <button mat-button>\n          <i class=\"material-icons\">folder_open</i>\n          Projects\n        </button>\n      </a>\n    </li>\n    <li>\n      <a routerLink=\"about\" [class.activated]=\"currentUrl == '/about'\">\n        <button mat-button>\n          <i class=\"material-icons\">face</i>\n          About\n        </button>\n      </a>\n    </li>\n  </ul>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        var _this = this;
        this.router = router;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.currentUrl = event.url;
            }
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n  transition: -webkit-transform .1s;\n  transition: transform .1s;\n  transition: transform .1s, -webkit-transform .1s;\n}\n\nmat-grid-tile:hover {\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n}\n\nimg {\n  /*height: 100%;*/\n  /*width: 100%;*/\n}\n\n.project-intro {\n  margin: 1% !important;\n}\n\nbutton.learn-more {\n  margin-right: 1px;\n  float: right !important;\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"8\" rowHeight=\"1:1\" gutterSize=\"10px\"> <!--maybe use \"fit\" for more dynamic rowHeight-->\n  <mat-grid-tile *ngFor=\"let project of projects\" [colspan]=\"project.cols\" [rowspan]=\"project.rows\">\n\n    <img src=\"{{project.thumbnail}}\" />\n\n    <mat-grid-tile-footer>\n      <span class=\"project-intro\">{{project.title}}</span>\n      <button class=\"learn-more\" mat-icon-button (click)=\"openDetailsDialog(project)\" matTooltip=\"Learn More\">\n        <i class=\"material-icons\">description</i>\n      </button>\n    </mat-grid-tile-footer>\n  </mat-grid-tile>\n</mat-grid-list>\n\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../details/details.component */ "./src/app/details/details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(dialog) {
        this.dialog = dialog;
        this.sampleBackground = '../../assets/chinese-gradient-landscape.png';
        this.projects = [{
                title: 'Seeka for Roku',
                organization: 'SparqTV Productions',
                thumbnail: '../../assets/seekatv_logo.jpg',
                picture: null,
                video: '../../assets/roku_app_recording_medium.mov',
                date: 'Summer 2018',
                technologies: 'BrightScript, Node.js, Amazon Web Services, MySQL',
                description: 'This is a native version of Seeka.TV\'s streaming application for the Roku platform. It ' +
                    'features organize by genre, resume watching, search, and other functionality.',
                url: null,
                cols: '3',
                rows: '3'
            },
            {
                title: 'MatchMaker',
                organization: 'Personal Project',
                thumbnail: 'https://user-images.githubusercontent.com/32348009/38431843-976c9a96-3993-11e8-945a-2e70483fce26.png',
                picture: 'https://user-images.githubusercontent.com/32348009/38431843-976c9a96-3993-11e8-945a-2e70483fce26.png',
                video: null,
                date: 'March 2018',
                technologies: 'Swift, iOS Development',
                description: 'This memory game lets players select the theme and pair together different emojis. ' +
                    'It counts score based on the number of cards the player turns over and incorporates auto layout ' +
                    'to allow different screen orientations.',
                url: 'https://github.com/Yiwen-Gao/Matchmaker',
                cols: '2',
                rows: '2'
            },
            {
                title: 'Marketing Categories',
                organization: 'SparqTV LLC',
                thumbnail: '../../assets/marketing_categories.png',
                picture: '../../assets/marketing_categories.png',
                video: null,
                date: 'Summer 2018',
                technologies: 'AngularJS, Node.js, Amazon Web Services',
                description: 'Marketing Categories is an internal tool to organize TV shows for SparqTV. It ' +
                    'provides an easy-to-use interface for selecting and categorizing different franchises.',
                url: null,
                cols: '3',
                rows: '4'
            },
            {
                title: 'Spell Checker',
                organization: 'Class Project',
                thumbnail: '../../assets/spell_checker.png',
                picture: null,
                video: '../../assets/spell_checker_recording.mov',
                date: 'April 2018',
                technologies: 'Python',
                description: 'This app detects misspelled words and provides suggestions based on ' +
                    'common word permutations and past corrections.',
                url: 'https://github.com/Yiwen-Gao/SpellCheck',
                cols: '2',
                rows: '2'
            },
            {
                title: 'Ball Blocker',
                organization: 'Personal Project',
                thumbnail: 'https://user-images.githubusercontent.com/32348009/34455449-9522066e-ed4d-11e7-962c-f7ad1655699a.png',
                picture: null,
                video: '../../assets/hockey_game_recording.mov',
                date: 'January 2018',
                technologies: 'Java',
                description: 'In this game, the player acts as a goalie and uses the up and down arrow keys to block a hockey puck. ' +
                    'The scoreboard in the upper left hand corner tracks the number of successful blocks the player has made.',
                url: 'https://github.com/Yiwen-Gao/HockeyGame',
                cols: '3',
                rows: '2'
            },
            {
                title: 'EcoMaps',
                organization: 'Hackathon',
                thumbnail: 'https://user-images.githubusercontent.com/32348009/34455396-633dd3ea-ed4c-11e7-8546-aef2f120fc2d.png',
                picture: 'https://user-images.githubusercontent.com/32348009/34455396-633dd3ea-ed4c-11e7-8546-aef2f120fc2d.png',
                video: null,
                date: 'December 2017',
                technologies: 'JavaScript, Firebase',
                description: 'Created at YHack 2017, EcoMaps incorporates a carbon calculator API into ' +
                    'Google Maps to provide users with the most environmentally friendly route to their destination.',
                url: 'https://github.com/Yiwen-Gao/EcoMaps',
                cols: '5',
                rows: '3'
            },
            {
                title: 'Scenic Sky',
                organization: 'Class Project',
                thumbnail: 'https://user-images.githubusercontent.com/32348009/38285800-f286d9ec-378f-11e8-8cbc-4a6a18051afb.png',
                picture: 'https://user-images.githubusercontent.com/32348009/38285800-f286d9ec-378f-11e8-8cbc-4a6a18051afb.png',
                video: null,
                date: 'December 2017',
                technologies: 'Java',
                description: 'This animation uses the Strategy Design Pattern to simulate a collection of flying birds ' +
                    'and hot air balloons. The speed of the balloons can be adjusted by the slider on the left hand side. ',
                url: 'https://github.com/Yiwen-Gao/ScenicSky',
                cols: '3',
                rows: '2'
            }];
    }
    ProjectsComponent.prototype.openDetailsDialog = function (currentProjectDetails) {
        this.dialog.open(_details_details_component__WEBPACK_IMPORTED_MODULE_2__["DetailsComponent"], {
            height: '80%',
            width: '50%',
            autoFocus: false,
            data: currentProjectDetails
        });
    };
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yiwengao/Documents/LearnAngular/FirstProject/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map