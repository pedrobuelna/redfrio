import {
    Component
} from '@angular/core';
import {
    Router
} from '@angular/router';
import {
    TaskService
} from '../services/task.service';
import {
    AlertController
} from '@ionic/angular';
import { Task, uuid_usuario, carrito_activo } from '../interfaces/task';
import {
    DbService
} from '../services/db.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Platform } from '@ionic/angular';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    title = 'Inventario Taller';
    tasks: Task[] = [];
    nombre_refaccion: string;
    stock: string;
    locker: string;
    id_refaccion: string;
    alertCtrl: AlertController;
    AppData: any[] = [];

    constructor(
        private router: Router,
        public alertController: AlertController,
        private taskService: TaskService,
        private db: DbService,
        private nativeStorage: NativeStorage,
        public platform: Platform
    ) {
        this.platform.ready().then(() => {
            this.nativeStorage.getItem('app')
            .then(
                app => {
                    console.log("==APP DATA==");
                    console.log(app);
                    console.log("uuid_cliente: "+app.uuid_cliente);
                    this.getCarritoInfo(app.uuid_cliente);
                },
                error => console.error("NO HAY UUID_CLIENTE")
            );
        });
    }
    iraLogin() {
        this.router.navigate(['/login']);
    }
    getCarritoInfo(uuid_cliente:string){
        
        this.taskService.getCarritoActivo(uuid_cliente).subscribe(carrito_activo => {
            if(carrito_activo.length >0){
                console.log("==Carrito activo==");
                this.setCarritoData(carrito_activo[0]);
            }else{
                console.log("No existe un carrito activo.");
                console.log("Insertando un carrito para el usuario:" + uuid_cliente);
                this.taskService.setCarritoActivo({uuid_cliente}).subscribe(() => {
                    this.taskService.getCarritoActivo(uuid_cliente).subscribe(carrito_activo_nuevo => {
                        console.log("Nuevo carrito activo.");
                        console.log(carrito_activo_nuevo);
                        this.setCarritoData(carrito_activo_nuevo[0]);
                    });
                });
            }
        });
    }
    setCarritoData(carrito:any){
        this.nativeStorage.setItem('carrito', {uuid_carrito:carrito.uuid_carrito,cantidad: carrito.cantidad }).then(
            () => {
                console.log('Actualizado APPDATA ==>');
                console.log(carrito);
                this.router.navigate(['/principal']);
            },
            error => console.error('Error storing item', error)
        );
    }
    ngOnInit() {
        // this.nativeStorage.clear()
        // .then(
        //     data => console.log("Cleared  :: "+data),
        //     error => console.error(error)
        // );


        this.nativeStorage.getItem('app')
        .then(
            app => {
                console.log("==APP DATA==");
                console.log(app);
                console.log("uuid_cliente: "+app.uuid_cliente);
                this.getCarritoInfo(app.uuid_cliente);
            },
            error => console.error("NO HAY UUID_CLIENTE")
        );
    }
}