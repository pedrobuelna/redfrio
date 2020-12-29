(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>checkout</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div id=\"splash\" #splash >\n    <div id=\"content_letras\">\n      Gracias! <br>\n      Su orden ya <br>\n      se procesa.\n    </div>\n    <div class=\"circulo\" (click)=\"onclickMenu()\">\n      <span class=\"texto_circulo\">Regresa a Reacsa</span>\n    </div>\n  </div>\n  <div class=\"content_checkout\">\n    <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n      <div class=\"formulario padding30\">\n        <div class=\"titulo_checkout\">Checkout</div>\n        <br>\n        <ion-item color=\"light\" class=\"closed\">\n          <ion-label position=\"floating\">Nombres *</ion-label>\n          <ion-input formControlName=\"nombre\" type=\"text\" required ></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.nombre.errors?.required\">\n          Campo nombre requerido.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.nombre.errors?.minlength\">\n          El nombre debe tener minimo 2 caractéres.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Apellido(s) *</ion-label>\n          <ion-input formControlName=\"apellido\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.apellido.errors?.required\">\n          Campo Apellido requerido.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.apellido.errors?.minlength\">\n          El Apellido debe tener minimo 2 caractéres.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Calle *</ion-label>\n          <ion-input formControlName=\"calle\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.calle.errors?.required\">\n          Campo Calle requerido.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.calle.errors?.minlength\">\n          El campo Calle debe tener minimo 2 caractéres.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Numero Exterior *</ion-label>\n          <ion-input formControlName=\"numeroExterior\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.numeroExterior.errors?.required\">\n          Campo Numero Exterior requerido.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.numeroExterior.errors?.maxlength\">\n          El campo Numero Exterior debe tener maximo 10 caractéres.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.numeroExterior.errors?.pattern\">\n          El Celular debe tener solo numeros.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Numero Interior</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Colonia *</ion-label>\n          <ion-input formControlName=\"colonia\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.colonia.errors?.required\">\n          Campo Colonia requerido.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Código Postal</ion-label>\n          <ion-input formControlName=\"cp\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.cp.errors?.pattern\">\n          El codigo postal debe tener solo numeros.\n        </span>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.cp.errors?.required\">\n          Campo codigo postal requerido.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.cp.errors?.minlength\">\n          El codigo postal debe tener minimo 5 caractéres.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.cp.errors?.maxlength\">\n          El codigo postal debe tener maximo 5 caractéres.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Población *</ion-label>\n          <ion-select formControlName=\"poblacion\">\n            <ion-select-option value=\"brown\">Mazatlan</ion-select-option>\n            <ion-select-option value=\"blonde\">Culiacan</ion-select-option>\n            <ion-select-option value=\"black\">Navolato</ion-select-option>\n            <ion-select-option value=\"red\">Escuinapa</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.poblacion.errors?.required\">\n          Campo Población requerido.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Télefono</ion-label>\n          <ion-input formControlName=\"telefono\"></ion-input>\n        </ion-item>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Ceular</ion-label>\n          <ion-input formControlName=\"celular\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.celular.errors?.required\">\n          Campo Celular postal requerido.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.celular.errors?.minlength\">\n          El Celular debe tener minimo 10 caractéres.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.celular.errors?.maxlength\">\n          El Celular debe tener maximo 10 caractéres.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.celular.errors?.pattern\">\n          El Celular debe tener solo numeros.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Estado *</ion-label>\n          <ion-select formControlName=\"estado\">\n            <ion-select-option value=\"\">Selecciona Estado</ion-select-option>\n            <ion-select-option value=\"brown\">Sinaloa</ion-select-option>\n            <ion-select-option value=\"blonde\">Sonora</ion-select-option>\n            <ion-select-option value=\"black\">Coahuila</ion-select-option>\n            <ion-select-option value=\"red\">Nuevo Leon</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.estado.errors?.required\">\n          Campo Estado requerido.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Télefono </ion-label>\n          <ion-input formControlName=\"telefono\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.telefono.errors?.minlength\">\n          El Telefono debe tener minimo 10 caractéres.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.telefono.errors?.pattern\">\n          El Telefono debe tener solo numeros.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Celuar *</ion-label>\n          <ion-input formControlName=\"celular2\"></ion-input>\n        </ion-item>\n        <ion-item color=\"light\">\n          <ion-label position=\"floating\">Correo *</ion-label>\n          <ion-input formControlName=\"correo\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.correo.errors?.required || errorControl.correo.errors?.pattern\">\n          El campo correo debe ser obligatorio y con el formato correo@cominio.com\n        </span>\n        <ion-item color=\"light\">\n          <ion-label position=\"floating\">Persona de contacto</ion-label>\n          <ion-input formControlName=\"personaContacto\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.personaContacto.errors?.required || errorControl.personaContacto.errors?.pattern\">\n          El campo contacto debe ser obligatorio con mayusculas y sin acentos\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Sucursal *</ion-label>\n          <ion-select>\n            <ion-select-option value=\"\">Selecciona Estado</ion-select-option>\n            <ion-select-option value=\"brown\">Sinaloa</ion-select-option>\n            <ion-select-option value=\"blonde\">Sonora</ion-select-option>\n            <ion-select-option value=\"black\">Coahuila</ion-select-option>\n            <ion-select-option value=\"red\">Nuevo Leon</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Tipo de Empresa *</ion-label>\n          <ion-select formControlName=\"estado\">\n            <ion-select-option value=\"\">Selecciona Estado</ion-select-option>\n            <ion-select-option value=\"brown\">Sinaloa</ion-select-option>\n            <ion-select-option value=\"blonde\">Sonora</ion-select-option>\n            <ion-select-option value=\"black\">Coahuila</ion-select-option>\n            <ion-select-option value=\"red\">Nuevo Leon</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item color=\"light\">\n          <ion-label position=\"floating\">Lista Precio ID</ion-label>\n          <ion-input ></ion-input>\n        </ion-item>\n        <br>\n        <div class=\"titulo_checkout\">Direccion de Entrega</div>\n        <br>\n        <ion-item color=\"light\" >\n          <ion-checkbox mode=\"md\" color=\"light\" formControlName=\"myBoolean\" (ionChange)=\"muestraDireccion2()\"></ion-checkbox>\n          <label style=\"color:black;margin-left: 10px;\">Agregar otra dirección</label>\n        </ion-item>\n        <br><br>\n        <div class=\"direccion2\" *ngIf=mostrarDireccion1>\n          <label style=\"color:black;\">DIRECCIÓN 2 </label>\n          <br><br>\n          <ion-item color=\"light\">\n            <ion-label position=\"floating\">Calle2</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n          <ion-item color=\"light\">\n            <ion-label position=\"floating\">Numero Exterior</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n          <ion-item color=\"light\">\n            <ion-label position=\"floating\">Numero Interior</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n          <ion-item color=\"light\">\n            <ion-label position=\"floating\">Colonia</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n          <ion-item color=\"light\">\n            <ion-label position=\"floating\">CP</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n          <ion-item color=\"light\" >\n            <ion-label position=\"floating\">Población</ion-label>\n            <ion-select>\n              <ion-select-option value=\"brown\">Mazatlan</ion-select-option>\n              <ion-select-option value=\"blonde\">Culiacan</ion-select-option>\n              <ion-select-option value=\"black\">Navolato</ion-select-option>\n              <ion-select-option value=\"red\">Escuinapa</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item color=\"light\" >\n            <ion-label position=\"floating\">Estado</ion-label>\n            <ion-select formControlName=\"estado\">\n              <ion-select-option value=\"\">Selecciona Estado</ion-select-option>\n              <ion-select-option value=\"brown\">Sinaloa</ion-select-option>\n              <ion-select-option value=\"blonde\">Sonora</ion-select-option>\n              <ion-select-option value=\"black\">Coahuila</ion-select-option>\n              <ion-select-option value=\"red\">Nuevo Leon</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n        <ion-item color=\"light\" >\n          <ion-checkbox mode=\"md\" color=\"light\" formControlName=\"myBoolean2\" (ionChange)=\"muestraFactura()\"></ion-checkbox>\n          <label style=\"color:black;margin-left: 10px;\">Solicitar Factura</label>\n        </ion-item>\n        <div class=\"direccion2\" *ngIf=mostrarFactura>\n          <ion-item color=\"light\">\n            <ion-label position=\"floating\">RFC *</ion-label>\n            <ion-input formControlName=\"rfc\"></ion-input>\n          </ion-item>\n          <!-- Error messages -->\n          <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.rfc.errors?.required || errorControl.rfc.errors?.pattern\">\n            Campo RFC Obligatorio y debe llevar la clabe correcta.\n          </span>\n          <ion-item color=\"light\">\n            <ion-label position=\"floating\">Colonia</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n          <ion-item color=\"light\" >\n            <ion-checkbox mode=\"md\" color=\"light\"></ion-checkbox>\n            <label style=\"color:black;margin-left: 10px;\">Soy persona fisica</label>\n          </ion-item>\n          <ion-item color=\"light\">\n            <ion-label position=\"floating\">Uso de CFDI</ion-label>\n            <ion-select value=\"G03\">\n              <ion-select-option value=\"G03\">G03</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n      </div>\n      \n      <div id=\"forma_envio_content\">\n        <div class=\"forma_envio_subcontent\">\n          <div class=\"titulo1_envio\">Forma de envio</div>\n          <br>\n          <div class=\"content_radios1\">\n            <div class=\"radio\">\n              <input id=\"radio-12\" name=\"radio1\" type=\"radio\" checked>\n              <label for=\"radio-12\" class=\"radio-label\">DHL Standard (5 - 19 dias)</label>\n              <span class=\"right\">$0</span>\n            </div>\n            <br>\n            <div class=\"radio\">\n              <input id=\"radio-22\" name=\"radio1\" type=\"radio\">\n              <label  for=\"radio-22\" class=\"radio-label\">DHL Express (2 - 5 dias)</label>\n              <span class=\"right\">$20</span>\n            </div>\n        </div>\n        </div>\n        <div class=\"forma_pago_subcontent radios\">\n          <div class=\"titulo1_envio mt\">Forma de pago</div>\n          <br><br>\n          <div class=\"radio\" style=\"width: 50%;display: inline-block;margin: 0;text-align: center;\">\n            <input id=\"radio-1\" name=\"radio\" type=\"radio\" checked>\n            <label for=\"radio-1\" class=\"radio-label\">Credito/Debito</label>\n          </div><div class=\"radio\" style=\"width: 50%;display: inline-block;margin: 0;text-align: center;\">\n            <input id=\"radio-2\" name=\"radio\" type=\"radio\">\n            <label for=\"radio-2\" class=\"radio-label\">Paypal</label>\n          </div>\n        </div>\n      </div>\n      <div class=\"formulario padding30\">\n        <ion-item color=\"light\" class=\"closed\">\n          <ion-label position=\"floating\">Nombre en tarjeta *</ion-label>\n          <ion-input type=\"text\" formControlName=\"nombreTarjeta\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.nombreTarjeta.errors?.pattern\">\n          El Nombre de tarjeta debe tener solo letras.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.nombreTarjeta.errors?.required\">\n          Campo Nombre de tarjeta es requerido.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.nombreTarjeta.errors?.minlength\">\n          El Nombre de tarjeta debe tener minimo 3 caractéres.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.nombreTarjeta.errors?.maxlength\">\n          El Nombre de tarjeta debe tener maximo 3 caractéres.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Numero de tarjeta *</ion-label>\n          <ion-input formControlName=\"numeroTarjeta\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.numeroTarjeta.errors?.required\">\n          Campo Nombre de tarjeta es requerido.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.numeroTarjeta.errors?.pattern\">\n          El Nombre de tarjeta debe tener solo numeros.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.numeroTarjeta.errors?.minlength\">\n          El Nombre de tarjeta debe tener minimo 3 caractéres.\n        </span>\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.numeroTarjeta.errors?.maxlength\">\n          El Nombre de tarjeta debe tener maximo 3 caractéres.\n        </span> \n        <ion-item color=\"light\">\n          <ion-label position=\"floating\">Fecha de Expiracion (DD)*</ion-label>\n          <ion-select formControlName=\"fechaDiaTarjeta\">\n            <ion-select-option value=\"brown\">01</ion-select-option>\n            <ion-select-option value=\"blonde\">02</ion-select-option>\n            <ion-select-option value=\"black\">03</ion-select-option>\n            <ion-select-option value=\"red\">04</ion-select-option>\n            <ion-select-option value=\"red\">05</ion-select-option>\n            <ion-select-option value=\"red\">06</ion-select-option>\n            <ion-select-option value=\"red\">07</ion-select-option>\n            <ion-select-option value=\"red\">08</ion-select-option>\n            <ion-select-option value=\"red\">09</ion-select-option>\n            <ion-select-option value=\"red\">10</ion-select-option>\n            <ion-select-option value=\"red\">11</ion-select-option>\n            <ion-select-option value=\"red\">12</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.fechaDiaTarjeta.errors?.required\">\n          Campo Fecha de Expiracion DD de tarjeta es requerido.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Fecha de Expiracion (MM)*</ion-label>\n          <ion-select formControlName=\"fechaMesTarjeta\">\n            <ion-select-option value=\"brown\">01</ion-select-option>\n            <ion-select-option value=\"blonde\">02</ion-select-option>\n            <ion-select-option value=\"black\">03</ion-select-option>\n            <ion-select-option value=\"red\">04</ion-select-option>\n            <ion-select-option value=\"red\">05</ion-select-option>\n            <ion-select-option value=\"red\">06</ion-select-option>\n            <ion-select-option value=\"red\">07</ion-select-option>\n            <ion-select-option value=\"red\">08</ion-select-option>\n            <ion-select-option value=\"red\">09</ion-select-option>\n            <ion-select-option value=\"red\">10</ion-select-option>\n            <ion-select-option value=\"red\">11</ion-select-option>\n            <ion-select-option value=\"red\">12</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.fechaMesTarjeta.errors?.required\">\n          Campo Fecha de Expiracion MM de tarjeta es requerido.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Año *</ion-label>\n          <ion-select formControlName=\"fechaAnoTarjeta\">\n            <ion-select-option value=\"20\">2020</ion-select-option>\n            <ion-select-option value=\"21\">2021</ion-select-option>\n            <ion-select-option value=\"22\">2022</ion-select-option>\n            <ion-select-option value=\"23\">2023</ion-select-option>\n            <ion-select-option value=\"24\">2024</ion-select-option>\n            <ion-select-option value=\"25\">2025</ion-select-option>\n            <ion-select-option value=\"26\">2026</ion-select-option>\n            <ion-select-option value=\"27\">2027</ion-select-option>\n            <ion-select-option value=\"28\">2028</ion-select-option>\n          </ion-select>\n        </ion-item>\n         <!-- Error messages -->\n         <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.fechaAnoTarjeta.errors?.required\">\n          Campo Año de tarjeta es requerido.\n        </span>\n        <ion-item color=\"light\" >\n          <ion-label position=\"floating\">Codigo de seguridad (CVV) *</ion-label>\n          <ion-input formControlName=\"cvvTarjeta\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <!-- <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.cvvTarjeta.errors?.pattern\">\n          El CVV debe tener solo numeros.\n        </span> -->\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.cvvTarjeta.errors?.required || errorControl.cvvTarjeta.errors?.pattern || errorControl.cvvTarjeta.errors?.minlength || errorControl.cvvTarjeta.errors?.maxlength\">\n          Campo CVV requerido y tener solo 3 numeros.\n        </span>\n        <!-- <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.cvvTarjeta.errors?.minlength\">\n          El CVV debe tener minimo 3 caractéres.\n        </span> -->\n        <!-- <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.cvvTarjeta.errors?.maxlength\">\n          El CVV debe tener maximo 3 caractéres.\n        </span> -->\n        <br><br>\n        <div class=\"titulo_checkout\">Order Summary</div>\n        <br><br>\n        <ion-grid>\n          <ion-row class=\"font-s1\">\n            <ion-col>\n              <div class=\"ion-text-left\">\n                Subtotal\n              </div>\n            </ion-col>\n            <ion-col>\n              <div class=\"ion-text-right black\">\n                $1,320\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"font-s1\">\n            <ion-col>\n              <div>\n                Shipping UPS 2-Day Deliver\n              </div>\n            </ion-col>\n            <ion-col>\n              <div class=\"ion-text-right black\">\n                $20\n              </div>\n            </ion-col>\n          </ion-row>\n          <br>\n          <ion-row class=\"font-s1\">\n            <ion-col>\n              <div>\n                Tax\n              </div>\n            </ion-col>\n            <ion-col>\n              <div class=\"ion-text-right black\">\n                $132\n              </div>\n            </ion-col>\n          </ion-row>\n          <br>\n          <ion-row class=\"font-s2\">\n            <ion-col>\n              <div>\n                Total\n              </div>\n            </ion-col>\n            <ion-col>\n              <div class=\"ion-text-right\">\n                $1,472\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <div class=\"content_boton\">\n        <ion-button expand=\"full\" class=\"btn_pagar\" type=\"subtmi\">\n          <ion-label style=\"position: absolute;left:10px\">$1,472</ion-label>\n          <ion-label style=\"position: absolute;right:10px\">Comprar</ion-label>\n        </ion-button>\n      </div>\n    </form>\n  </div>\n</ion-content>\n<div class=\"content_menu\">\n  <ul>\n    <li>\n      <img src=\"../../assets/images/alertas_menu.png\" (click)=\"onclickNotificaciones()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/ubicacion_menu.png\" (click)=\"onclickUbicaciones()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/reacsa_menu.png\" (click)=\"onclickMenu()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/listado_menu.png\" (click)=\"onclickCategorias()\">\n    </li>\n    <li>\n      <img src=\"../../assets/images/usuario_menu.png\" (click)=\"onclickUsuario()\">\n    </li>\n  </ul>\n</div>\n\n");

