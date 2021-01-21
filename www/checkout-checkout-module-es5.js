(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"], {
    /***/
    "/6ko":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function ko(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>checkout</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div id=\"splash\" #splash >\n    <div id=\"content_letras\">\n      Gracias! <br>\n      Su orden ya <br>\n      se procesa.\n    </div>\n    <div class=\"circulo\" (click)=\"onclickMenu()\">\n      <span class=\"texto_circulo\">Regresa a Reacsa</span>\n    </div>\n  </div>\n  <div class=\"content_checkout\">\n    <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n      <div class=\"formulario padding30\">\n        <div class=\"titulo_checkout\">Checkout</div>\n        <br>\n        <ion-item color=\"light\" class=\"closed\">\n          <ion-label position=\"floating\">Nombres *</ion-label>\n          <ion-input formControlName=\"nombre\" type=\"text\" required ></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.nombre.errors?.required\">\n          Campo nombre requerido.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.nombre.errors?.minlength\">\n          El nombre debe tener minimo 2 caractéres.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Apellido(s) *</ion-label>\n          <ion-input formControlName=\"apellido\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.apellido.errors?.required\">\n          Campo Apellido requerido.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.apellido.errors?.minlength\">\n          El Apellido debe tener minimo 2 caractéres.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Calle *</ion-label>\n          <ion-input formControlName=\"calle\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.calle.errors?.required\">\n          Campo Calle requerido.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.calle.errors?.minlength\">\n          El campo Calle debe tener minimo 2 caractéres.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Numero Exterior *</ion-label>\n          <ion-input formControlName=\"numeroExterior\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.numeroExterior.errors?.required\">\n          Campo Numero Exterior requerido.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.numeroExterior.errors?.maxlength\">\n          El campo Numero Exterior debe tener maximo 10 caractéres.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.numeroExterior.errors?.pattern\">\n          El Celular debe tener solo numeros.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Numero Interior</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Colonia *</ion-label>\n          <ion-input formControlName=\"colonia\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.colonia.errors?.required\">\n          Campo Colonia requerido.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Código Postal</ion-label>\n          <ion-input formControlName=\"cp\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.cp.errors?.pattern\">\n          El codigo postal debe tener solo numeros.\n        </span>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.cp.errors?.required\">\n          Campo codigo postal requerido.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.cp.errors?.minlength\">\n          El codigo postal debe tener minimo 5 caractéres.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.cp.errors?.maxlength\">\n          El codigo postal debe tener maximo 5 caractéres.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Población *</ion-label>\n          <ion-select formControlName=\"poblacion\">\n            <ion-select-option value=\"brown\">Mazatlan</ion-select-option>\n            <ion-select-option value=\"blonde\">Culiacan</ion-select-option>\n            <ion-select-option value=\"black\">Navolato</ion-select-option>\n            <ion-select-option value=\"red\">Escuinapa</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.poblacion.errors?.required\">\n          Campo Población requerido.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Télefono</ion-label>\n          <ion-input formControlName=\"telefono\"></ion-input>\n        </ion-item>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Ceular</ion-label>\n          <ion-input formControlName=\"celular\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.celular.errors?.required\">\n          Campo Celular postal requerido.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.celular.errors?.minlength\">\n          El Celular debe tener minimo 10 caractéres.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.celular.errors?.maxlength\">\n          El Celular debe tener maximo 10 caractéres.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.celular.errors?.pattern\">\n          El Celular debe tener solo numeros.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Estado *</ion-label>\n          <ion-select formControlName=\"estado\">\n            <ion-select-option value=\"\">Selecciona Estado</ion-select-option>\n            <ion-select-option value=\"brown\">Sinaloa</ion-select-option>\n            <ion-select-option value=\"blonde\">Sonora</ion-select-option>\n            <ion-select-option value=\"black\">Coahuila</ion-select-option>\n            <ion-select-option value=\"red\">Nuevo Leon</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.estado.errors?.required\">\n          Campo Estado requerido.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Télefono </ion-label>\n          <ion-input formControlName=\"telefono\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.telefono.errors?.minlength\">\n          El Telefono debe tener minimo 10 caractéres.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.telefono.errors?.pattern\">\n          El Telefono debe tener solo numeros.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Celuar *</ion-label>\n          <ion-input formControlName=\"celular2\"></ion-input>\n        </ion-item>\n        <ion-item color=\"light\">\n          <ion-label position=\"floating\">Correo *</ion-label>\n          <ion-input formControlName=\"correo\" type=\"email\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.correo.errors?.required || errorControl.correo.errors?.pattern\">\n          El campo correo debe ser obligatorio y con el formato correo@cominio.com\n        </span>\n        <ion-item color=\"light\">\n          <ion-label position=\"floating\">Persona de contacto</ion-label>\n          <ion-input formControlName=\"personaContacto\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.personaContacto.errors?.required || errorControl.personaContacto.errors?.pattern\">\n          El campo contacto debe ser obligatorio con mayusculas y sin acentos\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Sucursal *</ion-label>\n          <ion-select>\n            <ion-select-option value=\"\">Selecciona Estado</ion-select-option>\n            <ion-select-option value=\"brown\">Sinaloa</ion-select-option>\n            <ion-select-option value=\"blonde\">Sonora</ion-select-option>\n            <ion-select-option value=\"black\">Coahuila</ion-select-option>\n            <ion-select-option value=\"red\">Nuevo Leon</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Tipo de Empresa *</ion-label>\n          <ion-select formControlName=\"estado\">\n            <ion-select-option value=\"\">Selecciona Estado</ion-select-option>\n            <ion-select-option value=\"brown\">Sinaloa</ion-select-option>\n            <ion-select-option value=\"blonde\">Sonora</ion-select-option>\n            <ion-select-option value=\"black\">Coahuila</ion-select-option>\n            <ion-select-option value=\"red\">Nuevo Leon</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item color=\"light\">\n          <ion-label position=\"floating\">Lista Precio ID</ion-label>\n          <ion-input ></ion-input>\n        </ion-item>\n        <br>\n        <div class=\"titulo_checkout\">Direccion de Entrega</div>\n        <br>\n        <ion-item color=\"light\" >\n          <ion-checkbox mode=\"md\" color=\"light\" formControlName=\"myBoolean\" (ionChange)=\"muestraDireccion2()\"></ion-checkbox>\n          <label style=\"color:black;margin-left: 10px;\">Agregar otra dirección</label>\n        </ion-item>\n        <br><br>\n        <div class=\"direccion2\" *ngIf=mostrarDireccion1>\n          <label style=\"color:black;\">DIRECCIÓN 2 </label>\n          <br><br>\n          <ion-item color=\"light\">\n            <ion-label position=\"floating\">Calle2</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n          <ion-item color=\"light\">\n            <ion-label position=\"floating\">Numero Exterior</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n          <ion-item color=\"light\">\n            <ion-label position=\"floating\">Numero Interior</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n          <ion-item color=\"light\">\n            <ion-label position=\"floating\">Colonia</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n          <ion-item color=\"light\">\n            <ion-label position=\"floating\">CP</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n          <ion-item color=\"light\" >\n            <ion-label position=\"floating\">Población</ion-label>\n            <ion-select>\n              <ion-select-option value=\"brown\">Mazatlan</ion-select-option>\n              <ion-select-option value=\"blonde\">Culiacan</ion-select-option>\n              <ion-select-option value=\"black\">Navolato</ion-select-option>\n              <ion-select-option value=\"red\">Escuinapa</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item color=\"light\" >\n            <ion-label position=\"floating\">Estado</ion-label>\n            <ion-select formControlName=\"estado\">\n              <ion-select-option value=\"\">Selecciona Estado</ion-select-option>\n              <ion-select-option value=\"brown\">Sinaloa</ion-select-option>\n              <ion-select-option value=\"blonde\">Sonora</ion-select-option>\n              <ion-select-option value=\"black\">Coahuila</ion-select-option>\n              <ion-select-option value=\"red\">Nuevo Leon</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n        <ion-item color=\"light\" >\n          <ion-checkbox mode=\"md\" color=\"light\" formControlName=\"myBoolean2\" (ionChange)=\"muestraFactura()\"></ion-checkbox>\n          <label style=\"color:black;margin-left: 10px;\">Solicitar Factura</label>\n        </ion-item>\n        <div class=\"direccion2\" *ngIf=mostrarFactura>\n          <ion-item color=\"light\">\n            <ion-label position=\"floating\">RFC *</ion-label>\n            <ion-input formControlName=\"rfc\"></ion-input>\n          </ion-item>\n          <!-- Error messages -->\n          <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.rfc.errors?.required || errorControl.rfc.errors?.pattern\">\n            Campo RFC Obligatorio y debe llevar la clabe correcta.\n          </span>\n          <ion-item color=\"light\">\n            <ion-label position=\"floating\">Colonia</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n          <ion-item color=\"light\" >\n            <ion-checkbox mode=\"md\" color=\"light\"></ion-checkbox>\n            <label style=\"color:black;margin-left: 10px;\">Soy persona fisica</label>\n          </ion-item>\n          <ion-item color=\"light\">\n            <ion-label position=\"floating\">Uso de CFDI</ion-label>\n            <ion-select value=\"G03\">\n              <ion-select-option value=\"G03\">G03</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n      </div>\n      \n      <div id=\"forma_envio_content\">\n        <div class=\"forma_envio_subcontent\">\n          <div class=\"titulo1_envio\">Forma de envio</div>\n          <br>\n          <div class=\"content_radios1\">\n            <div class=\"radio\">\n              <input id=\"radio-12\" name=\"radio1\" type=\"radio\" checked>\n              <label for=\"radio-12\" class=\"radio-label\">DHL Standard (5 - 19 dias)</label>\n              <span class=\"right\">$0</span>\n            </div>\n            <br>\n            <div class=\"radio\">\n              <input id=\"radio-22\" name=\"radio1\" type=\"radio\">\n              <label  for=\"radio-22\" class=\"radio-label\">DHL Express (2 - 5 dias)</label>\n              <span class=\"right\">$20</span>\n            </div>\n        </div>\n        </div>\n        <div class=\"forma_pago_subcontent radios\">\n          <div class=\"titulo1_envio mt\">Forma de pago</div>\n          <br><br>\n          <div class=\"radio\" style=\"width: 50%;display: inline-block;margin: 0;text-align: center;\">\n            <input id=\"radio-1\" name=\"radio\" type=\"radio\" checked>\n            <label for=\"radio-1\" class=\"radio-label\">Credito/Debito</label>\n          </div><div class=\"radio\" style=\"width: 50%;display: inline-block;margin: 0;text-align: center;\">\n            <input id=\"radio-2\" name=\"radio\" type=\"radio\">\n            <label for=\"radio-2\" class=\"radio-label\">Paypal</label>\n          </div>\n        </div>\n      </div>\n      <div class=\"formulario padding30\">\n        <ion-item color=\"light\" class=\"closed\">\n          <ion-label position=\"floating\">Nombre en tarjeta *</ion-label>\n          <ion-input type=\"text\" formControlName=\"nombreTarjeta\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.nombreTarjeta.errors?.pattern\">\n          El Nombre de tarjeta debe tener solo letras.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.nombreTarjeta.errors?.required\">\n          Campo Nombre de tarjeta es requerido.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.nombreTarjeta.errors?.minlength\">\n          El Nombre de tarjeta debe tener minimo 3 caractéres.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.nombreTarjeta.errors?.maxlength\">\n          El Nombre de tarjeta debe tener maximo 3 caractéres.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Numero de tarjeta *</ion-label>\n          <ion-input formControlName=\"numeroTarjeta\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.numeroTarjeta.errors?.minlength\">\n          El Numero de tarjeta debe tener minimo 16 caractéres.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.numeroTarjeta.errors?.maxlength\">\n          El Numero de tarjeta debe tener maximo 16 caractéres.\n        </span> \n        <ion-item color=\"light\">\n          <ion-label position=\"floating\">Fecha de Expiracion (DD)*</ion-label>\n          <ion-select formControlName=\"fechaDiaTarjeta\">\n            <ion-select-option value=\"01\">01</ion-select-option>\n            <ion-select-option value=\"02\">02</ion-select-option>\n            <ion-select-option value=\"03\">03</ion-select-option>\n            <ion-select-option value=\"04\">04</ion-select-option>\n            <ion-select-option value=\"05\">05</ion-select-option>\n            <ion-select-option value=\"06\">06</ion-select-option>\n            <ion-select-option value=\"07\">07</ion-select-option>\n            <ion-select-option value=\"08\">08</ion-select-option>\n            <ion-select-option value=\"09\">09</ion-select-option>\n            <ion-select-option value=\"10\">10</ion-select-option>\n            <ion-select-option value=\"11\">11</ion-select-option>\n            <ion-select-option value=\"12\">12</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.fechaDiaTarjeta.errors?.required\">\n          Campo Fecha de Expiracion DD de tarjeta es requerido.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Fecha de Expiracion (MM)*</ion-label>\n          <ion-select formControlName=\"fechaMesTarjeta\">\n            <ion-select-option value=\"01\">01</ion-select-option>\n            <ion-select-option value=\"02\">02</ion-select-option>\n            <ion-select-option value=\"03\">03</ion-select-option>\n            <ion-select-option value=\"04\">04</ion-select-option>\n            <ion-select-option value=\"05\">05</ion-select-option>\n            <ion-select-option value=\"06\">06</ion-select-option>\n            <ion-select-option value=\"07\">07</ion-select-option>\n            <ion-select-option value=\"08\">08</ion-select-option>\n            <ion-select-option value=\"09\">09</ion-select-option>\n            <ion-select-option value=\"10\">10</ion-select-option>\n            <ion-select-option value=\"11\">11</ion-select-option>\n            <ion-select-option value=\"12\">12</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.fechaMesTarjeta.errors?.required\">\n          Campo Fecha de Expiracion MM de tarjeta es requerido.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Año *</ion-label>\n          <ion-select formControlName=\"fechaAnoTarjeta\">\n            <ion-select-option value=\"20\">2020</ion-select-option>\n            <ion-select-option value=\"21\">2021</ion-select-option>\n            <ion-select-option value=\"22\">2022</ion-select-option>\n            <ion-select-option value=\"23\">2023</ion-select-option>\n            <ion-select-option value=\"24\">2024</ion-select-option>\n            <ion-select-option value=\"25\">2025</ion-select-option>\n            <ion-select-option value=\"26\">2026</ion-select-option>\n            <ion-select-option value=\"27\">2027</ion-select-option>\n            <ion-select-option value=\"28\">2028</ion-select-option>\n          </ion-select>\n        </ion-item>\n         <!-- Error messages -->\n         <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.fechaAnoTarjeta.errors?.required\">\n          Campo Año de tarjeta es requerido.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Codigo de seguridad (CVV) *</ion-label>\n          <ion-input formControlName=\"cvvTarjeta\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <!-- <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.cvvTarjeta.errors?.pattern\">\n          El CVV debe tener solo numeros.\n        </span> -->\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.cvvTarjeta.errors?.required || errorControl.cvvTarjeta.errors?.pattern || errorControl.cvvTarjeta.errors?.minlength || errorControl.cvvTarjeta.errors?.maxlength\">\n          Campo CVV requerido y tener solo 3 numeros.\n        </span>\n        <!-- <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.cvvTarjeta.errors?.minlength\">\n          El CVV debe tener minimo 3 caractéres.\n        </span> -->\n        <!-- <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.cvvTarjeta.errors?.maxlength\">\n          El CVV debe tener maximo 3 caractéres.\n        </span> -->\n        <br><br>\n        <div class=\"titulo_checkout\">Order Summary</div>\n        <br><br>\n        <ion-grid>\n          <ion-row class=\"font-s1\">\n            <ion-col>\n              <div class=\"ion-text-left\">\n                Subtotal\n              </div>\n            </ion-col>\n            <ion-col>\n              <div class=\"ion-text-right black\">\n                $1,320\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"font-s1\">\n            <ion-col>\n              <div>\n                Shipping UPS 2-Day Deliver\n              </div>\n            </ion-col>\n            <ion-col>\n              <div class=\"ion-text-right black\">\n                $20\n              </div>\n            </ion-col>\n          </ion-row>\n          <br>\n          <ion-row class=\"font-s1\">\n            <ion-col>\n              <div>\n                Tax\n              </div>\n            </ion-col>\n            <ion-col>\n              <div class=\"ion-text-right black\">\n                $132\n              </div>\n            </ion-col>\n          </ion-row>\n          <br>\n          <ion-row class=\"font-s2\">\n            <ion-col>\n              <div>\n                Total\n              </div>\n            </ion-col>\n            <ion-col>\n              <div class=\"ion-text-right\">\n                $1,472\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <div class=\"content_boton\">\n        <ion-button expand=\"full\" class=\"btn_pagar\" type=\"subtmi\">\n          <ion-label style=\"position: absolute;left:10px\">$1,472</ion-label>\n          <ion-label style=\"position: absolute;right:10px\">Comprar</ion-label>\n        </ion-button>\n      </div>\n    </form>\n  </div>\n</ion-content>\n<div class=\"content_menu\">\n  <ul>\n    <li>\n      <img src=\"../../assets/images/alertas_menu.png\" (click)=\"onclickNotificaciones()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/ubicacion_menu.png\" (click)=\"onclickUbicaciones()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/reacsa_menu.png\" (click)=\"onclickMenu()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/listado_menu.png\" (click)=\"onclickCategorias()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/usuario_menu.png\" (click)=\"onclickUsuario()\">\n    </li>\n  </ul>\n</div>\n\n";
      /***/
    },

    /***/
    "8y03":
    /*!*********************************************!*\
      !*** ./src/app/checkout/checkout.module.ts ***!
      \*********************************************/

    /*! exports provided: CheckoutPageModule */

    /***/
    function y03(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function () {
        return CheckoutPageModule;
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


      var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./checkout-routing.module */
      "v3IU");
      /* harmony import */


      var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./checkout.page */
      "E2Rb");

      var CheckoutPageModule = function CheckoutPageModule() {
        _classCallCheck(this, CheckoutPageModule);
      };

      CheckoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageRoutingModule"]],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
      })], CheckoutPageModule);
      /***/
    },

    /***/
    "E2Rb":
    /*!*******************************************!*\
      !*** ./src/app/checkout/checkout.page.ts ***!
      \*******************************************/

    /*! exports provided: CheckoutPage */

    /***/
    function E2Rb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutPage", function () {
        return CheckoutPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./checkout.page.html */
      "/6ko");
      /* harmony import */


      var _checkout_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./checkout.page.scss */
      "pA2R");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/paypal/ngx */
      "bXRV");

      var CheckoutPage = /*#__PURE__*/function () {
        function CheckoutPage(payPal, router, formBuilder, renderer) {
          _classCallCheck(this, CheckoutPage);

          this.payPal = payPal;
          this.router = router;
          this.formBuilder = formBuilder;
          this.renderer = renderer;
          this.isSubmitted = false;
          this.paymentAmount = '3.33';
          this.currency = 'MXN';
          this.currencyIcon = '₹'; // this.ionicForm = new FormGroup({
          //   nombre: new FormControl()
          // });

          this.mostrarDireccion1 = true;
          this.ionicForm = this.formBuilder.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)]],
            apellido: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)]],
            calle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            numeroExterior: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)]],
            estado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            poblacion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            celular: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)]],
            celular2: ['', []],
            myBoolean: ['true', []],
            myBoolean2: ['false', []],
            colonia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)]],
            cp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(5)]],
            telefono: [''],
            //VALIDACION RFC: ^(([ÑA-Z|ña-z|&]{3}|[A-Z|a-z]{4})\d{2}((0[1-9]|1[012])(0[1-9]|1\d|2[0-8])|(0[13456789]|1[012])(29|30)|(0[13578]|1[02])31)(\w{2})([A|a|0-9]{1}))$|^(([ÑA-Z|ña-z|&]{3}|[A-Z|a-z]{4})([02468][048]|[13579][26])0229)(\w{2})([A|a|0-9]{1})$
            rfc: ['BUFP910825DE3', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$')]],
            nombreTarjeta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[A-Z]*')]],
            personaContacto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[A-Z]*')]],
            numeroTarjeta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(16)]],
            fechaDiaTarjeta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(2)]],
            fechaMesTarjeta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(2)]],
            fechaAnoTarjeta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            cvvTarjeta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(3)]],
            correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
          });
        }

        _createClass(CheckoutPage, [{
          key: "muestraDireccion2",
          value: function muestraDireccion2() {
            if (this.ionicForm.value.myBoolean == true) {
              this.mostrarDireccion1 = true;
              this.calle2Required = true; //alert("valor1: "+this.ionicForm.value.calle2)
              //this.ionicForm["controls"]["calle2"].reset();
              //alert("valor2: "+this.ionicForm.value.calle2)
            } else {
              //alert("valor3: "+this.ionicForm.value.calle2)
              this.ionicForm.value.calle2 = "";
              this.mostrarDireccion1 = false;
              this.calle2Required = false;
            }
          }
        }, {
          key: "muestraFactura",
          value: function muestraFactura() {
            if (this.ionicForm.value.myBoolean2 == true) {
              this.mostrarFactura = true;
              this.ionicForm.value.rfc = true;
              this.ionicForm["controls"]["rfc"].reset();
            } else {
              this.ionicForm.get('rfc').setValue("BUFP910825DE3");
              this.mostrarFactura = false; // this.ionicForm.value.rfc='x';
            } //alert(this.ionicForm.value.rfc)

          }
        }, {
          key: "addMyClass",
          value: function addMyClass() {
            //this.myButton.nativeElement.classList.add("my-class"); //BAD PRACTICE
            this.renderer.addClass(this.splash.nativeElement, "quitSplash");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "payWithPaypal",
          value: function payWithPaypal() {
            var _this = this;

            this.payPal.init({
              PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
              PayPalEnvironmentSandbox: 'Af9_zR1K8wQc5MOod3Sr0knKhKUAQK48aGq6_n4SPLrQ-lnZxoyt-ySGV24UnRrW4NkDVAeBPtXYsKQm'
            }).then(function () {
              // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
              _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_6__["PayPalConfiguration"]({// Only needed if you get an "Internal Service Error" after PayPal login!
                //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
              })).then(function () {
                var payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_6__["PayPalPayment"](_this.paymentAmount, _this.currency, 'Description', 'sale');

                _this.payPal.renderSinglePaymentUI(payment).then(function (res) {
                  console.log("JALA");
                  console.log(res);
                  setTimeout(function () {
                    _this.addMyClass();
                  }, 1500);
                  setTimeout(function () {
                    _this.router.navigate(['/principal']);
                  }, 200000); // Successfully paid
                }, function () {
                  console.log("Error or render dialog closed without being successful"); // Error or render dialog closed without being successful
                });
              }, function () {
                console.log("Error in configuration"); // Error in configuration
              });
            }, function () {
              console.log("Error in initialization, maybe PayPal isn't supported or something else"); // Error in initialization, maybe PayPal isn't supported or something else
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            this.isSubmitted = true; //alert("ENVIAR valor RFC: "+this.ionicForm.value.rfc)

            if (!this.ionicForm.valid) {
              console.log('Please provide all the required values!');
              return false;
            } else {
              console.log('Form Completed' + this.ionicForm.value);
              this.payWithPaypal();
            }
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
          key: "errorControl",
          get: function get() {
            return this.ionicForm.controls;
          }
        }]);

        return CheckoutPage;
      }();

      CheckoutPage.ctorParameters = function () {
        return [{
          type: _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_6__["PayPal"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }];
      };

      CheckoutPage.propDecorators = {
        splash: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["splash"]
        }]
      };
      CheckoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkout',
        template: _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkout_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CheckoutPage);
      /***/
    },

    /***/
    "pA2R":
    /*!*********************************************!*\
      !*** ./src/app/checkout/checkout.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function pA2R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".padding30 {\n  padding: 30px;\n}\n\n.titulo_checkout {\n  font-size: 20px;\n  margin-top: 20px;\n  color: black;\n}\n\n.inline-block {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.txt_registro {\n  margin-left: 20px;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n\nion-item {\n  margin-top: 15px;\n  font-size: 20px;\n}\n\nion-item.item-has-focus > ion-label,\nion-item.item-has-value > ion-label {\n  color: #707070 !important;\n}\n\nion-item > ion-label {\n  color: black !important;\n}\n\n.font-s1 {\n  font-size: 12px;\n  color: #989898;\n}\n\n.black {\n  color: black;\n}\n\n.font-s3 {\n  font-size: 20px;\n  color: #000000;\n}\n\n.btn_pagar {\n  margin-top: 30px;\n  height: 60px;\n  text-transform: inherit;\n  --background: var(--ion-rojo-btn);\n  margin-bottom: 100px;\n}\n\n.content_boton {\n  margin-top: 20px;\n}\n\n.error {\n  color: red;\n}\n\n#forma_envio_content {\n  background-color: #0F0E9F;\n  color: white;\n  padding: 20px;\n  font-size: 12px;\n}\n\n.titulo1_envio {\n  font-size: 20px;\n}\n\n.content_radios {\n  padding: 0;\n}\n\n.right {\n  float: right;\n}\n\n.mt {\n  margin-top: 20px;\n}\n\n.radio {\n  margin: 0.5rem;\n}\n\n.radio input[type=radio] {\n  position: absolute;\n  opacity: 0;\n}\n\n.radio input[type=radio] + .radio-label:before {\n  content: \"\";\n  background: black;\n  border-radius: 100%;\n  display: inline-block;\n  width: 1.4em;\n  height: 1.4em;\n  position: relative;\n  top: -0.2em;\n  margin-right: 1em;\n  vertical-align: top;\n  cursor: pointer;\n  text-align: center;\n  transition: all 250ms ease;\n}\n\n.radio input[type=radio]:checked + .radio-label:before {\n  background-color: white;\n  box-shadow: inset 0 0 0 6px black;\n}\n\n.radio input[type=radio]:focus + .radio-label:before {\n  outline: none;\n  border-color: white;\n}\n\n.radio input[type=radio]:disabled + .radio-label:before {\n  box-shadow: inset 0 0 0 6px black;\n  border-color: black;\n  background: black;\n}\n\n.radio input[type=radio] + .radio-label:empty:before {\n  margin-right: 0;\n}\n\n#splash {\n  height: 100vh;\n  background-color: #ffffff;\n  width: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  display: none;\n}\n\n#content_letras {\n  font-size: 35px;\n  margin-top: 113px;\n  margin-left: 56px;\n  color: #0F0E9F;\n}\n\n#splash.quitSplash {\n  display: block;\n  top: 100%;\n  opacity: 1;\n  transition-duration: 0.6s;\n  top: 0;\n}\n\n.circulo {\n  width: 150px;\n  height: 150px;\n  border: 2px solid #DD0330;\n  color: #00257C;\n  border-radius: 50%;\n  margin-top: 50px;\n  margin-left: 56px;\n  text-align: center;\n}\n\n.texto_circulo {\n  position: relative;\n  top: calc(50% - 8px);\n  text-align: center;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NoZWNrb3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLGFBQUE7QUFFWDs7QUFEQTtFQUFpQixlQUFBO0VBQWdCLGdCQUFBO0VBQWlCLFlBQUE7QUFPbEQ7O0FBTkE7RUFBYyxxQkFBQTtFQUFzQixzQkFBQTtBQVdwQzs7QUFWQTtFQUFjLGlCQUFBO0VBQWtCLHlCQUFBO0VBQTBCLGVBQUE7QUFnQjFEOztBQWZBO0VBQVMsZ0JBQUE7RUFBaUIsZUFBQTtBQW9CMUI7O0FBakJBOztFQUVJLHlCQUFBO0FBb0JKOztBQWxCQTtFQUNJLHVCQUFBO0FBcUJKOztBQWhCQTtFQUFTLGVBQUE7RUFBZ0IsY0FBQTtBQXFCekI7O0FBcEJBO0VBQU8sWUFBQTtBQXdCUDs7QUF2QkE7RUFBUyxlQUFBO0VBQWdCLGNBQUE7QUE0QnpCOztBQTNCQTtFQUFXLGdCQUFBO0VBQWtCLFlBQUE7RUFBYSx1QkFBQTtFQUF3QixpQ0FBQTtFQUFtQyxvQkFBQTtBQW1Dckc7O0FBbENBO0VBQWUsZ0JBQUE7QUFzQ2Y7O0FBckNBO0VBQU8sVUFBQTtBQXlDUDs7QUF4Q0E7RUFBcUIseUJBQUE7RUFBMEIsWUFBQTtFQUFZLGFBQUE7RUFBYyxlQUFBO0FBK0N6RTs7QUE5Q0E7RUFBZSxlQUFBO0FBa0RmOztBQWpEQTtFQUFnQixVQUFBO0FBcURoQjs7QUFwREE7RUFBTyxZQUFBO0FBd0RQOztBQXZEQTtFQUFJLGdCQUFBO0FBMkRKOztBQTFERztFQUNDLGNBQUE7QUE2REo7O0FBNURJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBOEROOztBQTVEUTtFQUNFLFdBQUE7RUFDQSxpQkEvQkQ7RUFnQ0MsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBOERWOztBQXpEVTtFQUNFLHVCQS9DSDtFQWdERyxpQ0FBQTtBQTJEWjs7QUFyRFU7RUFDRSxhQUFBO0VBQ0EsbUJBeERIO0FBK0dUOztBQWpEVTtFQUNFLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQW1EWjs7QUE3Q1U7RUFDRSxlQUFBO0FBK0NaOztBQXpDQTtFQUFRLGFBQUE7RUFBYyx5QkFBQTtFQUEwQixXQUFBO0VBQVksZUFBQTtFQUFnQixPQUFBO0VBQVEsTUFBQTtFQUFPLFdBQUE7RUFBWSxhQUFBO0FBb0R2Rzs7QUFuREE7RUFBZ0IsZUFBQTtFQUFnQixpQkFBQTtFQUFrQixpQkFBQTtFQUFrQixjQUFBO0FBMERwRTs7QUF6REE7RUFBbUIsY0FBQTtFQUFjLFNBQUE7RUFBVSxVQUFBO0VBQVcseUJBQUE7RUFBMEIsTUFBQTtBQWlFaEY7O0FBaEVBO0VBQVMsWUFBQTtFQUFhLGFBQUE7RUFBZSx5QkFBQTtFQUEyQixjQUFBO0VBQWdCLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLGlCQUFBO0VBQWtCLGtCQUFBO0FBMkV4STs7QUExRUE7RUFBZSxrQkFBQTtFQUFvQixvQkFBQTtFQUFzQixrQkFBQTtFQUEwRiwyQkFBQTtBQW1GbkoiLCJmaWxlIjoiY2hlY2tvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZGRpbmczMHtwYWRkaW5nOjMwcHh9XG4udGl0dWxvX2NoZWNrb3V0e2ZvbnQtc2l6ZTogMjBweDttYXJnaW4tdG9wOiAyMHB4O2NvbG9yOiBibGFjazt9XG4uaW5saW5lLWJsb2Nre2Rpc3BsYXk6IGlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO31cbi50eHRfcmVnaXN0cm97bWFyZ2luLWxlZnQ6IDIwcHg7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtmb250LXNpemU6IDEycHg7fVxuaW9uLWl0ZW17bWFyZ2luLXRvcDogMTVweDtmb250LXNpemU6IDIwcHg7fVxuJGNvbG9yMTogYmxhY2s7XG4kY29sb3IyOiB3aGl0ZTtcbmlvbi1pdGVtLml0ZW0taGFzLWZvY3VzID4gaW9uLWxhYmVsLFxuaW9uLWl0ZW0uaXRlbS1oYXMtdmFsdWUgPiBpb24tbGFiZWx7XG4gICAgY29sb3I6ICM3MDcwNzAgIWltcG9ydGFudDtcbn1cbmlvbi1pdGVtID4gaW9uLWxhYmVse1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICB9XG4vLyBpb24taXRlbS5pdGVtLWhhcy12YWx1ZXtcbi8vICAgICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiByZWQ7XG4vLyB9XG4uZm9udC1zMXtmb250LXNpemU6IDEycHg7Y29sb3I6ICM5ODk4OTg7fVxuLmJsYWNre2NvbG9yOiBibGFjazt9XG4uZm9udC1zM3tmb250LXNpemU6IDIwcHg7Y29sb3I6ICMwMDAwMDA7fVxuLmJ0bl9wYWdhcnttYXJnaW4tdG9wOiAzMHB4OyBoZWlnaHQ6IDYwcHg7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDsgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tcm9qby1idG4pOyBtYXJnaW4tYm90dG9tOiAxMDBweDt9XG4uY29udGVudF9ib3RvbnttYXJnaW4tdG9wOiAyMHB4O31cbi5lcnJvcntjb2xvcjpyZWQ7fVxuI2Zvcm1hX2VudmlvX2NvbnRlbnR7YmFja2dyb3VuZC1jb2xvcjogIzBGMEU5Rjtjb2xvcjp3aGl0ZTtwYWRkaW5nOiAyMHB4O2ZvbnQtc2l6ZTogMTJweDt9XG4udGl0dWxvMV9lbnZpb3tmb250LXNpemU6IDIwcHg7fVxuLmNvbnRlbnRfcmFkaW9ze3BhZGRpbmc6MDt9XG4ucmlnaHR7ZmxvYXQ6IHJpZ2h0O31cbi5tdHttYXJnaW4tdG9wOiAyMHB4O31cbiAgIC5yYWRpbyB7XG4gICAgbWFyZ2luOiAwLjVyZW07XG4gICAgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICArIC5yYWRpby1sYWJlbCB7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3IxO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxLjRlbTtcbiAgICAgICAgICBoZWlnaHQ6IDEuNGVtO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IC0wLjJlbTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTsgXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmOmNoZWNrZWQge1xuICAgICAgICArIC5yYWRpby1sYWJlbCB7XG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDZweCAkY29sb3IxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgICsgLnJhZGlvLWxhYmVsIHtcbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3IyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICsgLnJhZGlvLWxhYmVsIHtcbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA2cHggJGNvbG9yMTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRjb2xvcjEsIDI1JSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJGNvbG9yMSwgMjUlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICsgLnJhZGlvLWxhYmVsIHtcbiAgICAgICAgJjplbXB0eSB7XG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuI3NwbGFzaHtoZWlnaHQ6IDEwMHZoO2JhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7d2lkdGg6IDEwMCU7cG9zaXRpb246IGZpeGVkO2xlZnQ6IDA7dG9wOiAwO3otaW5kZXg6IDEwO2Rpc3BsYXk6bm9uZSx9XG4jY29udGVudF9sZXRyYXN7Zm9udC1zaXplOiAzNXB4O21hcmdpbi10b3A6IDExM3B4O21hcmdpbi1sZWZ0OiA1NnB4O2NvbG9yOiAjMEYwRTlGO31cbiNzcGxhc2gucXVpdFNwbGFzaHtkaXNwbGF5OmJsb2NrO3RvcDogMTAwJTtvcGFjaXR5OiAxO3RyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7dG9wOiAwO31cbi5jaXJjdWxve3dpZHRoOiAxNTBweDtoZWlnaHQ6IDE1MHB4OyBib3JkZXI6IDJweCBzb2xpZCAjREQwMzMwOyBjb2xvcjogIzAwMjU3QzsgYm9yZGVyLXJhZGl1czogNTAlOyBtYXJnaW4tdG9wOiA1MHB4OyBtYXJnaW4tbGVmdDogNTZweDt0ZXh0LWFsaWduOiBjZW50ZXI7fVxuLnRleHRvX2NpcmN1bG97cG9zaXRpb246IHJlbGF0aXZlOyB0b3A6IGNhbGMoNTAlIC0gOHB4KTsgdGV4dC1hbGlnbjogY2VudGVyOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9Il19 */";
      /***/
    },

    /***/
    "v3IU":
    /*!*****************************************************!*\
      !*** ./src/app/checkout/checkout-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: CheckoutPageRoutingModule */

    /***/
    function v3IU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutPageRoutingModule", function () {
        return CheckoutPageRoutingModule;
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


      var _checkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./checkout.page */
      "E2Rb");

      var routes = [{
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"]
      }];

      var CheckoutPageRoutingModule = function CheckoutPageRoutingModule() {
        _classCallCheck(this, CheckoutPageRoutingModule);
      };

      CheckoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CheckoutPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=checkout-checkout-module-es5.js.map