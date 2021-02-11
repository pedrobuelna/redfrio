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
        loop: true,
        autoplay:3000,
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
    notificaciones: any;
    cantidadNot: any;
    banners: any;
    cantidadActualCarrito: number;
    AppData: any[] = [];
    subscription:any;

    constructor(
        private router: Router,
        private renderer: Renderer2,
        private taskService: TaskService,
        private network: Network,
        private platform: Platform,
        public navCtrl: NavController,
        private nativeStorage: NativeStorage
    ) {
        // this.platform.ready().then(() => {
        //     let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
        //         console.log('network was disconnected :-(');
        //         this.ionLoader.showLoader();
        //         //alert("Desconectado a Inernet");
        //         //this.router.navigate(['/sinconexion']);
        //     });
        //     //disconnectSubscription.unsubscribe();
        //     let connectSubscription = this.network.onConnect().subscribe(() => {
        //         console.log('network was connected :-)');
        //         this.ionLoader.hideLoader();
        //         // alert("Conectado a Inernet");
        //         //     this.nativeStorage.getItem('app')
        //         //     .then(
        //         //         app => {
        //         //             //this.router.navigate(['/principal']);
        //         //         },
        //         //         error => {
        //         //             this.router.navigate(['/home']);
        //         //         }
        //         //     );
                
        //         //this.navCtrl.pop();
        //     });
        //     //connectSubscription.unsubscribe();
        // });
    }
    addMyClass() {
        //this.myButton.nativeElement.classList.add("my-class"); //BAD PRACTICE
        this.renderer.addClass(this.splash.nativeElement, "quitSplash");
    }
    ngOnInit() {
        // this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {
        //     // do on back button click
        //     alert("NO!!");
        // });
        setTimeout(() => {
            this.addMyClass()
        }, 1500);
        this.taskService.getAllBanners()
            .subscribe(banners => {
                this.banners = banners;
                console.log(banners)
            });
        this.taskService.getProductosDestadados()
            .subscribe(productos2 => {
                this.productos2 = productos2;
                console.log(productos2);
                console.log("imagenes...");
                console.log("images lenght :" +this.productos2.length);
                for(let i=0;i<this.productos2.length;i++){
                    console.log("index : "+i);
                    console.log(this.productos2[i]);
                    this.taskService.validarImg(this.productos2[i].url_img1).then(()=>{},e=>{this.productos2[i].url_img1="../../assets/images/no-image.png"});
                }
            });
        this.taskService.getNotificacionesNoLeidas()
            .subscribe(notificaciones => {
                this.notificaciones = notificaciones;
                this.cantidadNot = this.notificaciones.length
            });
    }
    //ionViewWillEnter() {
    ionViewWillLeave() {
        // this.subscription.unsubscribe();
    }
    ionViewDidEnter(){
        // this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {
        //     // do on back button click
        //     alert("NO!!");
        // });
        
        // this.network.onDisconnect().subscribe(() => {
        //   console.log('network was disconnected :-(');
        //   alert("FirstPage onDisconnect oninit");
        //   // this.navCtrl.navigateRoot(['/principal']);
        //   this.navCtrl.navigateRoot(['/sinconexion']);

        //  });
        //  this.network.onConnect().subscribe(() => {
        //   console.log('network was connected :-)');
        //   alert("FirstPage onConnect oninit");
        //   this.navCtrl.navigateBack;
        //  });
        this.taskService.getNotificacionesNoLeidas()
            .subscribe(notificaciones => {
                this.notificaciones = notificaciones;
                this.cantidadNot = this.notificaciones.length
            });

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