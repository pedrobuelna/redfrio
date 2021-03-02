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
                        this.carritoProductos=dataCarrito;
                        let cantidadCarrito=((carritoActivo[0].cantidad)?carritoActivo[0].cantidad:0);
                        this.nativeStorage.setItem('carrito', {cantidad: cantidadCarrito,uuid_carrito:carritoActivo[0].uuid_carrito})
                        .then(
                            () => {
                                console.log('Actualizado cantidad Carrito ==>'+ cantidadCarrito);
                                if(dataCarrito.length<1){
                                    this.router.navigate(['/principal']);
                                }
                                this.calcularTotales();
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

    // mas(uuid_producto){
    //     let x=0;
    //     let cantidad=0;
    //     $(".subcontent_carrito .mas").click(function(i){
    //         console.log("JALA PERRO "+$(this).attr("attr-a"))
    //         cantidad = parseInt($(this).parent().parent().parent().parent().parent().find(".cantidad").val());
    //         cantidad = cantidad + 1;
    //         console.log("CANTIDAD: "+cantidad)
    //         $(".cantidad").val(cantidad)
    //     })
//        this.updCantidad(uuid_producto,cantidad)
        // $(".subtotal_numero").text(x)
        // $(".subtotal_numero").text("$ "+x)
        // $(".total_btnpago").text(x)
        
        // $( ".cantidad" ).change(function() {
        //   let valselect;
        //   let x=0;
        //   $(".subcontent_carrito").each(function(i){
        //     valselect = parseInt($(this).find(".cantidad").val())
        //     console.log("valor de select " + i +" "+ valselect)
        //     console.log("valor de cantidad "  + i +" "+ parseInt($(this).find(".precio").text()))
        //     console.log("Calculo total de cada 1 "  + i +" "+ parseInt(valselect) * parseInt($(this).find(".precio").text()))
        //     x=x+(parseInt(valselect) * parseInt($(this).find(".precio").text()))
        //   })
        //   $(".subtotal_numero").text("$ "+x)
        //   $(".total_btnpago").text(x)
        // }); 
    //}
    // menos(){
    //     let x=0;
    //     $(".precio").each(function(i){
    //         console.log("valor i: "+i)
    //       x=x-parseInt($(this).text())
    //       x=x-(parseInt($(this).text()) * parseInt($(".cantidad").val()))
    //       console.log("valor - : "+x)
    //     })
    //     console.log("valor:"+x)
    //     $(".subtotal_numero").text(x)
    //     $(".subtotal_numero").text("$ "+x)
    //     $(".total_btnpago").text(x)
        // $( ".cantidad" ).change(function() {
        //   let valselect;
        //   let x=0;
        //   $(".subcontent_carrito").each(function(i){
        //     valselect = parseInt($(this).find(".cantidad").val())
        //     console.log("valor de select " + i +" "+ valselect)
        //     console.log("valor de cantidad "  + i +" "+ parseInt($(this).find(".precio").text()))
        //     console.log("Calculo total de cada 1 "  + i +" "+ parseInt(valselect) * parseInt($(this).find(".precio").text()))
        //     x=x+(parseInt(valselect) * parseInt($(this).find(".precio").text()))
        //   })
        //   $(".subtotal_numero").text("$ "+x)
        //   $(".total_btnpago").text(x)
        // }); 
    //}
    ionViewWillEnter() {
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
                        for(let i=0;i<this.carritoProductos.length;i++){
                            this.taskService.validarImg(this.carritoProductos[i].url_img1).then(()=>{},e=>{this.carritoProductos[i].url_img1="../../assets/images/no-image.png"});
                        }
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
    ionViewDidEnter() {
        console.info("will did enter");
        setTimeout(()=>{ this.calcularTotales() }, 300);
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
    this.router.navigate(['/checkout'], {
        queryParams: {
          subtotal: this.subtotal
        }
    });  
  }

}
