(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["producto-producto-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/producto/producto.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/producto/producto.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div id=\"content_producto\" class=\"padding\">\n    <div class=\"content_carrusel\">\n      <ion-slides pager=\"true\" #slides [options]=\"sliderOptions\" class=\"content_img_gde\">\n        <ion-slide *ngFor=\"let item of items\">\n          <img src=\"{{item}}\" alt=\"{{item}}\" alt=\"aire\" class=\"img_gde\">\n        </ion-slide>\n      </ion-slides>\n      <div class=\"content_img_ch\">\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <img src=\"../../assets/images/aireblanco.png\" alt=\"aire\" class=\"img_ch\"  (click)=\"move1(slides)\" >\n            </ion-col>\n            <ion-col>\n              <img src=\"../../assets/images/aireblanco.png\" alt=\"aire\" class=\"img_ch\" (click)=\"move2(slides)\">\n            </ion-col>\n            <ion-col>\n              <img src=\"../../assets/images/aireblanco.png\" alt=\"aire\" class=\"img_ch\" (click)=\"move3(slides)\">\n            </ion-col>\n            <ion-col>\n              <img src=\"../../assets/images/aireblanco.png\" alt=\"aire\" class=\"img_ch\" (click)=\"move4(slides)\">\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n    <div id=\"configurador_content\">\n      <div class=\"titulo2\">Configurador</div>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\" value=\"radio1\">\n              <ion-item class=\"ion-no-padding\" color=\"white\" lines=\"none\">\n                <ion-label class=\"titulo_radio\">1.0 Ton</ion-label>\n                <ion-radio class=\"radio\" color=\"medium\" slot=\"start\" value=\"radio1\"></ion-radio>\n              </ion-item>\n              <ion-item class=\"ion-no-padding\" color=\"white\" lines=\"none\">\n                <ion-label class=\"titulo_radio\">1.5 Ton</ion-label>\n                <ion-radio class=\"radio\" color=\"medium\" slot=\"start\" value=\"radio2\"></ion-radio>\n              </ion-item>\n              <ion-item class=\"ion-no-padding\" color=\"white\" lines=\"none\">\n                <ion-label class=\"titulo_radio\">2.0 Ton</ion-label>\n                <ion-radio class=\"radio\" color=\"medium\" slot=\"start\" value=\"radio3\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-col>\n          <ion-col>\n            <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group2\" value=\"rad1\">\n              <ion-item class=\"ion-no-padding\" color=\"white\" lines=\"none\">\n                <ion-label class=\"titulo_radio\">solo frio</ion-label>\n                <ion-radio class=\"radio\" color=\"medium\" slot=\"start\" value=\"rad1\"></ion-radio>\n              </ion-item>\n              <ion-item class=\"ion-no-padding\" color=\"white\" lines=\"none\">\n                <ion-label class=\"titulo_radio\">frio calor</ion-label>\n                <ion-radio class=\"radio\" color=\"medium\" slot=\"start\" value=\"rad2\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div id=\"descripcion_content\">\n      <div class=\"titulo1\">york mini split</div>\n      <p class=\"parrafo1\">\n        <span>yhfe/yhg series</span> <br>\n        <span>compresor on/off 220v</span> <br>\n        <span>r-410a</span> <br>\n        <span>solo frio y frio/calor</span>\n      </p>\n      <div class=\"parrafo2\">\n        <span class=\"ion-text-capitalize\">Marca: </span><span class=\"ion-text-uppercase\">york</span> <br>\n        <span class=\"ion-text-capitalize\">Disponibilidad: En Stock </span>\n      </div> \n      <p class=\"parrafo3\">\n      Características:Operación SilenciosaPantalla LCDFunciónde reinicioIncluye control remotoRefrigerante ecológicoVentilador con tres velocidades -alta, media y baja.Incluye Kit de instalación (Cu-Cu) y cableado de 4 mts de longitud… \n      </p>\n      <div class=\"precios\">\n         <span class=\"precio1\"> $5,027.00</span>&nbsp;<span class=\"precio2\"><s>$8,999.00</s></span>\n      </div>\n      <section class=\"full-width\">\n        <ion-button expand=\"full\" class=\"btn_agregar\" (click)=\"onClickCarrito()\">Agregar al carrito</ion-button>\n      </section>\n    </div>\n  </div>\n</ion-content>\n<div class=\"content_menu\">\n  <ul>\n    <li>\n      <img src=\"../../assets/images/alertas_menu.png\" (click)=\"onclickNotificaciones()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/ubicacion_menu.png\" (click)=\"onclickUbicaciones()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/reacsa_menu.png\" (click)=\"onclickMenu()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/listado_menu.png\" (click)=\"onclickCategorias()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/usuario_menu.png\" (click)=\"onclickUsuario()\">\n    </li>\n  </ul>\n</div>");

/***/ }),

