import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router,
    NavigationExtras,
    ActivatedRoute
} from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {
    TaskService
} from '../services/task.service';
@Component({
    selector: 'app-ubicaciones',
    templateUrl: './ubicaciones.page.html',
    styleUrls: ['./ubicaciones.page.scss'],
})
export class UbicacionesPage implements OnInit {
    sucursales: any;
    tiendaSelected = 0;
    notificaciones: any;
    cantidadNot: any = 0;
    listas: any;
    constructor(private router: Router, private route: ActivatedRoute,private nativeStorage: NativeStorage,
        private taskService: TaskService) {}
    ngOnInit() {
        this.taskService.getAllTasks()
            .subscribe(sucursales => {
                this.sucursales = sucursales;
        });
        $("#categoria_select").val("0")
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
            },
            error => console.error("NO HAY UUID_CLIENTE")
        );
    }
    ionViewWillEnter(){
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
            },
            error => console.error("NO HAY UUID_CLIENTE")
        );
    }
    goSucursales(event) {
        this.router.navigate(['/sucursales'], {
            queryParams: {
                sucursal: event.detail.value
            }
        });
        event.detail.value = 0;
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
        this.router.navigate(['/editarperfil']);
    }
    onclickProducto() {
        this.router.navigate(['/producto']);
    }
    onClickCarrito() {
        this.router.navigate(['/carrito']);
    }
    clickOnSucursales() {
        this.router.navigate(['/sucursalcerca']);
    }
}