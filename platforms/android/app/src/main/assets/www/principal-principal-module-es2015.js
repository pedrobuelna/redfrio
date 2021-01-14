(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["principal-principal-module"],{

/***/ "+N/B":
/*!***********************************************!*\
  !*** ./src/app/principal/principal.module.ts ***!
  \***********************************************/
/*! exports provided: PrincipalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalPageModule", function() { return PrincipalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _principal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./principal-routing.module */ "VBiI");
/* harmony import */ var _principal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./principal.page */ "LoNT");







let PrincipalPageModule = class PrincipalPageModule {
};
PrincipalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _principal_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrincipalPageRoutingModule"]
        ],
        declarations: [_principal_page__WEBPACK_IMPORTED_MODULE_6__["PrincipalPage"]]
    })
], PrincipalPageModule);



/***/ }),

/***/ "FWhm":
/*!***********************************************!*\
  !*** ./src/app/principal/principal.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#splash {\n  height: 100vh;\n  background-color: #0F0E9F;\n  width: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  transition: all 1s;\n  color: white;\n}\n\n#content_letras {\n  font-size: 35px;\n  margin-top: 113px;\n  margin-left: 56px;\n}\n\n#splash.quitSplash {\n  top: 100%;\n  opacity: 0;\n  transition-duration: 0.6s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ByaW5jaXBhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxhQUFBO0VBQWMseUJBQUE7RUFBMEIsV0FBQTtFQUFZLGVBQUE7RUFBZ0IsT0FBQTtFQUFRLE1BQUE7RUFBTyxXQUFBO0VBQVksa0JBQUE7RUFBbUIsWUFBQTtBQVUxSDs7QUFUQTtFQUFnQixlQUFBO0VBQWdCLGlCQUFBO0VBQWtCLGlCQUFBO0FBZWxEOztBQWRBO0VBQW1CLFNBQUE7RUFBVSxVQUFBO0VBQVcseUJBQUE7QUFvQnhDIiwiZmlsZSI6InByaW5jaXBhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3BsYXNoe2hlaWdodDogMTAwdmg7YmFja2dyb3VuZC1jb2xvcjogIzBGMEU5Rjt3aWR0aDogMTAwJTtwb3NpdGlvbjogZml4ZWQ7bGVmdDogMDt0b3A6IDA7ei1pbmRleDogMTA7dHJhbnNpdGlvbjogYWxsIDFzO2NvbG9yOiB3aGl0ZTt9XG4jY29udGVudF9sZXRyYXN7Zm9udC1zaXplOiAzNXB4O21hcmdpbi10b3A6IDExM3B4O21hcmdpbi1sZWZ0OiA1NnB4O31cbiNzcGxhc2gucXVpdFNwbGFzaHt0b3A6IDEwMCU7b3BhY2l0eTogMDt0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO30iXX0= */");

/***/ }),

/***/ "LoNT":
/*!*********************************************!*\
  !*** ./src/app/principal/principal.page.ts ***!
  \*********************************************/
/*! exports provided: PrincipalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalPage", function() { return PrincipalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_principal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./principal.page.html */ "orr4");
/* harmony import */ var _principal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./principal.page.scss */ "FWhm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/task.service */ "i6c7");






let PrincipalPage = class PrincipalPage {
    constructor(router, renderer, taskService) {
        this.router = router;
        this.renderer = renderer;
        this.taskService = taskService;
        this.items = ["../../assets/images/tarjetas-reacsa@3x2.jpeg",
            "../../assets/images/tarjetas-reacsa@3x.jpeg",
            "../../assets/images/../../assets/images/tarjetas-reacsa@3x2.jpeg",
            "../../assets/images/tarjetas-reacsa@3x.jpeg"
        ];
        this.sliderOptions = {
            initialSlide: 0,
            speed: 350,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true
            }
        };
        this.items2 = ["../../assets/images/producto1@3x.png",
            "../../assets/images/producto1@3x.png"
        ];
        this.sliderOptions2 = {
            initialSlide: 0,
            speed: 350,
            slidesPerView: 2,
            loop: true,
            centeredSlides: true,
            spaceBetween: 20
        };
    }
    addMyClass() {
        //this.myButton.nativeElement.classList.add("my-class"); //BAD PRACTICE
        this.renderer.addClass(this.splash.nativeElement, "quitSplash");
    }
    ngOnInit() {
        setTimeout(() => {
            this.addMyClass();
        }, 1500);
        this.taskService.getAllProductos()
            .subscribe(productos2 => {
            this.productos2 = productos2;
            console.log(productos2);
        });
    }
    retraso() {
        console.log("Retraso");
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
        this.router.navigate(['/register']);
    }
    onClickProducto(id) {
        this.router.navigate(['/producto'], {
            queryParams: {
                id: id
            }
        });
    }
    onClickCarrito() {
        this.router.navigate(['/carrito']);
    }
};
PrincipalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"] }
];
PrincipalPage.propDecorators = {
    splash: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["splash",] }]
};
PrincipalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-principal',
        template: _raw_loader_principal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_principal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PrincipalPage);



/***/ }),

/***/ "VBiI":
/*!*******************************************************!*\
  !*** ./src/app/principal/principal-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PrincipalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalPageRoutingModule", function() { return PrincipalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _principal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./principal.page */ "LoNT");




const routes = [
    {
        path: '',
        component: _principal_page__WEBPACK_IMPORTED_MODULE_3__["PrincipalPage"]
    }
];
let PrincipalPageRoutingModule = class PrincipalPageRoutingModule {
};
PrincipalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrincipalPageRoutingModule);



/***/ }),

/***/ "orr4":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/principal/principal.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content>\n  <div id=\"splash\" #splash>\n    <div id=\"content_letras\">\n      Bienvenido! <br>\n      Compre con <br>\n      confianza.\n    </div>\n  </div>\n  <div class=\"carrito\" (click)=\"onClickCarrito()\">\n    <span class=\"numero\">4</span>\n    <img src=\"../../assets/images/carrito.png\" alt=\"carrito\" >\n  </div>\n  <ion-slides pager=\"true\" [options]=\"sliderOptions\">\n    <ion-slide *ngFor=\"let item of items\">\n      <img src=\"{{item}}\" alt=\"{{item}}\" style=\"width:100%;\">\n    </ion-slide>\n  </ion-slides>\n  <ion-slides [options]=\"sliderOptions2\" class=\"productos_carrusel\">\n    <ion-slide  *ngFor=\"let producto of productos2;let i = index\">\n      <div id=\"content_producto_carrusel\" (click)=\"onClickProducto(producto.uuid_producto)\">\n        <img src=\"../../assets/images/producto1@3x.png\" alt=\"producto1@3x.png\">\n        <div class=\"content_producto_textos\">\n          <p> <span class=\"titletxt1\"> {{producto.marca}} MINISPLIT </span><br>\n            YHFE/YHGE SERIES <br>\n            COMPRESOR ON/OFF 220V R-410A <br>\n            SOLO FRIO Y FRIO/CALOR <br><br>\n             <span class=\"pricetxt1\">$5,027.00 <s>  $8,999.00</s></span>\n          </p>\n        </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  <div class=\"content_menu\">\n    <ul>\n      <li>\n        <img src=\"../../assets/images/alertas_menu.png\" (click)=\"onclickNotificaciones()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/ubicacion_menu.png\" (click)=\"onclickUbicaciones()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/reacsa_menu.png\" (click)=\"onclickMenu()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/listado_menu.png\" (click)=\"onclickCategorias()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/usuario_menu.png\" (click)=\"onclickUsuario()\">\n      </li>\n    </ul>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=principal-principal-module-es2015.js.map