(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
    /***/
    "2t07":
    /*!*****************************************************!*\
      !*** ./src/app/register/register-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: RegisterPageRoutingModule */

    /***/
    function t07(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
        return RegisterPageRoutingModule;
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


      var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register.page */
      "b0Bx");

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
      }];

      var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
        _classCallCheck(this, RegisterPageRoutingModule);
      };

      RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegisterPageRoutingModule);
      /***/
    },

    /***/
    "UgDh":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function UgDh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>register</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content>\n  <div class=\"registro\">\n    <div class=\"content_img_txt\">\n      <div class=\"inline-block\"><img src=\"../../assets/images/img_registro.png\" alt=\"img_registro\"></div><div class=\"inline-block txt_registro\"><span>Registro<br>perfil personal</span></div>\n    </div>\n    <br>\n    <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n      <ion-item class=\"closed\" >\n        <ion-label position=\"floating\">Nombres *</ion-label>\n        <ion-input  formControlName=\"nombre\" type=\"text\" required></ion-input>\n      </ion-item>\n      <div class=\"espacios\">\n        <!-- Error messages -->\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && (errorControl.nombre.errors?.required || errorControl.nombre.errors?.maxlength || errorControl.nombre.errors?.minlength || errorControl.nombre.errors?.pattern)\">\n          El Nombre es requerido, mayúsculas, minimo 5 y maximo 40 caractéres.\n        </span>\n      </div>\n      <ion-item >\n        <ion-label position=\"floating\">Nombre(s) faltante </ion-label>\n        <ion-input color=\"light\" formControlName=\"nombre_2\"></ion-input>\n      </ion-item>\n      <div class=\"espacios\">\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.nombre_2.errors?.maxlength\">\n          Campo Nombre 2 maximo 40 caractéres.\n        </span>\n      </div>\n      <ion-item >\n        <ion-label position=\"floating\">Teléfono</ion-label>\n        <ion-input formControlName=\"telefono\" type=\"tel\"></ion-input>\n      </ion-item>\n      <!-- Error messages -->\n      <div class=\"espacios\">\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && (errorControl.telefono.errors?.maxlength || errorControl.telefono.errors?.minlength || errorControl.telefono.errors?.pattern)\">\n          El Teléfono debe ser numérico y tener 10 caractéres.\n        </span>\n      </div>\n      <ion-item >\n        <ion-label position=\"floating\">Celular *</ion-label>\n        <ion-input  formControlName=\"celular\" type=\"tel\"></ion-input>\n      </ion-item>\n       <!-- Error messages -->\n       <div class=\"espacios\">\n        <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && (errorControl.celular.errors?.maxlength || errorControl.celular.errors?.required || errorControl.celular.errors?.minlength || errorControl.celular.errors?.pattern)\">\n          El Celular debe ser numérico y tener 10 caractéres.\n        </span>\n      </div>\n      <ion-item >\n        <ion-label position=\"floating\">Email *</ion-label>\n        <ion-input formControlName=\"mail\" type=\"email\"></ion-input>\n      </ion-item>\n      <!-- Error messages -->\n      <div class=\"espacios\">\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && (errorControl.mail.errors?.required || errorControl.mail.errors?.pattern)\">\n          Campo email requerido y con formato correo@dominio.dominio\n        </span>\n      </div>\n      <ion-item >\n        <ion-label position=\"floating\">Persona Contacto *</ion-label>\n        <ion-input formControlName=\"persona_contacto\"></ion-input>\n      </ion-item>\n      <div class=\"espacios\">\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && (errorControl.persona_contacto.errors?.required || errorControl.persona_contacto.errors?.maxlength || errorControl.persona_contacto.errors?.pattern)\">\n          Campo Persona Contacto requerido solo letras mayusculas y máximo 40 caractéres.\n        </span>\n      </div>\n      <ion-item >\n        <ion-label position=\"floating\">Password *</ion-label>\n        <ion-input formControlName=\"password\" type=\"password\"></ion-input>\n      </ion-item>\n      <!-- Error messages -->\n      <div class=\"espacios\">\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && (errorControl.password.errors?.required || errorControl.password.errors?.minlength)\">\n          Campo Password requerido y minimo 8 caractéres\n        </span>\n      </div>\n      <ion-item >\n        <ion-checkbox mode=\"md\" formControlName=\"myBoolean\" (ionChange)=\"muestraDireccion2()\"></ion-checkbox>\n        <label style=\"color:black;margin-left: 10px;\">Requiere Factura</label>\n      </ion-item>\n      <div class=\"direccion2\" *ngIf=mostrarDireccion1>\n        <div style=\"color:black;margin-top: 15px;margin:15px 0;\">Datos de facturaciòn</div>\n        <ion-item >\n          <ion-label position=\"floating\">RFC *</ion-label>\n          <ion-input formControlName=\"rfc\"></ion-input>\n        </ion-item>\n        <!-- Error messages -->\n        <div class=\"espacios\">\n          <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.rfc.errors?.required || errorControl.rfc.errors?.pattern\">\n            Campo RFC Obligatorio y debe llevar la clabe correcta y en mayusculas.\n          </span>\n        </div>\n        <ion-item >\n          <ion-label position=\"floating\">Uso de CFDI</ion-label>\n          <ion-select formControlName=\"uso_cfdi\" value=\"\">\n            <ion-select-option value=\"\">Selecciona CFDI</ion-select-option>\n            <ion-select-option *ngFor=\"let cfdi of cfdis;let i = index\" value=\"{{cfdi.uso}}\">{{cfdi.descripcion}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <!-- Error messages -->\n        <div class=\"espacios\">\n          <span class=\"error ion-padding\" color=\"danger\" *ngIf=\"isSubmitted && errorControl.uso_cfdi.errors?.required\">\n            Campo CFDI Obligatorio.\n          </span>\n        </div>\n      </div>\n       <div class=\"content_boton\">\n        <ion-button expand=\"full\" class=\"btn_pagar\" type=\"submit\">\n            <ion-label>Registrar</ion-label>\n        </ion-button>\n      </div>\n    </form>\n   \n  </div>\n  <div class=\"content_menu\">\n    <ul>\n      <li>\n        <img src=\"../../assets/images/alertas_menu.png\" (click)=\"onclickNotificaciones()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/ubicacion_menu.png\" (click)=\"onclickUbicaciones()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/reacsa_menu.png\" (click)=\"onclickMenu()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/listado_menu.png\" (click)=\"onclickCategorias()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/usuario_menu.png\" (click)=\"onclickUsuario()\">\n      </li>\n    </ul>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "b0Bx":
    /*!*******************************************!*\
      !*** ./src/app/register/register.page.ts ***!
      \*******************************************/

    /*! exports provided: RegisterPage */

    /***/
    function b0Bx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.page.html */
      "UgDh");
      /* harmony import */


      var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.page.scss */
      "x/mg");
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


      var _services_task_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/task.service */
      "i6c7");
      /* harmony import */


      var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ts-md5/dist/md5 */
      "kScs");
      /* harmony import */


      var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__); //import { AuthService } from '../auth.service';


      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(router, formBuilder, taskService) {
          _classCallCheck(this, RegisterPage);

          this.router = router;
          this.formBuilder = formBuilder;
          this.taskService = taskService;
          this.isSubmitted = false;
          this.tasks = [];
          this.flag = 0; // this.ionicForm = new FormGroup({
          //   nombre: new FormControl()
          // });

          this.ionicForm = this.formBuilder.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[A-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(40)]],
            nombre_2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(40)]],
            telefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10)]],
            celular: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10)]],
            mail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            persona_contacto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[A-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(40)]],
            sucursal: ['1'],
            tipo_empresa: ['1'],
            rfc: ['BUFP910825DE3', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$')]],
            uso_cfdi: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(8)]],
            myBoolean: ['false', []]
          });
        }

        _createClass(RegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.getTask(); // if(this.ionicForm.value.myBoolean == true){
            //   this.mostrarDireccion1 = true;
            // }else{
            //   this.mostrarDireccion1 = false;
            // }

            this.taskService.getCfdi().subscribe(function (cfdis) {
              console.log("cfdis: ", cfdis);
              _this.cfdis = cfdis;
            });
          }
        }, {
          key: "getTask",
          value: function getTask() {
            this.taskService.getAllTasks().subscribe(function (task) {
              console.log("nombre: ", task);
            });
          } // register(form) {
          //   this.authService.register(form.value).subscribe((res) => {
          //     this.router.navigateByUrl('home');
          //   });
          //}

        }, {
          key: "muestraDireccion2",
          value: function muestraDireccion2() {
            if (this.ionicForm.value.myBoolean == true) {
              this.mostrarDireccion1 = true;
              this.calle2Required = true; //alert("valor1: "+this.ionicForm.value.calle2)

              this.ionicForm["controls"]["rfc"].reset();
              this.ionicForm["controls"]["uso_cfdi"].reset();
            } else {
              //alert("valor3: "+this.ionicForm.value.calle2)
              this.ionicForm.get('rfc').setValue("BUFP910825DE3");
              this.ionicForm.get('uso_cfdi').setValue("---"); // this.ionicForm.value.rfc="XXXX000000XX3";
              // this.ionicForm.value.uso_cfdi="XXX";

              this.mostrarDireccion1 = false;
              this.calle2Required = false;
            }
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this2 = this;

            this.isSubmitted = true;
            console.log(this.ionicForm.valid);
            console.log(this.ionicForm.value.myBoolean);

            if (!this.ionicForm.valid) {
              console.log('Please provide all the required values!');
              return false;
            } else {
              //alert('Form Completed' + this.ionicForm.value)
              this.ionicForm.value.password = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__["Md5"].hashStr(this.ionicForm.value.password);
              var usrMail = this.ionicForm.value.mail;
              var task = {
                nombre: this.ionicForm.value.nombre,
                nombre_2: this.ionicForm.value.nombre2,
                telefono: this.ionicForm.value.telefono,
                celular: this.ionicForm.value.celular,
                mail: this.ionicForm.value.mail,
                persona_contacto: this.ionicForm.value.personaContacto,
                sucursal: this.ionicForm.value.sucursal,
                tipo_empresa: this.ionicForm.value.tipoEmpresa,
                rfc: this.ionicForm.value.rfc,
                persona_fisica: this.ionicForm.value.persona_fisica,
                password: this.ionicForm.value.password,
                status: "0",
                uso_cfdi: this.ionicForm.value.uso_cfdi
              };
              this.taskService.createTask(task).subscribe(function (reply) {
                alert("Tus datos han sido guardados correctamente");

                _this2.taskService.sendMailUsr(usrMail).subscribe(function (sendMail) {
                  console.log("Tus datos han sido guardados correctamente");
                }, function (err) {
                  console.log(err);
                });
              }, function (err) {
                console.log(err);
              });
              this.router.navigate(['/principal']); // this.taskService.createTask(task)
              // 	.subscribe((newTask) => {
              //      // do happy stuff
              //      alert("Tus datos han sido guardados correctamente")
              //     }, (err) => {
              //       // do alerty stuff
              //       alert(err)
              //     });
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
            this.router.navigate(['/register']);
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

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _services_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"]
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegisterPage);
      /***/
    },

    /***/
    "x/mg":
    /*!*********************************************!*\
      !*** ./src/app/register/register.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function xMg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".registro {\n  padding: 30px;\n  margin-bottom: 100px;\n}\n\n.inline-block {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.txt_registro {\n  margin-left: 20px;\n  text-transform: uppercase;\n  font-size: 12px;\n  color: black;\n}\n\nion-select {\n  padding-bottom: 15px;\n}\n\nion-item > ion-label {\n  color: black !important;\n}\n\nion-item.item-has-focus > ion-label,\nion-item.item-has-value > ion-label {\n  color: black !important;\n}\n\n.btn_pagar {\n  margin-top: 30px;\n  height: 60px;\n  text-transform: inherit;\n  --background: var(--ion-rojo-btn);\n  margin-bottom: 100px;\n}\n\n.content_boton {\n  padding: 0 30px;\n  margin-top: 20px;\n}\n\n.error {\n  color: red;\n}\n\n.espacios {\n  margin: 7px 0;\n  display: inline-block;\n}\n\nion-checkbox {\n  --background:white;\n  --background-checked:white;\n  --border-color:#e3e4e7;\n  --border-color-checked:#e3e4e7;\n  --checkmark-color:black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFVLGFBQUE7RUFBYSxvQkFBQTtBQUd2Qjs7QUFGQTtFQUFjLHFCQUFBO0VBQXNCLHNCQUFBO0FBT3BDOztBQU5BO0VBQWMsaUJBQUE7RUFBa0IseUJBQUE7RUFBMEIsZUFBQTtFQUFnQixZQUFBO0FBYTFFOztBQVhBO0VBQVcsb0JBQUE7QUFlWDs7QUFkQTtFQUNJLHVCQUFBO0FBaUJKOztBQWZBOztFQUVJLHVCQUFBO0FBa0JKOztBQWhCQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUFhLHVCQUFBO0VBQ2IsaUNBQUE7RUFDQSxvQkFBQTtBQW9CSjs7QUFsQkE7RUFBZSxlQUFBO0VBQWdCLGdCQUFBO0FBdUIvQjs7QUF0QkE7RUFBTyxVQUFBO0FBMEJQOztBQXpCQTtFQUFVLGFBQUE7RUFBYSxxQkFBQTtBQThCdkI7O0FBN0JBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQWdDSiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0cm97cGFkZGluZzozMHB4O21hcmdpbi1ib3R0b206IDEwMHB4O31cbi5pbmxpbmUtYmxvY2t7ZGlzcGxheTogaW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7fVxuLnR4dF9yZWdpc3Ryb3ttYXJnaW4tbGVmdDogMjBweDt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO2ZvbnQtc2l6ZTogMTJweDtjb2xvcjpibGFja31cblxuaW9uLXNlbGVjdHtwYWRkaW5nLWJvdHRvbTogMTVweDt9XG5pb24taXRlbSA+IGlvbi1sYWJlbHtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgfVxuaW9uLWl0ZW0uaXRlbS1oYXMtZm9jdXMgPiBpb24tbGFiZWwsXG5pb24taXRlbS5pdGVtLWhhcy12YWx1ZSA+IGlvbi1sYWJlbHtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbi5idG5fcGFnYXJ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBoZWlnaHQ6IDYwcHg7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1yb2pvLWJ0bik7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG4uY29udGVudF9ib3RvbntwYWRkaW5nOiAwIDMwcHg7bWFyZ2luLXRvcDogMjBweDt9XG4uZXJyb3J7Y29sb3I6cmVkO31cbi5lc3BhY2lvc3ttYXJnaW46N3B4IDA7ZGlzcGxheTogaW5saW5lLWJsb2NrO31cbmlvbi1jaGVja2JveHtcbiAgICAtLWJhY2tncm91bmQ6d2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6d2hpdGU7XG4gICAgLS1ib3JkZXItY29sb3I6I2UzZTRlNztcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiNlM2U0ZTc7XG4gICAgLS1jaGVja21hcmstY29sb3I6YmxhY2s7XG59Il19 */";
      /***/
    },

    /***/
    "x5bZ":
    /*!*********************************************!*\
      !*** ./src/app/register/register.module.ts ***!
      \*********************************************/

    /*! exports provided: RegisterPageModule */

    /***/
    function x5bZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
        return RegisterPageModule;
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


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./register-routing.module */
      "2t07");
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register.page */
      "b0Bx");

      var RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
      })], RegisterPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=register-register-module-es5.js.map