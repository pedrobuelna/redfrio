(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "34Y5":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function Y5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "V6Ie");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "r67e");
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


      var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(router, navCtrl, formBuilder, taskService, alertController, activatedRoute) {
          _classCallCheck(this, LoginPage);

          this.router = router;
          this.navCtrl = navCtrl;
          this.formBuilder = formBuilder;
          this.taskService = taskService;
          this.alertController = alertController;
          this.activatedRoute = activatedRoute;
          this.isSubmitted = false;
          this.tasks = [];
          this.ionicForm = this.formBuilder.group({
            correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]]
          });
        }

        _createClass(LoginPage, [{
          key: "submitForm",
          value: function submitForm() {
            this.isSubmitted = true;

            if (!this.ionicForm.valid) {
              console.log('Please provide all the required values!');
              return false;
            } else {
              console.log('Form Completed' + this.ionicForm.value);
              this.getLogin();
            }
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'class_alert',
                        //header: 'Alert',
                        //subHeader: 'Subtitle',
                        message: 'Usuario y/o contraseña incorrecta',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getLogin",
          value: function getLogin() {
            var _this = this;

            this.taskService.getLogin(this.ionicForm.value.correo, ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__["Md5"].hashStr(this.ionicForm.value.password)).subscribe(function (data) {
              // do happy stuff
              //task.mail = this.ionicForm.value.mail
              //task.contrasena = this.ionicForm.value.password
              if (data[0] != null) {
                console.log("Existe: " + data);

                _this.navCtrl.navigateRoot(['/principal']);
              } else {
                console.log("No Existe: " + ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__["Md5"].hashStr("57f842f3-2e23-4d03-b1ef-cb5b7dd8e778"));

                _this.presentAlert();
              }
            }, function (err) {
              // do alerty stuff
              alert(err);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "validarLogin",
          value: function validarLogin() {
            // this.authService.register(form.value).subscribe((res) => {
            //   this.router.navigateByUrl('home');
            // });
            this.navCtrl.navigateRoot(['/principal']);
          }
        }, {
          key: "onClickRegister",
          value: function onClickRegister() {
            this.router.navigate(['/register']);
          }
        }, {
          key: "errorControl",
          get: function get() {
            return this.ionicForm.controls;
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _services_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "V6Ie":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function V6Ie(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content>\n  <form id=\"login_form\" [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n    <img src=\"assets/images/logo2.png\" alt=\"logo_login\" class=\"logo2\">\n    <ion-item lines=\"full\" lines=\"none\">\n      <ion-input type=\"email\" formControlName=\"correo\" required class=\"inputs\" placeholder=\"Email\"></ion-input>\n    </ion-item>\n    <!-- Error messages -->\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.correo.errors?.required\">\n      Campo Email requerido.\n    </span>\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.correo.errors?.pattern\">\n      Formato debe ser correo@dominio.com.\n    </span>\n    <ion-item lines=\"full\" lines=\"none\" >\n      <ion-input type=\"password\" formControlName=\"password\" required class=\"inputs\" placeholder=\"Password\"></ion-input>\n    </ion-item>\n    <!-- Error messages -->\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.required\">\n      Campo Password requerido.\n    </span>\n    <span class=\"error ion-padding\"  *ngIf=\"isSubmitted && errorControl.password.errors?.minlength\">\n      El Password debe tener minimo 6 caractéres.\n    </span>\n    <!-- <span class=\"error ion-padding\"  *ngIf=\"isSubmitted && errorControl.password.errors?.pattern\">\n      El Password debe contener 6 caracteres con 1 mayuscula una minuscula y in caracter raro no importa el orden.\n    </span> -->\n    <div id=\"boton_content\">\n      <ion-button type=\"submit\" color=\"color1\">\n        <span class=\"txtBtn1\">Login</span>\n      </ion-button>\n      <!-- <a  [routerLink]=\"['/forgot-password']\" class=\"small-text\">Forgot Password?</a> -->\n      <!-- <ion-button type=\"submit\" size=\"small\"  >\n        \n      </ion-button> -->\n      <ion-router-link class=\"link1 ion-float-right mt10\">Ayuda</ion-router-link>\n      <div id=\"content_link\">\n        <ion-router-link href=\"/register\" class=\"link1 ion-float-left\">No soy socio.&nbsp;</ion-router-link><ion-router-link href=\"/register\" class=\"link2 ion-float-left\">Necesito registrarme</ion-router-link>\n        <!-- <ion-button type=\"submit\" size=\"small\"  (click)=\"onClickRegisterß()\">\n          <span class=\"link1\">No soy socio. </span>&nbsp;  \n        </ion-button> -->\n      </div>\n    </div>\n    \n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "X3zk":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function X3zk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "euwS");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "34Y5");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "euwS":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function euwS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "34Y5");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "r67e":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function r67e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#login_form {\n  padding: 0 42px;\n}\n\n.logo2 {\n  margin: 130px auto 55px;\n  display: block;\n}\n\nion-item {\n  border-radius: 6px !important;\n  border: none !important;\n  --background: #EFEFEF !important;\n  border: none !important;\n  height: 47px;\n}\n\nion-item {\n  margin-top: 20px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\nion-input {\n  height: 47px;\n  --placeholder-color: #707070;\n  --placeholder-opacity: 1;\n  color: #151515;\n  font-size: 17px;\n}\n\n.txtBtn1 {\n  padding: 0 40px !important;\n  font-size: 20px;\n  color: white;\n}\n\n.mt10 {\n  margin-top: 20px;\n  margin-right: 30px;\n}\n\nion-button {\n  background-color: #0F0E9F;\n}\n\n.error {\n  color: red;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFZLGVBQUE7QUFFWjs7QUFEQTtFQUFPLHVCQUFBO0VBQXdCLGNBQUE7QUFNL0I7O0FBTEE7RUFBUyw2QkFBQTtFQUE4Qix1QkFBQTtFQUF3QixnQ0FBQTtFQUFpQyx1QkFBQTtFQUF3QixZQUFBO0FBYXhIOztBQVpBO0VBQVMsZ0JBQUE7RUFBaUIsaUNBQUE7QUFpQjFCOztBQWhCQTtFQUFVLFlBQUE7RUFBYSw0QkFBQTtFQUE2Qix3QkFBQTtFQUF5QixjQUFBO0VBQWUsZUFBQTtBQXdCNUY7O0FBdkJBO0VBQVMsMEJBQUE7RUFBMkIsZUFBQTtFQUFnQixZQUFBO0FBNkJwRDs7QUE1QkE7RUFBTSxnQkFBQTtFQUFpQixrQkFBQTtBQWlDdkI7O0FBaENBO0VBQ0kseUJBQUE7QUFtQ0o7O0FBakNBO0VBQU8sVUFBQTtFQUFVLHFCQUFBO0FBc0NqQiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9naW5fZm9ybXtwYWRkaW5nOiAwIDQycHg7fVxuLmxvZ28ye21hcmdpbjogMTMwcHggYXV0byA1NXB4O2Rpc3BsYXk6IGJsb2NrO31cbmlvbi1pdGVte2JvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O2JvcmRlcjogbm9uZSAhaW1wb3J0YW50Oy0tYmFja2dyb3VuZDogI0VGRUZFRiAhaW1wb3J0YW50O2JvcmRlcjogbm9uZSAhaW1wb3J0YW50O2hlaWdodDogNDdweDt9XG5pb24taXRlbXttYXJnaW4tdG9wOiAyMHB4O2JveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTt9XG5pb24taW5wdXR7aGVpZ2h0OiA0N3B4Oy0tcGxhY2Vob2xkZXItY29sb3I6ICM3MDcwNzA7LS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO2NvbG9yOiAjMTUxNTE1O2ZvbnQtc2l6ZTogMTdweDt9XG4udHh0QnRuMXtwYWRkaW5nOiAwIDQwcHggIWltcG9ydGFudDtmb250LXNpemU6IDIwcHg7Y29sb3I6IHdoaXRlO31cbi5tdDEwe21hcmdpbi10b3A6IDIwcHg7bWFyZ2luLXJpZ2h0OiAzMHB4O31cbmlvbi1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBGMEU5Rjtcbn1cbi5lcnJvcntjb2xvcjpyZWQ7ZGlzcGxheTogaW5saW5lLWJsb2NrO31cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map