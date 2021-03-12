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
    notificaciones: any;
    cantidadNot: any = 0;
    cantidadOn:any;
    flag_viable_paqueteria:any = 0;
    flag_inventario:any = 0;
    cantidadMaximaProducto:any={};
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
                    let listaPrecio={idlistaprecio:app.lista_precio_id}
                    this.taskService.getCarritoActivoDetalles(carritoActivo[0].uuid_carrito,listaPrecio).subscribe(dataCarrito=>{
                            console.log("getCarritoActivoDetalles");
                            console.log(dataCarrito);
                            this.carritoProductos=dataCarrito;
                            for(let i=0;i<this.carritoProductos.length;i++){
                                this.taskService.validarImg(this.carritoProductos[i].url_img1).then(()=>{},e=>{this.carritoProductos[i].url_img1="../../assets/images/Icono_Reacsa.png"});
                            }
                        let cantidadCarrito=((carritoActivo[0].cantidad)?carritoActivo[0].cantidad:0);
                        this.nativeStorage.setItem('carrito', {cantidad: cantidadCarrito,uuid_carrito:carritoActivo[0].uuid_carrito})
                        .then(
                            () => {
                                console.log('Actualizado cantidad Carrito ==>'+ cantidadCarrito);
                                if(dataCarrito.length<1){
                                    this.router.navigate(['/principal']);
                                }
                                this.calcularTotales();
                                this.validarFlags();
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
        let cantidadUsuario = cantidad
        if(cantidad >0){
                this.nativeStorage.getItem('carrito')
                .then(
                    carrito => {
                        console.log("==CARRITO DATA==");
                        console.log(carrito);
                        console.log("uuid_carrito: "+carrito.uuid_carrito);
                        
                        this.taskService.getCantidadProducto(uuid_producto).subscribe(data =>{
                            console.log("CANTIDAD: "+data[0].cantidad);
                            if(data[0].cantidad<cantidad){
                                alert("La disponibilidad de este producto es de " + data[0].cantidad);
                                let cantidadData={cantidad: data[0].cantidad}
                                this.taskService.updProductoCarrito(carrito.uuid_carrito,uuid_producto,cantidadData).subscribe(()=>{
                                    this.actualizarListaProductosCarrito()
                                });
                            }else{
                                //alert("La cantidad normal es de " + cantidad);
                                let cantidadData={cantidad: cantidad}
                                this.taskService.updProductoCarrito(carrito.uuid_carrito,uuid_producto,cantidadData).subscribe(()=>{
                                    this.actualizarListaProductosCarrito()
                                }); 
                            }
                            // else{
                            //     this.taskService.updProductoCarrito(carrito.uuid_carrito,uuid_producto,cantidad).subscribe(()=>{
                            //         this.actualizarListaProductosCarrito()
                            //     });
                            // }
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
                    this.validarFlags();
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
            let precio=$(this).text().replace('$','');
            precio=precio.replace(',','');
            console.log(parseFloat(precio)+" * "+parseInt($("#cantidad_"+uuid_producto).val()));
            total = total + (precio * parseInt($("#cantidad_"+uuid_producto).val()))
            //total = total + (parseFloat($(this).text().replace('$','')) * parseInt($(".cantidad").val()))
        })
        console.log('==TOTAL==');
        console.log(total);
        this.nativeStorage.setItem('totalCompra',total).then(
            ()=>console.log("Se guardo el total de la compra"),
            error=>console.log("Error al guardar el total de la compra")
        );
        var t = total.toLocaleString(undefined,{ minimumFractionDigits: 2 });
        $(".subtotal_numero").text("$ " + t);
        $(".total_btnpago").text(t);
    }
    ngOnInit() {
    }
    mas(uuid_producto,producto){
        let cantidad = producto.cantidad +=1;
        // let cantidadMax=this.cantidadMaximaProducto[uuid_producto];
        // console.log("Cantidad maxima:"+this.cantidadMaximaProducto[uuid_producto]);
        //if(cantidad<=parseInt(cantidadMax)){
            this.updCantidad(uuid_producto,cantidad);
        // }else{
        //     alert("La cantidad máxima de este producto es de "+cantidadMax)
        //     this.updCantidad(uuid_producto,cantidadMax);
        // }
    }
    menos(uuid_producto,producto){
         if(producto.cantidad>=1){
            let cantidad = producto.cantidad -=1;
            this.updCantidad(uuid_producto,cantidad);
        }
    }
    validarFlags(){
        this.nativeStorage.getItem('carrito')
        .then(
            carrito => {
                console.log("==CARRITO DATA==");
                console.log(carrito);
                console.log("uuid_cliente: "+carrito.uuid_carrito);
                this.nativeStorage.getItem('app')
                .then(
                    app => {
                        let listaPrecio={idlistaprecio:app.lista_precio_id};
                        this.taskService.getCarritoActivoDetalles(carrito.uuid_carrito,listaPrecio).subscribe(dataCarrito=>{
                        console.log("getCarritoActivoDetalles");
                        console.log(dataCarrito);
                        this.carritoProductos=dataCarrito;
                        this.flag_viable_paqueteria = 0
                        this.flag_inventario = 0
                        for(let i=0;i<this.carritoProductos.length;i++){
                            this.cantidadMaximaProducto[this.carritoProductos[i].uuid_producto]=this.carritoProductos[i].inventario;
                            this.taskService.validarImg(this.carritoProductos[i].url_img1).then(()=>{},e=>{this.carritoProductos[i].url_img1="../../assets/images/Icono_Reacsa.png"});
                            // if(this.carritoProductos[i].viable_paqueteria==1){//No es un gas
                            //     this.flag_viable_paqueteria = 0
                            // }
                            if(this.carritoProductos[i].viable_paqueteria==0){//Es un gas
                                this.flag_viable_paqueteria = 1
                            }
                            if(this.carritoProductos[i].inventario==0){
                                this.flag_inventario = 1
                            }
                        }
                        console.log("==CANTIDAD MAXIMA PRODUCTO==");
                        console.log(this.cantidadMaximaProducto);
                        console.log("flag_viable_paqueteria:"+this.flag_viable_paqueteria)
                        console.log("flagInventario:"+this.flag_inventario)
                        //this.calcularTotales();
                    });
                    },
                    error => console.error("NO HAY UUID_CLIENTE")
                );
            },
            error =>{
                 console.error("NO HAY DATOS DEL CARRITO");
            }
        );
    }
    ionViewWillEnter() {
        this.validarFlags();
        setTimeout(()=>{ this.calcularTotales(); }, 400);
    }
    ionViewDidEnter() {
        this.validarFlags();
        setTimeout(()=>{ this.calcularTotales(); }, 400);
        //this.calcularTotales()

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
        this.router.navigate(['/editarperfil']);
    }
    onclickProducto(){
        this.router.navigate(['/producto']);
    }
    onClickCarrito(){
        this.router.navigate(['/carrito']);
    }
    onClickCheckout(){
        console.log("flag_inventario carrito: "+this.flag_inventario)
        console.log("flag_viable_paqueteria carrito: "+this.flag_viable_paqueteria)
        this.router.navigate(['/checkout'], {
            queryParams: {
                subtotal: this.subtotal,
                flag_inventario:this.flag_inventario,
                flag_viable_paqueteria:this.flag_viable_paqueteria,
                url: this.router.url
            }
        });  
  }

}