/***/ }),

/***/ "./src/app/checkout/checkout-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/checkout/checkout-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CheckoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageRoutingModule", function() { return CheckoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout.page */ "./src/app/checkout/checkout.page.ts");




const routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"]
    }
];
let CheckoutPageRoutingModule = class CheckoutPageRoutingModule {
};
CheckoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckoutPageRoutingModule);



/***/ }),

/***/ "./src/app/checkout/checkout.module.ts":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout-routing.module */ "./src/app/checkout/checkout-routing.module.ts");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "./src/app/checkout/checkout.page.ts");







let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageRoutingModule"]
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
    })
], CheckoutPageModule);



/***/ }),

/***/ "./src/app/checkout/checkout.page.scss":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".padding30 {\n  padding: 30px;\n}\n\n.titulo_checkout {\n  font-size: 20px;\n  margin-top: 20px;\n  color: black;\n}\n\n.inline-block {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.txt_registro {\n  margin-left: 20px;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n\nion-item {\n  margin-top: 15px;\n  font-size: 20px;\n}\n\nion-item.item-has-focus > ion-label,\nion-item.item-has-value > ion-label {\n  color: #707070 !important;\n}\n\nion-item > ion-label {\n  color: black !important;\n}\n\n.font-s1 {\n  font-size: 12px;\n  color: #989898;\n}\n\n.black {\n  color: black;\n}\n\n.font-s3 {\n  font-size: 20px;\n  color: #000000;\n}\n\n.btn_pagar {\n  margin-top: 30px;\n  height: 60px;\n  text-transform: inherit;\n  --background: var(--ion-rojo-btn);\n  margin-bottom: 100px;\n}\n\n.content_boton {\n  margin-top: 20px;\n}\n\n.error {\n  color: red;\n}\n\n#forma_envio_content {\n  background-color: #0F0E9F;\n  color: white;\n  padding: 20px;\n  font-size: 12px;\n}\n\n.titulo1_envio {\n  font-size: 20px;\n}\n\n.content_radios {\n  padding: 0;\n}\n\n.right {\n  float: right;\n}\n\n.mt {\n  margin-top: 20px;\n}\n\n.radio {\n  margin: 0.5rem;\n}\n\n.radio input[type=radio] {\n  position: absolute;\n  opacity: 0;\n}\n\n.radio input[type=radio] + .radio-label:before {\n  content: \"\";\n  background: black;\n  border-radius: 100%;\n  display: inline-block;\n  width: 1.4em;\n  height: 1.4em;\n  position: relative;\n  top: -0.2em;\n  margin-right: 1em;\n  vertical-align: top;\n  cursor: pointer;\n  text-align: center;\n  transition: all 250ms ease;\n}\n\n.radio input[type=radio]:checked + .radio-label:before {\n  background-color: white;\n  box-shadow: inset 0 0 0 6px black;\n}\n\n.radio input[type=radio]:focus + .radio-label:before {\n  outline: none;\n  border-color: white;\n}\n\n.radio input[type=radio]:disabled + .radio-label:before {\n  box-shadow: inset 0 0 0 6px black;\n  border-color: black;\n  background: black;\n}\n\n.radio input[type=radio] + .radio-label:empty:before {\n  margin-right: 0;\n}\n\n#splash {\n  height: 100vh;\n  background-color: #ffffff;\n  width: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  display: none;\n}\n\n#content_letras {\n  font-size: 35px;\n  margin-top: 113px;\n  margin-left: 56px;\n  color: #0F0E9F;\n}\n\n#splash.quitSplash {\n  display: block;\n  top: 100%;\n  opacity: 1;\n  transition-duration: 0.6s;\n  top: 0;\n}\n\n.circulo {\n  width: 150px;\n  height: 150px;\n  border: 2px solid #DD0330;\n  color: #00257C;\n  border-radius: 50%;\n  margin-top: 50px;\n  margin-left: 56px;\n  text-align: center;\n}\n\n.texto_circulo {\n  position: relative;\n  top: calc(50% - 8px);\n  text-align: center;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVcsYUFBQTtBQUVYOztBQURBO0VBQWlCLGVBQUE7RUFBZ0IsZ0JBQUE7RUFBaUIsWUFBQTtBQU9sRDs7QUFOQTtFQUFjLHFCQUFBO0VBQXNCLHNCQUFBO0FBV3BDOztBQVZBO0VBQWMsaUJBQUE7RUFBa0IseUJBQUE7RUFBMEIsZUFBQTtBQWdCMUQ7O0FBZkE7RUFBUyxnQkFBQTtFQUFpQixlQUFBO0FBb0IxQjs7QUFqQkE7O0VBRUkseUJBQUE7QUFvQko7O0FBbEJBO0VBQ0ksdUJBQUE7QUFxQko7O0FBaEJBO0VBQVMsZUFBQTtFQUFnQixjQUFBO0FBcUJ6Qjs7QUFwQkE7RUFBTyxZQUFBO0FBd0JQOztBQXZCQTtFQUFTLGVBQUE7RUFBZ0IsY0FBQTtBQTRCekI7O0FBM0JBO0VBQVcsZ0JBQUE7RUFBa0IsWUFBQTtFQUFhLHVCQUFBO0VBQXdCLGlDQUFBO0VBQW1DLG9CQUFBO0FBbUNyRzs7QUFsQ0E7RUFBZSxnQkFBQTtBQXNDZjs7QUFyQ0E7RUFBTyxVQUFBO0FBeUNQOztBQXhDQTtFQUFxQix5QkFBQTtFQUEwQixZQUFBO0VBQVksYUFBQTtFQUFjLGVBQUE7QUErQ3pFOztBQTlDQTtFQUFlLGVBQUE7QUFrRGY7O0FBakRBO0VBQWdCLFVBQUE7QUFxRGhCOztBQXBEQTtFQUFPLFlBQUE7QUF3RFA7O0FBdkRBO0VBQUksZ0JBQUE7QUEyREo7O0FBMURHO0VBQ0MsY0FBQTtBQTZESjs7QUE1REk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUE4RE47O0FBNURRO0VBQ0UsV0FBQTtFQUNBLGlCQS9CRDtFQWdDQyxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUE4RFY7O0FBekRVO0VBQ0UsdUJBL0NIO0VBZ0RHLGlDQUFBO0FBMkRaOztBQXJEVTtFQUNFLGFBQUE7RUFDQSxtQkF4REg7QUErR1Q7O0FBakRVO0VBQ0UsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBbURaOztBQTdDVTtFQUNFLGVBQUE7QUErQ1o7O0FBekNBO0VBQVEsYUFBQTtFQUFjLHlCQUFBO0VBQTBCLFdBQUE7RUFBWSxlQUFBO0VBQWdCLE9BQUE7RUFBUSxNQUFBO0VBQU8sV0FBQTtFQUFZLGFBQUE7QUFvRHZHOztBQW5EQTtFQUFnQixlQUFBO0VBQWdCLGlCQUFBO0VBQWtCLGlCQUFBO0VBQWtCLGNBQUE7QUEwRHBFOztBQXpEQTtFQUFtQixjQUFBO0VBQWMsU0FBQTtFQUFVLFVBQUE7RUFBVyx5QkFBQTtFQUEwQixNQUFBO0FBaUVoRjs7QUFoRUE7RUFBUyxZQUFBO0VBQWEsYUFBQTtFQUFlLHlCQUFBO0VBQTJCLGNBQUE7RUFBZ0Isa0JBQUE7RUFBb0IsZ0JBQUE7RUFBa0IsaUJBQUE7RUFBa0Isa0JBQUE7QUEyRXhJOztBQTFFQTtFQUFlLGtCQUFBO0VBQW9CLG9CQUFBO0VBQXNCLGtCQUFBO0VBQTBGLDJCQUFBO0FBbUZuSiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkaW5nMzB7cGFkZGluZzozMHB4fVxuLnRpdHVsb19jaGVja291dHtmb250LXNpemU6IDIwcHg7bWFyZ2luLXRvcDogMjBweDtjb2xvcjogYmxhY2s7fVxuLmlubGluZS1ibG9ja3tkaXNwbGF5OiBpbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246IG1pZGRsZTt9XG4udHh0X3JlZ2lzdHJve21hcmdpbi1sZWZ0OiAyMHB4O3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7Zm9udC1zaXplOiAxMnB4O31cbmlvbi1pdGVte21hcmdpbi10b3A6IDE1cHg7Zm9udC1zaXplOiAyMHB4O31cbiRjb2xvcjE6IGJsYWNrO1xuJGNvbG9yMjogd2hpdGU7XG5pb24taXRlbS5pdGVtLWhhcy1mb2N1cyA+IGlvbi1sYWJlbCxcbmlvbi1pdGVtLml0ZW0taGFzLXZhbHVlID4gaW9uLWxhYmVse1xuICAgIGNvbG9yOiAjNzA3MDcwICFpbXBvcnRhbnQ7XG59XG5pb24taXRlbSA+IGlvbi1sYWJlbHtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgfVxuLy8gaW9uLWl0ZW0uaXRlbS1oYXMtdmFsdWV7XG4vLyAgICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogcmVkO1xuLy8gfVxuLmZvbnQtczF7Zm9udC1zaXplOiAxMnB4O2NvbG9yOiAjOTg5ODk4O31cbi5ibGFja3tjb2xvcjogYmxhY2s7fVxuLmZvbnQtczN7Zm9udC1zaXplOiAyMHB4O2NvbG9yOiAjMDAwMDAwO31cbi5idG5fcGFnYXJ7bWFyZ2luLXRvcDogMzBweDsgaGVpZ2h0OiA2MHB4O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7IC0tYmFja2dyb3VuZDogdmFyKC0taW9uLXJvam8tYnRuKTsgbWFyZ2luLWJvdHRvbTogMTAwcHg7fVxuLmNvbnRlbnRfYm90b257bWFyZ2luLXRvcDogMjBweDt9XG4uZXJyb3J7Y29sb3I6cmVkO31cbiNmb3JtYV9lbnZpb19jb250ZW50e2JhY2tncm91bmQtY29sb3I6ICMwRjBFOUY7Y29sb3I6d2hpdGU7cGFkZGluZzogMjBweDtmb250LXNpemU6IDEycHg7fVxuLnRpdHVsbzFfZW52aW97Zm9udC1zaXplOiAyMHB4O31cbi5jb250ZW50X3JhZGlvc3twYWRkaW5nOjA7fVxuLnJpZ2h0e2Zsb2F0OiByaWdodDt9XG4ubXR7bWFyZ2luLXRvcDogMjBweDt9XG4gICAucmFkaW8ge1xuICAgIG1hcmdpbjogMC41cmVtO1xuICAgIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgKyAucmFkaW8tbGFiZWwge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yMTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB3aWR0aDogMS40ZW07XG4gICAgICAgICAgaGVpZ2h0OiAxLjRlbTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAtMC4yZW07XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07IFxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJjpjaGVja2VkIHtcbiAgICAgICAgKyAucmFkaW8tbGFiZWwge1xuICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA2cHggJGNvbG9yMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICArIC5yYWRpby1sYWJlbCB7XG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICArIC5yYWRpby1sYWJlbCB7XG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNnB4ICRjb2xvcjE7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkY29sb3IxLCAyNSUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCRjb2xvcjEsIDI1JSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICArIC5yYWRpby1sYWJlbCB7XG4gICAgICAgICY6ZW1wdHkge1xuICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiNzcGxhc2h7aGVpZ2h0OiAxMDB2aDtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO3dpZHRoOiAxMDAlO3Bvc2l0aW9uOiBmaXhlZDtsZWZ0OiAwO3RvcDogMDt6LWluZGV4OiAxMDtkaXNwbGF5Om5vbmUsfVxuI2NvbnRlbnRfbGV0cmFze2ZvbnQtc2l6ZTogMzVweDttYXJnaW4tdG9wOiAxMTNweDttYXJnaW4tbGVmdDogNTZweDtjb2xvcjogIzBGMEU5Rjt9XG4jc3BsYXNoLnF1aXRTcGxhc2h7ZGlzcGxheTpibG9jazt0b3A6IDEwMCU7b3BhY2l0eTogMTt0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO3RvcDogMDt9XG4uY2lyY3Vsb3t3aWR0aDogMTUwcHg7aGVpZ2h0OiAxNTBweDsgYm9yZGVyOiAycHggc29saWQgI0REMDMzMDsgY29sb3I6ICMwMDI1N0M7IGJvcmRlci1yYWRpdXM6IDUwJTsgbWFyZ2luLXRvcDogNTBweDsgbWFyZ2luLWxlZnQ6IDU2cHg7dGV4dC1hbGlnbjogY2VudGVyO31cbi50ZXh0b19jaXJjdWxve3Bvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiBjYWxjKDUwJSAtIDhweCk7IHRleHQtYWxpZ246IGNlbnRlcjsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfSJdfQ== */");

