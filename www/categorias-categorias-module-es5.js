(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorias-categorias-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCategoriasCategoriasPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>categorias</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content>\n  <div class=\"content_img_buscar\">\n    <img src=\"../../assets/images/buscar.png\" alt=\"buscar\" class=\"buscar_img\">\n  </div>\n  <div id=\"content_categorias\">\n    <div class=\"carrito\" (click)=\"onClickCarrito()\">\n      <span class=\"numero\">4</span>\n      <img src=\"../../assets/images/carrito.png\" alt=\"carrito\" >\n    </div>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <span class=\"titulo\">Aire Acondicionado</span>\n          <img src=\"../../assets/images/Aire.jpg\" alt=\"categoria1\" class=\"categorias_img\" (click)=\"onclickCategoria()\">\n        </ion-col>\n        <ion-col>\n          <span class=\"titulo\">equipo para comercios</span>\n          <img src=\"../../assets/images/Comercial.jpg\" alt=\"categoria2\" class=\"categorias_img\" (click)=\"onclickCategoria()\">\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <span class=\"titulo\">gas regrigerante</span>\n          <img src=\"../../assets/images/Freon.jpg\" alt=\"categoria1\" class=\"categorias_img\" (click)=\"onclickCategoria()\">\n        </ion-col>\n        <ion-col>\n          <span class=\"titulo\">herramientas</span>\n          <img src=\"../../assets/images/Herramientas.jpg\" alt=\"categoria2\" class=\"categorias_img\" (click)=\"onclickCategoria()\">\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"last\">\n        <ion-col>\n          <span class=\"titulo\">outlet</span>\n          <img src=\"../../assets/images/cat4.png\" alt=\"categoria1\" class=\"categorias_img\" (click)=\"onclickCategoria()\">\n        </ion-col>\n        <ion-col>\n          <span class=\"titulo\">todos</span>\n          <img src=\"../../assets/images/cat4.png\" alt=\"categoria2\" class=\"categorias_img\" (click)=\"onclickCategoria()\">\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  </div>\n  <div class=\"content_menu\">\n    <ul>\n      <li>\n        <img src=\"../../assets/images/alertas_menu.png\" (click)=\"onclickNotificaciones()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/ubicacion_menu.png\" (click)=\"onclickUbicaciones()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/reacsa_menu.png\" (click)=\"onclickMenu()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/listado_menu.png\" (click)=\"onclickCategorias()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/usuario_menu.png\" (click)=\"onclickUsuario()\">\n      </li>\n    </ul>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/categorias/categorias-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/categorias/categorias-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: CategoriasPageRoutingModule */

    /***/
    function srcAppCategoriasCategoriasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriasPageRoutingModule", function () {
        return CategoriasPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _categorias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./categorias.page */
      "./src/app/categorias/categorias.page.ts");

      var routes = [{
        path: '',
        component: _categorias_page__WEBPACK_IMPORTED_MODULE_3__["CategoriasPage"]
      }];

      var CategoriasPageRoutingModule = function CategoriasPageRoutingModule() {
        _classCallCheck(this, CategoriasPageRoutingModule);
      };

      CategoriasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CategoriasPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/categorias/categorias.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/categorias/categorias.module.ts ***!
      \*************************************************/

    /*! exports provided: CategoriasPageModule */

    /***/
    function srcAppCategoriasCategoriasModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriasPageModule", function () {
        return CategoriasPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./categorias-routing.module */
      "./src/app/categorias/categorias-routing.module.ts");
      /* harmony import */


      var _categorias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./categorias.page */
      "./src/app/categorias/categorias.page.ts");

      var CategoriasPageModule = function CategoriasPageModule() {
        _classCallCheck(this, CategoriasPageModule);
      };

      CategoriasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriasPageRoutingModule"]],
        declarations: [_categorias_page__WEBPACK_IMPORTED_MODULE_6__["CategoriasPage"]]
      })], CategoriasPageModule);
      /***/
    },

    /***/
    "./src/app/categorias/categorias.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/categorias/categorias.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCategoriasCategoriasPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content_img_buscar {\n  width: 100%;\n  position: relative;\n  background-color: white;\n  margin-bottom: 35px;\n}\n\n.buscar_img {\n  position: relative;\n  left: calc(100% - 60px);\n  margin-top: 50px;\n}\n\n#content_categorias .categorias_img {\n  width: 100%;\n  height: 188px;\n}\n\n#content_categorias .titulo {\n  background-color: rgba(0, 0, 0, 0.3);\n  font-size: 15px;\n  color: white;\n  text-transform: uppercase;\n  width: calc(100% - 10px);\n  z-index: 2;\n  position: absolute;\n  padding-bottom: 10px;\n  display: block;\n  padding-top: 15px;\n  padding-left: 10px;\n  min-height: 56px;\n}\n\n.numero {\n  margin-top: 20px;\n  display: block;\n}\n\n.last {\n  margin-bottom: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmlhcy9jYXRlZ29yaWFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFvQixXQUFBO0VBQVksa0JBQUE7RUFBbUIsdUJBQUE7RUFBd0IsbUJBQUE7QUFLM0U7O0FBSkE7RUFBWSxrQkFBQTtFQUFtQix1QkFBQTtFQUF3QixnQkFBQTtBQVV2RDs7QUFSQTtFQUFvQyxXQUFBO0VBQVksYUFBQTtBQWFoRDs7QUFaQTtFQUE0QixvQ0FBQTtFQUFxQyxlQUFBO0VBQWlCLFlBQUE7RUFBYyx5QkFBQTtFQUEyQix3QkFBQTtFQUEwQixVQUFBO0VBQVksa0JBQUE7RUFBb0Isb0JBQUE7RUFBc0IsY0FBQTtFQUFnQixpQkFBQTtFQUFtQixrQkFBQTtFQUFtQixnQkFBQTtBQTJCalE7O0FBMUJBO0VBQVEsZ0JBQUE7RUFBaUIsY0FBQTtBQStCekI7O0FBOUJBO0VBQU0sb0JBQUE7QUFrQ04iLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWFzL2NhdGVnb3JpYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnRfaW1nX2J1c2Nhcnt3aWR0aDogMTAwJTtwb3NpdGlvbjogcmVsYXRpdmU7YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7bWFyZ2luLWJvdHRvbTogMzVweDt9XG4uYnVzY2FyX2ltZ3twb3NpdGlvbjogcmVsYXRpdmU7bGVmdDogY2FsYygxMDAlIC0gNjBweCk7bWFyZ2luLXRvcDogNTBweDt9XG5cbiNjb250ZW50X2NhdGVnb3JpYXMgLmNhdGVnb3JpYXNfaW1ne3dpZHRoOiAxMDAlO2hlaWdodDogMTg4cHg7fVxuI2NvbnRlbnRfY2F0ZWdvcmlhcyAudGl0dWxve2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtmb250LXNpemU6IDE1cHg7IGNvbG9yOiB3aGl0ZTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpOyB6LWluZGV4OiAyOyBwb3NpdGlvbjogYWJzb2x1dGU7IHBhZGRpbmctYm90dG9tOiAxMHB4OyBkaXNwbGF5OiBibG9jazsgcGFkZGluZy10b3A6IDE1cHg7IHBhZGRpbmctbGVmdDogMTBweDttaW4taGVpZ2h0OiA1NnB4O31cbi5udW1lcm97bWFyZ2luLXRvcDogMjBweDtkaXNwbGF5OiBibG9jazt9XG4ubGFzdHttYXJnaW4tYm90dG9tOiAxNTBweDt9Il19 */";
      /***/
    },

    /***/
    "./src/app/categorias/categorias.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/categorias/categorias.page.ts ***!
      \***********************************************/

    /*! exports provided: CategoriasPage */

    /***/
    function srcAppCategoriasCategoriasPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriasPage", function () {
        return CategoriasPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var CategoriasPage = /*#__PURE__*/function () {
        function CategoriasPage(router) {
          _classCallCheck(this, CategoriasPage);

          this.router = router;
        }

        _createClass(CategoriasPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onclickNotificaciones",
          value: function onclickNotificaciones() {
            this.router.navigate(['/notificaciones']);
          }
        }, {
          key: "onclickUbicaciones",
          value: function onclickUbicaciones() {
            this.router.navigate(['/ubicaciones']);
          }
        }, {
          key: "onclickMenu",
          value: function onclickMenu() {
            this.router.navigate(['/principal']);
          }
        }, {
          key: "onclickCategorias",
          value: function onclickCategorias() {
            this.router.navigate(['/categorias']);
          }
        }, {
          key: "onclickUsuario",
          value: function onclickUsuario() {
            this.router.navigate(['/usuario']);
          }
        }, {
          key: "onclickCategoria",
          value: function onclickCategoria() {
            this.router.navigate(['/categoria']);
          }
        }, {
          key: "onClickCarrito",
          value: function onClickCarrito() {
            this.router.navigate(['/carrito']);
          }
        }]);

        return CategoriasPage;
      }();

      CategoriasPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      CategoriasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categorias',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./categorias.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./categorias.page.scss */
        "./src/app/categorias/categorias.page.scss"))["default"]]
      })], CategoriasPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=categorias-categorias-module-es5.js.map