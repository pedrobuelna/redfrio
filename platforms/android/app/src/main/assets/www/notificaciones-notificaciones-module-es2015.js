(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notificaciones-notificaciones-module"],{

/***/ "+6GH":
/*!*********************************************************!*\
  !*** ./src/app/notificaciones/notificaciones.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#content_notificacion .content2_notificaciones.last {\n  padding-bottom: 100px;\n}\n\n.txt2 {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vdGlmaWNhY2lvbmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFvRCxxQkFBQTtBQUVwRDs7QUFEQTtFQUFNLFlBQUE7QUFLTiIsImZpbGUiOiJub3RpZmljYWNpb25lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudF9ub3RpZmljYWNpb24gLmNvbnRlbnQyX25vdGlmaWNhY2lvbmVzLmxhc3R7cGFkZGluZy1ib3R0b206IDEwMHB4O31cbi50eHQye2NvbG9yOiBibGFjazt9Il19 */");

/***/ }),

/***/ "N0Fe":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notificaciones/notificaciones.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>notificaciones</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content id=\"content_notificacion\">\n  <!-- <p *ngIf=\"dataReturned\">{{dataReturned}}</p> -->\n  <div id=\"content1_notificaciones\" style=\"color: black;\">\n      <img src=\"../../assets/images/notificacion_negro.png\" alt=\"notificacion_negro\" style=\"display: inline-block;\">\n      <div style=\"display: inline-block;margin-left:5px\">\n        <span class=\"txtTitulo\">Notificaciones</span><br>\n        <span class=\"txtFecha\">{{currentDate}}</span>\n      </div>\n  </div>\n  <!-- <div class=\"content2_notificaciones\"  *ngFor=\"let list of lista;let i = index\" (click)=\"openModal(i)\">\n    <div class=\"subcontent_content2_notificaciones\"  class=\"abrir\">\n      <img src=\"{{list.titulo}}\" alt=\"notificacion_negro\" style=\"display: inline-block;\">\n      <div style=\"display: inline-block;margin-left:5px\">\n        <span class=\"txt1\">Bienvenido a la APP</span><br>\n        <span class=\"txt2\">20 de Nov. 2020</span>\n      </div>\n    </div>\n    <div class=\"content_texto\">\n      Bienvenido a la APP\n    </div>\n  </div> -->\n  <div class=\"content2_notificaciones noleido2\" *ngFor=\"let list of listas;let i = index\" (click)=\"openModal(i)\">\n    <div class=\"subcontent_content2_notificaciones\">\n      <img src=\"{{list.url_imagen}}\" alt=\"notificacion_negro\" style=\"display: inline-block;\">\n      <div style=\"display: inline-block;margin-left:5px\">\n        <span class=\"txt1\">{{list.titulo}}</span><br>\n        <span class=\"txt2\">Válido hasta: {{list.fecha}}</span>\n      </div>\n      <img *ngIf=\"list.status==1\" src=\"../../assets/images/noleido.png\" alt=\"noleido\">\n      \n    </div>\n    <div class=\"content_texto\">\n      {{list.descripcion}}\n    </div>\n  </div>\n  <!-- <div class=\"content2_notificaciones\" (click)=\"openModal()\">\n    <div class=\"subcontent_content2_notificaciones\">\n      <img src=\"../../assets/images/imgnot2.png\" alt=\"notificacion_negro\" style=\"display: inline-block;\">\n      <div style=\"display: inline-block;margin-left:5px\">\n        <span class=\"txt1\">Oferta de fin de semana</span><br>\n        <span class=\"txt2\">Válido hasta: 12 de Nov. 2020</span>\n      </div>\n      <img src=\"../../assets/images/ojo.png\" alt=\"ojo\">\n    </div>\n    <div class=\"content_texto\">\n      6 Meses sin intereses! <br>\n      Detalles de oferta.\n    </div>\n  </div>\n  <div class=\"content2_notificaciones visto2\">\n    <div class=\"subcontent_content2_notificaciones\">\n      <img src=\"../../assets/images/imgnot1.png\" alt=\"notificacion_negro\" style=\"display: inline-block;\">\n      <div style=\"display: inline-block;margin-left:5px\">\n        <span class=\"txt1\">Mini Splits a 50%</span><br>\n        <span class=\"txt2\">Válido hasta: 05 de Dic. 2020</span>\n      </div>\n      <img src=\"../../assets/images/visto.png\" alt=\"visto\">\n    </div>\n    <div class=\"content_texto\">\n      Mini Splits a mitad de precio normal. <br>\n      Detalles de oferta.\n    </div>\n  </div>\n  <div class=\"content2_notificaciones last noleido2\">\n    <div class=\"subcontent_content2_notificaciones\">\n      <img src=\"../../assets/images/imgnot1.png\" alt=\"notificacion_negro\" style=\"display: inline-block;\">\n      <div style=\"display: inline-block;margin-left:5px\">\n        <span class=\"txt1\">Ahorra 20% en todos los <br> compresores en existencia</span>\n      </div>\n      <img src=\"../../assets/images/noleido.png\" alt=\"noleido\">\n    </div>\n    <div class=\"content_texto\">\n      Mini Splits a mitad de precio normal. <br>\n      Detalles de oferta\n    </div>\n  </div> -->\n  <div class=\"content_menu\">\n    <ul>\n      <li>\n        <img src=\"../../assets/images/alertas_menu.png\" (click)=\"onclickNotificaciones()\">\n        <span class=\"cantidad\" *ngIf=\"cantidadNot!=0\">{{cantidadNot}}</span>\n      </li>\n      <li>\n        <img src=\"../../assets/images/ubicacion_menu.png\" (click)=\"onclickUbicaciones()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/reacsa_menu.png\" (click)=\"onclickMenu()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/listado_menu.png\" (click)=\"onclickCategorias()\">\n      </li>\n      <li>\n        <img src=\"../../assets/images/usuario_menu.png\" (click)=\"onclickUsuario()\">\n      </li>\n    </ul>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "QFHF":
/*!*****************************************************************!*\
  !*** ./src/app/notificaciones/notificaciones-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: NotificacionesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesPageRoutingModule", function() { return NotificacionesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _notificaciones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notificaciones.page */ "kNFv");




