import {
    Component,
    ElementRef,
    OnInit,
    Renderer2,
    ViewChild,
} from '@angular/core';
import {
    NativeStorage
} from '@ionic-native/native-storage/ngx';
import {
    IonSlides,
    Platform,
    NavController
} from '@ionic/angular';
import {
    Router
} from '@angular/router';
import {
    TaskService
} from '../services/task.service';
import {
    Network
} from '@ionic-native/network/ngx';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
    selector: 'app-principal',
    templateUrl: './principal.page.html',
    styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

    public items = ["https://cdn.reacsa.mx/banners/banner2.jpeg",
        "https://cdn.reacsa.mx/banners/banner1.jpeg",
        "https://cdn.reacsa.mx/banners/banner2.jpeg",
        "https://cdn.reacsa.mx/banners/banner1.jpeg"
    ];
    @ViewChild("splash") splash: ElementRef;
    public sliderOptions = {
        initialSlide: 0,
        speed: 350,
        //loop: true,
        //autoplay: true,
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
        //loop: true,
        centeredSlides: true,
        spaceBetween: 20
    };

    productos2: any;
    notificaciones: any;
    cantidadNot: any = 0;
    listas: any;
    cantidadOn:any;
    banners: any;
    cantidadActualCarrito: number;
    AppData: any[] = [];
    subscription:any;
    constructor(
        public loadingController: LoadingController,
        private router: Router,
        private renderer: Renderer2,
        private taskService: TaskService,
        private network: Network,
        private platform: Platform,
        public navCtrl: NavController,
        private nativeStorage: NativeStorage,
        public alertController: AlertController
    ) {
    }
    // showLoader() {
    //     this.loadingController.create({
    //       message: 'Cargando por favor espere...'
    //     }).then((res) => {
    //       res.present();
    //     });
    
    //   }
      // Hide the loader if already created otherwise return error
    //   hideLoader() {
    //     this.loadingController.dismiss().then((res) => {
    //       console.log('Loading dismissed!', res);
    //     }).catch((error) => {
    //       console.log('error', error);
    //     });
    
    //   }
    
    addMyClass() {
        this.renderer.addClass(this.splash.nativeElement, "quitSplash");
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
                        //this.cantidadNot = this.notificaciones.length
                    });
                this.taskService.getNotificacionesNoLeidas(app.uuid_cliente)
                .subscribe(notificaciones => {
                    this.notificaciones = notificaciones;
                    this.cantidadNot = this.notificaciones.length
                });
                console.log('===========================');
                console.log('===PRODCUTOS DESTACADOS====');
                console.log('===========================');
                let listaPrecio={idlistaprecio:app.lista_precio_id}
                this.taskService.getProductosDestadados(listaPrecio)
                    .subscribe(productos2 => {
                        this.productos2 = productos2;
                        console.log(productos2);
                        console.log("imagenes...");
                        console.log("images lenght :" +this.productos2.length);
                        for(let i=0;i<this.productos2.length;i++){
                            console.log("index : "+i);
                            console.log(this.productos2[i]);
                            this.taskService.validarImg(this.productos2[i].url_img1).then(()=>{},e=>{this.productos2[i].url_img1="../../assets/images/Icono_Reacsa.png"});
                        }
                        //this.presentAlert();
                    });

            },
            error => console.error("NO HAY UUID_CLIENTE")
        );
        setTimeout(() => {
            this.addMyClass()
        }, 1500);
        this.taskService.getAllBanners()
            .subscribe(banners => {
                this.banners = banners;
                console.log(banners)
            });
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
    ionViewWillLeave() {
        
    }
    ionViewDidEnter(){
        this.nativeStorage.getItem('carrito')
        .then(
            data => {
                console.log("WILL ENTER -->Se actualizo cantidad carrito ===>" + data.cantidad);
                this.cantidadActualCarrito = data.cantidad;
                if(data.cantidad==0){
                    $(".carrito").hide();
                }else{
                    $(".carrito").show();
                }
            },
            error => {
                $(".carrito").hide();
                console.error(error);
            }
        );
    }
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
        this.router.navigate(['/editarperfil']); 
    }
    onClickProducto(id) {
        //this.showLoader();
        this.router.navigate(['/producto'], {
            queryParams: {
                id: id
            }
        });
        //this.hideLoader();
    }
    onClickCarrito() {
        this.router.navigate(['/carrito']);
    }
    
}