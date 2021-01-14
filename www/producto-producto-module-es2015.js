(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["producto-producto-module"],{

/***/ "WiN2":
/*!*********************************************!*\
  !*** ./src/app/producto/producto.module.ts ***!
  \*********************************************/
/*! exports provided: ProductoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoPageModule", function() { return ProductoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _producto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./producto-routing.module */ "f26X");
/* harmony import */ var _producto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./producto.page */ "l3rG");







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

/***/ "f26X":
/*!*****************************************************!*\
  !*** ./src/app/producto/producto-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoPageRoutingModule", function() { return ProductoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _producto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./producto.page */ "l3rG");




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

/***/ "grnP":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/producto/producto.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div id=\"content_producto\" class=\"padding\" *ngFor=\"let producto of producto2;let i = index\" >\n    <div class=\"content_carrusel\">\n      <ion-slides pager=\"true\" #slides [options]=\"sliderOptions\" class=\"content_img_gde\">\n        <ion-slide *ngFor=\"let item of items\">\n          <img src=\"{{item}}\" alt=\"{{item}}\" alt=\"aire\" class=\"img_gde\">\n        </ion-slide>\n      </ion-slides>\n      <div class=\"content_img_ch\" >\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <img src=\"../../assets/images/aireblanco.png\" alt=\"aire\" class=\"img_ch\"  (click)=\"move1(slides)\" >\n            </ion-col>\n            <ion-col>\n              <img src=\"../../assets/images/aireblanco.png\" alt=\"aire\" class=\"img_ch\" (click)=\"move2(slides)\">\n            </ion-col>\n            <ion-col>\n              <img src=\"../../assets/images/aireblanco.png\" alt=\"aire\" class=\"img_ch\" (click)=\"move3(slides)\">\n            </ion-col>\n            <ion-col>\n              <img src=\"../../assets/images/aireblanco.png\" alt=\"aire\" class=\"img_ch\" (click)=\"move4(slides)\">\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n    <div id=\"configurador_content\">\n      <div class=\"titulo2\">Configurador</div>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\" value=\"radio1\">\n              <ion-item class=\"ion-no-padding\" color=\"white\" lines=\"none\">\n                <ion-label class=\"titulo_radio\">1.0 Ton</ion-label>\n                <ion-radio class=\"radio\" color=\"medium\" slot=\"start\" value=\"radio1\"></ion-radio>\n              </ion-item>\n              <ion-item class=\"ion-no-padding\" color=\"white\" lines=\"none\">\n                <ion-label class=\"titulo_radio\">1.5 Ton</ion-label>\n                <ion-radio class=\"radio\" color=\"medium\" slot=\"start\" value=\"radio2\"></ion-radio>\n              </ion-item>\n              <ion-item class=\"ion-no-padding\" color=\"white\" lines=\"none\">\n                <ion-label class=\"titulo_radio\">2.0 Ton</ion-label>\n                <ion-radio class=\"radio\" color=\"medium\" slot=\"start\" value=\"radio3\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-col>\n          <ion-col>\n            <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group2\" value=\"rad1\">\n              <ion-item class=\"ion-no-padding\" color=\"white\" lines=\"none\">\n                <ion-label class=\"titulo_radio\">solo frio</ion-label>\n                <ion-radio class=\"radio\" color=\"medium\" slot=\"start\" value=\"rad1\"></ion-radio>\n              </ion-item>\n              <ion-item class=\"ion-no-padding\" color=\"white\" lines=\"none\">\n                <ion-label class=\"titulo_radio\">frio calor</ion-label>\n                <ion-radio class=\"radio\" color=\"medium\" slot=\"start\" value=\"rad2\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div id=\"descripcion_content\">\n      <div class=\"titulo1\">{{producto.marca}} mini split</div>\n      <p class=\"parrafo1\">\n        <span>yhfe/yhg series</span> <br>\n        <span>compresor on/off 220v</span> <br>\n        <span>r-410a</span> <br>\n        <span>solo frio y frio/calor</span>\n      </p>\n      <div class=\"parrafo2\">\n        <span class=\"ion-text-capitalize\">Marca: </span><span class=\"ion-text-uppercase\">{{producto.marca}}</span> <br>\n        <span class=\"ion-text-capitalize\">Disponibilidad: <span *ngIf=\"producto.status==1\">En stock</span><span *ngIf=\"producto.status==0\">No hay disponibilidad</span> </span>\n      </div> \n      <p class=\"parrafo3\">\n      Características:Operación SilenciosaPantalla LCDFunciónde reinicioIncluye control remotoRefrigerante ecológicoVentilador con tres velocidades -alta, media y baja.Incluye Kit de instalación (Cu-Cu) y cableado de 4 mts de longitud… \n      </p>\n      <div class=\"precios\">\n         <span class=\"precio1\"> $5,027.00</span>&nbsp;<span class=\"precio2\"><s>$8,999.00</s></span>\n      </div>\n      <section class=\"full-width\">\n        <ion-button expand=\"full\" class=\"btn_agregar\" (click)=\"onClickCarrito()\">Agregar al carrito</ion-button>\n      </section>\n    </div>\n  </div>\n</ion-content>\n<div class=\"content_menu\">\n  <ul>\n    <li>\n      <img src=\"../../assets/images/alertas_menu.png\" (click)=\"onclickNotificaciones()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/ubicacion_menu.png\" (click)=\"onclickUbicaciones()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/reacsa_menu.png\" (click)=\"onclickMenu()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/listado_menu.png\" (click)=\"onclickCategorias()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/usuario_menu.png\" (click)=\"onclickUsuario()\">\n    </li>\n  </ul>\n</div>");

