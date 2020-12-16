(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sucursales-sucursales-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sucursales/sucursales.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sucursales/sucursales.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>sucursales</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content>\n  <div class=\"content_sucursales\">\n    <ion-select (ionChange)=\"checkValue($event)\" id=\"categoria_select\" value=\"-\">\n      <ion-select-option value=\"-\">Seleccionar</ion-select-option>\n      <ion-select-option *ngFor=\"let marker of markers\" value=\"{{marker.position.lat}} {{marker.position.lng}}\">{{marker.title}}</ion-select-option>\n    </ion-select>\n    \n    <div class=\"content_mapa\">\n      <div class=\"map\" id=\"map\">\n        <!-- <img src=\"../../assets/images/img_mapa.png\" alt=\"mapa\" class=\"mapa_img\"> -->\n      </div>\n      <!-- Codigo para mostrar html que viene desde el componente -->\n      <!-- <div class=\"direccion\"  *ngFor=\"let marker of markers\" [innerHTML]=\"marker.direccion\"></div> -->\n      <div class=\"direccion\" *ngFor=\"let dato of datos;\">\n        <div class=\"content_direc none{{index}}\" *ngFor=\"let dato of datos\" #splash>\n          <p>\n            <img src=\"../../assets/images/img_flechaarriba.png\" alt=\"direccion\" class=\"direccion_img\">\n            <span>{{dato.calle}}<br> <span class=\"ml10\">{{dato.colonia}}</span> <br>\n            <span class=\"ml10\">{{dato.ciudad}}</span> </span> \n          </p>\n          <p> \n            <img src=\"../../assets/images/img_tel.png\" alt=\"img_tel\" class=\"direccion_img\">\n            <span>{{dato.telefono1}}</span><br>\n            <img src=\"../../assets/images/img_tel.png\" alt=\"img_tel\" class=\"direccion_img\"> \n            <span>{{dato.telefono1}}</span><br> \n          </p> \n          <p> \n            <img src=\"../../assets/images/img_mail.png\" alt=\"img_tel\" class=\"direccion_img\">\n            <span>{{dato.correo}}</span><br>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<div class=\"content_menu\">\n  <ul>\n    <li>\n      <img src=\"../../assets/images/alertas_menu.png\" (click)=\"onclickNotificaciones()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/ubicacion_menu.png\" (click)=\"onclickUbicaciones()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/reacsa_menu.png\" (click)=\"onclickMenu()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/listado_menu.png\" (click)=\"onclickCategorias()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/usuario_menu.png\" (click)=\"onclickUsuario()\">\n    </li>\n  </ul>\n</div>\n");

/***/ }),

/***/ "./src/app/sucursales/sucursales-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/sucursales/sucursales-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SucursalesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SucursalesPageRoutingModule", function() { return SucursalesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sucursales_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sucursales.page */ "./src/app/sucursales/sucursales.page.ts");




const routes = [
    {
        path: '',
        component: _sucursales_page__WEBPACK_IMPORTED_MODULE_3__["SucursalesPage"]
    }
];
let SucursalesPageRoutingModule = class SucursalesPageRoutingModule {
};
SucursalesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SucursalesPageRoutingModule);



/***/ }),

/***/ "./src/app/sucursales/sucursales.module.ts":
/*!*************************************************!*\
  !*** ./src/app/sucursales/sucursales.module.ts ***!
  \*************************************************/
/*! exports provided: SucursalesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SucursalesPageModule", function() { return SucursalesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sucursales_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sucursales-routing.module */ "./src/app/sucursales/sucursales-routing.module.ts");
/* harmony import */ var _sucursales_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sucursales.page */ "./src/app/sucursales/sucursales.page.ts");







let SucursalesPageModule = class SucursalesPageModule {
};
SucursalesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sucursales_routing_module__WEBPACK_IMPORTED_MODULE_5__["SucursalesPageRoutingModule"]
        ],
        declarations: [_sucursales_page__WEBPACK_IMPORTED_MODULE_6__["SucursalesPage"]]
    })
], SucursalesPageModule);



/***/ }),

