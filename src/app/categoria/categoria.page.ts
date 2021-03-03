import {
    Component,
    OnInit,
    ElementRef,
    ViewChild
} from '@angular/core';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    TaskService
} from '../services/task.service';
import {
    NativeStorage
} from '@ionic-native/native-storage/ngx';
@Component({
    selector: 'app-categoria',
    templateUrl: './categoria.page.html',
    styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {
    constructor(private router: Router, private taskService: TaskService,
        private route: ActivatedRoute, private nativeStorage: NativeStorage) {}
    @ViewChild('mylbl') mylblRef: ElementRef;
    productos2: any;
    familias: any;
    valorSelect: any;
    valorOrdenar: any;
    cantidadActualCarrito: number;
    x: string;
    notificaciones: any;
    cantidadNot: any = 0;
    listas: any;
    totalproductos:any;
    checkValue(event) {
        this.nativeStorage.getItem('app')
        .then(
            app => {
                console.log("==APP DATA==");
                console.log(app);
                console.log("uuid_cliente: " + app.uuid_cliente);
                let listaPrecio={idlistaprecio:app.lista_precio_id}
                console.log("valor: " + this.valorSelect)
                let id = parseInt(event.detail.value);
                let ordernarpor = $("#categoria_select2").val();
                this.taskService.getProductos(id, ordernarpor,listaPrecio)
                    .subscribe(productos2 => {
                        this.productos2 = productos2;
                        console.log(productos2)
                        this.totalproductos = productos2.length;
                        for (let i = 0; i < this.productos2.length; i++) {
                            console.log("index : " + i);
                            console.log(this.productos2[i]);
                            this.taskService.validarImg(this.productos2[i].url_img1).then(() => {}, e => {
                                this.productos2[i].url_img1 = "../../assets/images/no-image.png"
                            });
                        }
                    });
            },
            error => console.error("NO HAY UUID_CLIENTE")
        );
    }
    filtroDestacados(event) {
        this.nativeStorage.getItem('app')
        .then(
            app => {
                let listaPrecio={idlistaprecio:app.lista_precio_id}
                let id = $("#categoria_select").val();
                let ordernarpor = event.detail.value;
                console.log("id: " + id)
                console.log("ordenamiento: " + ordernarpor)
                this.taskService.getProductos(id, ordernarpor,listaPrecio)
                    .subscribe(productos2 => {
                        this.productos2 = productos2;
                        this.totalproductos = productos2.length;
                        console.log(productos2);
                        for (let i = 0; i < this.productos2.length; i++) {
                            console.log("index : " + i);
                            console.log(this.productos2[i]);
                            this.taskService.validarImg(this.productos2[i].url_img1).then(() => {}, e => {
                                this.productos2[i].url_img1 = "../../assets/images/no-image.png"
                            });
                        }
                    });
            },
            error => console.error("NO HAY UUID_CLIENTE")
        );
    }
    loadVista() {
        this.route.queryParams.subscribe(queryParams => this.x = queryParams.id);
        console.log("Valor queryParams");
        console.log(this.valorSelect);
        this.valorOrdenar = "&order=destacado.desc"
        this.taskService.getFamilias()
            .subscribe(familias => {
                this.familias = familias;
                console.log("Familias aaaa: "+familias)
                this.valorSelect = this.x;
            });
        if (this.x == '0') {
            //alert("TODOS")
            this.nativeStorage.getItem('app')
            .then(
                app => {
                    let listaPrecio={idlistaprecio:app.lista_precio_id}
                    this.taskService.getAllProductos(listaPrecio)
                    .subscribe(productos2 => {
                        this.productos2 = productos2;
                        this.totalproductos = productos2.length;
                        for (let i = 0; i < this.productos2.length; i++) {
                            console.log("index : " + i);
                            console.log(this.productos2[i]);
                            this.taskService.validarImg(this.productos2[i].url_img1).then(() => {}, e => {
                                this.productos2[i].url_img1 = "../../assets/images/no-image.png"
                            });
                        }

                    });
                },
                error => console.error("NO HAY UUID_CLIENTE")
            );
            
        } else {
            this.nativeStorage.getItem('app')
            .then(
                app => {
                    let listaPrecio={idlistaprecio:app.lista_precio_id}
                    let ordernarpor = $("#categoria_select2").val();
                    this.taskService.getProductos(this.x, ordernarpor,listaPrecio)
                        .subscribe(productos2 => {
                            this.productos2 = productos2;
                            this.totalproductos = productos2.length;
                            for (let i = 0; i < this.productos2.length; i++) {
                                console.log("index : " + i);
                                console.log(this.productos2[i]);
                                this.taskService.validarImg(this.productos2[i].url_img1).then(() => {}, e => {
                                    this.productos2[i].url_img1 = "../../assets/images/no-image.png"
                                });
                            }
                        });
                },
                error => console.error("NO HAY UUID_CLIENTE")
            );
            //alert("familia "+ x)
        }
    }
    ngOnInit() {
        this.loadVista();
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
    ionViewWillEnter() {
        this.loadVista();
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
        this.nativeStorage.getItem('carrito')
            .then(
                data => {
                    console.log("WILL ENTER -->Se actualizo cantidad carrito ===>" + data.cantidad);
                    this.cantidadActualCarrito = data.cantidad;
                    if (data.cantidad == 0) {
                        $(".carrito").hide();
                    } else {
                        $(".carrito").show();
                    }
                },
                error => {
                    $(".carrito").hide();
                    console.error(error);
                }
            );
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
    onclickProducto(id) {
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