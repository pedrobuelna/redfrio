(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["principal-principal-module"], {
    /***/
    "+N/B":
    /*!***********************************************!*\
      !*** ./src/app/principal/principal.module.ts ***!
      \***********************************************/

    /*! exports provided: PrincipalPageModule */

    /***/
    function NB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrincipalPageModule", function () {
        return PrincipalPageModule;
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


      var _principal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./principal-routing.module */
      "VBiI");
      /* harmony import */


      var _principal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./principal.page */
      "LoNT");

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
    "FWhm":
    /*!***********************************************!*\
      !*** ./src/app/principal/principal.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function FWhm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".productos_carrusel {\n  padding-top: 45px;\n  padding-bottom: 110px;\n  background: white;\n}\n\n#splash {\n  height: 100vh;\n  background-color: #0F0E9F;\n  width: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  transition: all 1s;\n  color: white;\n}\n\n#content_letras {\n  font-size: 35px;\n  margin-top: 113px;\n  margin-left: 56px;\n}\n\n#splash.quitSplash {\n  top: 100%;\n  opacity: 0;\n  transition-duration: 0.6s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ByaW5jaXBhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBb0IsaUJBQUE7RUFBa0IscUJBQUE7RUFBc0IsaUJBQUE7QUFJNUQ7O0FBSEE7RUFBUSxhQUFBO0VBQWMseUJBQUE7RUFBMEIsV0FBQTtFQUFZLGVBQUE7RUFBZ0IsT0FBQTtFQUFRLE1BQUE7RUFBTyxXQUFBO0VBQVksa0JBQUE7RUFBbUIsWUFBQTtBQWUxSDs7QUFkQTtFQUFnQixlQUFBO0VBQWdCLGlCQUFBO0VBQWtCLGlCQUFBO0FBb0JsRDs7QUFuQkE7RUFBbUIsU0FBQTtFQUFVLFVBQUE7RUFBVyx5QkFBQTtBQXlCeEMiLCJmaWxlIjoicHJpbmNpcGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0b3NfY2FycnVzZWx7cGFkZGluZy10b3A6IDQ1cHg7cGFkZGluZy1ib3R0b206IDExMHB4O2JhY2tncm91bmQ6IHdoaXRlO31cbiNzcGxhc2h7aGVpZ2h0OiAxMDB2aDtiYWNrZ3JvdW5kLWNvbG9yOiAjMEYwRTlGO3dpZHRoOiAxMDAlO3Bvc2l0aW9uOiBmaXhlZDtsZWZ0OiAwO3RvcDogMDt6LWluZGV4OiAxMDt0cmFuc2l0aW9uOiBhbGwgMXM7Y29sb3I6IHdoaXRlO31cbiNjb250ZW50X2xldHJhc3tmb250LXNpemU6IDM1cHg7bWFyZ2luLXRvcDogMTEzcHg7bWFyZ2luLWxlZnQ6IDU2cHg7fVxuI3NwbGFzaC5xdWl0U3BsYXNoe3RvcDogMTAwJTtvcGFjaXR5OiAwO3RyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7fVxuIl19 */";
      /***/
    },

    /***/
    "LoNT":
    /*!*********************************************!*\
      !*** ./src/app/principal/principal.page.ts ***!
      \*********************************************/

    /*! exports provided: PrincipalPage */

    /***/
    function LoNT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrincipalPage", function () {
        return PrincipalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_principal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./principal.page.html */
      "orr4");
      /* harmony import */


      var _principal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./principal.page.scss */
      "FWhm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_task_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/task.service */
      "i6c7");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "kwrG");

      var PrincipalPage = /*#__PURE__*/function () {
        function PrincipalPage(router, renderer, taskService, network, platform, navCtrl) {
          var _this = this;

          _classCallCheck(this, PrincipalPage);

          this.router = router;
          this.renderer = renderer;
          this.taskService = taskService;
          this.network = network;
          this.platform = platform;
          this.navCtrl = navCtrl;
          this.items = ["https://cdn.reacsa.mx/banners/banner2.jpeg", "https://cdn.reacsa.mx/banners/banner1.jpeg", "https://cdn.reacsa.mx/banners/banner2.jpeg", "https://cdn.reacsa.mx/banners/banner1.jpeg"];
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
          this.platform.ready().then(function () {
            var disconnectSubscription = _this.network.onDisconnect().subscribe(function () {
              console.log('network was disconnected :-(');
              alert("Desconectado a Inernet");

              _this.router.navigate(['/sinconexion']);
            }); //disconnectSubscription.unsubscribe();


            var connectSubscription = _this.network.onConnect().subscribe(function () {
              console.log('network was connected :-)');
              alert("Conectado a Inernet");

              _this.navCtrl.pop();
            }); //connectSubscription.unsubscribe();

          });
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
            var _this2 = this;

            setTimeout(function () {
              _this2.addMyClass();
            }, 1500);
            this.taskService.getAllBanners().subscribe(function (banners) {
              _this2.banners = banners;
              console.log(banners);
            });
            this.taskService.getAllProductos().subscribe(function (productos2) {
              _this2.productos2 = productos2;
              console.log(productos2);
            });
            this.taskService.getNotificacionesNoLeidas().subscribe(function (notificaciones) {
              _this2.notificaciones = notificaciones;
              _this2.cantidadNot = _this2.notificaciones.length;
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this3 = this;

            // this.network.onDisconnect().subscribe(() => {
            //   console.log('network was disconnected :-(');
            //   alert("FirstPage onDisconnect oninit");
            //   // this.navCtrl.navigateRoot(['/principal']);
            //   this.navCtrl.navigateRoot(['/sinconexion']);
            //  });
            //  this.network.onConnect().subscribe(() => {
            //   console.log('network was connected :-)');
            //   alert("FirstPage onConnect oninit");
            //   this.navCtrl.navigateBack;
            //  });
            this.taskService.getNotificacionesNoLeidas().subscribe(function (notificaciones) {
              _this3.notificaciones = notificaciones;
              _this3.cantidadNot = _this3.notificaciones.length;
            });
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
            this.router.navigate(['/editarperfil']);
          }
        }, {
          key: "onClickProducto",
          value: function onClickProducto(id) {
            this.router.navigate(['/producto'], {
              queryParams: {
                id: id
              }
            });
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _services_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"]
        }, {
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }];
      };

      PrincipalPage.propDecorators = {
        splash: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["splash"]
        }]
      };
      PrincipalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-principal',
        template: _raw_loader_principal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_principal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PrincipalPage);
      /***/
    },

    /***/
    "VBiI":
    /*!*******************************************************!*\
      !*** ./src/app/principal/principal-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: PrincipalPageRoutingModule */

    /***/
    function VBiI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrincipalPageRoutingModule", function () {
        return PrincipalPageRoutingModule;
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


      var _principal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./principal.page */
      "LoNT");

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
    "orr4":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/principal/principal.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function orr4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content>\n  <div id=\"splash\" #splash>\n    <div id=\"content_letras\">\n      Bienvenido! <br>\n      Compre con <br>\n      confianza.\n    </div>\n  </div>\n  <div class=\"carrito\" (click)=\"onClickCarrito()\">\n    <span class=\"numero\">4</span>\n    <img src=\"../../assets/images/carrito.png\" alt=\"carrito\" >\n  </div>\n  <ion-slides pager=\"true\" [options]=\"sliderOptions\">\n    <ion-slide *ngFor=\"let item of banners\">\n      <img src=\"{{item.ruta}}\" alt=\"{{item.ruta}}\" style=\"width:100%;\">\n    </ion-slide>\n  </ion-slides>\n  <ion-slides [options]=\"sliderOptions2\" class=\"productos_carrusel\">\n    <ion-slide  *ngFor=\"let producto of productos2;let i = index\">\n      <div id=\"content_producto_carrusel\" (click)=\"onClickProducto(producto.uuid_producto)\">\n        <img src=\"../../assets/images/producto1@3x.png\" alt=\"producto1@3x.png\">\n        <div class=\"content_producto_textos\">\n          <p> <span class=\"titletxt1\"> {{producto.marca}} MINISPLIT </span><br>\n            YHFE/YHGE SERIES <br>\n            COMPRESOR ON/OFF 220V R-410A <br>\n            SOLO FRIO Y FRIO/CALOR <br><br>\n             <span class=\"pricetxt1\">$5,027.00 <s>  $8,999.00</s></span>\n          </p>\n        </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  <div class=\"content_menu\">\n    <ul>\n      <li>\n        <img src=\"../../assets/images/alertas_menu.png\" (click)=\"onclickNotificaciones()\">\n          <span class=\"cantidad\" *ngIf=\"cantidadNot!=0\">{{cantidadNot}}</span>\n      </li>\n      <li>\n        <img src=\"../../assets/images/ubicacion_menu.png\" (click)=\"onclickUbicaciones()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/reacsa_menu.png\" (click)=\"onclickMenu()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/listado_menu.png\" (click)=\"onclickCategorias()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/usuario_menu.png\" (click)=\"onclickUsuario()\">\n      </li>\n    </ul>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=principal-principal-module-es5.js.map