const routes = [
    {
        path: '',
        component: _notificaciones_page__WEBPACK_IMPORTED_MODULE_3__["NotificacionesPage"]
    }
];
let NotificacionesPageRoutingModule = class NotificacionesPageRoutingModule {
};
NotificacionesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificacionesPageRoutingModule);



/***/ }),

/***/ "kNFv":
/*!*******************************************************!*\
  !*** ./src/app/notificaciones/notificaciones.page.ts ***!
  \*******************************************************/
/*! exports provided: NotificacionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesPage", function() { return NotificacionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notificaciones_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notificaciones.page.html */ "N0Fe");
/* harmony import */ var _notificaciones_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notificaciones.page.scss */ "+6GH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modals_my_modal_my_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/my-modal/my-modal.page */ "Bkb5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/task.service */ "i6c7");









let NotificacionesPage = class NotificacionesPage {
    constructor(router, datePipe, taskService, modalController) {
        this.router = router;
        this.datePipe = datePipe;
        this.taskService = taskService;
        this.modalController = modalController;
        this.tasks = [];
        this.currentDate = new Date();
        this.uuid_cliente = "8e96af95-4575-47e9-a2aa-b56aba2f035f";
    }
    // lista: Array<any> = [
    //   {
    //     titulo: "Oferta de fin de semana",
    //     fecha:"12 de Nov. 2020",
    //     descripcion: "6 Meses sin intereses! <br> Detalles de oferta.",
    //     url_imagen: "../../assets/images/imgnot2.png",
    //     estatus:0
    //   },
    //   {
    //     titulo: "Oferta de fin de semana 2",
    //     fecha:"12 de Nov. 2020",
    //     descripcion: "6 Meses sin intereses! <br> Detalles de oferta.",
    //     url_imagen: "../../assets/images/imgnot1.png",
    //     estatus:0
    //   },
    //]
    openModal(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.uuid_notificacion = this.listas[index].uuid_notificacion;
            const modal = yield this.modalController.create({
                component: _modals_my_modal_my_modal_page__WEBPACK_IMPORTED_MODULE_6__["MyModalPage"],
                componentProps: {
                    "titulo": this.listas[index].titulo,
                    "descripcion": this.listas[index].descripcion,
                    "url_imagen": this.listas[index].url_imagen,
                    "fecha": this.listas[index].fecha,
                    "uuid_cliente": this.uuid_cliente,
                    "uuid_notificacion": this.listas[index].uuid_notificacion,
                    "status": this.listas[index].status,
                }
            });
            const Notificacion = {
                status: "1"
            };
            this.taskService.updateNotificacion(Notificacion, this.uuid_cliente, this.uuid_notificacion)
                .subscribe(listas => {
                this.taskService.getNotificaciones()
                    .subscribe(listas => {
                    this.listas = listas;
                });
                this.taskService.getNotificacionesNoLeidas()
                    .subscribe(notificaciones => {
                    this.notificaciones = notificaciones;
                    this.cantidadNot = this.notificaciones.length;
                });
                this.currentDate = this.datePipe.transform(this.currentDate, 'dd MMMM yyyy');
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    //alert('Modal Sent Data :'+ dataReturned);
                }
            });
            return yield modal.present();
        });
    }
    ngOnInit() {
        this.taskService.getNotificacionesNoLeidas()
            .subscribe(notificaciones => {
            this.notificaciones = notificaciones;
            this.cantidadNot = this.notificaciones.length;
        });
        this.taskService.getNotificaciones()
            .subscribe(listas => {
            this.listas = listas;
        });
        this.currentDate = this.datePipe.transform(this.currentDate, 'dd MMMM yyyy');
    }
    ionViewWillEnter() {
        this.taskService.getNotificacionesNoLeidas()
            .subscribe(notificaciones => {
            this.notificaciones = notificaciones;
            this.cantidadNot = this.notificaciones.length;
        });
    }
    onclickNotificaciones() {
        this.taskService.getNotificaciones()
            .subscribe(listas => {
            this.listas = listas;
        });
        this.taskService.getNotificacionesNoLeidas()
            .subscribe(notificaciones => {
            this.notificaciones = notificaciones;
            this.cantidadNot = this.notificaciones.length;
        });
        this.currentDate = this.datePipe.transform(this.currentDate, 'dd MMMM yyyy');
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
};
NotificacionesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_8__["TaskService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
NotificacionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notificaciones',
        template: _raw_loader_notificaciones_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
        styles: [_notificaciones_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotificacionesPage);



/***/ }),

/***/ "nMF9":
/*!*********************************************************!*\
  !*** ./src/app/notificaciones/notificaciones.module.ts ***!
  \*********************************************************/
/*! exports provided: NotificacionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesPageModule", function() { return NotificacionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notificaciones-routing.module */ "QFHF");
/* harmony import */ var _notificaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notificaciones.page */ "kNFv");







let NotificacionesPageModule = class NotificacionesPageModule {
};
NotificacionesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificacionesPageRoutingModule"]
        ],
        declarations: [_notificaciones_page__WEBPACK_IMPORTED_MODULE_6__["NotificacionesPage"]]
    })
], NotificacionesPageModule);



/***/ })

}]);
//# sourceMappingURL=notificaciones-notificaciones-module-es2015.js.map