/***/ }),

/***/ "l3rG":
/*!*******************************************!*\
  !*** ./src/app/producto/producto.page.ts ***!
  \*******************************************/
/*! exports provided: ProductoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoPage", function() { return ProductoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_producto_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./producto.page.html */ "grnP");
/* harmony import */ var _producto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./producto.page.scss */ "pDph");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/task.service */ "i6c7");






let ProductoPage = class ProductoPage {
    constructor(router, taskService, route) {
        this.router = router;
        this.taskService = taskService;
        this.route = route;
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
        let x = "";
        this.route.queryParams.subscribe(queryParams => x = queryParams.id);
        //    console.log("x:" + x)
        this.taskService.getProducto(x)
            .subscribe(producto2 => {
            this.producto2 = producto2;
            console.log(producto2);
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
    onClickCarrito() {
        this.router.navigate(['/carrito']);
    }
};
ProductoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ProductoPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slides',] }]
};
ProductoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-producto',
        template: _raw_loader_producto_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_producto_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductoPage);



/***/ }),

/***/ "pDph":
/*!*********************************************!*\
  !*** ./src/app/producto/producto.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#content_producto {\n  background-color: #ffffff;\n}\n\n#configurador_content {\n  box-shadow: 0px 3px 6px #00000029;\n  padding: 0 20px;\n  margin-bottom: 30px;\n}\n\n.optionB {\n  height: 30px;\n}\n\n.titulo2 {\n  text-align: center;\n  border-bottom: 1px solid #707070;\n  color: #707070;\n  padding-bottom: 5px;\n  margin-top: 30px;\n  font-size: 14px;\n}\n\n.titulo_radio {\n  border: none;\n  color: #707070;\n  text-transform: uppercase;\n  font-size: 12px;\n  margin: 0;\n}\n\n.radio {\n  margin: 0 10px 0 0;\n}\n\nion-item {\n  --min-height: 32px;\n}\n\n#descripcion_content {\n  color: #707070;\n}\n\n.content_carrusel {\n  background-color: #ffffff;\n}\n\n.content_img_gde {\n  padding: 0 3px 7px 3px;\n}\n\n.padding {\n  padding: 30px;\n}\n\n.img_gde {\n  width: 100%;\n}\n\nion-grid ion-card {\n  width: 100%;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\nion-grid ion-card ion-card-content {\n  padding: 0 !important;\n}\n\n.btn_agregar {\n  margin-top: 30px;\n  height: 60px;\n  font-weight: bold;\n  font-size: 16px;\n  --background: var(--ion-rojo-btn);\n  margin-bottom: 100px;\n}\n\n.titulo1 {\n  font-size: 20px;\n  text-transform: uppercase;\n}\n\n.parrafo1 {\n  font-size: 16px;\n  text-transform: uppercase;\n}\n\n.precios {\n  font-size: 24px;\n}\n\n.precio2 {\n  color: #DD0330;\n}\n\n.img_gde {\n  height: 220px;\n}\n\n.img_gde, .img_ch {\n  box-shadow: 0px 3px 6px #00000029;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2R1Y3RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFrQix5QkFBQTtBQUVsQjs7QUFEQTtFQUFzQixpQ0FBQTtFQUFrQyxlQUFBO0VBQWdCLG1CQUFBO0FBT3hFOztBQU5BO0VBQVMsWUFBQTtBQVVUOztBQVRBO0VBQVMsa0JBQUE7RUFBbUIsZ0NBQUE7RUFBZ0MsY0FBQTtFQUFjLG1CQUFBO0VBQW1CLGdCQUFBO0VBQWdCLGVBQUE7QUFrQjdHOztBQWpCQTtFQUFjLFlBQUE7RUFBYyxjQUFBO0VBQWUseUJBQUE7RUFBeUIsZUFBQTtFQUFlLFNBQUE7QUF5Qm5GOztBQXhCQTtFQUFPLGtCQUFBO0FBNEJQOztBQTNCQTtFQUNJLGtCQUFBO0FBOEJKOztBQTVCQTtFQUNJLGNBQUE7QUErQko7O0FBN0JBO0VBQWtCLHlCQUFBO0FBaUNsQjs7QUFoQ0E7RUFBaUIsc0JBQUE7QUFvQ2pCOztBQW5DQTtFQUFTLGFBQUE7QUF1Q1Q7O0FBdENBO0VBQVMsV0FBQTtBQTBDVDs7QUF4Q0k7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQTJDUjs7QUExQ1E7RUFDSSxxQkFBQTtBQTRDWjs7QUF4Q0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLG9CQUFBO0FBMkNKOztBQXpDQTtFQUFTLGVBQUE7RUFBZ0IseUJBQUE7QUE4Q3pCOztBQTdDQTtFQUFVLGVBQUE7RUFBZ0IseUJBQUE7QUFrRDFCOztBQWpEQTtFQUFTLGVBQUE7QUFxRFQ7O0FBcERBO0VBQVMsY0FBQTtBQXdEVDs7QUF2REE7RUFBUyxhQUFBO0FBMkRUOztBQTFEQTtFQUFpQixpQ0FBQTtBQThEakIiLCJmaWxlIjoicHJvZHVjdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnRfcHJvZHVjdG97YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjt9XG4jY29uZmlndXJhZG9yX2NvbnRlbnR7Ym94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O3BhZGRpbmc6IDAgMjBweDttYXJnaW4tYm90dG9tOiAzMHB4O31cbi5vcHRpb25Ce2hlaWdodDogMzBweDt9XG4udGl0dWxvMnt0ZXh0LWFsaWduOiBjZW50ZXI7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzcwNzA3MDtjb2xvcjojNzA3MDcwO3BhZGRpbmctYm90dG9tOjVweDttYXJnaW4tdG9wOjMwcHg7Zm9udC1zaXplOiAxNHB4O31cbi50aXR1bG9fcmFkaW97Ym9yZGVyOiBub25lOyBjb2xvcjogIzcwNzA3MDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Zm9udC1zaXplOjEycHg7bWFyZ2luOiAwO31cbi5yYWRpb3ttYXJnaW46MCAxMHB4IDAgMH1cbmlvbi1pdGVtIHtcbiAgICAtLW1pbi1oZWlnaHQ6IDMycHg7XG59XG4jZGVzY3JpcGNpb25fY29udGVudHtcbiAgICBjb2xvcjogIzcwNzA3MDtcbn1cbi5jb250ZW50X2NhcnJ1c2Vse2JhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7fVxuLmNvbnRlbnRfaW1nX2dkZXtwYWRkaW5nOiAwIDNweCA3cHggM3B4O31cbi5wYWRkaW5ne3BhZGRpbmc6IDMwcHg7fVxuLmltZ19nZGV7d2lkdGg6IDEwMCU7fVxuaW9uLWdyaWR7XG4gICAgaW9uLWNhcmR7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjAgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjAgIWltcG9ydGFudDtcbiAgICAgICAgaW9uLWNhcmQtY29udGVudHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgXG4gICAgICAgIH1cbiAgICB9XG59XG4uYnRuX2FncmVnYXJ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLXJvam8tYnRuKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cbi50aXR1bG8xe2ZvbnQtc2l6ZTogMjBweDt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO31cbi5wYXJyYWZvMXtmb250LXNpemU6IDE2cHg7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTt9XG4ucHJlY2lvc3tmb250LXNpemU6IDI0cHg7fVxuLnByZWNpbzJ7Y29sb3I6ICNERDAzMzA7fVxuLmltZ19nZGV7aGVpZ2h0OiAyMjBweDt9XG4uaW1nX2dkZSwuaW1nX2Noe2JveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTt9XG4gIl19 */");

/***/ })

}]);
//# sourceMappingURL=producto-producto-module-es2015.js.map