(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["principal-principal-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/principal/principal.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/principal/principal.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPrincipalPrincipalPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content>\n  <div id=\"splash\" #splash>\n    <div id=\"content_letras\">\n      Bienvenido! <br>\n      Compre con <br>\n      confianza.\n    </div>\n  </div>\n  <div class=\"carrito\" (click)=\"onClickCarrito()\">\n    <span class=\"numero\">4</span>\n    <img src=\"../../assets/images/carrito.png\" alt=\"carrito\" >\n  </div>\n  <ion-slides pager=\"true\" [options]=\"sliderOptions\">\n    <ion-slide *ngFor=\"let item of items\">\n      <img src=\"{{item}}\" alt=\"{{item}}\" style=\"width:100%;\">\n    </ion-slide>\n  </ion-slides>\n  <ion-slides [options]=\"sliderOptions2\" class=\"productos_carrusel\">\n    <ion-slide *ngFor=\"let item of items\">\n      <div id=\"content_producto_carrusel\" (click)=\"onClickProducto()\">\n        <img src=\"../../assets/images/producto1@3x.png\" alt=\"producto1@3x.png\">\n        <div class=\"content_producto_textos\">\n          <p> <span class=\"titletxt1\"> YORK MINISPLIT </span><br>\n            YHFE/YHGE SERIES <br>\n            COMPRESOR ON/OFF 220V R-410A <br>\n            SOLO FRIO Y FRIO/CALOR <br><br>\n             <span class=\"pricetxt1\">$5,027.00 <s>  $8,999.00</s></span>\n          </p>\n        </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  <div class=\"content_menu\">\n    <ul>\n      <li>\n        <img src=\"../../assets/images/alertas_menu.png\" (click)=\"onclickNotificaciones()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/ubicacion_menu.png\" (click)=\"onclickUbicaciones()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/reacsa_menu.png\" (click)=\"onclickMenu()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/listado_menu.png\" (click)=\"onclickCategorias()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/usuario_menu.png\" (click)=\"onclickUsuario()\">\n      </li>\n    </ul>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/principal/principal-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/principal/principal-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: PrincipalPageRoutingModule */

    /***/
    function srcAppPrincipalPrincipalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrincipalPageRoutingModule", function () {
        return PrincipalPageRoutingModule;
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


      var _principal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./principal.page */
      "./src/app/principal/principal.page.ts");

      var routes = [{
        path: '',
        component: _principal_page__WEBPACK_IMPORTED_MODULE_3__["PrincipalPage"]
      }];

      var PrincipalPageRoutingModule = function PrincipalPageRoutingModule() {
        _classCallCheck(this, PrincipalPageRoutingModule);
      };

      PrincipalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PrincipalPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/principal/principal.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/principal/principal.module.ts ***!
      \***********************************************/

    /*! exports provided: PrincipalPageModule */

    /***/
    function srcAppPrincipalPrincipalModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrincipalPageModule", function () {
        return PrincipalPageModule;
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


      var _principal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./principal-routing.module */
      "./src/app/principal/principal-routing.module.ts");
      /* harmony import */


      var _principal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./principal.page */
      "./src/app/principal/principal.page.ts");

      var PrincipalPageModule = function PrincipalPageModule() {
        _classCallCheck(this, PrincipalPageModule);
      };

      PrincipalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _principal_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrincipalPageRoutingModule"]],
        declarations: [_principal_page__WEBPACK_IMPORTED_MODULE_6__["PrincipalPage"]]
      })], PrincipalPageModule);
      /***/
    },

    /***/
    "./src/app/principal/principal.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/principal/principal.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPrincipalPrincipalPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#splash {\n  height: 100vh;\n  background-color: #0F0E9F;\n  width: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  transition: all 1s;\n  color: white;\n}\n\n#content_letras {\n  font-size: 35px;\n  margin-top: 113px;\n  margin-left: 56px;\n}\n\n#splash.quitSplash {\n  top: 100%;\n  opacity: 0;\n  transition-duration: 0.6s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbmNpcGFsL3ByaW5jaXBhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxhQUFBO0VBQWMseUJBQUE7RUFBMEIsV0FBQTtFQUFZLGVBQUE7RUFBZ0IsT0FBQTtFQUFRLE1BQUE7RUFBTyxXQUFBO0VBQVksa0JBQUE7RUFBbUIsWUFBQTtBQVUxSDs7QUFUQTtFQUFnQixlQUFBO0VBQWdCLGlCQUFBO0VBQWtCLGlCQUFBO0FBZWxEOztBQWRBO0VBQW1CLFNBQUE7RUFBVSxVQUFBO0VBQVcseUJBQUE7QUFvQnhDIiwiZmlsZSI6InNyYy9hcHAvcHJpbmNpcGFsL3ByaW5jaXBhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3BsYXNoe2hlaWdodDogMTAwdmg7YmFja2dyb3VuZC1jb2xvcjogIzBGMEU5Rjt3aWR0aDogMTAwJTtwb3NpdGlvbjogZml4ZWQ7bGVmdDogMDt0b3A6IDA7ei1pbmRleDogMTA7dHJhbnNpdGlvbjogYWxsIDFzO2NvbG9yOiB3aGl0ZTt9XG4jY29udGVudF9sZXRyYXN7Zm9udC1zaXplOiAzNXB4O21hcmdpbi10b3A6IDExM3B4O21hcmdpbi1sZWZ0OiA1NnB4O31cbiNzcGxhc2gucXVpdFNwbGFzaHt0b3A6IDEwMCU7b3BhY2l0eTogMDt0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO30iXX0= */";
      /***/
    },

    /***/
    "./src/app/principal/principal.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/principal/principal.page.ts ***!
      \*********************************************/

    /*! exports provided: PrincipalPage */

    /***/
    function srcAppPrincipalPrincipalPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrincipalPage", function () {
        return PrincipalPage;
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

      var PrincipalPage = /*#__PURE__*/function () {
        function PrincipalPage(router, renderer) {
          _classCallCheck(this, PrincipalPage);

          this.router = router;
          this.renderer = renderer;
          this.items = ["../../assets/images/tarjetas-reacsa@3x2.jpeg", "../../assets/images/tarjetas-reacsa@3x.jpeg", "../../assets/images/../../assets/images/tarjetas-reacsa@3x2.jpeg", "../../assets/images/tarjetas-reacsa@3x.jpeg"];
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
          this.items2 = ["../../assets/images/producto1@3x.png", "../../assets/images/producto1@3x.png"];
          this.sliderOptions2 = {
            initialSlide: 0,
            speed: 350,
            slidesPerView: 2,
            loop: true,
            centeredSlides: true,
            spaceBetween: 20
          };
        }

        _createClass(PrincipalPage, [{
          key: "addMyClass",
          value: function addMyClass() {
            //this.myButton.nativeElement.classList.add("my-class"); //BAD PRACTICE
            this.renderer.addClass(this.splash.nativeElement, "quitSplash");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            setTimeout(function () {
              _this.addMyClass();
            }, 1500);
          }
        }, {
          key: "retraso",
          value: function retraso() {
            console.log("Retraso");
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
            this.router.navigate(['/register']);
          }
        }, {
          key: "onClickProducto",
          value: function onClickProducto() {
            this.router.navigate(['/producto']);
          }
        }, {
          key: "onClickCarrito",
          value: function onClickCarrito() {
            this.router.navigate(['/carrito']);
          }
        }]);

        return PrincipalPage;
      }();

      PrincipalPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      };

      PrincipalPage.propDecorators = {
        splash: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["splash"]
        }]
      };
      PrincipalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-principal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./principal.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/principal/principal.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./principal.page.scss */
        "./src/app/principal/principal.page.scss"))["default"]]
      })], PrincipalPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=principal-principal-module-es5.js.map