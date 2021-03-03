import {
    Component,
    OnInit,
    ViewChild
} from '@angular/core';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import { Console } from 'console';
import {
    TaskService
} from '../services/task.service';
import {
    DbService
} from '../services/db.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { uuid_usuario } from '../interfaces/task';

@Component({
    selector: 'app-producto',
    templateUrl: './producto.page.html',
    styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
    
    idProducto:string;
    AppData: any[] = [];
    CarritoActivoData: any[]=[];
    disponibilidad:any;
    zonas:any;
    notificaciones: any;
    cantidadNot: any = 0;
    listas: any;
    public sliderOptions = {
        initialSlide: 0,
        slidesPerView: 1,
        autoplay: true,
        pagination: {
            clickable: true,
        }
    };
    @ViewChild('slides') slides;
    producto2: any;
    imgProducto:Array<string> = [];
    constructor(
        private router: Router,
        private taskService: TaskService,
        private route: ActivatedRoute,
        private db : DbService,
        private nativeStorage: NativeStorage
    ) {}
    moveSlide(slides,index) {
        console.log(slides)
        slides.slideTo(index)
    }
    ngOnInit() {
        this.nativeStorage.getItem('app')
        .then(
            app => {
                console.log("==APP DATA==");
                console.log(app);
                console.log("uuid_cliente: " + app.uuid_cliente);
                this.taskService.getNotificaciones(app.uuid_cliente)
                    .subscribe(notificaciones => {
                        this.listas = notificaciones;
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
        let x = "";
        this.route.queryParams.subscribe(queryParams => x = queryParams.id);
        //    console.log("x:" + x)
        this.idProducto=x;
        this.nativeStorage.getItem('app')
        .then(
            app => {
                console.log("==APP DATA==");
                console.log(app);
                console.log("uuid_cliente: " + app.uuid_cliente);
                this.taskService.getNotificaciones(app.uuid_cliente)
                    .subscribe(notificaciones => {
                        this.listas = notificaciones;
                    });
                this.taskService.getNotificacionesNoLeidas(app.uuid_cliente)
                .subscribe(notificaciones => {
                    this.notificaciones = notificaciones;
                    this.cantidadNot = this.notificaciones.length
                });
                let listaPrecio={idlistaprecio:app.lista_precio_id}
                this.taskService.getProducto(x,listaPrecio)
                    .subscribe(producto2 => {
                        this.producto2 = producto2;
                        console.log(producto2);
                        this.imgProducto=[];
                        this.taskService.validarImg(producto2[0].url_img1).then(()=>{
                            console.log("Img1 "+producto2[0].url_img1);
                            console.log("ok");
                            this.imgProducto.push(producto2[0].url_img1);
                        },e=>{
                            console.log("Img1 "+producto2[0].url_img1);
                            console.log("ER");
                            this.imgProducto.push("../../assets/images/no-image.png");
                        });
                        this.taskService.validarImg(producto2[0].url_img2).then(()=>{
                            console.log("Img2 "+producto2[0].url_img2);
                            console.log("ok");
                            this.imgProducto.push(producto2[0].url_img2);
                        },e=>{
                            console.log("Img2 "+producto2[0].url_img2);
                            console.log("ERR");
                        });
                        this.taskService.validarImg(producto2[0].url_img3).then(()=>{
                            console.log("Img3 "+producto2[0].url_img3);
                            console.log("ok");
                            this.imgProducto.push(producto2[0].url_img3);
                        },e=>{
                            console.log("Img3 "+producto2[0].url_img3);
                            console.log("ERR");
                        });
                        this.taskService.validarImg(producto2[0].url_img4).then(()=>{
                            console.log("Img4 "+producto2[0].url_img4);
                            console.log("ok");
                            this.imgProducto.push(producto2[0].url_img4);
                        },e=>{
                            console.log("Img4 "+producto2[0].url_img4);
                            console.log("ERR");
                            
                        });
                        this.taskService.validarImg(producto2[0].url_img5).then(()=>{
                            console.log("Img5 "+producto2[0].url_img5);
                            console.log("ok");
                            this.imgProducto.push(producto2[0].url_img5);
                        },e=>{
                            console.log("Img5 "+producto2[0].url_img5);
                            console.log("ER");
                        });
                        this.taskService.getSucursalesZonas().subscribe(zonas=>{
                            this.zonas=zonas;
                        });
                        
                        console.log(this.imgProducto);
                    });
            },
            error => console.error("NO HAY UUID_CLIENTE")
        );
    }
    getInventario($event){
        this.taskService.getDisponibilidadProducto(this.idProducto,$event.target.value).subscribe(disponibilidad=>{
            this.disponibilidad=disponibilidad;
        });
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
    setCarritoData(carrito:any){
        
        this.nativeStorage.setItem('carrito', {uuid_carrito:carrito.uuid_carrito,cantidad: carrito.cantidad }).then(
            () => {
                console.log('Actualizado APPDATA');
                console.log(carrito);
                this.router.navigate(['/carrito']);
            },
            error => console.error('Error storing item', error)
        );
    }
    getUuidCliente(){
        this.nativeStorage.getItem('app')
        .then(
            app => {
                console.log("==APP DATA==");
                console.log(app);
                console.log("uuid_cliente: "+app.uuid_cliente);
                let uuid_cliente=app.uuid_cliente
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
            },
            error =>{
                 console.error("NO HAY UUID_CLIENTE");
            }
        );
    }
    onClickCarrito() {
        this.nativeStorage.getItem('carrito')
        .then(
            carrito => {
                console.log("==CARRITO DATA==");
                console.log(carrito);
                this.nativeStorage.getItem('app')
                .then(
                    app => {
                        let listaPrecio={idlistaprecio:app.lista_precio_id}
                        this.taskService.getCarritoActivoDetalles(carrito.uuid_carrito,listaPrecio).subscribe(detallesCarrito=>{
                        let cantidad=0; 
                        let productoEncontrado=false;
                        console.log("Detalles carrito:");
                        console.log(detallesCarrito);
                        detallesCarrito.forEach(detalle => {
                            if(detalle.uuid_producto==this.idProducto){
                                cantidad=detalle.cantidad;
                                productoEncontrado=true;
                            }
                        });
                        if(productoEncontrado){
                            console.log("Se encontro el producto :"+this.idProducto);
                            let dataCantidad={
                                cantidad:(cantidad+1)
                                //cantidad:(cantidad+this.quantity)
                            }
                            this.taskService.updProductoCarrito(carrito.uuid_carrito,this.idProducto,dataCantidad).subscribe(()=>{
                                this.getUuidCliente()
                            });
                        }else{
                            console.log("No se encontro el producto :"+this.idProducto);
                            let dataSetProducto={
                                uuid_carrito:carrito.uuid_carrito,
                                uuid_producto:this.idProducto,
                                cantidad:1
                                //cantidad:this.quantity)
                            }
                            console.log("Insertando producto al carrito...");
                            console.log(dataSetProducto);
                            this.taskService.setProductoToCarrito(dataSetProducto).subscribe(()=>{
                                this.getUuidCliente()
                            });
                        }
                    });
                    },
                    error => console.error("NO HAY UUID_CLIENTE")
                );
            },
            error =>{
                 console.error("NO HAY UUID_CLIENTE");
            }
        );
        // console.log("GetCarritoActivo");
        // this.db.fetchCarritoActivoData().subscribe(carritoActivoData=>{
        //     console.log(carritoActivoData);
        //     this.CarritoActivoData=carritoActivoData;
        //     console.log("getCarritoActivoDetalles");
        //     this.taskService.getCarritoActivoDetalles(this.CarritoActivoData[0].uuid_carrito).subscribe(detallesCarrito=>{
        //         console.log(detallesCarrito);
        //         let cantidad=1; 
        //         let productoEncontrado=false;
        //         detallesCarrito.forEach(detalle => {
        //             if(detalle.uuid_producto==this.idProducto){
        //                 cantidad+=detalle.cantidad;
        //                 productoEncontrado=true;
        //                 console.log("Producto encontrado ==>"+detalle.uuid_producto)
        //             }
        //         });
        //         console.log("productoEncontrado ==>"+productoEncontrado);
        //         if(productoEncontrado){
        //             let cantidadData={
        //                 cantidad:cantidad
        //             }
        //             this.taskService.updProductoCarrito(this.CarritoActivoData[0].uuid_carrito,this.idProducto,cantidadData).subscribe(()=>{
        //                 this.router.navigate(['/carrito']);
        //             });
        //         }else{
        //             let dataSetProducto={
        //                 uuid_carrito:this.CarritoActivoData[0].uuid_carrito,
        //                 uuid_producto:this.idProducto,
        //                 cantidad:1
        //             }
        //             console.log(dataSetProducto);
        //             this.taskService.setProductoToCarrito(dataSetProducto).subscribe(()=>{
        //                 this.router.navigate(['/carrito']);
        //             });
        //         }
                
                
        //     });
            
        // });
        // this.nativeStorage.getItem('appData')
        // .then(
        //     data => {
        //         this.taskService.getCarritoActivo(data.uuid_usuario).subscribe(uuid_carrito_activo => {
        //         let cantidadCarrito=((uuid_carrito_activo[0].cantidad)?uuid_carrito_activo[0].cantidad:0);
        //         this.nativeStorage.setItem('carrito', {cantidad: cantidadCarrito })
        //         .then(
        //             () => console.log('Actualizado cantidad Carrito ==>'+ cantidadCarrito),
        //             error => console.error('Error storing item', error)
        //         );
        //     });
        //     },
        //     error => console.error(error)
        // );
        /*this.db.addProducto(this.idProducto,1).then((res)=>{
            this.router.navigate(['/carrito']);
        });*/
    }
}