/***/ "./src/app/sucursales/sucursales.page.scss":
/*!*************************************************!*\
  !*** ./src/app/sucursales/sucursales.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content_sucursales {\n  padding: 30px;\n}\n\n.content_select {\n  padding: 15px;\n}\n\n#categoria_select {\n  border: 2px solid #015BEE;\n  width: 100%;\n  text-transform: capitalize;\n  padding: 0 30px 0 55px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  height: 60px;\n  letter-spacing: 2px;\n  color: black !important;\n  /* background: url(../../assets/images/flecha_abajo.png),url(../../assets/images/ubiblanco.png);background-position: right 20px center,left 20px center;background-repeat: no-repeat;background-size: 10px, 25px; */\n}\n\n.map {\n  border: 2px solid #015BEE;\n  margin-top: 20px;\n  padding: 15px;\n  height: 323px;\n}\n\n.direccion {\n  margin-bottom: 30px;\n}\n\n.direccion:last-child {\n  margin-bottom: 120px;\n}\n\n.direccion_img {\n  margin-right: 10px;\n  width: 20px;\n  vertical-align: middle;\n}\n\n.mapa_img {\n  width: 100%;\n  display: block;\n}\n\n.ml10 {\n  margin-left: 30px;\n}\n\n.direccion {\n  color: black !important;\n}\n\n.none, .quitSplash {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VjdXJzYWxlcy9zdWN1cnNhbGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFvQixhQUFBO0FBRXBCOztBQURBO0VBQWdCLGFBQUE7QUFLaEI7O0FBSkE7RUFBa0IseUJBQUE7RUFBMEIsV0FBQTtFQUFhLDBCQUFBO0VBQTRCLHNCQUFBO0VBQXdCLHdCQUFBO0VBQTBCLHFCQUFBO0VBQXVCLFlBQUE7RUFBYSxtQkFBQTtFQUFvQix1QkFBQTtFQUF3QixtTkFBQTtBQWlCdk47O0FBaEJBO0VBQUsseUJBQUE7RUFBMEIsZ0JBQUE7RUFBZ0IsYUFBQTtFQUFjLGFBQUE7QUF1QjdEOztBQXRCQTtFQUFXLG1CQUFBO0FBMEJYOztBQXpCQTtFQUFzQixvQkFBQTtBQTZCdEI7O0FBNUJBO0VBQWUsa0JBQUE7RUFBbUIsV0FBQTtFQUFZLHNCQUFBO0FBa0M5Qzs7QUFqQ0E7RUFBVSxXQUFBO0VBQVksY0FBQTtBQXNDdEI7O0FBckNBO0VBQU0saUJBQUE7QUF5Q047O0FBeENBO0VBQ0ksdUJBQUE7QUEyQ0o7O0FBekNBO0VBQWtCLGFBQUE7QUE2Q2xCIiwiZmlsZSI6InNyYy9hcHAvc3VjdXJzYWxlcy9zdWN1cnNhbGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50X3N1Y3Vyc2FsZXN7cGFkZGluZzozMHB4O31cbi5jb250ZW50X3NlbGVjdHtwYWRkaW5nOiAxNXB4O31cbiNjYXRlZ29yaWFfc2VsZWN0e2JvcmRlcjogMnB4IHNvbGlkICMwMTVCRUU7d2lkdGg6IDEwMCU7IHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyBwYWRkaW5nOiAwIDMwcHggMCA1NXB4OyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC1tb3otYXBwZWFyYW5jZTogbm9uZTsgaGVpZ2h0OiA2MHB4O2xldHRlci1zcGFjaW5nOiAycHg7Y29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7LyogYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvZmxlY2hhX2FiYWpvLnBuZyksdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvdWJpYmxhbmNvLnBuZyk7YmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMjBweCBjZW50ZXIsbGVmdCAyMHB4IGNlbnRlcjtiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTogMTBweCwgMjVweDsgKi99XG4ubWFwe2JvcmRlcjogMnB4IHNvbGlkICMwMTVCRUU7bWFyZ2luLXRvcDoyMHB4O3BhZGRpbmc6IDE1cHg7aGVpZ2h0OiAzMjNweDt9XG4uZGlyZWNjaW9ue21hcmdpbi1ib3R0b206IDMwcHg7fVxuLmRpcmVjY2lvbjpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206IDEyMHB4O31cbi5kaXJlY2Npb25faW1ne21hcmdpbi1yaWdodDogMTBweDt3aWR0aDogMjBweDt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO31cbi5tYXBhX2ltZ3t3aWR0aDogMTAwJTtkaXNwbGF5OiBibG9jazt9XG4ubWwxMHttYXJnaW4tbGVmdDogMzBweDt9XG4uZGlyZWNjaW9ue1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuLm5vbmUsLnF1aXRTcGxhc2h7ZGlzcGxheTpub25lO30iXX0= */");

/***/ }),

