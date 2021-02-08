import {
    Component,
    ElementRef,
    OnInit,
    Renderer2,
    ViewChild,
} from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {
    IonSlides
} from '@ionic/angular';
import {
    Router
} from '@angular/router';
import {
    TaskService
} from '../services/task.service';

@Component({
    selector: 'app-principal',
    templateUrl: './principal.page.html',
    styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
    public items = ["../../assets/images/tarjetas-reacsa@3x2.jpeg",
        "../../assets/images/tarjetas-reacsa@3x.jpeg",
        "../../assets/images/../../assets/images/tarjetas-reacsa@3x2.jpeg",
        "../../assets/images/tarjetas-reacsa@3x.jpeg"
    ];
    @ViewChild("splash") splash: ElementRef;
    public sliderOptions = {
        initialSlide: 0,
        speed: 350,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true
        }
    };
    public items2 = ["../../assets/images/producto1@3x.png",
        "../../assets/images/producto1@3x.png"
    ];
    public sliderOptions2 = {
        initialSlide: 0,
        speed: 350,
        slidesPerView: 2,
        loop: true,
        centeredSlides: true,
        spaceBetween: 20
    };
    productos2: any;
    cantidadActualCarrito: number;
    AppData: any[] = [];
    
    constructor(
        private router: Router, 
        private renderer: Renderer2,
        private taskService: TaskService,
        private nativeStorage: NativeStorage
    ) {}
    addMyClass() {
        //this.myButton.nativeElement.classList.add("my-class"); //BAD PRACTICE
        this.renderer.addClass(this.splash.nativeElement, "quitSplash");
    }
    ngOnInit() {
        setTimeout(() => {
            this.addMyClass()
        }, 1500);
        this.taskService.getAllProductos()
            .subscribe(productos2 => {
                this.productos2 = productos2;
                console.log(productos2)
            });
    }
    ionViewWillEnter(){
        this.nativeStorage.getItem('carrito')
        .then(
            data => {
                console.log("WILL ENTER -->Se actualizo cantidad carrito ===>"+data.cantidad);
                this.cantidadActualCarrito=data.cantidad;
            },
            error => console.error(error)
        );
        //this.getCantidadCarrito();

    }
    ionViewDidEnter(){
        // this.nativeStorage.getItem('carrito')
        // .then(
        //     data => {
        //         console.log("DID ENTER -->Se actualizo cantidad carrito ===>"+data.cantidad);
        //         this.cantidadActualCarrito=data.cantidad;
        //     },
        //     error => console.error(error)
        // );
    }
    // getCantidadCarrito(){
    //     this.db.dbState().subscribe((res) => {
    //         if (res) {
    //             this.db.fetchAppData().subscribe(appData => {
    //                 if (appData.length > 0) {
    //                     this.AppData = appData;
    //                     if (this.AppData[0].login == "true") {
    //                         this.taskService.getCarritoActivo(this.AppData[0].id_usuario).subscribe(uuid_carrito_activo => {
    //                             if (uuid_carrito_activo[0].uuid_carrito == "") {
    //                                 let datosUsuario={
    //                                     uuid_cliente:this.AppData[0].id_usuario
    //                                 }
    //                                 this.taskService.setCarritoActivo(datosUsuario).subscribe(() => {
    //                                     this.taskService.getCarritoActivo(this.AppData[0].id_usuario).subscribe(nuevo_uuid_carrito_activo => {
    //                                         this.db.setCarritoActivo(nuevo_uuid_carrito_activo[0].uuid_carrito,nuevo_uuid_carrito_activo[0].cantidad).then(() => {
    //                                              this.updateCantidadCarrito();
    //                                         });
    //                                     });
    //                                 });
    //                             } else {
    //                                 this.db.setCarritoActivo(uuid_carrito_activo[0].uuid_carrito,uuid_carrito_activo[0].cantidad).then(() => {
    //                                      this.updateCantidadCarrito();
    //                                 });
    //                             }
    //                         });
    //                     }
    //                 }
    //             });
    //         }
    //     });
    // }
    // //TODO CHECAR VARIABLES LOCAL_STORAGE
    // updateCantidadCarrito(){
    //     this.db.dbState().subscribe((res) => {
    //         if (res) {
    //             this.db.getCarritoActivoData().then(()=>{
    //                 this.db.fetchCarritoActivoData().subscribe(carritoData => {
    //                     if(carritoData[0].cantidadCarrito){
    //                         this.cantidadActualCarrito=carritoData[0].cantidadCarrito;
    //                     }else this.cantidadActualCarrito=0;
    //                 });
    //             });
    //         }
    //     });
    // }
    retraso() {
        console.log("Retraso")
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
        this.router.navigate(['/register']);
    }
    onClickProducto(id) {
        this.router.navigate(['/producto'], {
            queryParams: {
                id: id
            }
        });
    }
    onClickCarrito() {
        this.router.navigate(['/carrito']);
    }
}