/***/ "./src/app/producto/producto-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/producto/producto-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoPageRoutingModule", function() { return ProductoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _producto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./producto.page */ "./src/app/producto/producto.page.ts");




const routes = [
    {
        path: '',
        component: _producto_page__WEBPACK_IMPORTED_MODULE_3__["ProductoPage"]
    }
];
let ProductoPageRoutingModule = class ProductoPageRoutingModule {
};
ProductoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductoPageRoutingModule);



/***/ }),

/***/ "./src/app/producto/producto.module.ts":
/*!*********************************************!*\
  !*** ./src/app/producto/producto.module.ts ***!
  \*********************************************/
/*! exports provided: ProductoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoPageModule", function() { return ProductoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _producto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./producto-routing.module */ "./src/app/producto/producto-routing.module.ts");
/* harmony import */ var _producto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./producto.page */ "./src/app/producto/producto.page.ts");







let ProductoPageModule = class ProductoPageModule {
};
ProductoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _producto_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductoPageRoutingModule"]
        ],
        declarations: [_producto_page__WEBPACK_IMPORTED_MODULE_6__["ProductoPage"]]
    })
], ProductoPageModule);



/***/ }),

/***/ "./src/app/producto/producto.page.scss":
/*!*********************************************!*\
  !*** ./src/app/producto/producto.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#content_producto {\n  background-color: #ffffff;\n}\n\n#configurador_content {\n  box-shadow: 0px 3px 6px #00000029;\n  padding: 0 20px;\n  margin-bottom: 30px;\n}\n\n.optionB {\n  height: 30px;\n}\n\n.titulo2 {\n  text-align: center;\n  border-bottom: 1px solid #707070;\n  color: #707070;\n  padding-bottom: 5px;\n  margin-top: 30px;\n  font-size: 14px;\n}\n\n.titulo_radio {\n  border: none;\n  color: #707070;\n  text-transform: uppercase;\n  font-size: 12px;\n  margin: 0;\n}\n\n.radio {\n  margin: 0 10px 0 0;\n}\n\nion-item {\n  --min-height: 32px;\n}\n\n#descripcion_content {\n  color: #707070;\n}\n\n.content_carrusel {\n  background-color: #ffffff;\n}\n\n.content_img_gde {\n  padding: 0 3px 7px 3px;\n}\n\n.padding {\n  padding: 30px;\n}\n\n.img_gde {\n  width: 100%;\n}\n\nion-grid ion-card {\n  width: 100%;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\nion-grid ion-card ion-card-content {\n  padding: 0 !important;\n}\n\n.btn_agregar {\n  margin-top: 30px;\n  height: 60px;\n  font-weight: bold;\n  font-size: 16px;\n  --background: var(--ion-rojo-btn);\n  margin-bottom: 100px;\n}\n\n.titulo1 {\n  font-size: 20px;\n  text-transform: uppercase;\n}\n\n.parrafo1 {\n  font-size: 16px;\n  text-transform: uppercase;\n}\n\n.precios {\n  font-size: 24px;\n}\n\n.precio2 {\n  color: #DD0330;\n}\n\n.img_gde {\n  height: 220px;\n}\n\n.img_gde, .img_ch {\n  box-shadow: 0px 3px 6px #00000029;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdG8vcHJvZHVjdG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWtCLHlCQUFBO0FBRWxCOztBQURBO0VBQXNCLGlDQUFBO0VBQWtDLGVBQUE7RUFBZ0IsbUJBQUE7QUFPeEU7O0FBTkE7RUFBUyxZQUFBO0FBVVQ7O0FBVEE7RUFBUyxrQkFBQTtFQUFtQixnQ0FBQTtFQUFnQyxjQUFBO0VBQWMsbUJBQUE7RUFBbUIsZ0JBQUE7RUFBZ0IsZUFBQTtBQWtCN0c7O0FBakJBO0VBQWMsWUFBQTtFQUFjLGNBQUE7RUFBZSx5QkFBQTtFQUF5QixlQUFBO0VBQWUsU0FBQTtBQXlCbkY7O0FBeEJBO0VBQU8sa0JBQUE7QUE0QlA7O0FBM0JBO0VBQ0ksa0JBQUE7QUE4Qko7O0FBNUJBO0VBQ0ksY0FBQTtBQStCSjs7QUE3QkE7RUFBa0IseUJBQUE7QUFpQ2xCOztBQWhDQTtFQUFpQixzQkFBQTtBQW9DakI7O0FBbkNBO0VBQVMsYUFBQTtBQXVDVDs7QUF0Q0E7RUFBUyxXQUFBO0FBMENUOztBQXhDSTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBMkNSOztBQTFDUTtFQUNJLHFCQUFBO0FBNENaOztBQXhDQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7QUEyQ0o7O0FBekNBO0VBQVMsZUFBQTtFQUFnQix5QkFBQTtBQThDekI7O0FBN0NBO0VBQVUsZUFBQTtFQUFnQix5QkFBQTtBQWtEMUI7O0FBakRBO0VBQVMsZUFBQTtBQXFEVDs7QUFwREE7RUFBUyxjQUFBO0FBd0RUOztBQXZEQTtFQUFTLGFBQUE7QUEyRFQ7O0FBMURBO0VBQWlCLGlDQUFBO0FBOERqQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RvL3Byb2R1Y3RvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50X3Byb2R1Y3Rve2JhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7fVxuI2NvbmZpZ3VyYWRvcl9jb250ZW50e2JveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtwYWRkaW5nOiAwIDIwcHg7bWFyZ2luLWJvdHRvbTogMzBweDt9XG4ub3B0aW9uQntoZWlnaHQ6IDMwcHg7fVxuLnRpdHVsbzJ7dGV4dC1hbGlnbjogY2VudGVyO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICM3MDcwNzA7Y29sb3I6IzcwNzA3MDtwYWRkaW5nLWJvdHRvbTo1cHg7bWFyZ2luLXRvcDozMHB4O2ZvbnQtc2l6ZTogMTRweDt9XG4udGl0dWxvX3JhZGlve2JvcmRlcjogbm9uZTsgY29sb3I6ICM3MDcwNzA7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2ZvbnQtc2l6ZToxMnB4O21hcmdpbjogMDt9XG4ucmFkaW97bWFyZ2luOjAgMTBweCAwIDB9XG5pb24taXRlbSB7XG4gICAgLS1taW4taGVpZ2h0OiAzMnB4O1xufVxuI2Rlc2NyaXBjaW9uX2NvbnRlbnR7XG4gICAgY29sb3I6ICM3MDcwNzA7XG59XG4uY29udGVudF9jYXJydXNlbHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO31cbi5jb250ZW50X2ltZ19nZGV7cGFkZGluZzogMCAzcHggN3B4IDNweDt9XG4ucGFkZGluZ3twYWRkaW5nOiAzMHB4O31cbi5pbWdfZ2Rle3dpZHRoOiAxMDAlO31cbmlvbi1ncmlke1xuICAgIGlvbi1jYXJke1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDowICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDowICFpbXBvcnRhbnQ7XG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IFxuICAgICAgICB9XG4gICAgfVxufVxuLmJ0bl9hZ3JlZ2Fye1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1yb2pvLWJ0bik7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG4udGl0dWxvMXtmb250LXNpemU6IDIwcHg7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTt9XG4ucGFycmFmbzF7Zm9udC1zaXplOiAxNnB4O3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7fVxuLnByZWNpb3N7Zm9udC1zaXplOiAyNHB4O31cbi5wcmVjaW8ye2NvbG9yOiAjREQwMzMwO31cbi5pbWdfZ2Rle2hlaWdodDogMjIwcHg7fVxuLmltZ19nZGUsLmltZ19jaHtib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7fVxuICJdfQ== */");

