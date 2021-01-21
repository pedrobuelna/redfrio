(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorias-categorias-module"],{

/***/ "cHTx":
/*!*************************************************!*\
  !*** ./src/app/categorias/categorias.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPageModule", function() { return CategoriasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categorias-routing.module */ "r4jW");
/* harmony import */ var _categorias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categorias.page */ "zjH6");







let CategoriasPageModule = class CategoriasPageModule {
};
CategoriasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriasPageRoutingModule"]
        ],
        declarations: [_categorias_page__WEBPACK_IMPORTED_MODULE_6__["CategoriasPage"]]
    })
], CategoriasPageModule);



/***/ }),

/***/ "l6Wj":
/*!*************************************************!*\
  !*** ./src/app/categorias/categorias.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content_img_buscar {\n  width: 100%;\n  position: relative;\n  background-color: white;\n  margin-bottom: 35px;\n}\n\n.buscar_img {\n  position: relative;\n  left: calc(100% - 60px);\n  margin-top: 50px;\n}\n\n#content_categorias .categorias_img {\n  width: 100%;\n  height: 188px;\n}\n\n#content_categorias .titulo {\n  background-color: rgba(0, 0, 0, 0.3);\n  font-size: 15px;\n  color: white;\n  text-transform: uppercase;\n  width: calc(100% - 10px);\n  z-index: 2;\n  position: absolute;\n  padding-bottom: 10px;\n  display: block;\n  padding-top: 15px;\n  padding-left: 10px;\n  min-height: 56px;\n}\n\n.numero {\n  margin-top: 20px;\n  display: block;\n}\n\n.last {\n  margin-bottom: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhdGVnb3JpYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQW9CLFdBQUE7RUFBWSxrQkFBQTtFQUFtQix1QkFBQTtFQUF3QixtQkFBQTtBQUszRTs7QUFKQTtFQUFZLGtCQUFBO0VBQW1CLHVCQUFBO0VBQXdCLGdCQUFBO0FBVXZEOztBQVJBO0VBQW9DLFdBQUE7RUFBWSxhQUFBO0FBYWhEOztBQVpBO0VBQTRCLG9DQUFBO0VBQXFDLGVBQUE7RUFBaUIsWUFBQTtFQUFjLHlCQUFBO0VBQTJCLHdCQUFBO0VBQTBCLFVBQUE7RUFBWSxrQkFBQTtFQUFvQixvQkFBQTtFQUFzQixjQUFBO0VBQWdCLGlCQUFBO0VBQW1CLGtCQUFBO0VBQW1CLGdCQUFBO0FBMkJqUTs7QUExQkE7RUFBUSxnQkFBQTtFQUFpQixjQUFBO0FBK0J6Qjs7QUE5QkE7RUFBTSxvQkFBQTtBQWtDTiIsImZpbGUiOiJjYXRlZ29yaWFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50X2ltZ19idXNjYXJ7d2lkdGg6IDEwMCU7cG9zaXRpb246IHJlbGF0aXZlO2JhY2tncm91bmQtY29sb3I6IHdoaXRlO21hcmdpbi1ib3R0b206IDM1cHg7fVxuLmJ1c2Nhcl9pbWd7cG9zaXRpb246IHJlbGF0aXZlO2xlZnQ6IGNhbGMoMTAwJSAtIDYwcHgpO21hcmdpbi10b3A6IDUwcHg7fVxuXG4jY29udGVudF9jYXRlZ29yaWFzIC5jYXRlZ29yaWFzX2ltZ3t3aWR0aDogMTAwJTtoZWlnaHQ6IDE4OHB4O31cbiNjb250ZW50X2NhdGVnb3JpYXMgLnRpdHVsb3tiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7Zm9udC1zaXplOiAxNXB4OyBjb2xvcjogd2hpdGU7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTsgei1pbmRleDogMjsgcG9zaXRpb246IGFic29sdXRlOyBwYWRkaW5nLWJvdHRvbTogMTBweDsgZGlzcGxheTogYmxvY2s7IHBhZGRpbmctdG9wOiAxNXB4OyBwYWRkaW5nLWxlZnQ6IDEwcHg7bWluLWhlaWdodDogNTZweDt9XG4ubnVtZXJve21hcmdpbi10b3A6IDIwcHg7ZGlzcGxheTogYmxvY2s7fVxuLmxhc3R7bWFyZ2luLWJvdHRvbTogMTUwcHg7fSJdfQ== */");

