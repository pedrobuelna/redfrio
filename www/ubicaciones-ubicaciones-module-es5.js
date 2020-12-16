(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ubicaciones-ubicaciones-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/ubicaciones/ubicaciones.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ubicaciones/ubicaciones.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUbicacionesUbicacionesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>ubicaciones</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div id=\"container\">\n    <ion-select id=\"categoria_select\"  (ionChange)=\"goSucursales($event)\" [value]=\"tiendaSelected\">\n      <ion-select-option *ngFor=\"let ListadoTienda of ListadoTiendas\" [value]=\"ListadoTienda\">{{ ListadoTienda }}</ion-select-option>\n    </ion-select>\n    <div class=\"content_boton\">\n      <ion-button expand=\"full\" class=\"btn_pagar\" (click)=\"clickOnSucursales()\">\n        <ion-label style=\"position: absolute;left:10px\">\n          <img src=\"../../assets/images/ubicacion_menu.png\" alt=\"ubicacion_menu\">\n        </ion-label>\n        <ion-label style=\"position: absolute;left:40px\" >Sucursales cerca de mi</ion-label>\n      </ion-button>\n  </div>\n  </div>\n</ion-content>\n<div class=\"content_menu\">\n  <ul>\n    <li>\n      <img src=\"../../assets/images/alertas_menu.png\" (click)=\"onclickNotificaciones()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/ubicacion_menu.png\" (click)=\"onclickUbicaciones()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/reacsa_menu.png\" (click)=\"onclickMenu()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/listado_menu.png\" (click)=\"onclickCategorias()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/usuario_menu.png\" (click)=\"onclickUsuario()\">\n    </li>\n  </ul>\n</div>";
      /***/
    },

    /***/
    "./src/app/ubicaciones/ubicaciones-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/ubicaciones/ubicaciones-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: UbicacionesPageRoutingModule */

    /***/
    function srcAppUbicacionesUbicacionesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UbicacionesPageRoutingModule", function () {
        return UbicacionesPageRoutingModule;
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


      var _ubicaciones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ubicaciones.page */
      "./src/app/ubicaciones/ubicaciones.page.ts");

      var routes = [{
        path: '',
        component: _ubicaciones_page__WEBPACK_IMPORTED_MODULE_3__["UbicacionesPage"]
      }];

      var UbicacionesPageRoutingModule = function UbicacionesPageRoutingModule() {
        _classCallCheck(this, UbicacionesPageRoutingModule);
      };

      UbicacionesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UbicacionesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/ubicaciones/ubicaciones.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/ubicaciones/ubicaciones.module.ts ***!
      \***************************************************/

    /*! exports provided: UbicacionesPageModule */

    /***/
    function srcAppUbicacionesUbicacionesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UbicacionesPageModule", function () {
        return UbicacionesPageModule;
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


      var _ubicaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ubicaciones-routing.module */
      "./src/app/ubicaciones/ubicaciones-routing.module.ts");
      /* harmony import */


      var _ubicaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ubicaciones.page */
      "./src/app/ubicaciones/ubicaciones.page.ts");

      var UbicacionesPageModule = function UbicacionesPageModule() {
        _classCallCheck(this, UbicacionesPageModule);
      };

      UbicacionesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ubicaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__["UbicacionesPageRoutingModule"]],
        declarations: [_ubicaciones_page__WEBPACK_IMPORTED_MODULE_6__["UbicacionesPage"]]
      })], UbicacionesPageModule);
      /***/
    },

    /***/
    "./src/app/ubicaciones/ubicaciones.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/ubicaciones/ubicaciones.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUbicacionesUbicacionesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  padding: 0 30px;\n}\n\n.content_select {\n  padding: 15px;\n}\n\n#categoria_select {\n  border: 2px solid #015BEE;\n  width: calc(100% - 4px);\n  text-transform: capitalize;\n  padding: 0 30px 0 55px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  height: 60px;\n  background: url('flecha_abajo.png'), url('ubiblanco.png');\n  background-position: right 20px center, left 20px center;\n  background-repeat: no-repeat;\n  background-size: 10px, 25px;\n  letter-spacing: 2px;\n  color: black !important;\n  text-align: left;\n}\n\n.btn_pagar {\n  margin-top: 30px;\n  height: 60px;\n  text-transform: inherit;\n  --background: var(--ion-rojo-btn);\n  margin-bottom: 100px;\n  color: white;\n}\n\n.content_boton {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWJpY2FjaW9uZXMvdWJpY2FjaW9uZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQVcsa0JBQUE7RUFBb0Isa0JBQUE7RUFBb0IsT0FBQTtFQUFTLFFBQUE7RUFBVSxRQUFBO0VBQVUsMkJBQUE7RUFBNkIsZUFBQTtBQU83Rzs7QUFOQTtFQUFnQixhQUFBO0FBVWhCOztBQVRBO0VBQWtCLHlCQUFBO0VBQTBCLHVCQUFBO0VBQXlCLDBCQUFBO0VBQTRCLHNCQUFBO0VBQXdCLHdCQUFBO0VBQTBCLHFCQUFBO0VBQXVCLFlBQUE7RUFBYSx5REFBQTtFQUE2Rix3REFBQTtFQUF3RCw0QkFBQTtFQUE2QiwyQkFBQTtFQUE0QixtQkFBQTtFQUFvQix1QkFBQTtFQUF3QixnQkFBQTtBQTBCamI7O0FBekJBO0VBQVcsZ0JBQUE7RUFBa0IsWUFBQTtFQUFhLHVCQUFBO0VBQXVCLGlDQUFBO0VBQW1DLG9CQUFBO0VBQXFCLFlBQUE7QUFrQ3pIOztBQWpDQTtFQUFlLGdCQUFBO0FBcUNmIiwiZmlsZSI6InNyYy9hcHAvdWJpY2FjaW9uZXMvdWJpY2FjaW9uZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4jY29udGFpbmVye3RleHQtYWxpZ246IGNlbnRlcjsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyByaWdodDogMDsgdG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgcGFkZGluZzogMCAzMHB4O31cbi5jb250ZW50X3NlbGVjdHtwYWRkaW5nOiAxNXB4O31cbiNjYXRlZ29yaWFfc2VsZWN0e2JvcmRlcjogMnB4IHNvbGlkICMwMTVCRUU7d2lkdGg6IGNhbGMoMTAwJSAtIDRweCk7IHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyBwYWRkaW5nOiAwIDMwcHggMCA1NXB4OyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC1tb3otYXBwZWFyYW5jZTogbm9uZTsgaGVpZ2h0OiA2MHB4O2JhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ZsZWNoYV9hYmFqby5wbmcpLHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3ViaWJsYW5jby5wbmcpO2JhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDIwcHggY2VudGVyLGxlZnQgMjBweCBjZW50ZXI7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6IDEwcHgsIDI1cHg7bGV0dGVyLXNwYWNpbmc6IDJweDtjb2xvcjogYmxhY2sgIWltcG9ydGFudDt0ZXh0LWFsaWduOiBsZWZ0O31cbi5idG5fcGFnYXJ7bWFyZ2luLXRvcDogMzBweDsgaGVpZ2h0OiA2MHB4O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7LS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tcm9qby1idG4pOyBtYXJnaW4tYm90dG9tOiAxMDBweDtjb2xvcjogd2hpdGU7fVxuLmNvbnRlbnRfYm90b257bWFyZ2luLXRvcDogMjBweDt9XG4gICJdfQ== */";
      /***/
    },

    /***/
    "./src/app/ubicaciones/ubicaciones.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/ubicaciones/ubicaciones.page.ts ***!
      \*************************************************/

    /*! exports provided: UbicacionesPage */

    /***/
    function srcAppUbicacionesUbicacionesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UbicacionesPage", function () {
        return UbicacionesPage;
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

      var UbicacionesPage = /*#__PURE__*/function () {
        function UbicacionesPage(router) {
          _classCallCheck(this, UbicacionesPage);

          this.router = router;
          this.ListadoTiendas = ["Sucursal", "Mazatlan", "Guadalajara"];
          this.tiendaSelected = ['Sucursal'];
        }

        _createClass(UbicacionesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goSucursales",
          value: function goSucursales(event) {
            console.log(event.detail.value);
            this.router.navigate(['/sucursales']);
          }
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
          key: "onclickProducto",
          value: function onclickProducto() {
            this.router.navigate(['/producto']);
          }
        }, {
          key: "onClickCarrito",
          value: function onClickCarrito() {
            this.router.navigate(['/carrito']);
          }
        }, {
          key: "clickOnSucursales",
          value: function clickOnSucursales() {
            this.router.navigate(['/sucursales']);
          }
        }]);

        return UbicacionesPage;
      }();

      UbicacionesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      UbicacionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ubicaciones',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./ubicaciones.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/ubicaciones/ubicaciones.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./ubicaciones.page.scss */
        "./src/app/ubicaciones/ubicaciones.page.scss"))["default"]]
      })], UbicacionesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=ubicaciones-ubicaciones-module-es5.js.map