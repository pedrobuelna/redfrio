import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router
} from '@angular/router';
import {
    TaskService
} from '../services/task.service';
import {
    DbService
} from '../services/db.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { uuid_usuario } from '../interfaces/task';


@Component({
    selector: 'app-carrito',
    templateUrl: './carrito.page.html',
    styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

    constructor(
        private router: Router,
        private db: DbService,
        private taskService: TaskService,
        private nativeStorage: NativeStorage
    ) {}
    subtotal:any;
    listas: Array < any >= [{
            nombre: "YORK MINISPLIT",
            descripcion: "YHFE/YHGE SERIES COMPRESOR ON/OFF R-410A SOLO FRIO Y FRIO/CALOR 220V ",
            precio: 500
        },
        {
            nombre: "LG MINISPLIT",
            descripcion: "VR series inverter artcool wifi. 220v",
            precio: 500
        }
    ];
    carritoProductos: any[]=[];
    actualizarListaProductosCarrito(){
        this.nativeStorage.getItem('app')
        .then(
            app => {
                console.log("==APP DATA==");
                console.log(app);
                console.log("uuid_cliente: "+app.uuid_cliente);
                this.taskService.getCarritoActivo(app.uuid_cliente).subscribe(carritoActivo => {
                    this.taskService.getCarritoActivoDetalles(carritoActivo[0].uuid_carrito).subscribe(dataCarrito=>{
                        this.carritoProductos=dataCarrito;
                        this.calcularTotales();

                        let cantidadCarrito=((carritoActivo[0].cantidad)?carritoActivo[0].cantidad:0);
                        this.nativeStorage.setItem('carrito', {cantidad: cantidadCarrito,uuid_carrito:carritoActivo[0].uuid_carrito})
                        .then(
                            () => {
                                console.log('Actualizado cantidad Carrito ==>'+ cantidadCarrito);
                                if(dataCarrito.length<1){
                                    this.router.navigate(['/principal']);
                                }
                            },
                            error => console.error('Error storing item', error)
                        );
                    });
                });
            },
            error => {"NO HAY APP DATA"}
        );
    }
    updCantidad(uuid_producto:any,cantidad:number){
        if(cantidad >0){
            this.nativeStorage.getItem('carrito')
            .then(
                carrito => {
                    console.log("==CARRITO DATA==");
                    console.log(carrito);
                    console.log("uuid_carrito: "+carrito.uuid_carrito);
                    let cantidadData={cantidad:cantidad}
                    this.taskService.updProductoCarrito(carrito.uuid_carrito,uuid_producto,cantidadData).subscribe(()=>{
                        this.actualizarListaProductosCarrito()
                    });
                },
                error =>{
                    console.error("NO HAY UUID_CLIENTE");
                }
            );
        }else this.delete(uuid_producto);
    }
    delete(uuid_producto:any) {
        this.nativeStorage.getItem('carrito')
        .then(
            carrito => {
                console.log("==CARRITO DATA==");
                console.log(carrito);
                console.log("uuid_carrito: "+carrito.uuid_carrito);
                this.taskService.delProducto(carrito.uuid_carrito,uuid_producto).subscribe(()=>{
                    this.actualizarListaProductosCarrito();
                });
            },
            error =>{
                 console.error("NO HAY UUID_CLIENTE");
            }
        );

    }
    calcularTotales(){
        console.log("Obteniendo totales");
        
        let total = 0;
        $(".precio").each(function (i) {
            let uuid_producto=$(this).attr('id');
            console.log(parseFloat($(this).text().replace('$',''))+" * "+parseInt($("#cantidad_"+uuid_producto).val()));
            total = total + (parseFloat($(this).text().replace('$','')) * parseInt($("#cantidad_"+uuid_producto).val()))
            //total = total + (parseFloat($(this).text().replace('$','')) * parseInt($(".cantidad").val()))
        })

        $(".subtotal_numero").text("$ " + total);
        $(".total_btnpago").text(total);
    }
    ngOnInit() {}
    ionViewWillEnter() {
        this.nativeStorage.getItem('carrito')
        .then(
            carrito => {
                console.log("==CARRITO DATA==");
                console.log(carrito);
                console.log("uuid_cliente: "+carrito.uuid_carrito);
                this.taskService.getCarritoActivoDetalles(carrito.uuid_carrito).subscribe(dataCarrito=>{
                    console.log("getCarritoActivoDetalles");
                    console.log(dataCarrito);
                    this.carritoProductos=dataCarrito;
                    this.calcularTotales();
                });
            },
            error =>{
                 console.error("NO HAY DATOS DEL CARRITO");
            }
        );
    }
    ionViewDidEnter() {
        console.info("will did enter")
        this.calcularTotales()
    }
   onclickNotificaciones(){
        this.router.navigate(['/notificaciones']);
    }
    onclickUbicaciones(){
        this.router.navigate(['/ubicaciones']);
    }
    onclickMenu(){
        this.router.navigate(['/principal']);
    }
    onclickCategorias(){
        this.router.navigate(['/categorias']);
    }
    onclickUsuario(){
        this.router.navigate(['/register']);
    }
    onclickProducto(){
        this.router.navigate(['/producto']);
    }
    onClickCarrito(){
        this.router.navigate(['/carrito']);
    }
    onClickCheckout(){
    this.router.navigate(['/checkout'], {
        queryParams: {
          subtotal: this.subtotal
        }
    });  
  }

}