/***/ }),

/***/ "r4jW":
/*!*********************************************************!*\
  !*** ./src/app/categorias/categorias-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CategoriasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPageRoutingModule", function() { return CategoriasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _categorias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categorias.page */ "zjH6");




const routes = [
    {
        path: '',
        component: _categorias_page__WEBPACK_IMPORTED_MODULE_3__["CategoriasPage"]
    }
];
let CategoriasPageRoutingModule = class CategoriasPageRoutingModule {
};
CategoriasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriasPageRoutingModule);



/***/ }),

/***/ "umP3":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>categorias</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content>\n  <div class=\"content_img_buscar\">\n    <img src=\"../../assets/images/buscar.png\" alt=\"buscar\" class=\"buscar_img\">\n  </div>\n  <div id=\"content_categorias\">\n    <div class=\"carrito\" (click)=\"onClickCarrito()\">\n      <span class=\"numero\">4</span>\n      <img src=\"../../assets/images/carrito.png\" alt=\"carrito\" >\n    </div>\n    <ion-row>\n      <ion-col *ngFor=\"let familia of familias;let i = index;let last = last;\" size=\"6\">\n        <span class=\"titulo\">{{familia.nombre_familia}}</span>\n        <img src=\"../../assets/images/Aire.jpg\" alt=\"categoria1\" class=\"categorias_img\" (click)=\"onclickCategoria(familia.id_familia)\">\n      </ion-col>\n      <ion-col size=\"6\" style=\"margin-bottom: 120px;\">\n        <span class=\"titulo\">TODOS</span>\n        <img src=\"../../assets/images/Aire.jpg\" alt=\"categoria1\" class=\"categorias_img\" (click)=\"onclickCategoria('0')\">\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"content_menu\">\n    <ul>\n      <li>\n        <img src=\"../../assets/images/alertas_menu.png\" (click)=\"onclickNotificaciones()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/ubicacion_menu.png\" (click)=\"onclickUbicaciones()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/reacsa_menu.png\" (click)=\"onclickMenu()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/listado_menu.png\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/usuario_menu.png\" (click)=\"onclickUsuario()\">\n      </li>\n    </ul>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "zjH6":
/*!***********************************************!*\
  !*** ./src/app/categorias/categorias.page.ts ***!
  \***********************************************/
/*! exports provided: CategoriasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPage", function() { return CategoriasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categorias_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categorias.page.html */ "umP3");
/* harmony import */ var _categorias_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categorias.page.scss */ "l6Wj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/task.service */ "i6c7");






let CategoriasPage = class CategoriasPage {
    constructor(router, taskService) {
        this.router = router;
        this.taskService = taskService;
    }
    ngOnInit() {
        this.taskService.getFamilias()
            .subscribe(familias => {
            this.familias = familias;
            console.log(familias);
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
    onclickAllCategoria() {
        this.router.navigate(['/categoria']);
    }
    onclickUsuario() {
        this.router.navigate(['/usuario']);
    }
    onclickCategoria(id) {
        this.router.navigate(['/categoria'], {
            queryParams: {
                id: id
            }
        });
    }
    onClickCarrito() {
        this.router.navigate(['/carrito']);
    }
};
CategoriasPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"] }
];
CategoriasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categorias',
        template: _raw_loader_categorias_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categorias_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoriasPage);



/***/ })

}]);
//# sourceMappingURL=categorias-categorias-module-es2015.js.map