/***/ }),

/***/ "./src/app/checkout/checkout.page.ts":
/*!*******************************************!*\
  !*** ./src/app/checkout/checkout.page.ts ***!
  \*******************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




let CheckoutPage = class CheckoutPage {
    constructor(router, formBuilder, renderer) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.renderer = renderer;
        this.isSubmitted = false;
        // this.ionicForm = new FormGroup({
        //   nombre: new FormControl()
        // });
        this.mostrarDireccion1 = true;
        this.ionicForm = this.formBuilder.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            apellido: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            calle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            numeroExterior: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]],
            estado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            poblacion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            celular: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]],
            celular2: ['', []],
            myBoolean: ['true', []],
            myBoolean2: ['false', []],
            colonia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            cp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(5)]],
            telefono: ['',],
            //VALIDACION RFC: ^(([ÑA-Z|ña-z|&]{3}|[A-Z|a-z]{4})\d{2}((0[1-9]|1[012])(0[1-9]|1\d|2[0-8])|(0[13456789]|1[012])(29|30)|(0[13578]|1[02])31)(\w{2})([A|a|0-9]{1}))$|^(([ÑA-Z|ña-z|&]{3}|[A-Z|a-z]{4})([02468][048]|[13579][26])0229)(\w{2})([A|a|0-9]{1})$
            rfc: ['BUFP910825DE3', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$')]],
            nombreTarjeta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[A-Z]*')]],
            personaContacto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[A-Z]*')]],
            numeroTarjeta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(16)]],
            fechaDiaTarjeta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(16)]],
            fechaMesTarjeta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(2)]],
            fechaAnoTarjeta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            cvvTarjeta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(3)]],
            correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        });
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    muestraDireccion2() {
        if (this.ionicForm.value.myBoolean == true) {
            this.mostrarDireccion1 = true;
            this.calle2Required = true;
            //alert("valor1: "+this.ionicForm.value.calle2)
            //this.ionicForm["controls"]["calle2"].reset();
            //alert("valor2: "+this.ionicForm.value.calle2)
        }
        else {
            //alert("valor3: "+this.ionicForm.value.calle2)
            this.ionicForm.value.calle2 = "";
            this.mostrarDireccion1 = false;
            this.calle2Required = false;
        }
    }
    muestraFactura() {
        if (this.ionicForm.value.myBoolean2 == true) {
            this.mostrarFactura = true;
            this.ionicForm.value.rfc = true;
            this.ionicForm["controls"]["rfc"].reset();
        }
        else {
            this.ionicForm.get('rfc').setValue("BUFP910825DE3");
            this.mostrarFactura = false;
            // this.ionicForm.value.rfc='x';
        }
        //alert(this.ionicForm.value.rfc)
    }
    addMyClass() {
        //this.myButton.nativeElement.classList.add("my-class"); //BAD PRACTICE
        this.renderer.addClass(this.splash.nativeElement, "quitSplash");
    }
    ngOnInit() {
    }
    submitForm() {
        this.isSubmitted = true;
        //alert("ENVIAR valor RFC: "+this.ionicForm.value.rfc)
        if (!this.ionicForm.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            console.log('Form Completed' + this.ionicForm.value);
            setTimeout(() => {
                this.addMyClass();
            }, 1500);
            setTimeout(() => {
                this.router.navigate(['/principal']);
            }, 200000);
        }
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
        this.router.navigate(['/usuario']);
    }
    onclickProducto() {
        this.router.navigate(['/producto']);
    }
    onClickCarrito() {
        this.router.navigate(['/carrito']);
    }
};
CheckoutPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
CheckoutPage.propDecorators = {
    splash: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["splash",] }]
};
CheckoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./checkout.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./checkout.page.scss */ "./src/app/checkout/checkout.page.scss")).default]
    })
], CheckoutPage);



/***/ })

}]);
//# sourceMappingURL=checkout-checkout-module-es2015.js.map