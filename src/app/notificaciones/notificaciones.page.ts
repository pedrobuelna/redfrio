import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router
} from '@angular/router';
import {
    ModalController
} from '@ionic/angular';
import {
    MyModalPage
} from '../modals/my-modal/my-modal.page';
import {
    DatePipe
} from '@angular/common';
import {
    TaskService
} from '../services/task.service';
import {
    Notificacion
} from '../interfaces/task';
import {
    NativeStorage
} from '@ionic-native/native-storage/ngx';
@Component({
    selector: 'app-notificaciones',
    templateUrl: './notificaciones.page.html',
    styleUrls: ['./notificaciones.page.scss'],
    providers: [DatePipe]
})
export class NotificacionesPage implements OnInit {
    dataReturned: any;
    tasks: Notificacion[] = [];
    notificaciones: any;
    cantidadNot: any = 0;
    constructor(
        private router: Router,
        private datePipe: DatePipe,
        private taskService: TaskService,
        public modalController: ModalController,
        private nativeStorage: NativeStorage) {

    }
    currentDate: any = new Date();
    uuid_cliente: any ;
    uuid_notificacion: any;
    listas: any;
    cantidadOn:any;
    listas2:any;
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
    async openModal(index,idNotificacion,uuidcliente) {
        const modal = await this.modalController.create({
            component: MyModalPage,
            componentProps: {
                "titulo": this.listas2[index].titulo,
                "descripcion": this.listas2[index].descripcion,
                "url_imagen": this.listas2[index].url_imagen,
                "fecha": this.listas2[index].fecha,
                "uuid_cliente": this.uuid_cliente,
                "uuid_notificacion": this.listas2[index].uuid_notificacion,
                "status": this.listas2[index].status,
            }
        });
        const Notificacion = {
            status: "1"
        };
        this.taskService.updateNotificacion(Notificacion, uuidcliente, idNotificacion)
            .subscribe(listas => {
                
                this.nativeStorage.getItem('app')
                .then(
                    app => {
                        console.log("==APP DATA==");
                        console.log(app);
                        console.log("uuid_cliente: " + app.uuid_cliente);
                        this.taskService.getNotificaciones(app.uuid_cliente)
                            .subscribe(listas => {
                                this.listas = listas;
                                this.cantidadOn = this.listas.length
                                //ok pedro
                            });
                        this.taskService.getNotificacionesNoLeidas(app.uuid_cliente)
                        .subscribe(notificaciones => {
                            this.notificaciones = notificaciones;
                            this.cantidadNot = this.notificaciones.length
                        });
                    },
                    error => console.error("NO HAY UUID_CLIENTE")
                );
                var fecha = new Date();
                var options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                };
                this.currentDate = fecha.toLocaleDateString("es-ES")

            });

        modal.onDidDismiss().then((dataReturned) => {
            if (dataReturned !== null) {
                this.dataReturned = dataReturned.data;
                //alert('Modal Sent Data :'+ dataReturned);
            }
        });

        return await modal.present();

    }
    ngOnInit() {
        var fecha = new Date();
        var options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        this.currentDate = fecha.toLocaleDateString("es-ES")
        this.nativeStorage.getItem('app')
            .then(
                app => {
                    console.log("==APP DATA==");
                    console.log(app);
                    console.log("uuid_cliente: " + app.uuid_cliente);
                    this.taskService.getNotificaciones(app.uuid_cliente)
                        .subscribe(listas => {
                            this.listas = listas;
                            this.cantidadOn = this.listas.length
                            //ok pedro
                        });
                    this.taskService.getNotificacionesNoLeidas(app.uuid_cliente)
                    .subscribe(notificaciones => {
                        this.notificaciones = notificaciones;
                        this.cantidadNot = this.notificaciones.length
                    });
                    this.taskService.getNotificacionesModal(app.uuid_cliente)
                    .subscribe(listas => {
                        //this.listas = listas;
                        this.listas2 = listas;
                        //this.cantidadOn = this.listas.length
                    });
                },
                error => console.error("NO HAY UUID_CLIENTE")
            );
    }
    ionViewWillEnter() {
        this.nativeStorage.getItem('app')
        .then(
            app => {
                console.log("==APP DATA==");
                console.log(app);
                console.log("uuid_cliente: " + app.uuid_cliente);
                this.taskService.getNotificaciones(app.uuid_cliente)
                    .subscribe(notificaciones => {
                        this.listas = notificaciones;
                        //this.cantidadNot = this.notificaciones.length
                    });
                this.taskService.getNotificacionesNoLeidas(app.uuid_cliente)
                .subscribe(notificaciones => {
                    this.notificaciones = notificaciones;
                    this.cantidadNot = this.notificaciones.length
                });
                this.taskService.getNotificacionesModal(app.uuid_cliente)
                .subscribe(listas => {
                    //this.listas = listas;
                    this.listas2 = listas;
                    //this.cantidadOn = this.listas.length
                });
            },
            error => console.error("NO HAY UUID_CLIENTE")
        );
    }
    onclickNotificaciones() {
        this.nativeStorage.getItem('app')
            .then(
                app => {
                    console.log("==APP DATA==");
                    console.log(app);
                    console.log("uuid_cliente: " + app.uuid_cliente);
                    this.taskService.getNotificaciones(app.uuid_cliente)
                        .subscribe(listas => {
                            this.listas = listas;
                            this.cantidadOn = this.listas.length
                            //ok pedro
                        });
                    this.taskService.getNotificacionesNoLeidas(app.uuid_cliente)
                    .subscribe(notificaciones => {
                        this.notificaciones = notificaciones;
                        this.cantidadNot = this.notificaciones.length
                    });
                },
                error => console.error("NO HAY UUID_CLIENTE")
            );
        var fecha = new Date();
        var options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        console.log(
            fecha.toLocaleDateString("es-ES")
        );
        this.currentDate = fecha.toLocaleDateString("es-ES")
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
        this.router.navigate(['/editarperfil']);
    }
}