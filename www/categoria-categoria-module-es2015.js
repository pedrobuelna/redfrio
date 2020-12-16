(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categoria-categoria-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categoria/categoria.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categoria/categoria.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>categoria</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"carrito\" (click)=\"onClickCarrito()\">\n    <span class=\"numero\">4</span>\n    <img src=\"../../assets/images/carrito.png\" alt=\"carrito\" >\n  </div>\n  <div id=\"content_filtro\">\n    <select name=\"categoria_select\" id=\"categoria_select\">\n      <option value=\"0\" selected>aire acondicionado</option>\n      <option value=\"1\">Equipo para comercios</option>\n      <option value=\"2\">gas refrigerante</option>\n      <option value=\"3\">herramientas</option>\n      <option value=\"4\">outlets</option>\n      <option value=\"5\">todos</option>\n    </select>\n    <br><br>\n    <div class=\"txt3\">Comprar por:</div>\n    <select name=\"categoria_select2\" id=\"categoria_select2\">\n      <option value=\"1\">Más vendido</option>\n    </select>\n  </div>\n  <ion-grid style=\"padding: 0 25px\">\n    <ion-row>\n      <ion-col class=\"productos_carrusel\" (click)=\"onclickProducto()\">\n        <div id=\"content_producto_carrusel\">\n          <img src=\"../../assets/images/nuevo.png\" alt=\"nuevo\" class=\"marks\">\n          <img src=\"../../assets/images/aireblanco.png\" alt=\"aireblanco.png\">\n          <div class=\"content_producto_textos\">\n            <p> <span class=\"titletxt1\"> YORK MINISPLIT </span><br>\n              YHFE/YHGE SERIES <br>\n              COMPRESOR ON/OFF 220V R-410A <br>\n              SOLO FRIO Y FRIO/CALOR <br><br>\n               <span class=\"pricetxt1\">$5,027.00   <span class=\"oferta\"> <s>$8,999.00</s></span></span>\n            </p>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col class=\"productos_carrusel\">\n        <div id=\"content_producto_carrusel\"  (click)=\"onclickProducto()\">\n          <img src=\"../../assets/images/outlet.png\" alt=\"outlet\" class=\"marks\">\n          <img src=\"../../assets/images/airegris.png\" alt=\"airegris.png\">\n          <div class=\"content_producto_textos\">\n            <p> <span class=\"titletxt1\"> YORK MINISPLIT </span><br>\n              YHFE/YHGE SERIES <br>\n              COMPRESOR ON/OFF 220V R-410A <br>\n              SOLO FRIO Y FRIO/CALOR <br><br>\n               <span class=\"pricetxt1\">$5,027.00  <span class=\"oferta\"><s> $8,999.00</s></span></span>\n            </p>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"productos_carrusel\"  (click)=\"onclickProducto()\">\n        <div id=\"content_producto_carrusel\">\n          <img src=\"../../assets/images/doble.png\" alt=\"doble\" class=\"marks\">\n          <img src=\"../../assets/images/aireblanco.png\" alt=\"aireblanco.png\">\n          <div class=\"content_producto_textos\">\n            <p> <span class=\"titletxt1\"> YORK MINISPLIT </span><br>\n              YHFE/YHGE SERIES <br>\n              COMPRESOR ON/OFF 220V R-410A <br>\n              SOLO FRIO Y FRIO/CALOR <br><br>\n               <span class=\"pricetxt1\">$5,027.00   <span class=\"oferta\"> <s>$8,999.00</s></span></span>\n            </p>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col class=\"productos_carrusel\">\n        <div id=\"content_producto_carrusel\">\n          <img src=\"../../assets/images/airegris.png\" alt=\"airegris.png\">\n          <div class=\"content_producto_textos\">\n            <p> <span class=\"titletxt1\"> YORK MINISPLIT </span><br>\n              YHFE/YHGE SERIES <br>\n              COMPRESOR ON/OFF 220V R-410A <br>\n              SOLO FRIO Y FRIO/CALOR <br><br>\n               <span class=\"pricetxt1\">$5,027.00  <span class=\"oferta\"><s> $8,999.00</s></span></span>\n            </p>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"last\">\n      <ion-col class=\"productos_carrusel\">\n        <div id=\"content_producto_carrusel\">\n          <img src=\"../../assets/images/aireblanco.png\" alt=\"aireblanco.png\">\n          <div class=\"content_producto_textos\">\n            <p> <span class=\"titletxt1\"> YORK MINISPLIT </span><br>\n              YHFE/YHGE SERIES <br>\n              COMPRESOR ON/OFF 220V R-410A <br>\n              SOLO FRIO Y FRIO/CALOR <br><br>\n               <span class=\"pricetxt1\">$5,027.00   <span class=\"oferta\"> <s>$8,999.00</s></span></span>\n            </p>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col class=\"productos_carrusel\"  (click)=\"onclickProducto()\">\n        <div id=\"content_producto_carrusel\">\n          <img src=\"../../assets/images/airegris.png\" alt=\"airegris.png\">\n          <div class=\"content_producto_textos\">\n            <p> <span class=\"titletxt1\"> YORK MINISPLIT </span><br>\n              YHFE/YHGE SERIES <br>\n              COMPRESOR ON/OFF 220V R-410A <br>\n              SOLO FRIO Y FRIO/CALOR <br><br>\n               <span class=\"pricetxt1\">$5,027.00  <span class=\"oferta\"><s> $8,999.00</s></span></span>\n            </p>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid> \n  <div class=\"content_menu\">\n    <ul>\n      <li>\n        <img src=\"../../assets/images/alertas_menu.png\" (click)=\"onclickNotificaciones()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/ubicacion_menu.png\" (click)=\"onclickUbicaciones()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/reacsa_menu.png\" (click)=\"onclickMenu()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/listado_menu.png\" (click)=\"onclickCategorias()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/usuario_menu.png\" (click)=\"onclickUsuario()\">\n      </li>\n    </ul>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/categoria/categoria-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/categoria/categoria-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CategoriaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaPageRoutingModule", function() { return CategoriaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _categoria_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categoria.page */ "./src/app/categoria/categoria.page.ts");




const routes = [
    {
        path: '',
        component: _categoria_page__WEBPACK_IMPORTED_MODULE_3__["CategoriaPage"]
    }
];
let CategoriaPageRoutingModule = class CategoriaPageRoutingModule {
};
CategoriaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriaPageRoutingModule);



