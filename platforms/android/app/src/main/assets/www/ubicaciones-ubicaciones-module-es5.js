(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ubicaciones-ubicaciones-module"], {
    /***/
    "Ab9E":
    /*!***************************************************!*\
      !*** ./src/app/ubicaciones/ubicaciones.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function Ab9E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  padding: 0 30px;\n}\n\n.content_select {\n  padding: 15px;\n}\n\n#categoria_select {\n  border: 2px solid #015BEE;\n  width: calc(100% - 4px);\n  text-transform: capitalize;\n  padding: 0 30px 0 55px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  height: 60px;\n  letter-spacing: 2px;\n  color: black !important;\n  text-align: left;\n  /*background: url(../../assets/images/flecha_abajo.png),url(../../assets/images/ubiblanco.png);background-position: right 20px center,left 20px center;background-repeat: no-repeat;background-size: 10px, 25px;*/\n}\n\n.btn_pagar {\n  margin-top: 30px;\n  height: 60px;\n  text-transform: inherit;\n  --background: var(--ion-rojo-btn);\n  margin-bottom: 100px;\n  color: white;\n}\n\n.content_boton {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ViaWNhY2lvbmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFXLGtCQUFBO0VBQW9CLGtCQUFBO0VBQW9CLE9BQUE7RUFBUyxRQUFBO0VBQVUsUUFBQTtFQUFVLDJCQUFBO0VBQTZCLGVBQUE7QUFPN0c7O0FBTkE7RUFBZ0IsYUFBQTtBQVVoQjs7QUFUQTtFQUFrQix5QkFBQTtFQUEwQix1QkFBQTtFQUF5QiwwQkFBQTtFQUE0QixzQkFBQTtFQUF3Qix3QkFBQTtFQUEwQixxQkFBQTtFQUF1QixZQUFBO0VBQWEsbUJBQUE7RUFBb0IsdUJBQUE7RUFBd0IsZ0JBQUE7RUFBaUIsaU5BQUE7QUF1QnBQOztBQXRCQTtFQUFXLGdCQUFBO0VBQWtCLFlBQUE7RUFBYSx1QkFBQTtFQUF1QixpQ0FBQTtFQUFtQyxvQkFBQTtFQUFxQixZQUFBO0FBK0J6SDs7QUE5QkE7RUFBZSxnQkFBQTtBQWtDZiIsImZpbGUiOiJ1YmljYWNpb25lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNjb250YWluZXJ7dGV4dC1hbGlnbjogY2VudGVyOyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHJpZ2h0OiAwOyB0b3A6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyBwYWRkaW5nOiAwIDMwcHg7fVxuLmNvbnRlbnRfc2VsZWN0e3BhZGRpbmc6IDE1cHg7fVxuI2NhdGVnb3JpYV9zZWxlY3R7Ym9yZGVyOiAycHggc29saWQgIzAxNUJFRTt3aWR0aDogY2FsYygxMDAlIC0gNHB4KTsgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IHBhZGRpbmc6IDAgMzBweCAwIDU1cHg7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgLW1vei1hcHBlYXJhbmNlOiBub25lOyBoZWlnaHQ6IDYwcHg7bGV0dGVyLXNwYWNpbmc6IDJweDtjb2xvcjogYmxhY2sgIWltcG9ydGFudDt0ZXh0LWFsaWduOiBsZWZ0Oy8qYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvZmxlY2hhX2FiYWpvLnBuZyksdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvdWJpYmxhbmNvLnBuZyk7YmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMjBweCBjZW50ZXIsbGVmdCAyMHB4IGNlbnRlcjtiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTogMTBweCwgMjVweDsqL31cbi5idG5fcGFnYXJ7bWFyZ2luLXRvcDogMzBweDsgaGVpZ2h0OiA2MHB4O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7LS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tcm9qby1idG4pOyBtYXJnaW4tYm90dG9tOiAxMDBweDtjb2xvcjogd2hpdGU7fVxuLmNvbnRlbnRfYm90b257bWFyZ2luLXRvcDogMjBweDt9XG4gICJdfQ== */";
      /***/
    },

    /***/
    "Bbn8":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ubicaciones/ubicaciones.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function Bbn8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>ubicaciones</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div id=\"container\">\n    \n     <ion-select id=\"categoria_select\" (ionChange)=\"goSucursales($event)\" value=\"{{tiendaSelected}}\">\n      <ion-select-option value=\"0\">Sucursales</ion-select-option>      \n      <ion-select-option *ngFor=\"let sucursal of sucursales;let i = index\" value=\"{{sucursal.id_sucursal}}\">{{sucursal.nombre}}</ion-select-option>\n    </ion-select>\n    <!-- <ion-select id=\"categoria_select\"  (ionChange)=\"goSucursales($event)\" [value]=\"tiendaSelected\">\n      <ion-select-option [value]=\"0\">Sucursales</ion-select-option>      \n      <ion-select-option *ngFor=\"let sucursal of sucursales;let i = index\" [value]=\"sucursal.id_sucursal\">{{sucursal.nombre}}</ion-select-option>\n    </ion-select> -->\n    <div class=\"content_boton\">\n      <ion-button expand=\"full\" class=\"btn_pagar\" (click)=\"clickOnSucursales()\">\n        <ion-label style=\"position: absolute;left:10px\">\n          <img src=\"../../assets/images/ubicacion_menu.png\" alt=\"ubicacion_menu\">\n        </ion-label>\n        <ion-label style=\"position: absolute;left:40px\" >Sucursales cerca de mi</ion-label>\n      </ion-button>\n  </div>\n  </div>\n</ion-content>\n<div class=\"content_menu\">\n  <ul>\n    <li>\n      <img src=\"../../assets/images/alertas_menu.png\" (click)=\"onclickNotificaciones()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/ubicacion_menu.png\" (click)=\"onclickUbicaciones()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/reacsa_menu.png\" (click)=\"onclickMenu()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/listado_menu.png\" (click)=\"onclickCategorias()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/usuario_menu.png\" (click)=\"onclickUsuario()\">\n    </li>\n  </ul>\n</div>";
      /***/
    },

    /***/
    "e7NM":
    /*!*************************************************!*\
      !*** ./src/app/ubicaciones/ubicaciones.page.ts ***!
      \*************************************************/

    /*! exports provided: UbicacionesPage */

    /***/
    function e7NM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UbicacionesPage", function () {
        return UbicacionesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ubicaciones_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ubicaciones.page.html */
      "Bbn8");
      /* harmony import */


      var _ubicaciones_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ubicaciones.page.scss */
      "Ab9E");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/task.service */
      "i6c7");

      var UbicacionesPage = /*#__PURE__*/function () {
        function UbicacionesPage(router, route, taskService) {
          _classCallCheck(this, UbicacionesPage);

          this.router = router;
          this.route = route;
          this.taskService = taskService;
          this.tiendaSelected = 0;
        }

        _createClass(UbicacionesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.taskService.getAllTasks().subscribe(function (sucursales) {
              _this.sucursales = sucursales;
            });
            $("#categoria_select").val("0");
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {//this.tiendaSelected=0;
            // alert(this.tiendaSelected)
            // this.taskService.getAllTasks()
            //     .subscribe(sucursales => {
            //         this.sucursales = sucursales;
            // });
          }
        }, {
          key: "goSucursales",
          value: function goSucursales(event) {
            this.router.navigate(['/sucursales'], {
              queryParams: {
                sucursal: event.detail.value
              }
            });
            event.detail.value = 0;
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
            this.router.navigate(['/sucursalcerca']);
          }
        }]);

        return UbicacionesPage;
      }();

      UbicacionesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]
        }];
      };

      UbicacionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ubicaciones',
        template: _raw_loader_ubicaciones_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ubicaciones_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UbicacionesPage);
      /***/
    },

    /***/
    "pQcZ":
    /*!***************************************************!*\
      !*** ./src/app/ubicaciones/ubicaciones.module.ts ***!
      \***************************************************/

    /*! exports provided: UbicacionesPageModule */

    /***/
    function pQcZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UbicacionesPageModule", function () {
        return UbicacionesPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ubicaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ubicaciones-routing.module */
      "vddO");
      /* harmony import */


      var _ubicaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ubicaciones.page */
      "e7NM");

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
    "vddO":
    /*!***********************************************************!*\
      !*** ./src/app/ubicaciones/ubicaciones-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: UbicacionesPageRoutingModule */

    /***/
    function vddO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UbicacionesPageRoutingModule", function () {
        return UbicacionesPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ubicaciones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ubicaciones.page */
      "e7NM");

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
    }
  }]);
})();
//# sourceMappingURL=ubicaciones-ubicaciones-module-es5.js.map