/***/ }),

/***/ "./src/app/producto/producto.page.ts":
/*!*******************************************!*\
  !*** ./src/app/producto/producto.page.ts ***!
  \*******************************************/
/*! exports provided: ProductoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoPage", function() { return ProductoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let ProductoPage = class ProductoPage {
    constructor(router) {
        this.router = router;
        this.items = ["../../assets/images/aireblanco.png",
            "../../assets/images/aireblanco.png",
            "../../assets/images/aireblanco.png",
            "../../assets/images/aireblanco.png"
        ];
        this.sliderOptions = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true,
            pagination: {
                clickable: true,
            }
        };
    }
    move1(slides) {
        console.log(slides);
        slides.slideTo(0);
    }
    move2(slides) {
        console.log(slides);
        slides.slideTo(1);
    }
    move3(slides) {
        console.log(slides);
        slides.slideTo(2);
    }
    move4(slides) {
        console.log(slides);
        slides.slideTo(3);
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
    onClickCarrito() {
        this.router.navigate(['/carrito']);
    }
};
ProductoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProductoPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['slides',] }]
};
ProductoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-producto',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./producto.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/producto/producto.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./producto.page.scss */ "./src/app/producto/producto.page.scss")).default]
    })
], ProductoPage);



/***/ })

}]);
//# sourceMappingURL=producto-producto-module-es2015.js.map