/***/ }),

/***/ "./src/app/categoria/categoria.module.ts":
/*!***********************************************!*\
  !*** ./src/app/categoria/categoria.module.ts ***!
  \***********************************************/
/*! exports provided: CategoriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaPageModule", function() { return CategoriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _categoria_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categoria-routing.module */ "./src/app/categoria/categoria-routing.module.ts");
/* harmony import */ var _categoria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categoria.page */ "./src/app/categoria/categoria.page.ts");







let CategoriaPageModule = class CategoriaPageModule {
};
CategoriaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _categoria_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriaPageRoutingModule"]
        ],
        declarations: [_categoria_page__WEBPACK_IMPORTED_MODULE_6__["CategoriaPage"]]
    })
], CategoriaPageModule);



/***/ }),

/***/ "./src/app/categoria/categoria.page.scss":
/*!***********************************************!*\
  !*** ./src/app/categoria/categoria.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".oferta {\n  color: #DD0330;\n}\n\n.productos_carrusel {\n  margin: 0;\n}\n\n.last {\n  margin-bottom: 130px;\n}\n\n#content_filtro {\n  padding: 0 30px;\n}\n\n#categoria_select {\n  margin-top: 30px;\n}\n\n#categoria_select,\n#categoria_select2 {\n  border: 2px solid #015BEE;\n  width: 100%;\n  text-transform: uppercase;\n  padding: 0 30px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  height: 60px;\n  background: url('flecha_abajo.png');\n  background-position: right 20px center;\n  background-repeat: no-repeat;\n  background-size: 10px;\n  font-size: 12px;\n  letter-spacing: 2px;\n}\n\n#categoria_select2 {\n  margin-bottom: 30px;\n}\n\n.txt3 {\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n\n.marks {\n  position: absolute;\n  top: 15px;\n  left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmlhL2NhdGVnb3JpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxjQUFBO0FBRVI7O0FBREE7RUFBb0IsU0FBQTtBQUtwQjs7QUFKQTtFQUFNLG9CQUFBO0FBUU47O0FBUEE7RUFBZ0IsZUFBQTtBQVdoQjs7QUFWQTtFQUFrQixnQkFBQTtBQWNsQjs7QUFiQTs7RUFDbUIseUJBQUE7RUFBMEIsV0FBQTtFQUFhLHlCQUFBO0VBQTJCLGVBQUE7RUFBaUIsd0JBQUE7RUFBMEIscUJBQUE7RUFBdUIsWUFBQTtFQUFhLG1DQUFBO0VBQXNELHNDQUFBO0VBQXVDLDRCQUFBO0VBQTZCLHFCQUFBO0VBQXNCLGVBQUE7RUFBZ0IsbUJBQUE7QUE2QnBVOztBQTVCQTtFQUFtQixtQkFBQTtBQWdDbkI7O0FBL0JBO0VBQU0seUJBQUE7RUFBMEIsbUJBQUE7QUFvQ2hDOztBQW5DQTtFQUFPLGtCQUFBO0VBQW1CLFNBQUE7RUFBVSxVQUFBO0FBeUNwQyIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpYS9jYXRlZ29yaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9mZXJ0YXtjb2xvcjogI0REMDMzMDt9XG4ucHJvZHVjdG9zX2NhcnJ1c2Vse21hcmdpbjogMDt9XG4ubGFzdHttYXJnaW4tYm90dG9tOiAxMzBweDt9XG4jY29udGVudF9maWx0cm97cGFkZGluZzogMCAzMHB4O31cbiNjYXRlZ29yaWFfc2VsZWN0e21hcmdpbi10b3A6IDMwcHg7fVxuI2NhdGVnb3JpYV9zZWxlY3QsXG4jY2F0ZWdvcmlhX3NlbGVjdDJ7Ym9yZGVyOiAycHggc29saWQgIzAxNUJFRTt3aWR0aDogMTAwJTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgcGFkZGluZzogMCAzMHB4OyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC1tb3otYXBwZWFyYW5jZTogbm9uZTsgaGVpZ2h0OiA2MHB4O2JhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ZsZWNoYV9hYmFqby5wbmcpO2JhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDIwcHggY2VudGVyO2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOiAxMHB4O2ZvbnQtc2l6ZTogMTJweDtsZXR0ZXItc3BhY2luZzogMnB4O31cbiNjYXRlZ29yaWFfc2VsZWN0MnttYXJnaW4tYm90dG9tOiAzMHB4O31cbi50eHQze3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7bWFyZ2luLWJvdHRvbTogMTBweDt9XG4ubWFya3N7cG9zaXRpb246IGFic29sdXRlO3RvcDogMTVweDtsZWZ0OiAxMHB4O30iXX0= */");

/***/ }),

/***/ "./src/app/categoria/categoria.page.ts":
/*!*********************************************!*\
  !*** ./src/app/categoria/categoria.page.ts ***!
  \*********************************************/
/*! exports provided: CategoriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaPage", function() { return CategoriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let CategoriaPage = class CategoriaPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
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
};
CategoriaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CategoriaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categoria',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categoria.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categoria/categoria.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categoria.page.scss */ "./src/app/categoria/categoria.page.scss")).default]
    })
], CategoriaPage);



/***/ })

}]);
//# sourceMappingURL=categoria-categoria-module-es2015.js.map