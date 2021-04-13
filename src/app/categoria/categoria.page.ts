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
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import {
    NativeStorage
} from '@ionic-native/native-storage/ngx';
import { LoadingController } from '@ionic/angular';
@Component({
    selector: 'app-categoria',
    templateUrl: './categoria.page.html',
    styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {
    ionicForm: FormGroup;
    constructor(private router: Router, private taskService: TaskService,private formBuilder: FormBuilder,
        private route: ActivatedRoute, private nativeStorage: NativeStorage,public loadingController: LoadingController) {
            this.ionicForm = this.formBuilder.group({
                busqueda: ['', []],
            })
        }
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
    isSubmitted:any;
    className:any
    hidePlus:any = "hide";
    hideMinus:any = "show";
    get errorControl() {
        return this.ionicForm.controls;
    }
    control(){
        if(this.className == 'mostrar_content'){
          this.className = '';
          this.hideMinus = 'show';
          this.hidePlus = 'hide';
        }else{
          this.className = 'mostrar_content';
          this.hideMinus = 'hide';
          this.hidePlus = 'show';
          
        }
    }
    showLoader() {
        this.loadingController.create({
          message: 'Buscando productos...'
        }).then((res) => {
          res.present();
        });
    }
    // Hide the loader if already created otherwise return error
    hideLoader() {
        this.loadingController.dismiss().then((res) => {
            console.log('Busqueda de productos terminada!', res);
        }).catch((error) => {
            console.log('error', error);
        });
    }
    submitForm() {
        this.isSubmitted = true;
        console.log(this.ionicForm.valid)
        if (!this.ionicForm.valid){
          console.log('Please provide all the required values! categorias')
          return false;
        } else {
            console.log('Exito')
            console.log(this.ionicForm.value.busqueda)
            this.router.navigate(['/resultadobusqueda'], {
                queryParams: {
                    consultaBusqueda: this.ionicForm.value.busqueda
                }
            });
        }
    }
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
                        this.hideLoader();
                        this.productos2 = productos2;
                        console.log(productos2)
                        this.totalproductos = productos2.length;
                        for (let i = 0; i < this.productos2.length; i++) {
                            console.log("index : " + i);
                            console.log(this.productos2[i]);
                            this.taskService.validarImg(this.productos2[i].url_img1).then(() => {}, e => {
                                this.productos2[i].url_img1 = "../../assets/images/Icono_Reacsa.png"
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
                        this.hideLoader();
                        this.productos2 = productos2;
                        this.totalproductos = productos2.length;
                        console.log(productos2);
                        for (let i = 0; i < this.productos2.length; i++) {
                            console.log("index : " + i);
                            console.log(this.productos2[i]);
                            this.taskService.validarImg(this.productos2[i].url_img1).then(() => {}, e => {
                                this.productos2[i].url_img1 = "../../assets/images/Icono_Reacsa.png"
                            });
                        }
                        
                    });
            },
            error => console.error("NO HAY UUID_CLIENTE")
        );
    }
    loadVista() {
        //this.showLoader();
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
                        this.hideLoader();
                        this.productos2 = productos2;
                        this.totalproductos = productos2.length;
                        for (let i = 0; i < this.productos2.length; i++) {
                            console.log("index : " + i);
                            console.log(this.productos2[i]);
                            this.taskService.validarImg(this.productos2[i].url_img1).then(() => {}, e => {
                                this.productos2[i].url_img1 = "../../assets/images/Icono_Reacsa.png"
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
                            this.hideLoader();
                            this.productos2 = productos2;
                            this.totalproductos = productos2.length;
                            for (let i = 0; i < this.productos2.length; i++) {
                                console.log("index : " + i);
                                console.log(this.productos2[i]);
                                this.taskService.validarImg(this.productos2[i].url_img1).then(() => {}, e => {
                                    this.productos2[i].url_img1 = "../../assets/images/Icono_Reacsa.png"
                                });
                            }
                            
                        });
                },
                error => console.error("NO HAY UUID_CLIENTE")
            );
            //alert("familia "+ x)
        }
    }
    ionViewDidLeave(){
        this.ionicForm.value.busqueda="";
        this.ionicForm.get('busqueda').setValue("");
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