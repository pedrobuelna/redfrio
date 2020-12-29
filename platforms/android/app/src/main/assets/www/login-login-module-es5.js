(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content>\n  <form id=\"login_form\" [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n    <img src=\"assets/images/logo2.png\" alt=\"logo_login\" class=\"logo2\">\n    <ion-item lines=\"full\" lines=\"none\">\n      <ion-input type=\"email\" formControlName=\"correo\" required class=\"inputs\" placeholder=\"Email\"></ion-input>\n    </ion-item>\n    <!-- Error messages -->\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.correo.errors?.required\">\n      Campo Email requerido.\n    </span>\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.correo.errors?.pattern\">\n      Formato debe ser correo@dominio.com.\n    </span>\n    <ion-item lines=\"full\" lines=\"none\" >\n      <ion-input type=\"password\" formControlName=\"password\" required class=\"inputs\" placeholder=\"Password\"></ion-input>\n    </ion-item>\n    <!-- Error messages -->\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.required\">\n      Campo Password requerido.\n    </span>\n    <span class=\"error ion-padding\"  *ngIf=\"isSubmitted && errorControl.password.errors?.minlength\">\n      El Password debe tener minimo 6 caractéres.\n    </span>\n    <!-- <span class=\"error ion-padding\"  *ngIf=\"isSubmitted && errorControl.password.errors?.pattern\">\n      El Password debe contener 6 caracteres con 1 mayuscula una minuscula y in caracter raro no importa el orden.\n    </span> -->\n    <div id=\"boton_content\">\n      <ion-button type=\"submit\" color=\"color1\">\n        <span class=\"txtBtn1\">Login</span>\n      </ion-button>\n      <!-- <a  [routerLink]=\"['/forgot-password']\" class=\"small-text\">Forgot Password?</a> -->\n      <!-- <ion-button type=\"submit\" size=\"small\"  >\n        \n      </ion-button> -->\n      <ion-router-link class=\"link1 ion-float-right mt10\">Ayuda</ion-router-link>\n      <div id=\"content_link\">\n        <ion-router-link href=\"/register\" class=\"link1 ion-float-left\">No soy socio.&nbsp;</ion-router-link><ion-router-link href=\"/register\" class=\"link2 ion-float-left\">Necesito registrarme</ion-router-link>\n        <!-- <ion-button type=\"submit\" size=\"small\"  (click)=\"onClickRegisterß()\">\n          <span class=\"link1\">No soy socio. </span>&nbsp;  \n        </ion-button> -->\n      </div>\n    </div>\n    \n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/login/login-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

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
    "./src/app/login/login.module.ts":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

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
    "./src/app/login/login.page.scss":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#login_form {\n  padding: 0 42px;\n}\n\n.logo2 {\n  margin: 130px auto 55px;\n  display: block;\n}\n\nion-item {\n  border-radius: 6px !important;\n  border: none !important;\n  --background: #EFEFEF !important;\n  border: none !important;\n  height: 47px;\n}\n\nion-item {\n  margin-top: 20px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\nion-input {\n  height: 47px;\n  --placeholder-color: #707070;\n  --placeholder-opacity: 1;\n  color: #151515;\n  font-size: 17px;\n}\n\n.txtBtn1 {\n  padding: 0 40px !important;\n  font-size: 20px;\n  color: white;\n}\n\n.mt10 {\n  margin-top: 20px;\n  margin-right: 30px;\n}\n\n.error {\n  color: red;\n  display: inline-block;\n}\n\nion-button {\n  background-color: #0F0E9F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVksZUFBQTtBQUVaOztBQURBO0VBQU8sdUJBQUE7RUFBd0IsY0FBQTtBQU0vQjs7QUFMQTtFQUFTLDZCQUFBO0VBQThCLHVCQUFBO0VBQXdCLGdDQUFBO0VBQWlDLHVCQUFBO0VBQXdCLFlBQUE7QUFheEg7O0FBWkE7RUFBUyxnQkFBQTtFQUFpQixpQ0FBQTtBQWlCMUI7O0FBaEJBO0VBQVUsWUFBQTtFQUFhLDRCQUFBO0VBQTZCLHdCQUFBO0VBQXlCLGNBQUE7RUFBZSxlQUFBO0FBd0I1Rjs7QUF2QkE7RUFBUywwQkFBQTtFQUEyQixlQUFBO0VBQWdCLFlBQUE7QUE2QnBEOztBQTVCQTtFQUFNLGdCQUFBO0VBQWlCLGtCQUFBO0FBaUN2Qjs7QUFoQ0E7RUFBTyxVQUFBO0VBQVUscUJBQUE7QUFxQ2pCOztBQXBDQTtFQUNJLHlCQUFBO0FBdUNKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2luX2Zvcm17cGFkZGluZzogMCA0MnB4O31cbi5sb2dvMnttYXJnaW46IDEzMHB4IGF1dG8gNTVweDtkaXNwbGF5OiBibG9jazt9XG5pb24taXRlbXtib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtib3JkZXI6IG5vbmUgIWltcG9ydGFudDstLWJhY2tncm91bmQ6ICNFRkVGRUYgIWltcG9ydGFudDtib3JkZXI6IG5vbmUgIWltcG9ydGFudDtoZWlnaHQ6IDQ3cHg7fVxuaW9uLWl0ZW17bWFyZ2luLXRvcDogMjBweDtib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7fVxuaW9uLWlucHV0e2hlaWdodDogNDdweDstLXBsYWNlaG9sZGVyLWNvbG9yOiAjNzA3MDcwOy0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtjb2xvcjogIzE1MTUxNTtmb250LXNpemU6IDE3cHg7fVxuLnR4dEJ0bjF7cGFkZGluZzogMCA0MHB4ICFpbXBvcnRhbnQ7Zm9udC1zaXplOiAyMHB4O2NvbG9yOiB3aGl0ZTt9XG4ubXQxMHttYXJnaW4tdG9wOiAyMHB4O21hcmdpbi1yaWdodDogMzBweDt9XG4uZXJyb3J7Y29sb3I6cmVkO2Rpc3BsYXk6IGlubGluZS1ibG9jazt9XG5pb24tYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRjBFOUY7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/login/login.page.ts":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(router, formBuilder) {
          _classCallCheck(this, LoginPage);

          this.router = router;
          this.formBuilder = formBuilder;
          this.isSubmitted = false;
          this.ionicForm = this.formBuilder.group({
            correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
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
              this.router.navigate(['/principal']);
            }
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
            this.router.navigate(['/principal']);
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map