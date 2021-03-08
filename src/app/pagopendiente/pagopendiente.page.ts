import {
    Component,
    OnInit
} from '@angular/core';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    TaskService
} from '../services/task.service';
import {
    NavController
} from '@ionic/angular';
import {
    NativeStorage
} from '@ionic-native/native-storage/ngx';

@Component({
    selector: 'app-pagopendiente',
    templateUrl: './pagopendiente.page.html',
    styleUrls: ['./pagopendiente.page.scss'],
})
export class PagopendientePage implements OnInit {
    tipo_envio: any;
    sucursal: any;
    direccion: any;
    paymentAmount: any;
    uuidCarrito: any;
    uuidCliente: any;
    constructor(private route: ActivatedRoute, private router: Router, public navCtrl: NavController, private nativeStorage: NativeStorage, private taskService: TaskService, ) {}

    ngOnInit() {}
    ionViewWillEnter() {
        let mpInfo;
        this.route.queryParams.subscribe(params => {
            this.tipo_envio = params.tipo_envio;
            this.sucursal = ((params.sucursal === 'undefined') ? 0 : params.sucursal);
            this.direccion = ((params.direccion === 'undefined') ? 0 : params.direccion);
            this.paymentAmount = params.total;
            this.uuidCarrito = params.uuidCarrito;
            this.uuidCliente = params.uuidCliente;
            mpInfo = {
                'collection_id': params.collection_id,
                'collection_status': params.collection_status,
                'payment_id': params.collection_idpayment_id,
                'status': params.status,
                'external_reference': params.external_reference,
                'payment_type': params.payment_type,
                'merchant_order_id': params.merchant_order_id,
                'preference_id': params.preference_id,
                'site_id': params.site_id,
                'processing_mode': params.processing_mode,
                'merchant_account_id': params.merchant_account_id
            }
            console.log("INFO");
            console.log(this.uuidCarrito);
            console.log(this.uuidCliente);
            console.log(this.tipo_envio);
            console.log(this.sucursal);
            console.log(this.direccion);
            console.log(this.paymentAmount);
            console.log("MPINFO");
            console.log(mpInfo);
            let updCarrito = {
                status: 2,
                id_tipo_pago: 1,
                total: this.paymentAmount,
                tipo_envio: this.tipo_envio,
                //uuid_direccion:this.direccion,
                //sucursal:this.sucursal,
                info_pago: mpInfo
            }
            if (this.sucursal != 0) {
                updCarrito['sucursal'] = this.sucursal;
            }
            if (this.direccion != 0) {
                updCarrito['uuid_direccion'] = this.direccion;
            }
            this.taskService.updCarritoInfo(this.uuidCarrito, updCarrito).subscribe(() => {
                this.taskService.setCarritoActivo({
                    uuid_cliente: this.uuidCliente
                }).subscribe(() => {
                    this.taskService.getCarritoActivo(this.uuidCliente).subscribe(carrito_activo_nuevo => {
                        console.log("Nuevo carrito activo.");
                        console.log(carrito_activo_nuevo);
                        this.nativeStorage.setItem('carrito', {
                            uuid_carrito: carrito_activo_nuevo[0].uuid_carrito,
                            cantidad: 0
                        }).then(
                            () => console.log('todoFine'),
                            error => console.error('Error alguardar nuevo carrito', error)
                        );
                    });
                });
            });
        });
    }
}