/***/ "./src/app/sucursales/sucursales.page.ts":
/*!***********************************************!*\
  !*** ./src/app/sucursales/sucursales.page.ts ***!
  \***********************************************/
/*! exports provided: SucursalesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SucursalesPage", function() { return SucursalesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let SucursalesPage = class SucursalesPage {
    constructor(router, renderer) {
        this.router = router;
        this.renderer = renderer;
        this.map = null;
        this.markers = [
            {
                position: {
                    lat: 21.8858107,
                    lng: -102.326319
                },
                title: 'Aguascalientes',
            },
            {
                position: {
                    lat: 23.1990561,
                    lng: -106.416078,
                },
                title: 'Mazatlan',
            }
        ];
        this.datos = [
            {
                id: 1,
                title: 'Aguascalientes',
                calle: 'Gutierrez najera oriente 705',
                colonia: 'Col. Montuosa',
                ciudad: 'Aguascalientes, Aguascalientes',
                telefono1: '(669) 981-5042',
                telefono2: '(669) 981-5042',
                correo: 'sucursal_mazatlan@reacsa.com.mx',
            },
            {
                id: 2,
                title: 'Mazatlan',
                calle: 'Gutierrez najera oriente 705',
                colonia: 'Col. Montuosa',
                ciudad: 'Mazatlan, Sinaloa',
                telefono1: '(669) 981-5042',
                telefono2: '(669) 981-5042',
                correo: 'sucursal_mazatlan@reacsa.com.mx'
            }
        ];
    }
    checkValue(event) {
        var str = event.target.value;
        var latlng = str.split(" ");
        console.log(latlng[0] + "long: " + latlng[1]);
        this.map.panTo({ lat: parseFloat(latlng[0]), lng: parseFloat(latlng[1]) });
        this.renderer.removeClass(this.splash.nativeElement, "none");
        this.renderer.removeClass(this.splash2.nativeElement, "none");
    }
    ngOnInit() {
        this.loadMap();
    }
    loadMap() {
        // create a new map by passing HTMLElement
        const mapEle = document.getElementById('map');
        // create LatLng object
        const myLatLng = { lat: 23.2095876, lng: -106.4159922 };
        //Obtener coordenadas
        const latLng = new google.maps.LatLng();
        // create map
        this.map = new google.maps.Map(mapEle, {
            center: myLatLng,
            zoom: 10,
            disableDefaultUI: true
        });
        let infoWindow;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                // infoWindow.setPosition(pos);
                // infoWindow.setContent("Location found.");
                // infoWindow.open(this.map);
                this.map.setCenter(pos);
            }, () => {
                //handleLocationError(true, infoWindow, this.map.getCenter());
            });
        }
        else {
            // Browser doesn't support Geolocation
            alert("Error de Geolocalizacion");
        }
        google.maps.event.addListenerOnce(this.map, 'idle', () => {
            //this.renderMarkers();
            mapEle.classList.add('show-map');
            this.renderMarkers();
        });
    }
    addMarker(marker) {
        return new google.maps.Marker({
            position: marker.position,
            map: this.map,
            title: marker.title
        });
    }
    renderMarkers() {
        this.markers.forEach(marker => {
            this.addMarker(marker);
        });
    }
    onclickNotificaciones() {
        this.router.navigate(['/notificaciones']);
    }
    onclickUbicaciones() {
        this.router.navigate(['/ubicaciones']);
    }
    onclickMenu() {
        this.router.navigate(['/principal']);
    }
    onclickCategorias() {
        this.router.navigate(['/categorias']);
    }
    onclickUsuario() {
        this.router.navigate(['/usuario']);
    }
    onclickProducto() {
        this.router.navigate(['/producto']);
    }
    onClickCarrito() {
        this.router.navigate(['/carrito']);
    }
    clickOnSucursales() {
        this.router.navigate(['/sucursales']);
    }
};
SucursalesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
SucursalesPage.propDecorators = {
    splash: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["splash",] }],
    splash2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["splash2",] }]
};
SucursalesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sucursales',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sucursales.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sucursales/sucursales.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sucursales.page.scss */ "./src/app/sucursales/sucursales.page.scss")).default]
    })
], SucursalesPage);



/***/ })

}]);
//# sourceMappingURL=sucursales-sucursales-module-es2015.js.map