(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notificaciones-notificaciones-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/notificaciones/notificaciones.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notificaciones/notificaciones.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppNotificacionesNotificacionesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>notificaciones</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content id=\"content_notificacion\">\n  <div id=\"content1_notificaciones\">\n      <img src=\"../../assets/images/notificacion_negro.png\" alt=\"notificacion_negro\" style=\"display: inline-block;\">\n      <div style=\"display: inline-block;margin-left:5px\">\n        <span class=\"txtTitulo\">Notificaciones</span><br>\n        <span class=\"txtFecha\">12 de Nov. 2020</span>\n      </div>\n  </div>\n  <div class=\"content2_notificaciones visto1\">\n    <div class=\"subcontent_content2_notificaciones\">\n      <img src=\"../../assets/images/imgnot1.png\" alt=\"notificacion_negro\" style=\"display: inline-block;\">\n      <div style=\"display: inline-block;margin-left:5px\">\n        <span class=\"txt1\">Bienvenido a la APP</span><br>\n        <span class=\"txt2\">20 de Nov. 2020</span>\n      </div>\n    </div>\n    <div class=\"content_texto\">\n      Bienvenido a la APP\n    </div>\n  </div>\n  <div class=\"content2_notificaciones\">\n    <div class=\"subcontent_content2_notificaciones\">\n      <img src=\"../../assets/images/imgnot2.png\" alt=\"notificacion_negro\" style=\"display: inline-block;\">\n      <div style=\"display: inline-block;margin-left:5px\">\n        <span class=\"txt1\">Oferta de fin de semana</span><br>\n        <span class=\"txt2\">Válido hasta: 12 de Nov. 2020</span>\n      </div>\n      <img src=\"../../assets/images/ojo.png\" alt=\"ojo\">\n    </div>\n    <div class=\"content_texto\">\n      6 Meses sin intereses! <br>\n      Detalles de oferta.\n    </div>\n  </div>\n  <div class=\"content2_notificaciones visto2\">\n    <div class=\"subcontent_content2_notificaciones\">\n      <img src=\"../../assets/images/imgnot1.png\" alt=\"notificacion_negro\" style=\"display: inline-block;\">\n      <div style=\"display: inline-block;margin-left:5px\">\n        <span class=\"txt1\">Mini Splits a 50%</span><br>\n        <span class=\"txt2\">Válido hasta: 05 de Dic. 2020</span>\n      </div>\n      <img src=\"../../assets/images/visto.png\" alt=\"visto\">\n    </div>\n    <div class=\"content_texto\">\n      Mini Splits a mitad de precio normal. <br>\n      Detalles de oferta.\n    </div>\n  </div>\n  <div class=\"content2_notificaciones last noleido2\">\n    <div class=\"subcontent_content2_notificaciones\">\n      <img src=\"../../assets/images/imgnot1.png\" alt=\"notificacion_negro\" style=\"display: inline-block;\">\n      <div style=\"display: inline-block;margin-left:5px\">\n        <span class=\"txt1\">Ahorra 20% en todos los <br> compresores en existencia</span>\n      </div>\n      <img src=\"../../assets/images/noleido.png\" alt=\"noleido\">\n    </div>\n    <div class=\"content_texto\">\n      Mini Splits a mitad de precio normal. <br>\n      Detalles de oferta\n    </div>\n  </div>\n  <div class=\"content_menu\">\n    <ul>\n      <li>\n        <img src=\"../../assets/images/alertas_menu.png\" (click)=\"onclickNotificaciones()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/ubicacion_menu.png\" (click)=\"onclickUbicaciones()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/reacsa_menu.png\" (click)=\"onclickMenu()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/listado_menu.png\" (click)=\"onclickCategorias()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/usuario_menu.png\" (click)=\"onclickUsuario()\">\n      </li>\n    </ul>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/notificaciones/notificaciones-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/notificaciones/notificaciones-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: NotificacionesPageRoutingModule */

    /***/
    function srcAppNotificacionesNotificacionesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificacionesPageRoutingModule", function () {
        return NotificacionesPageRoutingModule;
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


      var _notificaciones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./notificaciones.page */
      "./src/app/notificaciones/notificaciones.page.ts");

      var routes = [{
        path: '',
        component: _notificaciones_page__WEBPACK_IMPORTED_MODULE_3__["NotificacionesPage"]
      }];

      var NotificacionesPageRoutingModule = function NotificacionesPageRoutingModule() {
        _classCallCheck(this, NotificacionesPageRoutingModule);
      };

      NotificacionesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NotificacionesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/notificaciones/notificaciones.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/notificaciones/notificaciones.module.ts ***!
      \*********************************************************/

    /*! exports provided: NotificacionesPageModule */

    /***/
    function srcAppNotificacionesNotificacionesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificacionesPageModule", function () {
        return NotificacionesPageModule;
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


      var _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./notificaciones-routing.module */
      "./src/app/notificaciones/notificaciones-routing.module.ts");
      /* harmony import */


      var _notificaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./notificaciones.page */
      "./src/app/notificaciones/notificaciones.page.ts");

      var NotificacionesPageModule = function NotificacionesPageModule() {
        _classCallCheck(this, NotificacionesPageModule);
      };

      NotificacionesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificacionesPageRoutingModule"]],
        declarations: [_notificaciones_page__WEBPACK_IMPORTED_MODULE_6__["NotificacionesPage"]]
      })], NotificacionesPageModule);
      /***/
    },

    /***/
    "./src/app/notificaciones/notificaciones.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/notificaciones/notificaciones.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppNotificacionesNotificacionesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#content_notificacion .content2_notificaciones.last {\n  padding-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2FjaW9uZXMvbm90aWZpY2FjaW9uZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQW9ELHFCQUFBO0FBRXBEIiwiZmlsZSI6InNyYy9hcHAvbm90aWZpY2FjaW9uZXMvbm90aWZpY2FjaW9uZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnRfbm90aWZpY2FjaW9uIC5jb250ZW50Ml9ub3RpZmljYWNpb25lcy5sYXN0e3BhZGRpbmctYm90dG9tOiAxMDBweDt9Il19 */";
      /***/
    },

    /***/
    "./src/app/notificaciones/notificaciones.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/notificaciones/notificaciones.page.ts ***!
      \*******************************************************/

    /*! exports provided: NotificacionesPage */

    /***/
    function srcAppNotificacionesNotificacionesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificacionesPage", function () {
        return NotificacionesPage;
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

      var NotificacionesPage = /*#__PURE__*/function () {
        function NotificacionesPage(router) {
          _classCallCheck(this, NotificacionesPage);

          this.router = router;
        }

        _createClass(NotificacionesPage, [{
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
        }]);

        return NotificacionesPage;
      }();

      NotificacionesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      NotificacionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notificaciones',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./notificaciones.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/notificaciones/notificaciones.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./notificaciones.page.scss */
        "./src/app/notificaciones/notificaciones.page.scss"))["default"]]
      })], NotificacionesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=notificaciones-notificaciones-module-es5.js.map