(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sucursales-sucursales-module"], {
    /***/
    "2Ikv":
    /*!*************************************************!*\
      !*** ./src/app/sucursales/sucursales.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function Ikv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content_sucursales {\n  padding: 30px;\n}\n\n.content_select {\n  padding: 15px;\n}\n\n#categoria_select {\n  border: 2px solid #015BEE;\n  width: 100%;\n  text-transform: capitalize;\n  padding: 0 30px 0 55px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  height: 60px;\n  letter-spacing: 2px;\n  color: black !important;\n  /* background: url(../../assets/images/flecha_abajo.png),url(../../assets/images/ubiblanco.png);background-position: right 20px center,left 20px center;background-repeat: no-repeat;background-size: 10px, 25px; */\n}\n\n.map {\n  border: 2px solid #015BEE;\n  margin-top: 20px;\n  padding: 15px;\n  height: 323px;\n}\n\n.direccion {\n  margin-bottom: 30px;\n}\n\n.direccion:last-child {\n  margin-bottom: 120px;\n}\n\n.direccion_img {\n  margin-right: 10px;\n  width: 20px;\n  vertical-align: middle;\n}\n\n.mapa_img {\n  width: 100%;\n  display: block;\n}\n\n.ml10 {\n  margin-left: 30px;\n}\n\n.direccion {\n  color: black !important;\n}\n\n.none0, .none1, .quitSplash {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N1Y3Vyc2FsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQW9CLGFBQUE7QUFFcEI7O0FBREE7RUFBZ0IsYUFBQTtBQUtoQjs7QUFKQTtFQUFrQix5QkFBQTtFQUEwQixXQUFBO0VBQWEsMEJBQUE7RUFBNEIsc0JBQUE7RUFBd0Isd0JBQUE7RUFBMEIscUJBQUE7RUFBdUIsWUFBQTtFQUFhLG1CQUFBO0VBQW9CLHVCQUFBO0VBQXdCLG1OQUFBO0FBaUJ2Tjs7QUFoQkE7RUFBSyx5QkFBQTtFQUEwQixnQkFBQTtFQUFnQixhQUFBO0VBQWMsYUFBQTtBQXVCN0Q7O0FBdEJBO0VBQVcsbUJBQUE7QUEwQlg7O0FBekJBO0VBQXNCLG9CQUFBO0FBNkJ0Qjs7QUE1QkE7RUFBZSxrQkFBQTtFQUFtQixXQUFBO0VBQVksc0JBQUE7QUFrQzlDOztBQWpDQTtFQUFVLFdBQUE7RUFBWSxjQUFBO0FBc0N0Qjs7QUFyQ0E7RUFBTSxpQkFBQTtBQXlDTjs7QUF4Q0E7RUFDSSx1QkFBQTtBQTJDSjs7QUF6Q0E7RUFBMEIsYUFBQTtBQTZDMUIiLCJmaWxlIjoic3VjdXJzYWxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudF9zdWN1cnNhbGVze3BhZGRpbmc6MzBweDt9XG4uY29udGVudF9zZWxlY3R7cGFkZGluZzogMTVweDt9XG4jY2F0ZWdvcmlhX3NlbGVjdHtib3JkZXI6IDJweCBzb2xpZCAjMDE1QkVFO3dpZHRoOiAxMDAlOyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgcGFkZGluZzogMCAzMHB4IDAgNTVweDsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAtbW96LWFwcGVhcmFuY2U6IG5vbmU7IGhlaWdodDogNjBweDtsZXR0ZXItc3BhY2luZzogMnB4O2NvbG9yOiBibGFjayAhaW1wb3J0YW50Oy8qIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ZsZWNoYV9hYmFqby5wbmcpLHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3ViaWJsYW5jby5wbmcpO2JhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDIwcHggY2VudGVyLGxlZnQgMjBweCBjZW50ZXI7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6IDEwcHgsIDI1cHg7ICovfVxuLm1hcHtib3JkZXI6IDJweCBzb2xpZCAjMDE1QkVFO21hcmdpbi10b3A6MjBweDtwYWRkaW5nOiAxNXB4O2hlaWdodDogMzIzcHg7fVxuLmRpcmVjY2lvbnttYXJnaW4tYm90dG9tOiAzMHB4O31cbi5kaXJlY2Npb246bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOiAxMjBweDt9XG4uZGlyZWNjaW9uX2ltZ3ttYXJnaW4tcmlnaHQ6IDEwcHg7d2lkdGg6IDIwcHg7dmVydGljYWwtYWxpZ246IG1pZGRsZTt9XG4ubWFwYV9pbWd7d2lkdGg6IDEwMCU7ZGlzcGxheTogYmxvY2s7fVxuLm1sMTB7bWFyZ2luLWxlZnQ6IDMwcHg7fVxuLmRpcmVjY2lvbntcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbi5ub25lMCwubm9uZTEsLnF1aXRTcGxhc2h7ZGlzcGxheTpub25lO30iXX0= */";
      /***/
    },

    /***/
    "Oyp/":
    /*!*************************************************!*\
      !*** ./src/app/sucursales/sucursales.module.ts ***!
      \*************************************************/

    /*! exports provided: SucursalesPageModule */

    /***/
    function Oyp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SucursalesPageModule", function () {
        return SucursalesPageModule;
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


      var _sucursales_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sucursales-routing.module */
      "r8kJ");
      /* harmony import */


      var _sucursales_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sucursales.page */
      "lDYP");

      var SucursalesPageModule = function SucursalesPageModule() {
        _classCallCheck(this, SucursalesPageModule);
      };

      SucursalesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sucursales_routing_module__WEBPACK_IMPORTED_MODULE_5__["SucursalesPageRoutingModule"]],
        declarations: [_sucursales_page__WEBPACK_IMPORTED_MODULE_6__["SucursalesPage"]]
      })], SucursalesPageModule);
      /***/
    },

    /***/
    "QILs":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sucursales/sucursales.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function QILs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>sucursales</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content>\n  <div class=\"content_sucursales\">\n    <ion-select (ionChange)=\"checkValue($event)\" id=\"categoria_select\" value=\"{{sucursalActual.id_sucursal}}\" appNoArrow>\n      <ion-select-option *ngFor=\"let sucursal of sucursales\" value=\"{{sucursal.id_sucursal}}\">{{sucursal.nombre}}</ion-select-option>\n    </ion-select>\n    \n    <div class=\"content_mapa\">\n      <div class=\"map\" id=\"map\">\n        <!-- <img src=\"../../assets/images/img_mapa.png\" alt=\"mapa\" class=\"mapa_img\"> -->\n      </div>\n      <!-- Codigo para mostrar html que viene desde el componente -->\n      <!-- <div class=\"direccion\"  *ngFor=\"let marker of markers\" [innerHTML]=\"marker.direccion\"></div> -->\n      <div class=\"direccion\">\n        <div class=\"content_direc none\">\n          <p>\n            <img src=\"../../assets/images/img_flechaarriba.png\" alt=\"direccion\" class=\"direccion_img\">\n            <span>{{this.sucursalActual.nombre}}<br> <span class=\"ml10\"></span> <br>\n            <span class=\"ml10\">{{this.sucursalActual.direccion}}</span> </span> \n          </p>\n          <p> \n            <img src=\"../../assets/images/img_tel.png\" alt=\"img_tel\" class=\"direccion_img\">\n            <span>{{this.sucursalActual.telefono_1}}</span><br>\n            <img src=\"../../assets/images/img_tel.png\" alt=\"img_tel\" class=\"direccion_img\"> \n            <span>{{this.sucursalActual.telefono_2}}</span><br> \n          </p> \n          <p> \n            <img src=\"../../assets/images/img_mail.png\" alt=\"img_tel\" class=\"direccion_img\">\n            <span>{{this.sucursalActual.mail}}</span><br>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<div class=\"content_menu\">\n  <ul>\n    <li>\n      <img src=\"../../assets/images/alertas_menu.png\" (click)=\"onclickNotificaciones()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/ubicacion_menu.png\" (click)=\"onclickUbicaciones()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/reacsa_menu.png\" (click)=\"onclickMenu()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/listado_menu.png\" (click)=\"onclickCategorias()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/usuario_menu.png\" (click)=\"onclickUsuario()\">\n    </li>\n  </ul>\n</div>\n";
      /***/
    },

    /***/
    "lDYP":
    /*!***********************************************!*\
      !*** ./src/app/sucursales/sucursales.page.ts ***!
      \***********************************************/

    /*! exports provided: SucursalesPage */

    /***/
    function lDYP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SucursalesPage", function () {
        return SucursalesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sucursales_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sucursales.page.html */
      "QILs");
      /* harmony import */


      var _sucursales_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sucursales.page.scss */
      "2Ikv");
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
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var SucursalesPage = /*#__PURE__*/function () {
        function SucursalesPage(router, geolocation, route, renderer, taskService, loadingController) {
          var _this = this;

          _classCallCheck(this, SucursalesPage);

          this.router = router;
          this.geolocation = geolocation;
          this.route = route;
          this.renderer = renderer;
          this.taskService = taskService;
          this.loadingController = loadingController;
          this.latitude = 0; //latitude

          this.longitude = 0; //longitude

          this.map = null;
          this.route.queryParams.subscribe(function (params) {
            _this.sucursalActual = {
              id_sucursal: params.sucursal,
              nombre: "",
              telefono_1: "",
              telefono_2: "",
              mail: "",
              direccion: ""
            };
          });
        }

        _createClass(SucursalesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.tiendaSelected = 0;
            this.taskService.getAllTasks().subscribe(function (sucursales) {
              _this2.sucursales = sucursales;

              _this2.sucursales.forEach(function (sucursal) {
                if (sucursal.id_sucursal == _this2.sucursalActual.id_sucursal) {
                  var coordenadas = sucursal.coordenadas.split(", ");
                  var marcador = {
                    position: {
                      lat: parseInt(coordenadas[0]),
                      lng: parseInt(coordenadas[1])
                    },
                    title: sucursal.nombre
                  }; //$("#categoria_select").val(this.sucursalActual.id_sucursal)

                  setTimeout(function () {
                    _this2.sucursalActual = {
                      id_sucursal: _this2.sucursalActual.id_sucursal,
                      nombre: sucursal.nombre,
                      telefono_1: sucursal.telefono_1,
                      telefono_2: sucursal.telefono_2,
                      mail: sucursal.mail,
                      direccion: sucursal.direccion
                    };
                    console.log("0");

                    _this2.loadMap(marcador);

                    console.log("1");
                  }, 200);
                }
              });
            });
          }
        }, {
          key: "checkValue",
          value: function checkValue(event) {
            this.sucursalActual.id_sucursal = event.detail.value;
            this.actualizarMarcador();
            event.detail.value = 0;
          }
        }, {
          key: "actualizarMarcador",
          value: function actualizarMarcador() {
            var _this3 = this;

            this.sucursales.forEach(function (sucursal) {
              if (sucursal.id_sucursal == _this3.sucursalActual.id_sucursal) {
                var coordenadas = sucursal.coordenadas.split(", ");
                var marcador = {
                  position: {
                    lat: parseInt(coordenadas[0]),
                    lng: parseInt(coordenadas[1])
                  },
                  title: sucursal.nombre
                };
                setTimeout(function () {
                  _this3.sucursalActual = {
                    id_sucursal: _this3.sucursalActual.id_sucursal,
                    nombre: sucursal.nombre,
                    telefono_1: sucursal.telefono_1,
                    telefono_2: sucursal.telefono_2,
                    mail: sucursal.mail,
                    direccion: sucursal.direccion
                  };
                  console.log("0");

                  _this3.loadMap(marcador);

                  console.log("1");
                }, 100);
              }
            });
          }
        }, {
          key: "loadMap",
          value: function loadMap(marcador) {
            var _this4 = this;

            var mapEle = document.getElementById('map');
            this.marcadorActual = marcador;
            var centerMap = {
              lat: this.marcadorActual.position.lat,
              lng: this.marcadorActual.position.lng
            };
            this.map = new google.maps.Map(mapEle, {
              center: centerMap,
              zoom: 12
            });
            google.maps.event.addListenerOnce(this.map, 'idle', function () {
              console.log("a");

              _this4.renderMarkers();

              mapEle.classList.add('show-map');
            });
          }
        }, {
          key: "addMarker",
          value: function addMarker(marker) {
            return new google.maps.Marker({
              position: marker.position,
              map: this.map,
              title: marker.title
            });
          }
        }, {
          key: "renderMarkers",
          value: function renderMarkers() {
            // this.marker.forEach(marker => {
            this.addMarker(this.marcadorActual); // });1
          }
          /*loadMap(lat,long) {
            // create a new map by passing HTMLElement
            const mapEle: HTMLElement = document.getElementById('map');
            // create LatLng object
            const myLatLng = {lat: lat, lng: long};
            //Obtener coordenadas
            const latLng = new google.maps.LatLng();
             // create map
            this.map = new google.maps.Map(mapEle, {
              center: myLatLng,
              zoom: 10,
              disableDefaultUI:true
            });
            let infoWindow;
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                  };
                  // infoWindow.setPosition(pos);
                  // infoWindow.setContent("Location found.");
                  // infoWindow.open(this.map);
                  this.map.setCenter(pos);
                },
                () => {
                  //handleLocationError(true, infoWindow, this.map.getCenter());
                }
              );
            } else {
              // Browser doesn't support Geolocation
              alert("Error de Geolocalizacion")
            }
             google.maps.event.addListenerOnce(this.map, 'idle', () => {
              //this.renderMarkers();
              mapEle.classList.add('show-map');
              this.renderMarkers();
            });
          }*/

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
            this.tiendaSelected = 0;
            this.router.navigate(['/sucursales']);
          }
        }]);

        return SucursalesPage;
      }();

      SucursalesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }];
      };

      SucursalesPage.propDecorators = {
        splash: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["splash"]
        }]
      };
      SucursalesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sucursales',
        template: _raw_loader_sucursales_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sucursales_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SucursalesPage);
      /***/
    },

    /***/
    "r8kJ":
    /*!*********************************************************!*\
      !*** ./src/app/sucursales/sucursales-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: SucursalesPageRoutingModule */

    /***/
    function r8kJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SucursalesPageRoutingModule", function () {
        return SucursalesPageRoutingModule;
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


      var _sucursales_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sucursales.page */
      "lDYP");

      var routes = [{
        path: '',
        component: _sucursales_page__WEBPACK_IMPORTED_MODULE_3__["SucursalesPage"]
      }];

      var SucursalesPageRoutingModule = function SucursalesPageRoutingModule() {
        _classCallCheck(this, SucursalesPageRoutingModule);
      };

      SucursalesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SucursalesPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=sucursales-sucursales-module-es5.js.map